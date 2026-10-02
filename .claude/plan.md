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
| Hero | `Hero.tsx` + `Portrait.tsx` | asymmetric split, 7/5 |
| Tools | `ToolMarquee.tsx` | logo marquee (the only one) |
| Impact | `Impact.tsx` | 4-cell bento |
| Experience | `Experience.tsx` | sticky heading + sequence |
| Work (`#work`) | `Projects.tsx` | accordion rows |
| Skills | `Skills.tsx` | definition list |
| Credentials | `Credentials.tsx` | inline two-tile strip |
| Contact | `Contact.tsx` | manifesto close |

## Done
### v2.0.0 (2026-10-02): skill-driven redesign
- [x] Deleted all DevOps scaffolding, as requested
- [x] Vendored the `frontend-design`, `taste-skill` and `ui-ux-pro-max` skills into `.claude/skills/`
- [x] Generated the design system with ui-ux-pro-max: rejected the off-brief result, retried, and recorded the reasons in MASTER.md
- [x] Rebuilt on Tailwind v4, Motion, Phosphor, Simple Icons and self-hosted fonts
- [x] QA at 390 / 768 / 1440 in light and dark: no overflow, no console errors, interactions verified
- [x] taste-skill pre-flight passed: 0 em dashes, 0 eyebrows, single CTA labels, 17-word hero subtext, 72px nav

### v1.0.x (2026-10-02)
- [x] First build: React portfolio plus DevOps infra (since removed)

## Backlog
### Needs input from Sanjana
- [!] **Portrait photo:** add `public/portrait.jpg` (4:5) and set `profile.photo`. taste-skill expects a real image in the hero; the SP monogram is a stand-in.
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
- 2026-10-02: v2.0.0 removed DevOps infra; redesigned with frontend-design, taste-skill and ui-ux-pro-max (src/, design-system/, .claude/skills/).
- 2026-10-02: v1.0.1 agent review pass (copy accuracy, accessibility, infra hardening).
- 2026-10-02: v1.0.0 initial build.
