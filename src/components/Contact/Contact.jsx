import { Mail, Linkedin, Github } from 'lucide-react'
import { useLang } from '../../i18n/useLang'
import { title } from '../../i18n/render'
import ContactForm, { CONTACT_EMAIL } from './ContactForm'
import './Contact.css'

const contacts = [
  { icon: Mail, label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/javiermunoz-fullstackdeveloper/' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/Javiermll' },
]

export default function Contact() {
  const { t } = useLang()

  return (
    <footer id="contact" className="contact">
      <div className="wrap contact-inner">
        <div className="contact-copy-col">
          <p className="mono contact-kicker">{t.contact.kicker}</p>
          <h2 className="sec-title contact-title">{title(t.contact.title)}</h2>
          <p className="contact-lead">{t.contact.lead}</p>

          <ul className="contact-list">
            {contacts.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <Icon size={18} aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </div>

      <div className="wrap">
        <p className="mono contact-copy">
          © {new Date().getFullYear()} Javier Muñoz Llanos · {t.contact.copy}
        </p>
      </div>
    </footer>
  )
}
