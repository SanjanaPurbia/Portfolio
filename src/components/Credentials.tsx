import { Certificate, GraduationCap } from '@phosphor-icons/react'
import { certifications, education, sections } from '../data/portfolio'
import { Section } from './Section'

export function Credentials() {
  const cert = certifications[0]
  return (
    <Section id="credentials" title={sections.credentials.title}>
      <div className="grid gap-4 min-[800px]:grid-cols-2">
        <article className="grid grid-cols-[48px_minmax(0,1fr)] gap-[18px] rounded-tile border border-line bg-surface p-[22px]">
          <span aria-hidden="true" className="grid size-12 place-items-center rounded-xl bg-ok-wash text-ok">
            <Certificate size={24} />
          </span>
          <div>
            <h3 className="text-lg leading-snug font-semibold tracking-[-0.015em]">{cert.name}</h3>
            <p className="mt-1 text-muted">{cert.issuer}</p>
            <p className="mt-3 inline-flex items-center gap-2 text-[13px] text-soft">
              <span aria-hidden="true" className="status-dot" />
              Certified {cert.year}
            </p>
          </div>
        </article>
        <article className="grid grid-cols-[48px_minmax(0,1fr)] gap-[18px] rounded-tile border border-line bg-surface p-[22px]">
          <span aria-hidden="true" className="grid size-12 place-items-center rounded-xl border border-line bg-surface-2 text-soft">
            <GraduationCap size={24} />
          </span>
          <div>
            <h3 className="text-lg leading-snug font-semibold tracking-[-0.015em]">{education.degree}</h3>
            <p className="mt-1 text-muted">{education.school}</p>
            <p className="mt-3 text-[13px] whitespace-nowrap text-soft">{education.period}</p>
          </div>
        </article>
      </div>
    </Section>
  )
}
