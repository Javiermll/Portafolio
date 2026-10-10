import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ExternalLink } from 'lucide-react'
import { projects } from '../../data/projects'
import { useLang } from '../../i18n/useLang'
import { title } from '../../i18n/render'
import './Projects.css'

const statusClass = {
  production: 'pill--ok',
  bootcamp: 'pill--bc',
  updating: 'pill--wip',
}

function Detail({ p, copy, ui }) {
  return (
    <div className="proj-detail">
      {p.image && (
        <img
          className="proj-detail-img"
          src={p.image}
          alt={`${ui.screenshotOf} ${copy.title}`}
          width="1400"
          loading="lazy"
        />
      )}
      <div className="proj-detail-body">
        <div>
          <h3 className="mono">{ui.labels.problem}</h3>
          <p>{copy.problem}</p>
        </div>
        <div>
          <h3 className="mono">{ui.labels.role}</h3>
          <p>{copy.role}</p>
        </div>
        <div>
          <h3 className="mono">{ui.labels.decisions}</h3>
          <ul>
            {copy.decisions.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
        <ul className="proj-chips" aria-label={ui.labels.tech}>
          {p.stack.map((s) => (
            <li key={s} className="mono">
              {s}
            </li>
          ))}
        </ul>
        <div className="proj-links">
          {p.links.map((l, i) => (
            <a
              key={l.href}
              className={`btn ${i === 0 ? 'btn--yellow' : ''}`}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ui.links[l.key]} <ExternalLink size={15} aria-hidden="true" />
            </a>
          ))}
        </div>
        {copy.note && <p className="proj-note">{copy.note}</p>}
      </div>
    </div>
  )
}

export default function Projects() {
  const { t } = useLang()
  const ui = t.projects
  const [openId, setOpenId] = useState(null)

  return (
    <section id="projects" className="projects">
      <div className="wrap">
        <h2 className="sec-title">{title(ui.title)}</h2>
        <p className="sec-sub">{ui.sub}</p>

        <div className="proj-panel">
          <div className="proj-head mono" aria-hidden="true">
            <span />
            <span>{ui.cols.project}</span>
            <span>{ui.cols.result}</span>
            <span>{ui.cols.status}</span>
            <span />
          </div>

          {projects.map((p) => {
            const copy = ui.items[p.id]
            const open = openId === p.id
            return (
              <article key={p.id} className={`proj-row ${open ? 'proj-row--open' : ''}`}>
                <button
                  className="proj-trigger"
                  onClick={() => setOpenId(open ? null : p.id)}
                  aria-expanded={open}
                  aria-controls={`proj-${p.id}`}
                >
                  <span className="proj-thumb">
                    {p.image ? (
                      <img src={p.image} alt="" width="112" height="60" loading="lazy" />
                    ) : (
                      <span className="proj-thumb-empty mono">Django</span>
                    )}
                  </span>
                  <span className="proj-main">
                    <strong>{copy.title}</strong>
                    <small className="mono">
                      {copy.kind} · {p.year}
                    </small>
                    <span className="proj-summary">{copy.summary}</span>
                  </span>
                  <span className="proj-result">{copy.result}</span>
                  <span className={`pill mono ${statusClass[p.status]}`}>{ui.status[p.status]}</span>
                  <span className="proj-toggle">
                    <span className="proj-more mono">{open ? ui.less : ui.more}</span>
                    <ChevronDown className="proj-chevron" size={22} aria-hidden="true" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      id={`proj-${p.id}`}
                      role="region"
                      aria-label={`${ui.detailOf} ${copy.title}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <Detail p={p} copy={copy} ui={ui} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
