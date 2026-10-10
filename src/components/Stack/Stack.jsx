import { stackGroups } from '../../data/stack'
import { useLang } from '../../i18n/useLang'
import { title } from '../../i18n/render'
import './Stack.css'

function Tech({ item, learnLabel }) {
  return (
    <li className={`tech ${item.level === 'learn' ? 'tech--learn' : ''}`}>
      {item.icon && (
        <img
          src={item.icon}
          alt=""
          width="18"
          height="18"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      )}
      <span>{item.name}</span>
      {item.level === 'learn' && <em className="mono">{learnLabel}</em>}
    </li>
  )
}

export default function Stack() {
  const { t } = useLang()

  return (
    <div className="stack">
      <div className="wrap">
        <h2 className="sec-title">{title(t.stack.title)}</h2>
        <p className="sec-sub">{t.stack.sub}</p>

        <div className="stack-grid">
          {stackGroups.map((g) => (
            <div key={g.key} className="stack-card">
              <h3 className="mono">{t.stack.groups[g.key]}</h3>
              <ul>
                {g.items.map((item) => (
                  <Tech key={item.name} item={item} learnLabel={t.stack.learn} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
