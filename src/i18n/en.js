/* All site copy in English. Same shape as es.js. */
export default {
  nav: {
    about: 'About',
    stack: 'Stack',
    journey: 'Journey',
    projects: 'Projects',
    caseStudy: 'Case study',
    contact: 'Contact',
    home: 'Go to top',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    main: 'Main',
    skip: 'Skip to content',
    language: 'Language',
  },

  hero: {
    titleA: 'Full-Stack',
    titleB: 'Developer',
    lead:
      'I build web platforms that clients really use: payments, users and admin panels, from the idea to production.',
    photoAlt: 'Portrait of Javier Muñoz',
    pin: 'Javier Muñoz Llanos',
    pillars: [
      { label: 'What I do', text: 'Complete web platforms, from requirements to deployment.' },
      { label: 'With what', text: 'React, Node.js, Python and Django, PostgreSQL. AI applied to processes.' },
      { label: 'Where', text: 'Chile. Remote work for LATAM teams.' },
    ],
  },

  profile: {
    ariaTabs: 'Profile sections',
    tabs: { about: 'About', stack: 'Stack', journey: 'My journey' },
    prev: 'Previous section',
    next: 'Next section',
  },

  about: {
    label: 'About',
    title: ['An engineer’s ', 'mindset', ' applied to development'],
    p1: [
      'I studied ',
      'Industrial Civil Engineering',
      ' and worked in project management and new business at a construction company. There I learned to read a whole problem (processes, costs and people) before proposing a tool.',
    ],
    p2: [
      'Today I am a full-stack developer coding with React, Node and Django. I have put platforms into production for ',
      'real clients',
      ', with payments, two-factor authentication and admin panels, and I use artificial intelligence to automate repetitive tasks.',
    ],
    quote: ['I understand the problem, ', 'then', ' I write the code.'],
    stats: [
      { value: '2', label: 'real clients in production' },
      { value: '245', label: 'automated tests in Alke Wallet' },
      { value: '4', label: 'weeks of hackathon' },
    ],
    photoA: 'Professional portrait of Javier Muñoz',
    photoB: 'Javier Muñoz in a forest',
    pillA: 'at work',
    pillB: 'in the field',
  },

  stack: {
    title: ['My ', 'stack', ''],
    sub: 'The tools I use in my projects, grouped by function.',
    learn: 'learning',
    groups: {
      frontend: 'Frontend',
      backend: 'Backend',
      data: 'Data',
      ai: 'AI and automation',
      cloud: 'Cloud and DevOps',
      tools: 'Tools and quality',
    },
  },

  journey: {
    title: ['My ', 'journey', ''],
    sub: 'From project management to full-stack development. Pick a stage to see the details.',
    experience: 'Experience',
    education: 'Education',
    languagesTitle: 'Languages',
    languages: [
      { name: 'Spanish', level: 'Native', value: 6 },
      { name: 'English', level: 'Upper intermediate (B2)', value: 4 },
    ],
    achievement: 'Achievement',
    roles: [
      {
        role: 'Full-Stack Developer',
        org: 'Colombia Canta y Encanta',
        period: 'May 2026 – Sep 2026',
        tag: 'Part-time · remote',
        points: [
          'Full-stack web platform for a cultural association with React 19, Vite and React Router v7: reusable components, mobile-first responsive design and technical SEO.',
          'Backend in Node.js, Express and PostgreSQL: relational tables, CRUD modules with Zod, MFA/TOTP authentication and CSRF protection, removing by design the risk of session theft through XSS.',
          'Complete enrollment and event booking system with its own admin panel and Mercado Pago Checkout Pro integration for real payments.',
        ],
        win: 'I led end to end a platform that digitizes enrollments, sales and event management for a real cultural organization, with MFA authentication, real payments and its own panel with operational autonomy.',
      },
      {
        role: 'Full-Stack Developer (hackathon)',
        org: 'Coco B Isla',
        period: '2026 · 4 weeks',
        tag: 'Winning project',
        points: [
          'Protected branches on GitHub and fixed a CRLF bug that was blocking the team on Windows.',
          'Migrated from MySQL to MariaDB because of an SSL conflict and got Docker running end to end.',
          'Optimized image loading from WordPress, from over 30 seconds to under 1 second.',
          'Fixed real validation and accessibility bugs through manual testing before each deployment.',
          'Checked 166 translation keys in 3 languages before every production delivery.',
          'Optimized the Apache configuration on Oracle Cloud, from 12 to 3 active processes.',
        ],
      },
      {
        role: 'Full-Stack Developer',
        org: 'Constructora Hidrorural',
        period: 'Jan 2026 – May 2026',
        tag: 'First real client',
        points: [
          'Complete institutional web platform in production, fully responsive.',
          'REST API and a quote endpoint that sends email automatically.',
          'Backend security in a real production environment: helmet, CORS, rate limiting and a honeypot.',
        ],
        win: 'Improved the company’s digital visibility by ~40% with the development.',
      },
      {
        role: 'Management and New Business Engineer',
        org: 'Constructora Hidrorural',
        period: 'Nov 2024 – Dec 2025',
        tag: 'Management',
        points: [
          'Budget control system and automation of internal management processes.',
          'Schedule, resources and planning of project activities, plus recruiting and hiring.',
          'Digital communication strategies that increased visibility on platforms and social media.',
        ],
        win: 'Budget control system implemented and processes automated, with better cost traceability and fewer manual tasks in the area.',
      },
    ],
    studies: [
      { title: 'Full Stack Python Trainee', org: 'Talento Digital / Alkemy', period: '2026' },
      { title: 'Web Developer', org: 'TripleTen Bootcamp', period: '2025 – 2026' },
      { title: 'Industrial Civil Engineering', org: 'Universidad de Concepción, Chile', period: '2023' },
    ],
    certsTitle: 'Certifications',
    certifications: [
      { title: 'Full Stack Python Trainee', detail: 'Talento Digital / Alkemy' },
      { title: 'Claude with the Anthropic API', detail: 'Anthropic · RAG, tool use, streaming, agents, MCP and workflows', href: 'https://verify.skilljar.com/c/acid63snneb5' },
      { title: 'Advanced Excel, Power BI and SQL Server', detail: 'Certification' },
    ],
  },

  projects: {
    title: ['My ', 'projects', ''],
    sub:
      'The first three are the featured ones. Click any of them to see the problem, my role and the technical decisions.',
    cols: { project: 'Project', result: 'Result', status: 'Status' },
    status: { production: 'Production', bootcamp: 'Bootcamp', updating: 'Updating' },
    labels: { problem: 'Problem', role: 'My role', decisions: 'Decisions and results', tech: 'Technologies' },
    links: { visit: 'Visit site', demo: 'View demo', github: 'GitHub', frontend: 'Frontend', backend: 'Backend' },
    detailOf: 'Details of',
    more: 'Details',
    less: 'Close',
    screenshotOf: 'Screenshot of',
    items: {
      'colombia-canta': {
        title: 'Colombia Canta y Encanta',
        kind: 'Real client',
        summary: 'Enrollments, shop and events for a folk music and dance academy.',
        result: 'MFA and real payments with Mercado Pago',
        problem:
          'The association handled enrollments, tickets and sales manually over WhatsApp, with no control of capacity or payments.',
        role:
          'Full-stack developer, end to end: frontend, backend, database, payments and a custom admin panel.',
        decisions: [
          'Capacity and stock are reserved with PostgreSQL locks (advisory locks) to prevent overselling with simultaneous purchases.',
          'The Mercado Pago webhook verifies the signature and that the amount charged matches exactly before confirming anything.',
          'Admin panel with mandatory MFA (TOTP), CSRF protection (no session theft through XSS, by design), rate limits and an audit log.',
          'Relational tables in Supabase with Row Level Security.',
          'Unpaid reservations release their spot on their own after 30 minutes, with no cron job needed.',
        ],
      },
      'coco-b-isla': {
        title: 'Coco B Isla',
        kind: 'Winning hackathon',
        summary: 'Villa booking platform with headless CMS and an AI chatbot, built in a four-week hackathon.',
        result: 'Image loading from 30+ s to under 1 s',
        problem:
          'Coco B Isla and Coco B Wellness needed a single booking platform with manageable content and automated customer service.',
        role:
          'Full-stack developer in a four-week hackathon team, delivering to production on schedule.',
        decisions: [
          'Protected branches on GitHub and fixed a CRLF bug that was blocking the team on Windows.',
          'Migrated from MySQL to MariaDB because of an SSL conflict and got Docker running end to end.',
          'Optimized image loading from WordPress: from more than 30 seconds to under 1 second.',
          'Reduced active Apache processes on Oracle Cloud from 12 to 3.',
          'Fixed real validation and accessibility bugs through manual testing before each deployment.',
          'Checked 166 translation keys in 3 languages before every production delivery.',
        ],
      },
      hidrorural: {
        title: 'Constructora Hidrorural',
        kind: 'First real client',
        summary: 'Institutional website with its own backend and a quote form.',
        result: '~40% more digital visibility',
        problem:
          'Hidrorural depended almost only on public tenders. With no website or formal contact channel, requests arrived informally by phone.',
        role:
          'Full-stack developer and, before that, management engineer at the same company: I understood the business from the inside before coding.',
        decisions: [
          'React 19 with Vite instead of Next.js: an institutional site with no need for server rendering.',
          'Nodemailer instead of a paid service: no cost and direct control over how quotes are sent.',
          'Honeypot and rate limiting instead of reCAPTCHA: less friction and effective against simple bots.',
          'Since May 2026 the form has received about 10 real requests.',
        ],
      },
      'alke-wallet': {
        title: 'Alke Wallet',
        kind: 'Case study',
        summary: 'Digital wallet in Django with roles, atomic transactions and 245 tests.',
        result: '245 automated tests',
        problem:
          'Final project of the data access module: build a wallet with accounts, deposits, withdrawals, transfers and contacts, without allowing inconsistent balances.',
        role: 'Complete development, from the data model to deployment and technical documentation.',
        decisions: [
          'Atomic recording of transactions with a lock on the source account to avoid negative balances.',
          'Everything is private by default and each client only sees their own data; someone else’s record returns 404.',
          'Business rules in the database and in code, also enforced in the admin panel.',
        ],
        note: 'The free server goes to sleep: the demo opens a waiting page and continues on its own.',
      },
      'around-us': {
        title: 'Around The U.S.',
        kind: 'Bootcamp project',
        summary: 'Full-stack social network with sign-up, login and persistent session.',
        result: '10 REST endpoints',
        problem:
          'Final project of the TripleTen bootcamp: a complete application with real authentication and protected routes.',
        role: 'React frontend with Context API and a custom backend in Node and Express.',
        decisions: [
          'JWT instead of server sessions: stateless and standard in REST APIs.',
          'Declarative validation with celebrate and Joi, separated from the controllers.',
          'MongoDB Atlas for its flexible schema and its fit with the JavaScript stack.',
        ],
        note: 'The backend is on Render’s free plan: the first request can take about 30 s.',
      },
      'gestion-tareas': {
        title: 'Task management',
        kind: 'Bootcamp project',
        summary: 'Django application for projects and tasks per user.',
        result: 'Deployed on Render and Neon',
        problem: 'Project of the Django web applications module: manage projects and tasks per user.',
        role: 'Complete development with unit tests and deployment.',
        decisions: [
          'Each user only accesses their own projects and tasks, with isolation tests.',
          'Production database on Neon, with no expiration, and SQLite only for development.',
        ],
        note: 'It is being updated.',
      },
    },
  },

  caseStudy: {
    kicker: 'Case study · Module 7, Full Stack Python',
    title: ['Alke ', 'Wallet', ''],
    sub:
      'A digital wallet where the money never goes out of balance. I chose this project to tell the whole process, from data to deployment.',
    imgAlt: 'Alke Wallet landing page with the login form',
    metricsLabel: 'Impact metrics',
    metrics: [
      { value: '245', label: 'automated tests' },
      { value: '5', label: 'models with 1:1, N:1 and N:M relationships' },
      { value: '12', label: 'feature branches, with a linear history' },
      { value: '1', label: 'reproducible deployment with build.sh and render.yaml' },
    ],
    activity: {
      h: 'The activity',
      p: 'Final project of the data access module in Django applications: a wallet that manages clients, accounts, deposits, withdrawals, transfers and contacts, with access roles and reports.',
    },
    challenge: {
      h: 'Main challenge',
      p: 'Keeping balances always consistent (no negative balances, no access to other people’s data) and taking the application to production on a free service that goes to sleep after 15 minutes without visits.',
    },
    solution: {
      h: 'Proposed solution',
      items: [
        'Atomic recording of transactions with a lock on the source account.',
        'Business rules in the database and in code, also in the admin panel.',
        'Everything private by default; someone else’s record returns 404 so it does not reveal that it exists.',
        'A waiting page on GitHub Pages that checks the server health and continues when it wakes up.',
      ],
    },
    tool: {
      h: 'Technical tool',
      p: 'Django 6.1 with PostgreSQL 17 on Neon, Bootstrap 5 for the interface and Render for deployment, with configuration through environment variables and no secrets in the repository.',
    },
    learnings: {
      h: 'Learnings',
      items: [
        'Comparing the ORM with parameterized raw SQL and checking that they give the same result.',
        'Thinking of business rules as database constraints, not only as validations.',
        'Using tests as a safety net and checking that they catch real failures.',
        'Documenting every stage so someone else can reproduce it.',
      ],
    },
    skills: {
      h: 'Technical skills applied',
      items: [
        'Python',
        'Django (ORM, class-based views, admin, auth)',
        'SQL with raw() and cursors',
        'PostgreSQL',
        'Automated testing',
        'Web security (CSRF, roles)',
        'Branch-based Git',
        'Deployment on Render and Neon',
        'Technical documentation',
      ],
    },
    why: {
      h: 'Why I chose it',
      p: 'It is the project of the course that best integrates the whole module and the one I can back with evidence: tests, technical documentation and a working deployment. It also reflects the profile I am looking for, with business logic and data in the backend.',
    },
    links: { demo: 'View demo', github: 'GitHub', docs: 'Technical documentation', tests: 'Test report' },
    note: 'The free server goes to sleep: the demo opens a waiting page and continues on its own when it wakes up.',
  },

  contact: {
    kicker: 'Available · Chile · remote LATAM',
    title: ['Shall we build ', 'something', ' together?'],
    lead:
      'I am open to full-stack roles and to projects where I can contribute from day one. Tell me what you need and I will reply to your email.',
    copy: 'Built with React and Vite',
    form: {
      title: 'Send me a message',
      name: 'Name',
      email: 'Email',
      topic: 'Reason',
      topics: { job: 'Job offer', project: 'Project or freelance', feedback: 'Feedback' },
      message: 'Message',
      messagePlaceholder: 'Tell me about the offer, the project or your feedback.',
      send: 'Send message',
      sending: 'Sending…',
      privacy: 'I only use your data to reply to you.',
      errors: {
        name: 'Enter your name.',
        email: 'Enter a valid email.',
        message: 'The message must be at least 10 characters long.',
      },
      success: 'Message sent. I will reply to your email as soon as possible.',
      error: 'The message could not be sent. Try again or write to me directly at',
      wait: 'You just sent a message. Please wait a minute before sending another.',
      unavailable: 'The form is not available right now. Write to me directly at',
    },
  },
}
