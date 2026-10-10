import { useLang } from '../../i18n/useLang'
import { title, rich } from '../../i18n/render'
import './About.css'

export default function About() {
  const { t } = useLang()
  const a = t.about
  const base = import.meta.env.BASE_URL

  return (
    <div className="about">
      <div className="wrap about-grid">
        <div className="about-photos">
          <img
            className="about-photo about-photo--a"
            src={`${base}assets/perfil-1.webp`}
            alt={a.photoA}
            width="900"
            height="900"
            loading="lazy"
          />
          <img
            className="about-photo about-photo--b"
            src={`${base}assets/perfil-2.webp`}
            alt={a.photoB}
            width="700"
            height="706"
            loading="lazy"
          />
          <span className="about-pill about-pill--a mono">{a.pillA}</span>
          <span className="about-pill about-pill--b mono">{a.pillB}</span>
        </div>

        <div className="about-text">
          <p className="mono about-label">{a.label}</p>
          <h2 className="sec-title">{title(a.title)}</h2>
          <p>{rich(a.p1)}</p>
          <p>{rich(a.p2)}</p>
          <p className="about-quote">{title(a.quote)}</p>

          <dl className="about-stats">
            {a.stats.map((s) => (
              <div key={s.label}>
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
