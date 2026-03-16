import { useState, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useOnClickOutside } from 'usehooks-ts'
import { Home, User, FolderCode, Layers, Briefcase, Mail } from 'lucide-react'
import './Navbar.css'

const tabs = [
  { title: 'Inicio',      icon: Home,       sectionId: 'hero' },
  { title: 'Sobre mí',    icon: User,       sectionId: 'about' },
  { type: 'separator' },
  { title: 'Proyectos',   icon: FolderCode, sectionId: 'projects' },
  { title: 'Stack',       icon: Layers,     sectionId: 'stack' },
  { type: 'separator' },
  { title: 'Experiencia', icon: Briefcase,  sectionId: 'experience' },
  { title: 'Contacto',    icon: Mail,       sectionId: 'contact' },
]

const buttonVariants = {
  animate: (isSelected) => ({
    gap: isSelected ? '0.5rem' : 0,
    paddingLeft:  isSelected ? '1rem' : '0.5rem',
    paddingRight: isSelected ? '1rem' : '0.5rem',
  }),
}

const spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: 'auto', opacity: 1 },
  exit:    { width: 0, opacity: 0 },
}

const transition = { delay: 0.1, type: 'spring', bounce: 0, duration: 0.6 }

export default function Navbar() {
  const [selected, setSelected] = useState(null)
  const ref = useRef(null)

  useOnClickOutside(ref, () => setSelected(null))

  const handleSelect = (index, sectionId) => {
    setSelected(index)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar-wrapper">
      <div className="navbar-container" ref={ref}>
        {tabs.map((tab, index) => {
          if (tab.type === 'separator') {
            return <div key={`sep-${index}`} className="navbar-separator" />
          }
          const Icon = tab.icon
          return (
            <motion.button
              key={tab.title}
              variants={buttonVariants}
              initial={false}
              animate="animate"
              custom={selected === index}
              onClick={() => handleSelect(index, tab.sectionId)}
              transition={transition}
              className={`navbar-tab ${selected === index ? 'navbar-tab--active' : ''}`}
            >
              <Icon size={20} />
              <AnimatePresence initial={false}>
                {selected === index && (
                  <motion.span
                    variants={spanVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={transition}
                    className="navbar-tab-label"
                  >
                    {tab.title}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          )
        })}
      </div>
    </nav>
  )
}
