# Sanjana Purbia portfolio: design system ("Pipeline", v3)

The owner compared seven prototypes on 2026-10-04 and chose **Pipeline**: a DevOps-native page where the design language is her craft. It should feel like a polished product UI, not a hacker gimmick. The page reads as **one scroll** with no section navigation, and there is **no photo**.
Built with the `frontend-design`, `taste-skill` and `ui-ux-pro-max` skills in `.claude/skills/`.

## Principles
1. **Her work is the visual.** The hero shows how she ships (a CI/CD pipeline), experience reads as a release log, and projects come with architecture illustrations.
2. **Calm, graphite surfaces.** There are no busy backgrounds. The only texture is a faint dot grid behind the hero and the diagrams.
3. **Colour carries meaning, never decoration.** Green means success, passing, live or "after". Blue means running and focus. Everything else is neutral.
4. **Readable for recruiters.** Every section has a plain sentence-case heading and normal prose. Technical framing (version tags, diagram labels) is small and secondary.

## Tokens (src/index.css)
Use them through Tailwind utilities (`bg-surface`, `text-muted`, `border-line`...). Never put raw hex in components.

| Token | Light | Dark | Use |
|---|---|---|---|
| `page` | #F4F5F7 | #0D0F12 | page background |
| `sunken` | #ECEEF1 | #0A0C0E | bar tracks, diagram wells |
| `surface` / `surface-2` | #FFFFFF / #F6F7F9 | #14171B / #1A1E23 | cards / panel footers, chips |
| `line` / `line-strong` | #E1E4E8 / #CBD0D6 | #23282E / #323840 | hairlines / outlined controls |
| `ink` / `soft` / `muted` | #14171A / #343A41 / #555D67 | #E8EBEE / #C3C9D0 / #9BA3AC | text, in falling emphasis (all AA) |
| `ok` + `ok-wash` + `on-ok` | #157F4C | #4CC38A | success, passing stages, "after" bars, live status |
| `run` + `run-wash` | #2563D4 | #79AEFC | running state and focus ring only |
| `edge` | #8A929B | #5D6670 | diagram connectors, hover borders |
| `btn` / `on-btn` | ink / white | light / ink | primary button |

Dark is designed first; light mirrors it. The theme follows the OS until the visitor toggles it (saved in `localStorage.theme`, applied before paint by `public/theme-init.js`).

## Type
- **Geist Variable** for everything. Hero name `clamp(2.6rem, 6.4vw, 4.6rem)`/600/-0.04em, h2 `clamp(1.75rem, 3.4vw, 2.5rem)`/600/-0.03em, body 16px/1.6, ledes 17px in `muted`.
- **JetBrains Mono Variable**, used sparingly for small technical labels only: version tags, counts, diagram sub-labels. Never for headings or prose.
- Sentence case everywhere. No eyebrow or all-caps labels. Numerals use `tabular-nums`.

## Shape and depth
- Interactive elements, labels and chips: `rounded-full`.
- Cards and tiles: `rounded-tile` (16px). Big frames (pipeline, project cards): `rounded-panel` (20px). The contact panel uses 24px. Icon wells use 8 to 12px.
- 1px `line` borders. Only the pipeline and the contact panel carry `shadow-panel`.

## Page structure (one scroll)
1. **Header:** the brand mark (a passing-build dot) with her name, and the theme toggle. No section links.
2. **Hero:** availability pill, name, role, lede, "Email me" and "Download resume", then the **How I ship** pipeline (Build → Test → Deploy → Monitor, with environments) and a 2x2 facts grid. On phones the pipeline sits between the intro and the facts.
3. **What changed once it was automated:** a status board of four tiles with before/after bars (or 15 module squares).
4. **Experience:** a release log, newest first (v2.0 Live, v1.0 Completed) joined by "Promoted after six months". The version tags are design labels, not resume claims.
5. **Selected work:** one architecture card per project: client, impact chip, summary, highlights, stack chips, and an SVG illustration drawn only from that project's listed services, captioned as an illustration.
6. **Toolchain:** six skill groups in a hairline grid with mono counts.
7. **Certification and education.**
8. **Contact:** the ask and both CTAs, then Email, Phone, LinkedIn and GitHub rows. The email wraps only before the "@".

## Motion
- The pipeline runs **once** on load (about 4 seconds: stages go running → done, connectors fill, environments light up, badge goes Running → Passed). It never loops.
- Hover lifts buttons by 1px. Nothing else moves.
- `prefers-reduced-motion`: the pipeline renders finished immediately, and transitions are disabled.

## Copy rules
- No em or en dashes. Date ranges are written `Jan 2025 - Present`.
- At most one `·` per line.
- One CTA label per intent: "Email me", "Download resume".
- Every claim traces to the resume. Design labels (v1.0, Live, diagram arrows) must not read as claims.

## Accessibility
- One h1 and no skipped heading levels. Every section is a labelled landmark, and there is a skip link.
- The pipeline is `aria-hidden` and described by a screen-reader figcaption. Diagrams are `aria-hidden`, and their visible captions carry the meaning.
- Focus ring: 2px `run` outline everywhere. External links announce "(opens in a new tab)".
- Verified with axe (zero violations, both themes) and the `.qa/e2e.mjs` suite.
