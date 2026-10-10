/* Datos estructurales de los proyectos (idioma neutro). Los textos viven en src/i18n/es.js y en.js,
   bajo projects.items[id]. Las imágenes siempre salen de public/assets con BASE_URL. */
const img = (name) => `${import.meta.env.BASE_URL}assets/${name}`

export const projects = [
  {
    id: 'colombia-canta',
    year: '2026',
    status: 'production',
    featured: true,
    image: img('proy-colombia-canta.webp'),
    stack: ['React 19', 'Vite', 'React Router v7', 'Node.js', 'Express', 'Supabase (PostgreSQL)', 'Zod', 'Mercado Pago'],
    links: [
      { key: 'visit', href: 'https://colombia-canta-encanta.vercel.app/' },
      { key: 'github', href: 'https://github.com/Javiermll/colombia-canta' },
    ],
  },
  {
    id: 'coco-b-isla',
    year: '2026',
    status: 'production',
    featured: true,
    image: img('proy-coco-b-isla.webp'),
    stack: ['Next.js', 'TypeScript', 'WordPress', 'Docker', 'Oracle Cloud', 'Vercel', 'HubSpot', 'Jira'],
    links: [
      { key: 'visit', href: 'https://coco-b-platform.vercel.app' },
      { key: 'github', href: 'https://github.com/coco-b-team/coco-b-platform' },
    ],
  },
  {
    id: 'hidrorural',
    year: '2025–2026',
    status: 'production',
    featured: true,
    image: img('proy-hidrorural.webp'),
    stack: ['React 19', 'Vite', 'React Router', 'Node.js', 'Express', 'Nodemailer', 'helmet', 'CORS', 'Rate limiting'],
    links: [
      { key: 'visit', href: 'https://www.hidrorural.com/' },
      { key: 'frontend', href: 'https://github.com/Javiermll/contructora-hidrorural-frontend' },
      { key: 'backend', href: 'https://github.com/Javiermll/contructora-hidrorural-backend' },
    ],
  },
  {
    id: 'alke-wallet',
    year: '2026',
    status: 'bootcamp',
    featured: false,
    image: img('proy-alke-wallet.webp'),
    stack: ['Python', 'Django', 'PostgreSQL', 'Bootstrap', 'Render', 'Neon'],
    links: [
      { key: 'demo', href: 'https://javiermll.github.io/alke-wallet-django/' },
      { key: 'github', href: 'https://github.com/Javiermll/alke-wallet-django' },
    ],
  },
  {
    id: 'around-us',
    year: '2025',
    status: 'bootcamp',
    featured: false,
    image: img('proy-around-us.webp'),
    stack: ['React 19', 'Node.js', 'Express', 'MongoDB Atlas', 'JWT', 'bcryptjs', 'helmet', 'Vercel', 'Render'],
    links: [
      { key: 'visit', href: 'https://web-project-api-full-jade.vercel.app/' },
      { key: 'github', href: 'https://github.com/Javiermll/web_project_api_full' },
    ],
  },
  {
    id: 'gestion-tareas',
    year: '2026',
    status: 'updating',
    featured: false,
    image: img('proy-gestion-tareas.webp'),
    stack: ['Python', 'Django', 'PostgreSQL', 'Render', 'Neon'],
    links: [
      { key: 'demo', href: 'https://gestion-tareas-5j0r.onrender.com' },
      { key: 'github', href: 'https://github.com/Javiermll/gestion-proyectos-tareas' },
    ],
  },
]
