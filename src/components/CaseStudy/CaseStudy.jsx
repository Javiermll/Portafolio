import { ExternalLink } from 'lucide-react'
import { useLang } from '../../i18n/useLang'
import { title } from '../../i18n/render'
import './CaseStudy.css'

const GH = 'https://github.com/Javiermll/alke-wallet-django'

export default function CaseStudy() {
  const { t } = useLang()
  const c = t.caseStudy

  return (
    <section id="case-study" className="case">
      <div className="wrap">
        <p className="mono case-kicker">{c.kicker}</p>
        <h2 className="sec-title case-title">{title(c.title)}</h2>
        <p className="sec-sub">{c.sub}</p>

        <div className="case-top">
          <img
            className="case-img"
            src={`${import.meta.env.BASE_URL}assets/proy-alke-wallet.webp`}
            alt={c.imgAlt}
            width="1400"
            loading="lazy"
          />
          <ul className="case-metrics" aria-label={c.metricsLabel}>
            {c.metrics.map((m) => (
              <li key={m.label}>
                <b>{m.value}</b>
                <span>{m.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="case-grid">
          <article className="case-card">
            <h3 className="mono">{c.activity.h}</h3>
            <p>{c.activity.p}</p>
          </article>

          <article className="case-card">
            <h3 className="mono">{c.challenge.h}</h3>
            <p>{c.challenge.p}</p>
          </article>

          <article className="case-card">
            <h3 className="mono">{c.solution.h}</h3>
            <ul>
              {c.solution.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </article>

          <article className="case-card">
            <h3 className="mono">{c.tool.h}</h3>
            <p>{c.tool.p}</p>
          </article>

          <article className="case-card">
            <h3 className="mono">{c.learnings.h}</h3>
            <ul>
              {c.learnings.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </article>

          <article className="case-card">
            <h3 className="mono">{c.skills.h}</h3>
            <ul className="case-skills">
              {c.skills.items.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </article>

          <article className="case-card case-card--wide">
            <h3 className="mono">{c.why.h}</h3>
            <p>{c.why.p}</p>
          </article>
        </div>

        <div className="case-links">
          <a className="btn btn--yellow" href="https://javiermll.github.io/alke-wallet-django/" target="_blank" rel="noopener noreferrer">
            {c.links.demo} <ExternalLink size={15} aria-hidden="true" />
          </a>
          <a className="btn" href={GH} target="_blank" rel="noopener noreferrer">
            {c.links.github} <ExternalLink size={15} aria-hidden="true" />
          </a>
          <a className="btn" href={`${GH}/blob/main/docs/Alke_Wallet_Documentacion_Tecnica.pdf`} target="_blank" rel="noopener noreferrer">
            {c.links.docs} <ExternalLink size={15} aria-hidden="true" />
          </a>
          <a className="btn" href={`${GH}/blob/main/docs/informe_pruebas.pdf`} target="_blank" rel="noopener noreferrer">
            {c.links.tests} <ExternalLink size={15} aria-hidden="true" />
          </a>
        </div>
        <p className="case-note">{c.note}</p>
      </div>
    </section>
  )
}
