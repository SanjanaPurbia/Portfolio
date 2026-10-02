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

## Color (v2.1: colourful status board)
The owner asked for a colourful site, and the brief's own words override taste-skill's single-accent default (§4.2 override path). Colour is kept disciplined by **meaning**: like a monitoring dashboard, each hue marks one thing and keeps it everywhere.

**Theme tokens** (CSS variables in `src/index.css`):
| Token | Light | Dark | Role |
|---|---|---|---|
| `--paper` | `#F4F5FA` | `#0F1017` | page background |
| `--raised` | `#FBFBFE` | `#181A23` | closed project rows |
| `--ink` | `#15161D` | `#EEEFF5` | primary text (16.5:1) |
| `--graphite` | `#555867` | `#A4A7B5` | secondary text (≥5:1, even on tints) |
| `--rule` | `#DFE1EA` | `#272A36` | hairlines (rare) |
| `--link` | `#2A40C9` | `#9AAAFF` | focus rings, links (≥7:1) |

**Status hues** (identical in both themes):
| Hue | Hex | Text on it | Used for |
|---|---|---|---|
| cobalt | `#3651F0` | `on-cobalt #FBFBFE` (5.7:1) | primary CTA, AWS fact card, 70% tile, contact block, Cloud & IaC |
| tangerine | `#FF7A2F` | `on-hue #15161D` (6.9:1) | 80% tile, CI/CD, certification |
| mint | `#1FC79A` | `on-hue` (8.3:1) | current role (running), YoCharge (EV), 60% tile, Containers |
| sun | `#FFCB2E` | `on-hue` (11.9:1) | 2 years card, Uncompromised (AgriTech), 15+ tile, Scripting, CTA inside the cobalt block |
| rose | `#FF5C8D` | `on-hue` (6.2:1) | multi-cloud card, Dnatur (eCommerce), Monitoring |
| violet | `#8B6CFF` | `on-hue` (4.9:1) | intern role, education, Databases & OS |

**Rules:**
- Fills are solid. No gradients, glows, or coloured text on paper.
- Soft surfaces use `tint-<hue>`, which is `color-mix` of the hue at 16% into `--paper`. That gives light tints in light mode and deep tints in dark mode, with ink and graphite text at ≥5:1.
- Tool logos use their real brand colours from Simple Icons, on a light `--color-chip` circle in both themes.

## Background: quiet cluster map (v2.4)
The owner found the coloured background (rainbow pointer lens, multi-hue pods) unprofessional. The rule now: **colour lives on the content; the background is monochrome with one restrained accent.**

| Layer | What it shows | Motion rule |
|---|---|---|
| Nodes | 32px grid (28px on mobile), 1.1px nodes in `--graphite` at 16% (20% in dark) | static |
| Fade | CSS radial mask from the top of the viewport, so the grid reads as a texture and fades out lower down | static |
| Rolling deployment | one soft cobalt band (max 35% opacity) sweeps the grid in 3.6s every 15s. The first sweep plays with the hero entrance. | storytelling, rare |
| Pointer | nodes within 140px of the mouse darken toward `--ink` (max 30%) and grow slightly. No hues. | feedback; mouse only |

**Removed:** multi-hue pods and the colour-wheel lens.

**Guardrails (unchanged):**
- **Readability:** text on the field keeps the `halo` utility.
- **Reduced motion:** a single static frame.
- **Performance:** paused in hidden tabs; device pixel ratio capped at 2; no React state per frame.

## Contact "night scene" (v2.5): documented exception
The owner supplied a reference: a dark cinematic hero with a glass object refracting a sunset, thin uppercase type with a glow, mono body copy, and square buttons. Their brief overrides the page defaults (frontend-design and taste-skill: "the brief's own words always win"), **for this one section only**:

| Rule elsewhere | In the contact section |
|---|---|
| Sentence case, no all-caps | Headline and button labels uppercase (`font-light`, glow) |
| No monospace labels | Body, details and buttons in IBM Plex Mono (self-hosted, 400 only) |
| Pills and 24px tiles | Square buttons; primary is a label square plus an arrow square, one link |
| One theme per page | Fixed dark scene in both themes. It's a closing block, like the earlier cobalt block. |

