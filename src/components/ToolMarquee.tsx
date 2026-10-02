import { useReducedMotion } from 'motion/react'
import {
  siAnsible,
  siArgo,
  siDocker,
  siGithubactions,
  siGnubash,
  siGooglecloud,
  siJenkins,
  siKubernetes,
  siPagerduty,
  siPostgresql,
  siPython,
  siRancher,
  siTerraform,
  siUbuntu,
} from 'simple-icons'
import { tools } from '../data/portfolio'

type Tool = (typeof tools)[number]

// Named imports keep the bundle to these 14 marks (the package holds ~3,000).
const icons = {
  siAnsible,
  siArgo,
  siDocker,
  siGithubactions,
  siGnubash,
  siGooglecloud,
  siJenkins,
  siKubernetes,
  siPagerduty,
  siPostgresql,
  siPython,
  siRancher,
  siTerraform,
  siUbuntu,
} satisfies Record<Tool['icon'], unknown>

function Logo({ tool }: { tool: Tool }) {
  const icon = icons[tool.icon]
  return (
    <li className="flex shrink-0 items-center px-2.5 md:px-3">
      <span className="grid size-16 place-items-center rounded-full bg-chip md:size-[72px]">
        {/* Brand colour from Simple Icons; the chip stays light so it reads in both themes. */}
        <svg role="img" aria-label={tool.name} viewBox="0 0 24 24" className="size-8 md:size-9" fill={`#${icon.hex}`}>
          <title>{tool.name}</title>
          <path d={icon.path} />
        </svg>
      </span>
    </li>
  )
}

// Logo-only wall of the tools Sanjana runs in production. The one marquee on the page.
export function ToolMarquee() {
  const reduce = useReducedMotion()
  return (
    <section aria-label="Tools I work with" className="py-6">
      {reduce ? (
        <ul className="mx-auto flex max-w-[1200px] flex-wrap justify-center gap-y-4 px-4">
          {tools.map((t) => (
            <Logo key={t.name} tool={t} />
          ))}
        </ul>
      ) : (
        <div className="marquee overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="marquee-track flex w-max">
            <ul className="flex">
              {tools.map((t) => (
                <Logo key={t.name} tool={t} />
              ))}
            </ul>
            {/* Second copy makes the loop seamless; hidden from assistive tech. */}
            <ul className="flex" aria-hidden="true">
              {tools.map((t) => (
                <Logo key={t.name} tool={t} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  )
}
