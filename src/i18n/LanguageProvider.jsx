import { useEffect, useMemo, useState } from 'react'
import { LanguageContext } from './LanguageContext'
import es from './es'
import en from './en'

const dictionaries = { es, en }

function getInitialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'es' || saved === 'en') return saved
  } catch {
    /* sin almacenamiento disponible: se usa el idioma por defecto */
  }
  return 'es'
}

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* ignorar */
    }
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t: dictionaries[lang] }), [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
