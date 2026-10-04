import { Check, RocketLaunch, ShieldCheck } from '@phosphor-icons/react'
import { projects, sections } from '../data/portfolio'
import { Diagram } from './Diagram'
import { Section } from './Section'

const icons = { rocket: RocketLaunch, shield: ShieldCheck }

// Architecture cards: client, result, what I did, stack, and an illustration of the setup.
export function Projects() {
  return (
    <Section id="work" title={sections.work.title} intro={sections.work.intro}>
      <div className="grid gap-6">
        {projects.map((p) => {
          const Icon = icons[p.impact.icon]
          return (
            <article key={p.id} id={`project-${p.id}`} aria-labelledby={`p-${p.id}`} className="overflow-hidden rounded-panel border border-line bg-surface">
              <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-4 px-[18px] pt-5 sm:px-[clamp(20px,3vw,32px)] sm:pt-[clamp(20px,3vw,28px)]">
                <div>
                  <h3 id={`p-${p.id}`} className="text-[clamp(1.5rem,2.6vw,1.875rem)] leading-[1.15] font-semibold tracking-[-0.03em]">
                    {p.client}
                  </h3>
                  <p className="mt-1 text-muted">{p.name}</p>
                  <div className="mt-3.5 flex flex-wrap gap-2">
                    {[p.domain, p.year].map((x) => (
                      <span key={x} className="inline-flex h-[26px] items-center rounded-full border border-line bg-surface-2 px-[11px] text-[13px] text-soft">
                        {x}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-[14px] bg-ok-wash py-2.5 pr-4 pl-3">
                  <Icon size={20} aria-hidden="true" className="text-ok" />
                  <strong className="text-2xl leading-none font-semibold tracking-[-0.03em] tabular-nums">{p.impact.value}</strong>{' '}
                  <span className="max-w-[22ch] text-sm leading-tight text-soft">{p.impact.label}</span>
                </div>
              </div>

              <div className="grid gap-6 px-3.5 pt-[18px] pb-3.5 sm:px-[clamp(20px,3vw,32px)] sm:pt-5 sm:pb-[clamp(20px,3vw,32px)] min-[1000px]:grid-cols-[minmax(0,1fr)_minmax(0,440px)] min-[1000px]:gap-10">
                <div className="px-1 sm:px-0">
                  <p className="max-w-[62ch] text-[17px] text-soft">{p.summary}</p>
                  <ul className="mt-[18px] grid gap-2.5">
                    {p.highlights.map((h) => (
                      <li key={h} className="grid grid-cols-[18px_minmax(0,1fr)] gap-3 text-muted">
                        <Check size={15} weight="bold" aria-hidden="true" className="mt-1 text-ok" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-[22px] flex flex-wrap items-center gap-1.5">
                    <span aria-hidden="true" className="mr-1.5 text-[13px] text-muted">
                      Stack
                    </span>
                    <ul aria-label="Stack" className="flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <li key={s} className="chip">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <figure className="relative self-start rounded-tile border border-line bg-sunken px-1.5 pt-2.5 pb-3 sm:p-[clamp(12px,2.4vw,20px)]">
                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(var(--grid-dot)_1px,transparent_1.2px)] bg-[length:16px_16px]" />
                  <Diagram id={p.id} spec={p.diagram} />
                  <figcaption className="relative mx-2 mt-3.5 border-t border-line pt-3 text-[13.5px] leading-normal text-muted sm:mx-0">
                    {p.diagram.caption}
                  </figcaption>
                </figure>
              </div>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
