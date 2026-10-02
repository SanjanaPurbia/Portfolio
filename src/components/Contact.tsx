import { useState } from 'react'
import { ArrowRight, Check, Copy, EnvelopeSimple } from '@phosphor-icons/react'
import { profile } from '../data/portfolio'

// Closing panel: one calm deep-ink surface with two quiet glows, a light-weight headline,
// and the contact details set as a four-column strip between hairlines. Still, no gimmicks.
// Per-cell layout and hairlines for the three breakpoints (see the comment on the <dl>).
const cell = [
  'sm:col-span-3 lg:col-span-1 lg:pr-6',
  'border-t sm:pr-6 lg:border-t-0 lg:border-l lg:px-6',
  'border-t sm:border-l sm:px-6 lg:border-t-0',
  'border-t sm:border-l sm:pl-6 lg:border-t-0',
]

const link =
  'bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[length:100%_1px] focus-visible:bg-[length:100%_1px]'

export function Contact() {
  const [copied, setCopied] = useState<'idle' | 'copied' | 'failed'>('idle')

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied('copied')
    } catch {
      setCopied('failed')
    }
    setTimeout(() => setCopied('idle'), 2000)
  }

  const details = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, copy: true },
    { label: 'Phone', value: profile.phone.display, href: `tel:${profile.phone.tel}` },
    { label: 'LinkedIn', value: 'sanjana-purbia', href: profile.socials.linkedin, external: true },
    { label: 'Resume', value: 'Download resume', href: profile.resumeUrl, download: true },
  ]

  return (
    <section id="contact" className="mx-auto max-w-[1200px] px-4 py-20 md:px-6 md:py-28">
      <div className="inkwell-glow overflow-hidden rounded-tile border border-on-inkwell/10 px-6 py-14 text-on-inkwell md:px-14 md:py-20 lg:px-20">
        <h2 className="max-w-[14ch] text-[clamp(44px,6.4vw,92px)] leading-[1.02] font-light tracking-[-0.035em]">
          Looking for a DevOps engineer?
        </h2>
        <p className="mt-7 max-w-[46ch] text-[18px] leading-relaxed text-on-inkwell/70 md:text-[20px]">
          I'm open to DevOps and cloud roles with more scope. Email or call, whichever suits you.
        </p>

        {/* Phones: one column. Tablet: email gets its own row, then three columns. Desktop: four
            columns with the widest for the email. Hairlines follow each layout. */}
        <dl className="mt-16 grid border-y border-on-inkwell/15 sm:grid-cols-3 lg:grid-cols-[1.7fr_1fr_1fr_1fr]">
          {details.map((d, i) => (
            <div key={d.label} className={`border-on-inkwell/15 py-7 lg:py-9 ${cell[i]}`}>
              <dt className="text-[14px] font-medium text-on-inkwell/55">{d.label}</dt>
              <dd className="mt-2.5 flex items-center gap-3">
                <a
                  href={d.href}
                  {...(d.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  {...(d.download ? { download: true } : {})}
                  className={`font-display text-[19px] font-normal tracking-tight ${link}`}
                >
                  {/* If the email must wrap, it breaks before the @, never mid-word. */}
                  {d.copy ? (
                    <>
                      {d.value.split('@')[0]}
                      <wbr />@{d.value.split('@')[1]}
                    </>
                  ) : (
                    d.value
                  )}
                </a>
                {d.copy && (
                  <button
                    type="button"
                    onClick={copy}
                    aria-label="Copy email address"
                    className="grid size-9 shrink-0 cursor-pointer place-items-center rounded-full text-on-inkwell/70 transition-colors hover:bg-on-inkwell/10 hover:text-on-inkwell"
                  >
                    {copied === 'copied' ? <Check size={16} weight="bold" /> : <Copy size={16} />}
                  </button>
                )}
              </dd>
              {d.copy && (
                <p role="status" className="mt-1 h-5 text-[13px] text-on-inkwell/55">
                  {copied === 'copied' ? 'Email copied' : copied === 'failed' ? 'Copy failed. Select the address instead.' : ''}
                </p>
              )}
            </div>
          ))}
        </dl>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="group btn bg-on-inkwell pr-4 text-inkwell hover:bg-on-inkwell/90"
          >
            <EnvelopeSimple size={18} weight="bold" /> Email me
            <span className="ml-1 grid size-8 place-items-center rounded-full bg-inkwell text-on-inkwell transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight size={15} weight="bold" />
            </span>
          </a>
          <p className="text-[15px] text-on-inkwell/55">
            {profile.name}, {profile.role}
          </p>
        </div>
      </div>
    </section>
  )
}
