import { profile } from '../data/portfolio'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="halo mx-auto flex max-w-[1200px] flex-wrap justify-between gap-2 px-4 py-8 text-[15px] text-graphite md:px-6">
        <p>
          © {YEAR} {profile.name}
        </p>
        <a href="#top" className="hover:text-ink">
          Back to top
        </a>
      </div>
    </footer>
  )
}
