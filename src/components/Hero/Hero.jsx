import { Layers, Code2, MapPin } from 'lucide-react'
import { useLang } from '../../i18n/useLang'
import './Hero.css'

const icons = [Layers, Code2, MapPin]

export default function Hero() {
  const { t } = useLang()

  return (
    <section id="hero" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1 className="hero-title">
            {t.hero.titleA} <span className="hero-title-accent">{t.hero.titleB}</span>
          </h1>
          <p className="hero-lead">{t.hero.lead}</p>
        </div>

        <div className="hero-photo">
          <img
            src={`${import.meta.env.BASE_URL}assets/perfil-1.webp`}
            alt={t.hero.photoAlt}
            width="900"
            height="900"
          />
          <span className="hero-pin mono">{t.hero.pin}</span>
        </div>
      </div>

      <div className="wrap">
        <ul className="hero-pillars">
          {t.hero.pillars.map((p, i) => {
            const Icon = icons[i]
            return (
              <li key={p.label} className="hero-pillar">
                <span className="hero-pillar-icon" aria-hidden="true">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="mono hero-pillar-label">{p.label}</p>
                  <p>{p.text}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
