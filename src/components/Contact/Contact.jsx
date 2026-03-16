import { useEffect, useRef } from "react";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import "./Contact.css";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "Javier.mllanos96@gmail.com",
    href: "mailto:Javier.mllanos96@gmail.com",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+56 9 921 00385",
    href: "tel:+56992100385",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/jamunozll/",
    href: "https://www.linkedin.com/in/jamunozll/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Javiermll",
    href: "https://github.com/Javiermll",
  },
];

export default function Contact() {
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const els = [titleRef.current, gridRef.current, footerRef.current].filter(
      Boolean,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <footer id="contact" className="contact-section">
      <div className="contact-inner">
        <div className="contact-header fade-item" ref={titleRef}>
          <p className="section-title" style={{ marginBottom: "12px" }}>
            Contacto
          </p>
          <p className="contact-subtitle">
            Estoy abierto a nuevas oportunidades. Si tienes un proyecto o rol en
            mente, no dudes en escribirme.
          </p>
        </div>

        <div className="contact-grid fade-item" ref={gridRef}>
          {contacts.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="contact-card"
            >
              <div className="contact-card-icon">
                <Icon size={22} />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">{label}</span>
                <span className="contact-card-value">{value}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="contact-footer fade-item" ref={footerRef}>
          <div className="contact-location">
            <MapPin size={14} />
            <span>Concepción, Chile · Disponible para trabajo en LATAM</span>
          </div>
          <p className="contact-copy">
            © {new Date().getFullYear()} Javier Muñoz · Construido con React +
            Vite + CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
