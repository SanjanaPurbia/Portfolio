# Sanjana Purbia Portfolio: Design System (Master)

Global source of truth for the visual system. Page-specific overrides go in `pages/<page>.md`.
Built with the `frontend-design`, `taste-skill` and `ui-ux-pro-max` skills in `.claude/skills/`.

## Design read
Developer portfolio for recruiters and engineering managers scanning a DevOps candidate, with a calm, precise, confident language, leaning toward React + Tailwind v4 + Motion + self-hosted Outfit / Work Sans.

Dials (taste-skill "Portfolio (Developer)" preset): `DESIGN_VARIANCE 6`, `MOTION_INTENSITY 5`, `VISUAL_DENSITY 4`.

## Sources
- ui-ux-pro-max `--design-system "personal portfolio hiring resume"`: storytelling pattern (hook, problem, journey, solution, closing CTA) and monochrome + single-blue palette. The first query ("developer portfolio devops") returned a docs-landing pattern and dark + green palette, rejected as off-brief and as frontend-design AI-default #2.
- ui-ux-pro-max `--domain typography`: "Geometric Modern" (Outfit + Work Sans, best for portfolios). Outfit is also on taste-skill's recommended list.
- The handwritten typography from the design-system query (Caveat / Quicksand) was rejected as a mismatch for the audience.

## Color (CSS variables in `src/index.css`, never raw hex in components)
| Token | Light | Dark | Role |
|---|---|---|---|
| `--paper` | `#F3F4F6` | `#111217` | page background (cool, not cream) |
| `--raised` | `#FAFAFB` | `#191A20` | bento tiles, portrait frame |
| `--ink` | `#16171B` | `#ECEDF1` | primary text (16:1) |
| `--graphite` | `#52555E` | `#A3A6B0` | secondary text (≥6.7:1) |
| `--rule` | `#DCDEE3` | `#2A2C33` | dividers, used sparingly |
| `--cobalt` | `#2444C2` | `#8FA3FF` | the only accent (≥7:1 on paper) |
| `--on-cobalt` | `#F5F6FF` | `#0E1330` | text on cobalt (≥7:1) |
| `--feature` | `#2444C2` | `#23317A` | large accent surfaces (portrait, lead tile) |
| `--on-feature` | `#F5F6FF` | `#F2F4FF` | text on feature surfaces (≥10:1) |

One accent, locked page-wide. No gradients, glows, pure black or pure white.

## Type
- **Outfit Variable** for display and headings: weight 600, tracking -0.035em at display sizes, -0.02em at h2/h3.
- **Work Sans Variable** for body: 17px / 1.6, max 65ch, weight 400; 500 for UI labels.
- Scale (×1.25): 14 · 17 · 21 · 26 · 33 · 41 · 52 · 72.
- Sentence case everywhere. No all-caps labels, no eyebrows, no monospace labels.

## Shape and depth
- Interactive elements (buttons, chips, toggle) are full pill. Containers (bento tiles, portrait) are 20px. Nothing else is rounded.
- No drop shadows. Elevation comes from the `--raised` surface only.

## Layout
Left-aligned on a 1200px container with a 24px gutter (16px on mobile). Every multi-column layout collapses to one column below 768px.

```
Nav    [SP Sanjana Purbia]              Work  Experience  Skills  Contact  (◐)
Hero   ┌─────────────────────────────────┬──────────────┐
       │ I make releases boring.         │  portrait    │  asymmetric split, 7/5
       │ subtext ≤ 20 words              │  (photo or   │
       │ (Email me) (Download resume)    │   SP mark)   │
       └─────────────────────────────────┴──────────────┘
Tools  ─ Terraform  Docker  Kubernetes  Jenkins  ... ─   logo marquee (the only one)
Impact ┌───────────────────┬──────────┐
       │ 70% (cobalt tile) │ 80%      │                   bento, exactly 4 cells
       ├─────────┬─────────┴──────────┤
       │ 60%     │ 15+ (hatched tile) │
       └─────────┴────────────────────┘
Exp.   Experience (sticky) │ roles + highlights          sticky two-column
Work   YoCharge ........ 50% faster deployments   (+)    accordion rows
Skills Cloud & IaC        AWS, EC2, S3 ...                definition list
Creds  AWS Certified Cloud Practitioner   B.Tech CS       inline strip
Contact  sanjanapurbia3112@gmail.com (display size)      manifesto close
```

Eight sections and eight different layout families. Zero eyebrows (the limit for 8 sections is 3).

## Principles
1. **Boldness lives in the hero typography.** "I make releases boring." is a DevOps idea, set large in Outfit. Everything else stays quiet.
2. **Real data only.** Every number comes from the resume. No count-up animations or invented precision.
3. **Motion is motivated.**
   - One orchestrated hero load sequence (hierarchy).
   - The tool marquee (breadth), paused on hover and under reduced motion.
   - Accordion expand (feedback).
   - Nothing fades in on every section.
4. **One label per intent.** "Email me" (contact) and "Download resume" (resume) are used identically everywhere.
5. **Copy:** plain verbs, outcome first. No em dashes, at most one middle dot per line.

## Generic-default review (frontend-design pass 2)
- *v1 used near-black + acid green + monospace eyebrows + a fake terminal.* That's frontend-design defaults #2 and #5 and taste-skill's #1 tell. All of it is retired.
- *Big-number hero:* rejected. The hero leads with a sentence; the numbers move to the Impact bento with context.
- *Cool grey + cobalt:* this is taste-skill's "monochrome + single saturated pop" family, chosen to read precise and engineered. It avoids the cream, terracotta and purple defaults.
- *Three equal cards:* not used anywhere. Projects are accordion rows; impact is an uneven bento.

## Images
- **Portrait:** reads `profile.photo` (e.g. `/portrait.jpg` in `public/`).
- **Until a photo is added:** shows an "SP" display-type monogram on cobalt. taste-skill allows a single mark in display type.
- **Tool logos:** real marks from the `simple-icons` package.
- **Not on the marquee:** AWS and Azure, because Simple Icons removed those marks for trademark reasons. They still appear in the skills list as text.
