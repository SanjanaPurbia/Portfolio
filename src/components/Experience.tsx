import { experience } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'
import './Experience.css'

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHead
          eyebrow="02 · git log --career"
          title="Experience"
          lede="From intern to DevOps Engineer in six months, now running CI/CD for 5+ client projects."
        />
        <ol className="timeline">
          {experience.map((role, i) => (
            <Reveal key={role.title} delay={i * 0.08} className="timeline__item">
              <li>
                <div className={`timeline__node ${role.current ? 'timeline__node--current' : ''}`} aria-hidden="true" />
                <div className="timeline__card card">
                  <header className="timeline__head">
                    <div>
                      <h3 className="timeline__title">{role.title}</h3>
                      <p className="timeline__company">{role.company}</p>
                    </div>
                    <span className="timeline__period mono">
                      {role.current && <span className="status-dot" />}
                      {role.period}
                    </span>
                  </header>
                  <ul className="timeline__list">
                    {role.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
