import type { Hue } from '../data/portfolio'

// Literal class names so Tailwind can see them. Text colour on each fill is fixed for contrast.
export const fill: Record<Hue, string> = {
  cobalt: 'bg-cobalt text-on-cobalt',
  tangerine: 'bg-tangerine text-on-hue',
  mint: 'bg-mint text-on-hue',
  sun: 'bg-sun text-on-hue',
  rose: 'bg-rose text-on-hue',
  violet: 'bg-violet text-on-hue',
}

export const tint: Record<Hue, string> = {
  cobalt: 'tint-cobalt',
  tangerine: 'tint-tangerine',
  mint: 'tint-mint',
  sun: 'tint-sun',
  rose: 'tint-rose',
  violet: 'tint-violet',
}

// Canvas can't read Tailwind utilities, so the background field uses these.
// Keep in sync with the --color-* hues in src/index.css.
export const hueHex: Record<Hue, string> = {
  cobalt: '#3651f0',
  tangerine: '#ff7a2f',
  mint: '#1fc79a',
  sun: '#ffcb2e',
  rose: '#ff5c8d',
  violet: '#8b6cff',
}
