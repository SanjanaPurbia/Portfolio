import { Moon, Sun } from '@phosphor-icons/react'
import { profile } from '../data/portfolio'
import type { Theme } from '../hooks/useTheme'

type Props = { theme: Theme; onToggleTheme: () => void }

// Name and theme toggle only. The owner wants the page read as one scroll, so there are no
// section links; every detail is reachable by scrolling, and the contact panel closes the page.
export function Nav({ theme, onToggleTheme }: Props) {
  return (
    <header>
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-[clamp(16px,4vw,40px)]">
        <a href="#top" className="inline-flex items-center gap-2.5 font-semibold tracking-[-0.01em]">
          {/* The brand mark: a passing build. */}
          <span aria-hidden="true" className="grid size-7 place-items-center rounded-lg border border-line-strong bg-surface">
            <span className="status-dot" />
          </span>
          {profile.name}
        </a>
        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          className="grid size-11 cursor-pointer place-items-center rounded-full border border-line-strong bg-surface text-ink transition-colors hover:border-edge"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  )
}
