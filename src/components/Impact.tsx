import { impact } from '../data/portfolio'
import { fill } from '../lib/hue'

// Uneven 4-cell bento, one solid hue per result. Widths: wide, narrow / narrow, wide.
const span = ['md:col-span-4', 'md:col-span-2', 'md:col-span-2', 'md:col-span-4']

export function Impact() {
  return (
    <section aria-labelledby="impact-title" className="mx-auto max-w-[1200px] px-4 py-20 md:px-6 md:py-28">
      <h2 id="impact-title" className="max-w-[18ch] text-[clamp(32px,4.4vw,52px)] leading-[1.05] font-semibold tracking-[-0.03em]">
        What changed once it was automated
      </h2>
      <div className="mt-12 grid gap-4 md:grid-cols-6">
        {impact.map((item, i) => (
          <div key={item.label} className={`flex min-h-[230px] flex-col justify-between rounded-tile p-7 md:p-9 ${span[i]} ${fill[item.hue]}`}>
            <p className={`font-display leading-none font-semibold tracking-[-0.045em] ${i === 0 ? 'text-[clamp(80px,10vw,132px)]' : 'text-[clamp(60px,6.4vw,84px)]'}`}>
              {item.value}
            </p>
            <div className="mt-8">
              <p className="font-display text-[22px] font-semibold tracking-tight">{item.label}</p>
              <p className="mt-2 max-w-[44ch] text-[15px] leading-relaxed">{item.context}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
