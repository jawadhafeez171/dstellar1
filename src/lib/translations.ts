// Dstellar internationalization translations

export const TRANSLATIONS = {
  en: {
    // UI strings
    inside_dstellar: "Inside Dstellar",
    watch_reel: "90 SEC · WATCH",
    intro_cap: "Dstellar · 90-sec intro reel",
    explore_services: "Explore our services →",
    book_assessment: "Book an assessment",
    certified: "Certified",
    partnered: "Partnered",
    industries_served: "industries served",
    dstellar_products: "DSTELLAR products",
    sap_modules: "SAP modules delivered",
    support_coverage: "support coverage",
    playbook_cta: "Open {name} playbook →",
    read_playbook: "Read the playbook →",
    solutions: "solutions",
    ind_tag_s4: "SAP S/4HANA",
    ind_tag_addons: "Industry add-ons",
    ind_tag_ams: "AMS",
    ind_tag_analytics: "Analytics",
    active: "Active",
    why_dstellar: "Why Dstellar",
    proof_numbers: "Proof, in the numbers.",
    advantage_title: "Let's make SAP\nyour advantage.",
    advantage_sub: "60-minute assessment. No slides. Straight answers from a senior SAP architect.",
    book_call: "Book a call →",
    see_case_studies: "See case studies",
    foot_cta: "Let's build what's next in SAP.",
    start_conversation: "Start a conversation →",
    locations: "Toronto · Madrid · Singapore · Austin",
    copyright: "© 2026 Dstellar Software Solutions",
    footer_bottom_links: "Privacy · Terms · Security · Compliance",
    nav_title_industries: "Industries",
    nav_title_sap_consulting: "SAP Consulting",
    nav_title_services: "Services",
    nav_title_company: "Company",
    company_items: ["Who We Are", "Leadership", "Careers", "Partners", "Community", "Investor Relations", "Press"],
    select_region: "Select Region",
    login: "Login",

    // Section Titles & Eyebrows
    eyebrow_industries: "Industries · 18 verticals",
    title_industries: "Deep in the verticals that matter to you.",
    eyebrow_sap: "SAP Consulting",
    title_sap: "End-to-end SAP — no hand-offs, no excuses.",
    eyebrow_products: "Products",
    title_products: "The DSTELLAR suite — software we built, ship, and stand behind.",

    // Static stats in BigStats
    stat_years: "years serving enterprises",
    stat_industries: "industries, one partner",
    stat_modules: "SAP modules delivered",
    stat_support: "24×7 AMS support coverage",

    // Dynamic Lists from data.ts
    nav: [
      { label: 'Industries', children: ['Automotive','Consumer Products','Electronic & High Tech','Manufacturing & Industrial','Energy & Utilities','Life Sciences & Healthcare','Government & Public Sector','Capital Markets','Travel & Hospitality','Construction'] },
      { label: 'Products', children: ['Custom Software Development','DSTELLAR ERP','DSTELLAR E-Commerce','DSTELLAR Healthcare Suite','DSTELLAR Logistics & Warehouse','DSTELLAR Sales & Accounting','Business Intelligence & Analytics','Mobile & Web Applications'] },
      { label: 'SAP Consulting', children: ['S/4HANA Implementations','Finance & Controlling (FICO)','Sales & Logistics (SD · MM · WM)','Production & Planning (PP)','SuccessFactors (HR)','ABAP & Fiori Custom Development','SAP Integration & API Suite','Ariba & Supply Chain Solutions'] },
      { label: 'Services & Support', children: ['Artificial Intelligence & ML','Cloud Migration & DevSecOps','Cybersecurity & Compliance','Digital Transformation','Technology Advisory Services','Premium Support & Managed AMS','Dstellar Help Portal'] },
      { label: 'Trainings', children: ['Dstellar Learning Hub','Certified SAP Courses','Dstellar Certification Prep','Education Partner Program','Free openDstellar Training'] },
      { label: 'Partners', children: ['Find a Partner','Strategic Partners','Become a Partner','Certified Solutions Directory','Outsourcing Partners'] },
      { label: 'Careers', children: ['Job Search & Openings','Students & Graduates','Your Career Path','Why Join Dstellar'] },
      { label: 'Community', children: ['Community Forum','Expert Blogs','Q&A and Forums','Events & Meetups','Resource Library'] },
      { label: 'Discover Dstellar', children: ['Who We Are','History','Leadership & Governance','Sustainability & CSR','Innovation & Research','Investor Relations','Sports Sponsorships'] },
      { label: 'Try & Buy', children: ['Free Software Trials','Training & Enablement Catalog','Dstellar Solutions Store'] }
    ],

    industries: [
      { name: 'Automotive', tag: 'Mfg', desc: 'Connected vehicles, dealer networks, plant ops.' },
      { name: 'Consumer Products', tag: 'CPG', desc: 'Demand sensing, trade promo, omni-channel.' },
      { name: 'Electronic & High Tech', tag: 'HT', desc: 'Fast product cycles, global supply chains.' },
      { name: 'Government & Public Sector', tag: 'Gov', desc: 'Funds mgmt, procurement, citizen services.' },
      { name: 'Media & Entertainment', tag: 'M&E', desc: 'Rights, royalties, content monetization.' },
      { name: 'Telecommunications', tag: 'Tel', desc: 'Billing, OSS/BSS, subscriber analytics.' },
      { name: 'Distribution & Wholesale', tag: 'D&W', desc: 'Order-to-cash at scale, warehouse velocity.' },
      { name: 'Energy & Utilities', tag: 'E&U', desc: 'SAP IS-U, asset mgmt, outage ops.' },
      { name: 'Manufacturing & Industrial', tag: 'Ind', desc: 'Discrete & process manufacturing, PM.' },
      { name: 'Retail', tag: 'Rtl', desc: 'Unified commerce, store ops, inventory.' },
      { name: 'Hotel Management', tag: 'Hos', desc: 'Reservations, revenue mgmt, guest ops.' },
      { name: 'Capital Markets', tag: 'Fin', desc: 'Trade lifecycle, risk, regulatory reporting.' },
      { name: 'Life Sciences & Healthcare', tag: 'LSH', desc: 'GxP, QM, batch, regulatory reporting.' },
      { name: 'Information Services', tag: 'IS',  desc: 'Data products, subscription billing.' },
      { name: 'Public Services', tag: 'PS',  desc: 'Grant mgmt, SLAs, case management.' },
      { name: 'Travel, Transport & Hospitality', tag: 'TTH', desc: 'Fleet, loyalty, booking operations.' },
      { name: 'Construction', tag: 'Con', desc: 'Project costing, equipment, subcontractor ops.' },
      { name: 'Education', tag: 'Edu', desc: 'Student lifecycle, admissions, LMS integration.' }
    ],

    products: [
      { group: 'Build', items: ['Software Development','Website Development','iOS / macOS Apps','Android Applications','QA & Testing','Database Management'] },
      { group: 'DSTELLAR Suite', items: ['DSTELLAR ERP','DSTELLAR Hospital Management','DSTELLAR Clinic Management','DSTELLAR Doctor Software','DSTELLAR Dental Software','DSTELLAR Pharmacy Management','DSTELLAR E-Commerce','DSTELLAR Hospitality Management','DSTELLAR Ticketing Tool'] },
      { group: 'Business Packages', items: ['Logistic Package','Sales Package','Accounting Package','Inventory Package','Payroll Package','Business Object','Educational Software'] }
    ],

    sapConsulting: [
      { t: 'SAP Implementation & Support', d: 'ECC · S/4HANA · SAP Cloud — end-to-end delivery.' },
      { t: 'Finance & Controlling (FICO)', d: 'Financial accounting, controlling, central finance.' },
      { t: 'Sales & Distribution (SD)', d: 'Order management, pricing, billing, rebates.' },
      { t: 'Material Management (MM)', d: 'Procurement, inventory, vendor evaluation.' },
      { t: 'Production Planning (PP)', d: 'Discrete, process, and repetitive manufacturing.' },
      { t: 'Human Resources (HR)', d: 'Personnel admin, time, payroll, SuccessFactors.' },
      { t: 'Logistics Execution (LE)', d: 'Shipping, warehousing, transportation.' },
      { t: 'Project System (PS)', d: 'Project lifecycle, WBS, cost & resource planning.' },
      { t: 'ABAP Development', d: 'Custom logic, reports, enhancements, Fiori apps.' },
      { t: 'Third-Party Integration', d: 'Non-SAP systems, middleware, APIs, iDocs.' },
      { t: 'India GST Automations', d: 'Compliant filing to Govt. portal, end-to-end.' },
      { t: 'SAP HANA / Cloud', d: 'Platform modernization and migration.' }
    ],

    servicesSupport: [
      { t: 'Artificial Intelligence', d: 'Joule, embedded ML, document intelligence.' },
      { t: 'Cloud Services', d: 'Migration, managed cloud, cost optimization.' },
      { t: 'Cybersecurity', d: 'GRC, SOD, identity, vulnerability management.' },
      { t: 'Digital Services', d: 'CX, commerce, Fiori, mobile experiences.' },
      { t: 'Sustainability', d: 'Green Ledger, emissions, circular supply chain.' },
      { t: 'Transformation & Innovation', d: 'Business-led reinvention on clean core.' },
      { t: 'Advisory', d: 'Roadmaps, audits, fractional architects.' },
      { t: 'Premium Engagements', d: 'High-touch programs for critical systems.' }
    ],

    promos: {
      'Industries': { title: '19+ Verticals', desc: 'Deep industry expertise across the globe.', btn: 'Explore All' },
      'Products': { title: 'DSTELLAR Suite', desc: 'Explore our 22+ custom enterprise products.', btn: 'View Suite' },
      'SAP Consulting': { title: 'SAP Experts', desc: 'S/4HANA migrations, FICO, and end-to-end support.', btn: 'Book Assessment' },
      'Services & Support': { title: '24/7 Support', desc: 'Premium AMS, AI, and cloud elasticity services.', btn: 'Get Support' },
      'Trainings': { title: 'Learning Hub', desc: 'Master SAP with Dstellar certified courses.', btn: 'View Courses' },
      'Partners': { title: 'Partner Network', desc: 'Join the global Dstellar partner ecosystem.', btn: 'Become a Partner' },
      'Careers': { title: 'Join Dstellar', desc: 'Build the future of enterprise software.', btn: 'View Openings' },
      'Community': { title: 'Dstellar Network', desc: 'Connect with 10k+ SAP experts globally.', btn: 'Join Forum' },
      'Discover Dstellar': { title: 'Our Story', desc: 'Discover the Dstellar way and our global impact.', btn: 'Learn More' }
    },

    sap_feats: [
      'Fit-Gap Analysis in 6 weeks',
      'Readiness & downtime planning',
      'Clean-core custom code refactor',
      'Cutover rehearsals (×3)',
      'AMS handoff with runbooks',
      'Continuous improvement roadmap'
    ]
  },
  es: {
    // UI strings
    inside_dstellar: "Dentro de Dstellar",
    watch_reel: "90 SEG · VER REEL",
    intro_cap: "Dstellar · Reel de introducción de 90 segundos",
    explore_services: "Explore nuestros servicios →",
    book_assessment: "Reserve una evaluación",
    certified: "Certificado",
    partnered: "Asociado",
    industries_served: "sectores atendidos",
    dstellar_products: "productos DSTELLAR",
    sap_modules: "módulos SAP entregados",
    support_coverage: "cobertura de soporte",
    playbook_cta: "Abrir guía de {name} →",
    read_playbook: "Leer la guía estratégica →",
    solutions: "soluciones",
    ind_tag_s4: "SAP S/4HANA",
    ind_tag_addons: "Complementos industriales",
    ind_tag_ams: "AMS",
    ind_tag_analytics: "Analítica",
    active: "Activo",
    why_dstellar: "Por qué Dstellar",
    proof_numbers: "Prueba, en los números.",
    advantage_title: "Hagamos de SAP\nsu ventaja competitiva.",
    advantage_sub: "Evaluación de 60 minutos. Sin diapositivas. Respuestas claras de un arquitecto SAP senior.",
    book_call: "Agendar llamada →",
    see_case_studies: "Ver casos de éxito",
    foot_cta: "Construyamos el futuro de SAP.",
    start_conversation: "Iniciar conversación →",
    locations: "Toronto · Madrid · Singapur · Austin",
    copyright: "© 2026 Dstellar Software Solutions",
    footer_bottom_links: "Privacidad · Términos · Seguridad · Cumplimiento",
    nav_title_industries: "Sectores",
    nav_title_sap_consulting: "Consultoría SAP",
    nav_title_services: "Servicios",
    nav_title_company: "Compañía",
    company_items: ["Quiénes Somos", "Liderazgo", "Carreras", "Socios", "Comunidad", "Relaciones con Inversores", "Prensa"],
    select_region: "Seleccionar Región",
    login: "Iniciar Sesión",

    // Section Titles & Eyebrows
    eyebrow_industries: "Sectores · 18 verticales",
    title_industries: "Especialización en los sectores que le importan.",
    eyebrow_sap: "Consultoría SAP",
    title_sap: "SAP de extremo a extremo: sin intermediarios, sin excusas.",
    eyebrow_products: "Productos",
    title_products: "La suite DSTELLAR: software que creamos, distribuimos y respaldamos.",

    // Static stats in BigStats
    stat_years: "años sirviendo a empresas",
    stat_industries: "sectores, un solo socio",
    stat_modules: "módulos SAP entregados",
    stat_support: "cobertura de soporte AMS 24×7",

    // Dynamic Lists from data.ts
    nav: [
      { label: 'Sectores', children: ['Automotriz','Productos de Consumo','Electrónica y Alta Tecnología','Manufactura e Industrial','Energía y Servicios Públicos','Ciencias de la Vida y Salud','Gobierno y Sector Público','Mercados de Capitales','Viajes y Hospitalidad','Construcción'] },
      { label: 'Productos', children: ['Desarrollo de Software a Medida','ERP DSTELLAR','E-Commerce DSTELLAR','Suite de Salud DSTELLAR','Logística y Almacenes DSTELLAR','Ventas y Contabilidad DSTELLAR','Inteligencia de Negocios y Analítica','Aplicaciones Móviles y Web'] },
      { label: 'Consultoría SAP', children: ['Implementaciones S/4HANA','Finanzas y Control de Gestión (FICO)','Ventas y Logística (SD · MM · WM)','Planificación de la Producción (PP)','SuccessFactors (RRHH)','Desarrollo Personalizado ABAP y Fiori','Suite de Integración y API SAP','Soluciones de Cadena de Suministro y Ariba'] },
      { label: 'Servicios y Soporte', children: ['Inteligencia Artificial y ML','Migración Cloud y DevSecOps','Ciberseguridad y Cumplimiento','Transformación Digital','Servicios de Asesoría Tecnológica','Soporte Premium y AMS Gestionado','Portal de Ayuda Dstellar'] },
      { label: 'Formaciones', children: ['Dstellar Learning Hub','Cursos SAP Certificados','Preparación de Certificaciones Dstellar','Programa de Socios Educativos','Formación Gratuita openDstellar'] },
      { label: 'Socios', children: ['Buscar un Socio','Socios Estratégicos','Convertirse en Socio','Directorio de Soluciones Certificadas','Socios de Outsourcing'] },
      { label: 'Carreras', children: ['Búsqueda de Empleo y Vacantes','Estudiantes y Graduados','Su Trayectoria Profesional','Por qué Unirse a Dstellar'] },
      { label: 'Comunidad', children: ['Foro de la Comunidad','Blogs de Expertos','Preguntas y Respuestas','Eventos y Reuniones','Biblioteca de Recursos'] },
      { label: 'Descubrir Dstellar', children: ['Quiénes Somos','Historia','Liderazgo y Gobernanza','Sostenibilidad y RSC','Innovación e Investigación','Relaciones con Inversores','Patrocinios Deportivos'] },
      { label: 'Probar y Comprar', children: ['Pruebas de Software Gratuitas','Catálogo de Capacitación y Habilitación','Tienda de Soluciones Dstellar'] }
    ],

    industries: [
      { name: 'Automotriz', tag: 'Mfg', desc: 'Vehículos conectados, redes de concesionarios, operaciones de planta.' },
      { name: 'Productos de Consumo', tag: 'CPG', desc: 'Detección de demanda, promociones comerciales, omnicanalidad.' },
      { name: 'Electrónica y Alta Tecnología', tag: 'HT', desc: 'Ciclos rápidos de producto, cadenas de suministro globales.' },
      { name: 'Gobierno y Sector Público', tag: 'Gov', desc: 'Gestión de fondos, adquisiciones, servicios al ciudadano.' },
      { name: 'Medios y Entretenimiento', tag: 'M&E', desc: 'Derechos, regalías, monetización de contenidos.' },
      { name: 'Telecomunicaciones', tag: 'Tel', desc: 'Facturación, OSS/BSS, analítica de suscriptores.' },
      { name: 'Distribución y Venta al por Mayor', tag: 'D&W', desc: 'Order-to-cash a escala, velocidad de almacenamiento.' },
      { name: 'Energía y Servicios Públicos', tag: 'E&U', desc: 'SAP IS-U, gestión de activos, operaciones ante cortes de servicio.' },
      { name: 'Manufactura e Industrial', tag: 'Ind', desc: 'Manufactura discreta y de procesos, mantenimiento de planta (PM).' },
      { name: 'Comercio Minorista (Retail)', tag: 'Rtl', desc: 'Comercio unificado, operaciones de tienda, inventario.' },
      { name: 'Gestión Hotelera', tag: 'Hos', desc: 'Reservas, gestión de ingresos (revenue management), experiencia del huésped.' },
      { name: 'Mercados de Capitales', tag: 'Fin', desc: 'Ciclo de vida de transacciones, riesgo, informes regulatorios.' },
      { name: 'Ciencias de la Vida y Salud', tag: 'LSH', desc: 'Cumplimiento GxP, gestión de calidad, lotes, informes regulatorios.' },
      { name: 'Servicios de Información', tag: 'IS',  desc: 'Productos de datos, facturación por suscripción.' },
      { name: 'Servicios Públicos', tag: 'PS',  desc: 'Gestión de subvenciones, acuerdos de nivel de servicio (SLAs), gestión de casos.' },
      { name: 'Viajes, Transporte y Hospitalidad', tag: 'TTH', desc: 'Flotas, programas de fidelidad, operaciones de reserva.' },
      { name: 'Construcción', tag: 'Con', desc: 'Costos de proyectos, maquinaria, gestión de subcontratistas.' },
      { name: 'Educación', tag: 'Edu', desc: 'Ciclo de vida del estudiante, admisiones, integración de LMS.' }
    ],

    products: [
      { group: 'Desarrollo', items: ['Desarrollo de Software','Desarrollo de Sitios Web','Aplicaciones iOS / macOS','Aplicaciones Android','Pruebas y QA','Gestión de Bases de Datos'] },
      { group: 'Suite DSTELLAR', items: ['ERP DSTELLAR','Gestión Hospitalaria DSTELLAR','Gestión de Clínicas DSTELLAR','Software Médico DSTELLAR','Software Dental DSTELLAR','Gestión de Farmacias DSTELLAR','E-Commerce DSTELLAR','Gestión de Hostelería DSTELLAR','Herramienta de Soporte DSTELLAR'] },
      { group: 'Paquetes de Negocio', items: ['Paquete de Logística','Paquete de Ventas','Paquete de Contabilidad','Paquete de Inventario','Paquete de Nóminas','Business Object','Software Educativo'] }
    ],

    sapConsulting: [
      { t: 'Implementación y Soporte SAP', d: 'ECC · S/4HANA · SAP Cloud — entrega integral de extremo a extremo.' },
      { t: 'Finanzas y Control de Gestión (FICO)', d: 'Contabilidad financiera, control de costos, finanzas centrales.' },
      { t: 'Ventas y Distribución (SD)', d: 'Gestión de pedidos, precios, facturación, rappels.' },
      { t: 'Gestión de Materiales (MM)', d: 'Aprovisionamiento, inventario, evaluación de proveedores.' },
      { t: 'Planificación de la Producción (PP)', d: 'Fabricación discreta, por procesos y repetitiva.' },
      { t: 'Recursos Humanos (HR)', d: 'Administración de personal, tiempos, nómina, SuccessFactors.' },
      { t: 'Ejecución de Logística (LE)', d: 'Expediciones, almacenamiento, transporte.' },
      { t: 'Sistemas de Proyectos (PS)', d: 'Ciclo de vida del proyecto, PEP, planificación de costos y recursos.' },
      { t: 'Desarrollo ABAP', d: 'Lógica a medida, informes, ampliaciones, aplicaciones Fiori.' },
      { t: 'Integración con Terceros', d: 'Sistemas no SAP, middleware, APIs, iDocs.' },
      { t: 'Automatizaciones de Impuestos', d: 'Declaración y cumplimiento fiscal local y de aduanas.' },
      { t: 'SAP HANA / Cloud', d: 'Modernización y migración de plataformas tecnológicas.' }
    ],

    servicesSupport: [
      { t: 'Inteligencia Artificielle', d: 'Joule, IA integrada, procesamiento inteligente de documentos.' },
      { t: 'Servicios en la Nube', d: 'Migración, nube gestionada, optimización de costos.' },
      { t: 'Ciberseguridad', d: 'Sistemas GRC, segregación de funciones (SOD), identidad, vulnerabilidades.' },
      { t: 'Servicios Digitales', d: 'Experiencia del cliente (CX), comercio, Fiori, experiencias móviles.' },
      { t: 'Sostenibilidad', d: 'Contabilidad verde (Green Ledger), emisiones, cadena de suministro circular.' },
      { t: 'Transformación e Innovación', d: 'Reinvención empresarial basada en un núcleo limpio (clean core).' },
      { t: 'Asesoría', d: 'Hojas de ruta, auditorías de sistemas, arquitectos fraccionales.' },
      { t: 'Soporte de Alta Prioridad', d: 'Programas de alto nivel para sistemas y operaciones críticas.' }
    ],

    promos: {
      'Sectores': { title: '19+ Verticales', desc: 'Profunda experiencia sectorial a nivel global.', btn: 'Explorar Todos' },
      'Productos': { title: 'Suite DSTELLAR', desc: 'Explore nuestros más de 22 productos empresariales a medida.', btn: 'Ver Suite' },
      'Consultoría SAP': { title: 'Expertos SAP', desc: 'Migraciones S/4HANA, FICO y soporte integral.', btn: 'Reservar Evaluación' },
      'Servicios y Soporte': { title: 'Soporte 24/7', desc: 'Servicios premium de AMS, IA y elasticidad cloud.', btn: 'Obtener Soporte' },
      'Formaciones': { title: 'Centro de Aprendizaje', desc: 'Domine SAP con cursos certificados por Dstellar.', btn: 'Ver Cursos' },
      'Socios': { title: 'Red de Socios', desc: 'Únase al ecosistema global de socios de Dstellar.', btn: 'Ser Socio' },
      'Carreras': { title: 'Únete a Dstellar', desc: 'Construye el futuro del software empresarial.', btn: 'Ver Vacantes' },
      'Comunidad': { title: 'Red Dstellar', desc: 'Conéctese con más de 10,000 expertos en SAP a nivel mundial.', btn: 'Unirse al Foro' },
      'Descubrir Dstellar': { title: 'Nuestra Historia', desc: 'Descubra la metodología de Dstellar y nuestro impacto global.', btn: 'Saber Más' }
    },

    sap_feats: [
      'Análisis de brechas (Fit-Gap) en 6 semanas',
      'Planificación de preparación y tiempo de inactividad',
      'Refactorización de código personalizado con núcleo limpio (clean-core)',
      'Ensayos generales de puesta en producción (×3)',
      'Traspaso de AMS con manuales de operación detallados',
      'Hoja de ruta para la mejora continua'
    ]
  },
  zh: {
    // UI strings
    inside_dstellar: "走进 Dstellar",
    watch_reel: "90 秒 · 播放演示视频",
    intro_cap: "Dstellar · 90秒企业宣传片",
    explore_services: "探索我们的服务 →",
    book_assessment: "预约评估服务",
    certified: "专业认证",
    partnered: "合作伙伴",
    industries_served: "服务行业",
    dstellar_products: "DSTELLAR 产品",
    sap_modules: "交付的 SAP 模块",
    support_coverage: "支持覆盖范围",
    playbook_cta: "打开 {name} 行业白皮书 →",
    read_playbook: "阅读执行指南 →",
    solutions: "个解决方案",
    ind_tag_s4: "SAP S/4HANA",
    ind_tag_addons: "行业插件",
    ind_tag_ams: "应用程序管理服务 (AMS)",
    ind_tag_analytics: "数据分析",
    active: "当前激活",
    why_dstellar: "为什么选择 Dstellar",
    proof_numbers: "用数字说话，实力见证。",
    advantage_title: "让 SAP\n成为您的核心优势。",
    advantage_sub: "60分钟快速评估。无冗长PPT。来自资深 SAP 架构师的直接技术解答。",
    book_call: "预约电话会议 →",
    see_case_studies: "查看客户案例",
    foot_cta: "携手共建 SAP 的未来。",
    start_conversation: "开始与我们交流 →",
    locations: "多伦多 · 马德里 · 新加坡 · 奥斯汀",
    copyright: "© 2026 Dstellar Software Solutions. 版权所有",
    footer_bottom_links: "隐私政策 · 服务条款 · 安全合规 · 行业标准",
    nav_title_industries: "服务行业",
    nav_title_sap_consulting: "SAP 咨询服务",
    nav_title_services: "服务领域",
    nav_title_company: "关于公司",
    company_items: ["公司简介", "领导团队", "招贤纳士", "合作伙伴", "技术社区", "投资者关系", "新闻中心"],
    select_region: "选择地区",
    login: "登录系统",

    // Section Titles & Eyebrows
    eyebrow_industries: "服务行业 · 18大垂直领域",
    title_industries: "深耕最贴合您业务的垂直行业。",
    eyebrow_sap: "SAP 咨询服务",
    title_sap: "一站式 SAP 服务——不推诿，只为结果负责。",
    eyebrow_products: "企业级产品",
    title_products: "DSTELLAR 产品系列——软件我们研制、交付并全程支持。",

    // Static stats in BigStats
    stat_years: "深耕企业服务领域年数",
    stat_industries: "服务行业，唯一合作伙伴",
    stat_modules: "交付的 SAP 模块数量",
    stat_support: "24×7 全天候 AMS 运维服务",

    // Dynamic Lists from data.ts
    nav: [
      { label: '服务行业', children: ['汽车制造','消费品行业','电子与高科技','装备制造与工业','能源与公用事业','生命科学与医疗健康','政府与公共部门','资本市场','旅游与酒店管理','建筑与工程'] },
      { label: '产品中心', children: ['定制软件开发','DSTELLAR ERP 系统','DSTELLAR 电子商务系统','DSTELLAR 医疗健康套件','DSTELLAR 物流与仓储系统','DSTELLAR 销售与财务系统','商业智能与数据分析','移动与 Web 应用程序'] },
      { label: 'SAP 咨询服务', children: ['S/4HANA 系统实施','财务与成本管理 (FICO)','销售与物流管理 (SD · MM · WM)','生产与计划管理 (PP)','SuccessFactors 人力资源系统','ABAP 与 Fiori 定制化开发','SAP 集成与 API 套件','Ariba 采购与供应链解决方案'] },
      { label: '服务与支持', children: ['人工智能与机器学习','云迁移与 DevSecOps','网络安全与合规审计','企业数字化转型','IT 战略咨询服务','尊享支持与托管运维 (AMS)','Dstellar 帮助中心'] },
      { label: '培训中心', children: ['Dstellar 学习中心','SAP 官方认证课程','Dstellar 考试认证辅导','教育合作伙伴计划','免费开放课程 openDstellar'] },
      { label: '合作伙伴', children: ['寻找合作伙伴','战略合作伙伴','成为合作伙伴','认证解决方案目录','外包合作伙伴'] },
      { label: '加入我们', children: ['职位搜索与招聘','校园招聘与实习生','您的职业发展路径','为什么选择 Dstellar'] },
      { label: '互动社区', children: ['社区论坛','专家博客','问答社区','活动与线下聚会','资源库'] },
      { label: '发现 Dstellar', children: ['关于我们','发展历史','领导与公司治理','可持续发展与 CSR','创新与前沿研究','投资者关系','体育赞助'] },
      { label: '试用与购买', children: ['免费软件试用','培训与赋能产品目录','Dstellar 解决方案商城'] }
    ],

    industries: [
      { name: '汽车制造', tag: 'Mfg', desc: '智能网联汽车、经销商网络优化、智能工厂运维。' },
      { name: '消费品行业', tag: 'CPG', desc: '需求感知、渠道促销管理、全渠道零售。' },
      { name: '电子与高科技', tag: 'HT', desc: '支持快速产品迭代的全球敏捷供应链。' },
      { name: '政府与公共部门', tag: 'Gov', desc: '财政资金管理、公共采购、数字化市民服务。' },
      { name: '媒体与娱乐', tag: 'M&E', desc: '数字版权、版税结算、内容变现与精细化运营。' },
      { name: '网络通信', tag: 'Tel', desc: '电信计费、OSS/BSS 系统、订户行为分析。' },
      { name: '分销与批发', tag: 'D&W', desc: '超大规模订单履约、仓储周转效率优化。' },
      { name: '能源与公用事业', tag: 'E&U', desc: 'SAP IS-U 实施、核心资产保护、停电应急响应系统。' },
      { name: '装备制造与工业', tag: 'Ind', desc: '离散和流程制造过程控制，工厂设备维护 (PM)。' },
      { name: '零售商贸', tag: 'Rtl', desc: '一体化统一零售渠道、店铺精细化运营、实时库存。' },
      { name: '酒店管理', tag: 'Hos', desc: '智能预订、客房动态收益管理、高品质宾客体验。' },
      { name: '资本市场', tag: 'Fin', desc: '证券交易全生命周期管理、风控合规、监管合规报送。' },
      { name: '生命科学与医疗健康', tag: 'LSH', desc: 'GxP 合规规范、全面质量管理 (QM)、批次追溯、监管报告。' },
      { name: '信息服务', tag: 'IS',  desc: '数据增值服务产品化、订阅式计费模型支持。' },
      { name: '公共服务', tag: 'PS',  desc: '政府拨款管理、SLA 绩效考核、工作流个案管理。' },
      { name: '旅游交通与物流', tag: 'TTH', desc: '车队管理、会员忠诚度计划、综合票务预订业务。' },
      { name: '建筑与工程', tag: 'Con', desc: '项目全周期概预算、设备调配、分包商结算系统。' },
      { name: '教育培训', tag: 'Edu', desc: '学生全生命周期管理、招生工作流、LMS 教学平台集成。' }
    ],

    products: [
      { group: '技术研发', items: ['软件外包开发','企业网站建设','iOS / macOS 应用程序','Android 应用程序','质量保证与测试','数据库管理与调优'] },
      { group: 'DSTELLAR 核心套件', items: ['DSTELLAR ERP','DSTELLAR 医院管理平台','DSTELLAR 门诊管理系统','DSTELLAR 医师工作站软件','DSTELLAR 牙科诊所软件','DSTELLAR 药房发药系统','DSTELLAR 电子商务平台','DSTELLAR 酒店接待系统','DSTELLAR 工单与派单工具'] },
      { group: '行业套件', items: ['现代物流管理包','专业销售管理系统','智能财务核算包','实时仓储库存包','企业薪酬福利系统','商务智能数据分析','教育管理支持软件'] }
    ],

    sapConsulting: [
      { t: 'SAP 实施与系统支持', d: '提供 ECC、S/4HANA 和 SAP 智能云的全生命周期端到端交付。' },
      { t: '财务与成本管理 (FICO)', d: '财务会计、集团控制、中央财务系统集成。' },
      { t: '销售与分销 (SD)', d: '订单管理、复杂定价策略、账单与返利管理。' },
      { t: '物资与库存管理 (MM)', d: '现代采购流程、库存账务、供应商绩效评估。' },
      { t: '生产与制造计划 (PP)', d: '支持离散制造、流程制造以及重复性制造模式。' },
      { t: '人力资源与组织 (HR)', d: '员工主数据管理、考勤排班、薪酬计算及 SuccessFactors 实施。' },
      { t: '物流与运输执行 (LE)', d: '高效收发货、智能仓库分配、多式联运管理。' },
      { t: '项目管理系统 (PS)', d: '项目全周期跟踪、WBS 拆解、预算与资源科学分配。' },
      { t: 'ABAP 编程与二次开发', d: '定制业务逻辑编写、多维度报表开发、Fiori 界面优化。' },
      { t: '第三方系统集成', d: '非 SAP 异构系统接口开发、中间件配置、API、iDocs 等。' },
      { t: '本地税务合规自动报送', d: '无缝对接税务申报接口，保障企业合规纳税。' },
      { t: 'SAP HANA 数据迁移', d: '基础架构现代化改造，全面向主流云平台平稳迁移。' }
    ],

    servicesSupport: [
      { t: '人工智能与机器学习', d: '引入 Joule AI 助手，应用内置 ML，智能提取单据信息。' },
      { t: '云计算与云原生服务', d: '平滑架构上云、全面托管运维、企业云IT成本预算优化。' },
      { t: '企业级网络安全', d: '企业 GRC 规范、职责分离 (SOD) 审计、身份安全认证、漏洞扫描。' },
      { t: '数字化交互服务', d: '提升客户体验 (CX)、Fiori 交互设计开发、移动端数字应用。' },
      { t: '绿色可持续发展', d: '绿色低碳账本设计 (Green Ledger)、碳足迹分析、循环供应链。' },
      { t: '企业变革与联合创新', d: '基于 Clean Core（干净核心）架构的企业运营模式重塑。' },
      { t: '专业技术咨询', d: 'IT数字化路线图规划、系统健康度审计、资深架构师顾问服务。' },
      { t: '尊享客户专属支持', d: '为超大型与核心企业关键系统提供定制化高标准防护计划。' }
    ],

    promos: {
      '服务行业': { title: '19+ 垂直行业', desc: '深厚的行业技术积累，足迹遍布全球。', btn: '了解全部行业' },
      '产品中心': { title: 'DSTELLAR 产品家族', desc: '探索我们为您打造的 22+ 款自主研发企业软件。', btn: '浏览产品线' },
      'SAP 咨询服务': { title: 'SAP 技术专家', desc: 'S/4HANA 架构升级、FICO 财务优化以及运维保障。', btn: '申请技术评估' },
      '服务与支持': { title: '24/7 全天候响应', desc: '提供高端 AMS 托管服务、嵌入式 AI 升级和灵活弹性云。', btn: '联系技术支持' },
      '培训中心': { title: '知识与技能库', desc: '加入 Dstellar 官方认证课程，轻松掌握 SAP 系统。', btn: '浏览培训课程' },
      '合作伙伴': { title: '合作共赢生态', desc: '诚邀全球合作伙伴，共同开拓企业市场。', btn: '申请成为伙伴' },
      '加入我们': { title: '携手 Dstellar', desc: '与优秀的团队一起，重塑企业软件的未来。', btn: '查看招聘岗位' },
      '互动社区': { title: 'Dstellar 用户群', desc: '与全球 10,000+ 位资深 SAP 专业人士技术交流。', btn: '加入开发者论坛' },
      '发现 Dstellar': { title: '关于我们的故事', desc: '了解 Dstellar 团队的愿景、核心价值观与全球足迹。', btn: '点击阅读详情' }
    },

    sap_feats: [
      '6周内快速完成 Fit-Gap 蓝图差异分析',
      '完备的系统切换就绪度与系统停机规划',
      '基于 Clean-Core 原则的定制代码优化与重构',
      '上线前全仿真割接实战演练（不少于3次）',
      '配合标准运行手册交付高标准 AMS 运维交接',
      '长期系统性能调优与架构改善路线图'
    ]
  },
  de: {
    // UI strings
    inside_dstellar: "Blick hinter Dstellar",
    watch_reel: "90 SEK · VIDEO ABSPIELEN",
    intro_cap: "Dstellar · 90-sekündiges Einführungsvideo",
    explore_services: "Unsere Dienstleistungen →",
    book_assessment: "Bewertung buchen",
    certified: "Zertifiziert",
    partnered: "Partner",
    industries_served: "Branchen bedient",
    dstellar_products: "DSTELLAR Produkte",
    sap_modules: "SAP-Module implementiert",
    support_coverage: "Support-Abdeckung",
    playbook_cta: "Öffne das {name}-Playbook →",
    read_playbook: "Playbook lesen →",
    solutions: "Lösungen",
    ind_tag_s4: "SAP S/4HANA",
    ind_tag_addons: "Branchen-Add-ons",
    ind_tag_ams: "AMS",
    ind_tag_analytics: "Analysen",
    active: "Aktiv",
    why_dstellar: "Warum Dstellar",
    proof_numbers: "Beweis, in den Zahlen.",
    advantage_title: "Machen wir SAP\nzu Ihrem Vorteil.",
    advantage_sub: "60-minütige Bewertung. Keine Slides. Direkte Antworten von einem erfahrenen SAP-Architekten.",
    book_call: "Gespräch buchen →",
    see_case_studies: "Fallstudien ansehen",
    foot_cta: "Bauen wir das nächste Kapitel in SAP.",
    start_conversation: "Gespräch beginnen →",
    locations: "Toronto · Madrid · Singapur · Austin",
    copyright: "© 2026 Dstellar Software Solutions",
    footer_bottom_links: "Datenschutz · Bedingungen · Sicherheit · Compliance",
    nav_title_industries: "Branchen",
    nav_title_sap_consulting: "SAP-Beratung",
    nav_title_services: "Dienstleistungen",
    nav_title_company: "Unternehmen",
    company_items: ["Über uns", "Führungsteam", "Karriere", "Partner", "Community", "Investor Relations", "Presse"],
    select_region: "Region Auswählen",
    login: "Einloggen",

    // Section Titles & Eyebrows
    eyebrow_industries: "Branchen · 18 Spezialisierungen",
    title_industries: "Tief in den Branchen, die für Sie zählen.",
    eyebrow_sap: "SAP-Beratung",
    title_sap: "End-to-End-SAP — ohne Übergaben, ohne Ausreden.",
    eyebrow_products: "Produkte",
    title_products: "Die DSTELLAR-Suite — Software, die wir entwickeln, ausliefern und unterstützen.",

    // Static stats in BigStats
    stat_years: "Jahre im Dienst für Unternehmen",
    stat_industries: "Branchen, ein einziger Partner",
    stat_modules: "SAP-Module erfolgreich geliefert",
    stat_support: "24×7 AMS-Support-Abdeckung",

    // Dynamic Lists from data.ts
    nav: [
      { label: 'Branchen', children: ['Automobilindustrie','Konsumgüter','Elektronik & High-Tech','Fertigung & Industrie','Energie & Versorger','Life Sciences & Gesundheit','Staat & Öffentlicher Sektor','Kapitalmärkte','Reisen & Gastgewerbe','Bauwesen'] },
      { label: 'Produkte', children: ['Individuelle Softwareentwicklung','DSTELLAR ERP','DSTELLAR E-Commerce','DSTELLAR Healthcare Suite','DSTELLAR Logistik & Lager','DSTELLAR Vertrieb & Buchhaltung','Business Intelligence & Analysen','Mobile & Web-Apps'] },
      { label: 'SAP-Beratung', children: ['S/4HANA-Implementierungen','Finanzen & Controlling (FICO)','Vertrieb & Logistik (SD · MM · WM)','Produktion & Planung (PP)','SuccessFactors (HR)','ABAP & Fiori Eigenentwicklungen','SAP-Integrations & API-Suite','Ariba & Supply-Chain-Lösungen'] },
      { label: 'Dienstleistungen & Support', children: ['Künstliche Intelligenz & ML','Cloud-Migration & DevSecOps','Cybersicherheit & Compliance','Digitale Transformation','Technologie-Beratung','Premium-Support & Managed AMS','Dstellar Hilfe-Portal'] },
      { label: 'Schulungen', children: ['Dstellar Schulungszentrum','Zertifizierte SAP-Kurse','Dstellar Prüfungsvorbereitung','Bildungspartner-Programm','Kostenloses openDstellar-Training'] },
      { label: 'Partner', children: ['Partner finden','Strategische Partner','Partner werden','Verzeichnis zertifizierter Lösungen','Outsourcing-Partner'] },
      { label: 'Karriere', children: ['Stellensuche & Stellenangebote','Studenten & Absolventen','Ihr Karriereweg','Warum Dstellar'] },
      { label: 'Community', children: ['Community-Forum','Experten-Blogs','Fragen & Antworten','Events & Meetups','Ressourcen-Bibliothek'] },
      { label: 'Dstellar entdecken', children: ['Wer wir sind','Geschichte','Unternehmensführung','Nachhaltigkeit & CSR','Innovation & Forschung','Investor Relations','Sport-Sponsoring'] },
      { label: 'Testen & Kaufen', children: ['Kostenlose Software-Testversionen','Schulungs- und Aktivierungskatalog','Dstellar Solutions Store'] }
    ],

    industries: [
      { name: 'Automobilindustrie', tag: 'Mfg', desc: 'Vernetze Fahrzeuge, Händlernetzwerke, Fabrikbetrieb.' },
      { name: 'Konsumgüter', tag: 'CPG', desc: 'Bedarfserkennung, Handelsförderung, Omnichannel.' },
      { name: 'Elektronik & High-Tech', tag: 'HT', desc: 'Schnelle Produktzyklen, globale Lieferketten.' },
      { name: 'Staat & Öffentlicher Sektor', tag: 'Gov', desc: 'Fondsverwaltung, Beschaffung, Bürgerservice.' },
      { name: 'Medien & Unterhaltung', tag: 'M&E', desc: 'Rechte, Lizenzgebühren, Monetarisierung von Inhalten.' },
      { name: 'Telekommunikation', tag: 'Tel', desc: 'Abrechnung, OSS/BSS, Teilnehmeranalysen.' },
      { name: 'Vertrieb & Großhandel', tag: 'D&W', desc: 'Order-to-Cash im großen Stil, Lagergeschwindigkeit.' },
      { name: 'Energie & Versorger', tag: 'E&U', desc: 'SAP IS-U, Asset-Management, Ausfallbetrieb.' },
      { name: 'Fertigung & Industrie', tag: 'Ind', desc: 'Diskrete & Prozessfertigung, Instandhaltung (PM).' },
      { name: 'Einzelhandel (Retail)', tag: 'Rtl', desc: 'Unified Commerce, Filialbetrieb, Bestände.' },
      { name: 'Hotelmanagement', tag: 'Hos', desc: 'Reservierungen, Revenue-Management, Gästebetrieb.' },
      { name: 'Kapitalmärkte', tag: 'Fin', desc: 'Transaktionslebenszyklus, Risiko, aufsichtsrechtliche Berichte.' },
      { name: 'Life Sciences & Gesundheit', tag: 'LSH', desc: 'GxP, Qualitätsmanagement (QM), Chargen, regulatorisches Berichtswesen.' },
      { name: 'Informationsdienste', tag: 'IS',  desc: 'Datenprodukte, Abonnement-Abrechnung.' },
      { name: 'Öffentliche Dienste', tag: 'PS',  desc: 'Fördermittelverwaltung, SLAs, Fallmanagement.' },
      { name: 'Reisen, Transport & Logistik', tag: 'TTH', desc: 'Flotten, Treueprogramme, Buchungsoperationen.' },
      { name: 'Bauwesen', tag: 'Con', desc: 'Projektkostenrechnung, Ausrüstung, Subunternehmerbetrieb.' },
      { name: 'Bildungswesen', tag: 'Edu', desc: 'Studentischer Lebenszyklus, Zulassungen, LMS-Integration.' }
    ],

    products: [
      { group: 'Entwicklung', items: ['Softwareentwicklung','Webentwicklung','iOS / macOS Apps','Android-Anwendungen','Qualitätssicherung & Tests','Datenbankmanagement'] },
      { group: 'DSTELLAR Suite', items: ['DSTELLAR ERP','DSTELLAR Krankenhaus-Management','DSTELLAR Praxis-Management','DSTELLAR Arzt-Software','DSTELLAR Zahnarzt-Software','DSTELLAR Apotheken-Management','DSTELLAR E-Commerce','DSTELLAR Hotelmanagement','DSTELLAR Ticketing-Tool'] },
      { group: 'Geschäftspakete', items: ['Logistikpaket','Vertriebspaket','Buchhaltungspaket','Inventarpaket','Gehaltsabrechnungspaket','Business Object','Bildungssoftware'] }
    ],

    sapConsulting: [
      { t: 'SAP-Implementierung & Support', d: 'ECC · S/4HANA · SAP Cloud — ganzheitliche End-to-End-Lieferung.' },
      { t: 'Finanzen & Controlling (FICO)', d: 'Finanzbuchhaltung, Controlling, Central Finance.' },
      { t: 'Vertrieb & Distribution (SD)', d: 'Auftragsabwicklung, Preisfindung, Fakturierung, Rabatte.' },
      { t: 'Materialwirtschaft (MM)', d: 'Beschaffung, Bestandsführung, Lieferantenbewertung.' },
      { t: 'Produktionsplanung (PP)', d: 'Diskrete-, Prozess- und Serienfertigung.' },
      { t: 'Personalwesen (HR)', d: 'Personaladministration, Zeitwirtschaft, Gehaltsabrechnung, SuccessFactors.' },
      { t: 'Logistikabwicklung (LE)', d: 'Versand, Lagerung, Transport.' },
      { t: 'Projektsystem (PS)', d: 'Projektlebenszyklus, PSP, Kosten- und Ressourcenplanung.' },
      { t: 'ABAP-Entwicklung', d: 'Eigene Geschäftslogik, Berichte, Erweiterungen, Fiori-Apps.' },
      { t: 'Fremdsystem-Integration', d: 'Nicht-SAP-Systeme, Middleware, Schnittstellen, APIs, iDocs.' },
      { t: 'Steuerautomatisierung', d: 'Lokale Steuererklärungen und behördliche Compliance.' },
      { t: 'SAP HANA / Cloud', d: 'Modernisierung von Plattformen und Cloud-Migration.' }
    ],

    servicesSupport: [
      { t: 'Künstliche Intelligenz', d: 'Joule, eingebettetes ML, intelligente Dokumentenverarbeitung.' },
      { t: 'Cloud-Dienstleistungen', d: 'Migration, Managed Cloud, Kostenoptimierung.' },
      { t: 'Cybersicherheit', d: 'GRC, Funktionstrennung (SOD), Identitätsschutz, Sicherheitsüberprüfungen.' },
      { t: 'Digitale Dienste', d: 'Kundenmanagement (CX), Commerce, Fiori, mobile Portale.' },
      { t: 'Nachhaltigkeit', d: 'Grünes Buchhaltungs-Hauptbuch (Green Ledger), Emissionen, Kreislauf-Lieferkette.' },
      { t: 'Transformation & Innovation', d: 'Geschäftsgesteuerte Neuausrichtung basierend auf einem sauberen Kern (Clean Core).' },
      { t: 'Strategische Beratung', d: 'Fahrpläne, Systemaudits, beratende IT-Architekten.' },
      { t: 'Premium-Engagements', d: 'Hochspezialisierte Programme für geschäftskritische Systeme.' }
    ],

    promos: {
      'Branchen': { title: '19+ Vertikale', desc: 'Umfangreiche Branchenkompetenz rund um den Globus.', btn: 'Alle ansehen' },
      'Produkte': { title: 'DSTELLAR-Suite', desc: 'Entdecken Sie unsere 22+ maßgeschneiderten Unternehmenslösungen.', btn: 'Suite ansehen' },
      'SAP-Beratung': { title: 'SAP-Experten', desc: 'S/4HANA-Migrationen, FICO und umfassender Support.', btn: 'Bewertung buchen' },
      'Dienstleistungen & Support': { title: 'Support rund um die Uhr', desc: 'Premium-Dienstleistungen für AMS, KI und Cloud-Elastizität.', btn: 'Support anfordern' },
      'Schulungen': { title: 'Lernzentrum', desc: 'Meistern Sie SAP mit den zertifizierten Kursen von Dstellar.', btn: 'Kurse ansehen' },
      'Partner': { title: 'Partnernetzwerk', desc: 'Treten Sie dem globalen Partner-Ökosystem von Dstellar bei.', btn: 'Partner werden' },
      'Karriere': { title: 'Komm zu Dstellar', desc: 'Gestalten Sie die Zukunft von Unternehmenssoftware mit.', btn: 'Offene Stellen' },
      'Community': { title: 'Dstellar-Netzwerk', desc: 'Verbinden Sie sich weltweit mit über 10.000 SAP-Experten.', btn: 'Forum beitreten' },
      'Dstellar entdecken': { title: 'Unsere Geschichte', desc: 'Entdecken Sie den Dstellar-Weg und unseren globalen Einfluss.', btn: 'Mehr erfahren' }
    },

    sap_feats: [
      'Fit-Gap-Analyse in 6 Wochen',
      'Bereitschafts- und Ausfallzeitenplanung',
      'Clean-Core-Refaktorierung für kundeneigenen Code',
      'Generalproben für den Produktivstart (×3)',
      'AMS-Übergabe inklusive detaillierter Betriebshandbücher',
      'Fahrplan für kontinuierliche Optimierung'
    ]
  },
  fr: {
    // UI strings
    inside_dstellar: "À l'intérieur de Dstellar",
    watch_reel: "90 SEC · REGARDER",
    intro_cap: "Dstellar · Présentation de 90 secondes",
    explore_services: "Explorez nos services →",
    book_assessment: "Réserver une évaluation",
    certified: "Certifié",
    partnered: "Partenaire",
    industries_served: "industries desservies",
    dstellar_products: "produits DSTELLAR",
    sap_modules: "modules SAP livrés",
    support_coverage: "couverture de support",
    playbook_cta: "Ouvrir le guide {name} →",
    read_playbook: "Lire le guide stratégique →",
    solutions: "solutions",
    ind_tag_s4: "SAP S/4HANA",
    ind_tag_addons: "Add-ons sectoriels",
    ind_tag_ams: "AMS",
    ind_tag_analytics: "Analytique",
    active: "Actif",
    why_dstellar: "Pourquoi Dstellar",
    proof_numbers: "La preuve, en chiffres.",
    advantage_title: "Faisons de SAP\nvotre atout majeur.",
    advantage_sub: "Évaluation de 60 minutes. Aucun slide. Réponses claires d'un architecte SAP principal.",
    book_call: "Prendre rendez-vous →",
    see_case_studies: "Voir nos études de cas",
    foot_cta: "Bâtissons ensemble l'avenir de SAP.",
    start_conversation: "Démarrer une conversation →",
    locations: "Toronto · Madrid · Singapour · Austin",
    copyright: "© 2026 Dstellar Software Solutions",
    footer_bottom_links: "Confidentialité · Conditions · Sécurité · Conformité",
    nav_title_industries: "Industries",
    nav_title_sap_consulting: "Conseil SAP",
    nav_title_services: "Services",
    nav_title_company: "Entreprise",
    company_items: ["Qui Sommes-Nous", "Direction", "Carrières", "Partenaires", "Communauté", "Relations Investisseurs", "Presse"],
    select_region: "Sélectionner la Région",
    login: "Connexion",

    // Section Titles & Eyebrows
    eyebrow_industries: "Secteurs · 18 spécialités",
    title_industries: "Au cœur des secteurs industriels qui comptent pour vous.",
    eyebrow_sap: "Conseil SAP",
    title_sap: "SAP de bout en bout — sans intermédiaires, sans excuses.",
    eyebrow_products: "Produits",
    title_products: "La suite DSTELLAR — des logiciels que nous concevons, livrons et supportons.",

    // Static stats in BigStats
    stat_years: "années au service des entreprises",
    stat_industries: "secteurs d'activité, un seul partenaire",
    stat_modules: "modules SAP mis en œuvre avec succès",
    stat_support: "couverture de support AMS 24×7",

    // Dynamic Lists from data.ts
    nav: [
      { label: 'Industries', children: ['Automobile','Produits de Consommation','Électronique & Haute Technologie','Fabrication & Industrie','Énergie & Services Publics','Sciences de la Vie & Santé','Gouvernement & Secteur Public','Marchés de Capitaux','Voyages & Hôtellerie','Construction'] },
      { label: 'Produits', children: ['Développement de Logiciels sur Mesure','DSTELLAR ERP','E-Commerce DSTELLAR','Suite Santé DSTELLAR','Logistique & Entrepôt DSTELLAR','Ventes & Comptabilité DSTELLAR','Business Intelligence & Analytique','Applications Mobiles & Web'] },
      { label: 'Conseil SAP', children: ['Intégrations S/4HANA','Finance & Contrôle de Gestion (FICO)','Ventes & Logistique (SD · MM · WM)','Planification de la Production (PP)','SuccessFactors (RH)','Développement ABAP & Fiori sur Mesure','Suite d\'Intégration & APIs SAP','Solutions Ariba & Chaîne Logistique'] },
      { label: 'Services & Support', children: ['Intelligence Artificielle & ML','Migration Cloud & DevSecOps','Cybersécurité & Conformité','Transformation Numérique','Services de Conseil Technologique','Support Premium & AMS Géré','Portail d\'Aide Dstellar'] },
      { label: 'Formations', children: ['Dstellar Learning Hub','Cours Certifiés SAP','Préparation aux Certifications Dstellar','Programme de Partenaires Éducatifs','Formation Gratuite openDstellar'] },
      { label: 'Partenaires', children: ['Trouver un Partenaire','Partenaires Strategiques','Devenir Partenaire','Répertoire des Solutions Certifiées','Partenaires de Sous-traitance'] },
      { label: 'Carrières', children: ['Recherche d\'Emploi & Postes Ouverts','Étudiants & Jeunes Diplômés','Votre Plan de Carrière','Pourquoi Nous Rejoindre'] },
      { label: 'Communauté', children: ['Forum de la Communauté','Blogs d\'Experts','Questions & Réponses','Événements & Meetups','Bibliothèque de Ressources'] },
      { label: 'Découvrir Dstellar', children: ['Qui Nous Sommes','Histoire','Gouvernance & Leadership','Développement Durable & RSE','Innovation & Recherche','Relations Investisseurs','Sponsorings Sportifs'] },
      { label: 'Tester & Acheter', children: ['Essais Gratuits de Logiciels','Catalogue de Formation & d\'Habilitation','Boutique de Solutions Dstellar'] }
    ],

    industries: [
      { name: 'Automobile', tag: 'Mfg', desc: 'Véhicules connectés, réseaux de concessionnaires, opérations d\'usine.' },
      { name: 'Produits de Consommation', tag: 'CPG', desc: 'Analyse prédictive de la demande, promotions, omnicanalité.' },
      { name: 'Électronique & Haute Technologie', tag: 'HT', desc: 'Cycles de produits rapides, chaînes d\'approvisionnement mondiales.' },
      { name: 'Gouvernement & Secteur Public', tag: 'Gov', desc: 'Gestion budgétaire, marchés publics, services aux citoyens.' },
      { name: 'Médias & Divertissement', tag: 'M&E', desc: 'Droits, gestion des redevances, monétisation des contenus.' },
      { name: 'Télécommunications', tag: 'Tel', desc: 'Facturation, OSS/BSS, analytique des abonnés.' },
      { name: 'Distribution & Vente en Gros', tag: 'D&W', desc: 'Processus Order-to-Cash à grande échelle, performance des entrepôts.' },
      { name: 'Énergie & Services Publics', tag: 'E&U', desc: 'SAP IS-U, gestion des actifs, continuité d\'activité.' },
      { name: 'Fabrication & Industrie', tag: 'Ind', desc: 'Production discrète et continue, maintenance des équipements (PM).' },
      { name: 'Vente au Détail (Retail)', tag: 'Rtl', desc: 'Commerce unifié, opérations en magasin, gestion des stocks.' },
      { name: 'Gestion Hôtelière', tag: 'Hos', desc: 'Reservations, revenue management, services aux clients.' },
      { name: 'Marchés de Capitaux', tag: 'Fin', desc: 'Cycle de vie des transactions, gestion des risques, rapports réglementaires.' },
      { name: 'Sciences de la Vie & Santé', tag: 'LSH', desc: 'Conformité GxP, assurance qualité (QM), traçabilité, rapports réglementaires.' },
      { name: 'Services d\'Information', tag: 'IS',  desc: 'Monétisation des données, facturation d\'abonnements.' },
      { name: 'Services Publics', tag: 'PS',  desc: 'Gestion des subventions, contrats de performance (SLAs), gestion des dossiers.' },
      { name: 'Voyages, Transport & Logistique', tag: 'TTH', desc: 'Gestion de flotte, programmes de fidélisation, réservations.' },
      { name: 'Construction', tag: 'Con', desc: 'Suivi budgétaire, gestion du matériel, gestion des sous-traitants.' },
      { name: 'Éducation', tag: 'Edu', desc: 'Cycle de vie des étudiants, admissions, intégration de LMS.' }
    ],

    products: [
      { group: 'Développement', items: ['Développement de Logiciels','Développement Web','Applications iOS / macOS','Applications Android','Assurance Qualité & Tests','Gestion de Bases de Données'] },
      { group: 'Suite DSTELLAR', items: ['DSTELLAR ERP','DSTELLAR Hospital Management','DSTELLAR Clinic Management','Logiciel Médical DSTELLAR','Logiciel Dentaire DSTELLAR','DSTELLAR Pharmacy Management','E-Commerce DSTELLAR','Gestion Hôtelière DSTELLAR','Outil de Gestion des Tickets'] },
      { group: 'Packs Métiers', items: ['Pack Logistique','Pack Ventes','Pack Comptabilité','Pack Inventaire','Pack Paie','Business Object','Logiciel Éducatif'] }
    ],

    sapConsulting: [
      { t: 'Intégration & Support SAP', d: 'ECC · S/4HANA · SAP Cloud — exécution de projet de bout en bout.' },
      { t: 'Finance & Contrôle (FICO)', d: 'Comptabilité financière, contrôle de gestion, comptabilité centrale.' },
      { t: 'Ventes & Distribution (SD)', d: 'Administration des ventes, tarification, facturation, remises.' },
      { t: 'Gestion des Achats (MM)', d: 'Approvisionnements, gestion des stocks, évaluation fournisseurs.' },
      { t: 'Planification de Production (PP)', d: 'Fabrication discrète, continue et répétitive.' },
      { t: 'Ressources Humaines (RH)', d: 'Administration du personnel, temps, paie, SuccessFactors.' },
      { t: 'Exécution Logistique (LE)', d: 'Expéditions, entreposage, gestion des transports.' },
      { t: 'Sytème de Gestion de Projets (PS)', d: 'Cycle de vie du projet, structure PEP, planification des coûts.' },
      { t: 'Développement ABAP', d: 'Programmation sur mesure, rapports, extensions, applications Fiori.' },
      { t: 'Intégration d\'Applications', d: 'Systèmes tiers non-SAP, middleware, APIs, iDocs.' },
      { t: 'Automatisation Fiscale Localisée', d: 'Déclarations fiscales réglementaires et intégration douanière.' },
      { t: 'SAP HANA / Cloud', d: 'Modernisation des infrastructures et migration vers le cloud.' }
    ],

    servicesSupport: [
      { t: 'Intelligence Artificielle', d: 'Joule, IA intégrée, traitement intelligent des documents.' },
      { t: 'Services Cloud', d: 'Migration, cloud infogéré, optimisation des coûts.' },
      { t: 'Cybersécurité', d: 'Solutions GRC, séparation des tâches (SOD), identités, audits de sécurité.' },
      { t: 'Services Numériques', d: 'Expérience client (CX), e-commerce, Fiori, applications mobiles.' },
      { t: 'RSE & Développement Durable', d: 'Comptabilité verte (Green Ledger), empreinte carbone, économie circulaire.' },
      { t: 'Transformation & Innovation', d: 'Modernisation technologique des processus centrée sur un cœur propre (clean core).' },
      { t: 'Conseil & Stratégie', d: 'Feuilles de route, audit de systèmes, direction technologique de transition.' },
      { t: 'Engagements Premium', d: 'Programmes sur mesure de haut niveau pour infrastructures et applications critiques.' }
    ],

    promos: {
      'Industries': { title: '19+ Secteurs', desc: 'Expertise sectorielle pointue à l\'échelle mondiale.', btn: 'Tout Explorer' },
      'Produits': { title: 'Suite DSTELLAR', desc: 'Découvrez nos 22+ logiciels personnalisés pour les entreprises.', btn: 'Voir la Suite' },
      'Conseil SAP': { title: 'Experts SAP', desc: 'Migrations S/4HANA, FICO et support opérationnel complet.', btn: 'Demander évaluation' },
      'Services & Support': { title: 'Support 24/7', desc: 'Services premium d\'AMS, d\'IA et d\'élasticité cloud.', btn: 'Contacter le Support' },
      'Formations': { title: 'Espace d\'Apprentissage', desc: 'Maîtrisez SAP grâce aux cursus certifiants de Dstellar.', btn: 'Voir les Cours' },
      'Partenaires': { title: 'Réseau de Partenaires', desc: 'Rejoignez l\'écosystème mondial des partenaires de Dstellar.', btn: 'Devenir Partenaire' },
      'Carrières': { title: 'Rejoindre Dstellar', desc: 'Bâtissez l\'avenir des solutions logicielles d\'entreprise.', btn: 'Offres d\'Emploi' },
      'Communauté': { title: 'Réseau Dstellar', desc: 'Échangez avec plus de 10 000 experts SAP dans le monde.', btn: 'Rejoindre le Forum' },
      'Découvrir Dstellar': { title: 'Notre Histoire', desc: 'Découvrez la méthode Dstellar et notre impact à l\'international.', btn: 'En Savoir Plus' }
    },

    sap_feats: [
      'Analyse d\'adéquation (Fit-Gap) en 6 semaines',
      'Planification de la préparation et réduction des temps d\'arrêt',
      'Refactorisation du code spécifique avec un cœur propre (clean-core)',
      'Simulations de mise en production à blanc (×3)',
      'Passage en AMS documenté avec fiches de procédures',
      'Plan d\'optimisation continue de l\'infrastructure'
    ]
  },
  ja: {
    // UI strings
    inside_dstellar: "Dstellarについて",
    watch_reel: "90秒 · 動画を見る",
    intro_cap: "Dstellar · 90秒紹介リール",
    explore_services: "サービスを探索する →",
    book_assessment: "アセスメントを予約する",
    certified: "公式認定",
    partnered: "パートナーシップ",
    industries_served: "提供中の業界",
    dstellar_products: "DSTELLAR 製品群",
    sap_modules: "導入実績のあるSAPモジュール",
    support_coverage: "サポート体制",
    playbook_cta: "{name} プレイブックを開く →",
    read_playbook: "プレイブックを読む →",
    solutions: "個のソリューション",
    ind_tag_s4: "SAP S/4HANA",
    ind_tag_addons: "業界特化型アドオン",
    ind_tag_ams: "AMS (アプリケーション保守)",
    ind_tag_analytics: "アナリティクス",
    active: "有効",
    why_dstellar: "Dstellarが選ばれる理由",
    proof_numbers: "数字が証明する、確かな実績。",
    advantage_title: "SAPを、御社の\n最大の強みにする。",
    advantage_sub: "60分間のアセスメント。スライド不要。シニアSAPアーキテクトが直接本音で回答します。",
    book_call: "コールを予約する →",
    see_case_studies: "導入事例を見る",
    foot_cta: "SAPの次の時代を共に創る。",
    start_conversation: "相談を始める →",
    locations: "トロント · マドリッド · シンガポール · オースティン",
    copyright: "© 2026 Dstellar Software Solutions. All rights reserved.",
    footer_bottom_links: "プライバシーポリシー · 利用規約 · セキュリティ · コンプライアンス",
    nav_title_industries: "業界別ソリューション",
    nav_title_sap_consulting: "SAPコンサルティング",
    nav_title_services: "提供サービス",
    nav_title_company: "会社情報",
    company_items: ["会社概要", "リーダーシップ", "採用情報", "パートナー", "コミュニティ", "投資家情報", "プレスリリース"],
    select_region: "地域を選択",
    login: "ログイン",

    // Section Titles & Eyebrows
    eyebrow_industries: "提供中の業界 · 18の専門分野",
    title_industries: "御社が重視する業界に深くコミット。",
    eyebrow_sap: "SAPコンサルティング",
    title_sap: "エンドツーエンドのSAP支援 — 他社への丸投げも、言い訳もありません。",
    eyebrow_products: "プロダクト",
    title_products: "DSTELLARスイート — 私たちが構築し、提供し、保証するソフトウェア。",

    // Static stats in BigStats
    stat_years: "エンタープライズ企業への支援実績（年）",
    stat_industries: "業界に対応、唯一のパートナー",
    stat_modules: "導入実績のあるSAPモジュール数",
    stat_support: "24時間365日のAMSサポート体制",

    // Dynamic Lists from data.ts
    nav: [
      { label: '提供中の業界', children: ['自動車産業','消費財','電子・ハイテク','製造・産業機械','電力・ガス・水道','ライフサイエンス・ヘルスケア','政府・公共機関','資本市場','旅行・ホスピタリティ','建設・エンジニアリング'] },
      { label: 'プロダクト', children: ['カスタムソフトウェア開発','DSTELLAR ERP','DSTELLAR Eコマース','DSTELLAR ヘルスケアスイート','DSTELLAR 物流・倉庫','DSTELLAR 販売・会計','ビジネスインテリジェンス・分析','モバイル＆Webアプリ'] },
      { label: 'SAPコンサルティング', children: ['S/4HANA移行・新規導入','財務会計・管理会計 (FICO)','販売管理・在庫購買・倉庫管理 (SD · MM · WM)','生産管理 (PP)','SuccessFactors (人事)','ABAP & Fiori カスタム開発','SAP統合＆APIスイート','Ariba & サプライチェーン解決策'] },
      { label: 'サービス＆サポート', children: ['人工知能＆機械学習','クラウド移行＆DevSecOps','サイバーセキュリティ＆コンプライアンス','デジタルトランスフォーメーション','テクノロジー・アドバイザリー','プレミアムサポート＆AMS','Dstellarヘルプポータル'] },
      { label: 'トレーニング', children: ['Dstellarラーニングハブ','公式SAP認定コース','Dstellar試験合格支援','教育機関パートナープログラム','無料 openDstellarトレーニング'] },
      { label: 'パートナー', children: ['パートナーを探す','戦略的パートナー','パートナーになる','公式ソリューションカタログ','アウトソーシングパートナー'] },
      { label: '採用情報', children: ['求人検索・募集要項','新卒・学生向け採用','キャリアパス','Dstellarで働く理由'] },
      { label: 'コミュニティ', children: ['コミュニティフォーラム','エキスパートブログ','Q&Aとフォーラム','イベント＆勉強会','資料ライブラリ'] },
      { label: 'Dstellarを知る', children: ['私たちについて','沿革','コーポレートガバナンス','サステナビリティ＆CSR','イノベーション＆研究','投資家情報','スポーツ協賛'] },
      { label: '評価＆購入', children: ['無料トライアル','教育・検証プログラム','Dstellarソリューションストア'] }
    ],

    industries: [
      { name: '自動車産業', tag: 'Mfg', desc: 'コネクテッドカー、ディーラー網管理、工場操業効率化。' },
      { name: '消費財', tag: 'CPG', desc: '需要予測、プロモーション最適化、オムニチャネル対応。' },
      { name: '電子・ハイテク', tag: 'HT', desc: '高速な製品ライフサイクル、グローバルサプライチェーン管理。' },
      { name: '政府・公共機関', tag: 'Gov', desc: '予算管理、公共調達、デジタル市民サービス。' },
      { name: 'メディア＆エンターテインメント', tag: 'M&E', desc: '著作権管理、ロイヤリティ計算、コンテンツ収益化。' },
      { name: '電気通信', tag: 'Tel', desc: '顧客課金、OSS/BSS、契約者アナリティクス。' },
      { name: '流通・卸売', tag: 'D&W', desc: '大規模な受注から回収 (Order-to-Cash)、倉庫回転率向上。' },
      { name: '電力・ガス・水道', tag: 'E&U', desc: 'SAP IS-U導入、アセット管理、停電時緊急対応。' },
      { name: '製造・産業機械', tag: 'Ind', desc: '個別・プロセス製造実行、保全管理 (PM)。' },
      { name: '小売 (Retail)', tag: 'Rtl', desc: '統合オムニチャネルコマース、店舗運営、リアルタイム在庫。' },
      { name: 'ホテル管理', tag: 'Hos', desc: '宿泊予約管理、収益最大化 (レベニューマネジメント)、ゲスト体験。' },
      { name: '資本市場', tag: 'Fin', desc: '取引ライフサイクル管理、リスク管理、財務規制報告。' },
      { name: 'ライフサイエンス・ヘルスケア', tag: 'LSH', desc: 'GxP準拠、品質管理 (QM)、バッチ追跡、規制当局報告。' },
      { name: '情報サービス', tag: 'IS',  desc: 'データ製品の事業化、サブスクリプション課金。' },
      { name: '公共サービス', tag: 'PS',  desc: '補助金交付管理、SLA管理、ケース管理ワークフロー。' },
      { name: '旅行・輸送・運行管理', tag: 'TTH', desc: '運行管理、ロイヤルティプログラム、予約エンジン基盤。' },
      { name: '建設・エンジニアリング', tag: 'Con', desc: 'プロジェクト別原価計算、機材管理、下請業者管理。' },
      { name: '教育・学習支援', tag: 'Edu', desc: '在籍ライフサイクル管理、入学選考、LMS（学習管理システム）連携。' }
    ],

    products: [
      { group: '構築・開発', items: ['ソフトウェア開発','ウェブサイト開発','iOS / macOS アプリ','Android アプリ','品質保証＆テスト','データベース管理'] },
      { group: 'DSTELLAR スイート', items: ['DSTELLAR ERP','DSTELLAR 総合病院管理','DSTELLAR クリニック管理','DSTELLAR 医師支援システム','DSTELLAR 歯科医院向けソフト','DSTELLAR 調剤薬局管理','DSTELLAR Eコマース','DSTELLAR ホテル管理','DSTELLAR チケット・問合せ管理'] },
      { group: '業務別パッケージ', items: ['物流管理パッケージ','販売管理パッケージ','会計管理パッケージ','在庫管理パッケージ','給与計算パッケージ','Business Object','教育支援ソフトウェア'] }
    ],

    sapConsulting: [
      { t: 'SAP導入＆保守サポート', d: 'ECC、S/4HANA、SAP Cloudを含むエンドツーエンドの導入プロジェクト。' },
      { t: '財務会計・管理会計 (FICO)', d: '制度会計、管理会計、セントラルファイナンス統合。' },
      { t: '販売管理 (SD)', d: '受注管理、価格決定ロジック、請求、リベート管理。' },
      { t: '在庫・購買管理 (MM)', d: '調達プロセス、在庫・購買勘定、仕入先評価。' },
      { t: '生産管理 (PP)', d: '離散、プロセス、繰り返し生産の各方式への適合。' },
      { t: '人事・組織管理 (HR)', d: '従業員マスタ、勤怠管理、給与計算、SuccessFactorsの導入。' },
      { t: '物流実行 (LE)', d: '出荷、入出庫保管、配送・配車管理。' },
      { t: 'プロジェクト管理 (PS)', d: 'WBS（作業ブレイクダウン構造）、原価・リソース予算の最適化。' },
      { t: 'ABAPカスタム開発', d: '業務ロジック設計、個別帳票、システム拡張、Fioriアプリ開発。' },
      { t: '外部システム連携', d: '非SAPシステムとのミドルウェア接続、API、iDocs対応。' },
      { t: '現地税制（GST・電子帳簿）対応', d: '各国政府の電子申告プラットフォームへの自動連携。' },
      { t: 'SAP HANA / Cloud移行', d: 'プラットフォームの最新化と各種クラウドへの移行支援。' }
    ],

    servicesSupport: [
      { t: '人工知能 (AI) 活用', d: 'Joule対話型アシスタント、組み込み機械学習、ドキュメント解析。' },
      { t: 'クラウドサービス', d: 'パブリッククラウド移行、マネージド移行、運用コスト最適化。' },
      { t: 'サイバーセキュリティ', d: 'GRC（ガバナンス・リスク・コンプライアンス）、職務分掌 (SOD)、アクセス管理。' },
      { t: 'デジタル体験設計', d: '顧客体験 (CX) プラットフォーム、Fiori UI/UX設計、モバイル。' },
      { t: 'サステイナビリティ', d: 'グリーンLEDジャー、温室効果ガス排出トラッキング、循環サプライチェーン。' },
      { t: '変革とクリーンコア設計', d: '標準機能を活かしたアドオン排除（Clean Core）による最新の運用モデル。' },
      { t: '技術アドバイザリー', d: 'システム監査、移行ロードマップ策定、シニアアーキテクト支援。' },
      { t: 'プレミアム保守サービス', d: 'ミッションクリティカルな大規模システム向けの専用 AMS 保守。' }
    ],

    promos: {
      '提供中の業界': { title: '19以上の業界専門分野', desc: 'グローバル展開を支える業界特化の知識と技術力。', btn: 'すべての業界を見る' },
      'プロダクト': { title: 'DSTELLAR プロダクト群', desc: '22種類を超えるカスタム開発の業務アプリケーションを探索。', btn: '製品一覧を見る' },
      'SAPコンサルティング': { title: 'SAP 技術スペシャリスト', desc: 'S/4HANA移行、FICO構築、システム運用のエキスパート。', btn: '無料アセスメント' },
      'サービス＆サポート': { title: '24時間365日のサポート', desc: 'プレミアムAMS、最新AI活用、俊敏なクラウド設計。', btn: 'サポートを依頼' },
      'トレーニング': { title: '公式ラーニングハブ', desc: '認定資格取得から実践的なSAP操作スキル習得までサポート。', btn: 'コース一覧を見る' },
      'パートナー': { title: 'パートナーエコシステム', desc: 'Dstellarグローバルパートナーネットワークへの参画。', btn: 'パートナー申請' },
      '採用情報': { title: 'Dstellarで働く', desc: '企業のデジタル基盤を支える最高峰 of エンジニアチーム。', btn: '募集職種を見る' },
      'コミュニティ': { title: 'プロフェッショナルネット', desc: '世界1万人以上のSAP技術者とつながる交流コミュニティ。', btn: 'フォーラムに参加' },
      'Dstellarを知る': { title: '私たちのストーリー', desc: 'Dstellarの企業ミッション、行動指針、グローバル活動。', btn: '詳しく読む' }
    },

    sap_feats: [
      '6週間でのFit-Gap差異分析と青写真策定',
      '移行移行準備状況の可視化とシステム停止最小化計画',
      'Clean-Core（標準適用）に基づくアドオンコードのリファクタリング',
      '本番想定切り替えリハーサルの徹底実行（計3回）',
      '詳細な業務手順書に基づく円滑なAMS保守引き継ぎ',
      '継続的なインフラおよびアーキテクチャ最適化ロードマップ'
    ]
  }
};
