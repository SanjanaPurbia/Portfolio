import { profile } from '../data/portfolio'
import './Footer.css'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner mono">
        <span>© {YEAR} {profile.name}</span>
        <span className="footer__build">
          built with React · shipped via GitHub Actions → S3 + CloudFront
        </span>
      </div>
    </footer>
  )
}
