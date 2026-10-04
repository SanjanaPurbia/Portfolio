import { useEffect } from 'react'

const INTENT_EVENTS = ['wheel', 'touchstart', 'keydown', 'pointerdown'] as const

// The page renders client-side, so the browser's own jump to a shared `/#contact` link
// fires before the section exists. Redo it once React has mounted, and again once the web
// fonts and page have loaded (they reflow the text above), unless the visitor has started
// scrolling by then.
export function useHashScroll() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id) return
    // On reload or back/forward the browser restores the previous position; keep it.
    const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined
    if (nav && nav.type !== 'navigate') return

    let active = true
    const stop = () => {
      active = false
      INTENT_EVENTS.forEach((type) => window.removeEventListener(type, stop))
      window.removeEventListener('load', jump)
    }
    const jump = () => {
      if (active) document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' })
    }

    INTENT_EVENTS.forEach((type) => window.addEventListener(type, stop, { passive: true }))
    jump()
    document.fonts?.ready.then(() => requestAnimationFrame(jump))
    if (document.readyState === 'complete') requestAnimationFrame(jump)
    else window.addEventListener('load', jump)
    // Layout is settled well before this; stop listening.
    const done = window.setTimeout(stop, 3000)
    return () => {
      clearTimeout(done)
      stop()
    }
  }, [])
}
