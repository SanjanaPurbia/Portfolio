import type { Diagram as Spec } from '../data/portfolio'

const NODE_H = 44

// Draws one architecture illustration from its spec in portfolio.ts. Decorative to assistive
// tech: the visible caption carries the same information.
export function Diagram({ id, spec }: { id: string; spec: Spec }) {
  const arrow = `arrow-${id}`
  return (
    <svg viewBox={`0 0 ${spec.w} ${spec.h}`} aria-hidden="true" focusable="false" className="relative mx-auto h-auto w-full max-w-[440px] overflow-visible">
      <defs>
        <marker id={arrow} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L8 4 L0 8 Z" className="d-arrow" />
        </marker>
      </defs>
      {spec.groups.map((g) => (
        <g key={g.label}>
          <rect x={g.x} y={g.y} width={g.w} height={g.h} rx={12} className="d-group" />
          <text x={g.lx} y={g.ly} textAnchor={g.anchor} className="d-glabel">
            {g.label}
          </text>
        </g>
      ))}
      {spec.edges.map((e) => (
        <g key={e.d}>
          <path d={e.d} className={`d-edge${e.dash ? ' dash' : ''}`} markerEnd={`url(#${arrow})`} />
          {e.label && (
            <text x={e.lx} y={e.ly} textAnchor={e.anchor} className="d-elabel">
              {e.label}
            </text>
          )}
        </g>
      ))}
      {spec.nodes.map((n) => {
        const h = n.h ?? NODE_H
        return (
          <g key={`${n.label}-${n.x}-${n.y}`} className={`d-node${n.kind ? ` ${n.kind}` : ''}`}>
            <rect x={n.x} y={n.y} width={n.w} height={h} rx={9} />
            {n.sub ? (
              <>
                <text x={n.x + 12} y={n.y + 19} className="d-label">
                  {n.label}
                </text>
                <text x={n.x + 12} y={n.y + 34} className="d-sub">
                  {n.sub}
                </text>
              </>
            ) : (
              <text x={n.x + 12} y={n.y + h / 2 + 4.5} className="d-label">
                {n.label}
              </text>
            )}
          </g>
        )
      })}
    </svg>
  )
}
