import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";

/* ── Lightbox ── */
function ImageLightbox({ src, alt, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="lightbox-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.img
        className="lightbox-img"
        src={src}
        alt={alt}
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.88, opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  );
}

/* ── Datos ── */
const projects = [
  {
    title: "Constructora Hidrorural",
    badge: "🏗️ Cliente Real en Producción",
    description:
      "Hidrorural dependía casi exclusivamente de licitaciones con el MOP. Sin web ni canal de contacto formal, las solicitudes llegaban por teléfono de forma informal.",
    built:
      "SPA institucional con React 19 y Vite, 6 páginas y diseño 100% responsivo. Backend propio en Node.js/Express con formulario de cotización, Nodemailer, rate-limiting y honeypot anti-spam.",
    result:
      "La empresa pasó de cero presencia digital a tener un canal formal de captación de clientes. Primer proyecto en producción con cliente real.",
    decisions: [
      "React 19 + Vite sobre Next.js — sitio institucional estático sin necesidad de SSR, compatible con hosting gratuito en GitHub Pages",
      "Nodemailer sobre SendGrid — sin costo, control directo del servidor SMTP, suficiente para el volumen de solicitudes esperado",
      "Honeypot + rate-limiting sobre reCAPTCHA — menos fricción para el usuario, efectivo contra bots simples en formularios de contacto",
    ],
    stack: ["React 19", "Vite", "Node.js", "Express", "Nodemailer", "Open-Meteo API"],
    image: `${import.meta.env.BASE_URL}assets/Hidrorural_Captura2.png`,
    color: "#1a1a2e",
    demoUrl: "https://javiermll.github.io/contructora-hidrorural-frontend/",
    frontendUrl: "https://github.com/Javiermll/contructora-hidrorural-frontend",
    backendUrl: "https://github.com/Javiermll/contructora-hidrorural-backend",
  },
  {
    title: "Around The U.S. Full-Stack",
    badge: "🔐 Proyecto Final Bootcamp",
    description:
      "Aplicación full-stack completa con registro y login seguros, sesiones persistentes con JWT y protección de rutas reales.",
    built:
      "Frontend en React 19 con Context API y rutas protegidas. Backend Node.js/Express con MongoDB Atlas, JWT, bcryptjs, celebrate/Joi y logging con winston.",
    result:
      "App full-stack desplegada con 10 endpoints REST y flujo de autenticación de extremo a extremo. El proyecto donde más crecí durante el bootcamp.",
    decisions: [
      "JWT sobre sessions — stateless, escalable horizontalmente, estándar en APIs REST modernas",
      "MongoDB Atlas sobre SQL — esquema flexible para MVP, menor fricción de setup, nativo con el stack JavaScript",
      "Celebrate/Joi para validación — lógica declarativa en el servidor, separa validación del controlador y mejora mantenibilidad",
    ],
    coldStart: true,
    stack: ["React 19", "Node.js", "Express", "MongoDB Atlas", "JWT", "bcryptjs", "Vercel", "Render"],
    image: `${import.meta.env.BASE_URL}assets/Web_Api_full_Captura.png`,
    color: "#0d1b2a",
    demoUrl: "https://web-project-api-full-jade.vercel.app/",
    githubUrl: "https://github.com/Javiermll/web_project_api_full",
  },
  {
    title: "Around The U.S. React",
    badge: "⚛️ Bootcamp",
    description:
      "Migración de una aplicación JavaScript vanilla con manipulación directa del DOM a una arquitectura declarativa en React.",
    built:
      "Reescritura completa en React 19 con componentes funcionales, hooks y Context API. 10+ componentes con responsabilidades claramente separadas.",
    result:
      "Aplicación migrada y desplegada. El proyecto que me enseñó a pensar en componentes y estado antes de escribir código.",
    decisions: [
      "Context API sobre Redux — aplicación pequeña sin necesidad de store global complejo, evita boilerplate innecesario",
      "Componentes funcionales + hooks exclusivamente — sin class components, código más limpio y predecible",
      "BEM adaptado a componentes — mantener convenciones CSS conocidas al migrar de vanilla JS a React",
    ],
    stack: ["React 19", "Vite", "Context API", "CSS Modules", "BEM", "GitHub Pages"],
    image: `${import.meta.env.BASE_URL}assets/React_Captura.png`,
    color: "#0f2027",
    demoUrl: "https://javiermll.github.io/web_project_around_react/",
    githubUrl: "https://github.com/Javiermll/web_project_around_react",
  },
];

/* ── Hook fade-in por card ── */
function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("project-card--visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ── Card individual ── */
function ProjectCard({ project, onImageClick }) {
  const cardRef = useFadeIn();
  const [decisionsOpen, setDecisionsOpen] = useState(false);

  return (
    <article
      ref={cardRef}
      className="project-card"
      style={{ "--card-color": project.color }}
    >
      {/* Cabecera */}
      <div className="project-card-header">
        <span className="project-badge">{project.badge}</span>
        <h3 className="project-title">{project.title}</h3>
      </div>

      {/* Cuerpo: info | imagen */}
      <div className="project-card-body">

        {/* Columna info */}
        <div className="project-info">
          <div className="project-texts">
            <p className="project-description">{project.description}</p>
            <p className="project-built">{project.built}</p>
            <p className="project-result">{project.result}</p>
          </div>

          {/* Acordeón decisiones técnicas */}
          <div className="project-decisions">
            <button
              className="project-decisions-toggle"
              onClick={() => setDecisionsOpen((o) => !o)}
              aria-expanded={decisionsOpen}
            >
              <span>Por qué así</span>
              <span className={`project-decisions-arrow ${decisionsOpen ? "project-decisions-arrow--open" : ""}`}>
                ›
              </span>
            </button>
            <div className={`project-decisions-body ${decisionsOpen ? "project-decisions-body--open" : ""}`}>
              <ul className="project-decisions-list">
                {project.decisions.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stack */}
          <div className="project-stack">
            {project.stack.map((tech) => (
              <span key={tech} className="project-tech">{tech}</span>
            ))}
          </div>

          {/* Links */}
          <div className="project-links">
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link project-link--primary">
              Demo →
            </a>
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                GitHub →
              </a>
            )}
            {project.frontendUrl && (
              <a href={project.frontendUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                Frontend →
              </a>
            )}
            {project.backendUrl && (
              <a href={project.backendUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                Backend →
              </a>
            )}
            {project.coldStart && (
              <p className="project-cold-start">
                ⚠️ Backend en Render free tier — la primera petición puede tardar ~30s mientras el servidor arranca.
              </p>
            )}
          </div>
        </div>

        {/* Columna imagen */}
        <div
          className="project-image-wrapper project-image-clickable"
          onClick={() => onImageClick(project.image, project.title)}
          title="Ver imagen completa"
        >
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
            onError={(e) => { e.currentTarget.style.opacity = "0.15"; }}
          />
          <div className="project-image-hint">🔍</div>
        </div>
      </div>
    </article>
  );
}

/* ── Sección principal ── */
export default function Projects() {
  const [lightbox, setLightbox] = useState(null);
  const openLightbox = useCallback((src, alt) => setLightbox({ src, alt }), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <section id="projects" className="projects-section">
      <p className="section-title">Proyectos</p>

      <div className="projects-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onImageClick={openLightbox}
          />
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <ImageLightbox src={lightbox.src} alt={lightbox.alt} onClose={closeLightbox} />
        )}
      </AnimatePresence>
    </section>
  );
}
