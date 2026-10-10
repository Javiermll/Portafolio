import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLang } from '../../i18n/useLang'
import './Navbar.css'

// slide: diapositiva del carrusel de perfil que se abre al navegar
const links = [
  { key: 'about', id: 'profile', slide: 'about' },
  { key: 'stack', id: 'profile', slide: 'stack' },
  { key: 'journey', id: 'profile', slide: 'journey' },
  { key: 'projects', id: 'projects' },
  { key: 'caseStudy', id: 'case-study' },
]

export default function Navbar() {
  const { t, lang, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [overHero, setOverHero] = useState(true)
  const toggleRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      // El navbar se oscurece mientras está sobre el Hero y vuelve a blanco al salir de él
      const hero = document.getElementById('hero')
      setOverHero(hero ? window.scrollY < hero.offsetHeight - 70 : false)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Escape cierra el menú móvil y devuelve el foco al botón que lo abrió
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const go = (id, slide) => {
    setOpen(false)
    if (slide) window.dispatchEvent(new CustomEvent('profile:goto', { detail: slide }))
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${overHero ? 'navbar--dark' : ''}`}>
      <div className="wrap navbar-inner">
        <button className="navbar-brand" onClick={() => go('hero')} aria-label={`Javier Muñoz · ${t.nav.home}`}>
          JAVIER MUÑOZ
        </button>

        <div className="navbar-right">
          <div className="navbar-lang mono" role="group" aria-label={t.nav.language}>
            {['es', 'en'].map((code) => (
              <button
                key={code}
                className={`navbar-lang-btn ${lang === code ? 'navbar-lang-btn--on' : ''}`}
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                lang={code}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            ref={toggleRef}
            className="navbar-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="navbar-links"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <nav
          id="navbar-links"
          className={`navbar-links ${open ? 'navbar-links--open' : ''}`}
          aria-label={t.nav.main}
        >
          {links.map((l) => (
            <button key={l.key} className="navbar-link mono" onClick={() => go(l.id, l.slide)}>
              {t.nav[l.key]}
            </button>
          ))}
          <button className="navbar-link navbar-link--cta mono" onClick={() => go('contact')}>
            {t.nav.contact}
          </button>
        </nav>
      </div>
    </header>
  )
}
