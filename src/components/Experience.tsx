import { experience } from '../data/portfolio'
import { fill, tint } from '../lib/hue'

// Current role in mint (running, healthy); earlier role in violet.
const hues = ['mint', 'violet'] as const

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-[1200px] px-4 py-20 md:px-6 md:py-28">
      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <h2 className="text-[clamp(32px,4.4vw,52px)] leading-[1.05] font-semibold tracking-[-0.03em]">Experience</h2>
            <p className="mt-4 max-w-[30ch] text-graphite">
              Intern to DevOps Engineer in six months at Spark Eighteen, now running CI/CD for 5+ client projects.
            </p>
          </div>
        </div>
        <ol className="space-y-5 md:col-span-8">
          {experience.map((role, i) => {
            const hue = hues[i % hues.length]
            return (
              <li key={role.title} className={`rounded-tile p-7 md:p-9 ${tint[hue]}`}>
                <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
                  <div>
                    <h3 className="text-[26px] font-semibold tracking-[-0.02em]">{role.title}</h3>
                    <p className="mt-0.5 font-medium text-graphite">{role.company}</p>
                  </div>
                  <p className={`rounded-full px-4 py-1.5 text-[14px] font-semibold ${fill[hue]}`}>
                    {role.current ? `Current, since ${role.period.split(' - ')[0]}` : role.period}
                  </p>
                </div>
                <ul className="mt-6 space-y-3">
                  {role.highlights.map((h) => (
                    <li key={h} className="relative max-w-[65ch] pl-5 before:absolute before:top-[0.7em] before:left-0 before:h-0.5 before:w-2.5 before:rounded-full before:bg-ink">
                      {h}
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
