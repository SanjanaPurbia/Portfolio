import { Contact } from './components/Contact'
import { Credentials } from './components/Credentials'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Metrics } from './components/Metrics'
import { Nav } from './components/Nav'
import { Pipeline } from './components/Pipeline'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggle } = useTheme()
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav theme={theme} onToggleTheme={toggle} />
      <main id="main">
        <Hero />
        <Metrics />
        <Skills />
        <Experience />
        <Projects />
        <Pipeline />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
