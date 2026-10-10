/* Stack agrupado por categoría. level: 'prod' = lo uso en producción, 'learn' = en formación.
   Los íconos vienen del CDN de devicon; si alguno no existe, la ficha se muestra solo con texto. */
const BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/'
const icon = (path) => `${BASE}${path}`

export const stackGroups = [
  {
    key: 'frontend',
    items: [
      { name: 'React', icon: icon('react/react-original.svg'), level: 'prod' },
      { name: 'Next.js', icon: icon('nextjs/nextjs-original.svg'), level: 'prod' },
      { name: 'TypeScript', icon: icon('typescript/typescript-original.svg'), level: 'prod' },
      { name: 'JavaScript', icon: icon('javascript/javascript-original.svg'), level: 'prod' },
      { name: 'HTML5', icon: icon('html5/html5-original.svg'), level: 'prod' },
      { name: 'CSS3', icon: icon('css3/css3-original.svg'), level: 'prod' },
      { name: 'Tailwind CSS', icon: icon('tailwindcss/tailwindcss-original.svg'), level: 'prod' },
      { name: 'Bootstrap', icon: icon('bootstrap/bootstrap-original.svg'), level: 'prod' },
    ],
  },
  {
    key: 'backend',
    items: [
      { name: 'Node.js', icon: icon('nodejs/nodejs-original.svg'), level: 'prod' },
      { name: 'Express', icon: icon('express/express-original.svg'), level: 'prod' },
      { name: 'Python', icon: icon('python/python-original.svg'), level: 'prod' },
      { name: 'Django', icon: icon('django/django-plain.svg'), level: 'prod' },
    ],
  },
  {
    key: 'data',
    items: [
      { name: 'PostgreSQL', icon: icon('postgresql/postgresql-original.svg'), level: 'prod' },
      { name: 'MongoDB', icon: icon('mongodb/mongodb-original.svg'), level: 'prod' },
      { name: 'MariaDB', icon: icon('mariadb/mariadb-original.svg'), level: 'prod' },
      { name: 'SQLite', icon: icon('sqlite/sqlite-original.svg'), level: 'prod' },
      { name: 'Supabase', icon: icon('supabase/supabase-original.svg'), level: 'prod' },
      { name: 'Power BI', level: 'prod' },
    ],
  },
  {
    key: 'ai',
    items: [
      { name: 'Claude API', level: 'prod' },
      { name: 'MCP', level: 'prod' },
      { name: 'RAG', level: 'prod' },
      { name: 'Agents', level: 'prod' },
      { name: 'Workflows', level: 'prod' },
    ],
  },
  {
    key: 'cloud',
    items: [
      { name: 'Docker', icon: icon('docker/docker-original.svg'), level: 'prod' },
      { name: 'Vercel', icon: icon('vercel/vercel-original.svg'), level: 'prod' },
      { name: 'Render', icon: icon('render/render-original.svg'), level: 'prod' },
      { name: 'Google Cloud', icon: icon('googlecloud/googlecloud-original.svg'), level: 'prod' },
      { name: 'Oracle Cloud', icon: icon('oracle/oracle-original.svg'), level: 'prod' },
      { name: 'CI/CD', level: 'prod' },
    ],
  },
  {
    key: 'tools',
    items: [
      { name: 'Git', icon: icon('git/git-original.svg'), level: 'prod' },
      { name: 'GitHub', icon: icon('github/github-original.svg'), level: 'prod' },
      { name: 'Figma', icon: icon('figma/figma-original.svg'), level: 'prod' },
      { name: 'Jira', icon: icon('jira/jira-original.svg'), level: 'prod' },
      { name: 'Postman', icon: icon('postman/postman-original.svg'), level: 'prod' },
      { name: 'Jest', icon: icon('jest/jest-plain.svg'), level: 'prod' },
      { name: 'WordPress', icon: icon('wordpress/wordpress-plain.svg'), level: 'prod' },
      { name: 'HubSpot', level: 'prod' },
      { name: 'Claude Code', level: 'prod' },
      { name: 'MS Project', level: 'prod' },
      { name: 'Agile · Scrum', level: 'prod' },
    ],
  },
]
