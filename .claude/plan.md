# Portfolio Plan & Tracker

Living tracker. Move items between sections and add a dated line to the change log.
Status keys: `[ ]` todo · `[~]` in progress · `[x]` done · `[!]` needs input from Sanjana

## Goals
1. A recruiter learns role, impact, stack and how to make contact within 10 seconds.
2. A distinct, non-template design. Rules live in `design-system/sanjana-purbia-portfolio/MASTER.md`.
3. Content edits touch one file: `src/data/portfolio.ts`.

## Information architecture
| Section | Component | Layout family |
|---|---|---|
| Hero | `Hero.tsx` + `HeroCards.tsx` | asymmetric split, 7/5, with tilted colour fact cards |
| Tools | `ToolMarquee.tsx` | logo marquee (the only one) |
| Impact | `Impact.tsx` | 4-cell bento |
| Experience | `Experience.tsx` | sticky heading + sequence |
| Work (`#work`) | `Projects.tsx` | accordion rows |
| Skills | `Skills.tsx` | definition list |
| Credentials | `Credentials.tsx` | inline two-tile strip |
| Contact | `Contact.tsx` | manifesto close |
| (page background) | `ClusterField.tsx` | fixed canvas behind all sections |

## Done
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
- [!] **GitHub URL:** set `profile.socials.github`.
- [!] **Credly badge URL** for the AWS certification.
- [!] **Hosting:** choose where to host it (Vercel, Netlify or GitHub Pages all work with `npm run build`).

### Enhancements
- [ ] OG share image (1200×630) and `og:image`
- [ ] Code-split Motion or lazy-load below-the-fold sections (JS is about 141 kB gzipped)
- [ ] Lighthouse pass (target perf ≥ 95, a11y 100)
- [ ] Case-study pages per project, if write-ups become available

## Change log
<!-- newest first: YYYY-MM-DD: what changed (files) -->
- 2026-10-02: v2.3.0 front-page polish + phone (Hero.tsx, HeroCards.tsx, Contact.tsx, Footer.tsx, data/portfolio.ts).
- 2026-10-02: v2.2.1 calmer background; LinkedIn URL fixed (ClusterField.tsx, data/portfolio.ts).
- 2026-10-02: v2.2.0 cluster-map background + text halos (ClusterField.tsx, lib/hue.ts, index.css, App.tsx).
- 2026-10-02: v2.1.0 colourful redesign, photo removed (src/index.css, src/lib/hue.ts, src/components/*, design-system/).
- 2026-10-02: v2.0.0 removed DevOps infra; redesigned with frontend-design, taste-skill and ui-ux-pro-max (src/, design-system/, .claude/skills/).
- 2026-10-02: v1.0.1 agent review pass (copy accuracy, accessibility, infra hardening).
- 2026-10-02: v1.0.0 initial build.
