# Changelog

All notable changes to this portfolio. Format: [Keep a Changelog](https://keepachangelog.com/); versioning: SemVer.

## [3.0.1] - 2026-10-04
### Added
- **Hosting on GitHub Pages:** `npm run deploy` (`scripts/deploy.sh`) builds under the `/Portfolio/` base path with `SITE_URL` set, so canonical, og:url and an absolute og:image are emitted. It then publishes `dist/` to the `gh-pages` branch. Live at https://sanjanapurbia.github.io/Portfolio/.

### Changed
- The base path is configurable (`BASE_PATH`, default `/`). The resume link and font preloads follow it.

## [3.0.0] - 2026-10-04
### Changed
- **Redesign: "Pipeline".** The owner chose this design out of seven prototypes, and the site was rebuilt around her craft:
  - The hero has a "How I ship" CI/CD pipeline (Build, Test, Deploy, Monitor across dev, staging and production). It runs once on load to "Passed".
  - The results section is now a status board with before/after bars.
  - Experience is a release log (v2.0 Live, v1.0 Completed).
  - Each project is an architecture card with an SVG illustration drawn only from its listed stack.
  - Skills are a toolchain grid, followed by a split contact panel with Email, Phone, LinkedIn and GitHub.
- **Look:** graphite neutrals with green for success and blue for running/focus, set in Geist with JetBrains Mono for small labels. Dark first, with a mirrored light theme.
- **Brand assets:** a new favicon and Apple touch icon (a passing-build dot), and a new share image from the hero.
- **Docs and tooling:** design docs (MASTER.md, CLAUDE.md, README, skills) rewritten for the new system. `.qa/e2e.mjs` is now the one regression suite.

### Removed
- The cluster-field background, tool logo marquee, tilted fact cards, colour-hue system, animation pause button and copy-email button.
- Dependencies: `motion`, `simple-icons`, Outfit and Work Sans. JS dropped from about 141 kB to 90 kB gzipped.
- The template prototypes in `design-system/templates/`.

## [2.11.0] - 2026-10-03
### Changed
- **One-scroll page:** removed the header's section links (Experience, Work, Skills, Contact) and the phone menu, at the owner's request. The header keeps the name and the theme toggle; every detail is reached by scrolling.

### Added
- **GitHub** (github.com/SanjanaPurbia) in the contact panel, next to LinkedIn in a new "Profiles" cell, plus the footer and the no-JS fallback.

## [2.10.0] - 2026-10-03
### Added
- **Pause animations button** at the end of the logo strip. It stops the marquee, the status ping and the background rollouts, and the choice is remembered (WCAG 2.2.2).
- **Social sharing:** a 1200x630 `og-image.png`, `summary_large_image` Twitter card, an Apple touch icon, and font preloads. Canonical, `og:url` and an absolute image URL are emitted when the site is built with `SITE_URL=https://... npm run build`.
- **No-JS fallback** with name, role, summary and links to email, phone, LinkedIn and the resume.
- **GitHub link** in the footer, shown once `socials.github` is filled in.

### Fixed
- **Layout:**
  - The tool marquee now sits on the first screen at laptop sizes from 1024 to 1366 wide; the headline is capped by screen height.
  - The page no longer scrolls sideways under the WCAG text-spacing override.
  - Date ranges no longer break at the hyphen.
- **Interaction:**
  - Nav order matches the page (Experience, Work, Skills, Contact).
  - The theme follows the OS live until the visitor picks one.
  - The browser toolbar colour is correct in dark mode before JS loads.
  - A second "copy email" no longer clears the confirmation early, and the timer is cleaned up.
- **Background:** the canvas stays sharp when the window moves to a screen with a different pixel density.
- **Accessibility:**
  - Focus ring is readable on the contact panel in light mode.
  - Valid `<dl>` markup in the contact details.
  - Project buttons read "50% faster deployments" with a space.
  - The credentials section has a heading.
  - The LinkedIn link announces that it opens a new tab.
  - The nav logo badge no longer picks up the text halo.
- **Content:**
  - All visible copy now lives in `src/data/portfolio.ts`.
  - The 70% tile no longer attaches "5+ client projects".
  - "ArgoCD" and "GCP" are spelled as in the resume.
  - "client projects automated" replaces "shipped".
  - "Shell scripting" replaces "Bash" in the two project tech lists.
  - "Production" is dropped from the work intro.

### Changed
- CLAUDE.md and MASTER.md now name the owner-approved `inkwell-glow` as the one decorative gradient, and require looping motion to honour the pause button.

## [2.9.1] - 2026-10-03
### Fixed
Top four bugs from a full QA pass:
- **Shared section links** such as `/#contact` now open at that section. Before, they stayed at the top, because the page renders after the browser's own jump (new `useHashScroll` hook).
- **Background CPU when idle:** the cluster field only draws during a rollout, a pointer move, a resize or a theme change. It used to redraw an unchanged grid 60 times a second, using about 5% CPU while idle.
- **Landscape phones:** the hero headline is capped at 18svh, so all three words fit on a short screen such as 844x390.
- **Mobile menu focus:** Escape now returns focus to the menu button instead of leaving it on a hidden link.

## [2.9.0] - 2026-10-02
### Changed
- **Contact section** redesigned as an elegant closing panel (owner disliked the card pattern):
  - deep ink surface with soft cobalt and violet glows
  - light-weight Outfit headline
  - a hairline details strip (Email with copy, Phone, LinkedIn, Resume) with draw-in underlines
  - one "Email me" pill and a signature line
  
  The email never breaks mid-word.

## [2.8.0] - 2026-10-02
### Changed
- **Contact section** rebuilt in the site's own design language (owner feedback: the night scene didn't match the template). It's a bookend to the hero: big headline plus four tilted colour action cards (Email me with copy, Call me, LinkedIn, Download resume). Whole-card links; values never break mid-word.

### Removed
- The night-scene styles, tokens and the IBM Plex Mono font.

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
