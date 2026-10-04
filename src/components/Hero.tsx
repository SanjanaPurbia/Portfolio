import { DownloadSimple, EnvelopeSimple } from '@phosphor-icons/react'
import { heroFacts, profile } from '../data/portfolio'
import { Pipeline } from './Pipeline'

// Intro on the left, the "How I ship" pipeline on the right. On phones the pipeline sits
// between the intro and the facts so it shows near the fold.
export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate pt-[clamp(32px,6vw,72px)] pb-[clamp(48px,6vw,80px)]">
      <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 -top-[72px] -z-10" />
      <div className="mx-auto grid max-w-[1200px] items-center gap-[clamp(40px,5vw,64px)] px-[clamp(16px,4vw,40px)] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-y-10">
        <div className="lg:col-start-1 lg:row-start-1 lg:self-end">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-surface py-1.5 pr-3.5 pl-2.5 text-sm text-soft">
            <span aria-hidden="true" className="status-dot" />
            {profile.availability}
          </p>
          <h1 id="hero-title" className="mt-7 text-[clamp(2.6rem,6.4vw,4.6rem)] leading-[1.02] font-semibold tracking-[-0.04em]">
            {profile.name}
          </h1>
          <p className="mt-3.5 text-[clamp(1.125rem,2vw,1.375rem)] font-medium tracking-[-0.01em] text-soft">
            {profile.role} at {profile.company}
          </p>
          <p className="mt-[18px] max-w-[46ch] text-[17px] text-muted">{profile.subtext}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              <EnvelopeSimple size={18} /> Email me
            </a>
            <a href={profile.resumeUrl} download className="btn btn-ghost">
              <DownloadSimple size={18} /> Download resume
            </a>
          </div>
        </div>

        <Pipeline className="lg:col-start-2 lg:row-span-2 lg:row-start-1" />

        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[14px] border border-line bg-line lg:col-start-1 lg:row-start-2 lg:self-start">
          {heroFacts.map((f) => (
            <div key={f.label} className="bg-page px-4 py-3.5">
              <dt className="text-xl font-semibold tracking-[-0.02em]">{f.value}</dt>
              <dd className="mt-0.5 text-sm leading-snug text-muted">{f.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
