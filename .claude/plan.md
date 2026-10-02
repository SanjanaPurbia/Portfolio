# Portfolio Plan & Tracker

Living tracker for the portfolio. Move items between sections as work progresses and add a dated line to the log at the bottom.
Status keys: `[ ]` todo · `[~]` in progress · `[x]` done · `[!]` blocked (needs input from Sanjana)

## Goals
1. Get recruiters and hiring managers to the key facts (role, impact, stack, contact) within 10 seconds.
2. Make the repo itself evidence of DevOps skill: IaC, CI/CD, containers, security, docs.
3. Keep content edits trivial: one data file, no JSX.

## Information architecture
| # | Section | Component | Purpose |
|---|---------|-----------|---------|
| 0 | Hero | `Hero.tsx` + `Terminal.tsx` | Name, role, pitch, CTAs, animated terraform/argocd/kubectl session |
| – | Metrics | `Metrics.tsx` | 70% / 80% / 15+ / 10+ count-up tiles |
| 01 | Skills | `Skills.tsx` | Six toolchain groups |
| 02 | Experience | `Experience.tsx` | Timeline, current role highlighted |
| 03 | Projects | `Projects.tsx` + `ArchDiagram.tsx` | YoCharge featured with architecture; Uncompromised, Dnatur |
| 04 | Pipeline | `Pipeline.tsx` | How this site ships (meta-showcase) |
| 05 | Credentials | `Credentials.tsx` | AWS CCP, B.Tech |
| 06 | Contact | `Contact.tsx` | Email (copy), LinkedIn, resume |

## Done (v1.0.0, 2026-10-02)
- [x] Vite + React 19 + TS scaffold, oxlint clean, strict typecheck
- [x] Design tokens, dark/light themes, reduced motion, mobile layout (verified at 390/1440 with puppeteer, no overflow, no console errors)
- [x] All sections above, content from resume (Sep 2026)
- [x] Dockerfile + nginx + compose
- [x] CI (lint/build/Trivy/terraform validate) + CD (OIDC → S3 → CloudFront)
- [x] Terraform: S3 + OAC + CloudFront + OIDC role (`terraform validate` passes)
- [x] README, CLAUDE.md, CHANGELOG, docs/DEPLOYMENT.md, skills, agents

## Done (v1.0.1, 2026-10-02): agent review pass
- [x] `content-editor`: copy audited against resume, unsupported claims removed
- [x] `infra-reviewer`: 9 findings fixed (Trivy SHA, OIDC scope, CI-gated deploy + rollback input, CloudFront SPA function, headers, IAM, images, Dependabot TF, lockfile)
- [x] `ui-qa`: mobile/tablet/desktop × dark/light pass; nav focus trap + WCAG AA contrast fixed

## Backlog
### Needs input from Sanjana
- [!] GitHub profile URL → `profile.socials.github` in `src/data/portfolio.ts`
- [!] Custom domain? (e.g. sanjanapurbia.dev) → ACM in us-east-1 + Route 53 alias (see comment in `infra/terraform/main.tf`)
- [!] Professional photo / avatar (optional)
- [!] Credly badge URL for AWS CCP to link the certification
- [!] Create the GitHub repo, then `terraform apply` and set the repo vars (docs/DEPLOYMENT.md)

### Enhancements
- [ ] OG share image (1200×630) at `public/og.png` and `og:image` meta
- [ ] `sitemap.xml` + canonical URL once the domain is known
- [ ] Open-source showcase repos (Terraform modules, Jenkins shared library sample) with links from project cards
- [ ] Blog / write-ups section (e.g. "Azure → GCP migration lessons")
- [ ] Lighthouse CI job in `ci.yml` (budget: perf ≥ 95, a11y = 100)
- [ ] Code-split framer-motion, or replace it with CSS to cut the JS bundle (~120 kB gzip today)
- [ ] Self-host fonts to drop the Google Fonts CSP exceptions
- [ ] Uptime check (Uptime Kuma / CloudWatch Synthetics) on the live URL, a nice nod to monitoring skills
- [ ] Pin Docker base images by digest (Docker Hub API unavailable during v1.0.1)
- [ ] Verify `docker build` + `/healthz` locally (Docker daemon was down during v1.0.1)
- [ ] Flip Trivy to `exit-code: 1` once the base image scans clean
- [ ] Remote Terraform state (S3 backend + lockfile) once the account is set up

## Change log
<!-- newest first: YYYY-MM-DD: what changed (files) -->
- 2026-10-02: v1.0.1 agent review pass. Copy accuracy, a11y/contrast, infra hardening (src/, index.css, .github/, infra/, Dockerfile, docs/).
- 2026-10-02: v1.0.0 initial build. React app, infra, CI/CD, docs, .claude setup.
