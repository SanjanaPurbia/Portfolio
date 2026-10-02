import { profile } from '../data/portfolio'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="halo mx-auto flex max-w-[1200px] flex-wrap justify-between gap-2 px-4 py-8 text-[15px] text-graphite md:px-6">
        <p>
          © {YEAR} {profile.name}
        </p>
        <p className="flex flex-wrap gap-x-5 gap-y-1">
          <a href={`mailto:${profile.email}`} className="hover:text-ink">
            {profile.email}
          </a>
          <a href={`tel:${profile.phone.tel}`} className="hover:text-ink">
            {profile.phone.display}
          </a>
        </p>
        <a href="#top" className="hover:text-ink">
          Back to top
        </a>
      </div>
    </footer>
  )
}
