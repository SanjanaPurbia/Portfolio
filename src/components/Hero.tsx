import { ArrowUpRight, Download, MapPin } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/portfolio'
import { Terminal } from './Terminal'
import './Hero.css'

export function Hero() {
  const reduce = useReducedMotion()
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          {profile.openToWork && (
            <motion.div className="hero__status mono" {...fade(0)}>
              <span className="status-dot" /> open to new DevOps roles
            </motion.div>
          )}
          <motion.h1 className="hero__name" {...fade(0.05)}>
            {profile.name}
          </motion.h1>
          <motion.p className="hero__role" {...fade(0.1)}>
            {profile.role} <span className="hero__sep">/</span> AWS Certified Cloud Practitioner
          </motion.p>
          <motion.p className="hero__tagline" {...fade(0.15)}>
            {profile.tagline} Terraform for the infrastructure, Jenkins and GitHub Actions for delivery, Docker and
            ArgoCD to run it, and CloudWatch, Uptime Kuma and PagerDuty monitoring that cuts time to resolution.
          </motion.p>
          <motion.div className="hero__cta" {...fade(0.2)}>
            <a href="#projects" className="btn btn-primary">
              See my work <ArrowUpRight size={16} />
            </a>
            <a href={profile.resumeUrl} className="btn" download>
              <Download size={16} /> Download resume
            </a>
          </motion.div>
          <motion.p className="hero__loc" {...fade(0.25)}>
            <MapPin size={14} /> {profile.location}
          </motion.p>
        </div>
        <motion.div className="hero__term" {...fade(0.2)}>
          <Terminal />
        </motion.div>
      </div>
    </section>
  )
}
