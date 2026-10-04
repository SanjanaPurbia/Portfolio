import { sections, skills } from '../data/portfolio'
import { Section } from './Section'

// Toolchain: one cell per skill group, divided by hairlines.
export function Skills() {
  return (
    <Section id="skills" title={sections.skills.title} intro={sections.skills.intro}>
      <div className="grid gap-px overflow-hidden rounded-[18px] border border-line bg-line min-[640px]:grid-cols-2 min-[1000px]:grid-cols-3">
        {skills.map((g) => (
          <div key={g.title} className="bg-surface p-[22px]">
            <h3 className="flex items-baseline justify-between font-semibold tracking-[-0.01em]">
              {g.title}
              <span className="font-mono text-xs font-normal text-muted">
                {g.items.length}
                <span className="sr-only"> tools</span>
              </span>
            </h3>
            <ul className="mt-3.5 flex flex-wrap gap-1.5">
              {g.items.map((s) => (
                <li key={s} className="chip">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
