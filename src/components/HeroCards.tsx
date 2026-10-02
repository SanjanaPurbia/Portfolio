import { motion, useReducedMotion } from 'motion/react'
import { heroFacts } from '../data/portfolio'
import { fill } from '../lib/hue'

// Loose, slightly tilted stack of fact cards in place of a photo. They drop in once on load
// (the page's orchestrated moment) and straighten under the pointer (feedback).
const tilt = [-4, 3, 2.5, -3]
const offset = ['lg:translate-y-6', 'lg:-translate-y-2', 'lg:translate-y-2', 'lg:-translate-y-6']

export function HeroCards() {
  const reduce = useReducedMotion()
  return (
    <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 lg:grid-cols-2" aria-label="Quick facts">
      {heroFacts.map((f, i) => (
        <motion.li
          key={f.label}
          className={offset[i]}
          initial={reduce ? false : { opacity: 0, y: 40, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: tilt[i] }}
          whileHover={reduce ? undefined : { rotate: 0, y: -6, scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 120, damping: 16, delay: reduce ? 0 : 0.25 + i * 0.09 }}
        >
          <div className={`flex aspect-square flex-col justify-between rounded-tile p-5 lg:p-7 ${fill[f.hue]}`}>
            <p className="font-display text-[clamp(34px,4vw,56px)] leading-none font-semibold tracking-[-0.04em]">
              {f.value}
            </p>
            <p className="font-display text-[16px] leading-snug font-medium lg:text-[19px]">{f.label}</p>
          </div>
        </motion.li>
      ))}
    </ul>
  )
}
