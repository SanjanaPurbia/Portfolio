# Changelog

All notable changes to this portfolio. Format: [Keep a Changelog](https://keepachangelog.com/); versioning: SemVer.

## [2.7.0] - 2026-10-02
### Changed
- **"Build. Automate. Scale." moved onto the first screen** as the hero headline, at the owner's request. It replaces "I make releases boring."
  - Left-aligned to match the subtext and buttons; sized by container query to fill the text column at every width.
  - The words rise in one by one on load.
- **Updated:** the page's share description.

### Removed
- The separate statement band below the logo strip (`Manifesto.tsx`), added in v2.6.0.

## [2.6.0] - 2026-10-02
### Added
- **"Build. Automate. Scale." statement band** after the hero and logo strip, matching the owner's reference: centred, very large, tightly stacked, with the middle word in grey.
  - The grey meets WCAG large-text contrast in both themes.
  - The words rise in once on scroll.

## [2.5.0] - 2026-10-02
### Changed
- **Contact section** rebuilt as a cinematic "night scene" after the owner's reference:
  - dark teal-grey field with a CSS glass prism refracting a sunset beam, floating slowly
  - thin uppercase glowing headline
  - IBM Plex Mono body text
  - square buttons (Email me + arrow, Download resume, LinkedIn)
  
  Content is unchanged. Recorded as a documented exception in MASTER.md.

## [2.4.0] - 2026-10-02
### Changed
- **Professional background:** the cluster field is now monochrome. Neutral dots fade out from the top of the screen, the cursor effect is a subtle darkening, and a single soft brand-blue rollout sweeps every 15 seconds.
- **Removed:** the rainbow cursor lens and the multi-colour pods. Rendering is now about 2× faster.

## [2.3.0] - 2026-10-02
### Changed
- **Front page:**
  - Availability pill ("Open to DevOps and cloud roles") with a live mint status dot.
  - Subtext now opens with her name.
  - From 1024px up, the nav, hero and logo strip fill exactly one screen.
  - Below 1024px the hero stacks (cards in a row of 4 on tablet), fixing cramped card text at 768px.

### Added
- **Phone number** (+91 95216 18221) as a tap-to-call link in the contact block and the footer. The footer also shows the email.

## [2.2.1] - 2026-10-02
### Changed
- **Calmer background:** smaller, fainter nodes on a wider grid; fewer pods; a softer and slower rollout wave (every 12s); a smaller cursor lens.
- **LinkedIn link:** updated to https://www.linkedin.com/in/sanjana-purbia/.

## [2.2.0] - 2026-10-02
### Added
- **Live "cluster map" background** (`ClusterField.tsx`): a full-page canvas grid of nodes.
  - Pods light up and fade in the six status colours.
  - A rolling-deployment wave sweeps the page every 9 seconds.
  - Nodes near the mouse form a colour-wheel lens.
  - Pauses in hidden tabs; static under reduced motion.
- **`halo` utility:** a soft page-colour glow behind text on the background, so it stays readable over the field.

## [2.1.0] - 2026-10-02
### Changed
- **Colour:** the page is now colourful, as requested. It uses a six-hue status-board palette (cobalt, tangerine, mint, sun, rose, violet); each hue marks one thing consistently. All text pairs pass WCAG AA.
- **Hero:** the photo slot is gone (the owner doesn't want a photo). In its place are four tilted fact cards in colour that drop in on load and straighten on hover.
- **Tool logos:** now in their real brand colours on light chips.
- **Sections in colour:**
  - impact tiles: solid colour fills
  - experience: role cards with a "Current" status pill
  - projects: each row has its own colour, tinted when open
  - skills: colour-coded tags
  - credentials: tinted
  - contact: closes the page with a cobalt block
- **Shapes:** container radius goes from 20px to 24px.

### Removed
- `Portrait.tsx` and `profile.photo`.

## [2.0.0] - 2026-10-02
### Removed
- All DevOps scaffolding (Dockerfile, nginx, docker-compose, GitHub Actions, Terraform, Makefile, docs/DEPLOYMENT.md, `infra-reviewer` agent, `ship-release` skill) at the owner's request. It can be recovered from commit `7c372cc`.
- The v1 design: near-black and acid green, monospace eyebrows, the fake terminal and the pipeline section.

### Added
- Rebuilt with the `frontend-design`, `taste-skill` and `ui-ux-pro-max` skills (vendored in `.claude/skills/`).
- Design system: `design-system/sanjana-purbia-portfolio/MASTER.md`.
- Tailwind v4 tokens: cool paper and cobalt, with a deep feature surface in dark mode. All pairs pass WCAG AA, most AAA.
- Self-hosted Outfit and Work Sans, Phosphor icons, and real tool logos from Simple Icons.
- Sections, each a different layout:
  - asymmetric hero
  - tool marquee
  - impact bento
  - sticky experience column
  - projects accordion
  - skills definition list
  - credentials strip
  - contact close
- Local visual QA scripts in `.qa/` (gitignored).

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
