import { Fragment } from 'react'
import { Check, GitCommit } from '@phosphor-icons/react'
import { experience, sections } from '../data/portfolio'
import { Section } from './Section'

// Release log, newest first: each role is a version with its changes.
export function Experience() {
  return (
    <Section id="experience" title={sections.experience.title} intro={sections.experience.intro}>
      <ol className="grid gap-5">
        {experience.map((role, i) => (
          <Fragment key={role.title}>
            {i > 0 && (
              <li aria-hidden="true" className="flex items-center gap-3 pl-1 text-sm text-muted min-[900px]:pl-[260px]">
                <span className="mr-1.5 ml-[9px] h-9 w-0.5 rounded-sm bg-line-strong" />
                {sections.experience.promotion}
              </li>
            )}
            <li className="grid gap-x-10 gap-y-4 min-[900px]:grid-cols-[220px_minmax(0,1fr)]">
              <div className="flex flex-wrap content-start items-center gap-2.5 min-[900px]:flex-col min-[900px]:items-start min-[900px]:pt-[22px]">
                <span className="inline-flex h-7 items-center gap-2 rounded-full border border-line-strong bg-surface px-3 font-mono text-[13px]">
                  <GitCommit size={15} aria-hidden="true" className="text-muted" />
                  {role.version}
                </span>
                <span className={`inline-flex items-center gap-[7px] text-[13px] ${role.current ? 'text-ok' : 'text-muted'}`}>
                  <span aria-hidden="true" className={role.current ? 'status-dot size-[7px]' : 'size-[7px] rounded-full bg-edge'} />
                  {role.current ? 'Live' : 'Completed'}
                </span>
                <span className="text-sm whitespace-nowrap text-muted">{role.period}</span>
              </div>
              <article className="rounded-tile border border-line bg-surface p-[clamp(20px,3vw,28px)]">
                <h3 className="text-[22px] leading-tight font-semibold tracking-[-0.02em]">{role.title}</h3>
                <p className="mt-0.5 text-muted">{role.company}</p>
                <ul className="mt-[18px] grid gap-3">
                  {role.highlights.map((h) => (
                    <li key={h} className="grid grid-cols-[18px_minmax(0,1fr)] gap-3 leading-relaxed text-soft">
                      <Check size={15} weight="bold" aria-hidden="true" className="mt-1 text-ok" />
                      {h}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          </Fragment>
        ))}
      </ol>
    </Section>
  )
}
