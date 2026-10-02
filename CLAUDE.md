# CLAUDE.md

Portfolio site for Sanjana Purbia (DevOps Engineer). React 19 + TypeScript + Vite, deployed to S3 + CloudFront via GitHub Actions and Terraform.

## Commands
- `npm run dev` · `npm run build` (runs `tsc -b` first) · `npm run lint` (oxlint)
- `make help` lists Docker and Terraform targets
- Build and lint must both pass with **zero warnings** before any change is considered done.

## Conventions
- **Content lives only in `src/data/portfolio.ts`.** Never hard-code resume facts in components. Use `/update-content`.
- One section = `src/components/<Name>.tsx` + `<Name>.css`, rendered from `src/App.tsx`. Use `/add-section`.
- Styling is plain CSS with tokens in `src/index.css`. Use `var(--token)` and never raw hex in components. Any new color token needs dark and light values in **both** light-mode blocks.
- Sections use `<SectionHead eyebrow="NN · shell-command" ...>` and `<Reveal>` for entry animation. Eyebrows are numbered in page order.
- Every animation must respect `prefers-reduced-motion` (framer's `useReducedMotion`, or the global CSS rule).
- Icons come from `lucide-react`. Brand marks (GitHub, LinkedIn) are in `BrandIcons.tsx` because lucide v1 removed them.
- Mobile first: check at 390px wide with no horizontal scroll.
- No inline `<script>`: the CSP (`nginx/default.conf` and the CloudFront headers policy in `infra/terraform/main.tf`) only allows `script-src 'self'`. A new external origin (fonts, analytics) must be added to **both** CSPs.
- Content claims must be traceable to the resume. Don't invent metrics.

## Tracking
- Update `.claude/plan.md` (move items between Backlog / In progress / Done) and `CHANGELOG.md` with every meaningful change.
