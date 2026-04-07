# CLAUDE.md — Portfolio Javier Muñoz

## Stack

- **React 19** + **Vite** (template `react`, sin TypeScript)
- **JavaScript ES6+** — sin TypeScript, sin Tailwind, sin shadcn
- **CSS por componente** — un `.css` por cada `.jsx`
- **framer-motion** — solo para Navbar (expandable tabs) y Projects (stacking cards)
- **lenis** — smooth scroll global, inicializado en `App.jsx`
- **lucide-react** — íconos de la Navbar y Contact
- **usehooks-ts** — hook `useOnClickOutside` para cerrar la Navbar al click externo
- **gh-pages** — deploy a GitHub Pages

## Estructura

```
src/
  components/
    Navbar/      → barra fija top-right, expandable tabs de 21st.dev
    Hero/        → pantalla completa, badge + nombre + carrusel de stack
    About/       → texto + foto + 3 tarjetas de valores
    Projects/    → stacking cards con efecto scroll (framer-motion)
    Stack/       → grid de iconos agrupados por categoría (devicons CDN)
    Experience/  → timeline vertical CSS
    Contact/     → grid de 4 links + footer
  App.jsx        → monta Lenis, importa todos los componentes
  index.css      → variables CSS globales, reset, fuente Inter
public/
  foto-perfil.jpg
  assets/
    hidrorural-preview.png
    around-preview.png
    around-react-preview.png
```

## Variables CSS globales (`index.css`)

| Variable | Valor |
|---|---|
| `--bg-primary` | `#0a0a0f` |
| `--bg-secondary` | `#0f0f1a` |
| `--bg-card` | `#13131f` |
| `--accent` | `#00b4d8` |
| `--accent-hover` | `#0096c7` |
| `--text-primary` | `#ffffff` |
| `--text-secondary` | `#a0a0b0` |
| `--text-muted` | `#606070` |
| `--border` | `rgba(255,255,255,0.08)` |
| `--radius` | `12px` |
| `--radius-lg` | `20px` |

## Animaciones — patrón estándar

Las secciones sin framer-motion usan `IntersectionObserver` con este patrón:

```js
// Clases CSS de partida:  opacity:0 + transform
// Al entrar en viewport: se añade .is-visible → opacity:1 + transform:none
el.classList.add('is-visible')
```

Las clases disponibles son `.fade-left`, `.fade-right`, `.fade-up` definidas en cada `.css`.

## Navegación entre secciones

Cada tab de la Navbar llama a:
```js
document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
```

IDs de sección: `hero`, `about`, `projects`, `stack`, `experience`, `contact`

## Carrusel del Hero

- Duplica el array de íconos (`[...stackIcons, ...stackIcons]`) para loop continuo
- Usa `margin-right` en cada ítem (NO `gap`) para que `-50%` sea exacto
- Íconos desde `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/`

## Comandos

```bash
npm run dev       # desarrollo local → http://localhost:5173/portfolio-js/
npm run build     # build de producción → /dist
npm run preview   # previsualizar build
npm run deploy    # build + push a gh-pages
```

## Deploy (GitHub Pages)

1. `base` en `vite.config.js`: `/portafolio/` — cambiar al nombre exacto del repo en GitHub antes de hacer deploy
2. URL de deploy: `https://javiermll.github.io/portafolio/` (ajustar según repo)
4. `npm run deploy` hace build y sube la rama `gh-pages` automáticamente

## Imágenes (ya integradas)

| Ruta en código | Archivo real en `public/` |
|---|---|
| `/assets/Foto_perfil.jpeg` | `public/assets/Foto_perfil.jpeg` |
| `/assets/Hidrorural_Captura.png` | `public/assets/Hidrorural_Captura.png` |
| `/assets/Web_Api_full_Captura.png` | `public/assets/Web_Api_full_Captura.png` |
| `/assets/React_Captura.png` | `public/assets/React_Captura.png` |

## Convenciones importantes

- **No usar TypeScript** — el proyecto es JS puro, no agregar `.ts` ni `.tsx`
- **No usar Tailwind** — estilos solo en archivos `.css` por componente
- **No agregar librerías de UI** — framer-motion y lucide-react son las únicas permitidas
- **Íconos de Stack**: siempre desde el CDN de devicons, no descargar localmente
- El `.css` de cada componente solo contiene estilos de ese componente — los helpers de fade (`.fade-up`, `.is-visible`, etc.) están repetidos intencionalmente en cada archivo para mantener independencia
