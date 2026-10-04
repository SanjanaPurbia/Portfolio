import { profile } from '../data/portfolio'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="pt-10 pb-24 text-sm text-muted">
      <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-x-6 gap-y-2 border-t border-line px-[clamp(16px,4vw,40px)] pt-6">
        <p>
          © {YEAR} {profile.name}, {profile.role}
        </p>
        <a href="#top" className="hover:text-ink">
          Back to top
        </a>
      </div>
    </footer>
  )
}
