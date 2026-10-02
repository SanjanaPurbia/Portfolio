---
name: update-content
description: Update portfolio content (jobs, projects, skills, metrics, certifications, contact, resume PDF) from a new resume or user request. Use when the user shares an updated resume or asks to add/change any fact on the site.
---

# Update portfolio content

All content lives in `src/data/portfolio.ts`. Components never hold resume facts.

## Steps
1. **Read the source.** If a resume is provided (PDF/DOCX), read it fully. Note anything new, changed or removed versus `src/data/portfolio.ts`.
2. **Edit `src/data/portfolio.ts` only**, keeping existing shapes:
   - `profile`: name, role, tagline, summary, email, location, socials, `openToWork`
   - `metrics`: numeric `value` + `suffix` (count-up animation needs a number). Max 4 tiles.
   - `skills`: groups with an `id` that maps to an icon in `Skills.tsx`. A new group id needs an icon added there.
   - `experience`: newest first. Set `current: true` on exactly one role at most.
   - `projects`: `featured: true` on exactly one (it renders the architecture diagram). Impact as `{ value, label }`.
   - `certifications`, `education`
3. **Resume PDF:** copy the new file to `public/SanjanaPurbia_Resume.pdf` (same name, so links keep working).
4. **Writing rules:** lead with the outcome and a number, keep bullets to one line where possible, never invent metrics, and leave out the phone number (privacy).
5. **Verify:** `npm run lint && npm run build` with zero warnings. If copy got longer, check the layout at 390px.
6. **Track:** add a line to the `.claude/plan.md` change log and a `CHANGELOG.md` entry (patch bump for copy, minor for new sections).
