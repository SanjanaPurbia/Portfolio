import { DownloadSimple, EnvelopeSimple } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'motion/react'
import { profile } from '../data/portfolio'
import { HeroCards } from './HeroCards'

// The three words rise in one by one, then subtext and CTAs; the fact cards drop in beside them.
export function Hero() {
  const reduce = useReducedMotion()
  const enter = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { type: 'spring' as const, stiffness: 100, damping: 20, delay },
        }

  return (
    // From 1024px the nav, hero and logo strip fill exactly one screen; below that the hero stacks.
    <section
      id="top"
      className="mx-auto flex max-w-[1200px] items-center px-4 pt-8 pb-14 md:px-6 md:py-16 lg:min-h-[calc(100dvh-72px-112px)] lg:py-12"
    >
      <div className="grid w-full items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Container query: the headline is sized to this column, so "Automate." always fills it exactly. */}
        <div className="@container lg:col-span-7">
          <motion.p
            {...enter(0)}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-rule bg-raised px-4 py-1.5 text-[14px] font-medium"
          >
            {/* Real state, not decoration: she is available. */}
            <span className="relative flex size-2.5" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-mint opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2.5 rounded-full bg-mint" />
            </span>
            {profile.availability}
          </motion.p>
          <h1
            aria-label={profile.headline.join(' ')}
            className="halo text-[min(21.5cqw,236px)] leading-[0.86] font-semibold tracking-[-0.05em]"
          >
            {profile.headline.map((word, i) => (
              <motion.span
                key={word}
                aria-hidden="true"
                {...enter(0.06 + i * 0.1)}
                // Owner's reference: dark, grey, dark. --hush meets WCAG's large-text contrast.
                className={`block ${i === 1 ? 'text-hush' : 'text-ink'}`}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p {...enter(0.36)} className="halo mt-7 max-w-[34ch] text-[19px] leading-relaxed text-graphite md:text-[21px]">
            {profile.subtext}
          </motion.p>
          <motion.div {...enter(0.44)} className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              <EnvelopeSimple size={18} weight="bold" /> Email me
            </a>
            <a href={profile.resumeUrl} download className="btn btn-quiet">
              <DownloadSimple size={18} weight="bold" /> Download resume
            </a>
          </motion.div>
        </div>
        <div className="mx-auto w-full max-w-[460px] md:max-w-none lg:col-span-5">
          <HeroCards />
        </div>
      </div>
    </section>
  )
}
