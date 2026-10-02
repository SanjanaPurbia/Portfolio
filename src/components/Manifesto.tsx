import { motion, useReducedMotion } from 'motion/react'

// Three-word statement after the hero, styled after the owner's reference: centred, very large,
// lines stacked tight, the middle word in grey. The words rise in once, in reading order.
const words = [
  { text: 'Build.', tone: 'text-ink' },
  { text: 'Automate.', tone: 'text-hush' },
  { text: 'Scale.', tone: 'text-ink' },
]

export function Manifesto() {
  const reduce = useReducedMotion()
  return (
    <section aria-label="Build. Automate. Scale." className="mx-auto max-w-[1200px] px-4 py-14 md:px-6 md:py-28">
      <h2 className="halo text-center font-display text-[clamp(60px,19vw,236px)] leading-[0.86] font-semibold tracking-[-0.05em]">
        {words.map((w, i) => (
          <motion.span
            key={w.text}
            className={`block ${w.tone}`}
            initial={reduce ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ type: 'spring', stiffness: 90, damping: 18, delay: i * 0.12 }}
          >
            {w.text}
          </motion.span>
        ))}
      </h2>
    </section>
  )
}
