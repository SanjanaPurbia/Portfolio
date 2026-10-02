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
    <section id="top" className="mx-auto max-w-[1200px] px-4 pt-10 pb-16 md:px-6 md:pt-16 md:pb-24">
      <div className="grid items-center gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-7">
          <motion.h1
            {...enter(0)}
            className="text-[clamp(44px,7.4vw,84px)] leading-[0.98] font-semibold tracking-[-0.035em]"
          >
            {profile.headline}
          </motion.h1>
          <motion.p {...enter(0.12)} className="mt-6 max-w-[34ch] text-[19px] leading-relaxed text-graphite md:text-[21px]">
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
        <div className="mx-auto w-full max-w-[460px] md:col-span-5 md:max-w-none">
          <HeroCards />
        </div>
      </div>
    </section>
  )
}
