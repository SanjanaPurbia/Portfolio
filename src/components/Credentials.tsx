import { Award, GraduationCap } from 'lucide-react'
import { certifications, education } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'
import './Credentials.css'

export function Credentials() {
  return (
    <section id="credentials" className="section section--tight">
      <div className="container">
        <SectionHead eyebrow="05 · credentials" title="Certifications & education" />
        <div className="creds">
          {certifications.map((c) => (
            <Reveal key={c.name} className="cred card">
              <span className="cred__icon"><Award size={20} /></span>
              <div>
                <h3 className="cred__title">{c.name}</h3>
                <p className="cred__sub">{c.issuer} · {c.year}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.06} className="cred card">
            <span className="cred__icon"><GraduationCap size={20} /></span>
            <div>
              <h3 className="cred__title">{education.degree}</h3>
              <p className="cred__sub">{education.school} · {education.period}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
