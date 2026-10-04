# Sanjana Purbia · Portfolio

Portfolio site for **Sanjana Purbia**, DevOps Engineer and AWS Certified Cloud Practitioner.

## Stack
React 19, TypeScript, Vite, Tailwind CSS v4, Phosphor icons, self-hosted Geist and JetBrains Mono

## Run it
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build to dist/
npm run lint     # oxlint
npm run deploy   # publish to https://sanjanapurbia.github.io/Portfolio/ (gh-pages branch)
```

## Where things live
```
src/data/portfolio.ts    all content (edit this when the resume changes)
src/components/          one component per page section
src/index.css            design tokens (light + dark) and Tailwind setup
public/                  resume PDF, favicon, theme-init.js
design-system/           the design system (MASTER.md): palette, type, layout, rules
.claude/                 plan, skills and agents used to build and maintain the site
```

## Common edits
- **Content:** edit `src/data/portfolio.ts`, or run `/update-content` in Claude Code.
- **Hero facts and pipeline:** edit `heroFacts` and `pipeline` in `src/data/portfolio.ts`.
- **Project diagrams:** each project's `diagram` in `src/data/portfolio.ts` (boxes, groups and arrows in SVG coordinates).
- **Resume:** replace `public/SanjanaPurbia_Resume.pdf` and keep the same filename.

## How it was designed
Built with three Claude Code skills vendored in `.claude/skills/`:
- `frontend-design`: design plan, then a check against generic AI defaults
- `taste-skill`: anti-template rules and the final pre-flight checklist
- `ui-ux-pro-max`: design-system search, typography pairing, accessibility rules

The decisions are recorded in `design-system/sanjana-purbia-portfolio/MASTER.md`.
