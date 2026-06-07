export interface Capability {
  title: string;
  desc: string;
  icon: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Playbook {
  tag: string;
  title: string;
  desc: string;
  metrics: string;
}

export interface ProductDetail {
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
  overview: string;
  gradientClass: string;
  themeColor: string;
  stats: Stat[];
  capabilities: Capability[];
  playbook: Playbook;
  inquiryTitle: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  msgPlaceholder: string;
  submitBtn: string;
  successMsg: string;
}

export const PRODUCTS_TRANSLATIONS: Record<string, Record<string, ProductDetail>> = {
  en: {
    'custom-software': {
      slug: 'custom-software',
      badge: 'Custom Dev',
      title: 'Custom Software Development',
      subtitle: 'Build cloud-native bespoke solutions engineered for enterprise scale.',
      overview: 'Transform your legacy code and operational bottlenecks into a competitive advantage. Dstellar engineers custom high-performance web systems, backend services, and APIs tailored to your exact business specifications, integrated directly into your existing IT landscape.',
      gradientClass: 'linear-gradient(135deg, #ffffff 0%, #c084fc 50%, #a855f7 100%)',
      themeColor: '#a855f7',
      stats: [
        { value: '250+', label: 'Shipped Systems' },
        { value: '10x', label: 'Processing Speed' },
        { value: '99.99%', label: 'Uptime SLA' }
      ],
      capabilities: [
        { title: 'Bespoke Cloud Architectures', desc: 'Custom microservices networks designed for infinite horizontal scaling and containerized deployment.', icon: 'globe' },
        { title: 'API Integration Hubs', desc: 'Secure, high-speed RESTful and GraphQL endpoints linking legacy databases with modern frontends.', icon: 'cpu' },
        { title: 'Enterprise Test Cycles', desc: 'Comprehensive QA automation pipelines ensuring high security standards and fail-safe deployment.', icon: 'bolt' }
      ],
      playbook: {
        tag: 'Success Story',
        title: 'Bespoke Order Processing Engine',
        desc: 'Replaced a slow legacy order workflow with a modern, reactive custom server cluster running containerized microservices.',
        metrics: 'Cut cycle time by 85% and sustained peak sales loads.'
      },
      inquiryTitle: 'Discuss Your Custom Scope',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Tell us about the business process you want to automate...',
      submitBtn: 'Request Tech Consultation',
      successMsg: 'Thank you! Our engineering lead will contact you shortly.'
    },
    'erp': {
      slug: 'erp',
      badge: 'DSTELLAR ERP',
      title: 'Dstellar Cloud ERP',
      subtitle: 'Unify your business operations under a clean-core, intelligent system.',
      overview: 'Dstellar ERP provides a single source of truth for your finance, procurement, and manufacturing workflows. Engineered with a modular clean core, our ERP links disparate operational tables to optimize resources, reduce overhead, and deliver actionable executive insights.',
      gradientClass: 'linear-gradient(135deg, #ffffff 0%, #e879f9 50%, #d946ef 100%)',
      themeColor: '#d946ef',
      stats: [
        { value: '35%', label: 'Operational Cost Cut' },
        { value: '100%', label: 'Live Resource Visibility' },
        { value: '45+', label: 'Standard Modules' }
      ],
      capabilities: [
        { title: 'Universal Ledger Sync', desc: 'Real-time reconciliation of financial accounts, controlling cost centers, and asset values.', icon: 'database' },
        { title: 'Dynamic Procurement', desc: 'Automated purchasing protocols triggered by inventory counts, preventing resource gaps.', icon: 'wrench' },
        { title: 'Clean Core Upgrades', desc: 'Isolating custom business extensions on side-by-side containers to preserve core platform stability.', icon: 'cpu' }
      ],
      playbook: {
        tag: 'ERP Case Study',
        title: 'Intelligent Core Rollout',
        desc: 'Deployed Dstellar ERP across a global industrial components supplier, standardizing operations in 12 regional offices.',
        metrics: 'Achieved 100% stock accuracy and cut month-end closure time by 4 days.'
      },
      inquiryTitle: 'Plan Your ERP Evaluation',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Specify your current ERP version or transformation goals...',
      submitBtn: 'Request Product Demo',
      successMsg: 'Inquiry received. Our ERP specialists will schedule a demo shortly.'
    },
    'ecommerce': {
      slug: 'ecommerce',
      badge: 'E-COMMERCE',
      title: 'Dstellar E-Commerce Suite',
      subtitle: 'Performant, omnichannel digital storefronts linking storefront with stock.',
      overview: 'Deliver frictionless buying experiences across all channels. Dstellar E-Commerce links customer interfaces with live inventory, automated order routing, and shipping gateways, ensuring real-time stock sync and fast processing times during traffic surges.',
      gradientClass: 'linear-gradient(135deg, #ffffff 0%, #f472b6 50%, #ec4899 100%)',
      themeColor: '#ec4899',
      stats: [
        { value: '3.5M', label: 'Daily Transactions' },
        { value: '60%', label: 'Order Processing Boost' },
        { value: '250ms', label: 'Average Load Speed' }
      ],
      capabilities: [
        { title: 'Headless Storefronts', desc: 'Lightning-fast React frontends decoupled from backend databases for optimal SEO and conversion.', icon: 'globe' },
        { title: 'Live Inventory Sync', desc: 'Instant stock adjustments across multiple digital marketplaces, warehouse points, and brick-and-mortar stores.', icon: 'database' },
        { title: 'Automated Checkout Pay', desc: 'Integrated secure merchant gateways handling multi-currency and regional taxation calculations.', icon: 'shield' }
      ],
      playbook: {
        tag: 'Retail Success',
        title: 'Omnichannel Digital Pivot',
        desc: 'Launched headless e-commerce storefronts for a major consumer goods brand, linking transactions to central warehouse logs.',
        metrics: 'Increased digital sales by 140% in the first quarter post-launch.'
      },
      inquiryTitle: 'Scale Your Commerce Channels',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Tell us about your transactional volume or current stack...',
      submitBtn: 'Get Free Commerce Review',
      successMsg: 'Inquiry registered. Our retail digital lead will contact you soon.'
    },
    'healthcare': {
      slug: 'healthcare',
      badge: 'HEALTHCARE',
      title: 'Dstellar Healthcare Suite',
      subtitle: 'Secure clinical management systems prioritizing patient outcomes.',
      overview: 'Manage clinical records, scheduling, and pharmacy stocks under absolute compliance. Dstellar Healthcare Suite unifies medical databases, offering secure patient portals and digital billing systems adhering to global health safety regulations.',
      gradientClass: 'linear-gradient(135deg, #ffffff 0%, #2dd4bf 50%, #14b8a6 100%)',
      themeColor: '#14b8a6',
      stats: [
        { value: '150+', label: 'Hospitals Deployed' },
        { value: '100%', label: 'HIPAA & GDPR Compliant' },
        { value: '12M+', label: 'Protected Patient Records' }
      ],
      capabilities: [
        { title: 'Secure Clinical Logs', desc: 'Role-based encrypted patient records with real-time sync across specialized departments.', icon: 'lock' },
        { title: 'Automated Scheduling', desc: 'Intelligent booking algorithms balancing room allocations, specialist shifts, and patient queues.', icon: 'grid' },
        { title: 'Digital Pharmacy Stocks', desc: 'Traceability modules logging batch numbers, drug expiration ranges, and automated supplier re-orders.', icon: 'database' }
      ],
      playbook: {
        tag: 'Clinical Trust',
        title: 'Multi-hospital Systems Link',
        desc: 'Configured a secure cloud medical records database across a network of 14 hospitals, establishing instant patient files lookups.',
        metrics: 'Reduced administrative filing cycles by 70% while passing compliance audits.'
      },
      inquiryTitle: 'Contact Our Medical IT Team',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Describe your clinical network scale or security requirements...',
      submitBtn: 'Schedule Compliance Review',
      successMsg: 'Inquiry received. Our healthcare IT lead will reach out shortly.'
    },
    'logistics-warehouse': {
      slug: 'logistics-warehouse',
      badge: 'LOGISTICS',
      title: 'Dstellar Logistics & Warehouse',
      subtitle: 'Intelligent inventory flow tracking and optimized distribution networks.',
      overview: 'Take control of your warehouse footprints and supply channels. Dstellar Logistics connects storage facilities with shipping telemetry, logistics schedules, and automated stock placement, maximizing space utilization and accelerating shipping cycles.',
      gradientClass: 'linear-gradient(135deg, #ffffff 0%, #fbbf24 50%, #f59e0b 100%)',
      themeColor: '#f59e0b',
      stats: [
        { value: '98.8%', label: 'On-Time Delivery Rate' },
        { value: '30%', label: 'Space Utilization Gain' },
        { value: '24/7', label: 'Telemetry Monitoring' }
      ],
      capabilities: [
        { title: 'Dynamic Stock Placement', desc: 'AI-driven routing scripts directing warehouse crews to optimal storage shelves based on demand.', icon: 'grid' },
        { title: 'Real-time Fleet Tracking', desc: 'Connected telemetry feeds transmitting delivery truck coordinates, temperature logs, and ETA updates.', icon: 'globe' },
        { title: 'Barcode & RFID Ingestion', desc: 'High-speed package scan processing logs linking pickers with central ERP tables instantly.', icon: 'cpu' }
      ],
      playbook: {
        tag: 'Supply Success',
        title: 'Hub Warehouse Automation',
        desc: 'Re-architected a 500,000 sq ft logistics hub with automated bin placement mapping and unified RFID scanner grids.',
        metrics: 'Cut package shipping queues from 12 minutes to 90 seconds.'
      },
      inquiryTitle: 'Optimize Your Logistics Flow',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Tell us about your distribution footprint or warehouse counts...',
      submitBtn: 'Request Logistics Audit',
      successMsg: 'Thank you. Our supply chain engineering team will contact you.'
    },
    'sales-accounting': {
      slug: 'sales-accounting',
      badge: 'ACCOUNTING',
      title: 'Dstellar Sales & Accounting',
      subtitle: 'Automated bookkeeping ledger entries, tax filings, and sales pipelines.',
      overview: 'Eliminated manual data entry errors. Dstellar Sales & Accounting syncs sales checkout data with general ledgers, automatically filing taxation fields, balancing accounts sheets, and tracking transaction lists inside a secure, audited hub.',
      gradientClass: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #3b82f6 100%)',
      themeColor: '#3b82f6',
      stats: [
        { value: '99.9%', label: 'Reconciliation Accuracy' },
        { value: '40hrs', label: 'Saved Monthly per Rep' },
        { value: '100%', label: 'Tax Law Compliance' }
      ],
      capabilities: [
        { title: 'Automated Account Balance', desc: 'Intelligent reconciliation engines syncing merchant receipts with bank statements automatically.', icon: 'database' },
        { title: 'Global Multi-Currency Tax', desc: 'Calculates VAT, GST, and local sales tax percentages dynamically based on customer shipping addresses.', icon: 'shield' },
        { title: 'Executive Cash Graphs', desc: 'Real-time sales charts showing profit margins, cost flows, and upcoming taxation reserves.', icon: 'currency' }
      ],
      playbook: {
        tag: 'Finance Success',
        title: 'SaaS Billing System Sync',
        desc: 'Integrated a custom global subscription sales interface with core financial databases, enabling automated ledger balance check cycles.',
        metrics: 'Eliminated manual reconciliation errors and cut tax preparation time.'
      },
      inquiryTitle: 'Request a Financial System Audit',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Describe your accounting software or compliance scope...',
      submitBtn: 'Get Free Finance Consult',
      successMsg: 'Inquiry received. Our product specialists will contact you shortly.'
    },
    'bi-analytics': {
      slug: 'bi-analytics',
      badge: 'ANALYTICS',
      title: 'Business Intelligence & Analytics',
      subtitle: 'Transform raw system tables into visual, predictive growth graphs.',
      overview: 'Get data-driven foresight. Dstellar Analytics processes historical database logs, creating interactive performance dashboards and machine learning prediction models to trace client trends and optimize resource distribution.',
      gradientClass: 'linear-gradient(135deg, #ffffff 0%, #fb7185 50%, #f43f5e 100%)',
      themeColor: '#f43f5e',
      stats: [
        { value: '1.2B+', label: 'Data Points Audited' },
        { value: '94%', label: 'Trend Prediction Accuracy' },
        { value: 'Real-time', label: 'Dashboard Sync' }
      ],
      capabilities: [
        { title: 'Interactive HUD Graphics', desc: 'Beautiful, responsive data visualizations using modern charting libraries mapped to live databases.', icon: 'grid' },
        { title: 'Predictive Demand ML', desc: 'Machine learning algorithms forecasting customer purchasing shifts and inventory requirements.', icon: 'cpu' },
        { title: 'Automated Report Emails', desc: 'Scheduled metrics logs compile and transmit KPI details directly to stakeholders weekly.', icon: 'document' }
      ],
      playbook: {
        tag: 'BI Success Story',
        title: 'Data-driven Demand Forecast',
        desc: 'Connected 12 years of consumer purchase tables to a predictive analytics dashboard to forecast seasonal demand fluctuations.',
        metrics: 'Achieved a 94% accuracy rate, cutting excess stock holdings by 22%.'
      },
      inquiryTitle: 'Connect Your Analytics Stack',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Tell us about your data source types or analytics goals...',
      submitBtn: 'Request Analytics Review',
      successMsg: 'Inquiry received. Our business intelligence architects will call you.'
    },
    'mobile-web-apps': {
      slug: 'mobile-web-apps',
      badge: 'APPLICATIONS',
      title: 'Mobile & Web Applications',
      subtitle: 'Engaging, responsive user interfaces designed for iOS, Android, and Web.',
      overview: 'Ship software your users love. Dstellar designs and builds native iOS and Android apps, combined with lightning-fast React web apps, connecting direct client interactions to back-end enterprise architectures securely.',
      gradientClass: 'linear-gradient(135deg, #ffffff 0%, #22d3ee 50%, #06b6d4 100%)',
      themeColor: '#06b6d4',
      stats: [
        { value: '50M+', label: 'App Store Downloads' },
        { value: '4.9★', label: 'Average App Rating' },
        { value: 'React/Swift', label: 'Modern Framework Stack' }
      ],
      capabilities: [
        { title: 'Native iOS & Android Swift', desc: 'High-performance applications utilizing camera access, secure local storage, and push warnings.', icon: 'globe' },
        { title: 'Responsive Next.js Web', desc: 'SEO-optimized web applications with seamless static loading and clean grid layouts.', icon: 'grid' },
        { title: 'Secure User Access Login', desc: 'Integrated single sign-on (SSO) protocols, biometrics, and multi-factor validation flows.', icon: 'lock' }
      ],
      playbook: {
        tag: 'App Success Story',
        title: 'Global Field Service Mobile App',
        desc: 'Built a lightweight, offline-first field diagnostics mobile application for 5,000 industrial technicians.',
        metrics: 'Boosted on-site task completion rates by 40% in 30 days.'
      },
      inquiryTitle: 'Discuss Your Application Concept',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Tell us about your target platforms (Web, iOS, Android) or timeline...',
      submitBtn: 'Request Project Quote',
      successMsg: 'Thank you! Our application lead will get in touch with you shortly.'
    }
  },
  es: {
    'custom-software': {
      slug: 'custom-software',
      badge: 'Software a Medida',
      title: 'Desarrollo de Software a Medida',
      subtitle: 'Cree soluciones nativas en la nube diseñadas para escala empresarial.',
      overview: 'Transforme sus sistemas heredados y cuellos de botella operativos en una ventaja competitiva. Dstellar desarrolla sistemas web de alto rendimiento, servicios backend y APIs personalizadas que se integran directamente en su entorno tecnológico existente.',
      gradientClass: 'linear-gradient(135deg, #ffffff 0%, #c084fc 50%, #a855f7 100%)',
      themeColor: '#a855f7',
      stats: [
        { value: '250+', label: 'Sistemas Entregados' },
        { value: '10x', label: 'Velocidad de Proceso' },
        { value: '99.99%', label: 'Acuerdo de Nivel de Servicio (SLA)' }
      ],
      capabilities: [
        { title: 'Arquitecturas Cloud a Medida', desc: 'Redes de microservicios diseñadas para el escalamiento horizontal infinito y despliegue en contenedores.', icon: 'globe' },
        { title: 'Centros de Integración de API', desc: 'Endpoints RESTful y GraphQL seguros y veloces que conectan bases de datos heredadas con frontends modernos.', icon: 'cpu' },
        { title: 'Ciclos de Prueba Empresariales', desc: 'Oleadas completas de automatización de QA que garantizan altos estándares de seguridad y despliegues sin fallos.', icon: 'bolt' }
      ],
      playbook: {
        tag: 'Caso de Éxito',
        title: 'Motor de Procesamiento a Medida',
        desc: 'Reemplazamos un flujo de procesamiento de pedidos lento con un clúster de servidores moderno y reactivo utilizando microservicios.',
        metrics: 'Reducción del tiempo de ciclo en un 85% soportando picos de venta masivos.'
      },
      inquiryTitle: 'Hablemos de su Proyecto a Medida',
      namePlaceholder: 'Su Nombre',
      emailPlaceholder: 'Dirección de Correo',
      msgPlaceholder: 'Detalle el proceso de negocio que desea automatizar...',
      submitBtn: 'Solicitar Consultoría Técnica',
      successMsg: '¡Gracias! Nuestro líder de ingeniería se pondrá en contacto pronto.'
    },
    'erp': {
      slug: 'erp',
      badge: 'DSTELLAR ERP',
      title: 'Dstellar ERP en la Nube',
      subtitle: 'Unifique sus operaciones bajo un sistema inteligente de núcleo limpio.',
      overview: 'Dstellar ERP proporciona una única fuente de verdad para sus flujos de finanzas, compras y manufactura. Diseñado sobre un núcleo limpio y modular, conecta tablas de datos de manera fluida.',
      gradientClass: 'linear-gradient(135deg, #ffffff 0%, #e879f9 50%, #d946ef 100%)',
      themeColor: '#d946ef',
      stats: [
        { value: '35%', label: 'Ahorro Operativo' },
        { value: '100%', label: 'Transparencia de Recursos' },
        { value: '45+', label: 'Módulos de Sistema' }
      ],
      capabilities: [
        { title: 'Sincronización del Libro Mayor', desc: 'Conciliación en tiempo real de cuentas contables, centros de coste de controlling y activos fijos.', icon: 'database' },
        { title: 'Compras Dinámicas', desc: 'Protocolos automatizados de abastecimiento activados por recuentos de inventario para evitar quiebres de stock.', icon: 'wrench' },
        { title: 'Actualizaciones de Núcleo Limpio', desc: 'Aislamiento de extensiones de negocio personalizadas en contenedores independientes para mantener la estabilidad del núcleo.', icon: 'cpu' }
      ],
      playbook: {
        tag: 'Caso de Estudio ERP',
        title: 'Despliegue de Núcleo Inteligente',
        desc: 'Implementamos Dstellar ERP para un proveedor global de componentes industriales, estandarizando procesos en 12 sedes.',
        metrics: 'Alcanzamos el 100% de precisión en inventarios y redujimos el cierre en 4 días.'
      },
      inquiryTitle: 'Planifique su Evaluación ERP',
      namePlaceholder: 'Su Nombre',
      emailPlaceholder: 'Dirección de Correo',
      msgPlaceholder: 'Especifique su ERP actual o sus metas de transformación...',
      submitBtn: 'Solicitar Demostración de Producto',
      successMsg: 'Solicitud recibida. Nuestros especialistas programarán una demo en breve.'
    },
    'ecommerce': {
      slug: 'ecommerce',
      badge: 'COMERCIO',
      title: 'Dstellar E-Commerce Suite',
      subtitle: 'Tiendas online de alto rendimiento integradas con su ERP central.',
      overview: 'Ofrezca experiencias de compra óptimas en todos los canales digitales, con stocks y pasarelas de pago automatizadas en tiempo real.',
      gradientClass: 'linear-gradient(135deg, #ffffff 0%, #f472b6 50%, #ec4899 100%)',
      themeColor: '#ec4899',
      stats: [
        { value: '3.5M', label: 'Transacciones Diarias' },
        { value: '60%', label: 'Mayor Procesamiento' },
        { value: '250ms', label: 'Carga de Página' }
      ],
      capabilities: [
        { title: 'Tiendas Headless', desc: 'Frontends de React rápidos e independientes para una conversión y SEO excepcionales.', icon: 'globe' },
        { title: 'Sincronización de Stocks', desc: 'Ajuste de inventarios al instante en marketplaces y tiendas físicas.', icon: 'database' },
        { title: 'Pasarelas Seguras', desc: 'Gestión integrada de cobros con conversión de divisas e impuestos locales.', icon: 'shield' }
      ],
      playbook: {
        tag: 'Éxito Minorista',
        title: 'Transición Digital Omnicanal',
        desc: 'Lanzamos tiendas web headless para una gran marca de consumo masivo, integrando ventas al inventario central.',
        metrics: 'Incremento del 140% en ventas digitales durante el primer trimestre.'
      },
      inquiryTitle: 'Expanda sus Canales Digitales',
      namePlaceholder: 'Su Nombre',
      emailPlaceholder: 'Dirección de Correo',
      msgPlaceholder: 'Cuéntenos sobre sus volúmenes de venta o tecnologías actuales...',
      submitBtn: 'Obtener Auditoría Comercial',
      successMsg: 'Solicitud registrada. Nuestro líder de retail le contactará.'
    },
    'healthcare': {
      slug: 'healthcare',
      badge: 'SALUD',
      title: 'Suite de Salud DSTELLAR',
      subtitle: 'Gestión clínica segura centrada en los resultados de los pacientes.',
      overview: 'Administre expedientes médicos, agendas y stocks de farmacia cumpliendo estrictamente con HIPAA y GDPR.',
      gradientClass: 'linear-gradient(135deg, #ffffff 0%, #2dd4bf 50%, #14b8a6 100%)',
      themeColor: '#14b8a6',
      stats: [
        { value: '150+', label: 'Clínicas Activas' },
        { value: '100%', label: 'Cumplimiento Legal' },
        { value: '12M+', label: 'Expedientes Protegidos' }
      ],
      capabilities: [
        { title: 'Registros Clínicos Seguros', desc: 'Historiales médicos encriptados con sincronización entre departamentos.', icon: 'lock' },
        { title: 'Agendamiento Inteligente', desc: 'Gestión eficiente de turnos de especialistas, quirófanos y pacientes.', icon: 'grid' },
        { title: 'Inventarios de Farmacia', desc: 'Trazabilidad de lotes de medicamentos, caducidades y pedidos automáticos.', icon: 'database' }
      ],
      playbook: {
        tag: 'Salud Digital',
        title: 'Conexión de Red Hospitalaria',
        desc: 'Unificamos los expedientes clínicos de una red de 14 clínicas privadas en un sistema de nube híbrida seguro.',
        metrics: 'Reducción del 70% en tiempos de archivo cumpliendo auditorías médicas.'
      },
      inquiryTitle: 'Contacte a nuestro Equipo de Salud IT',
      namePlaceholder: 'Su Nombre',
      emailPlaceholder: 'Dirección de Correo',
      msgPlaceholder: 'Describa el tamaño de su red o requisitos de seguridad...',
      submitBtn: 'Solicitar Auditoría de Cumplimiento',
      successMsg: 'Recibido. Nuestro especialista en IT médica le llamará.'
    },
    'logistics-warehouse': {
      slug: 'logistics-warehouse',
      badge: 'LOGÍSTICA',
      title: 'Logística y Almacenes DSTELLAR',
      subtitle: 'Control inteligente de inventario y optimización de flotas.',
      overview: 'Optimice la ocupación de sus depósitos y agilice sus entregas coordinando pedidos con telemetría de distribución.',
      gradientClass: 'linear-gradient(135deg, #ffffff 0%, #fbbf24 50%, #f59e0b 100%)',
      themeColor: '#f59e0b',
      stats: [
        { value: '98.8%', label: 'Entregas a Tiempo' },
        { value: '30%', label: 'Aprovechamiento de Espacio' },
        { value: '24/7', label: 'Seguimiento por GPS' }
      ],
      capabilities: [
        { title: 'Ubicaciones Dinámicas', desc: 'Optimización de pasillos y estanterías guiada por algoritmos de demanda.', icon: 'grid' },
        { title: 'Telemetría de Flotas', desc: 'Seguimiento en vivo de coordenadas de transportes, estados de frío y horarios.', icon: 'globe' },
        { title: 'Lectura de Códigos y RFID', desc: 'Captura ágil de códigos de barras sincronizados con el ERP central.', icon: 'cpu' }
      ],
      playbook: {
        tag: 'Éxito Logístico',
        title: 'Automatización de Gran Centro',
        desc: 'Reorganizamos un centro logístico de gran volumen, integrando lectores de RFID y mapeo dinámico.',
        metrics: 'Despacho de pedidos reducido de 12 minutos a solo 90 segundos.'
      },
      inquiryTitle: 'Optimice su Cadena de Distribución',
      namePlaceholder: 'Su Nombre',
      emailPlaceholder: 'Dirección de Correo',
      msgPlaceholder: 'Detalle el número de almacenes o vehículos de su flota...',
      submitBtn: 'Solicitar Consultoría Logística',
      successMsg: 'Inquiry registrado. Nuestro ingeniero de supply chain le llamará.'
    },
    'sales-accounting': {
      slug: 'sales-accounting',
      badge: 'CONTABILIDAD',
      title: 'Ventas y Contabilidad DSTELLAR',
      subtitle: 'Automatización de asientos contables y cumplimiento tributario.',
      overview: 'Sincronice sus cobros con sus libros diarios y balances, calculando retenciones e impuestos de forma automática.',
      gradientClass: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #3b82f6 100%)',
      themeColor: '#3b82f6',
      stats: [
        { value: '99.9%', label: 'Precisión en Conciliación' },
        { value: '40hs', label: 'Ahorradas al Mes por Rep' },
        { value: '100%', label: 'Cumplimiento Legal Fiscal' }
      ],
      capabilities: [
        { title: 'Conciliación Automatizada', desc: 'Comparación automática de extractos bancarios con comprobantes de venta.', icon: 'database' },
        { title: 'Cálculo dinámico de Tasas', desc: 'Determinación automática de IVA, retenciones y tasas regionales.', icon: 'shield' },
        { title: 'Flujos Financieros Visuales', desc: 'Cuadros de mando con márgenes de ganancias, gastos y previsiones fiscales.', icon: 'currency' }
      ],
      playbook: {
        tag: 'Éxito Financiero',
        title: 'Integración Contable SaaS',
        desc: 'Sincronizamos un sistema de suscripciones globales con la contabilidad central para conciliaciones automáticas.',
        metrics: 'Eliminación completa de descuadres y reducción de tiempos de cierre.'
      },
      inquiryTitle: 'Solicite una Auditoría Financiera',
      namePlaceholder: 'Su Nombre',
      emailPlaceholder: 'Dirección de Correo',
      msgPlaceholder: 'Describa sus herramientas actuales o volumen de cobros...',
      submitBtn: 'Obtener Asesoría Contable',
      successMsg: 'Mensaje recibido. Un asesor financiero se pondrá en contacto.'
    },
    'bi-analytics': {
      slug: 'bi-analytics',
      badge: 'ANALÍTICA',
      title: 'Inteligencia de Negocios y Analítica',
      subtitle: 'Convierta sus datos crudos en gráficos interactivos de crecimiento.',
      overview: 'Analice datos históricos para predecir comportamientos de compra y optimizar el uso de recursos empresariales.',
      gradientClass: 'linear-gradient(135deg, #ffffff 0%, #fb7185 50%, #f43f5e 100%)',
      themeColor: '#f43f5e',
      stats: [
        { value: '1.2B+', label: 'Datos Analizados' },
        { value: '94%', label: 'Acierto en Predicciones' },
        { value: 'Tiempo Real', label: 'Sincronización' }
      ],
      capabilities: [
        { title: 'Cuadros de Mando Interactivos', desc: 'Visualización clara de KPIs empresariales en tiempo real.', icon: 'grid' },
        { title: 'Predicción de Demanda ML', desc: 'Modelos predictivos para adelantarse a compras estacionales.', icon: 'cpu' },
        { title: 'Informes Programados', desc: 'Generación y envío automático de resúmenes de rendimiento a directores.', icon: 'document' }
      ],
      playbook: {
        tag: 'Éxito Analítico',
        title: 'Predicción de Pedidos Estacionales',
        desc: 'Conectamos bases de datos de ventas de 12 años a un motor analítico predictivo para regular inventario.',
        metrics: 'Reducción del stock sobrante en un 22% con un 94% de acierto predictivo.'
      },
      inquiryTitle: 'Hable con nuestro Especialista en Datos',
      namePlaceholder: 'Su Nombre',
      emailPlaceholder: 'Dirección de Correo',
      msgPlaceholder: 'Cuéntenos sobre sus fuentes de datos o objetivos analíticos...',
      submitBtn: 'Solicitar Plan de Datos',
      successMsg: 'Mensaje enviado. Nuestro experto en analítica le contactará.'
    },
    'mobile-web-apps': {
      slug: 'mobile-web-apps',
      badge: 'APLICACIONES',
      title: 'Aplicaciones Móviles y Web',
      subtitle: 'Experiencias de usuario fluidas y seguras para iOS, Android y Navegadores.',
      overview: 'Diseñamos y desarrollamos aplicaciones robustas conectadas de forma segura con sus sistemas empresariales.',
      gradientClass: 'linear-gradient(135deg, #ffffff 0%, #22d3ee 50%, #06b6d4 100%)',
      themeColor: '#06b6d4',
      stats: [
        { value: '50M+', label: 'Descargas Totales' },
        { value: '4.9★', label: 'Calificación Promedio' },
        { value: 'React/Swift', label: 'Stack de Desarrollo' }
      ],
      capabilities: [
        { title: 'Apps Nativas iOS y Android', desc: 'Desarrollo en Swift y Kotlin con notificaciones push y almacenamiento local seguro.', icon: 'globe' },
        { title: 'Aplicaciones Web React', desc: 'Sitios rápidos y optimizados para SEO con Next.js.', icon: 'grid' },
        { title: 'Accesos y Login Seguros', desc: 'Integración de Single Sign-On (SSO) y validaciones biométricas avanzadas.', icon: 'lock' }
      ],
      playbook: {
        tag: 'Desarrollo Móvil',
        title: 'App de Soporte en Campo',
        desc: 'Construimos una aplicación móvil con soporte offline para 5,000 técnicos industriales en campo.',
        metrics: 'Aumento del 40% en resolución de incidencias en 30 días.'
      },
      inquiryTitle: 'Cuéntenos sobre su Idea de Aplicación',
      namePlaceholder: 'Su Nombre',
      emailPlaceholder: 'Dirección de Correo',
      msgPlaceholder: 'Describa las plataformas objetivo (Web, iOS, Android) o plazos...',
      submitBtn: 'Solicitar Presupuesto Gratis',
      successMsg: '¡Excelente! Nuestro líder de desarrollo móvil se comunicará con usted.'
    }
  }
};
