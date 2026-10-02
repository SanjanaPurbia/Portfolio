import { useState } from 'react'
import { Plus } from '@phosphor-icons/react'
import { projects } from '../data/portfolio'

// Accordion rows: the row shows client and result; opening it shows how.
export function Projects() {
  const [open, setOpen] = useState<string | null>(projects.find((p) => p.featured)?.id ?? null)

  return (
    <section id="work" className="mx-auto max-w-[1200px] px-4 py-20 md:px-6 md:py-28">
      <h2 className="text-[clamp(32px,4.4vw,52px)] leading-[1.05] font-semibold tracking-[-0.03em]">Selected work</h2>
      <p className="mt-4 max-w-[52ch] text-graphite">
        Production platforms for EV charging, AgriTech and eCommerce clients.
      </p>

      <ul className="mt-12 divide-y divide-rule border-y border-rule">
        {projects.map((p) => {
          const isOpen = open === p.id
          const panelId = `project-${p.id}`
          return (
            <li key={p.id}>
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : p.id)}
                  className="group grid w-full cursor-pointer grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 py-7 text-left md:grid-cols-[minmax(0,5fr)_minmax(0,4fr)_auto] md:py-9"
                >
                  <span>
                    <span className="block font-display text-[clamp(26px,3.2vw,38px)] leading-tight font-semibold tracking-[-0.025em] transition-colors group-hover:text-cobalt">
                      {p.client}
                    </span>
                    <span className="mt-1 block text-[15px] font-normal text-graphite">
                      {p.name}, {p.year}
                    </span>
                  </span>
                  <span className="col-span-2 row-start-2 font-sans text-[17px] font-normal text-graphite md:col-span-1 md:row-start-auto">
                    <span className="font-display text-[26px] font-semibold tracking-tight text-ink">{p.impact.value}</span>{' '}
                    {p.impact.label}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`col-start-2 row-start-1 grid size-11 place-items-center rounded-full border border-rule transition-transform duration-300 md:col-start-3 ${isOpen ? 'rotate-45' : ''}`}
                  >
                    <Plus size={18} weight="bold" />
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-label={`${p.client} details`}
                className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <div className="overflow-hidden" inert={!isOpen}>
                  <div className="grid gap-8 pb-10 md:grid-cols-[minmax(0,5fr)_minmax(0,4fr)_44px] md:gap-6">
                    <div>
                      <p className="max-w-[52ch] text-[19px] leading-relaxed">{p.summary}</p>
                      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Stack">
                        {p.stack.map((s) => (
                          <li key={s} className="rounded-full border border-rule px-3 py-1 text-[14px] text-graphite">
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <ul className="space-y-3">
                      {p.highlights.map((h) => (
                        <li key={h} className="relative pl-5 text-[15px] text-graphite before:absolute before:top-[0.7em] before:left-0 before:h-px before:w-2.5 before:bg-graphite">
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
