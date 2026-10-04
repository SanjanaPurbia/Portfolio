import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'
const THEME_COLOR: Record<Theme, string> = { dark: '#0d0f12', light: '#f4f5f7' }
const LIGHT_QUERY = '(prefers-color-scheme: light)'

function readSaved(): Theme | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // storage unavailable (private mode, blocked cookies)
  }
  return null
}

const systemTheme = (): Theme => (window.matchMedia(LIGHT_QUERY).matches ? 'light' : 'dark')

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => readSaved() ?? systemTheme())

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    // Keep the mobile browser toolbar in step with the page background. index.html ships one
    // tag per scheme for the first paint; once a theme is applied both follow it.
    document.querySelectorAll('meta[name="theme-color"]').forEach((m) => m.setAttribute('content', THEME_COLOR[theme]))
  }, [theme])

  // Until the visitor picks a theme, follow the OS setting live.
  useEffect(() => {
    const query = window.matchMedia(LIGHT_QUERY)
    const onChange = () => {
      if (!readSaved()) setTheme(systemTheme())
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // non-fatal
      }
      return next
    })
  }, [])

  return { theme, toggle }
}
