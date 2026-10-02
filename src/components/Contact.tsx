import { useState } from 'react'
import { Check, Copy, Download, Mail } from 'lucide-react'
import { profile } from '../data/portfolio'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { Reveal } from './Reveal'
import './Contact.css'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="contact card">
          <span className="eyebrow">06 · ssh sanjana@hire</span>
          <h2 className="contact__title">Let's automate something together.</h2>
          <p className="contact__lede">
            I'm looking for a DevOps / Cloud role with more scope: platform engineering, Kubernetes at scale, or
            building delivery pipelines teams actually trust. The fastest way to reach me is email.
          </p>
          <div className="contact__email">
            <a href={`mailto:${profile.email}`} className="contact__address mono">
              <Mail size={18} /> {profile.email}
            </a>
            <button className="icon-btn" onClick={copyEmail} aria-label="Copy email address">
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
            <span className="contact__copied" role="status">{copied ? 'Copied' : ''}</span>
          </div>
          <div className="contact__actions">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              <Mail size={16} /> Email me
            </a>
            {profile.socials.linkedin && (
              <a href={profile.socials.linkedin} className="btn" target="_blank" rel="noreferrer">
                <LinkedinIcon size={16} /> LinkedIn
              </a>
            )}
            {profile.socials.github && (
              <a href={profile.socials.github} className="btn" target="_blank" rel="noreferrer">
                <GithubIcon size={16} /> GitHub
              </a>
            )}
            <a href={profile.resumeUrl} className="btn" download>
              <Download size={16} /> Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
