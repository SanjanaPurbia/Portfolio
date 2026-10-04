import { impact, sections } from '../data/portfolio'
import { Section } from './Section'

const legend = (
  <div aria-hidden="true" className="flex gap-[18px] text-[13px] text-muted">
    <span className="inline-flex items-center gap-2">
      <i className="h-1.5 w-[18px] rounded-full bg-line-strong" />
      Before
    </span>
    <span className="inline-flex items-center gap-2">
      <i className="h-1.5 w-[18px] rounded-full bg-ok" />
      After
    </span>
  </div>
)

// Status board: one tile per measured result, with a before/after bar or a module count.
export function Impact() {
  return (
    <Section id="impact" title={sections.impact.title} aside={legend}>
      <div className="grid gap-4 min-[640px]:grid-cols-2 min-[1080px]:grid-cols-4">
        {impact.map((t) => (
          <article key={t.key} className="flex flex-col rounded-tile border border-line bg-surface p-5">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[13px] text-muted">{t.key}</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-ok">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-ok" />
                {t.status}
              </span>
            </div>
            <p className="mt-[18px] text-[clamp(2.5rem,4vw,3rem)] leading-none font-semibold tracking-[-0.045em] tabular-nums">{t.value}</p>
            <h3 className="mt-2 leading-[1.35] font-medium min-[640px]:min-h-[2.7em]">{t.label}</h3>
            {t.after !== undefined && (
              <div role="img" aria-label={`After automation it is ${t.after}% of what it was before.`} className="mt-[22px] grid gap-2">
                {[
                  ['Before', 100],
                  ['After', t.after],
                ].map(([label, width]) => (
                  <div key={label} className="grid grid-cols-[44px_minmax(0,1fr)] items-center gap-2.5 text-xs text-muted">
                    <span>{label}</span>
                    <span className="h-2 overflow-hidden rounded-full bg-sunken">
                      <i className={`block h-full rounded-full ${label === 'After' ? 'bg-ok' : 'bg-line-strong'}`} style={{ width: `${width}%` }} />
                    </span>
                  </div>
                ))}
              </div>
            )}
            {t.modules !== undefined && (
              <div role="img" aria-label={`${t.modules} squares, one per Terraform module, with an open square for more.`} className="mt-[22px] grid max-w-[220px] grid-cols-8 gap-[5px]">
                {Array.from({ length: t.modules }, (_, i) => (
                  <i key={i} className="aspect-square rounded bg-ok opacity-90" />
                ))}
                <i className="aspect-square rounded border-[1.5px] border-dashed border-edge" />
              </div>
            )}
            <p className="mt-auto pt-5 text-sm leading-normal text-muted">{t.context}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
