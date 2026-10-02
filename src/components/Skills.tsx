import { Activity, Boxes, Cloud, Database, GitBranch, SquareTerminal, type LucideIcon } from 'lucide-react'
import { skills } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'
import './Skills.css'

const icons: Record<string, LucideIcon> = {
  cloud: Cloud,
  containers: Boxes,
  cicd: GitBranch,
  scripting: SquareTerminal,
  observability: Activity,
  data: Database,
}

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHead
          eyebrow="01 · toolchain"
          title="The stack I build with"
          lede="The tools behind my client work, from provisioning the network to paging on-call."
        />
        <div className="skills">
          {skills.map((group, i) => {
            const Icon = icons[group.id] ?? Cloud
            return (
              <Reveal key={group.id} delay={i * 0.05} className="skill card">
                <div className="skill__head">
                  <span className="skill__icon">
                    <Icon size={18} />
                  </span>
                  <h3 className="skill__title">{group.title}</h3>
                </div>
                <ul className="skill__items">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
