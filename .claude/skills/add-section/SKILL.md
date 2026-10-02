---
name: add-section
description: Add a new section to the portfolio page (e.g. blog, testimonials, open-source, talks) following the existing component, styling and animation conventions.
---

# Add a portfolio section

## Steps
1. **Design rules first:** read `design-system/sanjana-purbia-portfolio/MASTER.md`. Load the `frontend-design` and `taste-skill` skills.
2. **Pick an unused layout family.** Each family appears once per page (see the plan's IA table). No eyebrow label above the heading.
3. **Data:** add a typed export to `src/data/portfolio.ts`. Facts must trace to the resume.
4. **Component:** create `src/components/<Name>.tsx` with Tailwind token utilities (`bg-paper`, `text-graphite`, `rounded-tile`...). Use the section wrapper `mx-auto max-w-[1200px] px-4 py-20 md:px-6 md:py-28` and an h2 at `text-[clamp(32px,4.4vw,52px)] font-semibold tracking-[-0.03em]`. Declare the collapse below 768px explicitly.
5. **Motion:** only if it communicates something (taste-skill §5). Use `motion/react` and respect `useReducedMotion()`.
6. **Wire up:** render it in `src/App.tsx`. Add a nav link in `Nav.tsx` only if it's a top-level destination (the nav must stay on one line).
7. **Verify:** lint and build clean, then the `.qa` scripts: no overflow, 0 em dashes, pre-flight green.
8. **Track:** update the IA table and change log in `.claude/plan.md`, plus `CHANGELOG.md` (minor bump).
