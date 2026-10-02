# Changelog

All notable changes to this portfolio. Format: [Keep a Changelog](https://keepachangelog.com/); versioning: SemVer.

## [1.0.1] - 2026-10-02
### Fixed
- Copy audited against the resume by the `content-editor` agent: removed unsupported claims (fictional service names, production Kubernetes, private subnets, "rolling deploy", "under two years").
- Accessibility (`ui-qa` agent): closed mobile menu no longer traps Tab focus; `aria-controls` on the menu button; `--text-faint` and light `--accent` now meet WCAG AA (≥4.5:1); `theme-color` follows the theme.
- Infra (`infra-reviewer` agent): Trivy pinned to its commit SHA; OIDC trust limited to the `production` environment; deploy gated on CI success with a `ref` rollback input; CloudFront Function for SPA routing so missing assets 404; Permissions-Policy at the edge; dropped unneeded `s3:GetObject`; nginx 1.30 / Node 24 images; Dependabot for Terraform; committed provider lockfile.

## [1.0.0] - 2026-10-02
### Added
- React 19 + TypeScript + Vite portfolio: Hero with animated terminal, impact metrics, skills, experience timeline, projects (with YoCharge AWS architecture diagram), "this site is a DevOps project" pipeline section, credentials, contact.
- Dark/light theme with OS detection and persisted toggle; reduced-motion support; responsive down to 360px.
- All content centralized in `src/data/portfolio.ts`.
- Multi-stage Dockerfile (non-root nginx), docker-compose, hardened nginx config.
- GitHub Actions CI (lint, build, Trivy, Terraform validate) and CD (OIDC → S3 → CloudFront).
- Terraform for S3 (private, OAC, versioned) + CloudFront + GitHub OIDC IAM role.
- Dependabot, Makefile, deployment docs.
- `.claude/` plan, skills and agents for tracked AI-assisted changes.
