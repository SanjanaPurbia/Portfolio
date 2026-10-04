import type { ReactNode } from 'react'

type Props = { id?: string; title: string; intro?: string; aside?: ReactNode; children: ReactNode }

// Shared section frame: heading, optional intro, optional right-aligned aside (e.g. a legend).
export function Section({ id, title, intro, aside, children }: Props) {
  const titleId = `${id ?? title.toLowerCase().replace(/[^a-z]+/g, '-')}-title`
  return (
    <section id={id} aria-labelledby={titleId} className="py-[clamp(40px,5vw,60px)]">
      <div className="mx-auto max-w-[1200px] px-[clamp(16px,4vw,40px)]">
        <div className={`mb-[clamp(32px,4vw,48px)] grid gap-3 ${aside ? 'items-end min-[900px]:grid-cols-[minmax(0,1fr)_auto]' : 'max-w-[680px]'}`}>
          <div className="grid gap-3">
            <h2 id={titleId} className="text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.1] font-semibold tracking-[-0.03em]">
              {title}
            </h2>
            {intro && <p className="max-w-[60ch] text-[17px] text-muted">{intro}</p>}
          </div>
          {aside}
        </div>
        {children}
      </div>
    </section>
  )
}
