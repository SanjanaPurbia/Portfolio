import { Reveal } from './Reveal'

type Props = { eyebrow: string; title: string; lede?: string }

export function SectionHead({ eyebrow, title, lede }: Props) {
  return (
    <Reveal className="section-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {lede && <p className="section-lede">{lede}</p>}
    </Reveal>
  )
}
