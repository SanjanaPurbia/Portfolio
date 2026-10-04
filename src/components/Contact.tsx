import { ArrowUpRight, DownloadSimple, EnvelopeSimple, GithubLogo, LinkedinLogo, Phone } from '@phosphor-icons/react'
import { profile, sections } from '../data/portfolio'

const routes = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: EnvelopeSimple },
  { label: 'Phone', value: profile.phone.display, href: `tel:${profile.phone.tel}`, Icon: Phone },
  { label: 'LinkedIn', value: profile.socials.linkedin.handle, href: profile.socials.linkedin.url, Icon: LinkedinLogo, external: true },
  { label: 'GitHub', value: profile.socials.github.handle, href: profile.socials.github.url, Icon: GithubLogo, external: true },
]

// Closing panel: the ask and both CTAs on the left, every contact route on the right.
export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-[clamp(40px,5vw,60px)] pb-[clamp(56px,7vw,96px)]">
      <div className="mx-auto max-w-[1200px] px-[clamp(16px,4vw,40px)]">
        <div className="grid overflow-hidden rounded-3xl border border-line bg-surface shadow-panel min-[960px]:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="p-[clamp(24px,5vw,56px)]">
            <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-surface py-1.5 pr-3.5 pl-2.5 text-sm text-soft">
              <span aria-hidden="true" className="status-dot" />
              {profile.availability}
            </p>
            <h2 id="contact-title" className="max-w-[16ch] text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.1] font-semibold tracking-[-0.03em]">
              {sections.contact.title}
            </h2>
            <p className="mt-4 max-w-[46ch] text-[17px] text-muted">{sections.contact.body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                <EnvelopeSimple size={18} /> Email me
              </a>
              <a href={profile.resumeUrl} download className="btn btn-ghost">
                <DownloadSimple size={18} /> Download resume
              </a>
            </div>
          </div>
          <ul className="grid content-center border-t border-line bg-surface-2 p-[clamp(12px,3vw,24px)] min-[960px]:border-t-0 min-[960px]:border-l">
            {routes.map(({ label, value, href, Icon, external }) => (
              <li key={label} className="[&+&]:border-t [&+&]:border-line">
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="grid grid-cols-[40px_minmax(0,1fr)_20px] items-center gap-3.5 rounded-[14px] px-3 py-3.5 transition-colors hover:bg-surface"
                >
                  <span aria-hidden="true" className="grid size-10 place-items-center rounded-full border border-line bg-surface text-soft">
                    <Icon size={18} />
                  </span>
                  <span>
                    <small className="block text-[13px] leading-tight text-muted">{label}</small>
                    {/* If the email must wrap, it breaks before the @, never mid-word. */}
                    <span className="block leading-snug font-medium break-words">
                      {value.includes('@') ? (
                        <>
                          {value.split('@')[0]}
                          <wbr />@{value.split('@')[1]}
                        </>
                      ) : (
                        value
                      )}
                    </span>
                    {external && <span className="sr-only"> (opens in a new tab)</span>}
                  </span>
                  <ArrowUpRight size={16} aria-hidden="true" className="text-muted" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
