# CLAUDE.md

Portfolio for Sanjana Purbia (DevOps Engineer). React 19 + TypeScript + Vite + Tailwind v4 + Motion.

## Commands
- `npm run dev` · `npm run build` (runs `tsc -b` first) · `npm run lint` (oxlint)
- Visual QA: `npx vite preview --port 4173`, then `node .qa/shot.mjs`, `node .qa/interact.mjs`, `node .qa/preflight.mjs` and `node .qa/bg.mjs` (background motion frames). These are local and gitignored; reinstall with `cd .qa && npm i puppeteer-core`.
- A change is done only when lint shows zero warnings, the build passes, and the QA scripts report no overflow, no errors and zero em dashes.

## Design rules (source: design-system/sanjana-purbia-portfolio/MASTER.md)
- Read `MASTER.md` before any visual change. For UI work, use the skills in `.claude/skills/`: `frontend-design`, `taste-skill` and `ui-ux-pro-max`.
- **Content:** lives only in `src/data/portfolio.ts`, and every claim must trace to the resume.
- **Color:** tokens only. Theme: `bg-paper`, `text-ink`, `text-graphite`, `border-rule`, `text-link`. Status hues: `cobalt`, `tangerine`, `mint`, `sun`, `rose`, `violet`, applied through `fill[hue]` / `tint[hue]` from `src/lib/hue.ts`, which pair each fill with its fixed text colour. A hue keeps its meaning across the page (see the MASTER.md table). No raw hex in components and no gradients.
- **Shape:** interactive elements and labels are `rounded-full`, containers are `rounded-tile` (24px). Nothing else is rounded.
- **Type:** headings use `font-display` (Outfit), body uses Work Sans. Sentence case. No eyebrows, all-caps labels or monospace labels. **Exception:** the contact night scene (uppercase, IBM Plex Mono, square buttons) at the owner's request; see MASTER.md. Don't spread that style to other sections.
- **Copy:** no em or en dashes anywhere visible. At most one `·` per line. One CTA label per intent: "Email me", "Download resume".
- **Motion:** only the hero load, the tool marquee, the accordion and the cluster-field background move. Add the `halo` utility to any new text that sits directly on the page background, not inside a tile. Use `motion/react`, never `window` scroll listeners, and everything must respect `prefers-reduced-motion`.
- **Icons and logos:** Phosphor for icons. Tool logos come from `simple-icons` via named imports only, because `import *` adds about 5 MB.

## Tracking
Update `.claude/plan.md` (Backlog / Done / change log) and `CHANGELOG.md` with every meaningful change.
