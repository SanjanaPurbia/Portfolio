# Portfolio Plan & Tracker

Living tracker. Move items between sections and add a dated line to the change log.
Status keys: `[ ]` todo · `[~]` in progress · `[x]` done · `[!]` needs input from Sanjana

## Goals
1. A recruiter learns role, impact, stack and how to make contact within 10 seconds.
2. A distinct, non-template design. Rules live in `design-system/sanjana-purbia-portfolio/MASTER.md`.
3. Content edits touch one file: `src/data/portfolio.ts`.

## Information architecture (v3, "Pipeline")
| Section | Component | Layout family |
|---|---|---|
| Header | `Nav.tsx` | brand mark, name and theme toggle; no section links (one scroll) |
| Hero (`#top`) | `Hero.tsx` + `Pipeline.tsx` | 5/7 split: intro + facts grid, and the "How I ship" pipeline panel that runs once |
| Impact (`#impact`) | `Impact.tsx` | status board, 4 tiles with before/after bars |
| Experience (`#experience`) | `Experience.tsx` | release log (version tag, state, date, then the role card) |
| Work (`#work`) | `Projects.tsx` + `Diagram.tsx` | architecture cards with SVG illustrations |
| Skills (`#skills`) | `Skills.tsx` | toolchain hairline grid |
| Credentials (`#credentials`) | `Credentials.tsx` | two cards |
| Contact (`#contact`) | `Contact.tsx` | split panel: ask + CTAs, contact rows |
| (shared) | `Section.tsx` | section frame: h2, intro, optional aside |

## Done
### v3.0.0 (2026-10-04): Pipeline redesign
- [x] Owner picked the "Pipeline" prototype out of seven; the site was rebuilt in it and the prototypes were deleted. Verified by `.qa/e2e.mjs` (51 checks, axe clean in both themes)

### v2.11.0 (2026-10-03): one-scroll page, GitHub
- [x] Header section links and phone menu removed (owner); GitHub added to contact Profiles cell, footer and noscript; checked 390 to 1440, axe clean

### v2.10.0 (2026-10-03): QA fixes 5 to 30
- [x] Pause control, OG image and tags, no-JS fallback, laptop fold, copy moved to data, a11y and content fixes; verified by `.qa/verify-all.mjs` (28 checks) and axe with no violations in both themes

### v2.9.1 (2026-10-03): QA fixes 1 to 4
- [x] Hash deep links, idle canvas redraws, landscape hero fit, Escape focus in the mobile menu; verified in Chrome at 390 and 1280 (hash), 844x390 and 640x400 (hero), draw counts over 21s (canvas)

### v2.9.0 (2026-10-02): step 5b, elegant last page
- [x] Contact rebuilt as a calm ink panel with a light headline and hairline details strip (owner rejected the cards); wrapping verified 360-1440

### v2.8.0 (2026-10-02): step 5, last page matches the site
- [x] Contact rebuilt as hero-style colour action cards; night scene removed; copy, focus and whole-card clicks verified

### v2.7.0 (2026-10-02): step 4b, three words on the first screen
- [x] "Build. Automate. Scale." is now the hero h1 (owner rejected the band below the fold); fit and CTA-above-fold verified 360-1920px

### v2.6.0 (2026-10-02): step 4, three-word statement
- [x] Manifesto band "Build. Automate. Scale." after the logo strip; fit verified 360-1920px; accessible grey

### v2.5.0 (2026-10-02): step 3, last page
- [x] Contact section restyled after the owner's cinematic reference (CSS prism, glow type, mono, square buttons); same content

### v2.4.0 (2026-10-02): step 2, professional background
- [x] Monochrome background with a top fade; single-colour rollout; no rainbow lens or pods (owner feedback: too colourful, not professional)

### v2.3.0 (2026-10-02): step 1, front page
- [x] Availability pill, name in the subtext, first-screen framing at 1024px and up, stacked hero below 1024px
- [x] Phone added to the contact block and footer (owner request)
- [x] Fold checked at 768, 1024, 1280 and 1440, plus mobile, in light and dark

### v2.2.0 (2026-10-02): innovative background
- [x] Live cluster-map canvas: pods, rolling-deployment wave, pointer lens. Grounded in DevOps, uses the six hues.
- [x] Text halos keep contrast over the field; reduced-motion, hidden-tab and touch fallbacks
- [x] QA in light and dark at 390 / 768 / 1440; motion frames checked (wave, lens); no errors

