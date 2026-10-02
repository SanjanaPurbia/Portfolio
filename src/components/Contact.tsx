import { useState } from 'react'
import { ArrowRight, Check, Copy, DownloadSimple, GithubLogo, LinkedinLogo, Phone } from '@phosphor-icons/react'
import { profile } from '../data/portfolio'

// Closing "night scene", styled after the owner's reference: dark cinematic field, a glass
// prism catching a sunset beam, thin uppercase headline with a soft glow, mono body copy and
// square buttons. Content is unchanged from the previous contact block.
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

  const square = 'inline-flex min-h-14 items-center gap-2.5 font-mono text-[14px] tracking-[0.08em] uppercase transition-colors duration-200'

  return (
    <section id="contact" className="night-scene relative isolate overflow-hidden text-mist">
      {/* Glass prism in its light beam. Decorative only. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[6%] right-[-18%] w-[78vw] max-w-[560px] opacity-40 sm:right-[-6%] sm:opacity-60 md:top-1/2 md:right-[6%] md:w-[38vw] md:-translate-y-1/2 md:opacity-100"
      >
        <div className="prism-beam" />
        <div className="prism-float">
          <div className="prism" />
        </div>
      </div>

      <div className="relative mx-auto flex min-h-[88dvh] max-w-[1200px] items-center px-4 py-24 md:px-6 md:py-32">
        <div className="max-w-[640px]">
          <h2 className="glow-type font-display text-[clamp(40px,6.2vw,80px)] leading-[1.02] font-light tracking-[0.01em] uppercase">
            Looking for a DevOps engineer?
          </h2>

          <p className="mt-8 max-w-[52ch] font-mono text-[16px] leading-[1.7] text-mist/85 md:text-[17px]">
            I'm open to DevOps and cloud roles with more scope. Email or call, whichever suits you.
          </p>

          <dl className="mt-8 space-y-2 font-mono text-[15px] md:text-[16px]">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <dt className="sr-only">Email</dt>
              <dd>
                <a
                  href={`mailto:${profile.email}`}
                  className="break-all underline decoration-mist/35 underline-offset-[5px] hover:decoration-mist"
                >
                  {profile.email}
                </a>
              </dd>
              <dd className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={copy}
                  aria-label="Copy email address"
                  className="grid size-11 cursor-pointer place-items-center border border-mist/30 text-mist transition-colors hover:bg-mist/10"
                >
                  {copied === 'copied' ? <Check size={16} weight="bold" /> : <Copy size={16} />}
                </button>
                <span role="status" className="text-[14px] text-mist/75">
                  {copied === 'copied' ? 'Email copied' : copied === 'failed' ? 'Copy failed. Select the address instead.' : ''}
                </span>
              </dd>
            </div>
            <div>
              <dt className="sr-only">Phone</dt>
              <dd>
                <a
                  href={`tel:${profile.phone.tel}`}
                  className="inline-flex items-center gap-2.5 underline decoration-mist/35 underline-offset-[5px] hover:decoration-mist"
                >
                  <Phone size={18} aria-hidden="true" />
                  {profile.phone.display}
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-12 flex flex-wrap gap-2">
            {/* Primary: label + arrow as two joined squares, like the reference. One link, one target. */}
            <a href={`mailto:${profile.email}`} className="group inline-flex gap-1.5 active:scale-[0.98]">
              <span className={`${square} bg-mist px-8 text-night group-hover:bg-mist/90`}>Email me</span>
              <span className={`${square} justify-center bg-mist px-6 text-night group-hover:bg-mist/90`} aria-hidden="true">
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </a>
            <a href={profile.resumeUrl} download className={`${square} border border-mist/35 px-6 hover:bg-mist/10`}>
              <DownloadSimple size={18} aria-hidden="true" /> Download resume
            </a>
            {profile.socials.linkedin && (
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`${square} border border-mist/35 px-6 hover:bg-mist/10`}
              >
                <LinkedinLogo size={18} aria-hidden="true" /> LinkedIn
              </a>
            )}
            {profile.socials.github && (
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className={`${square} border border-mist/35 px-6 hover:bg-mist/10`}
              >
                <GithubLogo size={18} aria-hidden="true" /> GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
