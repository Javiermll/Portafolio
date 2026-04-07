import { Sun, Moon } from 'lucide-react'
import './ThemeToggle.css'

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
      title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
