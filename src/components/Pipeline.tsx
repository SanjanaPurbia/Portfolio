import { useEffect, useState } from 'react'
import { Check, GitCommit } from '@phosphor-icons/react'
import { pipeline } from '../data/portfolio'

type StageState = 'pending' | 'running' | 'done'
type Run = { stages: StageState[]; links: boolean[]; envs: number; passed: boolean }

const STAGES = pipeline.stages.length
const finished: Run = {
  stages: Array(STAGES).fill('done'),
  links: Array(STAGES).fill(true),
  envs: pipeline.environments.length,
  passed: true,
}
const idle: Run = { stages: Array(STAGES).fill('pending'), links: Array(STAGES).fill(false), envs: 0, passed: false }

// Timing: each stage runs for RUN ms, then the next starts GAP ms later. Environments light up
// one by one once Deploy passes. The whole run takes under five seconds and never repeats.
const START = 500
const RUN = 700
const GAP = 220
const ENV_STAGGER = 140
const DEPLOY = pipeline.stages.findIndex((s) => s.name === 'Deploy')

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// "How I ship": runs once on load. Reduced motion shows the finished, passing pipeline.
export function Pipeline({ className = '' }: { className?: string }) {
  const [run, setRun] = useState<Run>(() => (prefersReducedMotion() ? finished : idle))

  useEffect(() => {
    if (prefersReducedMotion()) return
    const timers: number[] = []
    const at = (ms: number, update: (r: Run) => Run) => timers.push(window.setTimeout(() => setRun(update), ms))
    const set = <T,>(list: T[], i: number, value: T) => list.map((v, k) => (k === i ? value : v))

    let t = START
    for (let i = 0; i < STAGES; i++) {
      at(t, (r) => ({ ...r, stages: set(r.stages, i, 'running') }))
      t += RUN
      at(t, (r) => ({ ...r, stages: set(r.stages, i, 'done'), links: set(r.links, i, true) }))
      if (i === DEPLOY)
        pipeline.environments.forEach((_, k) => at(t + k * ENV_STAGGER, (r) => ({ ...r, envs: Math.max(r.envs, k + 1) })))
      t += GAP
    }
    at(t + 200, (r) => ({ ...r, passed: true }))
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <figure aria-labelledby="pipe-title" className={`overflow-hidden rounded-panel border border-line bg-surface shadow-panel ${className}`}>
      <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3.5 sm:px-5 sm:py-4">
        <div className="flex min-w-0 items-center gap-3">
          <span aria-hidden="true" className="grid size-[34px] shrink-0 place-items-center rounded-[10px] border border-line bg-surface-2 text-soft">
            <GitCommit size={18} />
          </span>
          <div>
            <strong id="pipe-title" className="block text-[15px] leading-tight font-semibold">
              {pipeline.title}
            </strong>
            <span className="block text-[13px] leading-snug text-muted">{pipeline.subtitle}</span>
          </div>
        </div>
        <span
          aria-hidden="true"
          className={`inline-flex h-7 shrink-0 items-center gap-2 rounded-full px-3 text-[13px] font-medium transition-colors duration-300 ${
            run.passed ? 'bg-ok-wash text-ok' : 'bg-run-wash text-run'
          }`}
        >
          {run.passed ? (
            <Check size={14} weight="bold" />
          ) : (
            <span className="size-3 animate-[spin_0.8s_linear_infinite] rounded-full border-2 border-current border-r-transparent" />
          )}
          {run.passed ? 'Passed' : 'Running'}
        </span>
      </div>

      {/* Phones: a vertical list with the connector running down. From 720px: four columns. */}
      <ol aria-hidden="true" className="grid px-[18px] pt-[22px] pb-1.5 min-[720px]:grid-cols-4 min-[720px]:px-5 min-[720px]:pt-7 min-[720px]:pb-6">
        {pipeline.stages.map((stage, i) => {
          const last = i === STAGES - 1
          return (
            <li
              key={stage.name}
              data-state={run.stages[i]}
              data-link={run.links[i] ? 'on' : 'off'}
              className="stage relative grid grid-cols-[32px_minmax(0,1fr)] gap-x-3.5 pb-[22px] min-[720px]:block min-[720px]:pr-3.5 min-[720px]:pb-0 min-[720px]:last:pr-0"
            >
              <span className="stage-node relative z-[1] row-span-2 grid size-8 place-items-center rounded-full border-[1.5px] border-line-strong bg-surface text-transparent">
                <span className="stage-ring absolute -inset-[1.5px] rounded-full border-2 border-run border-r-transparent" />
                <Check size={16} weight="bold" />
              </span>
              {!last && (
                <span className="stage-link absolute top-10 bottom-1 left-[15px] w-0.5 overflow-hidden rounded-sm bg-line min-[720px]:top-[15px] min-[720px]:right-3 min-[720px]:bottom-auto min-[720px]:left-11 min-[720px]:h-0.5 min-[720px]:w-auto" />
              )}
              <div>
                <p className="mt-[5px] text-[15px] font-semibold min-[720px]:mt-3.5">{stage.name}</p>
                <ul className="mt-1.5 grid gap-1.5 min-[720px]:mt-2.5">
                  {stage.jobs.map((job) => (
                    <li key={job} className="flex items-start gap-2 text-[13px] leading-snug text-muted">
                      <Check size={13} weight="bold" className="job-check mt-0.5 shrink-0 text-ok transition-opacity duration-300" />
                      {job}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          )
        })}
      </ol>

      <div aria-hidden="true" className="flex flex-wrap items-center gap-2 border-t border-line bg-surface-2 px-4 py-3.5 sm:px-5">
        <span className="mr-1 text-[13px] text-muted">Environments</span>
        {pipeline.environments.map((env, k) => (
          <span key={env} className="chip gap-[7px] bg-surface">
            <span className={`size-1.5 rounded-full transition-colors duration-300 ${k < run.envs ? 'bg-ok' : 'bg-line-strong'}`} />
            {env}
          </span>
        ))}
      </div>
      <figcaption className="sr-only">{pipeline.description}</figcaption>
    </figure>
  )
}
