import { ArrowRight } from 'lucide-react'
import './ArchDiagram.css'

// YoCharge reference architecture, drawn as HTML so it reflows on mobile.
export function ArchDiagram() {
  return (
    <figure className="arch" aria-label="YoCharge AWS architecture: CloudFront and S3 at the edge; ALB, Dockerized EC2 and RDS PostgreSQL inside a VPC; all provisioned by Terraform.">
      <div className="arch__flow">
        <div className="arch__node">
          <span className="arch__k">clients</span>
          <span className="arch__v">users</span>
        </div>
        <ArrowRight className="arch__arrow" size={16} aria-hidden="true" />
        <div className="arch__stack">
          <div className="arch__node arch__node--edge">
            <span className="arch__k">edge</span>
            <span className="arch__v">CloudFront</span>
          </div>
          <div className="arch__node arch__node--sub">
            <span className="arch__k">static</span>
            <span className="arch__v">S3</span>
          </div>
        </div>
        <ArrowRight className="arch__arrow" size={16} aria-hidden="true" />
        <div className="arch__vpc">
          <span className="arch__vpc-label mono">VPC</span>
          <div className="arch__vpc-row">
            <div className="arch__node">
              <span className="arch__k">lb</span>
              <span className="arch__v">ALB</span>
            </div>
            <ArrowRight className="arch__arrow" size={16} aria-hidden="true" />
            <div className="arch__node">
              <span className="arch__k">compute</span>
              <span className="arch__v">EC2 · Docker</span>
            </div>
            <ArrowRight className="arch__arrow" size={16} aria-hidden="true" />
            <div className="arch__node">
              <span className="arch__k">data</span>
              <span className="arch__v">RDS Postgres</span>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="arch__rails mono">
        <span><b>IaC</b> Terraform: VPC, ALB, EC2, RDS, S3, CloudFront, IAM</span>
        <span><b>CI/CD</b> Jenkins → Docker image → EC2</span>
        <span><b>Alerts</b> Uptime Kuma → PagerDuty, multi-region</span>
      </figcaption>
    </figure>
  )
}
