# CLAUDE.md

Portfolio for Sanjana Purbia (DevOps Engineer). React 19 + TypeScript + Vite + Tailwind v4 + Motion.

## Commands
- `npm run dev` · `npm run build` (runs `tsc -b` first) · `npm run lint` (oxlint)
- Visual QA: `npx vite preview --port 4173`, then `node .qa/shot.mjs`, `node .qa/interact.mjs` and `node .qa/preflight.mjs`. These are local and gitignored; reinstall with `cd .qa && npm i puppeteer-core`.
- A change is done only when lint shows zero warnings, the build passes, and the QA scripts report no overflow, no errors and zero em dashes.

## Design rules (source: design-system/sanjana-purbia-portfolio/MASTER.md)
- Read `MASTER.md` before any visual change. For UI work, use the skills in `.claude/skills/`: `frontend-design`, `taste-skill` and `ui-ux-pro-max`.
- **Content:** lives only in `src/data/portfolio.ts`, and every claim must trace to the resume.
- **Color:** tokens only (`bg-paper`, `text-ink`, `text-graphite`, `border-rule`, `text-cobalt`, `bg-feature`). No raw hex in components. A new token needs light and dark values in all three blocks of `src/index.css`.
- **Shape:** interactive elements are `rounded-full`, containers are `rounded-tile` (20px). Nothing else is rounded.
- **Type:** headings use `font-display` (Outfit), body uses Work Sans. Sentence case. No eyebrows, all-caps labels or monospace labels.
- **Copy:** no em or en dashes anywhere visible. At most one `·` per line. One CTA label per intent: "Email me", "Download resume".
- **Motion:** only the hero load, the tool marquee and the accordion move. Use `motion/react`, never `window` scroll listeners, and everything must respect `prefers-reduced-motion`.
- **Icons and logos:** Phosphor for icons. Tool logos come from `simple-icons` via named imports only, because `import *` adds about 5 MB.

## Tracking
Update `.claude/plan.md` (Backlog / Done / change log) and `CHANGELOG.md` with every meaningful change.
