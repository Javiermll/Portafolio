import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Profile from './components/Profile/Profile'
import Projects from './components/Projects/Projects'
import CaseStudy from './components/CaseStudy/CaseStudy'
import Contact from './components/Contact/Contact'
import { useLang } from './i18n/useLang'
import './App.css'

function App() {
  const { t } = useLang()

  // Enlaces directos como /#case-study: el contenido se pinta con React, así que el salto se hace al montar
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return undefined
    const timer = setTimeout(() => document.getElementById(id)?.scrollIntoView(), 150)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    let frame
    function raf(time) {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">
        {t.nav.skip}
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Profile />
        <Projects />
        <CaseStudy />
      </main>
      <Contact />
    </>
  )
}

export default App
