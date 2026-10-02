import { Contact } from './components/Contact'
import { ClusterField } from './components/ClusterField'
import { Credentials } from './components/Credentials'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Impact } from './components/Impact'
import { Manifesto } from './components/Manifesto'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { ToolMarquee } from './components/ToolMarquee'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggle } = useTheme()
  return (
    <>
      <ClusterField />
      <a
        href="#main"
        className="absolute top-2 left-[-9999px] z-50 rounded-full bg-cobalt px-4 py-2 text-on-cobalt focus:left-2"
      >
        Skip to content
      </a>
      {/* Content sits above the fixed cluster-field canvas. */}
      <div className="relative z-10">
        <Nav theme={theme} onToggleTheme={toggle} />
        <main id="main">
          <Hero />
          <ToolMarquee />
          <Manifesto />
          <Impact />
          <Experience />
          <Projects />
          <Skills />
          <Credentials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
