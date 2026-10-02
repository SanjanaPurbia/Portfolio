---
name: add-section
description: Add a new section to the portfolio page (e.g. blog, testimonials, open-source, talks) following the existing component, styling and animation conventions.
---

# Add a portfolio section

## Steps
1. **Data first:** add a typed export to `src/data/portfolio.ts` (export the type too).
2. **Component:** create `src/components/<Name>.tsx` and `<Name>.css`. Skeleton:
   ```tsx
   <section id="<anchor>" className="section">
     <div className="container">
       <SectionHead eyebrow="NN · <shell-flavoured command>" title="..." lede="..." />
       {/* items wrapped in <Reveal delay={i * 0.05}> */}
     </div>
   </section>
   ```
3. **Styling:** use tokens from `src/index.css` (`--bg-elev`, `--line`, `--accent`, `--text-dim` …) and reuse `.card`, `.chip` and `.btn`. Prefix classes with the component name (`.blog__item`). Add a breakpoint at ≤720px.
4. **Wire up:** render it in `src/App.tsx` in page order, renumber the following eyebrows, and add a link to `links` in `Nav.tsx` if it's a top-level destination.
5. **Motion:** any custom animation checks `useReducedMotion()`.
6. **Verify:** lint + build clean, with no horizontal overflow at 390px. Use the `ui-qa` agent for screenshots.
7. **Track:** update the information-architecture table and change log in `.claude/plan.md`, plus `CHANGELOG.md` (minor bump).
