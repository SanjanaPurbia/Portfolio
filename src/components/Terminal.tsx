import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import './Terminal.css'

type Line = { kind: 'cmd' | 'out' | 'ok' | 'dim'; text: string }

// A condensed day: plan infra, ship it, check the services.
const script: Line[] = [
  { kind: 'cmd', text: 'terraform plan -out=tfplan' },
  { kind: 'dim', text: 'Refreshing state... [vpc, alb, rds, cloudfront]' },
  { kind: 'out', text: 'Plan: 3 to add, 1 to change, 0 to destroy.' },
  { kind: 'cmd', text: 'terraform apply tfplan' },
  { kind: 'ok', text: 'Apply complete! Resources: 3 added, 1 changed.' },
  { kind: 'cmd', text: 'argocd app sync web-api' },
  { kind: 'ok', text: 'Synced · Healthy · rev a91f3c2' },
  { kind: 'cmd', text: 'docker service ls' },
  { kind: 'out', text: 'web-api    replicated   3/3' },
  { kind: 'out', text: 'gateway    replicated   2/2' },
]

const CHAR_MS = 28
const LINE_PAUSE_MS = 380

export function Terminal() {
  const reduce = useReducedMotion()
  const [lineIdx, setLineIdx] = useState(reduce ? script.length : 0)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    if (reduce) return
    if (lineIdx >= script.length) {
      const restart = setTimeout(() => {
        setLineIdx(0)
        setCharIdx(0)
      }, 5000)
      return () => clearTimeout(restart)
    }
    const line = script[lineIdx]
    // Commands are typed; output appears all at once, like a real shell.
    if (line.kind === 'cmd' && charIdx < line.text.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), CHAR_MS)
      return () => clearTimeout(t)
    }
    const t = setTimeout(
      () => {
        setLineIdx((i) => i + 1)
        setCharIdx(0)
      },
      line.kind === 'cmd' ? LINE_PAUSE_MS : LINE_PAUSE_MS / 2,
    )
    return () => clearTimeout(t)
  }, [lineIdx, charIdx, reduce])

  const visible = script.slice(0, lineIdx + 1).map((line, i) => {
    if (i < lineIdx) return line
    if (line.kind === 'cmd') return { ...line, text: line.text.slice(0, charIdx) }
    return line
  })

  return (
    <div className="term card" role="img" aria-label="Terminal running terraform, argocd and docker commands">
      <div className="term__bar">
        <span className="term__dot" />
        <span className="term__dot" />
        <span className="term__dot" />
        <span className="term__title mono">sanjana@ops: ~/infra</span>
      </div>
      <pre className="term__body mono" aria-hidden="true">
        {visible.map((l, i) => (
          <div key={i} className={`term__line term__line--${l.kind}`}>
            {l.kind === 'cmd' && <span className="term__ps">$ </span>}
            {l.text}
            {i === visible.length - 1 && lineIdx < script.length && <span className="term__caret" />}
          </div>
        ))}
        {lineIdx >= script.length && (
          <div className="term__line term__line--cmd">
            <span className="term__ps">$ </span>
            <span className="term__caret" />
          </div>
        )}
      </pre>
    </div>
  )
}
