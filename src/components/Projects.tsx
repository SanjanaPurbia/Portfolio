import { projects, type Project } from '../data/portfolio'
import { ArchDiagram } from './ArchDiagram'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'
import './Projects.css'

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project card ${project.featured ? 'project--featured' : ''}`}>
      <div className="project__body">
        <header className="project__head">
          <span className="project__meta mono">
            {project.client} · {project.domain} · {project.year}
          </span>
          <h3 className="project__name">{project.name}</h3>
        </header>
        <div className="project__impact">
          <span className="project__impact-value">{project.impact.value}</span>
          <span className="project__impact-label">{project.impact.label}</span>
        </div>
        <p className="project__summary">{project.summary}</p>
        <ul className="project__list">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        <ul className="project__stack" aria-label="Tech stack">
          {project.stack.map((s) => (
            <li key={s} className="chip">
              {s}
            </li>
          ))}
        </ul>
      </div>
      {project.featured && (
        <div className="project__visual">
          <ArchDiagram />
        </div>
      )}
    </article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead
          eyebrow="03 · ls ~/projects"
          title="Selected work"
          lede="Production platforms across EV charging, AgriTech and eCommerce: 50% faster deployments, 80% less manual release work, zero-downtime releases."
        />
        <div className="projects">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06} className={p.featured ? 'projects__featured' : undefined}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
