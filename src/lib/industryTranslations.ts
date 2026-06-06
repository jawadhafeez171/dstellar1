export interface Solution {
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

export interface IndustryDetail {
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
  overview: string;
  gradientClass: string;
  themeColor: string;
  stats: Stat[];
  solutions: Solution[];
  playbook: Playbook;
  inquiryTitle: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  msgPlaceholder: string;
  submitBtn: string;
  successMsg: string;
}

export const INDUSTRY_TRANSLATIONS: Record<string, Record<string, IndustryDetail>> = {
  en: {
    automotive: {
      slug: 'automotive',
      badge: 'Automotive',
      title: 'Automotive Digital Transformation',
      subtitle: 'Connected vehicles, optimized dealership networks, and smart factory floor operations.',
      overview: 'Dstellar empowers automotive OEMs and suppliers to build resilient supply chains, scale connected vehicle architectures, and optimize shop-floor operations. We align legacy SAP ERP platforms into clean-core S/4HANA solutions.',
      gradientClass: 'linear-gradient(135deg, #1a0b3d 0%, #4a3aff 45%, #00d4c8 100%)',
      themeColor: '#4a3aff',
      stats: [
        { value: '35%', label: 'Manufacturing Efficiency' },
        { value: '2M+', label: 'Connected Vehicles' },
        { value: '15+', label: 'Tier-1 Suppliers Integrated' }
      ],
      solutions: [
        { title: 'Connected Telematics', desc: 'Ingest and analyze millions of vehicle telemetry signals directly inside SAP HANA.', icon: 'telematics' },
        { title: 'Smart Shop-Floor', desc: 'Integrate manufacturing execution systems (MES) with SAP ERP for real-time inventory visibility.', icon: 'factory' },
        { title: 'Dealers & Parts Networks', desc: 'Automate order processing, billing, and global shipping pipelines for aftermarket parts.', icon: 'truck' }
      ],
      playbook: {
        tag: 'Success Story',
        title: 'Connecting 2 Million Vehicles',
        desc: 'How Dstellar helped a global automotive manufacturer synchronize real-time vehicle analytics with S/4HANA Finance and service billing systems.',
        metrics: '99.99% availability achieved during peak telemetry streams.'
      },
      inquiryTitle: 'Contact Our Automotive Specialists',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Tell us about your project...',
      submitBtn: 'Send Inquiry',
      successMsg: 'Thank you! Our automotive team will contact you shortly.'
    },
    'consumer-products': {
      slug: 'consumer-products',
      badge: 'CPG',
      title: 'Consumer Products & Retail Operations',
      subtitle: 'Real-time demand sensing, trade promotions, and omnichannel commerce orchestration.',
      overview: 'Accelerate cycle times and optimize inventory overhead. Dstellar delivers tailored SAP systems that bridge factory production directly with direct-to-consumer and retail distributor networks.',
      gradientClass: 'linear-gradient(120deg, #4a3aff 0%, #ff7a00 45%, #ff8a3d 100%)',
      themeColor: '#ff7a00',
      stats: [
        { value: '+28%', label: 'Order Fulfillment Velocity' },
        { value: '40%', label: 'Inventory Holding Reductions' },
        { value: '12', label: 'Global Brands Managed' }
      ],
      solutions: [
        { title: 'Demand Sensing & Planning', desc: 'Use predictive ML analytics to anticipate market fluctuations and align raw material purchases.', icon: 'chart' },
        { title: 'Omnichannel Order Management', desc: 'Consolidate orders from retail partners, e-commerce, and physical storefronts into a single ledger.', icon: 'shopping' },
        { title: 'Trade Promotions Optimization', desc: 'Manage vendor agreements, rebate calculations, and distributor credits automatically inside SAP.', icon: 'piggy' }
      ],
      playbook: {
        tag: 'Case Study',
        title: 'Global Inventory Optimization',
        desc: 'How a multinational food brand slashed inventory overhead by integrating real-time sales ledger tracking with automated warehouse logistics.',
        metrics: '$14M in annual storage savings realized.'
      },
      inquiryTitle: 'Contact Our CPG Experts',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Describe your retail or supply chain challenge...',
      submitBtn: 'Request Consultation',
      successMsg: 'Inquiry received. Our consumer goods experts will be in touch.'
    },
    'electronic-high-tech': {
      slug: 'electronic-high-tech',
      badge: 'High Tech',
      title: 'High Tech & Electronics Systems',
      subtitle: 'Managing rapid product cycles, clean-room operations, and complex global supply chains.',
      overview: 'High tech demands speed and precision. Dstellar optimizes product lifecycle management, clean-room batch tracing, and supplier collaboration using cloud-native extensions on SAP Business Technology Platform (BTP).',
      gradientClass: 'linear-gradient(135deg, #0f172a 0%, #3b82f6 50%, #1d4ed8 100%)',
      themeColor: '#3b82f6',
      stats: [
        { value: '3.5x', label: 'Faster Time-to-Market' },
        { value: '100%', label: 'Batch Traceability Compliance' },
        { value: '500M+', label: 'Components Tracked Daily' }
      ],
      solutions: [
        { title: 'Product Lifecycle Management', desc: 'Track hardware designs, bill-of-materials (BOM), and upgrades seamlessly through ERP stages.', icon: 'cpu' },
        { title: 'GxP & Batch Tracing', desc: 'Trace silicon wafers and micro-components from raw materials to final retail product.', icon: 'database' },
        { title: 'Agile Supplier Portal', desc: 'Enable tier-1 and tier-2 fab partners to coordinate delivery times and price sheets automatically.', icon: 'globe' }
      ],
      playbook: {
        tag: 'Transformation',
        title: 'Silicon Manufacturing Upgrade',
        desc: 'Implemented a clean-core SAP S/4HANA migration for a major semiconductor manufacturer, upgrading custom ABAP integrations to BTP side-by-side apps.',
        metrics: 'Zero downtime achieved during the global go-live window.'
      },
      inquiryTitle: 'Contact Our High Tech Specialists',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Tell us about your product or engineering requirements...',
      submitBtn: 'Send Message',
      successMsg: 'Message sent! Our tech architects will review your details.'
    },
    'manufacturing-industrial': {
      slug: 'manufacturing-industrial',
      badge: 'Mfg & Ind',
      title: 'Industrial Manufacturing Solutions',
      subtitle: 'Discrete production scheduling, predictive maintenance, and asset performance management.',
      overview: 'Keep the assembly line running. Dstellar integrates operational technology (OT) sensors directly with SAP Plant Maintenance (PM) to predict failures and automate work order generation.',
      gradientClass: 'linear-gradient(135deg, #1e293b 0%, #475569 50%, #0f172a 100%)',
      themeColor: '#475569',
      stats: [
        { value: '18%', label: 'Reduction in Equipment Downtime' },
        { value: '100%', label: 'Safety Regulation Adherence' },
        { value: '80+', label: 'Factories Modernized' }
      ],
      solutions: [
        { title: 'Predictive Plant Maintenance', desc: 'Monitor industrial vibrations and telemetry to automatically trigger SAP PM work orders.', icon: 'wrench' },
        { title: 'Discrete Manufacturing', desc: 'Align machine throughput with real-time customer orders to eliminate inventory bottlenecks.', icon: 'cogs' },
        { title: 'Predictive Quality Assurance', desc: 'Capture sensor metrics on the line to flag component defects before shipping.', icon: 'check' }
      ],
      playbook: {
        tag: 'Case Study',
        title: 'Connected Heavy Machinery',
        desc: 'Implemented automated maintenance scheduling across 42 industrial plants, integrating physical PLCs with core SAP modules.',
        metrics: 'Maintenance costs reduced by 22% within 12 months.'
      },
      inquiryTitle: 'Connect With Our Manufacturing Advisors',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Tell us about your factory or plant operations...',
      submitBtn: 'Get in Touch',
      successMsg: 'Inquiry received. We will call you to discuss shop floor automation.'
    },
    'energy-utilities': {
      slug: 'energy-utilities',
      badge: 'Energy',
      title: 'Energy & Smart Utilities Support',
      subtitle: 'Smart metering, asset management, and green ledger decarbonization.',
      overview: 'Transition to sustainable energy generation. Dstellar provides IS-Utility billing structures, asset tracking, and carbon bookkeeping to match strict global compliance audits.',
      gradientClass: 'linear-gradient(135deg, #111827 0%, #15803d 50%, #064e3b 100%)',
      themeColor: '#15803d',
      stats: [
        { value: '45M+', label: 'Meter Readings Processed' },
        { value: '100%', label: 'Regulatory Compliance' },
        { value: '30%', label: 'Carbon Reduction Tracking' }
      ],
      solutions: [
        { title: 'Smart Meter Billing', desc: 'High-speed ingestion of IoT smart meter data linked to automated customer invoice generation.', icon: 'bolt' },
        { title: 'Enterprise Asset Management', desc: 'Track substations, grids, pipelines, and turbine lifecycles on geographic maps integrated with SAP.', icon: 'shield' },
        { title: 'Green Ledger Systems', desc: 'Trace greenhouse emissions alongside financial reports using SAP Green Ledger integrations.', icon: 'leaf' }
      ],
      playbook: {
        tag: 'Sustainability',
        title: 'Smart Grid Transformation',
        desc: 'Dstellar designed and built a smart utility invoicing engine handling millions of dynamic tariffs for a European green energy cooperative.',
        metrics: 'Invoicing processing window cut from 4 days to 4 hours.'
      },
      inquiryTitle: 'Contact Our Energy Specialists',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Tell us about your utility or grid modernization goals...',
      submitBtn: 'Get Expert Advisory',
      successMsg: 'Thank you! Our utilities advisory team will contact you shortly.'
    },
    'life-sciences-healthcare': {
      slug: 'life-sciences-healthcare',
      badge: 'Life Sciences',
      title: 'Life Sciences & Healthcare Governance',
      subtitle: 'GxP compliance, clinical trials tracking, and sterile inventory management.',
      overview: 'Ensure strict GxP and FDA compliance. Dstellar builds verified, validation-ready ERP platforms for pharmaceutical, biotech, and medical device companies, ensuring total batch trace security.',
      gradientClass: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 50%, #312e81 100%)',
      themeColor: '#4338ca',
      stats: [
        { value: '100%', label: 'GxP/FDA Auditing Compliance' },
        { value: '45%', label: 'Faster Supply Chain Audits' },
        { value: '25+', label: 'Clinical Trials Integrated' }
      ],
      solutions: [
        { title: 'Sterile Supply Chain', desc: 'Keep track of cold-chain conditions and sterile requirements in raw chemical material inventories.', icon: 'heart' },
        { title: 'Quality Management (QM)', desc: 'Automate quality control sampling, validation workflows, and compliance reporting.', icon: 'search' },
        { title: 'Clinical Trials Tracking', desc: 'Manage trials costs, supplier logistics, and subject metrics within a secure SAP architecture.', icon: 'activity' }
      ],
      playbook: {
        tag: 'Compliance',
        title: 'Global Vaccine Supply Chain',
        desc: 'Implemented a sterile cold-chain batch management and shipping tracking dashboard with S/4HANA for a multinational biotech firm.',
        metrics: '100% compliance score verified during FDA inspection.'
      },
      inquiryTitle: 'Speak to a Healthcare Consultant',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Detail your GxP or healthcare logistics requirements...',
      submitBtn: 'Request Briefing',
      successMsg: 'Thank you. Our compliance team will reach out immediately.'
    },
    'government-public-sector': {
      slug: 'government-public-sector',
      badge: 'Public Sector',
      title: 'Government & Public Services',
      subtitle: 'Transparent fund tracking, public procurement, and digital citizen services.',
      overview: 'Deliver citizen-first services with absolute fiscal transparency. Dstellar supports state and municipal governments in migrating legacy mainframes into modern SAP Public Sector solutions.',
      gradientClass: 'linear-gradient(135deg, #0a0f1d 0%, #1e3a8a 50%, #172554 100%)',
      themeColor: '#1e3a8a',
      stats: [
        { value: '$4.2B', label: 'Public Funds Audited' },
        { value: '15M+', label: 'Citizens Served' },
        { value: '40%', label: 'Reduction in Procurement Cycle' }
      ],
      solutions: [
        { title: 'Funds Management (FI-FM)', desc: 'Budget allocation tracking, municipal grants distribution, and public finance audit reports.', icon: 'lock' },
        { title: 'Digital Citizen Services', desc: 'Fiori citizen portals for municipal utilities billing, business registration, and licensing.', icon: 'user' },
        { title: 'Public Procurement', desc: 'Automate vendor bidding pipelines and contract lifecycle management in full compliance with public audit standards.', icon: 'document' }
      ],
      playbook: {
        tag: 'Public Service',
        title: 'Municipal ERP Modernization',
        desc: 'Replaced a 25-year-old mainframe with S/4HANA Public Sector, streamlining funds management and citizen utility invoicing across 12 municipal districts.',
        metrics: 'Audit turnaround time shortened by 50%.'
      },
      inquiryTitle: 'Contact Our Public Sector Advisors',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Describe your government agency requirements...',
      submitBtn: 'Submit Inquiry',
      successMsg: 'Inquiry registered. Our public sector advisors will contact your office.'
    },
    'capital-markets': {
      slug: 'capital-markets',
      badge: 'Capital Markets',
      title: 'Capital Markets & Financial Software',
      subtitle: 'Trade lifecycle automation, real-time risk evaluation, and compliance reporting.',
      overview: 'Build high-performance core platforms for institutional banking. Dstellar implements trade lifecycle tools, liquidity tracking, and regulatory audit dashboards directly integrated into SAP Treasury.',
      gradientClass: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
      themeColor: '#312e81',
      stats: [
        { value: '0.2ms', label: 'Risk Calculation Latency' },
        { value: '99.999%', label: 'System Uptime' },
        { value: '$120B+', label: 'Assets Under Management' }
      ],
      solutions: [
        { title: 'Treasury & Risk Management', desc: 'Automate treasury management, liquidity forecasting, and hedge calculations.', icon: 'currency' },
        { title: 'Trade Lifecycle Engine', desc: 'Process institutional trades, settlement clearings, and account reconciliations in real-time.', icon: 'exchange' },
        { title: 'Compliance Reporting', desc: 'Generate regulatory audit logs to comply with SEC, MIFID II, and local financial guidelines.', icon: 'file-text' }
      ],
      playbook: {
        tag: 'Financial Technology',
        title: 'Treasury System Modernization',
        desc: 'Implemented real-time risk accounting and liquid cash tracking across 24 currency boards for an international investment firm.',
        metrics: 'Consolidated closing times reduced from 6 days to 90 seconds.'
      },
      inquiryTitle: 'Request Financial Services Briefing',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Describe your treasury or asset management system needs...',
      submitBtn: 'Schedule Briefing',
      successMsg: 'Briefing request sent. Our capital markets team will contact you.'
    },
    'travel-hospitality': {
      slug: 'travel-hospitality',
      badge: 'Hospitality',
      title: 'Travel & Hospitality Systems',
      subtitle: 'Dynamic passenger management, yield optimization, and global logistics execution.',
      overview: 'Keep passengers moving and rooms booked. Dstellar designs unified backend systems that coordinate point-of-sale, reservation portals, and logistics databases in real-time.',
      gradientClass: 'linear-gradient(120deg, #3b0764 0%, #7c3aed 50%, #c084fc 100%)',
      themeColor: '#7c3aed',
      stats: [
        { value: '30M+', label: 'Bookings Processed' },
        { value: '98%', label: 'Guest Satisfaction Index' },
        { value: '+14%', label: 'Revenue Yield Growth' }
      ],
      solutions: [
        { title: 'Dynamic Tariff Ingestion', desc: 'Real-time price calculations linked directly to occupancy logs and seasonal analytics.', icon: 'tag' },
        { title: 'Passenger Logistics', desc: 'Optimize route management, luggage tracking, and catering operations with SAP Logistics.', icon: 'plane' },
        { title: 'Unified Loyalty Ledgers', desc: 'Keep track of millions of frequent-flyer and guest reward points inside a high-speed ERP.', icon: 'star' }
      ],
      playbook: {
        tag: 'Transformation',
        title: 'Airline Passenger Ledger Upgrade',
        desc: 'Dstellar built an automated dynamic pricing and ticketing database capable of resolving 5,000 queries per second for a major regional carrier.',
        metrics: 'Loyalty program update delays cut to under 2 seconds.'
      },
      inquiryTitle: 'Contact Our Travel & Hospitality Team',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Describe your booking or fleet management systems...',
      submitBtn: 'Get Free Audit',
      successMsg: 'Inquiry received. Our hospitality team will be in touch.'
    },
    construction: {
      slug: 'construction',
      badge: 'Construction',
      title: 'Construction & Engineering Infrastructure',
      subtitle: 'Project costing (WBS), sub-contractor coordination, and heavy machinery logistics.',
      overview: 'Bring projects in on time and on budget. Dstellar integrates SAP Project System (PS) and WBS structures with mobile field-reporting apps to ensure raw material and crew coordination.',
      gradientClass: 'linear-gradient(135deg, #1e293b 0%, #d97706 60%, #b45309 100%)',
      themeColor: '#d97706',
      stats: [
        { value: '25%', label: 'Reduction in Cost Overruns' },
        { value: '100%', label: 'Sub-contractor Tracking' },
        { value: '450+', label: 'Large Projects Delivered' }
      ],
      solutions: [
        { title: 'Work Breakdown Structure', desc: 'Map multi-year construction tasks and subcontractor billing milestones inside SAP PS.', icon: 'grid' },
        { title: 'Heavy Equipment Tracking', desc: 'Monitor heavy excavator location and usage telemetry to predict downtime and optimize fleet leasing.', icon: 'hammer' },
        { title: 'Material Supply Chains', desc: 'Ensure concrete, steel, and electrical equipment arrive on site just-in-time to avoid delay penalties.', icon: 'shield' }
      ],
      playbook: {
        tag: 'Case Study',
        title: 'Metro Tunnel Logistics',
        desc: 'Built a real-time field expense and equipment tracking system linked directly to S/4HANA Project Systems for a major civic infrastructure contractor.',
        metrics: 'Sub-contractor invoicing processing speed improved by 60%.'
      },
      inquiryTitle: 'Contact Our Engineering Advisors',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Describe your infrastructure or project system needs...',
      submitBtn: 'Send Message',
      successMsg: 'Message sent. Our industrial construction experts will call you.'
    }
  },
  es: {
    automotive: {
      slug: 'automotive',
      badge: 'Automotriz',
      title: 'Transformación Digital Automotriz',
      subtitle: 'Vehículos conectados, redes de concesionarios optimizadas y operaciones de fábrica inteligentes.',
      overview: 'Dstellar capacita a los fabricantes y proveedores de automóviles para construir cadenas de suministro resilientes, escalar arquitecturas de vehículos conectados y optimizar las operaciones en la planta de producción. Alineamos los sistemas ERP heredados con soluciones S/4HANA de núcleo limpio.',
      gradientClass: 'linear-gradient(135deg, #1a0b3d 0%, #4a3aff 45%, #00d4c8 100%)',
      themeColor: '#4a3aff',
      stats: [
        { value: '35%', label: 'Eficiencia de Fabricación' },
        { value: '2M+', label: 'Vehículos Conectados' },
        { value: '15+', label: 'Proveedores Tier-1 Integrados' }
      ],
      solutions: [
        { title: 'Telemetría Conectada', desc: 'Ingesta y analiza millones de señales de telemetría de vehículos directamente dentro de SAP HANA.', icon: 'telematics' },
        { title: 'Planta de Producción Inteligente', desc: 'Integre los sistemas de ejecución de fabricación (MES) con SAP ERP para obtener visibilidad del inventario en tiempo real.', icon: 'factory' },
        { title: 'Red de Concesionarios y Repuestos', desc: 'Automatice el procesamiento de pedidos, la facturación y los canales de envío global para repuestos de posventa.', icon: 'truck' }
      ],
      playbook: {
        tag: 'Caso de Éxito',
        title: 'Conectando 2 Millones de Vehículos',
        desc: 'Cómo Dstellar ayudó a un fabricante de automóviles global a sincronizar el análisis de vehículos en tiempo real con SAP S/4HANA Finance y los sistemas de facturación de servicios.',
        metrics: '99,99% de disponibilidad lograda durante picos de telemetría.'
      },
      inquiryTitle: 'Contacte a Nuestros Especialistas en Automoción',
      namePlaceholder: 'Su Nombre',
      emailPlaceholder: 'Dirección de Correo',
      msgPlaceholder: 'Cuéntenos sobre su proyecto...',
      submitBtn: 'Enviar Consulta',
      successMsg: '¡Gracias! Nuestro equipo de automoción se pondrá en contacto con usted en breve.'
    },
    'consumer-products': {
      slug: 'consumer-products',
      badge: 'CPG',
      title: 'Consumo Masivo y Operaciones Minoristas',
      subtitle: 'Detección de demanda en tiempo real, promociones comerciales y orquestación de comercio omnicanal.',
      overview: 'Acelere los tiempos de ciclo y optimice los costos de inventario. Dstellar ofrece sistemas SAP a medida que conectan la producción en fábrica directamente con las redes de distribución minorista y directas al consumidor.',
      gradientClass: 'linear-gradient(120deg, #4a3aff 0%, #ff7a00 45%, #ff8a3d 100%)',
      themeColor: '#ff7a00',
      stats: [
        { value: '+28%', label: 'Velocidad de Cumplimiento de Pedidos' },
        { value: '40%', label: 'Reducción en Retención de Inventario' },
        { value: '12', label: 'Marcas Globales Gestionadas' }
      ],
      solutions: [
        { title: 'Planificación y Detección de Demanda', desc: 'Utilice análisis de aprendizaje automático (ML) predictivo para anticipar las fluctuaciones del mercado y alinear las compras de materias primas.', icon: 'chart' },
        { title: 'Gestión de Pedidos Omnicanal', desc: 'Consolide pedidos de socios minoristas, comercio electrónico y tiendas físicas en un solo libro mayor.', icon: 'shopping' },
        { title: 'Optimización de Promociones Comerciales', desc: 'Gestione acuerdos con proveedores, cálculos de descuentos y créditos de distribuidores automáticamente dentro de SAP.', icon: 'piggy' }
      ],
      playbook: {
        tag: 'Estudio de Caso',
        title: 'Optimización de Inventario Global',
        desc: 'Cómo una marca multinacional de alimentos redujo los costos de inventario al integrar el seguimiento de las ventas en tiempo real con una logística de almacén automatizada.',
        metrics: '$14 millones en ahorros anuales de almacenamiento logrados.'
      },
      inquiryTitle: 'Contacte a Nuestros Expertos en Consumo Masivo',
      namePlaceholder: 'Su Nombre',
      emailPlaceholder: 'Dirección de Correo',
      msgPlaceholder: 'Describa su desafío en retail o cadena de suministro...',
      submitBtn: 'Solicitar Consulta',
      successMsg: 'Consulta recibida. Nuestros expertos en bienes de consumo se pondrán en contacto.'
    },
    'electronic-high-tech': {
      slug: 'electronic-high-tech',
      badge: 'Alta Tecnología',
      title: 'Alta Tecnología y Sistemas Electrónicos',
      subtitle: 'Gestión de ciclos rápidos de productos, salas limpias y cadenas de suministro globales complejas.',
      overview: 'La alta tecnología exige velocidad y precisión. Dstellar optimiza la gestión del ciclo de vida del producto, el seguimiento de lotes en salas limpias y la colaboración con proveedores utilizando extensiones nativas de la nube en SAP Business Technology Platform (BTP).',
      gradientClass: 'linear-gradient(135deg, #0f172a 0%, #3b82f6 50%, #1d4ed8 100%)',
      themeColor: '#3b82f6',
      stats: [
        { value: '3.5x', label: 'Tiempo de Lanzamiento Más Rápido' },
        { value: '100%', label: 'Cumplimiento de Trazabilidad de Lotes' },
        { value: '500M+', label: 'Componentes Rastreados Diariamente' }
      ],
      solutions: [
        { title: 'Gestión del Ciclo de Vida del Producto', desc: 'Realice un seguimiento de los diseños de hardware, las listas de materiales (BOM) y las actualizaciones sin problemas a través de las etapas del ERP.', icon: 'cpu' },
        { title: 'Trazabilidad de Lotes y GxP', desc: 'Realice un seguimiento de las obleas de silicio y los microcomponentes desde las materias primas hasta el producto minorista final.', icon: 'database' },
        { title: 'Portal de Proveedores Ágil', desc: 'Permita que los socios de fabricación de nivel 1 y 2 coordinen los tiempos de entrega y las listas de precios automáticamente.', icon: 'globe' }
      ],
      playbook: {
        tag: 'Transformación',
        title: 'Actualización de Fabricación de Silicio',
        desc: 'Migración a SAP S/4HANA de núcleo limpio para un importante fabricante de semiconductores, actualizando las integraciones personalizadas de ABAP a aplicaciones BTP lado a lado.',
        metrics: 'Se logró cero tiempo de inactividad durante la puesta en producción global.'
      },
      inquiryTitle: 'Contacte a Nuestros Especialistas en Alta Tecnología',
      namePlaceholder: 'Su Nombre',
      emailPlaceholder: 'Dirección de Correo',
      msgPlaceholder: 'Cuéntenos sobre sus requisitos de producto o ingeniería...',
      submitBtn: 'Enviar Mensaje',
      successMsg: '¡Mensaje enviado! Nuestros arquitectos tecnológicos revisarán sus datos.'
    },
    'manufacturing-industrial': {
      slug: 'manufacturing-industrial',
      badge: 'Manufactura',
      title: 'Soluciones de Manufactura Industrial',
      subtitle: 'Programación de producción discreta, mantenimiento predictivo y gestión del rendimiento de activos.',
      overview: 'Mantenga la línea de montaje en funcionamiento. Dstellar integra la tecnología operativa (OT) directamente con el mantenimiento de planta de SAP (PM) para predecir fallas y automatizar órdenes de trabajo.',
      gradientClass: 'linear-gradient(135deg, #1e293b 0%, #475569 50%, #0f172a 100%)',
      themeColor: '#475569',
      stats: [
        { value: '18%', label: 'Reducción del Tiempo de Inactividad' },
        { value: '100%', label: 'Cumplimiento de Normas de Seguridad' },
        { value: '80+', label: 'Fábricas Modernizadas' }
      ],
      solutions: [
        { title: 'Mantenimiento Preventivo de Planta', desc: 'Supervise las vibraciones industriales y la telemetría para activar automáticamente las órdenes de trabajo de SAP PM.', icon: 'wrench' },
        { title: 'Fabricación Discreta', desc: 'Alinee el rendimiento de la maquinaria con los pedidos de los clientes en tiempo real para eliminar cuellos de botella de inventario.', icon: 'cogs' },
        { title: 'Garantía de Calidad Predictiva', desc: 'Capture métricas de sensores en la línea para marcar defectos en los componentes antes del envío.', icon: 'check' }
      ],
      playbook: {
        tag: 'Estudio de Caso',
        title: 'Maquinaria Pesada Conectada',
        desc: 'Implementación de programación de mantenimiento automatizado en 42 plantas industriales, integrando PLC físicos con módulos centrales de SAP.',
        metrics: 'Costos de mantenimiento reducidos en un 22% en 12 meses.'
      },
      inquiryTitle: 'Conéctese con Nuestros Asesores de Manufactura',
      namePlaceholder: 'Su Nombre',
      emailPlaceholder: 'Dirección de Correo',
      msgPlaceholder: 'Cuéntenos sobre sus operaciones de fábrica o planta...',
      submitBtn: 'Ponerse en Contacto',
      successMsg: 'Consulta recibida. Le llamaremos para discutir la automatización de la planta.'
    },
    'energy-utilities': {
      slug: 'energy-utilities',
      badge: 'Energía',
      title: 'Soporte para Energía y Servicios Públicos',
      subtitle: 'Medición inteligente, gestión de activos y contabilidad ecológica.',
      overview: 'Haga la transición hacia una generación de energía sostenible. Dstellar proporciona estructuras de facturación de servicios públicos (IS-U), seguimiento de activos y contabilidad de carbono para cumplir con estrictas auditorías globales.',
      gradientClass: 'linear-gradient(135deg, #111827 0%, #15803d 50%, #064e3b 100%)',
      themeColor: '#15803d',
      stats: [
        { value: '45M+', label: 'Lecturas de Medidores Procesadas' },
        { value: '100%', label: 'Cumplimiento Regulatorio' },
        { value: '30%', label: 'Seguimiento de Reducción de Carbono' }
      ],
      solutions: [
        { title: 'Facturación de Medidores Inteligentes', desc: 'Ingesta a alta velocidad de datos de medidores inteligentes de IoT vinculados a la facturación automatizada de clientes.', icon: 'bolt' },
        { title: 'Gestión de Activos Empresariales', desc: 'Realice un seguimiento de subestaciones, redes, tuberías y turbinas en mapas integrados con SAP.', icon: 'shield' },
        { title: 'Sistemas de Contabilidad Ecológica', desc: 'Rastree emisiones de carbono junto con informes financieros utilizando las integraciones de SAP Green Ledger.', icon: 'leaf' }
      ],
      playbook: {
        tag: 'Sostenibilidad',
        title: 'Transformación de Red Inteligente',
        desc: 'Dstellar diseñó y construyó un motor de facturación de servicios públicos que maneja millones de tarifas dinámicas para una cooperativa europea de energía verde.',
        metrics: 'El procesamiento de facturas se redujo de 4 días a 4 horas.'
      },
      inquiryTitle: 'Contacte a Nuestros Especialistas en Energía',
      namePlaceholder: 'Su Nombre',
      emailPlaceholder: 'Dirección de Correo',
      msgPlaceholder: 'Cuéntenos sobre sus objetivos de modernización de red...',
      submitBtn: 'Obtener Asesoría Experta',
      successMsg: '¡Gracias! Nuestro equipo de asesoría de servicios públicos se comunicará con usted.'
    },
    'life-sciences-healthcare': {
      slug: 'life-sciences-healthcare',
      badge: 'Ciencias de la Vida',
      title: 'Gobernanza de Ciencias de la Vida y Salud',
      subtitle: 'Cumplimiento GxP, seguimiento de ensayos clínicos y gestión de inventario estéril.',
      overview: 'Garantice un estricto cumplimiento GxP y de la FDA. Dstellar crea plataformas ERP verificadas y listas para la validación para empresas farmacéuticas, biotecnológicas y de dispositivos médicos.',
      gradientClass: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 50%, #312e81 100%)',
      themeColor: '#4338ca',
      stats: [
        { value: '100%', label: 'Cumplimiento de Auditoría GxP/FDA' },
        { value: '45%', label: 'Auditorías de Cadena de Suministro Más Rápidas' },
        { value: '25+', label: 'Ensayos Clínicos Integrados' }
      ],
      solutions: [
        { title: 'Cadena de Suministro Estéril', desc: 'Mantenga el control de las condiciones de la cadena de frío y los requisitos de esterilidad en los inventarios de materias primas químicas.', icon: 'heart' },
        { title: 'Gestión de Calidad (QM)', desc: 'Automatice el muestreo de control de calidad, los flujos de trabajo de validación y los informes de cumplimiento.', icon: 'search' },
        { title: 'Seguimiento de Ensayos Clínicos', desc: 'Gestione los costos de los ensayos, la logística de los proveedores y las métricas de los sujetos dentro de una arquitectura SAP segura.', icon: 'activity' }
      ],
      playbook: {
        tag: 'Cumplimiento',
        title: 'Cadena de Suministro de Vacunas',
        desc: 'Implementación de un panel de control de cadena de frío y seguimiento de lotes con SAP S/4HANA para una firma de biotecnología multinacional.',
        metrics: 'Puntaje de cumplimiento del 100% verificado en la inspección de la FDA.'
      },
      inquiryTitle: 'Hable con un Consultor de Salud',
      namePlaceholder: 'Su Nombre',
      emailPlaceholder: 'Dirección de Correo',
      msgPlaceholder: 'Detalle sus requisitos de GxP o logística de salud...',
      submitBtn: 'Solicitar Reunión',
      successMsg: 'Gracias. Nuestro equipo de cumplimiento se comunicará de inmediato.'
    },
    'government-public-sector': {
      slug: 'government-public-sector',
      badge: 'Sector Público',
      title: 'Gobierno y Servicios Públicos',
      subtitle: 'Seguimiento transparente de fondos, contratación pública y servicios digitales al ciudadano.',
      overview: 'Ofrezca servicios centrados en el ciudadano con absoluta transparencia fiscal. Dstellar apoya a gobiernos estatales y municipales en la migración de sistemas heredados a soluciones modernas de SAP Public Sector.',
      gradientClass: 'linear-gradient(135deg, #0a0f1d 0%, #1e3a8a 50%, #172554 100%)',
      themeColor: '#1e3a8a',
      stats: [
        { value: '$4.2B', label: 'Fondos Públicos Auditados' },
        { value: '15M+', label: 'Ciudadanos Atendidos' },
        { value: '40%', label: 'Reducción en Ciclo de Compras' }
      ],
      solutions: [
        { title: 'Gestión de Fondos (FI-FM)', desc: 'Seguimiento de asignación presupuestaria, distribución de subvenciones municipales e informes de auditoría financiera pública.', icon: 'lock' },
        { title: 'Servicios Digitales al Ciudadano', desc: 'Portales ciudadanos Fiori para facturación de servicios públicos municipales, registro de empresas y licencias.', icon: 'user' },
        { title: 'Contratación Pública', desc: 'Automatice los procesos de licitación de proveedores y la gestión del ciclo de vida de los contratos cumpliendo con los estándares de auditoría.', icon: 'document' }
      ],
      playbook: {
        tag: 'Servicio Público',
        title: 'Modernización del ERP Municipal',
        desc: 'Reemplazo de un sistema heredado por S/4HANA Public Sector, agilizando la gestión de fondos y la facturación de servicios públicos en 12 distritos municipales.',
        metrics: 'Tiempo de respuesta de auditoría reducido en un 50%.'
      },
      inquiryTitle: 'Contacte a Nuestros Asesores de Sector Público',
      namePlaceholder: 'Su Nombre',
      emailPlaceholder: 'Dirección de Correo',
      msgPlaceholder: 'Describa los requisitos de su agencia gubernamental...',
      submitBtn: 'Enviar Consulta',
      successMsg: 'Consulta registrada. Nuestros asesores se pondrán en contacto con su oficina.'
    },
    'capital-markets': {
      slug: 'capital-markets',
      badge: 'Mercados Financieros',
      title: 'Sistemas para Mercados de Capitales',
      subtitle: 'Automatización del ciclo de vida de las transacciones, evaluación de riesgos e informes de cumplimiento.',
      overview: 'Construya plataformas centrales de alto rendimiento para la banca institucional. Dstellar implementa herramientas de ciclo de vida de transacciones, seguimiento de liquidez y paneles de auditoría regulatoria integrados directamente en SAP Treasury.',
      gradientClass: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
      themeColor: '#312e81',
      stats: [
        { value: '0.2ms', label: 'Latencia de Cálculo de Riesgo' },
        { value: '99.999%', label: 'Disponibilidad del Sistema' },
        { value: '$120B+', label: 'Activos Bajo Gestión' }
      ],
      solutions: [
        { title: 'Tesorería y Gestión de Riesgos', desc: 'Automatice la gestión de tesorería, el pronóstico de liquidez y los cálculos de cobertura.', icon: 'currency' },
        { title: 'Motor de Ciclo de Vida de Transacciones', desc: 'Procese transacciones institucionales, compensaciones de liquidación y conciliaciones de cuentas en tiempo real.', icon: 'exchange' },
        { title: 'Informes de Cumplimiento', desc: 'Genere registros de auditoría regulatoria para cumplir con las pautas de la SEC, MIFID II y regulaciones locales.', icon: 'file-text' }
      ],
      playbook: {
        tag: 'Tecnología Financiera',
        title: 'Modernización de Sistemas de Tesorería',
        desc: 'Implementación de contabilidad de riesgo en tiempo real y seguimiento de efectivo en 24 juntas monetarias para una firma de inversión internacional.',
        metrics: 'Tiempos de cierre consolidados reducidos de 6 días a 90 segundos.'
      },
      inquiryTitle: 'Solicitar Reunión de Servicios Financieros',
      namePlaceholder: 'Su Nombre',
      emailPlaceholder: 'Dirección de Correo',
      msgPlaceholder: 'Describa sus necesidades de tesorería o gestión de activos...',
      submitBtn: 'Programar Reunión',
      successMsg: 'Solicitud enviada. Nuestro equipo financiero se comunicará con usted.'
    },
    'travel-hospitality': {
      slug: 'travel-hospitality',
      badge: 'Hospitalidad',
      title: 'Sistemas de Viajes y Hospitalidad',
      subtitle: 'Gestión dinámica de pasajeros, optimización de ingresos y ejecución logística global.',
      overview: 'Mantenga a los pasajeros en movimiento y las habitaciones reservadas. Dstellar diseña sistemas backend unificados que coordinan puntos de venta, portales de reserva y bases de datos logísticas en tiempo real.',
      gradientClass: 'linear-gradient(120deg, #3b0764 0%, #7c3aed 50%, #c084fc 100%)',
      themeColor: '#7c3aed',
      stats: [
        { value: '30M+', label: 'Reservas Procesadas' },
        { value: '98%', label: 'Índice de Satisfacción del Huésped' },
        { value: '+14%', label: 'Crecimiento de Rendimiento de Ingresos' }
      ],
      solutions: [
        { title: 'Ingesta de Tarifas Dinámicas', desc: 'Cálculos de precios en tiempo real vinculados directamente a registros de ocupación y análisis estacionales.', icon: 'tag' },
        { title: 'Logística de Pasajeros', desc: 'Optimice la gestión de rutas, el seguimiento de equipaje y las operaciones de catering con SAP Logistics.', icon: 'plane' },
        { title: 'Libros de Fidelización Unificados', desc: 'Mantenga el control de millones de puntos de programas de viajero frecuente y recompensas dentro de un ERP de alta velocidad.', icon: 'star' }
      ],
      playbook: {
        tag: 'Transformación',
        title: 'Modernización del Libro de Pasajeros',
        desc: 'Dstellar construyó un motor automatizado de precios dinámicos y base de datos de emisión de boletos capaz de resolver 5,000 consultas por segundo.',
        metrics: 'Los retrasos en la actualización de programas de fidelización se redujeron a menos de 2 segundos.'
      },
      inquiryTitle: 'Contacte a Nuestro Equipo de Viajes y Hospitalidad',
      namePlaceholder: 'Su Nombre',
      emailPlaceholder: 'Dirección de Correo',
      msgPlaceholder: 'Describa sus sistemas de reserva o gestión de flotas...',
      submitBtn: 'Obtener Auditoría Gratuita',
      successMsg: 'Consulta recibida. Nuestro equipo de hospitalidad se comunicará con usted.'
    },
    construction: {
      slug: 'construction',
      badge: 'Construcción',
      title: 'Infraestructura de Construcción e Ingeniería',
      subtitle: 'Costos de proyectos (WBS), coordinación de subcontratistas y logística de maquinaria pesada.',
      overview: 'Lleve a cabo los proyectos a tiempo y dentro del presupuesto. Dstellar integra SAP Project System (PS) y estructuras WBS con aplicaciones móviles de informes de campo para garantizar la coordinación de equipos y materiales.',
      gradientClass: 'linear-gradient(135deg, #1e293b 0%, #d97706 60%, #b45309 100%)',
      themeColor: '#d97706',
      stats: [
        { value: '25%', label: 'Reducción de Excesos de Costos' },
        { value: '100%', label: 'Seguimiento de Subcontratistas' },
        { value: '450+', label: 'Grandes Proyectos Entregados' }
      ],
      solutions: [
        { title: 'Estructura de Desglose del Trabajo', desc: 'Planifique tareas de construcción plurianuales e hitos de facturación de subcontratistas dentro de SAP PS.', icon: 'grid' },
        { title: 'Seguimiento de Maquinaria Pesada', desc: 'Monitoree la ubicación y el uso de excavadoras pesadas para predecir tiempos de inactividad y optimizar el arrendamiento de flotas.', icon: 'hammer' },
        { title: 'Cadenas de Suministro de Materiales', desc: 'Garantice que el hormigón, el acero y el equipo eléctrico lleguen a la obra justo a tiempo para evitar sanciones por retrasos.', icon: 'shield' }
      ],
      playbook: {
        tag: 'Estudio de Caso',
        title: 'Logística de Túnel de Metro',
        desc: 'Construcción de un sistema de seguimiento de gastos de campo y equipos vinculado directamente a S/4HANA Project Systems para un contratista de infraestructura civil.',
        metrics: 'La velocidad de facturación de subcontratistas mejoró en un 60%.'
      },
      inquiryTitle: 'Contacte a Nuestros Asesores de Ingeniería',
      namePlaceholder: 'Su Nombre',
      emailPlaceholder: 'Dirección de Correo',
      msgPlaceholder: 'Describa sus necesidades de infraestructura o sistemas de proyectos...',
      submitBtn: 'Enviar Mensaje',
      successMsg: 'Mensaje enviado. Nuestros expertos en construcción industrial le llamarán.'
    }
  },
  zh: {
    automotive: {
      slug: 'automotive',
      badge: '汽车制造',
      title: '汽车制造数字化转型',
      subtitle: '智能网联汽车、经销商网络优化与智能工厂车间运维。',
      overview: 'Dstellar 助力汽车原始设备制造商 (OEM) 和供应商构建强韧的供应链，扩展网联汽车架构，并优化车间制造执行流程。我们将传统的 SAP 系统重构为符合「干净核心」(Clean Core) 标准的 S/4HANA 架构体系。',
      gradientClass: 'linear-gradient(135deg, #1a0b3d 0%, #4a3aff 45%, #00d4c8 100%)',
      themeColor: '#4a3aff',
      stats: [
        { value: '35%', label: '生产效率提升' },
        { value: '2M+', label: '智能网联车辆' },
        { value: '15+', label: '集成的一级供应商' }
      ],
      solutions: [
        { title: '网联汽车远程监测', desc: '直接在 SAP HANA 内存数据库中高效接收并实时分析数百万辆网联汽车的遥测信号。', icon: 'telematics' },
        { title: '智能工厂车间集成', desc: '将制造执行系统 (MES) 与 SAP ERP 深度融合，实现实时物料追踪与库存可视化。', icon: 'factory' },
        { title: '分销商与备件网络', desc: '面向售后备件市场，实现订单处理、账务结算及全球物流配送流程自动化。', icon: 'truck' }
      ],
      playbook: {
        tag: '成功案例',
        title: '集成 200 万辆网联汽车',
        desc: 'Dstellar 如何协助某全球汽车制造商将实时车辆遥测数据与 S/4HANA 财务模块及售后服务计费系统同步。',
        metrics: '在海量遥测并发流峰值期间实现了 99.99% 的系统可用性。'
      },
      inquiryTitle: '联系我们的汽车行业专家',
      namePlaceholder: '您的姓名',
      emailPlaceholder: '电子邮箱',
      msgPlaceholder: '请描述您的项目需求...',
      submitBtn: '发送咨询',
      successMsg: '谢谢！我们的汽车行业团队会尽快与您取得联系。'
    },
    'consumer-products': {
      slug: 'consumer-products',
      badge: '消费品',
      title: '消费品与零售运营',
      subtitle: '实时需求感知、促销活动管理以及全渠道商业协同。',
      overview: '缩短商品周转周期并优化库存水平。Dstellar 打造的专属 SAP 系统能够打通工厂端生产与直面消费者 (DTC) 模式及零售分销商网络。',
      gradientClass: 'linear-gradient(120deg, #4a3aff 0%, #ff7a00 45%, #ff8a3d 100%)',
      themeColor: '#ff7a00',
      stats: [
        { value: '+28%', label: '订单履约速度' },
        { value: '40%', label: '库存积压降低' },
        { value: '12', label: '管理全球品牌数' }
      ],
      solutions: [
        { title: '需求感知与供应计划', desc: '利用预测性机器学习 (ML) 算法洞察市场波动，同步调整原材料采购节奏。', icon: 'chart' },
        { title: '全渠道订单管理', desc: '将来自零售渠道商、电商平台及实体门店的订单整合统一至一个事实数据源中。', icon: 'shopping' },
        { title: '渠道促销管理优化', desc: '在 SAP 系统内部自动管理供应商协议、返利结算和分销商信贷核算流程。', icon: 'piggy' }
      ],
      playbook: {
        tag: '深入研究',
        title: '全球存货水平优化',
        desc: '某跨国食品品牌如何通过将实时销售数据与智能仓储物流深度绑定，大幅缩减存货管理成本。',
        metrics: '每年实现 1400 万美元的仓储物流资金节省。'
      },
      inquiryTitle: '联系我们的消费品行业专家',
      namePlaceholder: '您的姓名',
      emailPlaceholder: '电子邮箱',
      msgPlaceholder: '请简述您在零售或供应链中面临的挑战...',
      submitBtn: '预约咨询',
      successMsg: '已收到您的咨询。我们的消费品专家会尽快回复您。'
    },
    'electronic-high-tech': {
      slug: 'electronic-high-tech',
      badge: '高科技',
      title: '高科技与电子制造',
      subtitle: '管控快速的产品迭代周期、无尘车间批次追溯以及全球复杂供应链协调。',
      overview: '高科技行业注重速度和精度。Dstellar 通过在 SAP 业务技术平台 (BTP) 上开发云原生扩展应用，优化产品生命周期管理、无尘室批次追溯以及供应商协同。',
      gradientClass: 'linear-gradient(135deg, #0f172a 0%, #3b82f6 50%, #1d4ed8 100%)',
      themeColor: '#3b82f6',
      stats: [
        { value: '3.5x', label: '上市时间缩短' },
        { value: '100%', label: '批次追溯合规率' },
        { value: '500M+', label: '每日追踪组件量' }
      ],
      solutions: [
        { title: '产品生命周期管理 (PLM)', desc: '在 ERP 系统各阶段无缝追踪硬件研发设计、物料清单 (BOM) 结构及版本升级。', icon: 'cpu' },
        { title: '批次追踪与 GxP 合规', desc: '建立从硅晶圆与底层元器件到最终消费级零售商品的全链路精确追踪链条。', icon: 'database' },
        { title: '敏捷供应商协作门户', desc: '支持一、二级外协代工厂在平台上自动协同交期、排产计划及实时采购报价。', icon: 'globe' }
      ],
      playbook: {
        tag: '系统转型',
        title: '半导体芯片制造系统升级',
        desc: '为一家大型半导体企业成功实施「干净核心」S/4HANA 迁移，将复杂的本地 ABAP 定制系统升级为基于 BTP 的旁路扩展应用。',
        metrics: '在全球系统上线割接窗口期内实现了零停机中断。'
      },
      inquiryTitle: '联系我们的高科技专家',
      namePlaceholder: '您的姓名',
      emailPlaceholder: '电子邮箱',
      msgPlaceholder: '请填写您的产品线设计或系统工程规范需求...',
      submitBtn: '发送消息',
      successMsg: '消息已发送！我们的系统架构师将详细审阅您的信息。'
    },
    'manufacturing-industrial': {
      slug: 'manufacturing-industrial',
      badge: '工业制造',
      title: '工业制造解决方案',
      subtitle: '离散制造排程、设备预测性维护以及核心资产绩效管控。',
      overview: '保障生产线平稳运转。Dstellar 将车间运营技术 (OT) 数据与 SAP 设备维护 (PM) 模块互联，用以预测故障并自动排发检修工单。',
      gradientClass: 'linear-gradient(135deg, #1e293b 0%, #475569 50%, #0f172a 100%)',
      themeColor: '#475569',
      stats: [
        { value: '18%', label: '设备非计划停机降低' },
        { value: '100%', label: '安全生产法规遵从率' },
        { value: '80+', label: '现代化改造工厂数' }
      ],
      solutions: [
        { title: '预测性厂区设备维护', desc: '监测工业振动及多维遥测数据，智能触发 SAP PM 模块生成设备维修工单。', icon: 'wrench' },
        { title: '离散型排程优化', desc: '将机台实时吞吐量与核心客户订单需求动态匹配，解决库存积压及半成品堆积。', icon: 'cogs' },
        { title: '智能质量检测控制', desc: '自动分析生产流水线传感器指标，在成品出库打包前智能筛查零部件潜在缺陷。', icon: 'check' }
      ],
      playbook: {
        tag: '案例分析',
        title: '大型重工业设备互联',
        desc: '在 42 个工业制造厂区部署自动维护排程引擎，实现底层物理 PLC 与 SAP 核心模块的实时数据穿透。',
        metrics: '系统上线 12 个月内助力维护成本降低 22%。'
      },
      inquiryTitle: '与我们的工业制造顾问交流',
      namePlaceholder: '您的姓名',
      emailPlaceholder: '电子邮箱',
      msgPlaceholder: '请简述您的工厂分布与车间生产运营现状...',
      submitBtn: '取得联系',
      successMsg: '咨询已受理。我们将与您联系探讨工厂自动化转型。'
    },
    'energy-utilities': {
      slug: 'energy-utilities',
      badge: '能源公用',
      title: '能源与智能公用事业',
      subtitle: '智能抄表、电网资产全生命周期管理及绿色账本碳排放追踪。',
      overview: '向低碳及清洁能源平稳转型。Dstellar 针对公用事业行业提供 SAP IS-U 计费系统构建、网架资产追踪及企业碳核算，支持严格的国际合规审计。',
      gradientClass: 'linear-gradient(135deg, #111827 0%, #15803d 50%, #064e3b 100%)',
      themeColor: '#15803d',
      stats: [
        { value: '45M+', label: '处理的抄表数据行数' },
        { value: '100%', label: '行业法规审计通过率' },
        { value: '30%', label: '碳排放核算追踪精度' }
      ],
      solutions: [
        { title: '智能表计自动计费', desc: '毫秒级接收大规模 IoT 表计并发读数，直接驱动 SAP 自动生成账单及追缴凭证。', icon: 'bolt' },
        { title: '公用事业资产管理', desc: '在与 SAP 深度联动的 GIS 地图上，精细管理变电站、配电网、管道及风机的物理生命周期。', icon: 'shield' },
        { title: '绿色账本碳足迹核算', desc: '借助 SAP 绿色账本技术，在披露企业财务状况的同时平行披露精细的碳排指标。', icon: 'leaf' }
      ],
      playbook: {
        tag: '绿色低碳',
        title: '智能电网计费中台搭建',
        desc: 'Dstellar 为一家欧洲清洁能源合作社打造了表计计费中台，支持管理数百万种复杂的动态阶梯电价。',
        metrics: '出账处理周期由原来的 4 天缩短至 4 小时以内。'
      },
      inquiryTitle: '联系我们的能源与公用事业专家',
      namePlaceholder: '您的姓名',
      emailPlaceholder: '电子邮箱',
      msgPlaceholder: '请简述您的电网资产改造或碳中和信息化目标...',
      submitBtn: '获取专业咨询',
      successMsg: '谢谢！我们的公用事业咨询顾问会尽快与您联系。'
    },
    'life-sciences-healthcare': {
      slug: 'life-sciences-healthcare',
      badge: '生命科学',
      title: '生命科学与医疗合规治理',
      subtitle: 'GxP 合规规范、临床试验数据追踪及无菌供应链追溯。',
      overview: '满足极为严苛的 GxP 和 FDA 监管标准。Dstellar 为药企、生物科技和医疗器械企业构建了符合审计规范的 ERP 系统，确立端到端的精确批次追踪。',
      gradientClass: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 50%, #312e81 100%)',
      themeColor: '#4338ca',
      stats: [
        { value: '100%', label: 'GxP/FDA 审计合规率' },
        { value: '45%', label: '供应链追溯效率提升' },
        { value: '25+', label: '临床试验集成数' }
      ],
      solutions: [
        { title: '冷链无菌供应网络', desc: '精细追踪化学原料药及半成品仓库的冷链环境温度，确保无菌储运记录符合要求。', icon: 'heart' },
        { title: '全面质量管理 (QM)', desc: '在 SAP 内部建立从批次抽样质检、质量不合格处置流程到生成放行报告的闭环。', icon: 'search' },
        { title: '临床试验费用管理', desc: '在安全的 SAP 软件体系下精细管理临床研发费用、供应商账目及受试者随访信息。', icon: 'activity' }
      ],
      playbook: {
        tag: '合规治理',
        title: '跨国药企疫苗冷链追踪',
        desc: '基于 S/4HANA 帮助某国际生物技术巨头搭建了无缝的药剂冷链物流和质检批次追溯平台。',
        metrics: '在 FDA 的合规性突击现场检查中获得 100% 的满分评价。'
      },
      inquiryTitle: '与我们的医疗卫生顾问交流',
      namePlaceholder: '您的姓名',
      emailPlaceholder: '电子邮箱',
      msgPlaceholder: '请简述您的 GxP 流程或生物冷链物流需求...',
      submitBtn: '预约合规评估',
      successMsg: '谢谢！我们的合规专家团队将立即与您联系。'
    },
    'government-public-sector': {
      slug: 'government-public-sector',
      badge: '公共部门',
      title: '政府与公共服务体系',
      subtitle: '透明化财政资金管理、公共采购审计及数字市民服务门户。',
      overview: '以严谨的财政监督打造市民首选服务体系。Dstellar 协助各级政府将老旧的大型主机系统平稳迁移至现代化的 SAP 公共部门解决方案。',
      gradientClass: 'linear-gradient(135deg, #0a0f1d 0%, #1e3a8a 50%, #172554 100%)',
      themeColor: '#1e3a8a',
      stats: [
        { value: '$4.2B', label: '审计的政府基金规模' },
        { value: '15M+', label: '服务的市民总量' },
        { value: '40%', label: '政府公共采购周期缩短' }
      ],
      solutions: [
        { title: '政府财政资金管理', desc: '管理财政预决算资金分配指标，追踪拨付链路，生成公开透明的政府财政审计底稿。', icon: 'lock' },
        { title: '数字市民服务平台', desc: '通过基于 Fiori 技术的市民门户系统，方便办理市政费用缴纳、工商执照注册及行政许可。', icon: 'user' },
        { title: '规范的招投标公共采购', desc: '自动协调供货商资格审查、比价流程及合同管理，全面满足公共采购审计监管规范。', icon: 'document' }
      ],
      playbook: {
        tag: '公共服务',
        title: '市政管理 ERP 升级改造',
        desc: '用 S/4HANA Public Sector 替换了运行 25 年的旧主机，优化了 12 个市政管辖区的财务统筹和公共服务费收缴效率。',
        metrics: '审计周期整体缩短了 50%。'
      },
      inquiryTitle: '联系我们的公共部门顾问',
      namePlaceholder: '您的姓名',
      emailPlaceholder: '电子邮箱',
      msgPlaceholder: '请阐述您的政府机构信息化或采购升级要求...',
      submitBtn: '发送咨询',
      successMsg: '咨询登记成功。我们的公共部门信息化顾问会与您对接。'
    },
    'capital-markets': {
      slug: 'capital-markets',
      badge: '金融资本',
      title: '金融服务与资本市场系统',
      subtitle: '交易全生命周期自动化、实时风险控制监测以及监管合规报送。',
      overview: '为金融机构打造高并发、高弹性的资金中台。Dstellar 在 SAP 金融财资模块中开发并集成了交易结算跟踪、流动性头寸预警和监管报表工具。',
      gradientClass: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
      themeColor: '#312e81',
      stats: [
        { value: '0.2ms', label: '实时风控延迟' },
        { value: '99.999%', label: '核心系统可用率' },
        { value: '$120B+', label: '管理的资金资产规模' }
      ],
      solutions: [
        { title: '财资与金融风险管理', desc: '自动预测集团内部流动性头寸，管理外汇敞口，处理复杂利率期权和对冲套保账务。', icon: 'currency' },
        { title: '交易自动对账结算', desc: '高并发清算撮合金融交易，自动实现资金流水勾稽以及同业对账结算。', icon: 'exchange' },
        { title: '金融合规监管报送', desc: '自动汇整并输出符合 SEC 和当地金融局要求的交易快照和日常合规日志。', icon: 'file-text' }
      ],
      playbook: {
        tag: '金融科技',
        title: '跨国投资集团财资平台改造',
        desc: '为一家国际投资管理公司实施了横跨 24 个境外货币局的全球集中流动性管控和实时头寸对账系统。',
        metrics: '集团合并报表扎帐关账周期由 6 天缩短至 90 秒。'
      },
      inquiryTitle: '获取金融科技专家解决方案',
      namePlaceholder: '您的姓名',
      emailPlaceholder: '电子邮箱',
      msgPlaceholder: '请简述您的财资管理或同业清算系统升级要求...',
      submitBtn: '预约沟通会议',
      successMsg: '沟通预约已发送。我们的金融服务团队会联系您。'
    },
    'travel-hospitality': {
      slug: 'travel-hospitality',
      badge: '旅游酒店',
      title: '旅游与酒店行业信息化',
      subtitle: '动态客票价格管理、客房收益率优化及大交通物流运转。',
      overview: '打通旅客预订前台与物流运力后台。Dstellar 设计的统一业务管理平台，可实时协同零售收银 (POS)、在线预订系统和运力资源库。',
      gradientClass: 'linear-gradient(120deg, #3b0764 0%, #7c3aed 50%, #c084fc 100%)',
      themeColor: '#7c3aed',
      stats: [
        { value: '30M+', label: '处理的预订订单数' },
        { value: '98%', label: '宾客服务满意度指标' },
        { value: '+14%', label: '客房平均收益率增长' }
      ],
      solutions: [
        { title: '阶梯价格计算引擎', desc: '实时调取酒店库存和多维度历史订房流量，向预订平台输出最佳动态客房定价。', icon: 'tag' },
        { title: '大交通旅客物流', desc: '运用 SAP 物流和运力调度模块，优化航空配餐流程、航线轮换计划以及行李跟踪。', icon: 'plane' },
        { title: '统一积分会员中心', desc: '在高并发的 ERP 内存数据库中安全管理数千万会员的航空里程及消费累积分。', icon: 'star' }
      ],
      playbook: {
        tag: '系统改造',
        title: '大型航空公司票务后台重构',
        desc: 'Dstellar 为某大型航空公司开发了高负载的动态票价计费后台，能从容承接每秒 5,000 次的并发询价请求。',
        metrics: '会员常旅客积分的跨区域刷新延迟缩短到 2 秒内。'
      },
      inquiryTitle: '联系我们的旅游与酒店业务团队',
      namePlaceholder: '您的姓名',
      emailPlaceholder: '电子邮箱',
      msgPlaceholder: '请简述您的订座中台或车队客轮运力痛点...',
      submitBtn: '预约系统诊断',
      successMsg: '系统诊断需求已登记。我们的业务顾问会尽快与您交流。'
    },
    construction: {
      slug: 'construction',
      badge: '工程建设',
      title: '工程建设与大型基础设施',
      subtitle: '项目概算与工作分解结构 (WBS)、分包协同以及重型机械物流。',
      overview: '合理管控项目概算与执行周期。Dstellar 将 SAP 项目管理 (PS) 模块与移动现场填报系统整合，高效协同现场材料配送及劳务分包班组。',
      gradientClass: 'linear-gradient(135deg, #1e293b 0%, #d97706 60%, #b45309 100%)',
      themeColor: '#d97706',
      stats: [
        { value: '25%', label: '工程概算超支降低' },
        { value: '100%', label: '分包班组合规率' },
        { value: '450+', label: '交付的大型基建工程' }
      ],
      solutions: [
        { title: '工作分解结构 (WBS)', desc: '在 SAP PS 模块中建立清晰的基建施工工序，关联到各分包商结算里程碑。', icon: 'grid' },
        { title: '重型设备精细化盘点', desc: '监控盾构机及大型工程设备的定位和柴油工时遥测，防范损坏损失并优化租赁管理。', icon: 'hammer' },
        { title: '材料物资准时供应', desc: '确保钢筋、商品混凝土等大宗物资准时到货，避免产生现场停工待料和延误罚金。', icon: 'shield' }
      ],
      playbook: {
        tag: '优秀案例',
        title: '地铁隧道大型工程协调',
        desc: '为一家大型路桥承包商开发了现场移动填报系统，将材料签收与 S/4HANA 项目管理和概算审核深度集成。',
        metrics: '使分包商工程款核算进度加快了 60%。'
      },
      inquiryTitle: '联系我们的工程建设信息化顾问',
      namePlaceholder: '您的姓名',
      emailPlaceholder: '电子邮箱',
      msgPlaceholder: '请简述您的基建项目分布或物资调配瓶颈...',
      submitBtn: '发送消息',
      successMsg: '消息已发送。我们的工业基建专家会尽快与您联系。'
    }
  },
  de: {
    automotive: {
      slug: 'automotive',
      badge: 'Automobil',
      title: 'Digitale Transformation der Automobilindustrie',
      subtitle: 'Vernetzte Fahrzeuge, optimierte Händlernetzwerke und intelligente Fabrikabläufe.',
      overview: 'Dstellar befähigt Automobilhersteller (OEMs) und Zulieferer, widerstandsfähige Lieferketten aufzubauen, vernetzte Fahrzeugarchitekturen zu skalieren und die Produktion zu optimieren. Wir migrieren Altsysteme in Clean-Core-S/4HANA-Lösungen.',
      gradientClass: 'linear-gradient(135deg, #1a0b3d 0%, #4a3aff 45%, #00d4c8 100%)',
      themeColor: '#4a3aff',
      stats: [
        { value: '35%', label: 'Produktionseffizienz' },
        { value: '2M+', label: 'Vernetzte Fahrzeuge' },
        { value: '15+', label: 'Integrierte Tier-1-Zulieferer' }
      ],
      solutions: [
        { title: 'Vernetzte Telematik', desc: 'Erfassen und analysieren Sie Millionen von Telemetriesignalen direkt in SAP HANA.', icon: 'telematics' },
        { title: 'Intelligente Fabrik', desc: 'Integrieren Sie Manufacturing Execution Systems (MES) in SAP ERP für eine Bestandsübersicht in Echtzeit.', icon: 'factory' },
        { title: 'Händler- & Ersatzteilnetzwerke', desc: 'Automatisieren Sie Auftragsabwicklung, Abrechnung und globalen Versand für Aftermarket-Teile.', icon: 'truck' }
      ],
      playbook: {
        tag: 'Erfolgsgeschichte',
        title: 'Anbindung von 2 Millionen Fahrzeugen',
        desc: 'Wie Dstellar einem globalen Automobilhersteller half, Echtzeit-Fahrzeugdaten mit SAP S/4HANA Finance und Abrechnungssystemen zu synchronisieren.',
        metrics: '99,99 % Systemverfügbarkeit bei Telemetriespitzen erreicht.'
      },
      inquiryTitle: 'Kontaktieren Sie unsere Automobil-Spezialisten',
      namePlaceholder: 'Ihr Name',
      emailPlaceholder: 'E-Mail-Adresse',
      msgPlaceholder: 'Erzählen Sie uns von Ihrem Projekt...',
      submitBtn: 'Anfrage senden',
      successMsg: 'Vielen Dank! Unser Automobil-Team wird sich in Kürze mit Ihnen in Verbindung setzen.'
    },
    'consumer-products': {
      slug: 'consumer-products',
      badge: 'CPG',
      title: 'Konsumgüter & Einzelhandelsabläufe',
      subtitle: 'Echtzeit-Bedarfserkennung, Verkaufsförderung und Omnichannel-Koordination.',
      overview: 'Verkürzen Sie Zykluszeiten und optimieren Sie Bestände. Dstellar liefert maßgeschneiderte SAP-Systeme, die Produktion und Händlernetzwerke direkt verknüpfen.',
      gradientClass: 'linear-gradient(120deg, #4a3aff 0%, #ff7a00 45%, #ff8a3d 100%)',
      themeColor: '#ff7a00',
      stats: [
        { value: '+28%', label: 'Auftragsabwicklungstempo' },
        { value: '40%', label: 'Reduzierung der Lagerhaltung' },
        { value: '12', label: 'Verwaltete globale Marken' }
      ],
      solutions: [
        { title: 'Bedarfserkennung & Planung', desc: 'Nutzen Sie prädiktive ML-Analysen, um Marktschwankungen vorherzusehen und Rohstoffeinkäufe abzustimmen.', icon: 'chart' },
        { title: 'Omnichannel-Auftragsverwaltung', desc: 'Konsolidieren Sie Aufträge von Partnern, E-Commerce und Ladengeschäften in einem System.', icon: 'shopping' },
        { title: 'Verkaufsförderungsoptimierung', desc: 'Verwalten Sie Lieferantenvereinbarungen, Rabattberechnungen und Händlergutschriften automatisch in SAP.', icon: 'piggy' }
      ],
      playbook: {
        tag: 'Fallstudie',
        title: 'Globale Bestandsoptimierung',
        desc: 'Wie eine multinationale Lebensmittelmarke die Lagerkosten durch Verknüpfung von Echtzeit-Verkäufen mit automatisierter Logistik senkte.',
        metrics: '14 Mio. $ jährliche Einsparungen bei Lagerkosten erzielt.'
      },
      inquiryTitle: 'Kontaktieren Sie unsere Konsumgüter-Experten',
      namePlaceholder: 'Ihr Name',
      emailPlaceholder: 'E-Mail-Adresse',
      msgPlaceholder: 'Beschreiben Sie Ihre Herausforderungen...',
      submitBtn: 'Beratung anfordern',
      successMsg: 'Anfrage erhalten. Unsere Konsumgüter-Experten werden sich melden.'
    },
    'electronic-high-tech': {
      slug: 'electronic-high-tech',
      badge: 'High-Tech',
      title: 'High-Tech & Elektronik-Systeme',
      subtitle: 'Management schneller Produktzyklen, Reinraumabläufe und komplexer Lieferketten.',
      overview: 'High-Tech erfordert Schnelligkeit und Präzision. Dstellar optimiert das Produktlebenszyklus-Management, Reinraumchargen und die Lieferantenkooperation via SAP BTP.',
      gradientClass: 'linear-gradient(135deg, #0f172a 0%, #3b82f6 50%, #1d4ed8 100%)',
      themeColor: '#3b82f6',
      stats: [
        { value: '3.5x', label: 'Schnellere Markteinführung' },
        { value: '100%', label: 'Chargenrückverfolgbarkeit' },
        { value: '500M+', label: 'Täglich verfolgte Komponenten' }
      ],
      solutions: [
        { title: 'Produktlebenszyklus-Management', desc: 'Verfolgen Sie Hardware-Designs, Stücklisten (BOM) und Upgrades nahtlos über ERP-Stufen hinweg.', icon: 'cpu' },
        { title: 'GxP & Chargenrückverfolgung', desc: 'Verfolgen Sie Silizium-Wafer und Mikrokomponenten vom Rohstoff bis zum Endprodukt.', icon: 'database' },
        { title: 'Agiles Lieferantenportal', desc: 'Ermöglichen Sie es Zulieferern, Lieferzeiten und Preislisten automatisch abzustimmen.', icon: 'globe' }
      ],
      playbook: {
        tag: 'Transformation',
        title: 'Upgrade der Siliziumfertigung',
        desc: 'Implementierung einer Clean-Core-Migration auf SAP S/4HANA für einen großen Halbleiterhersteller, inklusive Ablösung von Altanpassungen durch BTP-Erweiterungen.',
        metrics: 'Keine Ausfallzeiten beim weltweiten Go-Live.'
      },
      inquiryTitle: 'Kontaktieren Sie unsere High-Tech-Spezialisten',
      namePlaceholder: 'Ihr Name',
      emailPlaceholder: 'E-Mail-Adresse',
      msgPlaceholder: 'Nennen Sie uns Ihre Produkt- oder Entwicklungsanforderungen...',
      submitBtn: 'Nachricht senden',
      successMsg: 'Nachricht gesendet! Unsere Technik-Architekten werden Ihre Angaben prüfen.'
    },
    'manufacturing-industrial': {
      slug: 'manufacturing-industrial',
      badge: 'Industrie',
      title: 'Industrielle Fertigungslösungen',
      subtitle: 'Diskrete Produktionsplanung, vorausschauende Instandhaltung und Asset-Management.',
      overview: 'Halten Sie die Montagelinie am Laufen. Dstellar verknüpft Betriebstechnik (OT) mit der SAP Instandhaltung (PM), um Ausfälle vorherzusehen und Arbeitsaufträge zu automatisieren.',
      gradientClass: 'linear-gradient(135deg, #1e293b 0%, #475569 50%, #0f172a 100%)',
      themeColor: '#475569',
      stats: [
        { value: '18%', label: 'Weniger Ausfallzeiten der Ausrüstung' },
        { value: '100%', label: 'Einhaltung von Sicherheitsregeln' },
        { value: '80+', label: 'Modernisierte Fabriken' }
      ],
      solutions: [
        { title: 'Prädiktive Instandhaltung', desc: 'Überwachen Sie Maschinenvibrationen und Telemetrie, um automatisch SAP PM-Arbeitsaufträge zu erzeugen.', icon: 'wrench' },
        { title: 'Diskrete Fertigung', desc: 'Stimmen Sie den Maschinendurchsatz mit Echtzeit-Aufträgen ab, um Bestandsengpässe zu vermeiden.', icon: 'cogs' },
        { title: 'Vorausschauende Qualitätssicherung', desc: 'Erfassen Sie Sensorkennzahlen direkt an der Linie, um Fehler vor dem Versand zu erkennen.', icon: 'check' }
      ],
      playbook: {
        tag: 'Fallstudie',
        title: 'Vernetzte Schwermaschinen',
        desc: 'Automatisierte Instandhaltungsplanung in 42 Werken durch Integration physischer Steuerungen (SPS) in SAP.',
        metrics: 'Instandhaltungskosten um 22 % innerhalb von 12 Monaten gesenkt.'
      },
      inquiryTitle: 'Kontaktieren Sie unsere Fertigungsberater',
      namePlaceholder: 'Ihr Name',
      emailPlaceholder: 'E-Mail-Adresse',
      msgPlaceholder: 'Erzählen Sie uns von Ihren Werksabläufen...',
      submitBtn: 'Kontakt aufnehmen',
      successMsg: 'Anfrage erhalten. Wir werden uns bezüglich der Fabrikautomatisierung bei Ihnen melden.'
    },
    'energy-utilities': {
      slug: 'energy-utilities',
      badge: 'Energie',
      title: 'Energie & Intelligente Versorgungsnetze',
      subtitle: 'Smart Metering, Anlagen-Management und Dekarbonisierungs-Buchhaltung.',
      overview: 'Gestalten Sie den Übergang zu nachhaltiger Energieerzeugung. Dstellar bietet Abrechnungen über SAP IS-U, Anlagenverfolgung und CO2-Erfassung für strenge Audits.',
      gradientClass: 'linear-gradient(135deg, #111827 0%, #15803d 50%, #064e3b 100%)',
      themeColor: '#15803d',
      stats: [
        { value: '45M+', label: 'Verarbeitete Zählerstände' },
        { value: '100%', label: 'Einhaltung gesetzlicher Vorgaben' },
        { value: '30%', label: 'Verfolgte CO2-Reduzierung' }
      ],
      solutions: [
        { title: 'Smart-Meter-Abrechnung', desc: 'Schnellste Erfassung von IoT-Zählerdaten gekoppelt mit automatischer Rechnungserstellung.', icon: 'bolt' },
        { title: 'Anlagen-Management', desc: 'Verfolgen Sie Umspannwerke, Netze und Turbinen auf mit SAP integrierten geografischen Karten.', icon: 'shield' },
        { title: 'CO2-Buchhaltung (Green Ledger)', desc: 'Erfassen Sie CO2-Emissionen parallel zu Finanzdaten über SAP Green Ledger-Integrationen.', icon: 'leaf' }
      ],
      playbook: {
        tag: 'Nachhaltigkeit',
        title: 'Transformation zum Smart Grid',
        desc: 'Dstellar entwickelte eine intelligente Abrechnungs-Engine für dynamische Tarife für eine europäische Ökostrom-Genossenschaft.',
        metrics: 'Abrechnungszeitraum von 4 Tagen auf 4 Stunden verkürzt.'
      },
      inquiryTitle: 'Kontaktieren Sie unsere Energie-Spezialisten',
      namePlaceholder: 'Ihr Name',
      emailPlaceholder: 'E-Mail-Adresse',
      msgPlaceholder: 'Erzählen Sie uns von Ihren Modernisierungszielen...',
      submitBtn: 'Fachberatung anfordern',
      successMsg: 'Vielen Dank! Unser Energie-Team wird sich mit Ihnen in Verbindung setzen.'
    },
    'life-sciences-healthcare': {
      slug: 'life-sciences-healthcare',
      badge: 'Life Sciences',
      title: 'Compliance in Life Sciences & Gesundheit',
      subtitle: 'GxP-Konformität, Nachverfolgung klinischer Studien und Sterillogistik.',
      overview: 'Sichern Sie strikte GxP- und FDA-Konformität. Dstellar baut validierte, auditsichere ERP-Plattformen für Pharma-, Biotech- und Medizintechnikunternehmen.',
      gradientClass: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 50%, #312e81 100%)',
      themeColor: '#4338ca',
      stats: [
        { value: '100%', label: 'GxP/FDA-Auditkonformität' },
        { value: '45%', label: 'Schnellere Lieferketten-Audits' },
        { value: '25+', label: 'Integrierte klinische Studien' }
      ],
      solutions: [
        { title: 'Sterile Lieferkette', desc: 'Überwachen Sie Kühlkettenbedingungen und Sterilitätsanforderungen in Rohstofflagern.', icon: 'heart' },
        { title: 'Qualitätsmanagement (QM)', desc: 'Automatisieren Sie Qualitätskontrollen, Validierungsworkflows und Compliance-Berichte.', icon: 'search' },
        { title: 'Verfolgung klinischer Studien', desc: 'Verwalten Sie Kosten, Logistik und Studienparameter in einer sicheren SAP-Architektur.', icon: 'activity' }
      ],
      playbook: {
        tag: 'Compliance',
        title: 'Globale Impfstoff-Lieferkette',
        desc: 'Implementierung einer sterilen Kühlketten-Chargenverwaltung und Lieferverfolgung mit SAP S/4HANA für ein Biotech-Unternehmen.',
        metrics: '100 % Audit-Bewertung bei einer FDA-Inspektion erzielt.'
      },
      inquiryTitle: 'Sprechen Sie mit einem Gesundheits-Consultant',
      namePlaceholder: 'Ihr Name',
      emailPlaceholder: 'E-Mail-Adresse',
      msgPlaceholder: 'Beschreiben Sie Ihre GxP-Anforderungen...',
      submitBtn: 'Briefing anfordern',
      successMsg: 'Vielen Dank. Unser Compliance-Team wird sich umgehend melden.'
    },
    'government-public-sector': {
      slug: 'government-public-sector',
      badge: 'Öffentlicher Sektor',
      title: 'Staat & Öffentliche Dienste',
      subtitle: 'Transparente Budgetverfolgung, öffentliches Beschaffungswesen und Bürgerportale.',
      overview: 'Liefern Sie bürgerzentrierte Dienste mit absoluter Finanztransparenz. Dstellar unterstützt Behörden bei der Ablösung veralteter Systeme durch SAP Public Sector.',
      gradientClass: 'linear-gradient(135deg, #0a0f1d 0%, #1e3a8a 50%, #172554 100%)',
      themeColor: '#1e3a8a',
      stats: [
        { value: '$4.2B', label: 'Geprüfte öffentliche Gelder' },
        { value: '15M+', label: 'Betreute Bürger' },
        { value: '40%', label: 'Verkürzung der Beschaffungszyklen' }
      ],
      solutions: [
        { title: 'Haushaltsmanagement (FI-FM)', desc: 'Budgetüberwachung, Verwaltung kommunaler Zuschüsse und Erstellung öffentlicher Finanzberichte.', icon: 'lock' },
        { title: 'Digitale Bürgerdienste', desc: 'Fiori-Bürgerportale für kommunale Abrechnungen, Gewerbeanmeldungen und Genehmigungen.', icon: 'user' },
        { title: 'Öffentliche Beschaffung', desc: 'Automatisieren Sie Ausschreibungsverfahren und Vertragsmanagement gemäß den Prüfstandards.', icon: 'document' }
      ],
      playbook: {
        tag: 'Öffentlicher Dienst',
        title: 'Kommunale ERP-Modernisierung',
        desc: 'Ablösung eines 25 Jahre alten Großrechners durch S/4HANA Public Sector in 12 kommunalen Bezirken.',
        metrics: 'Zeitaufwand für Audits um 50 % verkürzt.'
      },
      inquiryTitle: 'Kontaktieren Sie unsere Berater für den öffentlichen Sektor',
      namePlaceholder: 'Ihr Name',
      emailPlaceholder: 'E-Mail-Adresse',
      msgPlaceholder: 'Beschreiben Sie Ihre Anforderungen...',
      submitBtn: 'Anfrage senden',
      successMsg: 'Anfrage registriert. Unser Team wird sich mit Ihrer Dienststelle in Verbindung setzen.'
    },
    'capital-markets': {
      slug: 'capital-markets',
      badge: 'Kapitalmärkte',
      title: 'Systeme für Kapitalmärkte',
      subtitle: 'Automatisierung des Handelszyklus, Echtzeit-Risikoanalyse und Compliance.',
      overview: 'Bauen Sie leistungsstarke Kernsysteme für das Bankwesen. Dstellar implementiert Handelsabwicklungen, Liquiditätsverfolgung und Audit-Dashboards direkt in SAP Treasury.',
      gradientClass: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
      themeColor: '#312e81',
      stats: [
        { value: '0.2ms', label: 'Latenz bei Risikoberechnungen' },
        { value: '99.999%', label: 'Systemverfügbarkeit' },
        { value: '$120B+', label: 'Verwaltetes Vermögen' }
      ],
      solutions: [
        { title: 'Treasury & Risikomanagement', desc: 'Automatisieren Sie Finanzdispositionen, Liquiditätsprognosen und Absicherungsgeschäfte.', icon: 'currency' },
        { title: 'Handelsabwicklungs-Engine', desc: 'Verarbeiten Sie institutionelle Geschäfte, Clearings und Kontoabstimmungen in Echtzeit.', icon: 'exchange' },
        { title: 'Compliance-Berichterstattung', desc: 'Erstellen Sie Audit-Logs zur Einhaltung von SEC, MiFID II und lokalen Vorgaben.', icon: 'file-text' }
      ],
      playbook: {
        tag: 'Finanztechnologie',
        title: 'Modernisierung des Treasury-Systems',
        desc: 'Implementierung einer Echtzeit-Risikobuchhaltung und Cash-Verfolgung für ein internationales Wertpapierhaus.',
        metrics: 'Konsolidierungszeiten von 6 Tagen auf 90 Sekunden reduziert.'
      },
      inquiryTitle: 'Beratung für Finanzdienstleistungen anfordern',
      namePlaceholder: 'Ihr Name',
      emailPlaceholder: 'E-Mail-Adresse',
      msgPlaceholder: 'Beschreiben Sie Ihre Anforderungen im Treasury...',
      submitBtn: 'Termin vereinbaren',
      successMsg: 'Anfrage gesendet. Unser Team wird sich mit Ihnen in Verbindung setzen.'
    },
    'travel-hospitality': {
      slug: 'travel-hospitality',
      badge: 'Gastgewerbe',
      title: 'Reisen & Gastgewerbe-Systeme',
      subtitle: 'Dynamisches Passagiermanagement, Ertragsoptimierung und globale Logistik.',
      overview: 'Sorgen Sie für reibungslose Reisen und ausgebuchte Zimmer. Dstellar entwirft Backend-Systeme, die Buchungsportale und Logistikdatenbanken abstimmen.',
      gradientClass: 'linear-gradient(120deg, #3b0764 0%, #7c3aed 50%, #c084fc 100%)',
      themeColor: '#7c3aed',
      stats: [
        { value: '30M+', label: 'Verarbeitete Buchungen' },
        { value: '98%', label: 'Gäste-Zufriedenheitsindex' },
        { value: '+14%', label: 'Wachstum des Yield-Management-Ertrags' }
      ],
      solutions: [
        { title: 'Dynamische Tariferfassung', desc: 'Echtzeit-Preiskalkulationen gekoppelt an Belegungsdaten und historische Saisonalität.', icon: 'tag' },
        { title: 'Passagierlogistik', desc: 'Optimieren Sie Routenplanung, Gepäckverfolgung und Catering mit SAP-Logistikmodulen.', icon: 'plane' },
        { title: 'Vereinheitlichte Kundenbindung', desc: 'Verwalten Sie Millionen von Vielflieger- und Prämienpunkten in einem High-Speed-ERP.', icon: 'star' }
      ],
      playbook: {
        tag: 'Transformation',
        title: 'Modernisierung von Passagierdaten',
        desc: 'Dstellar baute eine dynamische Preis- und Ticketing-Datenbank für 5.000 Abfragen pro Sekunde bei einer Fluggesellschaft.',
        metrics: 'Verzögerungen bei der Aktualisierung von Statuspunkten auf unter 2 Sekunden gesenkt.'
      },
      inquiryTitle: 'Kontaktieren Sie unser Reiseteam',
      namePlaceholder: 'Ihr Name',
      emailPlaceholder: 'E-Mail-Adresse',
      msgPlaceholder: 'Beschreiben Sie Ihre Buchungssysteme...',
      submitBtn: 'Kostenlose Prüfung anfordern',
      successMsg: 'Anfrage erhalten. Unser Team wird sich mit Ihnen in Verbindung setzen.'
    },
    construction: {
      slug: 'construction',
      badge: 'Bauwesen',
      title: 'Bauwirtschaft & Infrastruktur',
      subtitle: 'Projektkalkulation (WBS), Subunternehmer-Koordination und Baustellenlogistik.',
      overview: 'Bringen Sie Projekte pünktlich und im Budget ins Ziel. Dstellar integriert SAP Project System (PS) mit mobilen Apps zur Material- und Crewkoordination.',
      gradientClass: 'linear-gradient(135deg, #1e293b 0%, #d97706 60%, #b45309 100%)',
      themeColor: '#d97706',
      stats: [
        { value: '25%', label: 'Reduzierung von Budgetüberschreitungen' },
        { value: '100%', label: 'Subunternehmer-Kontrolle' },
        { value: '450+', label: 'Gelieferte Großprojekte' }
      ],
      solutions: [
        { title: 'Projektstrukturplanung (PSP)', desc: 'Planen Sie mehrjährige Bauphasen und Abrechnungsmeilensteine direkt in SAP PS.', icon: 'grid' },
        { title: 'Geräteverfolgung & Telemetrie', desc: 'Überwachen Sie die Auslastung von Baumaschinen, um Ausfälle zu vermeiden und die Miete zu optimieren.', icon: 'hammer' },
        { title: 'Lieferketten für Baustoffe', desc: 'Sichern Sie die termingerechte Anlieferung von Beton, Stahl und Technik zur Vermeidung von Verzugsstrafen.', icon: 'shield' }
      ],
      playbook: {
        tag: 'Fallstudie',
        title: 'Logistik beim U-Bahn-Bau',
        desc: 'Aufbau eines Systems zur Baustellenerfassung gekoppelt an S/4HANA Project Systems für ein großes Infrastrukturprojekt.',
        metrics: 'Abrechnungsgeschwindigkeit der Subunternehmer um 60 % verbessert.'
      },
      inquiryTitle: 'Kontaktieren Sie unsere Bauexperten',
      namePlaceholder: 'Ihr Name',
      emailPlaceholder: 'E-Mail-Adresse',
      msgPlaceholder: 'Beschreiben Sie Ihre Projektanforderungen...',
      submitBtn: 'Nachricht senden',
      successMsg: 'Nachricht gesendet. Unsere Bauexperten werden sich telefonisch bei Ihnen melden.'
    }
  },
  fr: {
    automotive: {
      slug: 'automotive',
      badge: 'Automobile',
      title: 'Transformation Numérique Automobile',
      subtitle: 'Véhicules connectés, réseaux de concessionnaires optimisés et usines intelligentes.',
      overview: 'Dstellar permet aux constructeurs et équipementiers automobiles de bâtir des chaînes d\'approvisionnement résilientes, de déployer des architectures de véhicules connectés et d\'optimiser la production. Nous migrons les ERP existants vers S/4HANA sur un modèle clean-core.',
      gradientClass: 'linear-gradient(135deg, #1a0b3d 0%, #4a3aff 45%, #00d4c8 100%)',
      themeColor: '#4a3aff',
      stats: [
        { value: '35%', label: 'Efficacité de Production' },
        { value: '2M+', label: 'Véhicules Connectés' },
        { value: '15+', label: 'Fournisseurs Tier-1 Intégrés' }
      ],
      solutions: [
        { title: 'Télématique Connectée', desc: 'Collectez et analysez des millions de signaux de télématique embarquée directement dans SAP HANA.', icon: 'telematics' },
        { title: 'Usine Connectée', desc: 'Intégrez les systèmes d\'exécution de la fabrication (MES) à SAP ERP pour une visibilité des stocks en temps réel.', icon: 'factory' },
        { title: 'Réseaux concessionnaires', desc: 'Automatisez le traitement des commandes et la logistique globale des pièces de rechange.', icon: 'truck' }
      ],
      playbook: {
        tag: 'Succès Client',
        title: 'Connexion de 2 Millions de Véhicules',
        desc: 'Comment Dstellar a aidé un constructeur mondial à synchroniser les données de télématique en temps réel avec SAP S/4HANA Finance et la facturation.',
        metrics: 'Disponibilité du système à 99,99 % atteinte pendant les pics de télémétrie.'
      },
      inquiryTitle: 'Contacter nos Spécialistes de l\'Automobile',
      namePlaceholder: 'Votre Nom',
      emailPlaceholder: 'Adresse E-mail',
      msgPlaceholder: 'Parlez-nous de votre projet...',
      submitBtn: 'Envoyer la Demande',
      successMsg: 'Merci ! Notre équipe dédiée à l\'automobile vous contactera très rapidement.'
    },
    'consumer-products': {
      slug: 'consumer-products',
      badge: 'CPG',
      title: 'Biens de Consommation & Distribution',
      subtitle: 'Analyse prédictive de la demande, promotions commerciales et commerce omnicanal.',
      overview: 'Accélérez la rotation des stocks et optimisez les coûts d\'entreposage. Dstellar fournit des solutions SAP sur mesure reliant les usines aux distributeurs.',
      gradientClass: 'linear-gradient(120deg, #4a3aff 0%, #ff7a00 45%, #ff8a3d 100%)',
      themeColor: '#ff7a00',
      stats: [
        { value: '+28%', label: 'Taux de Service Client' },
        { value: '40%', label: 'Réduction des Niveaux de Stock' },
        { value: '12', label: 'Marques Mondiales Gérées' }
      ],
      solutions: [
        { title: 'Prévision de la Demande', desc: 'Utilisez des algorithmes ML pour anticiper les variations du marché et ajuster les approvisionnements.', icon: 'chart' },
        { title: 'Commandes Omnicanales', desc: 'Centralisez les flux de commandes e-commerce, boutiques physiques et distributeurs dans un journal unique.', icon: 'shopping' },
        { title: 'Optimisation des Promotions', desc: 'Gérez automatiquement les accords fournisseurs, remises et calculs de ristournes dans SAP.', icon: 'piggy' }
      ],
      playbook: {
        tag: 'Étude de Cas',
        title: 'Optimisation des Stocks Globaux',
        desc: 'Comment une marque agroalimentaire mondiale a réduit ses frais d\'entreposage en intégrant les données de vente au système logistique.',
        metrics: '14 M$ d\'économies annuelles de stockage réalisées.'
      },
      inquiryTitle: 'Contacter nos Experts CPG',
      namePlaceholder: 'Votre Nom',
      emailPlaceholder: 'Adresse E-mail',
      msgPlaceholder: 'Décrivez vos défis de distribution ou de logistique...',
      submitBtn: 'Demander une Consultation',
      successMsg: 'Demande reçue. Nos experts en biens de consommation vont vous recontacter.'
    },
    'electronic-high-tech': {
      slug: 'electronic-high-tech',
      badge: 'High-Tech',
      title: 'Systèmes Électroniques & High-Tech',
      subtitle: 'Gestion des cycles de vie courts, traçabilité des lots et collaboration fournisseurs.',
      overview: 'Le secteur high-tech exige réactivité et exactitude. Dstellar optimise la gestion du cycle de vie des produits, la traçabilité des lots et le portail fournisseurs sur SAP BTP.',
      gradientClass: 'linear-gradient(135deg, #0f172a 0%, #3b82f6 50%, #1d4ed8 100%)',
      themeColor: '#3b82f6',
      stats: [
        { value: '3.5x', label: 'Accélération du Time-to-Market' },
        { value: '100%', label: 'Conformité Traçabilité des Lots' },
        { value: '500M+', label: 'Composants Traqués Quotidiennement' }
      ],
      solutions: [
        { title: 'Gestion du Cycle de Vie (PLM)', desc: 'Suivez le design matériel, les nomenclatures (BOM) et les évolutions techniques dans l\'ERP.', icon: 'cpu' },
        { title: 'Traçabilité GxP des Lots', desc: 'Traquez les plaques de silicium et microcomposants, des matières premières aux produits finis.', icon: 'database' },
        { title: 'Portail Fournisseurs Agile', desc: 'Permettez aux sous-traitants et fondeurs de coordonner les délais et les grilles tarifaires.', icon: 'globe' }
      ],
      playbook: {
        tag: 'Transformation',
        title: 'Modernisation de la Production de Semi-conducteurs',
        desc: 'Migration vers un SAP S/4HANA clean-core pour un grand fabricant, déportant les développements spécifiques vers des apps SAP BTP.',
        metrics: 'Aucun temps d\'arrêt lors de la bascule globale du système.'
      },
      inquiryTitle: 'Contacter nos Spécialistes High-Tech',
      namePlaceholder: 'Votre Nom',
      emailPlaceholder: 'Adresse E-mail',
      msgPlaceholder: 'Détaillez vos besoins industriels ou d\'ingénierie...',
      submitBtn: 'Envoyer le Message',
      successMsg: 'Message envoyé ! Nos architectes technologiques étudient votre dossier.'
    },
    'manufacturing-industrial': {
      slug: 'manufacturing-industrial',
      badge: 'Industrie',
      title: 'Solutions Industrielles de Fabrication',
      subtitle: 'Planification de production discrète, maintenance prédictive et performance des actifs.',
      overview: 'Évitez les arrêts de ligne de production. Dstellar connecte les capteurs industriels (OT) à SAP Plant Maintenance (PM) pour anticiper les pannes et générer les ordres de travail.',
      gradientClass: 'linear-gradient(135deg, #1e293b 0%, #475569 50%, #0f172a 100%)',
      themeColor: '#475569',
      stats: [
        { value: '18%', label: 'Réduction des Temps d\'Arrêt Machine' },
        { value: '100%', label: 'Conformité aux Règles de Sécurité' },
        { value: '80+', label: 'Usines Modernisées' }
      ],
      solutions: [
        { title: 'Maintenance Préventive', desc: 'Surveillez la télémétrie vibratoire pour déclencher automatiquement des ordres de travail SAP PM.', icon: 'wrench' },
        { title: 'Production Discrète', desc: 'Ajustez le rythme des machines aux commandes en temps réel pour supprimer les goulets d\'étranglement.', icon: 'cogs' },
        { title: 'Contrôle Qualité Prédictif', desc: 'Analysez les capteurs en ligne pour détecter les défauts de composants avant l\'expédition.', icon: 'check' }
      ],
      playbook: {
        tag: 'Étude de Cas',
        title: 'Machines Lourdes Connectées',
        desc: 'Déploiement d\'une planification automatisée de la maintenance sur 42 sites industriels en connectant les automates à SAP.',
        metrics: 'Coûts de maintenance réduits de 22 % en 12 mois.'
      },
      inquiryTitle: 'Échanger avec nos Conseillers Industriels',
      namePlaceholder: 'Votre Nom',
      emailPlaceholder: 'Adresse E-mail',
      msgPlaceholder: 'Parlez-nous de vos sites industriels ou de vos lignes de production...',
      submitBtn: 'Prendre Contact',
      successMsg: 'Demande enregistrée. Nous vous contacterons pour évoquer l\'automatisation de vos usines.'
    },
    'energy-utilities': {
      slug: 'energy-utilities',
      badge: 'Énergie',
      title: 'Énergie & Services Publics Intelligents',
      subtitle: 'Télé-relève intelligente, gestion des actifs réseaux et comptabilité carbone.',
      overview: 'Accompagnez la transition énergétique. Dstellar déploie la facturation via SAP IS-U, la traçabilité des actifs réseaux et les bilans d\'émissions carbone réglementaires.',
      gradientClass: 'linear-gradient(135deg, #111827 0%, #15803d 50%, #064e3b 100%)',
      themeColor: '#15803d',
      stats: [
        { value: '45M+', label: 'Index de Consommation Traités' },
        { value: '100%', label: 'Conformité Réglementaire' },
        { value: '30%', label: 'Suivi des Émissions Carbone' }
      ],
      solutions: [
        { title: 'Facturation Smart-Metering', desc: 'Collecte haute vitesse de données de compteurs communicants IoT reliée à la facturation client.', icon: 'bolt' },
        { title: 'Gestion des Actifs (EAM)', desc: 'Suivez les sous-stations, pylônes et éoliennes sur des cartes géographiques intégrées à SAP.', icon: 'shield' },
        { title: 'Green Ledger (Bilan Carbone)', desc: 'Consignez les émissions de gaz à effet de serre parallèlement aux états financiers dans SAP.', icon: 'leaf' }
      ],
      playbook: {
        tag: 'Développement Durable',
        title: 'Réseau Électrique Intelligent',
        desc: 'Dstellar a conçu un moteur de facturation gérant des millions de tarifs dynamiques pour une coopérative d\'énergie verte.',
        metrics: 'Temps de traitement de la facturation réduit de 4 jours à 4 heures.'
      },
      inquiryTitle: 'Contacter nos Spécialistes de l\'Énergie',
      namePlaceholder: 'Votre Nom',
      emailPlaceholder: 'Adresse E-mail',
      msgPlaceholder: 'Détaillez vos objectifs de modernisation de réseau...',
      submitBtn: 'Obtenir un Conseil Expert',
      successMsg: 'Merci ! Notre équipe d\'experts en utilities va vous contacter très rapidement.'
    },
    'life-sciences-healthcare': {
      slug: 'life-sciences-healthcare',
      badge: 'Sciences de la Vie',
      title: 'Sciences de la Vie & Santé Connectée',
      subtitle: 'Conformité GxP, suivi des essais cliniques et logistique stérile.',
      overview: 'Assurez une conformité stricte aux normes FDA/GxP. Dstellar développe des plateformes ERP qualifiées et auditables pour les secteurs pharma, biotech et dispositifs médicaux.',
      gradientClass: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 50%, #312e81 100%)',
      themeColor: '#4338ca',
      stats: [
        { value: '100%', label: 'Conformité aux Audits GxP/FDA' },
        { value: '45%', label: 'Accélération des Audits Logistiques' },
        { value: '25+', label: 'Essais Cliniques Intégrés' }
      ],
      solutions: [
        { title: 'Chaîne Logistique Stérile', desc: 'Contrôlez les conditions de température (chaîne du froid) et de stérilité dans vos entrepôts de matières.', icon: 'heart' },
        { title: 'Gestion de la Qualité (QM)', desc: 'Automatisez le prélèvement d\'échantillons, les cycles de validation et les rapports réglementaires.', icon: 'search' },
        { title: 'Suivi d\'Essais Cliniques', desc: 'Gérez le budget des essais, la logistique médicale et les résultats patients dans un environnement SAP sécurisé.', icon: 'activity' }
      ],
      playbook: {
        tag: 'Réglementation',
        title: 'Traçabilité Logistique des Vaccins',
        desc: 'Déploiement d\'un outil de suivi de lots et de température de transport de vaccins avec SAP S/4HANA pour un acteur biotech.',
        metrics: 'Score de conformité de 100 % obtenu lors de l\'inspection FDA.'
      },
      inquiryTitle: 'Échanger avec un Consultant en Santé',
      namePlaceholder: 'Votre Nom',
      emailPlaceholder: 'Adresse E-mail',
      msgPlaceholder: 'Détaillez vos besoins GxP ou vos flux logistiques...',
      submitBtn: 'Demander un Briefing',
      successMsg: 'Merci. Notre équipe compliance va vous recontacter rapidement.'
    },
    'government-public-sector': {
      slug: 'government-public-sector',
      badge: 'Secteur Public',
      title: 'Administrations & Services Publics',
      subtitle: 'Suivi budgétaire, marchés publics et portail citoyen dématérialisé.',
      overview: 'Rapprochez l\'administration des usagers avec une transparence financière totale. Dstellar accompagne la migration des ministères vers SAP Public Sector.',
      gradientClass: 'linear-gradient(135deg, #0a0f1d 0%, #1e3a8a 50%, #172554 100%)',
      themeColor: '#1e3a8a',
      stats: [
        { value: '4.2B$', label: 'Fonds Publics Audités' },
        { value: '15M+', label: 'Citoyens Desservis' },
        { value: '40%', label: 'Réduction du Cycle des Achats' }
      ],
      solutions: [
        { title: 'Gestion des Fonds (FI-FM)', desc: 'Suivi de l\'allocation des crédits budgétaires, versement des subventions et rapports d\'audits financiers.', icon: 'lock' },
        { title: 'Portail Citoyen Fiori', desc: 'Portail dématérialisé pour la facturation des régies municipales, licences et démarches administratives.', icon: 'user' },
        { title: 'Achats & Marchés Publics', desc: 'Automatisez l\'appel d\'offres et le suivi des contrats fournisseurs dans le strict respect du code des marchés publics.', icon: 'document' }
      ],
      playbook: {
        tag: 'Service Public',
        title: 'Refonte de l\'ERP d\'une Métropole',
        desc: 'Remplacement d\'un système existant par S/4HANA Public Sector pour unifier le budget et les régies de 12 arrondissements.',
        metrics: 'Délais de clôture comptable et d\'audit réduits de 50 %.'
      },
      inquiryTitle: 'Contacter nos Conseillers Secteur Public',
      namePlaceholder: 'Votre Nom',
      emailPlaceholder: 'Adresse E-mail',
      msgPlaceholder: 'Décrivez les exigences de votre administration...',
      submitBtn: 'Transmettre la Demande',
      successMsg: 'Demande enregistrée. Notre équipe dédiée au secteur public va vous recontacter.'
    },
    'capital-markets': {
      slug: 'capital-markets',
      badge: 'Marchés Financiers',
      title: 'Systèmes pour Salles de Marchés',
      subtitle: 'Cycle de vie des transactions, gestion des risques et reporting réglementaire.',
      overview: 'Bâtissez des architectures robustes pour les institutions financières. Dstellar intègre la gestion de trésorerie, la liquidité et la conformité dans SAP Treasury.',
      gradientClass: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
      themeColor: '#312e81',
      stats: [
        { value: '0.2ms', label: 'Latence de Calcul du Risque' },
        { value: '99.999%', label: 'Disponibilité du Système' },
        { value: '120B$+', label: 'Encours Sous Gestion (AUM)' }
      ],
      solutions: [
        { title: 'Trésorerie & Risques', desc: 'Automatisez la trésorerie du groupe, les prévisions de cash-flow et la comptabilité de couverture.', icon: 'currency' },
        { title: 'Rapprochement de Marché', desc: 'Rapprochez les flux de clearing et de règlement-livraison sur des transactions complexes en temps réel.', icon: 'exchange' },
        { title: 'Conformité SEC / MiFID', desc: 'Générez des rapports et historiques de transactions conformes aux réglementations financières locales.', icon: 'file-text' }
      ],
      playbook: {
        tag: 'Technologie Financière',
        title: 'Modernisation d\'un Système de Trésorerie',
        desc: 'Mise en œuvre d\'un suivi en temps réel du cash et du risque de change sur 24 devises pour un fonds d\'investissement.',
        metrics: 'Temps de consolidation financière réduit de 6 jours à 90 secondes.'
      },
      inquiryTitle: 'Demander un Briefing pour Services Financiers',
      namePlaceholder: 'Votre Nom',
      emailPlaceholder: 'Adresse E-mail',
      msgPlaceholder: 'Précisez vos objectifs de trésorerie ou de gestion d\'actifs...',
      submitBtn: 'Planifier le Briefing',
      successMsg: 'Demande reçue. Notre équipe marchés de capitaux vous contactera.'
    },
    'travel-hospitality': {
      slug: 'travel-hospitality',
      badge: 'Hôtellerie',
      title: 'Systèmes de Transport & Hôtellerie',
      subtitle: 'Tarification dynamique, yield management et gestion des réservations.',
      overview: 'Optimisez l\'expérience client et le remplissage. Dstellar structure des outils unifiés reliant les terminaux de vente (POS), réservations et plannings.',
      gradientClass: 'linear-gradient(120deg, #3b0764 0%, #7c3aed 50%, #c084fc 100%)',
      themeColor: '#7c3aed',
      stats: [
        { value: '30M+', label: 'Réservations Traitées' },
        { value: '98%', label: 'Taux de Satisfaction Clients' },
        { value: '+14%', label: 'Croissance du Yield' }
      ],
      solutions: [
        { title: 'Tarification en Temps Réel', desc: 'Ajustez le prix des chambres ou des billets selon l\'historique d\'occupation et la saisonnalité.', icon: 'tag' },
        { title: 'Logistique Passagers', desc: 'Optimisez la rotation des flottes, le catering et les bagages avec SAP Logistics.', icon: 'plane' },
        { title: 'Fidélisation Unifiée', desc: 'Consignez les comptes de fidélité et les points dans un registre unique au cœur de l\'ERP.', icon: 'star' }
      ],
      playbook: {
        tag: 'Transformation',
        title: 'Modernisation du Registre Passagers',
        desc: 'Dstellar a développé un moteur de tarification dynamique gérant 5 000 requêtes de recherche de billets par seconde pour une compagnie aérienne.',
        metrics: 'Délai de synchronisation des comptes de fidélité inférieur à 2 secondes.'
      },
      inquiryTitle: 'Contacter notre Équipe Voyage & Hôtellerie',
      namePlaceholder: 'Votre Nom',
      emailPlaceholder: 'Adresse E-mail',
      msgPlaceholder: 'Décrivez vos outils de réservation ou de gestion de flotte...',
      submitBtn: 'Demander un Diagnostic',
      successMsg: 'Demande de diagnostic reçue. Notre consultant va vous recontacter.'
    },
    construction: {
      slug: 'construction',
      badge: 'Construction',
      title: 'Infrastructures de BTP & Ingénierie',
      subtitle: 'Contrôle des coûts (WBS), gestion des sous-traitants et matériel de chantier.',
      overview: 'Respectez les délais et les budgets de chantiers. Dstellar connecte SAP Project System (PS) et les organigrammes WBS à des applications de suivi de chantier sur le terrain.',
      gradientClass: 'linear-gradient(135deg, #1e293b 0%, #d97706 60%, #b45309 100%)',
      themeColor: '#d97706',
      stats: [
        { value: '25%', label: 'Baisse des Dépassements Budgétaires' },
        { value: '100%', label: 'Suivi de la Sous-traitance' },
        { value: '450+', label: 'Grands Projets Livrés' }
      ],
      solutions: [
        { title: 'Organigramme des Tâches (WBS)', desc: 'Planifiez les étapes de chantiers complexes et liez-les aux jalons de facturation de vos sous-traitants.', icon: 'grid' },
        { title: 'Suivi de la Flotte de Chantier', desc: 'Supervisez la localisation et l\'usure du matériel lourd pour optimiser les locations et la maintenance.', icon: 'hammer' },
        { title: 'Approvisionnement Juste-à-Temps', desc: 'Planifiez l\'acheminement du béton, de l\'acier et du matériel technique pour éviter les retards.', icon: 'shield' }
      ],
      playbook: {
        tag: 'Étude de Cas',
        title: 'Logistique de Tunnel Métropolitain',
        desc: 'Mise en place d\'un outil mobile de saisie terrain connecté aux modules de gestion de projet S/4HANA pour un grand groupe de BTP.',
        metrics: 'Temps de validation des factures sous-traitants accéléré de 60 %.'
      },
      inquiryTitle: 'Contacter nos Conseillers en Ingénierie',
      namePlaceholder: 'Votre Nom',
      emailPlaceholder: 'Adresse E-mail',
      msgPlaceholder: 'Décrivez vos enjeux de gestion de projets d\'infrastructures...',
      submitBtn: 'Envoyer le Message',
      successMsg: 'Message envoyé. Nos experts en construction industrielle vont vous appeler.'
    }
  },
  ja: {
    automotive: {
      slug: 'automotive',
      badge: '自動車',
      title: '自動車産業のデジタルトランスフォーメーション',
      subtitle: 'コネクテッドカー、ディーラー網管理、工場操業効率化の推進。',
      overview: 'Dstellarは、自動車メーカーやサプライヤーが強靭なサプライチェーンを構築し、コネクテッドカーのインフラを拡張し、生産現場を最適化することを可能にします。既存の基幹システムを、クリーンコア（Clean Core）思想に基づいた最新のS/4HANA環境へ移行します。',
      gradientClass: 'linear-gradient(135deg, #1a0b3d 0%, #4a3aff 45%, #00d4c8 100%)',
      themeColor: '#4a3aff',
      stats: [
        { value: '35%', label: '製造工程の効率化' },
        { value: '2M+', label: 'コネクテッドカー接続実績' },
        { value: '15+', label: '主要Tier-1サプライヤー統合数' }
      ],
      solutions: [
        { title: '車両テレメトリ連携', desc: '数百万台の車両からリアルタイムに送信されるデータをSAP HANAメモリデータベースへ直接取り込み、瞬時に分析します。', icon: 'telematics' },
        { title: 'スマートファクトリー統合', desc: '製造実行システム（MES）とSAP ERPを双方向で接続し、在庫と製造進捗のリアルタイムな可視化を実現します。', icon: 'factory' },
        { title: '部品物流・ディーラー網', desc: '補修用部品のアフターマーケットにおける注文・請求から、グローバルな配送網の運用を自動化します。', icon: 'truck' }
      ],
      playbook: {
        tag: '導入事例',
        title: '200万台規模のテレメトリ連携',
        desc: 'リアルタイムの車両データとSAP S/4HANA Financeモジュール、さらに顧客向けサービス料金請求システムとの同期をグローバル規模で構築。',
        metrics: 'データ転送のピーク時でも、システム稼働率99.99%を維持。'
      },
      inquiryTitle: '自動車業界専門チームへのお問い合わせ',
      namePlaceholder: 'お名前',
      emailPlaceholder: 'メールアドレス',
      msgPlaceholder: 'プロジェクトの要件をご記入ください...',
      submitBtn: '問い合わせを送信する',
      successMsg: 'ありがとうございます。自動車業界専任チームより折り返しご連絡いたします。'
    },
    'consumer-products': {
      slug: 'consumer-products',
      badge: '消費財',
      title: '消費財・小売りビジネス向けソリューション',
      subtitle: '需要予測モデルの構築、プロモーション最適化、オムニチャネルの在庫連携。',
      overview: 'サプライチェーンのサイクル時間を短縮し、過剰在庫を防ぎます。Dstellarは、製造現場の計画と、小売りディーラー網やD2C販売チャネルを直接結びつけるSAPシステムを構築します。',
      gradientClass: 'linear-gradient(120deg, #4a3aff 0%, #ff7a00 45%, #ff8a3d 100%)',
      themeColor: '#ff7a00',
      stats: [
        { value: '+28%', label: '注文受注から出荷までの時間短縮' },
        { value: '40%', label: '在庫保管コストの削減率' },
        { value: '12', label: 'グローバル展開ブランドの運用' }
      ],
      solutions: [
        { title: '機械学習による需要予測', desc: '予測モデルを組み込み、市場の需要変動を素早く察知。無駄のない原材料調達計画を支援します。', icon: 'chart' },
        { title: 'オムニチャネル注文管理', desc: 'ECサイト、提携販売店、直営実店舗からのすべての注文を一元化し、単一のデータベースで追跡します。', icon: 'shopping' },
        { title: 'プロモーション管理と決済', desc: 'ディーラーとの間の割引契約やインセンティブの計算、支払いの照合をSAP内で自動化します。', icon: 'piggy' }
      ],
      playbook: {
        tag: '活用事例',
        title: 'グローバルブランドの在庫最適化',
        desc: '食品大手が、リアルタイムの販売情報と倉庫の出荷指示システムを連動させることで、在庫を劇的に削減。',
        metrics: '年間1,400万ドル相当の保管コスト削減を実現。'
      },
      inquiryTitle: '消費財業界専門チームへのご相談',
      namePlaceholder: 'お名前',
      emailPlaceholder: 'メールアドレス',
      msgPlaceholder: 'サプライチェーンや販売管理における課題をお聞かせください...',
      submitBtn: '無料相談を申し込む',
      successMsg: 'お問い合わせを受け付けました。消費財専任の担当者よりご連絡いたします。'
    },
    'electronic-high-tech': {
      slug: 'electronic-high-tech',
      badge: 'ハイテク',
      title: '電子・ハイテク産業向けシステム',
      subtitle: '短サイクルでの製品管理、クリーンルーム内の生産トレース、グローバル外協管理。',
      overview: '電子・ハイテク産業では変化の速さと極限の精度が求められます。Dstellarは、製品ライフサイクル管理（PLM）、無塵室でのバッチトレース、SAP BTPを通じたサプライヤー連携を最適化します。',
      gradientClass: 'linear-gradient(135deg, #0f172a 0%, #3b82f6 50%, #1d4ed8 100%)',
      themeColor: '#3b82f6',
      stats: [
        { value: '3.5x', label: '製品開発から市場投入までの迅速化' },
        { value: '100%', label: 'バッチ追跡の監査合規率' },
        { value: '500M+', label: '日々追跡される部品の総数' }
      ],
      solutions: [
        { title: '製品ライフサイクル管理', desc: 'ハードウェアのデザインから、部品表（BOM）、設計変更の履歴までをERP連携で一元管理します。', icon: 'cpu' },
        { title: 'クリーンルーム内のバッチ追跡', desc: '原材料の投入から半導体ウェハーの製造、パッケージング、出荷までを完全に追跡します。', icon: 'database' },
        { title: 'サプライヤー連携ポータル', desc: '委託先や主要部品の調達先サプライヤーと、納期や取引価格をリアルタイムに自動調整します。', icon: 'globe' }
      ],
      playbook: {
        tag: '導入事例',
        title: '半導体工場向けコア移行',
        desc: '大手半導体企業の旧来のABAPによる追加開発を、SAP BTPを用いた疎結合（Side-by-Side）型のアドオンへと刷新。',
        metrics: '世界各国の拠点での切り替え時に、システムの完全ノンストップ稼働を達成。'
      },
      inquiryTitle: 'ハイテク専任アーキテクトへのお問い合わせ',
      namePlaceholder: 'お名前',
      emailPlaceholder: 'メールアドレス',
      msgPlaceholder: '製品データ管理やシステム刷新の要件をご記入ください...',
      submitBtn: 'メールを送信する',
      successMsg: '送信しました。弊社のハイテク専任技術担当よりご連絡いたします。'
    },
    'manufacturing-industrial': {
      slug: 'manufacturing-industrial',
      badge: '産業機械',
      title: '製造・産業機械向けソリューション',
      subtitle: '離散型・プロセス型の生産管理、設備の予兆保全、稼働状況のモニタリング。',
      overview: '製造ラインの稼働維持が至上命令です。Dstellarは現場のセンサーデータ（OT）とSAP保全管理（PM）を連携し、故障の予兆検知から自動的な修理手配までを構築します。',
      gradientClass: 'linear-gradient(135deg, #1e293b 0%, #475569 50%, #0f172a 100%)',
      themeColor: '#475569',
      stats: [
        { value: '18%', label: '設備非計画停止の低減率' },
        { value: '100%', label: '製造安全基準の維持率' },
        { value: '80+', label: '工場システムの近代化実績' }
      ],
      solutions: [
        { title: '設備の予兆保全管理', desc: 'センサーの振動や温度データを監視し、閾値を超えた場合にSAP PMで自動的に保全手配を作成します。', icon: 'wrench' },
        { title: '離散型（組立）生産管理', desc: '実際の受注状況に合わせて工場の組み立てスケジュールを最適化し、作りすぎや在庫の偏りを防ぎます。', icon: 'cogs' },
        { title: 'リアルタイム品質管理（QM）', desc: '製品検査ラインにセンサー解析を組み込み、初期不良が発生したロットを梱包前に自動検知します。', icon: 'check' }
      ],
      playbook: {
        tag: '導入事例',
        title: '大規模機械工場のIoT連携',
        desc: '国内外の42箇所の生産ラインにてPLCとSAPを直接連携し、設備保全の手配を完全自動化。',
        metrics: 'システム導入後1年以内に、現場保全費用を22%削減。'
      },
      inquiryTitle: '製造業保全アドバイザーへの相談',
      namePlaceholder: 'お名前',
      emailPlaceholder: 'メールアドレス',
      msgPlaceholder: '工場の生産現場やシステムの現状をご記入ください...',
      submitBtn: '担当者と話す',
      successMsg: '受け付けました。折り返し担当者より工場効率化の事例をご紹介します。'
    },
    'energy-utilities': {
      slug: 'energy-utilities',
      badge: 'エネルギー',
      title: '電力・ガス・水道等スマートインフラ',
      subtitle: 'スマートメーター連携、送配電設備管理、クリーンエネルギー財務会計。',
      overview: '環境配慮型社会へのエネルギーシフトを支えます。DstellarはSAP IS-Uモジュールによる検針・料金管理、アセット追跡、およびCO2排出量の記録システムを提供します。',
      gradientClass: 'linear-gradient(135deg, #111827 0%, #15803d 50%, #064e3b 100%)',
      themeColor: '#15803d',
      stats: [
        { value: '45M+', label: '処理される月間メーター検針データ数' },
        { value: '100%', label: '外部監査基準クリア率' },
        { value: '30%', label: 'CO2排出量集計の自動化比率' }
      ],
      solutions: [
        { title: 'スマートメーター自動課金', desc: '大量に届くIoT検針データをミリ秒単位で処理し、顧客データベースの請求金額へ即座に反映します。', icon: 'bolt' },
        { title: '送配電設備アセット管理', desc: '変電所や配管網、風力タービン等の設置場所や老朽度を、GISマップ上に統合されたSAPで可視化します。', icon: 'shield' },
        { title: '環境データ会計（Green Ledger）', desc: 'SAPのグリーンジャーナル機能を使い、企業財務と連動したリアルタイムの排出量レポートを出力します。', icon: 'leaf' }
      ],
      playbook: {
        tag: 'サステナビリティ',
        title: '再生可能エネルギー協同組合の刷新',
        desc: 'ヨーロッパの再生可能エネルギー小売企業において、数百万の顧客に適用される変動型電気料金の計算基盤を構築。',
        metrics: '月次の料金計算処理期間を4日間から4時間以下へ短縮。'
      },
      inquiryTitle: 'エネルギーインフラ専門チームへの相談',
      namePlaceholder: 'お名前',
      emailPlaceholder: 'メールアドレス',
      msgPlaceholder: '送配電管理やカーボンニュートラル目標についてご記入ください...',
      submitBtn: '専門アドバイザリーを依頼する',
      successMsg: '送信完了しました。エネルギー事業専任チームよりご連絡差し上げます。'
    },
    'life-sciences-healthcare': {
      slug: 'life-sciences-healthcare',
      badge: 'ライフサイエンス',
      title: 'ライフサイエンス・ヘルスケアの合規管理',
      subtitle: 'GxP規制遵守、治験物流追跡、無菌状態で管理される在庫追跡。',
      overview: '非常に厳格なGxPやFDA（米国食品医薬品局）の監査基準に対応します。Dstellarは製薬、バイオ、および医療機器企業向けに、検証・監査に完全対応したクリーンなSAPシステムを構築します。',
      gradientClass: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 50%, #312e81 100%)',
      themeColor: '#4338ca',
      stats: [
        { value: '100%', label: 'GxP/FDA監査適合率' },
        { value: '45%', label: '出荷・ロット確認期間の短縮率' },
        { value: '25+', label: '連携治験プロジェクト件数' }
      ],
      solutions: [
        { title: '無菌冷チェーン物流', desc: '医薬品原料倉庫での厳密な温度データや無菌基準値を、保管ロットに紐づけてログ管理します。', icon: 'heart' },
        { title: '品質管理システム（QM）', desc: 'バッチサンプルの収集、検証プロセスの承認履歴、適合証明書の自動発行を管理します。', icon: 'search' },
        { title: '治験費用・ロジスティクス', desc: '長期間にわたる臨床試験の費用計上や提携医療機関への資材発送履歴を、監査に耐えうる形で記録します。', icon: 'activity' }
      ],
      playbook: {
        tag: '規制対応',
        title: 'バイオ製薬会社のグローバル出荷追跡',
        desc: 'S/4HANAを用いて、保管ロット情報と物流追跡コード、さらに温度モニタリングログを一元化したトレース基盤を構築。',
        metrics: 'FDA（米国食品医薬品局）の立入査察において適合率100%を維持。'
      },
      inquiryTitle: '医療・バイオ産業専任コンサルタントへの相談',
      namePlaceholder: 'お名前',
      emailPlaceholder: 'メールアドレス',
      msgPlaceholder: '治験管理やGxP要件についてご記入ください...',
      submitBtn: '合規チェックを依頼する',
      successMsg: '受け付けました。規制プロセス専任コンサルタントより追ってご連絡します。'
    },
    'government-public-sector': {
      slug: 'government-public-sector',
      badge: '公共機関',
      title: '政府・公共サービス機関向けシステム',
      subtitle: '予算執行プロセスの可視化、公共調達・入札の追跡、住民サービスポータル。',
      overview: '完全な透明性を備えた税金の執行と、市民に開かれたデジタルサービスを実現します。Dstellarは、中央省庁や自治体のホストコンピュータから最新のSAPソリューションへの移行を強力に後押しします。',
      gradientClass: 'linear-gradient(135deg, #0a0f1d 0%, #1e3a8a 50%, #172554 100%)',
      themeColor: '#1e3a8a',
      stats: [
        { value: '$4.2B', label: '監査・執行される予算規模' },
        { value: '15M+', label: 'サービス対象の住民登録数' },
        { value: '40%', label: '調達・入札にかかる期間の短縮' }
      ],
      solutions: [
        { title: '資金管理・予算会計', desc: '国家・自治体予算の執行枠の管理、助成金交付プロセスの監査トレースを支援します。', icon: 'lock' },
        { title: '住民向けデジタル窓口', desc: 'Fioriを用いて、住民の水道光熱費支払いや法人設立時の許認可申請などのオンライン窓口を構築します。', icon: 'user' },
        { title: '公共調達・入札プロセス', desc: '入札元の資格審査や比較見積もりを自動化し、公的監査基準に100%合致した調達フローを整備します。', icon: 'document' }
      ],
      playbook: {
        tag: '公共サービス',
        title: '大都市圏のERP基盤近代化',
        desc: '25年間運用されていた旧来のメインフレームをS/4HANA Public Sectorへ切り替え、12の行政区の予算と住民情報を統合。',
        metrics: '決算期および公的監査の報告に要する期間を50%削減。'
      },
      inquiryTitle: '公共機関専門アドバイザーへの相談',
      namePlaceholder: 'お名前',
      emailPlaceholder: 'メールアドレス',
      msgPlaceholder: '官公庁や自治体での要件についてご記入ください...',
      submitBtn: '問い合わせを送信する',
      successMsg: 'お問い合わせを受け付けました。専任の公共部門アドバイザーよりご連絡します。'
    },
    'capital-markets': {
      slug: 'capital-markets',
      badge: '資本市場・金融',
      title: '資本市場・機関投資家向けシステム',
      subtitle: '取引ライフサイクルの完全自動化、リアルタイム風控、金融規制報告。',
      overview: '機関投資家や大手銀行に、高負荷に耐えうる資金管理プラットフォームを提供します。Dstellarは、取引照合、流動性管理、規制報告機能をSAP Treasuryに統合します。',
      gradientClass: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
      themeColor: '#312e81',
      stats: [
        { value: '0.2ms', label: 'リアルタイムでの風控・利子計算ラグ' },
        { value: '99.999%', label: 'コア取引プラットフォーム稼働率' },
        { value: '$120B+', label: '管理される総資産残高' }
      ],
      solutions: [
        { title: '財務・トレジャリーリスク管理', desc: 'グループ内のキャッシュポジション予測、外貨リスク対応、ヘッジ会計処理を自動化します。', icon: 'currency' },
        { title: '取引照合・クリアリング', desc: '複数の証券取引情報をリアルタイムに取り込み、勘定照合や自動仕訳を瞬時に完了させます。', icon: 'exchange' },
        { title: '国際金融規制報告', desc: 'SEC（米国証券取引委員会）や各国の金融局が求める監査ログ、日次の決済状況を自動で集計・出力します。', icon: 'file-text' }
      ],
      playbook: {
        tag: 'フィンテック',
        title: '多国籍投資グループの資金管理刷新',
        desc: '世界の24拠点をまたぐ資金状況をリアルタイムで把握できる高度な資金ダッシュボードをS/4HANA上で構築。',
        metrics: '期末決算処理にかかる期間を6日間からわずか90秒へ短縮。'
      },
      inquiryTitle: '金融ソリューションのご相談',
      namePlaceholder: 'お名前',
      emailPlaceholder: 'メールアドレス',
      msgPlaceholder: '資金管理や同業決済システムの要件についてご記入ください...',
      submitBtn: '個別セッションを予約する',
      successMsg: 'ありがとうございます。弊社の金融IT担当者よりご連絡いたします。'
    },
    'travel-hospitality': {
      slug: 'travel-hospitality',
      badge: '旅行・サービス',
      title: '旅行・ホスピタリティ向けシステム',
      subtitle: '需要に連動したダイナミック価格設定、予約エンジンの強化、顧客ポイント連携。',
      overview: '利用者の予約フロントとバックエンドの管理機能をリアルタイムに同期します。POSシステムやオンライン予約、座席・客室在庫を強固に連携させます。',
      gradientClass: 'linear-gradient(120deg, #3b0764 0%, #7c3aed 50%, #c084fc 100%)',
      themeColor: '#7c3aed',
      stats: [
        { value: '30M+', label: '処理される年間予約件数' },
        { value: '98%', label: '顧客満足度（CS）指標' },
        { value: '+14%', label: '客室・座席稼働利益率の増加' }
      ],
      solutions: [
        { title: 'ダイナミックプライシング', desc: '最新の予約状況と過去の繁忙期データを組み合わせ、予約サイトへ最適なリアルタイム価格を反映します。', icon: 'tag' },
        { title: '旅客ロジスティクス連携', desc: '航空機や鉄道の運行スケジューリング、機内食の手配、手荷物追跡をSAP上で連携・最適化します。', icon: 'plane' },
        { title: '統合ロイヤルティ会員管理', desc: '何千万人もの会員が持つマイルやポイント履歴を、高速なERPデータベース内で安全に管理します。', icon: 'star' }
      ],
      playbook: {
        tag: 'システム移行',
        title: '航空会社向けチケット予約連携',
        desc: '秒間最大5,000クエリの処理に対応できる、チケット価格算出と予約更新のエンジンを構築。',
        metrics: '会員ポイントの反映時間ラグを2秒以内に改善。'
      },
      inquiryTitle: '観光・運輸専門チームへのご相談',
      namePlaceholder: 'お名前',
      emailPlaceholder: 'メールアドレス',
      msgPlaceholder: '予約エンジンや運行管理についてご記入ください...',
      submitBtn: 'システムの無料診断を依頼する',
      successMsg: '診断依頼を受け付けました。弊社の観光・運輸担当よりご連絡いたします。'
    },
    construction: {
      slug: 'construction',
      badge: '建設・土木',
      title: '建設・エンジニアリング・社会インフラ',
      subtitle: '工事別コスト管理（WBS）、外注先管理、重機の稼働追跡。',
      overview: '工期通り、予算通りに建設プロジェクトを完遂させます。Dstellarは、SAP Project System（PS）と施工現場からのモバイル進捗報告を連動させ、資材と現場班組のシームレスな配置を可能にします。',
      gradientClass: 'linear-gradient(135deg, #1e293b 0%, #d97706 60%, #b45309 100%)',
      themeColor: '#d97706',
      stats: [
        { value: '25%', label: '工事予算オーバーの削減率' },
        { value: '100%', label: '外注先契約監査通過率' },
        { value: '450+', label: 'インフラ・大型建築引き渡し実績' }
      ],
      solutions: [
        { title: '工事別WBSコスト管理', desc: '何年にもわたる長期の建設工事をWBSに沿って細分化し、各工期ごとの支払いをSAP内で厳密に紐付けます。', icon: 'grid' },
        { title: '重機・資産テレメトリ', desc: '建設用大型重機のGPS情報やアワーメーター（稼働時間）を追跡し、無駄のないリース管理とメンテナンスを自動化します。', icon: 'hammer' },
        { title: '資材のジャストインタイム配送', desc: 'コンクリートや鉄骨、配管類が遅滞なく現場に届くよう、物流と現場の施工スケジュールを動的に同期します。', icon: 'shield' }
      ],
      playbook: {
        tag: '導入事例',
        title: '地下鉄トンネル工事プロジェクト管理',
        desc: '下請への発注・現場検収データを、S/4HANAのプロジェクト管理（PS）モジュールと自動で突き合わせる仕組みを構築。',
        metrics: '下請業者からの出来高査定・請求処理時間を60%短縮。'
      },
      inquiryTitle: '建設インフラ専門コンサルタントへの相談',
      namePlaceholder: 'お名前',
      emailPlaceholder: 'メールアドレス',
      msgPlaceholder: '現場のコスト管理や工事システムについてご記入ください...',
      submitBtn: 'メッセージを送信する',
      successMsg: '送信しました。建設・インフラ専任コンサルタントより追ってご連絡いたします。'
    }
  }
};
