import { useEffect, useRef } from 'react'
import './Experience.css'

const experiences = [
  {
    title: 'Full-Stack Developer & Ingeniero de Gestión',
    company: 'Constructora Hidrorural Ltda.',
    period: 'Enero 2026 — Actualidad',
    description:
      'Desarrollo de plataforma web institucional en producción: SPA en React 19 con backend propio en Node.js/Express, integración de APIs externas y formulario de cotización funcional conectado a cliente real.',
    current: true,
  },
  {
    title: 'Formación en Desarrollo Web Full-Stack',
    company: 'TripleTen Bootcamp',
    period: '2025 — Enero 2026',
    description:
      'Programa intensivo: JavaScript, React, Node.js, Express, MongoDB y REST APIs. Proyectos prácticos con despliegue en producción.',
    current: false,
  },
]

export default function Experience() {
  const titleRef = useRef(null)
  const itemRefs = useRef([])

  useEffect(() => {
    const elements = [titleRef.current, ...itemRefs.current].filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="experience-section">
      <p className="section-title fade-item" ref={titleRef}>Experiencia</p>

      <div className="timeline">
        {/* Línea vertical central */}
        <div className="timeline-line" />

        {experiences.map((exp, i) => (
          <div
            key={exp.title}
            className={`timeline-item timeline-item--${i % 2 === 0 ? 'left' : 'right'} fade-item`}
            ref={(el) => (itemRefs.current[i] = el)}
          >
            {/* Punto en la línea */}
            <div className="timeline-dot">
              {exp.current && <span className="timeline-dot-pulse" />}
            </div>

            {/* Tarjeta */}
            <div className="timeline-card">
              <div className="timeline-card-top">
                <h3 className="timeline-card-title">{exp.title}</h3>
                {exp.current && (
                  <span className="timeline-badge-current">Actual</span>
                )}
              </div>
              <p className="timeline-company">{exp.company}</p>
              <p className="timeline-period">{exp.period}</p>
              <p className="timeline-desc">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
