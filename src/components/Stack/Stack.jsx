import { useEffect, useRef } from 'react'
import './Stack.css'

const BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/'

const categories = [
  {
    emoji: '💻',
    title: 'Frontend',
    techs: [
      { name: 'HTML5',        icon: 'html5/html5-original.svg' },
      { name: 'CSS3',         icon: 'css3/css3-original.svg' },
      { name: 'JavaScript',   icon: 'javascript/javascript-original.svg' },
      { name: 'React',        icon: 'react/react-original.svg' },
      { name: 'React Router', icon: 'reactrouter/reactrouter-original.svg' },
      { name: 'Vite',         icon: 'vite/vite-original.svg' },
      { name: 'Tailwind',     icon: 'tailwindcss/tailwindcss-original.svg' },
    ],
  },
  {
    emoji: '⚙️',
    title: 'Backend',
    techs: [
      { name: 'Node.js',   icon: 'nodejs/nodejs-original.svg' },
      { name: 'Express.js', icon: 'express/express-original.svg' },
    ],
  },
  {
    emoji: '🗄️',
    title: 'Base de datos',
    techs: [
      { name: 'MongoDB',  icon: 'mongodb/mongodb-original.svg' },
      { name: 'Mongoose', icon: 'mongoose/mongoose-original.svg' },
    ],
  },
  {
    emoji: '🔐',
    title: 'Auth y seguridad',
    techs: [
      { name: 'JWT',      icon: 'nodejs/nodejs-original.svg' },
      { name: 'bcryptjs', icon: 'nodejs/nodejs-original.svg' },
    ],
  },
  {
    emoji: '🎨',
    title: 'Diseño',
    techs: [
      { name: 'Figma', icon: 'figma/figma-original.svg' },
    ],
  },
  {
    emoji: '📊',
    title: 'Datos y análisis',
    techs: [
      { name: 'SQL Server', icon: 'microsoftsqlserver/microsoftsqlserver-original.svg' },
      { name: 'Power BI',   icon: 'azuredevops/azuredevops-original.svg' },
    ],
  },
  {
    emoji: '🛠️',
    title: 'Herramientas',
    techs: [
      { name: 'Git',    icon: 'git/git-original.svg' },
      { name: 'GitHub', icon: 'github/github-original.svg' },
      { name: 'VS Code', icon: 'vscode/vscode-original.svg' },
      { name: 'npm',    icon: 'npm/npm-original-wordmark.svg' },
    ],
  },
  {
    emoji: '📚',
    title: 'En formación activa',
    techs: [
      { name: 'TypeScript', icon: 'typescript/typescript-original.svg' },
      { name: 'Jest',       icon: 'jest/jest-plain.svg' },
    ],
    highlight: true,
  },
]

function useScrollFadeUp(threshold = 0.1) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return ref
}

export default function Stack() {
  const titleRef = useScrollFadeUp(0.1)
  const gridRef  = useScrollFadeUp(0.05)

  return (
    <section id="stack" className="stack-section">
      <p className="section-title fade-up" ref={titleRef}>Stack Tecnológico</p>

      <div className="stack-grid fade-up" ref={gridRef}>
        {categories.map((cat) => (
          <div
            key={cat.title}
            className={`stack-card ${cat.highlight ? 'stack-card--highlight' : ''}`}
          >
            <div className="stack-card-header">
              <span className="stack-card-emoji">{cat.emoji}</span>
              <h3 className="stack-card-title">{cat.title}</h3>
            </div>

            <div className="stack-techs">
              {cat.techs.map((tech) => (
                <div key={tech.name} className="stack-tech">
                  <div className="stack-tech-icon-wrapper">
                    <img
                      src={`${BASE}${tech.icon}`}
                      alt={tech.name}
                      className="stack-tech-icon"
                      onError={(e) => { e.currentTarget.style.opacity = '0.2' }}
                    />
                  </div>
                  <span className="stack-tech-name">{tech.name}</span>
                  {tech.badge && <span className="stack-tech-badge">{tech.badge}</span>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
