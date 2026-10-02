import { experience } from '../data/portfolio'

// Sticky heading column on desktop; roles read top to bottom (a real sequence, newest first).
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
        <ol className="space-y-14 md:col-span-8">
          {experience.map((role) => (
            <li key={role.title}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="text-[26px] font-semibold tracking-[-0.02em]">{role.title}</h3>
                <p className="text-[15px] text-graphite">{role.period}</p>
              </div>
              <p className="mt-1 font-medium text-cobalt">{role.company}</p>
              <ul className="mt-6 space-y-3">
                {role.highlights.map((h) => (
                  <li key={h} className="relative max-w-[65ch] pl-5 text-graphite before:absolute before:top-[0.7em] before:left-0 before:h-px before:w-2.5 before:bg-graphite">
                    {h}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
