import { DownloadSimple, EnvelopeSimple } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'motion/react'
import { profile } from '../data/portfolio'
import { HeroCards } from './HeroCards'

// Headline, subtext and CTAs rise in; the fact cards then drop in beside them.
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
        <div className="lg:col-span-7">
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
          <motion.h1
            {...enter(0.06)}
            className="halo text-[clamp(44px,7.4vw,84px)] leading-[0.98] font-semibold tracking-[-0.035em]"
          >
            {profile.headline}
          </motion.h1>
          <motion.p {...enter(0.14)} className="halo mt-6 max-w-[34ch] text-[19px] leading-relaxed text-graphite md:text-[21px]">
            {profile.subtext}
          </motion.p>
          <motion.div {...enter(0.22)} className="mt-9 flex flex-wrap gap-3">
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
