import { metrics, type Metric } from '../data/portfolio'
import { useCountUp } from '../hooks/useCountUp'
import './Metrics.css'

function MetricTile({ metric }: { metric: Metric }) {
  const { ref, value } = useCountUp<HTMLSpanElement>(metric.value)
  return (
    <li className="metric">
      <span ref={ref} className="metric__value" aria-label={`${metric.value}${metric.suffix}`}>
        {value}
        <span className="metric__suffix">{metric.suffix}</span>
      </span>
      <span className="metric__label">{metric.label}</span>
    </li>
  )
}

export function Metrics() {
  return (
    <section aria-label="Impact in numbers" className="metrics-wrap">
      <ul className="container metrics">
        {metrics.map((m) => (
          <MetricTile key={m.label} metric={m} />
        ))}
      </ul>
    </section>
  )
}
