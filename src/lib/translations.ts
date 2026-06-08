import { PARTNERS_TRANSLATIONS } from './partnersTranslations';
import { CAREERS_TRANSLATIONS } from './careersTranslations';
import { COMMUNITY_TRANSLATIONS } from './communityTranslations';
import { SERVICES_SUPPORT_TRANSLATIONS } from './servicesSupportTranslations';
import { PRODUCTS_TRANSLATIONS } from './productsTranslations';

export const TRANSLATIONS = {
  en: {
    ...PARTNERS_TRANSLATIONS.en,
    ...CAREERS_TRANSLATIONS.en,
    ...COMMUNITY_TRANSLATIONS.en,
    ...SERVICES_SUPPORT_TRANSLATIONS.en,
    ...PRODUCTS_TRANSLATIONS.en,
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
    select_language: "Select Language",

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
      { label: 'Industries', children: ["Automotive","Consumer Products","Electronic & High Tech","Government & Public Sector","Media & Entertainment","Telecommunications","Distribution & Wholesale","Energy & Utilities","Manufacturing & Industrial","Retail","Hotel Management","Capital Markets","Life Sciences & Healthcare","Information Services","Public Services","Travel, Transport & Hospitality","Construction","Education"] },
      { label: 'Products', children: ['Custom Software Development','DSTELLAR ERP','DSTELLAR E-Commerce','DSTELLAR Healthcare Suite','DSTELLAR Logistics & Warehouse','DSTELLAR Sales & Accounting','Business Intelligence & Analytics','Mobile & Web Applications'] },
      { label: 'SAP Consulting', children: ['S/4HANA Implementations','Finance & Controlling (FICO)','Sales & Logistics (SD · MM · WM)','Production & Planning (PP)','SuccessFactors (HR)','ABAP & Fiori Custom Development','SAP Integration & API Suite','Ariba & Supply Chain Solutions'] },
      { label: 'Services & Support', children: ['Artificial Intelligence & ML','Cloud Migration & DevSecOps','Cybersecurity & Compliance','Digital Transformation','Technology Advisory Services','Premium Support & Managed AMS','Dstellar Help Portal'] },
      { label: 'Trainings', children: ['Dstellar Learning Hub','Certified SAP Courses','Dstellar Certification Prep','Education Partner Program','Free openDstellar Training'] },
      { label: 'Partners', children: ['Find a Partner','Strategic Partners','Become a Partner','Certified Solutions Directory','Outsourcing Partners'] },
      { label: 'Careers', children: ['Job Search & Openings','Students & Graduates','Your Career Path','Why Join Dstellar'] },
      { label: 'Community', children: ['Community Forum','Expert Blogs','Q&A and Forums','Events & Meetups','Resource Library'] },
      { label: 'Discover Dstellar', children: ['Who We Are','History','Sustainability & CSR','Innovation & Research','Investor Relations','Sports Sponsorships'] },
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
    ],

    // Subpages localization
    who_we_are: {
      title: "Who We Are",
      subtitle: "A global collective of SAP architects, software developers, and industry experts.",
      mission_title: "Our Mission",
      mission_desc: "To deliver enterprise solutions that enable organizations to run with speed, agility, and precision.",
      vision_title: "Our Vision",
      vision_desc: "To be the most trusted gold-standard partner for next-generation SAP transformations worldwide.",
      values_title: "Core Values",
      values: [
        { t: "Technical Excellence", d: "We write clean code, design clean-core architectures, and stand behind our work." },
        { t: "Customer Obsession", d: "We align completely with client goals. No hand-offs, no excuses." },
        { t: "Constant Innovation", d: "We constantly research and implement AI-driven automation for enterprise resource planning." }
      ]
    },
    history: {
      title: "Our History",
      subtitle: "Since 2013, Dstellar has pioneered custom software and cloud-integrated SAP migrations.",
      events: [
        { y: "2013", t: "The Founding", d: "Dstellar begins as a boutique custom software and database development agency in Toronto." },
        { y: "2017", t: "European Expansion", d: "We launch our Madrid office to support growing S/4HANA migrations in Western Europe." },
        { y: "2021", t: "SAP Gold Partnership", d: "Recognized as a leading SAP Gold Partner with expert consulting credentials." },
        { y: "2025", t: "AI Enterprise Era", d: "Dstellar rolls out AI-driven Joule integrations and custom cloud platforms." }
      ]
    },
    leadership: {
      title: "Leadership & Governance",
      subtitle: "Meet the senior architects and executives steering Dstellar's global delivery.",
      members: [
        { name: "Marcus Vance", role: "Chief Executive Officer", bio: "20+ years of enterprise tech experience. Former Senior Director of SAP EMEA." },
        { name: "Dr. Elena Rostova", role: "Chief Technology Officer", bio: "Ph.D. in Distributed Systems. Architect of the Dstellar Custom Suite." },
        { name: "Sanjay Mehta", role: "Head of SAP Architecture", bio: "Delivered 50+ end-to-end S/4HANA migrations across 4 continents." }
      ]
    },
    sustainability: {
      title: "Sustainability & CSR",
      subtitle: "We believe standard business software should drive environmental sustainability.",
      metrics_title: "Environmental Impact Metrics",
      metrics: [
        { label: "Client Carbon Reductions", value: "35%" },
        { label: "Paperless Operations", value: "100%" },
        { label: "Green Cloud Migrations", value: "250+" }
      ],
      desc: "Through our Green Ledger implementations, we enable enterprises to trace carbon footprint data in real-time alongside financial metrics.",
      esr_title: "ESR (Environmental & Social Responsibility) Integration",
      esr_desc: "We embed ESR compliance directly into core enterprise ERP architectures. This enables organizations to automate environmental impact auditing and social responsibility governance across global supply chains."
    },
    innovation: {
      title: "Innovation & Research",
      subtitle: "Designing tomorrow's business systems at the Dstellar Labs.",
      projects: [
        { t: "Joule Agent Integrations", d: "Using SAP's dynamic copilot to automate customer billing workflows." },
        { t: "Clean Core Refactoring", d: "Automated analysis tools to extract custom code and align with standard upgrade paths." },
        { t: "Predictive AMS Support", d: "AI-driven outage modeling to resolve database issues before they affect production." }
      ]
    },
    investor_relations: {
      title: "Investor Relations",
      subtitle: "Robust financial stability backed by double-digit year-over-year growth.",
      highlights: [
        { label: "Revenue Growth (YoY)", value: "+24%" },
        { label: "Enterprise Customers", value: "300+" },
        { label: "Global Presence", value: "4 Hubs" }
      ],
      desc: "Dstellar is a privately backed corporation with solid equity structures, positioning us for long-term expansion."
    },
    sports_sponsorships: {
      title: "Sports Sponsorships",
      subtitle: "Speed, precision, and engineering excellence.",
      desc: "Dstellar is a proud sponsor of Formula E and cyber-sport racing leagues worldwide. We believe high-performance engineering on the track mirrors the high-performance software architectures we design for enterprise clients."
    },
    trainings_hub: {
      badge: "DSTELLAR ACADEMY",
      title: "Learning Hub",
      subtitle: "Your gateway to SAP mastery. Explore curated learning pathways designed by certified SAP architects and industry specialists.",
      cta: "Start Learning",
      pathways: [
        { title: "SAP S/4HANA Foundation", desc: "Master the fundamentals of SAP's next-generation ERP platform with hands-on exercises and real-world scenarios.", level: "Intermediate", duration: "40 hrs" },
        { title: "FICO for Finance Leaders", desc: "Deep-dive into Financial Accounting and Controlling modules — from GL to cost center accounting and beyond.", level: "Advanced", duration: "56 hrs" },
        { title: "SAP Fiori UX Design", desc: "Build intuitive enterprise apps with SAP Fiori principles and SAPUI5 components.", level: "Intermediate", duration: "32 hrs" },
        { title: "ABAP Clean Code", desc: "Write modern, maintainable ABAP code following clean-core principles and best practices.", level: "Advanced", duration: "48 hrs" },
        { title: "Supply Chain Excellence", desc: "Optimize your supply chain with SAP MM, WM, and EWM — from procurement to warehouse execution.", level: "Intermediate", duration: "36 hrs" },
        { title: "AI in SAP Environments", desc: "Leverage SAP Joule and embedded AI capabilities to supercharge your enterprise workflows.", level: "Specialist", duration: "24 hrs" }
      ]
    },
    trainings_courses: {
      badge: "CERTIFIED TRAINING",
      title: "Certified SAP Courses",
      subtitle: "Industry-recognized certifications that validate your SAP expertise and accelerate your career growth.",
      cta: "Register Now",
      courses: [
        { code: "SAP-FICO-001", title: "SAP Financial Accounting (FI)", desc: "Covers general ledger, accounts payable, accounts receivable, asset accounting, and month-end closing.", level: "Professional", duration: "5 days" },
        { code: "SAP-CO-002", title: "SAP Controlling (CO)", desc: "Cost center accounting, profit center accounting, internal orders, and product cost planning.", level: "Professional", duration: "4 days" },
        { code: "SAP-SD-003", title: "SAP Sales & Distribution (SD)", desc: "Sales order processing, pricing, delivery, billing, and credit management.", level: "Professional", duration: "5 days" },
        { code: "SAP-MM-004", title: "SAP Materials Management (MM)", desc: "Procurement cycle, inventory management, invoice verification, and vendor management.", level: "Associate", duration: "4 days" },
        { code: "SAP-S4H-005", title: "SAP S/4HANA Migration", desc: "Migration scenarios, conversion approaches, system landscape transformation, and go-live strategies.", level: "Expert", duration: "6 days" },
        { code: "SAP-AI-006", title: "SAP AI & Joule Integration", desc: "Implementing AI-driven business processes using SAP Business AI and Joule copilot capabilities.", level: "Specialist", duration: "3 days" }
      ]
    },
    trainings_prep: {
      badge: "EXAM PREPARATION",
      title: "Certification Prep",
      subtitle: "Structured preparation programs to help you pass SAP certification exams on the first attempt.",
      cta: "Start Prep",
      programs: [
        { exam: "C_TS4FI_2023", title: "SAP Certified Associate – SAP S/4HANA for Financial Accounting", topics: ["General Ledger", "Accounts Payable & Receivable", "Asset Accounting", "Bank Accounting"], passRate: "94%", duration: "3 weeks" },
        { exam: "C_TS4CO_2023", title: "SAP Certified Associate – SAP S/4HANA for Management Accounting", topics: ["Cost Centers", "Profit Centers", "Internal Orders", "Product Costing"], passRate: "91%", duration: "3 weeks" },
        { exam: "C_TS410_2022", title: "SAP Certified Associate – Business Process Integration", topics: ["Procure-to-Pay", "Order-to-Cash", "Plan-to-Produce", "Hire-to-Retire"], passRate: "89%", duration: "4 weeks" }
      ],
      questions: [
        { q: "Which of the following is the next-generation ERP suite from SAP?", options: ["SAP ECC", "SAP S/4HANA", "SAP Business One", "SAP R/3"], correct: 1 },
        { q: "In SAP S/4HANA Finance, which table is the single source of truth for all accounting data?", options: ["BKPF", "BSEG", "ACDOCA", "COEP"], correct: 2 },
        { q: "What does 'Clean Core' refer to in modern SAP architecture?", options: ["Deleting all database logs", "Running database on-premises only", "Keeping custom modifications separate from the standard code using APIs and BTP", "Using a clean graphic interface"], correct: 2 }
      ],
      question_label: "Question",
      timer_label: "Time Remaining",
      score_label: "Your Mock Score"
    },
    trainings_program: {
      badge: "EDUCATION PARTNERSHIP",
      title: "Education Partner Program",
      subtitle: "Partner with Dstellar Academy to deliver world-class SAP training at your institution or corporate campus.",
      cta: "Apply Now",
      tiers: [
        { name: "Bronze", price: "Free", features: ["Access to learning materials", "Branded courseware templates", "Online instructor portal", "Up to 50 students/year"] },
        { name: "Silver", price: "$2,400/yr", features: ["Everything in Bronze", "Co-branded certifications", "Dedicated partner manager", "Up to 250 students/year", "LMS integration support"] },
        { name: "Gold", price: "$6,000/yr", features: ["Everything in Silver", "On-site instructor training", "Custom curriculum development", "Unlimited students", "Revenue sharing model", "Premier placement listing"] }
      ]
    },
    trainings_free: {
      badge: "FREE ACCESS",
      title: "Free openDstellar Training",
      subtitle: "Get started with SAP learning at no cost. Our free openDstellar library gives everyone access to foundational knowledge.",
      cta: "Access Free Courses",
      modules: [
        { title: "SAP Navigation Basics", desc: "Get familiar with the SAP GUI, Fiori launchpad, and core navigation patterns.", duration: "2 hrs", icon: "🧭" },
        { title: "Introduction to ERP", desc: "Understand what ERP means, why companies use it, and how SAP fits into the enterprise landscape.", duration: "3 hrs", icon: "🏢" },
        { title: "SAP Data Model Fundamentals", desc: "Learn about clients, company codes, plants, and other key organizational elements in SAP.", duration: "2.5 hrs", icon: "🗂️" },
        { title: "Finance Basics in SAP", desc: "A non-technical overview of how financial processes flow in SAP S/4HANA.", duration: "3 hrs", icon: "💰" },
        { title: "Supply Chain in SAP", desc: "Introduction to procurement, inventory, and logistics using SAP modules.", duration: "3.5 hrs", icon: "🔗" },
        { title: "SAP Career Pathways", desc: "Explore different SAP career tracks — from consultant to developer to architect.", duration: "1 hr", icon: "🚀" }
      ],
      videos_title: "Free Video Lectures",
      videos: [
        { title: "SAP Navigation Basics", duration: "2 hrs", instructor: "Sarah Jenkins, Lead SAP Architect" },
        { title: "Introduction to ERP Systems", duration: "3 hrs", instructor: "Marcus Vance, CEO & SAP Veteran" },
        { title: "SAP Data Model Fundamentals", duration: "2.5 hrs", instructor: "Sanjay Mehta, Head of SAP Architecture" },
        { title: "Finance Basics in SAP S/4HANA", duration: "3 hrs", instructor: "Dr. Elena Rostova, CTO" },
        { title: "Supply Chain & Logistics in SAP", duration: "3.5 hrs", instructor: "Sanjay Mehta, Head of SAP Architecture" },
        { title: "SAP Consulting Career Pathways", duration: "1 hr", instructor: "Marcus Vance, CEO & SAP Veteran" }
      ]
    }
  },
  es: {
    ...PARTNERS_TRANSLATIONS.es,
    ...CAREERS_TRANSLATIONS.es,
    ...COMMUNITY_TRANSLATIONS.es,
    ...SERVICES_SUPPORT_TRANSLATIONS.es,
    ...PRODUCTS_TRANSLATIONS.es,
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
    select_language: "Seleccionar Idioma",

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
      { label: 'Sectores', children: ["Automotriz","Productos de Consumo","Electrónica y Alta Tecnología","Gobierno y Sector Público","Medios y Entretenimiento","Telecomunicaciones","Distribución y Venta al por Mayor","Energía y Servicios Públicos","Manufactura e Industrial","Comercio Minorista (Retail)","Gestión Hotelera","Mercados de Capitales","Ciencias de la Vida y Salud","Servicios de Información","Servicios Públicos","Viajes, Transporte y Hospitalidad","Construcción","Educación"] },
      { label: 'Productos', children: ['Desarrollo de Software a Medida','ERP DSTELLAR','E-Commerce DSTELLAR','Suite de Salud DSTELLAR','Logística y Almacenes DSTELLAR','Ventas y Contabilidad DSTELLAR','Inteligencia de Negocios y Analítica','Aplicaciones Móviles y Web'] },
      { label: 'Consultoría SAP', children: ['Implementaciones S/4HANA','Finanzas y Control de Gestión (FICO)','Ventas y Logística (SD · MM · WM)','Planificación de la Producción (PP)','SuccessFactors (RRHH)','Desarrollo Personalizado ABAP y Fiori','Suite de Integración y API SAP','Soluciones de Cadena de Suministro y Ariba'] },
      { label: 'Servicios y Soporte', children: ['Inteligencia Artificial y ML','Migración Cloud y DevSecOps','Ciberseguridad y Cumplimiento','Transformación Digital','Servicios de Asesoría Tecnológica','Soporte Premium y AMS Gestionado','Portal de Ayuda Dstellar'] },
      { label: 'Formaciones', children: ['Dstellar Learning Hub','Cursos SAP Certificados','Preparación de Certificaciones Dstellar','Programa de Socios Educativos','Formación Gratuita openDstellar'] },
      { label: 'Socios', children: ['Buscar un Socio','Socios Estratégicos','Convertirse en Socio','Directorio de Soluciones Certificadas','Socios de Outsourcing'] },
      { label: 'Carreras', children: ['Búsqueda de Empleo y Vacantes','Estudiantes y Graduados','Su Trayectoria Profesional','Por qué Unirse a Dstellar'] },
      { label: 'Comunidad', children: ['Foro de la Comunidad','Blogs de Expertos','Preguntas y Respuestas','Eventos y Reuniones','Biblioteca de Recursos'] },
      { label: 'Descubrir Dstellar', children: ['Quiénes Somos','Historia','Sostenibilidad y RSC','Innovación e Investigación','Relaciones con Inversores','Patrocinios Deportivos'] },
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
    ],

    // Subpages localization
    who_we_are: {
      title: "Quiénes Somos",
      subtitle: "Un colectivo global de arquitectos SAP, desarrolladores de software y expertos del sector.",
      mission_title: "Nuestra Misión",
      mission_desc: "Entregar soluciones empresariales que permitan a las organizaciones operar con velocidad, agilidad y precisión.",
      vision_title: "Nuestra Visión",
      vision_desc: "Ser el socio de estándar de oro más confiable para las transformaciones SAP de próxima generación en todo el mundo.",
      values_title: "Valores Fundamentales",
      values: [
        { t: "Excelencia Técnica", d: "Escribimos código limpio, diseñamos arquitecturas con núcleo limpio y respaldamos nuestro trabajo." },
        { t: "Obsesión por el Cliente", d: "Nos alineamos completamente con los objetivos del cliente. Sin intermediarios, sin excusas." },
        { t: "Innovación Constante", d: "Investigamos e implementamos constantemente la automatización impulsada por IA para la planificación de recursos empresariales." }
      ]
    },
    history: {
      title: "Nuestra Historia",
      subtitle: "Desde 2013, Dstellar ha sido pionero en software a medida y migraciones SAP integradas en la nube.",
      events: [
        { y: "2013", t: "La Fundación", d: "Dstellar comienza como una agencia boutique de desarrollo de software y bases de datos a medida en Toronto." },
        { y: "2017", t: "Expansión Europea", d: "Lanzamos nuestra oficina en Madrid para dar soporte a las crecientes migraciones S/4HANA en Europa Occidental." },
        { y: "2021", t: "Socio Gold de SAP", d: "Reconocidos como socio Gold líder de SAP con credenciales de consultoría experta." },
        { y: "2025", t: "Era de la IA Empresarial", d: "Dstellar lanza integraciones Joule impulsadas por IA y plataformas en la nube personalizadas." }
      ]
    },
    leadership: {
      title: "Liderazgo y Gobernanza",
      subtitle: "Conozca a los arquitectos y ejecutivos senior que dirigen la entrega global de Dstellar.",
      members: [
        { name: "Marcus Vance", role: "Director Ejecutivo (CEO)", bio: "Más de 20 años de experiencia en tecnología empresarial. Exdirector Senior de SAP EMEA." },
        { name: "Dr. Elena Rostova", role: "Directora de Tecnología (CTO)", bio: "Doctora en Sistemas Distribuidos. Arquitecta de la suite a medida de Dstellar." },
        { name: "Sanjay Mehta", role: "Director de Arquitectura SAP", bio: "Ha liderado más de 50 migraciones S/4HANA de extremo a extremo en 4 continentes." }
      ]
    },
    sustainability: {
      title: "Sostenibilidad y RSC",
      subtitle: "Creemos que el software empresarial debe impulsar la sostenibilidad ambiental.",
      metrics_title: "Métricas de Impacto Ambiental",
      metrics: [
        { label: "Reducción de Carbono de Clientes", value: "35%" },
        { label: "Operaciones sin Papel", value: "100%" },
        { label: "Migraciones Cloud Ecológicas", value: "250+" }
      ],
      desc: "A través de nuestras implementaciones de Green Ledger, permitimos a las empresas rastrear datos de huella de carbono en tiempo real junto con las métricas financieras.",
      esr_title: "Integración de ESR (Responsabilidad Ambiental y Social)",
      esr_desc: "Integramos el cumplimiento de ESR directamente en las arquitecturas ERP centrales de la empresa. Esto permite a las organizaciones automatizar la auditoría de impacto ambiental y la gobernanza de la responsabilidad social en las cadenas de suministro globales."
    },
    innovation: {
      title: "Innovación e Investigación",
      subtitle: "Diseñando los sistemas de negocio del mañana en los Laboratorios Dstellar.",
      projects: [
        { t: "Integraciones del Asistente Joule", d: "Uso del copiloto dinámico de SAP para automatizar los flujos de trabajo de facturación a clientes." },
        { t: "Refactorización de Núcleo Limpio", d: "Herramientas de análisis automatizadas para extraer código personalizado y alinearlo con las rutas de actualización estándar." },
        { t: "Soporte AMS Predictivo", d: "Modelado de cortes impulsado por IA para resolver problemas de bases de datos antes de que afecten a la producción." }
      ]
    },
    investor_relations: {
      title: "Relaciones con Inversores",
      subtitle: "Sólida estabilidad financiera respaldada por un crecimiento interanual de dos dígitos.",
      highlights: [
        { label: "Crecimiento de Ingresos (Anual)", value: "+24%" },
        { label: "Clientes Empresariales", value: "300+" },
        { label: "Presencia Global", value: "4 Sedes" }
      ],
      desc: "Dstellar es una corporación de capital privado con estructuras de capital sólidas, posicionándonos para una expansión a largo plazo."
    },
    sports_sponsorships: {
      title: "Patrocinios Deportivos",
      subtitle: "Velocidad, precisión y excelencia en ingeniería.",
      desc: "Dstellar se enorgullece de patrocinar la Fórmula E y las ligas de deportes electrónicos en todo el mundo. Creemos que la ingeniería de alto rendimiento en la pista refleja las arquitecturas de software de alto rendimiento que diseñamos para nuestros clientes empresariales."
    },
    trainings_hub: {
      badge: "DSTELLAR ACADEMY",
      title: "Centro de Aprendizaje",
      subtitle: "Tu puerta de entrada al dominio de SAP. Explora rutas de aprendizaje creadas por arquitectos SAP certificados.",
      cta: "Empezar a Aprender",
      pathways: [
        { title: "Fundamentos de SAP S/4HANA", desc: "Domina los fundamentos de la plataforma ERP de próxima generación de SAP con ejercicios prácticos.", level: "Intermediate", duration: "40 h" },
        { title: "FICO para Líderes Financieros", desc: "Profundiza en los módulos de Contabilidad Financiera y Control: desde GL hasta centros de costo.", level: "Advanced", duration: "56 h" },
        { title: "Diseño UX con SAP Fiori", desc: "Crea aplicaciones empresariales intuitivas con principios SAP Fiori y componentes SAPUI5.", level: "Intermediate", duration: "32 h" },
        { title: "ABAP Código Limpio", desc: "Escribe código ABAP moderno y mantenible siguiendo principios de núcleo limpio.", level: "Advanced", duration: "48 h" },
        { title: "Excelencia en Cadena de Suministro", desc: "Optimiza tu cadena de suministro con SAP MM, WM y EWM.", level: "Intermediate", duration: "36 h" },
        { title: "IA en Entornos SAP", desc: "Aprovecha SAP Joule y las capacidades de IA integradas para potenciar tus flujos de trabajo.", level: "Specialist", duration: "24 h" }
      ]
    },
    trainings_courses: {
      badge: "FORMACIÓN CERTIFICADA",
      title: "Cursos SAP Certificados",
      subtitle: "Certificaciones reconocidas por la industria que validan tu expertise en SAP y aceleran tu carrera.",
      cta: "Inscribirse Ahora",
      courses: [
        { code: "SAP-FICO-001", title: "SAP Contabilidad Financiera (FI)", desc: "Cubre el libro mayor, cuentas por pagar, cuentas por cobrar, contabilidad de activos y cierre mensual.", level: "Professional", duration: "5 días" },
        { code: "SAP-CO-002", title: "SAP Controlling (CO)", desc: "Contabilidad de centros de costo, centros de beneficio, órdenes internas y planificación de costos.", level: "Professional", duration: "4 días" },
        { code: "SAP-SD-003", title: "SAP Ventas y Distribución (SD)", desc: "Procesamiento de pedidos, precios, entrega, facturación y gestión de crédito.", level: "Professional", duration: "5 días" },
        { code: "SAP-MM-004", title: "SAP Gestión de Materiales (MM)", desc: "Ciclo de adquisición, gestión de inventario, verificación de facturas y gestión de proveedores.", level: "Associate", duration: "4 días" },
        { code: "SAP-S4H-005", title: "Migración SAP S/4HANA", desc: "Escenarios de migración, enfoques de conversión, transformación del sistema y estrategias de go-live.", level: "Expert", duration: "6 días" },
        { code: "SAP-AI-006", title: "SAP AI e Integración Joule", desc: "Implementación de procesos de negocio impulsados por IA usando SAP Business AI y Joule.", level: "Specialist", duration: "3 días" }
      ]
    },
    trainings_prep: {
      badge: "PREPARACIÓN DE EXAMEN",
      title: "Preparación de Certificaciones",
      subtitle: "Programas de preparación estructurados para aprobar los exámenes de certificación SAP a la primera.",
      cta: "Iniciar Preparación",
      programs: [
        { exam: "C_TS4FI_2023", title: "SAP Certified Associate – S/4HANA Contabilidad Financiera", topics: ["Libro Mayor", "Cuentas por Pagar y Cobrar", "Contabilidad de Activos", "Contabilidad Bancaria"], passRate: "94%", duration: "3 semanas" },
        { exam: "C_TS4CO_2023", title: "SAP Certified Associate – S/4HANA Contabilidad de Gestión", topics: ["Centros de Costo", "Centros de Beneficio", "Órdenes Internas", "Costos de Producto"], passRate: "91%", duration: "3 semanas" },
        { exam: "C_TS410_2022", title: "SAP Certified Associate – Integración de Procesos de Negocio", topics: ["Procure-to-Pay", "Order-to-Cash", "Plan-to-Produce", "Hire-to-Retire"], passRate: "89%", duration: "4 semanas" }
      ],
      questions: [
        { q: "¿Cuál de los siguientes es el ERP de próxima generación de SAP?", options: ["SAP ECC", "SAP S/4HANA", "SAP Business One", "SAP R/3"], correct: 1 },
        { q: "En SAP S/4HANA Finance, ¿qué tabla es la única fuente de verdad para todos los datos contables?", options: ["BKPF", "BSEG", "ACDOCA", "COEP"], correct: 2 },
        { q: "En la arquitectura moderna de SAP, ¿a qué se refiere un núcleo limpio ('Clean Core')?", options: ["Eliminar todos los registros de la base de datos", "Ejecutar la base de datos solo en local", "Mantener las modificaciones personalizadas separadas del código estándar mediante APIs y BTP", "Usar una interfaz gráfica limpia"], correct: 2 }
      ],
      question_label: "Pregunta",
      timer_label: "Tiempo Restante",
      score_label: "Tu Puntuación Mock"
    },
    trainings_program: {
      badge: "ALIANZA EDUCATIVA",
      title: "Programa de Socios Educativos",
      subtitle: "Asóciate con Dstellar Academy para impartir formación SAP de clase mundial en tu institución.",
      cta: "Aplicar Ahora",
      tiers: [
        { name: "Bronce", price: "Gratis", features: ["Acceso a materiales de aprendizaje", "Plantillas de cursos con marca", "Portal de instructores online", "Hasta 50 estudiantes/año"] },
        { name: "Plata", price: "2.400 €/año", features: ["Todo en Bronce", "Certificaciones co-branded", "Gestor de socios dedicado", "Hasta 250 estudiantes/año", "Integración con LMS"] },
        { name: "Oro", price: "6.000 €/año", features: ["Todo en Plata", "Formación de instructores presencial", "Desarrollo de currículo personalizado", "Estudiantes ilimitados", "Modelo de reparto de ingresos", "Listado premier"] }
      ]
    },
    trainings_free: {
      badge: "ACCESO GRATUITO",
      title: "Formación Gratuita openDstellar",
      subtitle: "Comienza tu aprendizaje SAP sin costo. Nuestra biblioteca openDstellar gratuita da acceso a conocimiento fundamental.",
      cta: "Acceder a Cursos Gratuitos",
      modules: [
        { title: "Navegación Básica SAP", desc: "Familiarízate con el GUI de SAP, el launchpad de Fiori y los patrones de navegación principales.", duration: "2 h", icon: "🧭" },
        { title: "Introducción al ERP", desc: "Entiende qué es el ERP, por qué las empresas lo usan y cómo encaja SAP en el ecosistema empresarial.", duration: "3 h", icon: "🏢" },
        { title: "Fundamentos del Modelo de Datos SAP", desc: "Aprende sobre mandantes, sociedad, centros y otros elementos organizativos clave en SAP.", duration: "2.5 h", icon: "🗂️" },
        { title: "Finanzas Básicas en SAP", desc: "Una visión no técnica de cómo fluyen los procesos financieros en SAP S/4HANA.", duration: "3 h", icon: "💰" },
        { title: "Cadena de Suministro en SAP", desc: "Introducción a compras, inventario y logística usando módulos SAP.", duration: "3.5 h", icon: "🔗" },
        { title: "Trayectorias de Carrera SAP", desc: "Explora las distintas carreras en SAP: consultor, desarrollador, arquitecto y más.", duration: "1 h", icon: "🚀" }
      ],
      videos_title: "Lecciones en Video Gratuitas",
      videos: [
        { title: "Conceptos Básicos de Navegación SAP", duration: "2 horas", instructor: "Sarah Jenkins, Arquitecta Principal SAP" },
        { title: "Introducción a los Sistemas ERP", duration: "3 horas", instructor: "Marcus Vance, CEO y Veterano de SAP" },
        { title: "Fundamentos del Modelo de Datos SAP", duration: "2.5 horas", instructor: "Sanjay Mehta, Director de Arquitectura SAP" },
        { title: "Conceptos Básicos de Finanzas en SAP S/4HANA", duration: "3 horas", instructor: "Dra. Elena Rostova, CTO" },
        { title: "Cadena de Suministro y Logística en SAP", duration: "3.5 horas", instructor: "Sanjay Mehta, Director de Arquitectura SAP" },
        { title: "Trayectorias Profesionales en Consultoría SAP", duration: "1 hora", instructor: "Marcus Vance, CEO y Veterano de SAP" }
      ]
    }
  },
  zh: {
    ...PARTNERS_TRANSLATIONS.zh,
    ...CAREERS_TRANSLATIONS.zh,
    ...COMMUNITY_TRANSLATIONS.zh,
    ...SERVICES_SUPPORT_TRANSLATIONS.zh,
    ...PRODUCTS_TRANSLATIONS.zh,
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
    select_language: "选择语言",

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
      { label: '服务行业', children: ["汽车制造","消费品行业","电子与高科技","政府与公共部门","媒体与娱乐","网络通信","分销与批发","能源与公用事业","装备制造与工业","零售商贸","酒店管理","资本市场","生命科学与医疗健康","信息服务","公共服务","旅游交通与物流","建筑与工程","教育培训"] },
      { label: '产品中心', children: ['定制软件开发','DSTELLAR ERP 系统','DSTELLAR 电子商务系统','DSTELLAR 医疗健康套件','DSTELLAR 物流与仓储系统','DSTELLAR 销售与财务系统','商业智能与数据分析','移动与 Web 应用程序'] },
      { label: 'SAP 咨询服务', children: ['S/4HANA 系统实施','财务与成本管理 (FICO)','销售与物流管理 (SD · MM · WM)','生产与计划管理 (PP)','SuccessFactors 人力资源系统','ABAP 与 Fiori 定制化开发','SAP 集成与 API 套件','Ariba 采购与供应链解决方案'] },
      { label: '服务与支持', children: ['人工智能与机器学习','云迁移与 DevSecOps','网络安全与合规审计','企业数字化转型','IT 战略咨询服务','尊享支持与托管运维 (AMS)','Dstellar 帮助中心'] },
      { label: '培训中心', children: ['Dstellar 学习中心','SAP 官方认证课程','Dstellar 考试认证辅导','教育合作伙伴计划','免费开放课程 openDstellar'] },
      { label: '合作伙伴', children: ['寻找合作伙伴','战略合作伙伴','成为合作伙伴','认证解决方案目录','外包合作伙伴'] },
      { label: '加入我们', children: ['职位搜索与招聘','校园招聘与实习生','您的职业发展路径','为什么选择 Dstellar'] },
      { label: '互动社区', children: ['社区论坛','专家博客','问答社区','活动与线下聚会','资源库'] },
      { label: '发现 Dstellar', children: ['关于我们','发展历史','可持续发展与 CSR','创新与前沿研究','投资者关系','体育赞助'] },
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
      { group: 'DSTELLAR 核心套件', items: ['DSTELLAR ERP 系统','DSTELLAR 医院管理平台','DSTELLAR 门诊管理系统','DSTELLAR 医师工作站软件','DSTELLAR 牙科诊所软件','DSTELLAR 药房发药系统','DSTELLAR 电子商务平台','DSTELLAR 酒店接待系统','DSTELLAR 工单与派单工具'] },
      { group: '行业套件', items: ['现代物流管理包','专业销售管理系统','智能财务核算包','实时仓储库存包','企业薪酬福利系统','商务智能数据分析','教育管理支持软件'] }
    ],

    sapConsulting: [
      { t: 'SAP 实施与系统支持', d: '提供 ECC、S/4HANA 和 SAP 智能云的全生命周期端到端交付。' },
      { t: '财务与成本管理 (FICO)', d: '财务会计、集团控制、中央财务系统集成。' },
      { t: '销售与分销 (SD)', d: '订单管理、复杂定价策略、账单与返利管理。' },
      { t: '物资与库存 management (MM)', d: '现代采购流程、库存账务、供应商绩效评估。' },
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
    ],

    // Subpages localization
    who_we_are: {
      title: "公司简介",
      subtitle: "由 SAP 架构师、软件开发人员和行业专家组成的全球协作团队。",
      mission_title: "企业使命",
      mission_desc: "交付使企业能够快速、敏捷且精准运行的软件解决方案。",
      vision_title: "企业愿景",
      vision_desc: "成为全球下一代 SAP 数字化转型最值得信赖的金牌合作伙伴。",
      values_title: "核心价值观",
      values: [
        { t: "技术卓越", d: "编写规范代码，设计干净核心（clean-core）架构，为交付结果负责。" },
        { t: "客户至上", d: "与客户的目标完全一致。不推诿，只为解决问题。" },
        { t: "持续创新", d: "持续研发并引入基于 AI 的企业资源规划自动化技术。" }
      ]
    },
    history: {
      title: "发展历史",
      subtitle: "自 2013 年起，Dstellar 便是定制软件和云集成 SAP 迁移领域的先驱。",
      events: [
        { y: "2013", t: "公司成立", d: "Dstellar 作为一家精品定制软件与数据库开发机构在多伦多成立。" },
        { y: "2017", t: "开拓欧洲市场", d: "我们在马德里设立办事处，为西欧日益增长的 S/4HANA 迁移需求提供技术支持。" },
        { y: "2021", t: "SAP 金牌合作伙伴", d: "凭借卓越的咨询能力，荣获 SAP 官方金牌合作伙伴资质。" },
        { y: "2025", t: "企业级 AI 时代", d: "Dstellar 推出基于 AI 的 Joule 助手集成及定制化云原生平台。" }
      ]
    },
    leadership: {
      title: "领导与公司治理",
      subtitle: "介绍指引 Dstellar 全球项目交付的高管与资深架构师团队。",
      members: [
        { name: "Marcus Vance", role: "首席执行官 (CEO)", bio: "拥有 20 多年企业级技术管理经验。曾任 SAP 欧洲、中东和概念区 (EMEA) 高级总监。" },
        { name: "Dr. Elena Rostova", role: "首席技术官 (CTO)", bio: "分布式系统博士。Dstellar 自主研发企业套件的总设计师。" },
        { name: "Sanjay Mehta", role: "SAP 架构负责人", bio: "在四大洲主导并完成了 50 多个端到端 S/4HANA 迁移项目。" }
      ]
    },
    sustainability: {
      title: "可持续发展与 CSR",
      subtitle: "我们坚信，现代企业软件应该致力于推动环境的可持续发展。",
      metrics_title: "环境影响指标",
      metrics: [
        { label: "客户碳排放减少", value: "35%" },
        { label: "无纸化办公比例", value: "100%" },
        { label: "绿色云端迁移项目", value: "250+" }
      ],
      desc: "通过实施 Green Ledger（绿色账本），我们助力企业实时追踪碳足迹数据，并与财务指标无缝关联。",
      esr_title: "ESR（环境与社会责任）集成",
      esr_desc: "我们将 ESR 合规性直接嵌入到核心企业 ERP 架构中。这使企业能够自动执行全球供应链的环境影响审计和社会责任治理。"
    },
    innovation: {
      title: "创新与前沿研究",
      subtitle: "在 Dstellar 实验室设计明天的商业运营系统。",
      projects: [
        { t: "Joule 助手工单集成", d: "利用 SAP 的动态智能副驾驶自动处理客户账单工作流。" },
        { t: "干净核心代码重构", d: "自动化分析工具，用于提取自定义代码并将其与标准升级路径对齐。" },
        { t: "预测性 AMS 运维服务", d: "基于 AI 的故障建模，在数据库问题影响生产系统之前进行预警并解决。" }
      ]
    },
    investor_relations: {
      title: "投资者关系",
      subtitle: "以双位数的年同比增长率，保障强大的财务稳定性。",
      highlights: [
        { label: "营业收入同比增长", value: "+24%" },
        { label: "服务企业客户数", value: "300+" },
        { label: "全球交付中心", value: "4 大中心" }
      ],
      desc: "Dstellar 是一家拥有稳健资本结构的私有化公司，为长期业务扩张奠定了坚实的基础。"
    },
    sports_sponsorships: {
      title: "体育赞助",
      subtitle: "速度、精准与卓越工程的完美结合。",
      desc: "Dstellar 荣幸地成为全球 Formula E（电动方程式）和电子竞技联赛的赞助商。我们相信，赛道上的高性能工程表现与我们为企业客户设计的卓越软件架构如出一辙。"
    },
    trainings_hub: {
      badge: "DSTELLAR 学院",
      title: "学习中心",
      subtitle: "掌握 SAP 的门户。探索由经过认证的 SAP 架构师精心设计的学习路径。",
      cta: "开始学习",
      pathways: [
        { title: "SAP S/4HANA 基础", desc: "通过实践练习掌握 SAP 下一代 ERP 平台的基础知识。", level: "Intermediate", duration: "40 小时" },
        { title: "面向财务领导者的 FICO", desc: "深入了解财务会计和控制模块——从总账到成本中心会计。", level: "Advanced", duration: "56 小时" },
        { title: "SAP Fiori UX 设计", desc: "使用 SAP Fiori 原则和 SAPUI5 组件构建直观的企业应用程序。", level: "Intermediate", duration: "32 小时" },
        { title: "ABAP 简洁代码", desc: "遵循简洁核心原则和最佳实践编写现代、可维护的 ABAP 代码。", level: "Advanced", duration: "48 小时" },
        { title: "供应链卓越管理", desc: "通过 SAP MM、WM 和 EWM 优化您的供应链——从采购到仓库执行。", level: "Intermediate", duration: "36 小时" },
        { title: "SAP 环境中的 AI", desc: "利用 SAP Joule 和嵌入式 AI 功能增强您的企业工作流程。", level: "Specialist", duration: "24 小时" }
      ]
    },
    trainings_courses: {
      badge: "认证培训",
      title: "SAP 认证课程",
      subtitle: "获得行业认可的认证，验证您的 SAP 专业知识并加速职业发展。",
      cta: "立即报名",
      courses: [
        { code: "SAP-FICO-001", title: "SAP 财务会计 (FI)", desc: "涵盖总账、应付账款、应收账款、资产会计和月末结账。", level: "Professional", duration: "5天" },
        { code: "SAP-CO-002", title: "SAP 控制 (CO)", desc: "成本中心会计、利润中心会计、内部订单和产品成本计划。", level: "Professional", duration: "4天" },
        { code: "SAP-SD-003", title: "SAP 销售与分销 (SD)", desc: "销售订单处理、定价、交货、开票和信用管理。", level: "Professional", duration: "5天" },
        { code: "SAP-MM-004", title: "SAP 物料管理 (MM)", desc: "采购周期、库存管理、发票校验和供应商管理。", level: "Associate", duration: "4天" },
        { code: "SAP-S4H-005", title: "SAP S/4HANA 迁移", desc: "迁移方案、转换方法、系统架构转型和上线策略。", level: "Expert", duration: "6天" },
        { code: "SAP-AI-006", title: "SAP AI 与 Joule 集成", desc: "使用 SAP Business AI 和 Joule 协同功能实现 AI 驱动的业务流程。", level: "Specialist", duration: "3天" }
      ]
    },
    trainings_prep: {
      badge: "考试备考",
      title: "认证备考",
      subtitle: "结构化备考项目，帮助您一次通过 SAP 认证考试。",
      cta: "开始备考",
      programs: [
        { exam: "C_TS4FI_2023", title: "SAP 认证助理 – SAP S/4HANA 财务会计", topics: ["总账", "应付和应收账款", "资产会计", "银行会计"], passRate: "94%", duration: "3周" },
        { exam: "C_TS4CO_2023", title: "SAP 认证助理 – SAP S/4HANA 管理会计", topics: ["成本中心", "利润中心", "内部订单", "产品成本"], passRate: "91%", duration: "3周" },
        { exam: "C_TS410_2022", title: "SAP 认证助理 – 业务流程集成", topics: ["采购到付款", "订单到收款", "计划到生产", "招聘到退休"], passRate: "89%", duration: "4周" }
      ],
      questions: [
        { q: "以下哪项是 SAP 的下一代 ERP 套件？", options: ["SAP ECC", "SAP S/4HANA", "SAP Business One", "SAP R/3"], correct: 1 },
        { q: "在 SAP S/4HANA Finance 中，哪个表是所有财务数据的单一事实来源？", options: ["BKPF", "BSEG", "ACDOCA", "COEP"], correct: 2 },
        { q: "在现代 SAP 架构中，“干净核心 (Clean Core)”是指什么？", options: ["删除所有数据库日志", "仅在本地运行数据库", "通过 API 和 BTP 将自定义修改与标准代码分离", "使用干净的图形界面"], correct: 2 }
      ],
      question_label: "问题",
      timer_label: "剩余时间",
      score_label: "您的模拟测试得分"
    },
    trainings_program: {
      badge: "教育合作伙伴",
      title: "教育合作伙伴计划",
      subtitle: "与 Dstellar 学院合作，在您的机构或企业园区提供世界一流的 SAP 培训。",
      cta: "立即申请",
      tiers: [
        { name: "青铜", price: "免费", features: ["访问学习材料", "品牌课程模板", "在线讲师门户", "每年最多50名学生"] },
        { name: "白银", price: "¥17,000/年", features: ["青铜的一切", "联合品牌认证", "专属合作伙伴经理", "每年最多250名学生", "LMS集成支持"] },
        { name: "黄金", price: "¥43,000/年", features: ["白银的一切", "现场讲师培训", "定制课程开发", "无限学生", "收入分成模式", "优先展示列表"] }
      ]
    },
    trainings_free: {
      badge: "免费访问",
      title: "免费 openDstellar 培训",
      subtitle: "免费开始您的 SAP 学习。我们的免费 openDstellar 资料库让每个人都能获取基础知识。",
      cta: "访问免费课程",
      modules: [
        { title: "SAP 基础导航", desc: "熟悉 SAP GUI、Fiori 启动面板和核心导航模式。", duration: "2小时", icon: "🧭" },
        { title: "ERP 简介", desc: "了解什么是 ERP、企业为何使用它以及 SAP 在企业格局中的定位。", duration: "3小时", icon: "🏢" },
        { title: "SAP 数据模型基础", desc: "学习 SAP 中的客户端、公司代码、工厂和其他关键组织元素。", duration: "2.5小时", icon: "🗂️" },
        { title: "SAP 财务基础", desc: "非技术性概述财务流程如何在 SAP S/4HANA 中运转。", duration: "3小时", icon: "💰" },
        { title: "SAP 供应链", desc: "使用 SAP 模块介绍采购、库存 and 物流。", duration: "3.5小时", icon: "🔗" },
        { title: "SAP 职业路径", desc: "探索不同的 SAP 职业轨道——从顾问到开发人员到架构师。", duration: "1小时", icon: "🚀" }
      ],
      videos_title: "免费视频课程",
      videos: [
        { title: "SAP 基础导航操作", duration: "2小时", instructor: "Sarah Jenkins, 资深 SAP 架构师" },
        { title: "ERP 系统概念简介", duration: "3小时", instructor: "Marcus Vance, 首席执行官 & SAP 行业专家" },
        { title: "SAP 数据模型底层逻辑", duration: "2.5小时", instructor: "Sanjay Mehta, SAP 架构部主管" },
        { title: "SAP S/4HANA 财务模块入门", duration: "3小时", instructor: "Elena Rostova 博士, 首席技术官" },
        { title: "SAP 供应链与物流运作", duration: "3.5小时", instructor: "Sanjay Mehta, SAP 架构部主管" },
        { title: "SAP 咨询师职业发展与路径规划", duration: "1小时", instructor: "Marcus Vance, 首席执行官 & SAP 行业专家" }
      ]
    }
  },
  de: {
    ...PARTNERS_TRANSLATIONS.de,
    ...CAREERS_TRANSLATIONS.de,
    ...COMMUNITY_TRANSLATIONS.de,
    ...SERVICES_SUPPORT_TRANSLATIONS.de,
    ...PRODUCTS_TRANSLATIONS.de,
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
    select_language: "Sprache Auswählen",

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
      { label: 'Branchen', children: ["Automobilindustrie","Konsumgüter","Elektronik & High-Tech","Staat & Öffentlicher Sektor","Medien & Unterhaltung","Telekommunikation","Vertrieb & Großhandel","Energie & Versorger","Fertigung & Industrie","Einzelhandel (Retail)","Hotelmanagement","Kapitalmärkte","Life Sciences & Gesundheit","Informationsdienste","Öffentliche Dienste","Reisen, Transport & Logistik","Bauwesen","Bildungswesen"] },
      { label: 'Produkte', children: ['Individuelle Softwareentwicklung','DSTELLAR ERP','DSTELLAR E-Commerce','DSTELLAR Healthcare Suite','DSTELLAR Logistik & Lager','DSTELLAR Vertrieb & Buchhaltung','Business Intelligence & Analysen','Mobile & Web-Apps'] },
      { label: 'SAP-Beratung', children: ['S/4HANA-Implementierungen','Finanzen & Controlling (FICO)','Vertrieb & Logistik (SD · MM · WM)','Produktion & Planung (PP)','SuccessFactors (HR)','ABAP & Fiori Eigenentwicklungen','SAP-Integrations & API-Suite','Ariba & Supply-Chain-Lösungen'] },
      { label: 'Dienstleistungen & Support', children: ['Künstliche Intelligenz & ML','Cloud-Migration & DevSecOps','Cybersicherheit & Compliance','Digitale Transformation','Technologie-Beratung','Premium-Support & Managed AMS','Dstellar Hilfe-Portal'] },
      { label: 'Schulungen', children: ['Dstellar Schulungszentrum','Zertifizierte SAP-Kurse','Dstellar Prüfungsvorbereitung','Bildungspartner-Programm','Kostenloses openDstellar-Training'] },
      { label: 'Partner', children: ['Partner finden','Strategische Partner','Partner werden','Verzeichnis zertifizierter Lösungen','Outsourcing-Partner'] },
      { label: 'Karriere', children: ['Stellensuche & Stellenangebote','Studenten & Absolventen','Ihr Karriereweg','Warum Dstellar'] },
      { label: 'Community', children: ['Community-Forum','Experten-Blogs','Fragen & Antworten','Events & Meetups','Ressourcen-Bibliothek'] },
      { label: 'Dstellar entdecken', children: ['Wer wir sind','Geschichte','Nachhaltigkeit & CSR','Innovation & Forschung','Investor Relations','Sport-Sponsoring'] },
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
    ],

    // Subpages localization
    who_we_are: {
      title: "Über uns",
      subtitle: "Ein globales Kollektiv aus SAP-Architekten, Softwareentwicklern und Branchenexperten.",
      mission_title: "Unsere Mission",
      mission_desc: "Unternehmen durch erstklassige Softwarelösungen zu mehr Geschwindigkeit, Agilität und Präzision zu verhelfen.",
      vision_title: "Unsere Vision",
      vision_desc: "Weltweit der vertrauenswürdigste Gold-Standard-Partner für SAP-Transformationen der nächsten Generation zu sein.",
      values_title: "Unsere Kernwerte",
      values: [
        { t: "Technische Exzellenz", d: "Wir schreiben sauberen Code, entwerfen Clean-Core-Architekturen und stehen hinter unserer Arbeit." },
        { t: "Kundenfokus", d: "Wir richten uns vollständig nach den Zielen unserer Kunden. Keine Ausreden, keine halben Sachen." },
        { t: "Ständige Innovation", d: "Wir erforschen und implementieren kontinuierlich KI-gestützte Automatisierung für ERP-Systeme." }
      ]
    },
    history: {
      title: "Geschichte",
      subtitle: "Seit 2013 leistet Dstellar Pionierarbeit bei maßgeschneiderter Software und Cloud-basierten SAP-Migrationen.",
      events: [
        { y: "2013", t: "Die Gründung", d: "Dstellar startet als Boutique-Agentur für maßgeschneiderte Software- und Datenbankentwicklung in Toronto." },
        { y: "2017", t: "Europäische Expansion", d: "Eröffnung unseres Büros in Madrid zur Unterstützung der wachsenden Zahl von S/4HANA-Migrationen in Westeuropa." },
        { y: "2021", t: "SAP-Gold-Partnerschaft", d: "Auszeichnung als führender SAP Gold Partner mit nachgewiesener Beratungskompetenz." },
        { y: "2025", t: "Ära der Unternehmens-KI", d: "Dstellar führt KI-gestützte Joule-Assistenten-Integrationen und maßgeschneiderte Cloud-Plattformen ein." }
      ]
    },
    leadership: {
      title: "Unternehmensführung",
      subtitle: "Lernen Sie die Architekten und Führungskräfte kennen, die Dstellars globale Projekte leiten.",
      members: [
        { name: "Marcus Vance", role: "CEO", bio: "Über 20 Jahre Erfahrung in der Unternehmens-IT. Ehemaliger Senior Director bei SAP EMEA." },
        { name: "Dr. Elena Rostova", role: "CTO", bio: "Promotion in verteilten Systemen. Architektin der Dstellar Custom Suite." },
        { name: "Sanjay Mehta", role: "Leiter SAP-Architektur", bio: "Erfolgreiche Leitung von über 50 End-to-End S/4HANA-Migrationen auf 4 Kontinenten." }
      ]
    },
    sustainability: {
      title: "Nachhaltigkeit & CSR",
      subtitle: "Wir glauben daran, dass Unternehmenssoftware ökologische Nachhaltigkeit fördern sollte.",
      metrics_title: "Umweltkennzahlen",
      metrics: [
        { label: "CO2-Reduktion bei Kunden", value: "35%" },
        { label: "Papierloser Betrieb", value: "100%" },
        { label: "Grüne Cloud-Migrationen", value: "250+" }
      ],
      desc: "Mit unseren Green Ledger-Implementierungen ermöglichen wir es Unternehmen, CO2-Fußabdruckdaten in Echtzeit direkt neben Finanzkennzahlen zu erfassen.",
      esr_title: "ESR (Umwelt- und Sozialverantwortung) Integration",
      esr_desc: "Wir betten die ESR-Compliance direkt in die zentralen ERP-Architekturen der Unternehmen ein. Dies ermöglicht es Organisationen, sowohl die Auditierung von Umweltauswirkungen als auch die Governance der sozialen Verantwortung in globalen Lieferketten zu automatisieren."
    },
    innovation: {
      title: "Innovation & Forschung",
      subtitle: "Entwicklung der Geschäftssysteme von morgen in den Dstellar Labs.",
      projects: [
        { t: "Joule-Assistenten-Integrationen", d: "Nutzung des dynamischen SAP-Kopiloten zur Automatisierung von Abrechnungsworkflows." },
        { t: "Clean-Core-Refaktorierung", d: "Automatisierte Analysetools zur Extraktion von individuellem Code und Anpassung an Standard-Upgrade-Pfade." },
        { t: "Prädiktiver AMS-Support", d: "KI-gestützte Ausfallmodellierung zur Behebung von Datenbankproblemen vor Produktionsbeeinträchtigung." }
      ]
    },
    investor_relations: {
      title: "Investor Relations",
      subtitle: "Robuste finanzielle Stabilität gestützt auf zweistelliges Wachstum im Jahresvergleich.",
      highlights: [
        { label: "Umsatzwachstum (Vorjahr)", value: "+24%" },
        { label: "Unternehmenskunden", value: "300+" },
        { label: "Globale Hubs", value: "4 Hubs" }
      ],
      desc: "Dstellar is ein inhabergeführtes Unternehmen mit solider Kapitalstruktur, optimal positioniert für langfristiges Wachstum."
    },
    sports_sponsorships: {
      title: "Sport-Sponsoring",
      subtitle: "Geschwindigkeit, Präzision und ingenieurstechnische Exzellenz.",
      desc: "Dstellar ist stolzer Sponsor der Formula E und weltweiter E-Sports-Ligen. Wir sind überzeugt, dass Höchstleistungen auf der Rennstrecke die Effizienz der von uns entworfenen Softwarearchitekturen widerspiegeln."
    },
    trainings_hub: {
      badge: "DSTELLAR AKADEMIE",
      title: "Lernzentrum",
      subtitle: "Ihr Tor zur SAP-Kompetenz. Entdecken Sie kuratierte Lernpfade, entwickelt von zertifizierten SAP-Architekten.",
      cta: "Jetzt Lernen",
      pathways: [
        { title: "SAP S/4HANA Grundlagen", desc: "Beherrschen Sie die Grundlagen der nächsten ERP-Generation von SAP mit praxisnahen Übungen.", level: "Intermediate", duration: "40 Std." },
        { title: "FICO für Finanzführungskräfte", desc: "Tiefgehende Einblicke in Finanzbuchhaltung und Controlling — vom Hauptbuch bis zur Kostenstellenrechnung.", level: "Advanced", duration: "56 Std." },
        { title: "SAP Fiori UX Design", desc: "Erstellen Sie intuitive Unternehmensanwendungen mit SAP Fiori-Prinzipien und SAPUI5-Komponenten.", level: "Intermediate", duration: "32 Std." },
        { title: "ABAP Clean Code", desc: "Schreiben Sie modernen, wartbaren ABAP-Code nach Clean-Core-Prinzipien und Best Practices.", level: "Advanced", duration: "48 Std." },
        { title: "Supply Chain Excellence", desc: "Optimieren Sie Ihre Lieferkette mit SAP MM, WM und EWM — von der Beschaffung bis zur Lagerausführung.", level: "Intermediate", duration: "36 Std." },
        { title: "KI in SAP-Umgebungen", desc: "Nutzen Sie SAP Joule und integrierte KI-Fähigkeiten zur Optimierung Ihrer Unternehmensabläufe.", level: "Specialist", duration: "24 Std." }
      ]
    },
    trainings_courses: {
      badge: "ZERTIFIZIERTE SCHULUNG",
      title: "Zertifizierte SAP-Kurse",
      subtitle: "Branchenweit anerkannte Zertifizierungen, die Ihre SAP-Expertise bestätigen und Ihre Karriere beschleunigen.",
      cta: "Jetzt Anmelden",
      courses: [
        { code: "SAP-FICO-001", title: "SAP Finanzbuchhaltung (FI)", desc: "Umfasst Hauptbuch, Kreditoren, Debitoren, Anlagenrechnung und Monatsabschluss.", level: "Professional", duration: "5 Tage" },
        { code: "SAP-CO-002", title: "SAP Controlling (CO)", desc: "Kostenstellenrechnung, Profitcenterrechnung, Innenaufträge und Produktkostenplanung.", level: "Professional", duration: "4 Tage" },
        { code: "SAP-SD-003", title: "SAP Vertrieb & Verteilung (SD)", desc: "Auftragsabwicklung, Preisfindung, Lieferung, Fakturierung und Kreditmanagement.", level: "Professional", duration: "5 Tage" },
        { code: "SAP-MM-004", title: "SAP Materialwirtschaft (MM)", desc: "Beschaffungsprozess, Bestandsverwaltung, Rechnungsprüfung und Lieferantenverwaltung.", level: "Associate", duration: "4 Tage" },
        { code: "SAP-S4H-005", title: "SAP S/4HANA Migration", desc: "Migrationsszenarien, Konvertierungsansätze, Systemlandschaft und Go-Live-Strategien.", level: "Expert", duration: "6 Tage" },
        { code: "SAP-AI-006", title: "SAP KI & Joule Integration", desc: "Implementierung KI-gesteuerter Geschäftsprozesse mit SAP Business AI und Joule.", level: "Specialist", duration: "3 Tage" }
      ]
    },
    trainings_prep: {
      badge: "PRÜFUNGSVORBEREITUNG",
      title: "Zertifizierungsvorbereitung",
      subtitle: "Strukturierte Vorbereitungsprogramme, damit Sie SAP-Zertifizierungsprüfungen beim ersten Versuch bestehen.",
      cta: "Vorbereitung Starten",
      programs: [
        { exam: "C_TS4FI_2023", title: "SAP Certified Associate – SAP S/4HANA Finanzbuchhaltung", topics: ["Hauptbuch", "Kreditoren & Debitoren", "Anlagenrechnung", "Bankenbuchhaltung"], passRate: "94%", duration: "3 Wochen" },
        { exam: "C_TS4CO_2023", title: "SAP Certified Associate – SAP S/4HANA Management Accounting", topics: ["Kostenstellen", "Profitcenter", "Innenaufträge", "Produktkosten"], passRate: "91%", duration: "3 Wochen" },
        { exam: "C_TS410_2022", title: "SAP Certified Associate – Geschäftsprozessintegration", topics: ["Procure-to-Pay", "Order-to-Cash", "Plan-to-Produce", "Hire-to-Retire"], passRate: "89%", duration: "4 Wochen" }
      ],
      questions: [
        { q: "Welche der folgenden ist die ERP-Suite der nächsten Generation von SAP?", options: ["SAP ECC", "SAP S/4HANA", "SAP Business One", "SAP R/3"], correct: 1 },
        { q: "Welche Tabelle ist in SAP S/4HANA Finance die einzige Quelle der Wahrheit für alle Buchhaltungsdaten?", options: ["BKPF", "BSEG", "ACDOCA", "COEP"], correct: 2 },
        { q: "Was bedeutet 'Clean Core' in der modernen SAP-Architektur?", options: ["Löschen aller Datenbankprotokolle", "Ausführen der Datenbank nur on-premises", "Trennen von benutzerdefinierten Modifikationen vom Standardcode mithilfe von APIs und BTP", "Verwenden einer sauberen grafischen Benutzeroberfläche"], correct: 2 }
      ],
      question_label: "Frage",
      timer_label: "Verbleibende Zeit",
      score_label: "Ihr Testergebnis"
    },
    trainings_program: {
      badge: "BILDUNGSPARTNERSCHAFT",
      title: "Bildungspartner-Programm",
      subtitle: "Werden Sie Partner der Dstellar Academy und bieten Sie erstklassige SAP-Schulungen an Ihrer Einrichtung an.",
      cta: "Jetzt Bewerben",
      tiers: [
        { name: "Bronze", price: "Kostenlos", features: ["Zugang zu Lernmaterialien", "Gebrandete Kursvorlagen", "Online-Dozenten-Portal", "Bis zu 50 Teilnehmer/Jahr"] },
        { name: "Silber", price: "2.200 €/Jahr", features: ["Alles aus Bronze", "Co-gebrandete Zertifizierungen", "Dedizierter Partnermanager", "Bis zu 250 Teilnehmer/Jahr", "LMS-Integration"] },
        { name: "Gold", price: "5.500 €/Jahr", features: ["Alles aus Silber", "Dozentenschulung vor Ort", "Individuelle Lehrplanerstellung", "Unbegrenzte Teilnehmer", "Umsatzbeteiligungsmodell", "Premier-Listungseintrag"] }
      ]
    },
    trainings_free: {
      badge: "KOSTENLOSER ZUGANG",
      title: "Kostenloses openDstellar-Training",
      subtitle: "Starten Sie Ihr SAP-Lernen kostenlos. Unsere freie openDstellar-Bibliothek gewährt jedem Zugang zu Grundlagenwissen.",
      cta: "Kostenlose Kurse Aufrufen",
      modules: [
        { title: "SAP-Grundnavigation", desc: "Lernen Sie das SAP GUI, den Fiori-Launchpad und grundlegende Navigationsmuster kennen.", duration: "2 Std.", icon: "🧭" },
        { title: "Einführung in ERP", desc: "Verstehen Sie, was ERP bedeutet, warum Unternehmen es nutzen und wie SAP in die Unternehmenslandschaft passt.", duration: "3 Std.", icon: "🏢" },
        { title: "SAP-Datenmodell-Grundlagen", desc: "Erlernen Sie Mandanten, Buchungskreise, Werke und andere wichtige Organisationselemente in SAP.", duration: "2,5 Std.", icon: "🗂️" },
        { title: "Finanzgrundlagen in SAP", desc: "Ein nicht-technischer Überblick über Finanzprozesse in SAP S/4HANA.", duration: "3 Std.", icon: "💰" },
        { title: "Supply Chain in SAP", desc: "Einführung in Einkauf, Lagerbestand und Logistik mit SAP-Modulen.", duration: "3,5 Std.", icon: "🔗" },
        { title: "SAP-Karrierepfade", desc: "Erkunden Sie verschiedene SAP-Karrierewege — vom Berater über den Entwickler bis zum Architekten.", duration: "1 Std.", icon: "🚀" }
      ],
      videos_title: "Kostenlose Videovorträge",
      videos: [
        { title: "SAP-Grundnavigation", duration: "2 Std.", instructor: "Sarah Jenkins, Leitende SAP-Architektin" },
        { title: "Einführung in ERP-Systeme", duration: "3 Std.", instructor: "Marcus Vance, CEO & SAP-Veteran" },
        { title: "SAP-Datenmodell-Grundlagen", duration: "2,5 Std.", instructor: "Sanjay Mehta, Leiter der SAP-Architektur" },
        { title: "Finanzgrundlagen in SAP S/4HANA", duration: "3 Std.", instructor: "Dr. Elena Rostova, CTO" },
        { title: "Lieferkette & Logistik in SAP", duration: "3,5 Std.", instructor: "Sanjay Mehta, Leiter der SAP-Architektur" },
        { title: "Karrierepfade in der SAP-Beratung", duration: "1 Std.", instructor: "Marcus Vance, CEO & SAP-Veteran" }
      ]
    }
  },
  fr: {
    ...PARTNERS_TRANSLATIONS.fr,
    ...CAREERS_TRANSLATIONS.fr,
    ...COMMUNITY_TRANSLATIONS.fr,
    ...SERVICES_SUPPORT_TRANSLATIONS.fr,
    ...PRODUCTS_TRANSLATIONS.fr,
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
    select_language: "Sélectionner la Langue",

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
      { label: 'Industries', children: ["Automobile","Produits de Consommation","Électronique & Haute Technologie","Gouvernement & Secteur Public","Médias & Divertissement","Télécommunications","Distribution & Vente en Gros","Énergie & Services Publics","Fabrication & Industrie","Vente au Détail (Retail)","Gestion Hôtelière","Marchés de Capitaux","Sciences de la Vie & Santé","Services d'Information","Services Publics","Voyages, Transport & Logistique","Construction","Éducation"] },
      { label: 'Produits', children: ['Développement de Logiciels sur Mesure','DSTELLAR ERP','E-Commerce DSTELLAR','Suite Santé DSTELLAR','Logistique & Entrepôt DSTELLAR','Ventes & Comptabilité DSTELLAR','Business Intelligence & Analytique','Applications Mobiles & Web'] },
      { label: 'Conseil SAP', children: ['Intégrations S/4HANA','Finance & Contrôle de Gestion (FICO)','Ventes & Logistique (SD · MM · WM)','Planification de la Production (PP)','SuccessFactors (RH)','Développement ABAP & Fiori sur Mesure','Suite d\'Intégration & APIs SAP','Solutions Ariba & Chaîne Logistique'] },
      { label: 'Services & Support', children: ['Intelligence Artificielle & ML','Migration Cloud & DevSecOps','Cybersécurité & Conformité','Transformation Numérique','Services de Conseil Technologique','Support Premium & AMS Géré','Portail d\'Aide Dstellar'] },
      { label: 'Formations', children: ['Dstellar Learning Hub','Cours Certifiés SAP','Préparation aux Certifications Dstellar','Programme de Partenaires Éducatifs','Formation Gratuite openDstellar'] },
      { label: 'Partenaires', children: ['Trouver un Partenaire','Partenaires Strategiques','Devenir Partenaire','Répertoire des Solutions Certifiées','Partenaires de Sous-traitance'] },
      { label: 'Carrières', children: ['Recherche d\'Emploi & Postes Ouverts','Étudiants & Jeunes Diplômés','Votre Plan de Carrière','Pourquoi Nous Rejoindre'] },
      { label: 'Communauté', children: ['Forum de la Communauté','Blogs d\'Experts','Questions & Réponses','Événements & Meetups','Bibliothèque de Ressources'] },
      { label: 'Découvrir Dstellar', children: ['Qui Nous Sommes','Histoire','Développement Durable & RSE','Innovation & Recherche','Relations Investisseurs','Sponsorings Sportifs'] },
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
    ],

    // Subpages localization
    who_we_are: {
      title: "Qui Sommes-Nous",
      subtitle: "Un collectif mondial d'architectes SAP, de développeurs de logiciels et d'experts sectoriels.",
      mission_title: "Notre Mission",
      mission_desc: "Fournir des solutions logicielles permettant aux entreprises de fonctionner avec vitesse, agilité et précision.",
      vision_title: "Notre Vision",
      vision_desc: "Être le partenaire Gold standard le plus fiable pour les transformations SAP de nouvelle génération dans le monde entier.",
      values_title: "Valeurs Fondamentales",
      values: [
        { t: "Excellence Technique", d: "Nous écrivons du code propre, concevons des architectures clean-core et garantissons la qualité de notre travail." },
        { t: "Obsession Client", d: "Nous nous alignons entièrement avec les objectifs de nos clients. Pas d'excuses, pas d'intermédiaires." },
        { t: "Innovation Continue", d: "Nous recherchons et mettons en œuvre en permanence des solutions d'automatisation IA pour les ERP." }
      ]
    },
    history: {
      title: "Histoire",
      subtitle: "Depuis 2013, Dstellar est un pionnier des logiciels sur mesure et des migrations SAP intégrées au cloud.",
      events: [
        { y: "2013", t: "La Fondation", d: "Dstellar débute en tant qu'agence de développement de logiciels et de bases de données sur mesure à Toronto." },
        { y: "2017", t: "Expansion Européenne", d: "Ouverture de notre bureau à Madrid pour accompagner les projets croissants de migration S/4HANA en Europe de l'Ouest." },
        { y: "2021", t: "Partenariat SAP Gold", d: "Reconnu comme partenaire SAP Gold de premier plan, certifié pour notre expertise en conseil." },
        { y: "2025", t: "Ère de l'IA d'Entreprise", d: "Dstellar déploie l'assistant intelligent Joule piloté par l'IA et des plateformes cloud personnalisées." }
      ]
    },
    leadership: {
      title: "Gouvernance & Leadership",
      subtitle: "Découvrez l'équipe dirigeante et les architectes senior qui pilotent nos projets mondiaux.",
      members: [
        { name: "Marcus Vance", role: "CEO", bio: "Plus de 20 ans d'expérience dans les technologies d'entreprise. Ancien directeur principal chez SAP EMEA." },
        { name: "Dr. Elena Rostova", role: "CTO", bio: "Doctorat en systèmes distribués. Architecte de la suite logicielle Dstellar Custom." },
        { name: "Sanjay Mehta", role: "Directeur de l'Architecture SAP", bio: "A dirigé plus de 50 projets de migration S/4HANA de bout en bout sur 4 continents." }
      ]
    },
    sustainability: {
      title: "Développement Durable & RSE",
      subtitle: "Nous croyons que les progiciels de gestion d'entreprise doivent encourager la durabilité environnementale.",
      metrics_title: "Indicateurs d'Impact Environnemental",
      metrics: [
        { label: "Réduction Carbone des Clients", value: "35%" },
        { label: "Opérations Zéro Papier", value: "100%" },
        { label: "Migrations Cloud Écologiques", value: "250+" }
      ],
      desc: "À travers nos implémentations de Green Ledger, nous permettons aux entreprises de suivre en temps réel leurs données d'empreinte carbone à côté de leurs indicateurs financiers.",
      esr_title: "Intégration ESR (Responsabilité Environnementale et Sociale)",
      esr_desc: "Nous intégrons la conformité ESR directement dans les architectures ERP de l'entreprise. Cela permet aux organisations d'automatiser l'audit d'impact environnemental et la gouvernance de la responsabilité sociale dans les chaînes d'approvisionnement mondiales."
    },
    innovation: {
      title: "Innovation & Recherche",
      subtitle: "Concevoir les systèmes d'information de demain dans les Laboratoires Dstellar.",
      projects: [
        { t: "Intégrations de l'Assistant Joule", d: "Utilisation du copilote intelligent de SAP pour automatiser les flux de facturation client." },
        { t: "Refactorisation Clean Core", d: "Outils d'analyse automatisés pour extraire les codes spécifiques et les aligner sur les versions standards." },
        { t: "Support AMS Prédictif", d: "Modélisation des incidents par l'IA pour corriger les dysfonctionnements système avant tout impact en production." }
      ]
    },
    investor_relations: {
      title: "Relations Investisseurs",
      subtitle: "Une rentabilité et une stabilité financière solides soutenues par une croissance annuelle à deux chiffres.",
      highlights: [
        { label: "Croissance des Revenus (an)", value: "+24%" },
        { label: "Clients Entreprises", value: "300+" },
        { label: "Centres de Services", value: "4 Centres" }
      ],
      desc: "Dstellar est une société par actions privée disposant de structures de capitaux solides, nous positionnant pour un développement à long terme."
    },
    sports_sponsorships: {
      title: "Sponsorings Sportifs",
      subtitle: "Vitesse, précision et excellence technique.",
      desc: "Dstellar est un fier sponsor officiel de la Formula E et des ligues d'e-sports mondiales. Nous pensons que l'ingénierie de pointe en course automobile reflète la performance des architectures logicielles que nous concevons."
    },
    trainings_hub: {
      badge: "ACADÉMIE DSTELLAR",
      title: "Centre d'Apprentissage",
      subtitle: "Votre porte d'entrée vers la maîtrise de SAP. Explorez des parcours d'apprentissage conçus par des architectes SAP certifiés.",
      cta: "Commencer à Apprendre",
      pathways: [
        { title: "Fondamentaux SAP S/4HANA", desc: "Maîtrisez les fondamentaux de la plateforme ERP de nouvelle génération de SAP avec des exercices pratiques.", level: "Intermediate", duration: "40 h" },
        { title: "FICO pour Dirigeants Financiers", desc: "Plongez dans les modules de Comptabilité Financière et Contrôle — du Grand Livre aux centres de coûts.", level: "Advanced", duration: "56 h" },
        { title: "Conception UX SAP Fiori", desc: "Créez des applications d'entreprise intuitives avec les principes SAP Fiori et les composants SAPUI5.", level: "Intermediate", duration: "32 h" },
        { title: "ABAP Code Propre", desc: "Rédigez un code ABAP moderne et maintenable en suivant les principes clean-core.", level: "Advanced", duration: "48 h" },
        { title: "Excellence Supply Chain", desc: "Optimisez votre chaîne logistique avec SAP MM, WM et EWM — de l'approvisionnement à l'exécution en entrepôt.", level: "Intermediate", duration: "36 h" },
        { title: "IA dans les Environnements SAP", desc: "Tirez parti de SAP Joule et des capacités IA intégrées pour optimiser vos flux de travail.", level: "Specialist", duration: "24 h" }
      ]
    },
    trainings_courses: {
      badge: "FORMATION CERTIFIÉE",
      title: "Cours SAP Certifiés",
      subtitle: "Des certifications reconnues par l'industrie qui valident votre expertise SAP et accélèrent votre carrière.",
      cta: "S'inscrire Maintenant",
      courses: [
        { code: "SAP-FICO-001", title: "SAP Comptabilité Financière (FI)", desc: "Couvre le grand livre, les fournisseurs, les clients, la comptabilité des immobilisations et la clôture mensuelle.", level: "Professional", duration: "5 jours" },
        { code: "SAP-CO-002", title: "SAP Contrôle de Gestion (CO)", desc: "Comptabilité des centres de coûts, des centres de profits, ordres internes et planification des coûts.", level: "Professional", duration: "4 jours" },
        { code: "SAP-SD-003", title: "SAP Ventes & Distribution (SD)", desc: "Traitement des commandes, tarification, livraison, facturation et gestion du crédit.", level: "Professional", duration: "5 jours" },
        { code: "SAP-MM-004", title: "SAP Gestion des Matériaux (MM)", desc: "Cycle d'achat, gestion des stocks, contrôle des factures et gestion des fournisseurs.", level: "Associate", duration: "4 jours" },
        { code: "SAP-S4H-005", title: "Migration SAP S/4HANA", desc: "Scénarios de migration, approches de conversion, transformation du paysage système et stratégies de démarrage.", level: "Expert", duration: "6 jours" },
        { code: "SAP-AI-006", title: "SAP IA & Intégration Joule", desc: "Implémentation de processus métier basés sur l'IA avec SAP Business AI et Joule.", level: "Specialist", duration: "3 jours" }
      ]
    },
    trainings_prep: {
      badge: "PRÉPARATION EXAMEN",
      title: "Préparation aux Certifications",
      subtitle: "Programmes de préparation structurés pour réussir les examens de certification SAP dès la première tentative.",
      cta: "Démarrer la Préparation",
      programs: [
        { exam: "C_TS4FI_2023", title: "SAP Certified Associate – SAP S/4HANA Comptabilité Financière", topics: ["Grand Livre", "Fournisseurs & Clients", "Comptabilité Immobilisations", "Comptabilité Bancaire"], passRate: "94%", duration: "3 semaines" },
        { exam: "C_TS4CO_2023", title: "SAP Certified Associate – SAP S/4HANA Contrôle de Gestion", topics: ["Centres de Coûts", "Centres de Profits", "Ordres Internes", "Coûts Produits"], passRate: "91%", duration: "3 semaines" },
        { exam: "C_TS410_2022", title: "SAP Certified Associate – Intégration Processus Métier", topics: ["Procure-to-Pay", "Order-to-Cash", "Plan-to-Produce", "Hire-to-Retire"], passRate: "89%", duration: "4 semaines" }
      ],
      questions: [
        { q: "Lequel des éléments suivants est la suite ERP de nouvelle génération de SAP?", options: ["SAP ECC", "SAP S/4HANA", "SAP Business One", "SAP R/3"], correct: 1 },
        { q: "Dans SAP S/4HANA Finance, quelle table est la source unique de vérité pour toutes les données comptables?", options: ["BKPF", "BSEG", "ACDOCA", "COEP"], correct: 2 },
        { q: "Que signifie 'Clean Core' dans l'architecture SAP moderne?", options: ["Supprimer tous les journaux de base de données", "Exécuter la base de données uniquement sur site", "Séparer les modifications personnalisées du code standard à l'aide d'APIs et de BTP", "Utiliser une interface graphique épurée"], correct: 2 }
      ],
      question_label: "Question",
      timer_label: "Temps restant",
      score_label: "Votre score blanc"
    },
    trainings_program: {
      badge: "PARTENARIAT ÉDUCATIF",
      title: "Programme Partenaire Éducatif",
      subtitle: "Devenez partenaire de l'Académie Dstellar pour délivrer des formations SAP de classe mondiale dans votre établissement.",
      cta: "Postuler Maintenant",
      tiers: [
        { name: "Bronze", price: "Gratuit", features: ["Accès aux matériaux pédagogiques", "Modèles de cours branding", "Portail formateurs en ligne", "Jusqu'à 50 étudiants/an"] },
        { name: "Argent", price: "2 200 €/an", features: ["Tout du Bronze", "Certifications co-brandées", "Responsable partenaire dédié", "Jusqu'à 250 étudiants/an", "Intégration LMS"] },
        { name: "Or", price: "5 500 €/an", features: ["Tout de l'Argent", "Formation formateurs sur site", "Développement curriculum personnalisé", "Étudiants illimités", "Modèle de partage des revenus", "Listing premium"] }
      ]
    },
    trainings_free: {
      badge: "ACCÈS GRATUIT",
      title: "Formation Gratuite openDstellar",
      subtitle: "Commencez votre apprentissage SAP sans frais. Notre bibliothèque gratuite openDstellar donne à chacun accès aux connaissances fondamentales.",
      cta: "Accéder aux Cours Gratuits",
      modules: [
        { title: "Navigation de Base SAP", desc: "Familiarisez-vous avec le SAP GUI, le Fiori launchpad et les schémas de navigation principaux.", duration: "2 h", icon: "🧭" },
        { title: "Introduction à l'ERP", desc: "Comprenez ce qu'est l'ERP, pourquoi les entreprises l'utilisent et comment SAP s'intègre dans l'écosystème d'entreprise.", duration: "3 h", icon: "🏢" },
        { title: "Fondamentaux du Modèle de Données SAP", desc: "Apprenez les mandants, sociétés, usines et autres éléments organisationnels clés dans SAP.", duration: "2,5 h", icon: "🗂️" },
        { title: "Bases Financières dans SAP", desc: "Un aperçu non technique du fonctionnement des processus financiers dans SAP S/4HANA.", duration: "3 h", icon: "💰" },
        { title: "Supply Chain dans SAP", desc: "Introduction aux achats, stocks et logistique à l'aide des modules SAP.", duration: "3,5 h", icon: "🔗" },
        { title: "Parcours de Carrière SAP", desc: "Explorez les différentes carrières SAP — du consultant au développeur en passant par l'architecte.", duration: "1 h", icon: "🚀" }
      ],
      videos_title: "Cours Vidéo Gratuits",
      videos: [
        { title: "Bases de la Navigation SAP", duration: "2 h", instructor: "Sarah Jenkins, Architecte SAP Principale" },
        { title: "Introduction aux Systèmes ERP", duration: "3 h", instructor: "Marcus Vance, CEO & Vétéran SAP" },
        { title: "Fondamentaux du Modèle de Données SAP", duration: "2,5 h", instructor: "Sanjay Mehta, Directeur de l'Architecture SAP" },
        { title: "Bases de la Finance dans SAP S/4HANA", duration: "3 h", instructor: "Dr Elena Rostova, CTO" },
        { title: "Chaîne Logistique & Flux dans SAP", duration: "3,5 h", instructor: "Sanjay Mehta, Directeur de l'Architecture SAP" },
        { title: "Parcours de Carrière dans le Conseil SAP", duration: "1 h", instructor: "Marcus Vance, CEO & Vétéran SAP" }
      ]
    }
  },
  ja: {
    ...PARTNERS_TRANSLATIONS.ja,
    ...CAREERS_TRANSLATIONS.ja,
    ...COMMUNITY_TRANSLATIONS.ja,
    ...SERVICES_SUPPORT_TRANSLATIONS.ja,
    ...PRODUCTS_TRANSLATIONS.ja,
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
    solutions: "個 of ソリューション",
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
    select_language: "言語を選択",

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
      { label: '提供中の業界', children: ["自動車産業","消費財","電子・ハイテク","政府・公共機関","メディア＆エンターテインメント","電気通信","流通・卸売","電力・ガス・水道","製造・産業機械","小売 (Retail)","ホテル管理","資本市場","ライフサイエンス・ヘルスケア","情報サービス","公共サービス","旅行・輸送・運行管理","建設・エンジニアリング","教育・学習支援"] },
      { label: 'プロダクト', children: ['カスタムソフトウェア開発','DSTELLAR ERP','DSTELLAR Eコマース','DSTELLAR ヘルスケアスイート','DSTELLAR 物流・倉庫','DSTELLAR 販売・会計','ビジネスインテリジェンス・分析','モバイル＆Webアプリ'] },
      { label: 'SAPコンサルティング', children: ['S/4HANA移行・新規導入','財務会計・管理会計 (FICO)','販売管理・在庫購買・倉庫管理 (SD · MM · WM)','生産管理 (PP)','SuccessFactors (人事)','ABAP & Fiori カスタム開発','SAP統合＆APIスイート','Ariba & サプライチェーン解決策'] },
      { label: 'サービス＆サポート', children: ['人工知能＆機械学習','クラウド移行＆DevSecOps','サイバーセキュリティ＆コンプライアンス','デジタルトランスフォーメーション','テクノロジー・アドバイザリー','プレミアムサポート＆AMS','Dstellarヘルプポータル'] },
      { label: 'トレーニング', children: ['Dstellarラーニングハブ','公式SAP認定コース','Dstellar試験合格支援','教育機関パートナープログラム','無料 openDstellarトレーニング'] },
      { label: 'パートナー', children: ['パートナーを探す','戦略的パートナー','パートナーになる','公式ソリューションカタログ','アウトソーシングパートナー'] },
      { label: '採用情報', children: ['求人検索・募集要項','新卒・学生向け採用','キャリアパス','Dstellarで働く理由'] },
      { label: 'コミュニティ', children: ['コミュニティフォーラム','エキスパートブログ','Q&Aとフォーラム','イベント＆勉強会','資料ライブラリ'] },
      { label: 'Dstellarを知る', children: ['私たちについて','沿革','サステナビリティ＆CSR','イノベーション＆研究','投資家情報','スポーツ協賛'] },
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
      { t: 'サステイナビリティ', d: 'グリーン元帳、温室効果ガス排出トラッキング、循環サプライチェーン。' },
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
    ],

    // Subpages localization
    who_we_are: {
      title: "私たちについて",
      subtitle: "SAPアーキテクト、ソフトウェア開発者、業界エキスパートからなるグローバルな技術チーム。",
      mission_title: "企業使命",
      mission_desc: "企業が迅速、俊敏、かつ精密に業務を実行できるエンタープライズソリューションを提供します。",
      vision_title: "企業ビジョン",
      vision_desc: "グローバルにおける次世代SAP移行プロジェクトの最も信頼されるゴールドスタンダードパートナーになります。",
      values_title: "行動指針",
      values: [
        { t: "技術的卓越性", d: "クリーンなコードを書き、クリーンコア（Clean Core）設計を追求し、自社の品質を保証します。" },
        { t: "顧客満足の追求", d: "お客様のビジネス目標と完全に同調します。丸投げや言い訳は一切ありません。" },
        { t: "継続的イノベーション", d: "エンタープライズリソースプランニングに向けたAIによる自動化技術を絶えず研究・導入します。" }
      ]
    },
    history: {
      title: "沿革",
      subtitle: "2013年の創業以来、Dstellarはカスタムソフトウェアとクラウド統合型SAP移行の先駆者であり続けています。",
      events: [
        { y: "2013", t: "会社設立", d: "Dstellarは、トロントでカスタムソフトウェアおよびデータベース開発のブティック企業としてスタートしました。" },
        { y: "2017", t: "ヨーロッパ事業展開", d: "西欧におけるS/4HANA移行需要の高まりを受け、マドリッドオフィスを開設しました。" },
        { y: "2021", t: "SAPゴールドパートナー", d: "卓越した技術力と支援実績が評価され、SAP認定ゴールドパートナーに指定されました。" },
        { y: "2025", t: "企業向けAI時代", d: "AI主導のJouleアシスタント連携およびカスタムクラウド基盤を順次展開しています。" }
      ]
    },
    leadership: {
      title: "コーポレートガバナンス",
      subtitle: "Dstellarのグローバルデリバリーを統率する主要メンバーをご紹介します。",
      members: [
        { name: "Marcus Vance", role: "最高経営責任者 (CEO)", bio: "エンタープライズテック分野で20年以上の経験。元SAP欧州・中東・アフリカ部門シニアディレクター。" },
        { name: "Dr. Elena Rostova", role: "最高技術責任者 (CTO)", bio: "分散システム分野の博士号取得。Dstellarカスタム製品のチーフアーキテクト。" },
        { name: "Sanjay Mehta", role: "SAPアーキテクチャ責任者", bio: "世界4大陸にわたり、50件以上のエンドツーエンドS/4HANA移行プロジェクトを主導。" }
      ]
    },
    sustainability: {
      title: "サステナビリティ＆CSR",
      subtitle: "私たちは、ビジネスシステムが環境持続可能性に貢献すべきであると信じています。",
      metrics_title: "環境への影響指標",
      metrics: [
        { label: "クライアントのCO2削減率", value: "35%" },
        { label: "ペーパーレス業務率", value: "100%" },
        { label: "グリーンクラウド移行実績", value: "250件以上" }
      ],
      desc: "私たちはGreen Ledger（グリーン元帳）の構築を通じて、企業が財務指標と並行して炭素排出量データをリアルタイムで追跡することを可能にします。",
      esr_title: "ESR（環境・社会責任）の統合",
      esr_desc: "当社はESRコンプライアンスを企業の基幹ERPアーキテクチャに直接組み込みます。これにより、組織はグローバルなサプライチェーン全体で、環境影響監査と社会的責任ガバナンスの両方を自動化できます。"
    },
    innovation: {
      title: "イノベーション＆研究",
      subtitle: "Dstellar研究所（Dstellar Labs）で未来のビジネスシステムを設計。",
      projects: [
        { t: "Jouleコパイロット連携", d: "SAPの対話型AIを活用し、顧客請求書発行ワークフローを自動化します。" },
        { t: "クリーンコア（Clean Core）リファクタリング", d: "独自コードを抽出してアップグレードを容易にするための静的自動分析ツール。" },
        { t: "予測型AMSサポート", d: "データベーストラブルが生産活動に影響を与える前に、AIで障害予兆を検知し解決します。" }
      ]
    },
    investor_relations: {
      title: "投資家情報",
      subtitle: "前年比2桁成長の成長トレンドに支えられた、強固な財務体質。",
      highlights: [
        { label: "売上高前年比成長率", value: "+24%" },
        { label: "取引企業数", value: "300社以上" },
        { label: "グローバル拠点数", value: "4拠点" }
      ],
      desc: "Dstellarは、安定した株主構造と健全な資本力を備えており、長期的な世界的成長に最適な位置にあります。"
    },
    sports_sponsorships: {
      title: "スポーツ協賛",
      subtitle: "スピード、精密さ、工程の融合。",
      desc: "Dstellarは、世界各地のFormula Eおよびeスポーツリーグの公式スポンサーです。サーキットにおける極限の精密機械設計は、私たちがエンタープライズ顧客のために設計する超高性能ソフトウェアアーキテクチャに通じるものがあると確信しています。"
    },
    trainings_hub: {
      badge: "DSTELLAR アカデミー",
      title: "ラーニングハブ",
      subtitle: "SAPマスターへのゲートウェイ。認定SAPアーキテクトと業界スペシャリストによって設計された、厳選された学習パスウェイを探索してください。",
      cta: "学習を開始する",
      pathways: [
        { title: "SAP S/4HANA 基礎", desc: "実践演習と実例を用いて、SAPの次世代ERPプラットフォームの基礎をマスターします。", level: "Intermediate", duration: "40時間" },
        { title: "財務リーダーのためのFICO", desc: "総勘定元帳からコストセンター会計まで、財務会計および管理会計モジュールを深く学びます。", level: "Advanced", duration: "56時間" },
        { title: "SAP Fiori UX デザイン", desc: "SAP Fioriの原則とSAPUI5コンポーネントを使用して、直感的な企業向けアプリを構築します。", level: "Intermediate", duration: "32時間" },
        { title: "ABAP クリーンコード", desc: "クリーンコアの原則とベストプラクティスに従って、最新で保守可能なABAPコードを作成します。", level: "Advanced", duration: "48時間" },
        { title: "サプライチェーン・エクセレンス", desc: "調達から倉庫実行まで、SAP MM、WM、およびEWMを使用してサプライチェーンを最適化します。", level: "Intermediate", duration: "36時間" },
        { title: "SAP環境におけるAI", desc: "SAP Jouleと組み込みAI機能を活用して、エンタープライズワークフローを強化します。", level: "Specialist", duration: "24時間" }
      ]
    },
    trainings_courses: {
      badge: "認定トレーニング",
      title: "公式SAP認定コース",
      subtitle: "SAPの専門知識を証明し、キャリアの成長を加速させる、業界で認められた認定資格です。",
      cta: "今すぐ登録",
      courses: [
        { code: "SAP-FICO-001", title: "SAP 財務会計 (FI)", desc: "総勘定元帳、買掛金管理、売掛金管理、固定資産会計、および月末締め処理をカバーします。", level: "Professional", duration: "5日間" },
        { code: "SAP-CO-002", title: "SAP 管理会計 (CO)", desc: "コストセンター会計、利益センター会計、内部注文、および製品原価計画を学びます。", level: "Professional", duration: "4日間" },
        { code: "SAP-SD-003", title: "SAP 販売管理 (SD)", desc: "受注処理、価格設定、配送、請求、および与信管理を学びます。", level: "Professional", duration: "5日間" },
        { code: "SAP-MM-004", title: "SAP 在庫購買管理 (MM)", desc: "調達サイクル、在庫管理、請求書照合、および仕入先管理を学びます。", level: "Associate", duration: "4日間" },
        { code: "SAP-S4H-005", title: "SAP S/4HANA 移行", desc: "移行シナリオ、コンバージョンアプローチ、システムランドスケープ変換、および本番稼働移行戦略を学びます。", level: "Expert", duration: "6日間" },
        { code: "SAP-AI-006", title: "SAP AI & Joule 統合", desc: "SAP Business AIとJouleコパイロット機能を使用して、AI主導のビジネスプロセスを実装します。", level: "Specialist", duration: "3日間" }
      ]
    },
    trainings_prep: {
      badge: "試験対策",
      title: "Dstellar 試験合格支援",
      subtitle: "SAP認定試験に一発合格するための、構造化された試験対策プログラムです。",
      cta: "対策を開始",
      programs: [
        { exam: "C_TS4FI_2023", title: "SAP 認定アソシエイト – SAP S/4HANA Financial Accounting", topics: ["総勘定元帳", "買掛金・売掛金", "固定資産会計", "銀行会計"], passRate: "94%", duration: "3週間" },
        { exam: "C_TS4CO_2023", title: "SAP 認定アソシエイト – SAP S/4HANA Management Accounting", topics: ["コストセンター", "利益センター", "内部注文", "製品原価計算"], passRate: "91%", duration: "3週間" },
        { exam: "C_TS410_2022", title: "SAP 認定アソシエイト – ビジネスプロセス統合", topics: ["Procure-to-Pay", "Order-to-Cash", "Plan-to-Produce", "Hire-to-Retire"], passRate: "89%", duration: "4週間" }
      ],
      questions: [
        { q: "SAPの次世代ERPスイートは次のうちどれですか？", options: ["SAP ECC", "SAP S/4HANA", "SAP Business One", "SAP R/3"], correct: 1 },
        { q: "SAP S/4HANA Financeにおいて、すべての会計データの単一のデータソース（Single Source of Truth）となるテーブルはどれですか？", options: ["BKPF", "BSEG", "ACDOCA", "COEP"], correct: 2 },
        { q: "現代のSAPアーキテクチャにおいて「クリーンコア（Clean Core）」とは何を指しますか？", options: ["すべてのデータベースログを削除すること", "データベースをオンプレミスのみで実行すること", "APIやBTPを使用して、カスタムの修正を標準コードから分離して維持すること", "クリーンなグラフィックインターフェースを使用すること"], correct: 2 }
      ],
      question_label: "質問",
      timer_label: "残り時間",
      score_label: "模擬試験スコア"
    },
    trainings_program: {
      badge: "教育パートナーシップ",
      title: "教育機関パートナープログラム",
      subtitle: "Dstellarアカデミーと提携して、貴校や社内研修施設で世界クラスのSAPトレーニングを提供します。",
      cta: "今すぐ申請",
      tiers: [
        { name: "ブロンズ", price: "無料", features: ["学習教材へのアクセス", "ブランド付きコースウェアテンプレート", "オンラインインストラクターポータル", "年間最大50名まで"] },
        { name: "シルバー", price: "360,000円/年", features: ["ブロンズの全機能", "共同ブランド認定証", "専任のパートナーマネージャー", "年間最大250名まで", "LMS統合のサポート"] },
        { name: "ゴールド", price: "900,000円/年", features: ["シルバーの全機能", "現地での講師トレーニング", "カスタムカリキュラム開発", "学生数制限なし", "収益分配モデル", "プレミアムプレイスメント掲載"] }
      ],
      form_title: "パートナーシップ申請",
      form_name: "機関・企業名",
      form_email: "アカデミックメールアドレス",
      form_org: "機関の種類"
    },
    trainings_free: {
      badge: "無料アクセス",
      title: "無料 openDstellarトレーニング",
      subtitle: "費用をかけずにSAP学習を始めましょう。無料のopenDstellarライブラリにより、どなたでも基礎知識にアクセスできます。",
      cta: "無料コースにアクセス",
      modules: [
        { title: "SAP基本ナビゲーション", desc: "SAP GUI、Fiori起動パッド、および主要なナビゲーションパターンを体験します。", duration: "2時間", icon: "🧭" },
        { title: "ERP入門", desc: "ERPの意味、企業がそれを使用する理由、およびエンタープライズ環境におけるSAPの位置づけを理解します。", duration: "3時間", icon: "🏢" },
        { title: "SAPデータモデルの基礎", desc: "クライアント、会社コード、プラント、およびSAPのその他の主要な組織要素について学びます。", duration: "2.5時間", icon: "🗂️" },
        { title: "SAPの財務基礎", desc: "SAP S/4HANAにおける財務プロセスの流れに関する非技術的な概要を学びます。", duration: "3時間", icon: "💰" },
        { title: "SAPのサプライチェーン", desc: "SAPモジュールを使用した調達、在庫、および物流の概要を学びます。", duration: "3.5時間", icon: "🔗" },
        { title: "SAPキャリアパスウェイ", desc: "コンサルタントから開発者、アーキテクトまで、さまざまなSAPキャリアトラックを探索します。", duration: "1時間", icon: "🚀" }
      ],
      videos_title: "無料ビデオ講義",
      videos: [
        { title: "SAP基本ナビゲーション", duration: "2時間", instructor: "Sarah Jenkins (リードSAPアーキテクト)" },
        { title: "ERPシステム入門", duration: "3時間", instructor: "Marcus Vance (CEO・SAPベテラン)" },
        { title: "SAPデータモデルの基礎", duration: "2.5時間", instructor: "Sanjay Mehta (SAPアーテクチャ責任者)" },
        { title: "SAP S/4HANAにおける財務基礎", duration: "3時間", instructor: "Elena Rostova博士 (CTO)" },
        { title: "SAPにおけるサプライチェーンと物流", duration: "3.5時間", instructor: "Sanjay Mehta (SAPアーキテクチャ責任者)" },
        { title: "SAPコンサルタントのキャリアパス", duration: "1時間", instructor: "Marcus Vance (CEO・SAPベテラン)" }
      ]
    }
  }
};
