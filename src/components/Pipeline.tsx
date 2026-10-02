import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { Check, Loader2 } from 'lucide-react'
import { sitePipeline } from '../data/portfolio'
import { SectionHead } from './SectionHead'
import { Reveal } from './Reveal'
import './Pipeline.css'

const STEP_MS = 650

export function Pipeline() {
  const ref = useRef<HTMLOListElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduce = useReducedMotion()
  const [done, setDone] = useState(reduce ? sitePipeline.length : 0)

  useEffect(() => {
    if (!inView || reduce || done >= sitePipeline.length) return
    const t = setTimeout(() => setDone((d) => d + 1), STEP_MS)
    return () => clearTimeout(t)
  }, [inView, reduce, done])

  const finished = done >= sitePipeline.length

  return (
    <section id="pipeline" className="section">
      <div className="container">
        <SectionHead
          eyebrow="04 · cat .github/workflows/*.yml"
          title="This site is a DevOps project too"
          lede="This page goes through the same discipline I bring to client work: every push is linted, built, scanned and shipped to S3 + CloudFront with short-lived OIDC credentials, with Terraform owning the infrastructure."
        />
        <Reveal className="pipe card">
          <div className="pipe__head mono">
            <span>workflow: deploy</span>
            <span className={`pipe__state ${finished ? 'pipe__state--ok' : ''}`}>
              {finished ? '● success' : '● running'}
            </span>
          </div>
          <ol ref={ref} className="pipe__stages">
            {sitePipeline.map((stage, i) => {
              const state = i < done ? 'done' : i === done && inView ? 'run' : 'wait'
              return (
                <li key={stage.id} className={`pipe__stage pipe__stage--${state}`}>
                  <span className="pipe__icon" aria-hidden="true">
                    {state === 'done' ? <Check size={14} /> : state === 'run' ? <Loader2 size={14} className="spin" /> : null}
                  </span>
                  <span className="pipe__label">{stage.label}</span>
                  <span className="pipe__detail mono">{stage.detail}</span>
                </li>
              )
            })}
          </ol>
          <ul className="pipe__facts">
            <li><b>Docker</b> multi-stage build → non-root nginx</li>
            <li><b>Terraform</b> S3 (private, OAC) + CloudFront + IAM OIDC role</li>
            <li><b>Security</b> Trivy scan, CSP headers, no long-lived AWS keys</li>
            <li><b>Ops</b> Dependabot, cache-split uploads, versioned rollbacks</li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
