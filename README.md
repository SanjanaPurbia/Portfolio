# Sanjana Purbia · DevOps Portfolio

Personal portfolio for **Sanjana Purbia**, DevOps Engineer (AWS · Terraform · CI/CD · Docker · Kubernetes).

The site is a React app, and the repo is set up the way I run production systems: containerized, scanned in CI, deployed by GitHub Actions to S3 + CloudFront with OIDC (no static AWS keys), with all infrastructure in Terraform.

## Stack

| Layer | Tech |
| --- | --- |
| UI | React 19, TypeScript, Vite, framer-motion, lucide-react, plain CSS with design tokens |
| Quality | oxlint, `tsc -b` strict typecheck |
| Container | Multi-stage Dockerfile → non-root nginx, security headers, `/healthz` |
| CI | GitHub Actions: lint, build, Docker build + Trivy scan, `terraform fmt/validate` |
| CD | GitHub Actions → OIDC → S3 sync (cache split) → CloudFront invalidation |
| IaC | Terraform: private S3 + OAC, CloudFront, IAM OIDC role (least privilege) |
| Maintenance | Dependabot (npm, actions, docker) |

## Quick start

```bash
make install     # npm ci
make dev         # http://localhost:5173
make build       # typecheck + production build to dist/
make lint
make docker-run  # http://localhost:8080 (nginx, same as production)
make help        # all targets
```

## Project layout

```
src/
  data/portfolio.ts     ← ALL content lives here (edit this when the resume changes)
  components/           one component + co-located CSS per section
  hooks/                useTheme, useCountUp
  index.css             design tokens (dark/light), base styles
public/                 resume PDF, favicon, theme-init.js
infra/terraform/        S3 + CloudFront + GitHub OIDC role
.github/workflows/      ci.yml, deploy.yml
nginx/default.conf      container runtime config
docs/DEPLOYMENT.md      one-time AWS bootstrap + rollback
.claude/                plan, skills and agents for AI-assisted changes
```

## Updating content

Edit `src/data/portfolio.ts`. Components read from it, so no JSX changes are needed for new jobs, projects, skills or metrics. To change the resume, replace `public/SanjanaPurbia_Resume.pdf` and keep the same filename.

## Deploying

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md). Short version: `terraform apply` once, copy the outputs into GitHub repo variables/secrets, then every push to `main` that passes CI deploys automatically.

## Working with Claude Code

- `CLAUDE.md`: project conventions Claude follows.
- `.claude/plan.md`: roadmap and change log of planned and finished work.
- `.claude/skills/`: repeatable workflows (`/update-content`, `/add-section`, `/ship-release`).
- `.claude/agents/`: specialist subagents (content editor, infra reviewer, UI QA).
