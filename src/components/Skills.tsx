import { skills } from '../data/portfolio'

// Definition list: group name on the left, tools on the right. Spacing, not hairlines, separates rows.
export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1200px] px-4 py-20 md:px-6 md:py-28">
      <h2 className="text-[clamp(32px,4.4vw,52px)] leading-[1.05] font-semibold tracking-[-0.03em]">Skills</h2>
      <dl className="mt-12 grid gap-x-12 gap-y-8 border-t border-rule pt-10 md:grid-cols-2">
        {skills.map((g) => (
          <div key={g.title} className="grid gap-2 sm:grid-cols-[150px_1fr] sm:gap-6">
            <dt className="font-display text-[19px] font-semibold tracking-tight">{g.title}</dt>
            <dd className="text-graphite">{g.items.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
