import { useEffect, useRef } from 'react'
import './About.css'

const values = [
  {
    icon: '🎯',
    title: 'Orientado a negocio',
    desc: 'Vengo de ICI — entiendo el problema antes de escribir código',
  },
  {
    icon: '⚙️',
    title: 'Enfocado en producción',
    desc: 'Construyo cosas que funcionan para usuarios reales, no solo en local',
  },
  {
    icon: '📈',
    title: 'En crecimiento constante',
    desc: 'Aprendiendo TypeScript, Jest y nuevas herramientas cada semana',
  },
]

function useScrollFadeIn(threshold = 0.15) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return ref
}

export default function About() {
  const sectionRef   = useScrollFadeIn(0.1)
  const textRef      = useScrollFadeIn(0.15)
  const photoRef     = useScrollFadeIn(0.15)
  const cardsRef     = useScrollFadeIn(0.1)

  return (
    <section id="about" className="about-section fade-section" ref={sectionRef}>
      <p className="section-title">Sobre mí</p>

      <div className="about-grid">
        {/* Foto — va primero en el DOM para que el float de tablet funcione */}
        <div className="about-photo-wrapper fade-right" ref={photoRef}>
          <div className="about-photo-glow" />
          <img
            src={`${import.meta.env.BASE_URL}assets/Foto_perfil.jpeg`}
            alt="Javier Muñoz"
            className="about-photo"
            onError={(e) => {
              e.currentTarget.src =
                'https://ui-avatars.com/api/?name=Javier+Munoz&background=00b4d8&color=0a0a0f&size=320&bold=true'
            }}
          />
        </div>

        {/* Texto */}
        <div className="about-text fade-left" ref={textRef}>
          <p>Soy Javier, desarrollador Full-Stack con base en Concepción, Chile.</p>
          <p>
            Vengo de la Ingeniería Civil Industrial, y eso me dejó algo que no se enseña
            en un bootcamp: la capacidad de leer un problema de negocio antes de escribir
            una línea de código. Cuando me encontré en la búsqueda laboral al salir de la
            universidad, tomé una decisión deliberada: especializarme en tecnología, no
            por moda, sino porque vi ahí una forma real de construir cosas con impacto.
          </p>
          <p>
            Hoy construyo aplicaciones web con React en el frontend y Node.js/Express en
            el backend. Ya tengo un proyecto en producción con un cliente real: una
            plataforma institucional completa con backend propio, integración de APIs
            externas y medidas de seguridad implementadas. No es un proyecto de práctica,
            es algo que alguien usa.
          </p>
          <p>
            Me motiva el detalle: diseñar una interfaz que funcione exactamente como el
            usuario la necesita, definir la arquitectura correcta para el problema
            correcto, y seguir aprendiendo cada semana.
          </p>
          <p className="about-text-highlight">
            Estoy abierto a roles Full-Stack donde pueda aportar desde el día uno y
            seguir creciendo con propósito.
          </p>
        </div>
      </div>

      {/* Tarjetas de valores */}
      <div className="about-cards fade-up" ref={cardsRef}>
        {values.map((v) => (
          <div key={v.title} className="about-card">
            <span className="about-card-icon">{v.icon}</span>
            <h3 className="about-card-title">{v.title}</h3>
            <p className="about-card-desc">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