### v2.1.0 (2026-10-02): colourful redesign
- [x] Six-hue status-board palette, each colour tied to a meaning (MASTER.md). Every pair contrast-checked.
- [x] Photo removed. The hero uses colour fact cards with a load and hover animation.
- [x] Logos in brand colour; tinted role cards and project rows; colour-coded skills; cobalt contact block
- [x] QA in light and dark at 390 / 768 / 1440 passes; interactions and pre-flight green

### v2.0.0 (2026-10-02): skill-driven redesign
- [x] Deleted all DevOps scaffolding, as requested
- [x] Vendored the `frontend-design`, `taste-skill` and `ui-ux-pro-max` skills into `.claude/skills/`
- [x] Generated the design system with ui-ux-pro-max: rejected the off-brief result, retried, and recorded the reasons in MASTER.md
- [x] Rebuilt on Tailwind v4, Motion, Phosphor, Simple Icons and self-hosted fonts
- [x] QA at 390 / 768 / 1440 in light and dark: no overflow, no console errors, interactions verified
- [x] taste-skill pre-flight passed: 0 em dashes, 0 eyebrows, single CTA labels, 17-word hero subtext, 72px nav

### v1.0.x (2026-10-02)
- [x] First build: React portfolio plus DevOps infra (since removed)

## Working mode
The owner is sharing changes **one at a time**. Finish each step, verify it, commit, then wait for the next request.

## Backlog
### Needs input from Sanjana
- [x] **GitHub URL:** github.com/SanjanaPurbia (v2.11.0)
- [!] **Credly badge URL** for the AWS certification.
- [!] **Hosting:** choose where to host it (Vercel, Netlify or GitHub Pages all work with `npm run build`).

### Enhancements
- [x] OG share image (1200×630) and `og:image` (v2.10.0)
- [ ] Set `SITE_URL` in the deploy build once hosting is chosen (enables canonical, og:url, absolute og:image) and add a `Sitemap:` line to robots.txt
- [x] Smaller bundle: Motion and Simple Icons removed in v3.0.0 (JS is about 90 kB gzipped)
- [ ] Lighthouse pass (target perf ≥ 95, a11y 100)
- [ ] Case-study pages per project, if write-ups become available

## Change log
<!-- newest first: YYYY-MM-DD: what changed (files) -->
- 2026-10-02: v2.9.0 elegant ink-panel contact (Contact.tsx, index.css --inkwell + inkwell-glow).
- 2026-10-02: v2.8.0 contact action cards; night scene + mono font removed (Contact.tsx, index.css, main.tsx).
- 2026-10-02: v2.7.0 three-word stack becomes the hero headline; Manifesto band removed (Hero.tsx, data/portfolio.ts, index.html).
- 2026-10-02: v2.6.0 Build. Automate. Scale. manifesto (Manifesto.tsx, index.css --hush, App.tsx).
- 2026-10-02: v2.5.0 contact night scene (Contact.tsx, index.css, main.tsx, @fontsource/ibm-plex-mono).
- 2026-10-02: v2.4.0 monochrome professional background (ClusterField.tsx).
- 2026-10-02: v2.3.0 front-page polish + phone (Hero.tsx, HeroCards.tsx, Contact.tsx, Footer.tsx, data/portfolio.ts).
- 2026-10-02: v2.2.1 calmer background; LinkedIn URL fixed (ClusterField.tsx, data/portfolio.ts).
- 2026-10-02: v2.2.0 cluster-map background + text halos (ClusterField.tsx, lib/hue.ts, index.css, App.tsx).
- 2026-10-02: v2.1.0 colourful redesign, photo removed (src/index.css, src/lib/hue.ts, src/components/*, design-system/).
- 2026-10-02: v2.0.0 removed DevOps infra; redesigned with frontend-design, taste-skill and ui-ux-pro-max (src/, design-system/, .claude/skills/).
- 2026-10-02: v1.0.1 agent review pass (copy accuracy, accessibility, infra hardening).
- 2026-10-02: v1.0.0 initial build.
- 2026-10-03: v2.9.1 QA fixes 1 to 4 (hooks/useHashScroll.ts, App.tsx, ClusterField.tsx, Hero.tsx, Nav.tsx).
- 2026-10-03: v2.10.0 QA fixes 5 to 30 (index.html, vite.config.ts, public/, hooks/useMotionPause.ts, hooks/useTheme.ts, components/*, data/portfolio.ts, index.css, CLAUDE.md, MASTER.md).
- 2026-10-03: v2.11.0 one-scroll header, GitHub link (Nav.tsx, Contact.tsx, data/portfolio.ts, index.html, MASTER.md).
- 2026-10-04: v3.0.0 Pipeline redesign (src/**, index.css, public icons and OG image, MASTER.md, CLAUDE.md, README, skills, .qa); templates deleted.
