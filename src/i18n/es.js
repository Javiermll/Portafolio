/* Todo el texto del sitio en español. Los arreglos de título son [antes, palabra resaltada, después];
   en los párrafos con negrita, los índices impares van en negrita. */
export default {
  nav: {
    about: 'Sobre mí',
    stack: 'Stack',
    journey: 'Recorrido',
    projects: 'Proyectos',
    caseStudy: 'Caso de estudio',
    contact: 'Contacto',
    home: 'Ir al inicio',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    main: 'Principal',
    skip: 'Saltar al contenido',
    language: 'Idioma',
  },

  hero: {
    titleA: 'Full-Stack',
    titleB: 'Developer',
    lead:
      'Construyo plataformas web que los clientes usan de verdad: pagos, usuarios y paneles de administración, de la idea a producción.',
    photoAlt: 'Retrato de Javier Muñoz',
    pin: 'Javier Muñoz Llanos',
    pillars: [
      { label: 'Qué hago', text: 'Plataformas web completas, del requerimiento al despliegue.' },
      { label: 'Con qué', text: 'React, Node.js, Python y Django, PostgreSQL. IA aplicada a procesos.' },
      { label: 'Dónde', text: 'Chile. Trabajo remoto para equipos de LATAM.' },
    ],
  },

  profile: {
    ariaTabs: 'Secciones de perfil',
    tabs: { about: 'Sobre mí', stack: 'Stack', journey: 'Mi recorrido' },
    prev: 'Sección anterior',
    next: 'Sección siguiente',
  },

  about: {
    label: 'Sobre mí',
    title: ['Mentalidad de ', 'ingeniero', ' aplicada al desarrollo'],
    p1: [
      'Estudié ',
      'Ingeniería Civil Industrial',
      ' y trabajé en gestión de proyectos y nuevos negocios en una constructora. Ahí aprendí a leer un problema completo (procesos, costos y personas) antes de proponer una herramienta.',
    ],
    p2: [
      'Hoy soy desarrollador full-stack y codifico con React, Node y Django. He puesto en producción plataformas para ',
      'clientes reales',
      ', con pagos, autenticación de dos factores y paneles de administración, y uso inteligencia artificial para automatizar tareas repetitivas.',
    ],
    quote: ['Entiendo el problema, ', 'después', ' escribo el código.'],
    stats: [
      { value: '2', label: 'clientes reales en producción' },
      { value: '245', label: 'pruebas automatizadas en Alke Wallet' },
      { value: '4', label: 'semanas de hackathon' },
    ],
    photoA: 'Retrato profesional de Javier Muñoz',
    photoB: 'Javier Muñoz en un bosque',
    pillA: 'en el trabajo',
    pillB: 'en el terreno',
  },

  stack: {
    title: ['Mi ', 'stack', ''],
    sub: 'Las herramientas que uso en mis proyectos, agrupadas por función.',
    learn: 'en formación',
    groups: {
      frontend: 'Frontend',
      backend: 'Backend',
      data: 'Datos',
      ai: 'IA y automatización',
      cloud: 'Cloud y DevOps',
      tools: 'Herramientas y calidad',
    },
  },

  journey: {
    title: ['Mi ', 'recorrido', ''],
    sub: 'De la gestión de proyectos al desarrollo full-stack. Elige una etapa para ver el detalle.',
    experience: 'Experiencia',
    education: 'Formación',
    languagesTitle: 'Idiomas',
    languages: [
      { name: 'Español', level: 'Nativo', value: 6 },
      { name: 'Inglés', level: 'Intermedio alto (B2)', value: 4 },
    ],
    achievement: 'Logro',
    roles: [
      {
        role: 'Full-Stack Developer',
        org: 'Colombia Canta y Encanta',
        period: 'May 2026 – Sep 2026',
        tag: 'Part-time · remoto',
        points: [
          'Plataforma web full-stack de una asociación cultural con React 19, Vite y React Router v7: componentes reutilizables, diseño responsivo mobile-first y SEO técnico.',
          'Backend en Node.js, Express y PostgreSQL: tablas relacionales, módulos CRUD con Zod, autenticación MFA/TOTP y protección CSRF, eliminando por diseño el riesgo de robo de sesión vía XSS.',
          'Sistema completo de inscripciones y reservas de eventos con panel administrativo propio e integración de Mercado Pago Checkout Pro para cobros reales.',
        ],
        win: 'Lideré de principio a fin una plataforma que digitaliza inscripciones, ventas y gestión de eventos de una organización cultural real, con autenticación MFA, pagos reales y un panel propio con autonomía operativa.',
      },
      {
        role: 'Full-Stack Developer (hackathon)',
        org: 'Coco B Isla',
        period: '2026 · 4 semanas',
        tag: 'Proyecto ganador',
        points: [
          'Protegí ramas en GitHub y corregí un bug CRLF que bloqueaba al equipo en Windows.',
          'Migré de MySQL a MariaDB por un conflicto de SSL y dejé Docker funcionando de punta a punta.',
          'Optimicé la carga de imágenes desde WordPress, de más de 30 segundos a menos de 1 segundo.',
          'Corregí bugs de validación y accesibilidad con pruebas manuales antes de cada despliegue.',
          'Verifiqué 166 claves de traducción en 3 idiomas antes de cada entrega a producción.',
          'Optimicé la configuración de Apache en Oracle Cloud, de 12 a 3 procesos activos.',
        ],
      },
      {
        role: 'Full-Stack Developer',
        org: 'Constructora Hidrorural',
        period: 'Ene 2026 – May 2026',
        tag: 'Primer cliente real',
        points: [
          'Plataforma web institucional completa en producción, con diseño 100% responsivo.',
          'REST API y endpoint de cotización con envío automático de correo.',
          'Seguridad de backend en un entorno de producción real: helmet, CORS, límite de peticiones y honeypot.',
        ],
        win: 'Mejoré la visibilidad digital de la empresa en ~40% con el desarrollo.',
      },
      {
        role: 'Ingeniero de Gestión y Nuevos Negocios',
        org: 'Constructora Hidrorural',
        period: 'Nov 2024 – Dic 2025',
        tag: 'Gestión',
        points: [
          'Sistema de control presupuestario y automatización de procesos de gestión interna.',
          'Cronograma, recursos y planificación de actividades del proyecto, además de reclutamiento y contratación.',
          'Estrategias de comunicación digital que aumentaron la visibilidad en plataformas y redes sociales.',
        ],
        win: 'Sistema de control presupuestario implementado y procesos automatizados, con mejor trazabilidad de costos y menos tareas manuales en el área.',
      },
    ],
    studies: [
      { title: 'Full Stack Python Trainee', org: 'Talento Digital / Alkemy', period: '2026' },
      { title: 'Desarrollador Web', org: 'TripleTen Bootcamp', period: '2025 – 2026' },
      { title: 'Ingeniería Civil Industrial', org: 'Universidad de Concepción, Chile', period: '2023' },
    ],
    certsTitle: 'Certificaciones',
    certifications: [
      { title: 'Full Stack Python Trainee', detail: 'Talento Digital / Alkemy' },
      { title: 'Claude with the Anthropic API', detail: 'Anthropic · RAG, tool use, streaming, agentes, MCP y workflows', href: 'https://verify.skilljar.com/c/acid63snneb5' },
      { title: 'Excel Avanzado, Power BI y SQL Server', detail: 'Certificación' },
    ],
  },

  projects: {
    title: ['Mis ', 'proyectos', ''],
    sub:
      'Los tres primeros son los destacados. Haz clic en cualquiera para ver el problema, mi rol y las decisiones técnicas.',
    cols: { project: 'Proyecto', result: 'Resultado', status: 'Estado' },
    status: { production: 'Producción', bootcamp: 'Bootcamp', updating: 'En actualización' },
    labels: { problem: 'Problema', role: 'Mi rol', decisions: 'Decisiones y resultados', tech: 'Tecnologías' },
    links: { visit: 'Ver sitio', demo: 'Ver demo', github: 'GitHub', frontend: 'Frontend', backend: 'Backend' },
    detailOf: 'Detalle de',
    more: 'Ver detalle',
    less: 'Cerrar',
    screenshotOf: 'Captura de',
    items: {
      'colombia-canta': {
        title: 'Colombia Canta y Encanta',
        kind: 'Cliente real',
        summary: 'Inscripciones, tienda y eventos de una academia de música y danza folclórica.',
        result: 'MFA y cobros reales con Mercado Pago',
        problem:
          'La asociación gestionaba inscripciones, entradas y ventas de forma manual por WhatsApp, sin control de cupos ni de pagos.',
        role:
          'Desarrollador full-stack, de principio a fin: frontend, backend, base de datos, pagos y panel de administración propio.',
        decisions: [
          'Cupos y stock se reservan con bloqueos de PostgreSQL (advisory locks) para evitar sobreventa con compras simultáneas.',
          'El webhook de Mercado Pago verifica la firma y que el monto cobrado coincida exacto antes de confirmar nada.',
          'Panel de administración con MFA (TOTP) obligatorio, protección CSRF (sin riesgo de robo de sesión vía XSS por diseño), límites de peticiones y registro de auditoría.',
          'Tablas relacionales en Supabase con Row Level Security.',
          'Las reservas sin pagar liberan su cupo solas a los 30 minutos, sin necesidad de un cron.',
        ],
      },
      'coco-b-isla': {
        title: 'Coco B Isla',
        kind: 'Hackathon ganador',
        summary: 'Plataforma de reservas de villas con CMS headless y chatbot con IA, desarrollada en un hackathon de cuatro semanas.',
        result: 'Carga de imágenes de +30 s a menos de 1 s',
        problem:
          'Coco B Isla y Coco B Wellness necesitaban una plataforma única de reservas, con contenido administrable y atención automatizada.',
        role:
          'Desarrollador full-stack en un equipo de hackathon de cuatro semanas, con entrega a producción dentro del plazo.',
        decisions: [
          'Protegí ramas en GitHub y corregí un bug CRLF que bloqueaba al equipo en Windows.',
          'Migré de MySQL a MariaDB por un conflicto de SSL y dejé Docker funcionando de punta a punta.',
          'Optimicé la carga de imágenes desde WordPress: de más de 30 segundos a menos de 1 segundo.',
          'Reduje los procesos activos de Apache en Oracle Cloud de 12 a 3.',
          'Corregí bugs de validación y accesibilidad con pruebas manuales antes de cada despliegue.',
          'Verifiqué 166 claves de traducción en 3 idiomas antes de cada entrega a producción.',
        ],
      },
      hidrorural: {
        title: 'Constructora Hidrorural',
        kind: 'Primer cliente real',
        summary: 'Sitio institucional con backend propio y formulario de cotización.',
        result: '~40% más visibilidad digital',
        problem:
          'Hidrorural dependía casi solo de licitaciones públicas. Sin web ni canal formal de contacto, las solicitudes llegaban por teléfono de manera informal.',
        role:
          'Desarrollador full-stack y, antes, ingeniero de gestión de la misma empresa: entendí el negocio desde adentro antes de programar.',
        decisions: [
          'React 19 con Vite en lugar de Next.js: sitio institucional sin necesidad de renderizado en servidor.',
          'Nodemailer sobre un servicio de pago: sin costo y con control directo del envío de cotizaciones.',
          'Honeypot y límite de peticiones en lugar de reCAPTCHA: menos fricción y efectivo contra bots simples.',
          'Desde mayo de 2026 el formulario ha recibido cerca de 10 solicitudes reales.',
        ],
      },
      'alke-wallet': {
        title: 'Alke Wallet',
        kind: 'Caso de estudio',
        summary: 'Billetera digital en Django con roles, movimientos atómicos y 245 pruebas.',
        result: '245 pruebas automatizadas',
        problem:
          'Proyecto final del módulo de acceso a datos: construir una billetera con cuentas, depósitos, retiros, transferencias y contactos, sin permitir saldos incoherentes.',
        role: 'Desarrollo completo, desde el modelo de datos hasta el despliegue y la documentación técnica.',
        decisions: [
          'Registro atómico de movimientos con bloqueo de la cuenta de origen para evitar saldos negativos.',
          'Todo es privado por defecto y cada cliente solo ve lo suyo; un registro ajeno devuelve 404.',
          'Reglas de negocio en la base de datos y en el código, aplicadas también en el panel de administración.',
        ],
        note: 'El servidor gratuito se duerme: la demo abre una página de espera y entra sola.',
      },
      'around-us': {
        title: 'Around The U.S.',
        kind: 'Proyecto del bootcamp',
        summary: 'Red social full-stack con registro, login y sesión persistente.',
        result: '10 endpoints REST',
        problem:
          'Proyecto final del bootcamp de TripleTen: una aplicación completa con autenticación real y rutas protegidas.',
        role: 'Frontend en React con Context API y backend propio en Node y Express.',
        decisions: [
          'JWT en lugar de sesiones en servidor: sin estado y estándar en APIs REST.',
          'Validación declarativa con celebrate y Joi, separada de los controladores.',
          'MongoDB Atlas por su esquema flexible y su afinidad con el stack de JavaScript.',
        ],
        note: 'El backend está en el plan gratuito de Render: la primera petición puede tardar ~30 s.',
      },
      'gestion-tareas': {
        title: 'Gestión de tareas',
        kind: 'Proyecto del bootcamp',
        summary: 'Aplicación Django de proyectos y tareas por usuario.',
        result: 'Desplegada en Render y Neon',
        problem: 'Proyecto del módulo de aplicaciones web con Django: gestionar proyectos y tareas por usuario.',
        role: 'Desarrollo completo con pruebas unitarias y despliegue.',
        decisions: [
          'Cada usuario solo accede a sus propios proyectos y tareas, con pruebas de aislamiento.',
          'Base de datos de producción en Neon, sin expiración, y SQLite solo para desarrollo.',
        ],
        note: 'Está en proceso de actualización.',
      },
    },
  },

  caseStudy: {
    kicker: 'Caso de estudio · Módulo 7, Full Stack Python',
    title: ['Alke ', 'Wallet', ''],
    sub:
      'Una billetera digital donde el dinero nunca se descuadra. Elegí este proyecto para contar el proceso completo, de los datos al despliegue.',
    imgAlt: 'Portada de Alke Wallet con el formulario de inicio de sesión',
    metricsLabel: 'Métricas de impacto',
    metrics: [
      { value: '245', label: 'pruebas automatizadas' },
      { value: '5', label: 'modelos con relaciones 1:1, N:1 y N:M' },
      { value: '12', label: 'ramas por funcionalidad, con historial lineal' },
      { value: '1', label: 'despliegue reproducible con build.sh y render.yaml' },
    ],
    activity: {
      h: 'La actividad',
      p: 'Proyecto final del módulo de acceso a datos en aplicaciones Django: una billetera que gestiona clientes, cuentas, depósitos, retiros, transferencias y contactos, con roles de acceso y reportes.',
    },
    challenge: {
      h: 'Desafío principal',
      p: 'Que el saldo nunca quede incoherente (sin saldos negativos ni acceso a datos ajenos) y llevar la aplicación a producción en un servicio gratuito que se duerme tras 15 minutos sin visitas.',
    },
    solution: {
      h: 'Solución propuesta',
      items: [
        'Registro atómico de movimientos con bloqueo de la cuenta de origen.',
        'Reglas de negocio en la base de datos y en el código, también en el panel de administración.',
        'Todo privado por defecto; un registro ajeno devuelve 404 para no revelar que existe.',
        'Página de espera en GitHub Pages que consulta la salud del servidor y entra cuando despierta.',
      ],
    },
    tool: {
      h: 'Herramienta técnica',
      p: 'Django 6.1 con PostgreSQL 17 en Neon, Bootstrap 5 en la interfaz y Render para el despliegue, con configuración por variables de entorno y sin secretos en el repositorio.',
    },
    learnings: {
      h: 'Aprendizajes',
      items: [
        'Comparar el ORM con SQL puro parametrizado y verificar que dan el mismo resultado.',
        'Pensar las reglas de negocio como restricciones de la base, no solo como validaciones.',
        'Usar las pruebas como red de seguridad y comprobar que detectan fallos reales.',
        'Documentar cada etapa para que otra persona pueda reproducirla.',
      ],
    },
    skills: {
      h: 'Habilidades técnicas aplicadas',
      items: [
        'Python',
        'Django (ORM, vistas basadas en clases, admin, auth)',
        'SQL con raw() y cursores',
        'PostgreSQL',
        'Pruebas automatizadas',
        'Seguridad web (CSRF, roles)',
        'Git por ramas',
        'Despliegue en Render y Neon',
        'Documentación técnica',
      ],
    },
    why: {
      h: 'Por qué lo elegí',
      p: 'Es el proyecto del curso que mejor integra todo el módulo y el que puedo respaldar con evidencia: pruebas, documentación técnica y un despliegue funcionando. También refleja el perfil que busco, con lógica de negocio y datos en el backend.',
    },
    links: { demo: 'Ver demo', github: 'GitHub', docs: 'Documentación técnica', tests: 'Informe de pruebas' },
    note: 'El servidor gratuito se duerme: la demo abre una página de espera y entra sola cuando despierta.',
  },

  contact: {
    kicker: 'Disponible · Chile · remoto LATAM',
    title: ['¿Hacemos ', 'algo', ' juntos?'],
    lead:
      'Estoy abierto a roles full-stack y a proyectos donde pueda aportar desde el primer día. Cuéntame qué necesitas y te respondo a tu correo.',
    copy: 'Hecho con React y Vite',
    form: {
      title: 'Envíame un mensaje',
      name: 'Nombre',
      email: 'Correo',
      topic: 'Motivo',
      topics: { job: 'Oferta laboral', project: 'Proyecto o freelance', feedback: 'Comentario' },
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntame sobre la oferta, el proyecto o tu comentario.',
      send: 'Enviar mensaje',
      sending: 'Enviando…',
      privacy: 'Uso tus datos solo para responderte.',
      errors: {
        name: 'Escribe tu nombre.',
        email: 'Escribe un correo válido.',
        message: 'El mensaje debe tener al menos 10 caracteres.',
      },
      success: 'Mensaje enviado. Te responderé a tu correo lo antes posible.',
      error: 'No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme directo a',
      wait: 'Ya enviaste un mensaje hace un momento. Espera un minuto antes de enviar otro.',
      unavailable: 'El formulario no está disponible por ahora. Escríbeme directo a',
    },
  },
}
