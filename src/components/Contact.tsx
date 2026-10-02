import { useState } from 'react'
import { Check, Copy, DownloadSimple, EnvelopeSimple, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { profile } from '../data/portfolio'

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

  return (
    <section id="contact" className="mx-auto max-w-[1200px] px-4 py-24 md:px-6 md:py-36">
      <h2 className="max-w-[16ch] text-[clamp(40px,6.4vw,80px)] leading-[1] font-semibold tracking-[-0.035em]">
        Looking for a DevOps engineer?
      </h2>
      <p className="mt-6 max-w-[48ch] text-[19px] text-graphite">
        I'm open to DevOps and cloud roles with more scope. Email is the fastest way to reach me.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="font-display text-[clamp(21px,3.4vw,38px)] font-medium tracking-tight break-all text-cobalt underline decoration-2 underline-offset-[6px] hover:decoration-4"
        >
          {profile.email}
        </a>
        <button
          type="button"
          onClick={copy}
          aria-label="Copy email address"
          className="grid size-11 cursor-pointer place-items-center rounded-full border border-rule text-graphite transition-colors hover:text-ink"
        >
          {copied === 'copied' ? <Check size={18} weight="bold" /> : <Copy size={18} />}
        </button>
        <span role="status" className="text-[15px] text-graphite">
          {copied === 'copied' ? 'Email copied' : copied === 'failed' ? 'Copy failed. Select the address instead.' : ''}
        </span>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a href={`mailto:${profile.email}`} className="btn btn-primary">
          <EnvelopeSimple size={18} weight="bold" /> Email me
        </a>
        <a href={profile.resumeUrl} download className="btn btn-quiet">
          <DownloadSimple size={18} weight="bold" /> Download resume
        </a>
        {profile.socials.linkedin && (
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="btn btn-quiet">
            <LinkedinLogo size={18} weight="bold" /> LinkedIn
          </a>
        )}
        {profile.socials.github && (
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="btn btn-quiet">
            <GithubLogo size={18} weight="bold" /> GitHub
          </a>
        )}
      </div>
    </section>
  )
}
