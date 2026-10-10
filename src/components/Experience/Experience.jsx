import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLang } from '../../i18n/useLang'
import { Terminal, Laptop, GraduationCap, Award, BadgeCheck, ExternalLink, Languages } from 'lucide-react'
import { title } from '../../i18n/render'
import './Experience.css'

const studyIcons = [Terminal, Laptop, GraduationCap]
const certIcons = [BadgeCheck, Award, Award]

/* Recorrido como línea de tiempo interactiva: a la izquierda las etapas, a la derecha el detalle
   de la etapa elegida. Así se muestra una experiencia a la vez y la diapositiva no crece. */
export default function Experience() {
  const { t } = useLang()
  const j = t.journey
  const [selected, setSelected] = useState(0)
  const role = j.roles[selected]

  return (
    <div className="exp">
      <div className="wrap">
        <h2 className="sec-title">{title(j.title)}</h2>
        <p className="sec-sub">{j.sub}</p>

        <div className="exp-grid">
          <div className="exp-timeline" role="group" aria-label={j.experience}>
            {j.roles.map((r, i) => (
              <button
                key={`${r.org}-${r.period}`}
                className={`exp-step ${i === selected ? 'exp-step--on' : ''}`}
                onClick={() => setSelected(i)}
                aria-pressed={i === selected}
              >
                <span className="exp-dot" aria-hidden="true" />
                <span className="exp-step-period mono">{r.period}</span>
                <strong>{r.role}</strong>
                <span className="exp-step-org">{r.org}</span>
              </button>
            ))}
          </div>

          <div className="exp-detail" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={selected}
                className="exp-card"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.18 }}
              >
                <span className="exp-tag mono">{role.tag}</span>
                <h3>{role.role}</h3>
                <p className="exp-card-org">
                  {role.org} · <span className="mono">{role.period}</span>
                </p>
                <ul>
                  {role.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                {role.win && (
                  <div className="exp-win">
                    <span className="mono">{j.achievement}</span>
                    <p>{role.win}</p>
                  </div>
                )}
              </motion.article>
            </AnimatePresence>
          </div>
        </div>

        <div className="exp-extra">
          <section className="exp-edu" aria-labelledby="exp-edu-title">
            <h3 id="exp-edu-title" className="mono">
              <GraduationCap size={16} aria-hidden="true" /> {j.education}
            </h3>
            <ul>
              {j.studies.map((s, i) => {
                const Icon = studyIcons[i]
                return (
                  <li key={s.title} className="exp-study">
                    <span className="exp-study-icon" aria-hidden="true">
                      <Icon size={20} />
                    </span>
                    <span className="exp-study-period mono">{s.period}</span>
                    <strong>{s.title}</strong>
                    <span className="exp-study-org">{s.org}</span>
                  </li>
                )
              })}
            </ul>
          </section>

          <section className="exp-langs" aria-labelledby="exp-langs-title">
            <h3 id="exp-langs-title" className="mono">
              <Languages size={16} aria-hidden="true" /> {j.languagesTitle}
            </h3>
            <div className="exp-langs-card">
              <ul>
                {j.languages.map((l) => (
                  <li key={l.name}>
                    <div className="exp-lang-head">
                      <strong>{l.name}</strong>
                      <span>{l.level}</span>
                    </div>
                    <div className="exp-bar" role="img" aria-label={`${l.name}: ${l.level}`}>
                      {Array.from({ length: 6 }, (_, i) => (
                        <i key={i} className={i < l.value ? 'exp-bar-on' : ''} />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <section className="exp-certs" aria-labelledby="exp-certs-title">
          <h3 id="exp-certs-title" className="mono">
            <Award size={16} aria-hidden="true" /> {j.certsTitle}
          </h3>
          <ul>
            {j.certifications.map((c, i) => {
              const Icon = certIcons[i]
              const body = (
                <>
                  <span className="exp-cert-icon" aria-hidden="true">
                    <Icon size={18} />
                  </span>
                  <div>
                    <strong>{c.title}</strong>
                    <span>{c.detail}</span>
                  </div>
                  {c.href && <ExternalLink size={16} className="exp-cert-link" aria-hidden="true" />}
                </>
              )
              return (
                <li key={c.title}>
                  {c.href ? (
                    <a className="exp-cert exp-cert--link" href={c.href} target="_blank" rel="noopener noreferrer">
                      {body}
                    </a>
                  ) : (
                    <div className="exp-cert">{body}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </section>
      </div>
    </div>
  )
}
