# CLAUDE.md

Portfolio for Sanjana Purbia (DevOps Engineer). React 19 + TypeScript + Vite + Tailwind v4 + Motion.

## Commands
- `npm run dev` · `npm run build` (runs `tsc -b` first) · `npm run lint` (oxlint)
- Visual QA: `npx vite preview --port 4173`, then `node .qa/e2e.mjs` (full regression suite: layout at 10 sizes in both themes, copy rules, links, pipeline run, theme, deep links, keyboard, no-JS, axe), plus `node .qa/shot.mjs`, `node .qa/interact.mjs`, `node .qa/preflight.mjs` and `node .qa/emailwrap.mjs`. These are local and gitignored; reinstall with `cd .qa && npm i puppeteer-core`.
- A change is done only when lint shows zero warnings, the build passes, and `.qa/e2e.mjs` reports "All checks passed".

## Design rules (source: design-system/sanjana-purbia-portfolio/MASTER.md, "Pipeline" design)
- Read `MASTER.md` before any visual change. For UI work, use the skills in `.claude/skills/`: `frontend-design`, `taste-skill` and `ui-ux-pro-max`.
- **Content:** lives only in `src/data/portfolio.ts`, and every claim must trace to the resume. Design labels (version tags, diagram arrows) must not read as claims; project diagrams are captioned as illustrations.
- **Layout:** one scroll, no section-link nav, no photo. The header is the brand mark, name and theme toggle.
- **Color:** tokens only (`bg-page`, `bg-surface`, `bg-surface-2`, `bg-sunken`, `border-line`, `border-line-strong`, `text-ink`, `text-soft`, `text-muted`, `ok`, `run`, `edge`, `btn`). Green (`ok`) only means success, live or "after"; blue (`run`) only means running or focus. No raw hex in components and no decorative gradients; the faint dot-grid texture (`dot-grid`, diagram wells) is the only pattern.
- **Shape:** interactive elements, labels and chips are `rounded-full`; cards are `rounded-tile` (16px); big frames are `rounded-panel` (20px).
- **Type:** Geist for everything; JetBrains Mono (`font-mono`) only for small technical labels. Sentence case. No eyebrows or all-caps labels.
- **Copy:** no em or en dashes anywhere visible. At most one `·` per line. One CTA label per intent: "Email me", "Download resume".
- **Motion:** only the hero pipeline animates, once on load (under 5s, never loops), plus 1px hover lifts. No `window` scroll listeners. Everything respects `prefers-reduced-motion` (the pipeline renders finished).
- **Breakpoints:** don't mix Tailwind's named `sm`/`md` with arbitrary `min-[...]` variants on the same property; Tailwind orders the arbitrary ones first, so the named one wins.
- **Icons:** Phosphor (`@phosphor-icons/react`).

## Tracking
Update `.claude/plan.md` (Backlog / Done / change log) and `CHANGELOG.md` with every meaningful change.