- **Scene tokens:** `--color-night #161D1C`, `--color-night-glow #34433F`, `--color-mist #F2F2F0`, `--color-ember #FF8A3D`. Mist on night is ≥14:1.
- **Visual:** the glass prism is pure CSS (`.prism`, `.prism-beam`, `.prism-float` in `index.css`); no imagery is copied from the reference.
- **Motion:** a 9s float, off under reduced motion. The prism fades to 40% on phones, where it sits behind the text.
- **Content:** identical to before: headline, message, email with copy, phone, Email me, Download resume, LinkedIn.

## Type
- **Outfit Variable** for display and headings: weight 600, tracking -0.035em at display sizes, -0.02em at h2/h3.
- **Work Sans Variable** for body: 17px / 1.6, max 65ch, weight 400; 500 for UI labels.
- Scale (×1.25): 14 · 17 · 21 · 26 · 33 · 41 · 52 · 72.
- Sentence case everywhere. No all-caps labels, no eyebrows, no monospace labels.

## Shape and depth
- Interactive elements and labels (buttons, pills, skill tags, impact badges) are full pill. Containers (fact cards, bento tiles, role cards, project rows, contact block) are 24px. Nothing else is rounded.
- No drop shadows. Elevation comes from the `--raised` surface only.

## Layout
Left-aligned on a 1200px container with a 24px gutter (16px on mobile). Every multi-column layout collapses to one column below 768px.

```
Nav    [SP Sanjana Purbia]              Work  Experience  Skills  Contact  (◐)
Hero   ┌─────────────────────────────────┬──────────────┐
       │ I make releases boring.         │  4 tilted    │  asymmetric split, 7/5
       │ subtext ≤ 20 words              │  colour fact │
       │ (Email me) (Download resume)    │   cards)     │
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

Eight sections and eight different layout families. One eyebrow on the page (limit 3): the hero's availability pill. Its mint dot shows a real state, which taste-skill allows.

**Hero framing (v2.3):**
- **From 1024px up:** the nav, hero and logo strip fill exactly one screen (`min-h: 100dvh - nav - strip`), and the hero content is vertically centred.
- **Below 1024px:** the hero stacks. The fact cards form a row of 4 at tablet width and a 2×2 grid on phones.
- **Hero text:** availability pill, headline, subtext that starts with her name, then two CTAs.
- **Phone number:** in the contact block and the footer, not the hero (taste-skill hero stack discipline).

## Principles
1. **Boldness lives in the hero:** large Outfit headline next to the tilted colour fact cards. The irony of "I make releases boring." next to a colourful page is the point.
2. **The background is professional and quiet:** monochrome, with colour only on the content.
3. **Real data only.** Every number comes from the resume. No count-up animations or invented precision.
4. **Motion is motivated.**
   - One orchestrated hero load sequence: text rises, fact cards drop in and tilt (hierarchy). Cards straighten on hover (feedback).
   - The tool marquee (breadth), paused on hover and under reduced motion.
   - Accordion expand (feedback).
   - Nothing fades in on every section.
5. **One label per intent.** "Email me" (contact) and "Download resume" (resume) are used identically everywhere.
6. **Copy:** plain verbs, outcome first. No em dashes, at most one middle dot per line.

## Generic-default review (frontend-design pass 2)
- *v1 used near-black + acid green + monospace eyebrows + a fake terminal.* That's frontend-design defaults #2 and #5 and taste-skill's #1 tell. All of it is retired.
- *Big-number hero:* rejected. The hero leads with a sentence; the numbers move to the Impact bento with context.
- *Cool grey + cobalt:* this is taste-skill's "monochrome + single saturated pop" family, chosen to read precise and engineered. It avoids the cream, terracotta and purple defaults.
- *Three equal cards:* not used anywhere. Projects are accordion rows; impact is an uneven bento.

## Images
- **No photo, at the owner's request.** The hero visual is four colour fact cards built from real data. Real content, not a fake screenshot or a decorative illustration.
- **Tool logos:** real marks from the `simple-icons` package, in brand colour. AWS and Azure aren't among them because Simple Icons removed those marks for trademark reasons; they still appear in the skills list.
