---
name: add-section
description: Add a new section to the portfolio page (e.g. blog, testimonials, open-source, talks) following the existing component, styling and animation conventions.
---

# Add a portfolio section

## Steps
1. **Design rules first:** read `design-system/sanjana-purbia-portfolio/MASTER.md`. Load the `frontend-design` and `taste-skill` skills.
2. **Pick an unused layout family.** Each family appears once per page (see the plan's IA table). No eyebrow label above the heading.
3. **Data:** add a typed export to `src/data/portfolio.ts`. Facts must trace to the resume.
4. **Component:** create `src/components/<Name>.tsx` wrapped in the shared `<Section id title intro>` component, with Tailwind token utilities (`bg-surface`, `border-line`, `text-muted`, `rounded-tile`...). Declare the phone layout explicitly and use `min-[...]` breakpoints consistently on any one property.
5. **Motion:** none by default. Only the hero pipeline animates (MASTER.md). Anything new must run once, stay under 5s and respect `prefers-reduced-motion`.
6. **Wire up:** render it in `src/App.tsx`. Don't add nav links: the page is one scroll.
7. **Verify:** lint and build clean, then `node .qa/e2e.mjs` must report "All checks passed".
8. **Track:** update the IA table and change log in `.claude/plan.md`, plus `CHANGELOG.md` (minor bump).
