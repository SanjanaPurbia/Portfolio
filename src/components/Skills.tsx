import { skills } from '../data/portfolio'
import { fill } from '../lib/hue'

// Colour-coded definition list: each group's colour is its label; tools follow as plain text.
export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1200px] px-4 py-20 md:px-6 md:py-28">
      <h2 className="text-[clamp(32px,4.4vw,52px)] leading-[1.05] font-semibold tracking-[-0.03em]">Skills</h2>
      <dl className="mt-12 grid gap-x-12 gap-y-9 md:grid-cols-2">
        {skills.map((g) => (
          <div key={g.title} className="flex flex-col items-start gap-3">
            <dt className={`rounded-full px-4 py-1.5 font-display text-[16px] font-semibold ${fill[g.hue]}`}>{g.title}</dt>
            <dd className="text-[17px] text-graphite">{g.items.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
