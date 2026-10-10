import { useRef, useState } from 'react'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { useLang } from '../../i18n/useLang'

/* Formulario de contacto. Envía por la API de Web3Forms, que reenvía el mensaje al correo del dueño.
   La clave de acceso es pública por diseño y se lee de VITE_WEB3FORMS_KEY (ver .env.example).
   Protecciones: campo trampa (honeypot), validación, espera de 60 s entre envíos y tiempo máximo de 15 s. */
const ENDPOINT = 'https://api.web3forms.com/submit'
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY
export const CONTACT_EMAIL = 'Javier.munozll96@gmail.com'

const COOLDOWN_MS = 60_000
const initial = { name: '', email: '', topic: 'job', message: '' }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(values, msgs) {
  const errors = {}
  if (values.name.trim().length < 2) errors.name = msgs.name
  if (!EMAIL_RE.test(values.email.trim())) errors.email = msgs.email
  if (values.message.trim().length < 10) errors.message = msgs.message
  return errors
}

function recentlySent() {
  try {
    return Date.now() - Number(localStorage.getItem('contact:last') || 0) < COOLDOWN_MS
  } catch {
    return false
  }
}

export default function ContactForm() {
  const { t } = useLang()
  const f = t.contact.form
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error | wait | unavailable
  const trap = useRef(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    const found = validate(values, f.errors)
    setErrors(found)
    if (Object.keys(found).length) return

    // Un bot rellena el campo oculto: se finge éxito sin enviar nada
    if (trap.current?.checked) {
      setStatus('success')
      return
    }
    if (recentlySent()) {
      setStatus('wait')
      return
    }
    if (!ACCESS_KEY) {
      setStatus('unavailable')
      return
    }

    setStatus('sending')
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 15000)
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Portafolio · ${f.topics[values.topic]} · ${values.name.trim()}`,
          from_name: 'Portafolio Javier Muñoz',
          name: values.name.trim(),
          email: values.email.trim(),
          topic: f.topics[values.topic],
          message: values.message.trim(),
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || data.success === false) throw new Error('send failed')
      try {
        localStorage.setItem('contact:last', String(Date.now()))
      } catch {
        /* sin almacenamiento: no hay espera entre envíos */
      }
      setValues(initial)
      setStatus('success')
    } catch {
      setStatus('error')
    } finally {
      clearTimeout(timer)
    }
  }

  const sending = status === 'sending'

  return (
    <form className="cform" onSubmit={onSubmit} noValidate>
      <h3 className="cform-title">{f.title}</h3>

      <div className="cform-row">
        <div className="cform-field">
          <label htmlFor="cf-name">{f.name}</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={80}
            value={values.name}
            onChange={onChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'cf-name-err' : undefined}
          />
          {errors.name && (
            <p id="cf-name-err" className="cform-err">
              {errors.name}
            </p>
          )}
        </div>

        <div className="cform-field">
          <label htmlFor="cf-email">{f.email}</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={120}
            value={values.email}
            onChange={onChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'cf-email-err' : undefined}
          />
          {errors.email && (
            <p id="cf-email-err" className="cform-err">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="cform-field">
        <label htmlFor="cf-topic">{f.topic}</label>
        <select id="cf-topic" name="topic" value={values.topic} onChange={onChange}>
          {Object.entries(f.topics).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div className="cform-field">
        <label htmlFor="cf-message">{f.message}</label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          maxLength={2000}
          placeholder={f.messagePlaceholder}
          value={values.message}
          onChange={onChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'cf-message-err' : undefined}
        />
        {errors.message && (
          <p id="cf-message-err" className="cform-err">
            {errors.message}
          </p>
        )}
      </div>

      {/* Campo trampa: invisible para personas, los bots lo marcan */}
      <input
        ref={trap}
        type="checkbox"
        name="botcheck"
        className="cform-trap"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <button className="cform-send" type="submit" disabled={sending}>
        {sending ? f.sending : f.send}
        <Send size={17} aria-hidden="true" />
      </button>
      <p className="cform-privacy">{f.privacy}</p>

      <div className="cform-status" role="status" aria-live="polite">
        {status === 'success' && (
          <p className="cform-msg cform-msg--ok">
            <CheckCircle2 size={18} aria-hidden="true" /> {f.success}
          </p>
        )}
        {status === 'wait' && (
          <p className="cform-msg cform-msg--warn">
            <AlertCircle size={18} aria-hidden="true" /> {f.wait}
          </p>
        )}
        {(status === 'error' || status === 'unavailable') && (
          <p className="cform-msg cform-msg--bad">
            <AlertCircle size={18} aria-hidden="true" />
            <span>
              {status === 'error' ? f.error : f.unavailable}{' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </span>
          </p>
        )}
      </div>
    </form>
  )
}
