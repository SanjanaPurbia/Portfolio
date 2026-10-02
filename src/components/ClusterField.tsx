import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'motion/react'
import { hueHex } from '../lib/hue'

// Page background: a quiet, monochrome "cluster map". A neutral grid of nodes that fades
// away from the top of the screen; nodes near the pointer darken slightly, and a soft
// brand-blue rollout sweeps across now and then. Colour stays on the content, not here.
// Drawn on one fixed canvas; never touches React state per frame.
const WAVE_COLOR = hueHex.cobalt
const WAVE_EVERY = 15000 // ms between rollouts
const WAVE_DURATION = 3600
const FIRST_WAVE_AT = 600 // the first rollout plays with the hero entrance
const LENS_RADIUS = 140

export function ClusterField() {
  const ref = useRef<HTMLCanvasElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    let w = 0
    let h = 0
    let gap = 32
    let cols = 0
    let rows = 0
    let dotColor = '' // read from --graphite in readTheme()
    let lensColor = '' // read from --ink in readTheme()
    let baseAlpha = 0.16
    let frame = 0
    let start = performance.now()
    const pointer = { x: -9999, y: -9999, active: false }

    const readTheme = () => {
      const css = getComputedStyle(document.documentElement)
      dotColor = css.getPropertyValue('--graphite').trim()
      lensColor = css.getPropertyValue('--ink').trim()
      baseAlpha = css.colorScheme === 'dark' ? 0.2 : 0.16
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      gap = w < 768 ? 28 : 32
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      cols = Math.ceil(w / gap) + 1
      rows = Math.ceil(h / gap) + 1
    }

    const dot = (x: number, y: number, r: number, color: string, alpha: number) => {
      ctx.globalAlpha = alpha
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.arc(x, y, r, 0, Math.PI * 2)
      ctx.fill()
    }

    const draw = (now: number) => {
      ctx.clearRect(0, 0, w, h)
      const ox = (w - (cols - 1) * gap) / 2
      const oy = (h - (rows - 1) * gap) / 2

      // Neutral grid. The fade (CSS mask on the canvas) keeps it a texture, not wallpaper.
      ctx.globalAlpha = baseAlpha
      ctx.fillStyle = dotColor
      ctx.beginPath()
      for (let r = 0; r < rows; r++)
        for (let c = 0; c < cols; c++) {
          const x = ox + c * gap
          const y = oy + r * gap
          ctx.moveTo(x + 1.1, y)
          ctx.arc(x, y, 1.1, 0, Math.PI * 2)
        }
      ctx.fill()

      // Rolling deployment: one soft brand-blue band crosses the grid, rarely.
      const t = now - start - FIRST_WAVE_AT
      if (!reduce && t >= 0) {
        const progress = (t % WAVE_EVERY) / WAVE_DURATION
        if (progress <= 1) {
          const band = 170
          const center = -band + progress * (w + h * 0.6 + band * 2)
          for (let r = 0; r < rows; r++)
            for (let c = 0; c < cols; c++) {
              const x = ox + c * gap
              const y = oy + r * gap
              const d = Math.abs(x + y * 0.6 - center)
              if (d < band) {
                const k = 1 - d / band
                dot(x, y, 1.1 + k * 0.9, WAVE_COLOR, k * 0.35)
              }
            }
        }
      }

      // Pointer: nearby nodes darken and grow a little. Monochrome, no colour wheel.
      if (pointer.active) {
        const c0 = Math.max(0, Math.floor((pointer.x - ox - LENS_RADIUS) / gap))
        const c1 = Math.min(cols - 1, Math.ceil((pointer.x - ox + LENS_RADIUS) / gap))
        const r0 = Math.max(0, Math.floor((pointer.y - oy - LENS_RADIUS) / gap))
        const r1 = Math.min(rows - 1, Math.ceil((pointer.y - oy + LENS_RADIUS) / gap))
        for (let r = r0; r <= r1; r++)
          for (let c = c0; c <= c1; c++) {
            const x = ox + c * gap
            const y = oy + r * gap
            const dist = Math.hypot(x - pointer.x, y - pointer.y)
            if (dist < LENS_RADIUS) {
              const k = 1 - dist / LENS_RADIUS
              dot(x, y, 1.1 + k * 1.1, lensColor, k * 0.3)
            }
          }
      }
      ctx.globalAlpha = 1
    }

    const loop = (now: number) => {
      draw(now)
      frame = requestAnimationFrame(loop)
    }

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      pointer.x = e.clientX
      pointer.y = e.clientY
      pointer.active = true
      if (reduce) draw(performance.now())
    }
    const onLeave = () => {
      pointer.active = false
      if (reduce) draw(performance.now())
    }
    const onVisibility = () => {
      cancelAnimationFrame(frame)
      if (!document.hidden && !reduce) frame = requestAnimationFrame(loop)
    }
    const onResize = () => {
      resize()
      if (reduce) draw(performance.now())
    }
    const onTheme = () => {
      readTheme()
      if (reduce) draw(performance.now())
    }

    readTheme()
    resize()
    start = performance.now()
    if (reduce) draw(start)
    else frame = requestAnimationFrame(loop)

    const themeObserver = new MutationObserver(onTheme)
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    const scheme = window.matchMedia('(prefers-color-scheme: dark)')
    scheme.addEventListener('change', onTheme)
    window.addEventListener('resize', onResize)
    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelAnimationFrame(frame)
      themeObserver.disconnect()
      scheme.removeEventListener('change', onTheme)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [reduce])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 [mask-image:radial-gradient(ellipse_120%_90%_at_50%_0%,#000_30%,transparent_85%)]"
    />
  )
}
