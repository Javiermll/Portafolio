import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLang } from '../../i18n/useLang'
import About from '../About/About'
import Stack from '../Stack/Stack'
import Experience from '../Experience/Experience'
import './Profile.css'

const slides = [
  { id: 'about', Component: About },
  { id: 'stack', Component: Stack },
  { id: 'journey', Component: Experience },
]

const variants = {
  enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
}

export default function Profile() {
  const { t } = useLang()
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const tabRefs = useRef([])

  const goTo = useCallback(
    (next) => {
      setDirection(next > index ? 1 : -1)
      setIndex(next)
    },
    [index],
  )

  const step = (delta) => goTo((index + delta + slides.length) % slides.length)

  // La Navbar pide una diapositiva concreta (Stack, Recorrido) con un evento.
  useEffect(() => {
    const onGoto = (e) => {
      const next = slides.findIndex((s) => s.id === e.detail)
      if (next === -1) return
      setDirection(next > index ? 1 : -1)
      setIndex(next)
    }
    window.addEventListener('profile:goto', onGoto)
    return () => window.removeEventListener('profile:goto', onGoto)
  }, [index])

  const onTabKey = (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const next = (index + (e.key === 'ArrowRight' ? 1 : -1) + slides.length) % slides.length
    goTo(next)
    tabRefs.current[next]?.focus()
  }

  const { Component, id } = slides[index]

  return (
    <section id="profile" className="profile">
      <div className="wrap">
        <div className="profile-bar">
          <div className="profile-tabs" role="tablist" aria-label={t.profile.ariaTabs} onKeyDown={onTabKey}>
            {slides.map((s, i) => (
              <button
                key={s.id}
                ref={(el) => (tabRefs.current[i] = el)}
                role="tab"
                id={`tab-${s.id}`}
                aria-selected={i === index}
                aria-controls={`panel-${s.id}`}
                tabIndex={i === index ? 0 : -1}
                className={`profile-tab mono ${i === index ? 'profile-tab--on' : ''}`}
                onClick={() => goTo(i)}
              >
                {t.profile.tabs[s.id]}
              </button>
            ))}
          </div>

          <div className="profile-arrows">
            <button className="profile-arrow" onClick={() => step(-1)} aria-label={t.profile.prev}>
              <ChevronLeft size={20} />
            </button>
            <span className="mono profile-count" aria-hidden="true">
              {index + 1} / {slides.length}
            </span>
            <button className="profile-arrow" onClick={() => step(1)} aria-label={t.profile.next}>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="profile-stage">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={id}
              id={`panel-${id}`}
              role="tabpanel"
              aria-labelledby={`tab-${id}`}
              className="profile-panel"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.26, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Component />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
