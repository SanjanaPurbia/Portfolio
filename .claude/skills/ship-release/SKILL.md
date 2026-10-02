---
name: ship-release
description: Prepare and ship a portfolio release. Runs quality gates, bumps the version, updates the changelog and plan, commits, and explains how deploy happens. Use when the user says ship, release, deploy or publish.
---

# Ship a release

## Gates (stop and report if any fail)
1. `npm ci && npm run lint && npm run build`, zero warnings.
2. If Docker is running: `make docker-build`, then `docker run -d -p 8080:8080 --name pf-smoke sanjana-portfolio:local`, `curl -fsS localhost:8080/healthz`, and remove the container.
3. If `infra/` changed: `terraform -chdir=infra/terraform fmt -check -recursive` and `terraform -chdir=infra/terraform init -backend=false && terraform -chdir=infra/terraform validate`. Then delete `.terraform/` and the lockfile if they weren't committed.

## Release
4. Bump `version` in `package.json` (patch = copy/style, minor = new section/feature, major = redesign).
5. Move `[Unreleased]` entries in `CHANGELOG.md` under the new version with today's date.
6. Mark finished items `[x]` in `.claude/plan.md` and add a change-log line.
7. Commit (`release: vX.Y.Z`) and tag `vX.Y.Z`. **Ask before pushing**, because a push to `main` triggers the production deploy (`.github/workflows/deploy.yml`).
8. After the push, point the user to the Actions run. Rollback = re-run the deploy workflow on the previous commit, or restore S3 object versions (docs/DEPLOYMENT.md).
