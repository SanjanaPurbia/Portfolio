import { impact } from '../data/portfolio'

// Uneven 4-cell bento: wide cobalt lead tile, then tiles that vary in width and surface.
const cells = [
  'md:col-span-4 bg-feature text-on-feature',
  'md:col-span-2 bg-raised',
  'md:col-span-2 bg-raised',
  'md:col-span-4 bg-raised bg-[repeating-linear-gradient(135deg,var(--rule)_0_1px,transparent_1px_14px)]',
]

export function Impact() {
  return (
    <section aria-labelledby="impact-title" className="mx-auto max-w-[1200px] px-4 py-20 md:px-6 md:py-28">
      <h2 id="impact-title" className="max-w-[18ch] text-[clamp(32px,4.4vw,52px)] leading-[1.05] font-semibold tracking-[-0.03em]">
        What changed once it was automated
      </h2>
      <div className="mt-12 grid gap-4 md:grid-cols-6">
        {impact.map((item, i) => {
          const lead = i === 0
          return (
            <div key={item.label} className={`flex min-h-[220px] flex-col justify-between rounded-tile p-7 md:p-8 ${cells[i]}`}>
              <p className={`font-display font-semibold tracking-[-0.04em] leading-none ${lead ? 'text-[clamp(72px,9vw,120px)]' : 'text-[clamp(56px,6vw,76px)]'}`}>
                {item.value}
              </p>
              <div className="mt-8">
                <p className="font-display text-[21px] font-medium tracking-tight">{item.label}</p>
                <p className={`mt-2 max-w-[44ch] text-[15px] leading-relaxed ${lead ? 'text-on-feature/85' : 'text-graphite'}`}>
                  {item.context}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
