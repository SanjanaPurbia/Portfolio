import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'motion/react'
import { hueHex } from '../lib/hue'

// Page background: a live "cluster map". A grid of nodes where pods light up and fade in the
// status hues, a rolling-deployment wave sweeps across every few seconds, and nodes near the
// pointer brighten. Drawn on one fixed canvas; never touches React state per frame.
const HUES = Object.values(hueHex)
const WAVE_EVERY = 9000 // ms between rollouts
const WAVE_DURATION = 2600
const FIRST_WAVE_AT = 500 // the first rollout plays with the hero entrance
const POD_SHARE = 0.08 // fraction of nodes lit at any time
const LENS_RADIUS = 210

type Pod = { i: number; hue: string; born: number; life: number }

export function ClusterField() {
  const ref = useRef<HTMLCanvasElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    let w = 0
    let h = 0
    let gap = 30
    let cols = 0
    let rows = 0
    let pods: Pod[] = []
    let baseColor = '' // read from --graphite in readTheme()
    let baseAlpha = 0.22
    let frame = 0
    let start = performance.now()
    const pointer = { x: -9999, y: -9999, active: false }

    const readTheme = () => {
      const css = getComputedStyle(document.documentElement)
      baseColor = css.getPropertyValue('--graphite').trim() || baseColor
      baseAlpha = css.colorScheme === 'dark' ? 0.38 : 0.32
    }

    const newPod = (now: number): Pod => ({
      i: Math.floor(Math.random() * cols * rows),
      hue: HUES[Math.floor(Math.random() * HUES.length)],
      born: now - Math.random() * 4000,
      life: 3000 + Math.random() * 3500,
    })

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      gap = w < 768 ? 26 : 30
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      cols = Math.ceil(w / gap) + 1
      rows = Math.ceil(h / gap) + 1
      const now = performance.now()
      pods = Array.from({ length: Math.round(cols * rows * POD_SHARE) }, () => newPod(now))
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

      // Every node, in one path.
      ctx.globalAlpha = baseAlpha
      ctx.fillStyle = baseColor
      ctx.beginPath()
      for (let r = 0; r < rows; r++)
        for (let c = 0; c < cols; c++) {
          const x = ox + c * gap
          const y = oy + r * gap
          ctx.moveTo(x + 1.7, y)
          ctx.arc(x, y, 1.7, 0, Math.PI * 2)
        }
      ctx.fill()

      // Pods: fade in and out like services coming up and down.
      for (let p = 0; p < pods.length; p++) {
        const pod = pods[p]
        const age = (now - pod.born) / pod.life
        if (age >= 1) {
          pods[p] = { ...newPod(now), born: now }
          continue
        }
        if (age < 0) continue
        const k = Math.sin(Math.PI * age)
        dot(ox + (pod.i % cols) * gap, oy + Math.floor(pod.i / cols) * gap, 2 + k * 2.2, pod.hue, 0.3 + k * 0.65)
      }

      // Rolling deployment: a diagonal band sweeps the grid, one hue per rollout.
      const t = now - start - FIRST_WAVE_AT
      if (!reduce && t >= 0) {
        const cycle = Math.floor(t / WAVE_EVERY)
        const progress = (t % WAVE_EVERY) / WAVE_DURATION
        if (progress <= 1) {
          const band = 190
          const span = w + h * 0.6
          const center = -band + progress * (span + band * 2)
          const hue = HUES[cycle % HUES.length]
          for (let r = 0; r < rows; r++)
            for (let c = 0; c < cols; c++) {
              const x = ox + c * gap
              const y = oy + r * gap
              const d = Math.abs(x + y * 0.6 - center)
              if (d < band) {
                const k = 1 - d / band
                dot(x, y, 1.7 + k * 3, hue, 0.15 + k * 0.85)
              }
            }
        }
      }

      // Pointer lens: nearby nodes grow and pick up a hue by angle, like a colour wheel.
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
              const angle = (Math.atan2(y - pointer.y, x - pointer.x) + Math.PI) / (Math.PI * 2)
              dot(x, y, 1.7 + k * 3.6, HUES[Math.floor(angle * HUES.length) % HUES.length], 0.2 + k * 0.75)
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

  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0" />
}
