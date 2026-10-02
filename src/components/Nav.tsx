import { useEffect, useState } from 'react'
import { List, Moon, Sun, X } from '@phosphor-icons/react'
import { useMotionValueEvent, useScroll } from 'motion/react'
import { profile } from '../data/portfolio'
import type { Theme } from '../hooks/useTheme'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

type Props = { theme: Theme; onToggleTheme: () => void }

export function Nav({ theme, onToggleTheme }: Props) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 8))

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-rule bg-paper/90 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-6 px-4 md:h-[72px] md:px-6">
        <a href="#top" className="halo flex items-center gap-3 font-display text-[17px] font-semibold tracking-tight">
          <span
            aria-hidden="true"
            className="grid size-8 place-items-center rounded-full bg-cobalt text-[13px] text-on-cobalt"
          >
            SP
          </span>
          {profile.name}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="halo text-[15px] text-graphite transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            className="grid size-11 cursor-pointer place-items-center rounded-full text-graphite transition-colors hover:text-ink"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="grid size-11 cursor-pointer place-items-center rounded-full text-ink md:hidden"
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>

      {/* `hidden` removes the closed menu from the tab order. */}
      <nav id="mobile-nav" aria-label="Mobile" hidden={!open} className="border-t border-rule px-4 pt-2 pb-5 md:hidden">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="flex min-h-12 items-center font-display text-[21px] font-medium"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
