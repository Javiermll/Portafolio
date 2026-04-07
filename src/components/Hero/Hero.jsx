import { useEffect, useRef } from "react";
import "./Hero.css";

const stackIcons = [
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Figma",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "HTML5",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Vite",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
  },
  {
    name: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
];

export default function Hero() {
  const contentRef = useRef(null);

  // Fade-in al montar
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    const id = setTimeout(() => {
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
    return () => clearTimeout(id);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero-section">
      {/* Gradiente radial */}
      <div className="hero-gradient" aria-hidden="true" />

      {/* Líneas decorativas verticales */}
      <div className="hero-lines" aria-hidden="true">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="hero-line" />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="hero-content" ref={contentRef}>
        <span className="hero-badge">
          <span className="hero-badge-dot" />
          Disponible para nuevas oportunidades
        </span>

        <h1 className="hero-name">Javier Muñoz</h1>
        <h2 className="hero-subtitle">Full-Stack Developer</h2>
        <p className="hero-stack-line">
          React &amp; Node.js · Del requerimiento de negocio al producto en producción
        </p>
        <p className="hero-location">
          Concepción, Chile · Disponible para trabajo remoto en LATAM
        </p>

        <div className="hero-ctas">
          <button
            className="hero-btn hero-btn--primary"
            onClick={() => scrollTo("projects")}
          >
            Ver proyectos
          </button>
          <button
            className="hero-btn hero-btn--secondary"
            onClick={() => scrollTo("contact")}
          >
            Contacto →
          </button>
        </div>
      </div>

      {/* Carrusel de stack */}
      <div className="hero-carousel-wrapper">
        <p className="hero-carousel-label">Stack tecnológico</p>
        <div className="hero-carousel-track">
          <div className="hero-carousel-inner">
            {[...stackIcons, ...stackIcons].map((icon, i) => (
              <div key={i} className="hero-carousel-item">
                <img
                  src={icon.src}
                  alt={icon.name}
                  className="hero-carousel-icon"
                  onError={(e) => {
                    e.currentTarget.style.opacity = "0.2";
                  }}
                />
                <span className="hero-carousel-name">{icon.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
