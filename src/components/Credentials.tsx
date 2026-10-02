import { Certificate, GraduationCap } from '@phosphor-icons/react'
import { certifications, education } from '../data/portfolio'

export function Credentials() {
  const cert = certifications[0]
  return (
    <section aria-label="Certification and education" className="mx-auto max-w-[1200px] px-4 md:px-6">
      <div className="grid gap-4 md:grid-cols-[3fr_2fr]">
        <div className="flex items-start gap-5 rounded-tile bg-raised p-7">
          <Certificate size={32} className="shrink-0 text-cobalt" />
          <div>
            <p className="font-display text-[21px] font-semibold tracking-tight">{cert.name}</p>
            <p className="mt-1 text-[15px] text-graphite">
              {cert.issuer}, {cert.year}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-5 rounded-tile bg-raised p-7">
          <GraduationCap size={32} className="shrink-0 text-cobalt" />
          <div>
            <p className="font-display text-[21px] font-semibold tracking-tight">{education.degree}</p>
            <p className="mt-1 text-[15px] text-graphite">
              {education.school}, {education.period}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
