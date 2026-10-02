import { useState, type ReactNode } from 'react'
import { ArrowUpRight, Check, Copy, DownloadSimple, EnvelopeSimple, LinkedinLogo, Phone } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'motion/react'
import { profile, type Hue } from '../data/portfolio'
import { fill } from '../lib/hue'

// Closing section, bookending the hero: big headline on the left, four tilted colour cards on
// the right. Here the cards are the actions themselves (email, call, LinkedIn, resume).
type Card = {
  key: string
  hue: Hue
  span: string
  label: string
  value: string
  href: string
  icon: ReactNode
  external?: boolean
  download?: boolean
}

const tilt = [-1.5, 2, 1.5, -1]

export function Contact() {
  const reduce = useReducedMotion()
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

  const cards: Card[] = [
    {
      key: 'email',
      hue: 'cobalt',
      span: 'sm:col-span-2',
      label: 'Email me',
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: <EnvelopeSimple size={22} weight="bold" />,
    },
    {
      key: 'phone',
      hue: 'mint',
      span: '',
      label: 'Call me',
      value: profile.phone.display,
      href: `tel:${profile.phone.tel}`,
      icon: <Phone size={22} weight="bold" />,
    },
    {
      key: 'linkedin',
      hue: 'sun',
      span: '',
      label: 'LinkedIn',
      value: 'sanjana-purbia',
      href: profile.socials.linkedin,
      icon: <LinkedinLogo size={22} weight="bold" />,
      external: true,
    },
    {
      key: 'resume',
      hue: 'rose',
      span: 'sm:col-span-2',
      label: 'Download resume',
      value: 'SanjanaPurbia_Resume.pdf',
      href: profile.resumeUrl,
      icon: <DownloadSimple size={22} weight="bold" />,
      download: true,
    },
  ]

  return (
    <section id="contact" className="mx-auto max-w-[1200px] px-4 py-24 md:px-6 md:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="halo text-[clamp(44px,6vw,80px)] leading-[0.95] font-semibold tracking-[-0.04em]">
            Looking for a DevOps engineer?
          </h2>
          <p className="halo mt-6 max-w-[38ch] text-[19px] leading-relaxed text-graphite md:text-[21px]">
            I'm open to DevOps and cloud roles with more scope. Email or call, whichever suits you.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7" aria-label="Ways to reach me">
          {cards.map((c, i) => (
            <motion.li
              key={c.key}
              className={c.span}
              initial={reduce ? false : { opacity: 0, y: 32, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: tilt[i] }}
              whileHover={reduce ? undefined : { rotate: 0, y: -6, scale: 1.02 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ type: 'spring', stiffness: 120, damping: 16, delay: reduce ? 0 : i * 0.08 }}
            >
              <div
                className={`relative flex min-h-[150px] flex-col justify-between gap-8 rounded-tile p-6 focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-link sm:min-h-[176px] md:p-7 ${fill[c.hue]}`}
              >
                <div className="flex items-start justify-between gap-4">
                  {/* The whole card is the link (stretched ::after); the copy button sits above it. */}
                  <a
                    href={c.href}
                    {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    {...(c.download ? { download: true } : {})}
                    className="font-display text-[19px] font-semibold tracking-tight outline-none after:absolute after:inset-0 after:rounded-tile"
                  >
                    {c.label}
                  </a>
                  <span aria-hidden="true" className="flex items-center gap-2">
                    {c.icon}
                    <ArrowUpRight size={20} weight="bold" />
                  </span>
                </div>

                <div className="flex flex-wrap items-end justify-between gap-3">
                  {/* Only the long email may wrap (at any point); numbers and handles stay on one line. */}
                  <p
                    className={`font-display text-[clamp(20px,2.3vw,28px)] leading-tight font-medium tracking-tight ${c.key === 'email' ? '[overflow-wrap:anywhere]' : 'whitespace-nowrap'}`}
                  >
                    {c.value}
                  </p>
                  {c.key === 'email' && (
                    <span className="relative z-10 flex items-center gap-3">
                      <span role="status" className="text-[14px] font-medium">
                        {copied === 'copied' ? 'Email copied' : copied === 'failed' ? 'Copy failed' : ''}
                      </span>
                      <button
                        type="button"
                        onClick={copy}
                        aria-label="Copy email address"
                        className="grid size-11 cursor-pointer place-items-center rounded-full bg-on-cobalt/15 transition-colors hover:bg-on-cobalt/25"
                      >
                        {copied === 'copied' ? <Check size={18} weight="bold" /> : <Copy size={18} weight="bold" />}
                      </button>
                    </span>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
