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

export interface ConsultingDetail {
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

export const CONSULTING_TRANSLATIONS: Record<string, Record<string, ConsultingDetail>> = {
  en: {
    s4hana: {
      slug: 's4hana',
      badge: 'S/4HANA',
      title: 'SAP S/4HANA Implementations',
      subtitle: 'Migrate to a clean-core, high-performance intelligent enterprise ERP.',
      overview: 'Transition from legacy SAP ECC or non-SAP systems to S/4HANA with absolute confidence. Dstellar ensures your migration adheres to standard best practices, eliminating bloated custom ABAP debt and leveraging cloud capabilities side-by-side.',
      gradientClass: 'linear-gradient(135deg, #ffffff 0%, #818cf8 50%, #4a3aff 100%)',
      themeColor: '#4a3aff',
      stats: [
        { value: '50+', label: 'Successful Go-Lives' },
        { value: '40%', label: 'Average Database Reduction' },
        { value: '6 Months', label: 'Typical Migration Window' }
      ],
      capabilities: [
        { title: 'Greenfield & Brownfield Paths', desc: 'Choose between a fresh, clean-slate S/4HANA install or a complete system conversion with historic data.', icon: 'globe' },
        { title: 'Clean Core Optimization', desc: 'Isolate custom code modifications into side-by-side apps on SAP BTP to preserve S/4HANA standard upgrade paths.', icon: 'cpu' },
        { title: 'Downtime Minimization', desc: 'Leverage Near-Zero Downtime (NZDT) methods to complete heavy data migration without halting operations.', icon: 'bolt' }
      ],
      playbook: {
        tag: 'Case Study',
        title: 'Global S/4HANA Cloud Move',
        desc: 'Migrated a multi-billion dollar manufacturing system to S/4HANA Cloud Private Edition, cleaning 15 years of legacy ABAP modifications.',
        metrics: '90% custom code reduction and 45% faster financial closings.'
      },
      inquiryTitle: 'Speak to our S/4HANA Lead Architect',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Tell us about your ECC landscape or target timeline...',
      submitBtn: 'Request S/4HANA Roadmap',
      successMsg: 'Thank you! Our S/4HANA team will reach out shortly.'
    },
    fico: {
      slug: 'fico',
      badge: 'FICO',
      title: 'Finance & Controlling',
      subtitle: 'Unify accounting ledgers, cost flows, and financial risk models.',
      overview: 'Get real-time insights into corporate cash flow, profitability, and operational costs. Dstellar configures SAP FICO to reconcile multi-currency ledgers, automate tax accounting, and streamline consolidation.',
      gradientClass: 'linear-gradient(135deg, #ffffff 0%, #3b82f6 50%, #1e3a8a 100%)',
      themeColor: '#3b82f6',
      stats: [
        { value: '90s', label: 'Consolidation Closure Time' },
        { value: '100%', label: 'Local Tax Law Compliance' },
        { value: '30%', label: 'Finance Overhead Reduction' }
      ],
      capabilities: [
        { title: 'Universal Journal Ledger', desc: 'Consolidate General Ledger, Controlling, Asset Accounting, and Material Ledger into a single source of truth.', icon: 'database' },
        { title: 'Predictive Cash Flow', desc: 'Leverage SAP Treasury to forecast liquidity across hundreds of global bank accounts in real-time.', icon: 'currency' },
        { title: 'Automated Tax Compliance', desc: 'Calculate regional taxes, value-added taxes (VAT), and local government filings automatically.', icon: 'shield' }
      ],
      playbook: {
        tag: 'Success Story',
        title: 'Real-time Ledger Reconciliation',
        desc: 'Implemented SAP Central Finance to aggregate multi-ERP financial records into a single S/4HANA FICO universal ledger.',
        metrics: 'Reconciliation window cut from 5 days to real-time.'
      },
      inquiryTitle: 'Contact Our Finance Architects',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Tell us about your treasury or ledger requirements...',
      submitBtn: 'Get Free Finance Audit',
      successMsg: 'Inquiry received. Our FICO specialists will contact you.'
    },
    logistics: {
      slug: 'logistics',
      badge: 'SD · MM · WM',
      title: 'Sales & Logistics Optimization',
      subtitle: 'Build resilient supply chains, smart warehouses, and high-velocity shipping.',
      overview: 'Bridge customer demand with global supplier fulfillment. Dstellar optimizes Sales and Distribution (SD), Materials Management (MM), and Warehouse Management (WM/EWM) to maximize inventory turns and slash order-to-cash cycles.',
      gradientClass: 'linear-gradient(135deg, #ffffff 0%, #fbbf24 50%, #d97706 100%)',
      themeColor: '#d97706',
      stats: [
        { value: '25%', label: 'Warehouse Pick-Velocity Increase' },
        { value: '99.8%', label: 'Shipping Accuracy Rating' },
        { value: '40%', label: 'Order Processing Time Cut' }
      ],
      capabilities: [
        { title: 'Extended Warehouse Management', desc: 'Optimize picking paths, automate bin allocations, and coordinate AGVs directly inside SAP EWM.', icon: 'grid' },
        { title: 'Sourcing & Procurement', desc: 'Automate purchase requisitions, supplier scoring matrices, and multi-currency billing reconciliations.', icon: 'exchange' },
        { title: 'Global Trade Services (GTS)', desc: 'Accelerate customs clearing, verify trade embargoes, and generate compliance files automatically.', icon: 'globe' }
      ],
      playbook: {
        tag: 'Case Study',
        title: 'Fulfilling 100k Daily Shipments',
        desc: 'Redesigned a distribution center logistics pipeline using SAP EWM, integrating automatic conveyors and barcodes with SAP MM.',
        metrics: 'Order pick error rates dropped below 0.05%.'
      },
      inquiryTitle: 'Contact Our Logistics Advisors',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Describe your warehouse or shipping challenges...',
      submitBtn: 'Schedule Operations Audit',
      successMsg: 'Thank you. Our logistics consultants will call you soon.'
    },
    production: {
      slug: 'production',
      badge: 'PP',
      title: 'Production & Planning Systems',
      subtitle: 'discrete, process, and repetitive manufacturing orchestration.',
      overview: 'Keep machine throughput aligned with market demand. Dstellar configures SAP Production Planning (PP) and Manufacturing Execution Systems (MES) to optimize material requirements planning (MRP) and reduce shop-floor bottlenecks.',
      gradientClass: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 50%, #475569 100%)',
      themeColor: '#475569',
      stats: [
        { value: '15%', label: 'Raw Material Cost Reductions' },
        { value: '2.5x', label: 'Faster MRP Processing Speeds' },
        { value: '98%', label: 'Machine Performance Uptime' }
      ],
      capabilities: [
        { title: 'MRP Live in S/4HANA', desc: 'Process massive material requirement audits in real-time to adjust procurement targets during shifts.', icon: 'bolt' },
        { title: 'MES & Shop Floor Integration', desc: 'Connect physical PLC machinery and shop-floor metrics directly to SAP Production Orders.', icon: 'cogs' },
        { title: 'Capacity Planning & Leveling', desc: 'Equilibrate workload allocations across assembly lines to prevent machine idling and cost overheads.', icon: 'wrench' }
      ],
      playbook: {
        tag: 'Sustainability',
        title: 'Automating Heavy Assembly',
        desc: 'Implemented SAP PP-PI for an industrial chemical manufacturer, integrating smart batch control systems with real-time MRP.',
        metrics: 'Idling time reduced by 22% and batch trace audits cut to under 5 minutes.'
      },
      inquiryTitle: 'Speak to a Production Advisor',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Describe your manufacturing or discrete assembly goals...',
      submitBtn: 'Request Manufacturing Briefing',
      successMsg: 'Inquiry registered. Our factory engineers will contact you.'
    },
    successfactors: {
      slug: 'successfactors',
      badge: 'SuccessFactors',
      title: 'SuccessFactors HR Modernization',
      subtitle: 'Build transparent employee pathways, payroll databases, and talent matrices.',
      overview: 'Cultivate and support your global workforce. Dstellar implements full-suite SAP SuccessFactors Cloud systems, bridging global payroll ledgers with employee training and recruiting portals.',
      gradientClass: 'linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #7c3aed 100%)',
      themeColor: '#7c3aed',
      stats: [
        { value: '45%', label: 'Faster Hiring Cycle' },
        { value: '100%', label: 'Localized Payroll Accuracy' },
        { value: '80k+', label: 'Employees Managed Globally' }
      ],
      capabilities: [
        { title: 'Core Employee Central', desc: 'Consolidate global worker profiles, job assignments, and benefits structures into a unified portal.', icon: 'user' },
        { title: 'Performance & Talent Management', desc: 'Build clear professional evaluation paths, career planning goals, and talent acquisition matrices.', icon: 'star' },
        { title: 'Employee Central Payroll', desc: 'Automate tax withholdings, multi-region payroll processing, and direct deposits inside a secure core.', icon: 'lock' }
      ],
      playbook: {
        tag: 'HR Transformation',
        title: 'Global Workforce Integration',
        desc: 'Consolidated 18 disconnected regional HR databases into a single, cloud-native SAP SuccessFactors suite.',
        metrics: 'Onboarding time reduced from 14 days to 48 hours.'
      },
      inquiryTitle: 'Connect with our HR Advisors',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Describe your workforce size and current HR systems...',
      submitBtn: 'Request HR Roadmap',
      successMsg: 'Success! Our HR modernization consultants will be in touch.'
    },
    'abap-fiori': {
      slug: 'abap-fiori',
      badge: 'ABAP · Fiori',
      title: 'Custom ABAP & Fiori Development',
      subtitle: 'Deploy sleek, responsive user interfaces and clean, scalable custom logic.',
      overview: 'User experience matters as much as backend stability. Dstellar builds beautiful, web-native SAP Fiori applications and robust, optimized ABAP classes following the clean-core design paradigm.',
      gradientClass: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #64748b 100%)',
      themeColor: '#64748b',
      stats: [
        { value: '99.9%', label: 'Fiori Application Uptime' },
        { value: '5x', label: 'Faster Mobile UX Transactions' },
        { value: '0%', label: 'Core Modifications (Clean Core)' }
      ],
      capabilities: [
        { title: 'Responsive Fiori UX', desc: 'Replace legacy SAP GUI screens with gorgeous, responsive web interfaces running on desktop and mobile.', icon: 'user' },
        { title: 'RAP & CAP Architectures', desc: 'Develop using the modern ABAP RESTful Application Programming model and Cloud Application Programming model.', icon: 'cpu' },
        { title: 'Custom Fiori Launchpad', desc: 'Coordinate corporate user roles and security clearances under a unified, brand-themed portal.', icon: 'grid' }
      ],
      playbook: {
        tag: 'UX Modernization',
        title: 'Fiori Portal for Field Technicians',
        desc: 'Designed and deployed a mobile Fiori app for offshore field maintenance technicians, operating offline with SAP PM sync.',
        metrics: 'Data input errors decreased by 80%.'
      },
      inquiryTitle: 'Talk to a Fiori Designer',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Describe the SAP GUI screens you need modernized...',
      submitBtn: 'Request UX Design Proposal',
      successMsg: 'Thank you! Our UX design team will contact you shortly.'
    },
    integration: {
      slug: 'integration',
      badge: 'Integration',
      title: 'SAP Integration & API Suite',
      subtitle: 'Synchronize Salesforce, e-commerce, and third-party tools with SAP in real-time.',
      overview: 'Break down database silos. Dstellar deploys secure, high-speed integrations linking SAP S/4HANA with modern cloud platforms, CRM software, and payment processors using SAP Integration Suite (CPI).',
      gradientClass: 'linear-gradient(135deg, #ffffff 0%, #4ade80 50%, #10b981 100%)',
      themeColor: '#10b981',
      stats: [
        { value: '250ms', label: 'Average API Latency' },
        { value: '10M+', label: 'Daily Middleware Messages' },
        { value: '100%', label: 'Secure OAuth/SSL Handshakes' }
      ],
      capabilities: [
        { title: 'Cloud Integration (CPI)', desc: 'Build scalable messaging corridors and mapping rules to sync XML, JSON, and EDI signals.', icon: 'exchange' },
        { title: 'OData & REST API Engines', desc: 'Expose standard S/4HANA tables and custom functions to external networks securely.', icon: 'database' },
        { title: 'Event-Mesh Architectures', desc: 'Utilize publish-subscribe message queues to adjust inventories instantly when checkout triggers.', icon: 'bolt' }
      ],
      playbook: {
        tag: 'Integration',
        title: 'E-commerce Real-time Order Sync',
        desc: 'Connected a high-traffic Shopify store with S/4HANA Sales & Distribution using SAP CPI, syncing inventory and orders.',
        metrics: 'Average synchronization latency dropped under 300ms.'
      },
      inquiryTitle: 'Connect with our Integration Engineers',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Describe the third-party tools you need to integrate...',
      submitBtn: 'Request Integration Audit',
      successMsg: 'Thank you. Our API architects will contact you.'
    },
    'ariba-supply-chain': {
      slug: 'ariba-supply-chain',
      badge: 'Ariba',
      title: 'Ariba & Supply Chain Networks',
      subtitle: 'Coordinate global vendors, contract catalogs, and automated procurement.',
      overview: 'Reduce sourcing cycles and enhance vendor transparency. Dstellar configures SAP Ariba Buying and Network modules to connect you directly to millions of international tier-1 and tier-2 supplier portfolios.',
      gradientClass: 'linear-gradient(135deg, #ffffff 0%, #93c5fd 50%, #3b82f6 100%)',
      themeColor: '#3b82f6',
      stats: [
        { value: '35%', label: 'Reduction in Procurement Cycle' },
        { value: '10k+', label: 'Suppliers Connected Globally' },
        { value: '100%', label: 'Contract Spend Compliance' }
      ],
      capabilities: [
        { title: 'Ariba Network Integration', desc: 'Exchange invoices, purchase orders, and supplier catalogs electronically, eliminating paper trails.', icon: 'globe' },
        { title: 'Strategic Sourcing', desc: 'Conduct online auctions, automate RFP sourcing events, and run contract lifecycle comparisons.', icon: 'document' },
        { title: 'Supply Chain Collaboration', desc: 'Coordinate inventory forecasts and forecast adjustments directly with fab partners.', icon: 'exchange' }
      ],
      playbook: {
        tag: 'Case Study',
        title: 'Sourcing Procurement Savings',
        desc: 'Migrated a paper-based purchase order pipeline to SAP Ariba for a multinational logistics client.',
        metrics: '$18M in raw procurement savings in 18 months.'
      },
      inquiryTitle: 'Speak to an Ariba Consultant',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Describe your current supplier base and procurement software...',
      submitBtn: 'Get Sourcing Consultation',
      successMsg: 'Inquiry received. Our procurement specialists will contact you shortly.'
    }
  },
  es: {
    s4hana: {
      slug: 's4hana',
      badge: 'S/4HANA',
      title: 'Implementaciones SAP S/4HANA',
      subtitle: 'Migre a un ERP empresarial inteligente de núcleo limpio y alto rendimiento.',
      overview: 'Transición desde sistemas heredados SAP ECC o sistemas no SAP a S/4HANA con absoluta confianza.',
      gradientClass: 'linear-gradient(135deg, #ffffff 0%, #818cf8 50%, #4a3aff 100%)',
      themeColor: '#4a3aff',
      stats: [
        { value: '50+', label: 'Puestas en Marcha Exitosas' },
        { value: '40%', label: 'Reducción Promedio de Base de Datos' },
        { value: '6 Meses', label: 'Plazo Típico de Migración' }
      ],
      capabilities: [
        { title: 'Rutas Greenfield y Brownfield', desc: 'Elija entre una instalación limpia desde cero de S/4HANA o una conversión de sistema completo con datos históricos.', icon: 'globe' },
        { title: 'Optimización de Núcleo Limpio', desc: 'Aísle las modificaciones en aplicaciones en SAP BTP para preservar las actualizaciones estándar.', icon: 'cpu' },
        { title: 'Minimización del Tiempo de Inactividad', desc: 'Utilice métodos de tiempo de inactividad casi nulo (NZDT) para migrar datos pesados.', icon: 'bolt' }
      ],
      playbook: {
        tag: 'Estudio de Caso',
        title: 'Movimiento Global a S/4HANA Cloud',
        desc: 'Migración de un sistema de fabricación a S/4HANA Cloud, limpiando 15 años de modificaciones ABAP heredadas.',
        metrics: '90% de reducción de código personalizado y cierres financieros 45% más rápidos.'
      },
      inquiryTitle: 'Hable con nuestro Arquitecto Líder de S/4HANA',
      namePlaceholder: 'Su Nombre',
      emailPlaceholder: 'Dirección de Correo',
      msgPlaceholder: 'Cuéntenos sobre su entorno ECC o cronograma objetivo...',
      submitBtn: 'Solicitar Ruta S/4HANA',
      successMsg: '¡Gracias! Nuestro equipo de S/4HANA se pondrá en contacto en breve.'
    }
  },
  zh: {
    s4hana: {
      slug: 's4hana',
      badge: 'S/4HANA',
      title: 'SAP S/4HANA 系统实施',
      subtitle: '迁移至高弹性、干净核心的智能企业级 ERP。',
      overview: '以绝对的信心实现从老旧 SAP ECC 或非 SAP 系统向 S/4HANA 的平稳过渡。',
      gradientClass: 'linear-gradient(135deg, #ffffff 0%, #818cf8 50%, #4a3aff 100%)',
      themeColor: '#4a3aff',
      stats: [
        { value: '50+', label: '成功上线案例' },
        { value: '40%', label: '平均数据库缩减' },
        { value: '6个月', label: '典型迁移周期' }
      ],
      capabilities: [
        { title: '绿地与棕地实施路径', desc: '选择从零开始的全新 S/4HANA 净核安装，或保留历史数据的完整系统平移转换。', icon: 'globe' },
        { title: '干净核心优化', desc: '将定制开发隔离至 SAP 业务技术平台 (BTP) 侧，保护 S/4HANA 标准升级路径。', icon: 'cpu' },
        { title: '最小化停机时间', desc: '利用近乎零停机时间 (NZDT) 方法进行海量数据迁移，确保业务不中断。', icon: 'bolt' }
      ],
      playbook: {
        tag: '成功案例',
        title: '全球 S/4HANA 云迁移',
        desc: '协助某大型制造企业向 S/4HANA 私有云版迁移，并清理了过去 15 年堆积的 ABAP 自定义债务。',
        metrics: '自定义代码减少 90%，财务月结速度提升 45%。'
      },
      inquiryTitle: '联系我们的 S/4HANA 首席架构师',
      namePlaceholder: '您的姓名',
      emailPlaceholder: '电子邮箱',
      msgPlaceholder: '请提供您当前的 ECC 系统规模或目标上线时间...',
      submitBtn: '获取 S/4HANA 实施方案',
      successMsg: '谢谢！我们的 S/4HANA 顾问团队会尽快回复您。'
    }
  },
  de: {
    s4hana: {
      slug: 's4hana',
      badge: 'S/4HANA',
      title: 'SAP S/4HANA-Implementierungen',
      subtitle: 'Migrieren Sie auf ein Clean-Core-ERP der nächsten Generation.',
      overview: 'Sichere Migration von SAP ECC oder Altsystemen auf S/4HANA.',
      gradientClass: 'linear-gradient(135deg, #ffffff 0%, #818cf8 50%, #4a3aff 100%)',
      themeColor: '#4a3aff',
      stats: [
        { value: '50+', label: 'Erfolgreiche Go-Lives' },
        { value: '40%', label: 'Datenbank-Reduktion' },
        { value: '6 Monate', label: 'Migrationsfenster' }
      ],
      capabilities: [
        { title: 'Greenfield & Brownfield', desc: 'Neuinstallation oder Systemkonvertierung mit Historie.', icon: 'globe' },
        { title: 'Clean Core-Strategie', desc: 'Erweiterungen auf SAP BTP auslagern, um den Core sauber zu halten.', icon: 'cpu' },
        { title: 'Downtime-Minimierung', desc: 'Nahezu-Null-Ausfallzeiten bei der Datenmigration.', icon: 'bolt' }
      ],
      playbook: {
        tag: 'Fallstudie',
        title: 'Globale S/4HANA-Migration',
        desc: 'Erfolgreiche Migration einer globalen Systemlandschaft auf S/4HANA Cloud.',
        metrics: '90% weniger Custom Code und 45% schnellere Finanzabschlüsse.'
      },
      inquiryTitle: 'Sprechen Sie mit unserem S/4HANA-Architekten',
      namePlaceholder: 'Ihr Name',
      emailPlaceholder: 'E-Mail-Adresse',
      msgPlaceholder: 'Beschreiben Sie Ihre aktuelle Systemlandschaft...',
      submitBtn: 'Fahrplan anfordern',
      successMsg: 'Vielen Dank! Unser Team wird sich in Kürze melden.'
    }
  },
  fr: {
    s4hana: {
      slug: 's4hana',
      badge: 'S/4HANA',
      title: 'Intégrations SAP S/4HANA',
      subtitle: 'Migrez vers un ERP intelligent de nouvelle génération Clean Core.',
      overview: 'Transition sereine de SAP ECC ou d\'autres systèmes vers S/4HANA.',
      gradientClass: 'linear-gradient(135deg, #ffffff 0%, #818cf8 50%, #4a3aff 100%)',
      themeColor: '#4a3aff',
      stats: [
        { value: '50+', label: 'Démarrages Réussis' },
        { value: '40%', label: 'Réduction de Base de Données' },
        { value: '6 Mois', label: 'Temps Moyen de Projet' }
      ],
      capabilities: [
        { title: 'Projets Greenfield & Brownfield', desc: 'Installation standard à blanc ou conversion technique de l\'existant.', icon: 'globe' },
        { title: 'Optimisation Clean Core', desc: 'Développements déportés sur SAP BTP pour protéger le standard.', icon: 'cpu' },
        { title: 'Temps d\'Arrêt Réduits', desc: 'Méthodologie Near-Zero Downtime pour sécuriser la bascule.', icon: 'bolt' }
      ],
      playbook: {
        tag: 'Étude de Cas',
        title: 'Bascule Globale vers S/4HANA Cloud',
        desc: 'Migration d\'un système international, nettoyage de 15 ans d\'historique ABAP.',
        metrics: '90% de développements spécifiques supprimés, clôtures 45% plus rapides.'
      },
      inquiryTitle: 'Échangez avec notre Architecte Principal S/4HANA',
      namePlaceholder: 'Votre Nom',
      emailPlaceholder: 'Adresse E-mail',
      msgPlaceholder: 'Décrivez votre environnement ECC ou votre planning...',
      submitBtn: 'Demander la Feuille de Route',
      successMsg: 'Merci ! Notre équipe S/4HANA vous recontactera rapidement.'
    }
  },
  ja: {
    s4hana: {
      slug: 's4hana',
      badge: 'S/4HANA',
      title: 'SAP S/4HANA移行・新規導入',
      subtitle: 'クリーンコアで高性能なインテリジェントERPへの移行を支援。',
      overview: '既存のSAP ECCや他社システムからS/4HANAへの安全な移行を実現します。',
      gradientClass: 'linear-gradient(135deg, #ffffff 0%, #818cf8 50%, #4a3aff 100%)',
      themeColor: '#4a3aff',
      stats: [
        { value: '50件以上', label: '本番稼働実績' },
        { value: '40%', label: 'データベース容量平均削減率' },
        { value: '6ヶ月', label: '標準的な移行期間' }
      ],
      capabilities: [
        { title: '新規（Greenfield）および移行（Brownfield）', desc: '標準機能ベースでの新規導入、または歴史データを引き継ぐコンバージョンから選択。', icon: 'globe' },
        { title: 'クリーンコアの最適化', desc: 'アドオン機能をSAP BTPへ配置転換し、将来的なバージョンアップコストを抑制。', icon: 'cpu' },
        { title: 'ダウンタイム最小化', desc: 'ニアゼロダウンタイム（NZDT）技術により稼働停止時間を最小化。', icon: 'bolt' }
      ],
      playbook: {
        tag: '導入事例',
        title: 'グローバルS/4HANA移行',
        desc: '長年蓄積されたアドオン資産を整理し、最新のS/4HANA Cloudへマイグレーション。',
        metrics: 'アドオンプログラム90%削減、月次決算業務45%高速化。'
      },
      inquiryTitle: 'S/4HANA専任アーキテクトに相談する',
      namePlaceholder: 'お名前',
      emailPlaceholder: 'メールアドレス',
      msgPlaceholder: '現在のシステムバージョンや移行予定時期をお知らせください...',
      submitBtn: 'S/4HANA移行計画を依頼する',
      successMsg: 'お問い合わせありがとうございます。担当者より追ってご連絡いたします。'
    }
  }
};
