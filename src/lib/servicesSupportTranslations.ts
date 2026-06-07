export interface ServiceCapability {
  title: string;
  desc: string;
  icon: string;
}

export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServicePlaybook {
  tag: string;
  title: string;
  desc: string;
  metrics: string;
}

export interface ServiceSupportDetail {
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
  overview: string;
  gradientClass?: string;
  themeColor?: string;
  stats: ServiceStat[];
  capabilities: ServiceCapability[];
  playbook: ServicePlaybook;
  inquiryTitle: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  msgPlaceholder: string;
  submitBtn: string;
  successMsg: string;
}

export const SERVICES_SUPPORT_TRANSLATIONS: Record<string, Record<string, ServiceSupportDetail>> = {
  en: {
    'ai-ml': {
      slug: 'ai-ml',
      badge: 'AI & ML',
      title: 'Artificial Intelligence & Machine Learning',
      subtitle: 'Integrate SAP Joule, predictive modeling, and intelligent process automation.',
      overview: 'Leverage next-generation generative AI and deep learning to automate business operations. Dstellar implements SAP Business AI and custom machine learning pipelines to extract document metadata, predict inventory shortages, and streamline customer query responses.',
      themeColor: '#06b6d4',
      gradientClass: 'linear-gradient(135deg, #0f172a 0%, #0891b2 50%, #06b6d4 100%)',
      stats: [
        { value: '95%', label: 'OCR Extraction Accuracy' },
        { value: '4x', label: 'Faster Workflow Approvals' },
        { value: '12+', label: 'AI Agents Configured' }
      ],
      capabilities: [
        { title: 'SAP Joule Copilot', desc: 'Deploy conversational AI assistants to guide corporate users through complex transaction flows.', icon: 'user' },
        { title: 'Intelligent Document Processing', desc: 'Automatically extract invoice details, bill of materials, and shipping labels using advanced OCR.', icon: 'document' },
        { title: 'Predictive Demand Models', desc: 'Forecast inventory requirement spikes by correlating sales history with market trends.', icon: 'bolt' }
      ],
      playbook: {
        tag: 'Innovation',
        title: 'Automated Accounts Payable via AI',
        desc: 'Deployed custom ML models to classify and ingest incoming vendor invoices into SAP accounts payable automatically.',
        metrics: 'Invoice ingestion time reduced from 3 minutes to 4 seconds with 98% accuracy.'
      },
      inquiryTitle: 'Speak to our AI & ML Lead Architect',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Tell us about your automation goals or target processes...',
      submitBtn: 'Request AI Roadmap',
      successMsg: 'Thank you! Our AI team will reach out shortly.'
    },
    'cloud-devsecops': {
      slug: 'cloud-devsecops',
      badge: 'Cloud',
      title: 'Cloud Migration & DevSecOps',
      subtitle: 'Modernize infrastructure on AWS, Azure, Google Cloud, and SAP BTP.',
      overview: 'Transition your core enterprise workload to secure public or private clouds. Dstellar designs containerized architectures, implements CI/CD pipelines, and automates infrastructure scaling for mission-critical SAP instances.',
      themeColor: '#2563eb',
      gradientClass: 'linear-gradient(135deg, #0f172a 0%, #1d4ed8 50%, #2563eb 100%)',
      stats: [
        { value: '99.99%', label: 'Infrastructure Uptime' },
        { value: '35%', label: 'Hosting Cost Reduction' },
        { value: '10x', label: 'Faster Release Cycles' }
      ],
      capabilities: [
        { title: 'Hyperscaler Migration', desc: 'Safely migrate multi-terabyte SAP databases to AWS, Microsoft Azure, or Google Cloud Platform.', icon: 'globe' },
        { title: 'DevSecOps Automation', desc: 'Establish automated build, test, and security pipelines for custom SAP BTP extensions.', icon: 'cogs' },
        { title: 'Elastic Scaling Solutions', desc: 'Configure auto-scaling server clusters to absorb month-end database processing spikes.', icon: 'bolt' }
      ],
      playbook: {
        tag: 'Cloud Transition',
        title: 'Enterprise Hyperscaler Migration',
        desc: 'Lifted and shifted a legacy on-premise SAP landscape to AWS, incorporating automated backups and disaster recovery.',
        metrics: '50% infrastructure cost savings and zero downtime during cutover.'
      },
      inquiryTitle: 'Speak to our Cloud & DevSecOps Lead',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Describe your hosting landscape or migration timeline...',
      submitBtn: 'Request Cloud Roadmap',
      successMsg: 'Thank you! Our cloud architects will reach out shortly.'
    },
    'cybersecurity-compliance': {
      slug: 'cybersecurity-compliance',
      badge: 'Security',
      title: 'Cybersecurity & Compliance',
      subtitle: 'Secure global user roles, enforce SOD rules, and pass GRC audits.',
      overview: 'Protect your most valuable corporate data from internal and external threats. Dstellar designs robust security governance frameworks, validates Segregation of Duties (SOD) matrices, and audits SAP configurations against local compliance standards.',
      themeColor: '#10b981',
      gradientClass: 'linear-gradient(135deg, #0f172a 0%, #047857 50%, #10b981 100%)',
      stats: [
        { value: '100%', label: 'GRC Compliance Rating' },
        { value: '0', label: 'Security Breaches' },
        { value: '15k+', label: 'Roles Audited & Secured' }
      ],
      capabilities: [
        { title: 'SAP GRC Implementations', desc: 'Automate access risk analysis, emergency access management, and user provisioning auditing.', icon: 'shield' },
        { title: 'Segregation of Duties (SOD)', desc: 'Design clean security role matrices preventing conflicts of interest and unauthorized payments.', icon: 'lock' },
        { title: 'Vulnerability Shielding', desc: 'Conduct deep configuration scans to identify security patches and database vulnerabilities.', icon: 'shield' }
      ],
      playbook: {
        tag: 'Compliance',
        title: 'Global SOD Role Remediation',
        desc: 'Remediated critical role conflicts for a multinational financial services provider, cleaning up 8,000 user accounts.',
        metrics: '100% compliance achieved for SOX auditor evaluation.'
      },
      inquiryTitle: 'Speak to our GRC Security Specialist',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Describe your compliance requirements or role audit goals...',
      submitBtn: 'Request Security Assessment',
      successMsg: 'Thank you! Our security experts will reach out shortly.'
    },
    'digital-transformation': {
      slug: 'digital-transformation',
      badge: 'Transformation',
      title: 'Digital Transformation',
      subtitle: 'Reinvent business processes, customer experiences, and digital channels.',
      overview: 'Enable modern commerce, mobile operations, and automated workflows. Dstellar designs end-to-end digital roadmaps that connect customer touchpoints directly with backend ERP systems.',
      themeColor: '#8b5cf6',
      gradientClass: 'linear-gradient(135deg, #0f172a 0%, #6d28d9 50%, #8b5cf6 100%)',
      stats: [
        { value: '3x', label: 'Customer Engagement Score' },
        { value: '60%', label: 'Manual Workflows Automated' },
        { value: '180+', label: 'Integrations Implemented' }
      ],
      capabilities: [
        { title: 'Omnichannel Commerce', desc: 'Connect modern digital storefronts and sales portals directly to SAP inventory engines.', icon: 'exchange' },
        { title: 'Mobile Operations Suite', desc: 'Deploy custom mobile apps for shop-floor logistics, warehouse operators, and field service crews.', icon: 'grid' },
        { title: 'Process Automation', desc: 'Replace manual spreadsheets and email chains with automated system workflows.', icon: 'cpu' }
      ],
      playbook: {
        tag: 'Reinvention',
        title: 'Omnichannel Commerce Integration',
        desc: 'Re-architected the customer order journey for a global distributor, linking a headless front-end with SAP SD.',
        metrics: 'Order processing throughput scaled by 150% in the first quarter.'
      },
      inquiryTitle: 'Speak to a Digital Transformation Consultant',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Describe your current processes or digitalization goals...',
      submitBtn: 'Request Transformation Assessment',
      successMsg: 'Thank you! Our digital advisors will contact you shortly.'
    },
    'technology-advisory': {
      slug: 'technology-advisory',
      badge: 'Advisory',
      title: 'Technology Advisory Services',
      subtitle: 'System audits, architecture design, and strategic roadmaps.',
      overview: 'Get unbiased answers from veteran enterprise architects. Dstellar provides fractional CTO/Chief Architect services, conducts comprehensive technical debt audits, and builds upgrade roadmaps.',
      themeColor: '#d97706',
      gradientClass: 'linear-gradient(135deg, #0f172a 0%, #b45309 50%, #d97706 100%)',
      stats: [
        { value: '40+', label: 'Enterprise Roadmaps Drawn' },
        { value: '15+ Yrs', label: 'Average Architect Experience' },
        { value: '98%', label: 'Advisory Recommendation Fit' }
      ],
      capabilities: [
        { title: 'Architectural System Audits', desc: 'Evaluate database health, custom code bloat, and upgrade readiness.', icon: 'document' },
        { title: 'Upgrade Roadmap Planning', desc: 'Design the transition steps to move from legacy platforms to Next-Gen ERP systems.', icon: 'globe' },
        { title: 'Fractional Chief Architects', desc: 'Secure high-level guidance for your IT steerco meetings and critical deployment phases.', icon: 'user' }
      ],
      playbook: {
        tag: 'Strategy',
        title: 'Global IT Architecture Audit',
        desc: 'Audited the legacy ERP system landscape of a global shipping provider to identify bottlenecks and design upgrades.',
        metrics: 'Identified $4.2M in annual redundant license and hosting savings.'
      },
      inquiryTitle: 'Contact Our Technology Advisors',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Tell us about your IT landscape or current roadmap...',
      submitBtn: 'Request Architecture Briefing',
      successMsg: 'Thank you! Our advisory team will reach out shortly.'
    },
    'premium-support-ams': {
      slug: 'premium-support-ams',
      badge: 'AMS Support',
      title: 'Premium Support & Managed AMS',
      subtitle: '24/7 SLA-backed application management, monitoring, and tuning.',
      overview: 'Ensure your critical systems are operational and performing at peak capacity. Dstellar provides dedicated Application Management Services (AMS) backed by strict SLA targets, proactive monitoring, and constant optimizations.',
      themeColor: '#ef4444',
      gradientClass: 'linear-gradient(135deg, #0f172a 0%, #b91c1c 50%, #ef4444 100%)',
      stats: [
        { value: '15 Min', label: 'SLA Response Time' },
        { value: '24/7/365', label: 'Uptime Monitoring' },
        { value: '99.99%', label: 'Critical Database Availability' }
      ],
      capabilities: [
        { title: '24/7 Monitoring & Alerts', desc: 'Proactively track server loads, database memory pools, and background job queues.', icon: 'shield' },
        { title: 'L1-L4 Support Suite', desc: 'Resolve user access issues, bug reports, custom code failures, and master data repairs.', icon: 'wrench' },
        { title: 'Continuous Optimization', desc: 'Conduct regular system maintenance, performance tuning, and index rebuilds.', icon: 'cogs' }
      ],
      playbook: {
        tag: 'AMS Support',
        title: 'Managed AMS for Global Logistics',
        desc: 'Assumed 24/7 support responsibility for a global transport company\'s critical billing and inventory systems.',
        metrics: 'Average issue resolution time reduced by 65% in 60 days.'
      },
      inquiryTitle: 'Speak to our AMS Support Coordinator',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Tell us about your support requirements or current ticketing volume...',
      submitBtn: 'Request AMS Assessment',
      successMsg: 'Thank you! Our AMS team will get back to you shortly.'
    },
    'help-portal': {
      slug: 'help-portal',
      badge: 'Help Portal',
      title: 'Dstellar Help Portal',
      subtitle: 'Search documentation, open support tickets, and check system status.',
      overview: 'Access detailed technical documentation, submit support tickets, and monitor system health. The Dstellar Help Portal is your self-service hub for standard guides and ticket tracking.',
      themeColor: '#4f46e5',
      gradientClass: 'linear-gradient(135deg, #0f172a 0%, #4338ca 50%, #4f46e5 100%)',
      stats: [
        { value: '10k+', label: 'Published Help Articles' },
        { value: '94%', label: 'Self-Service Resolution' },
        { value: '2 Min', label: 'Ticket Queue Wait Time' }
      ],
      capabilities: [
        { title: 'Technical Knowledge Base', desc: 'Search thousands of setup guides, troubleshooting articles, and configuration templates.', icon: 'document' },
        { title: 'Ticket Submission & Tracking', desc: 'Submit new tickets, attach system logs, and monitor engineer updates in real-time.', icon: 'globe' },
        { title: 'System Status Monitor', desc: 'Check real-time health and uptime statistics for your cloud-hosted servers and systems.', icon: 'shield' }
      ],
      playbook: {
        tag: 'Portal',
        title: 'Self-Service Support Launch',
        desc: 'Deployed the Dstellar Help Portal globally, linking it directly to client IT service desks and monitoring agents.',
        metrics: 'Overall L1 support ticket volumes decreased by 40% due to self-service lookup.'
      },
      inquiryTitle: 'Submit a Portal Support Request',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Describe the issue or assistance you require...',
      submitBtn: 'Open Support Request',
      successMsg: 'Thank you! A ticket has been created. Check your inbox for updates.'
    }
  },
  es: {
    'ai-ml': {
      slug: 'ai-ml',
      badge: 'IA y ML',
      title: 'Inteligencia Artificial y Aprendizaje Automático',
      subtitle: 'Integre SAP Joule, modelado predictivo y automatización inteligente de procesos.',
      overview: 'Aproveche la IA generativa de próxima generación y el aprendizaje profundo para automatizar las operaciones comerciales. Dstellar implementa SAP Business AI y canales de aprendizaje automático personalizados para extraer metadatos de documentos, predecir la escasez de inventario y optimizar las respuestas a las consultas de los clientes.',
      stats: [
        { value: '95%', label: 'Precisión de extracción OCR' },
        { value: '4x', label: 'Aprobaciones de flujo de trabajo rápidas' },
        { value: '12+', label: 'Agentes de IA configurados' }
      ],
      capabilities: [
        { title: 'Copiloto SAP Joule', desc: 'Implemente asistentes de IA conversacionales para guiar a los usuarios corporativos a través de flujos de transacciones complejos.', icon: 'user' },
        { title: 'Procesamiento Inteligente de Documentos', desc: 'Extraiga automáticamente detalles de facturas, listas de materiales y etiquetas de envío utilizando OCR avanzado.', icon: 'document' },
        { title: 'Modelos de Demanda Predictiva', desc: 'Pronostique picos en los requisitos de inventario correlacionando el historial de ventas con las tendencias del mercado.', icon: 'bolt' }
      ],
      playbook: {
        tag: 'Innovación',
        title: 'Cuentas por Pagar Automatizadas mediante IA',
        desc: 'Implementación de modelos ML personalizados para clasificar e ingresar facturas de proveedores entrantes directamente en las cuentas por pagar de SAP.',
        metrics: 'Tiempo de ingreso de facturas reducido de 3 minutos a 4 segundos con 98% de precisión.'
      },
      inquiryTitle: 'Hable con nuestro Arquitecto Líder de IA y ML',
      namePlaceholder: 'Su Nombre',
      emailPlaceholder: 'Dirección de Correo',
      msgPlaceholder: 'Cuéntenos sobre sus objetivos de automatización o procesos...',
      submitBtn: 'Solicitar Ruta de IA',
      successMsg: '¡Gracias! Nuestro equipo de IA se pondrá en contacto en breve.'
    }
  },
  zh: {
    'ai-ml': {
      slug: 'ai-ml',
      badge: '人工智能与机器学习',
      title: '人工智能与机器学习',
      subtitle: '集成 SAP Joule、预测建模与智能流程自动化。',
      overview: '利用下一代生成式人工智能与深度学习实现业务流程自动化。Dstellar 实施 SAP Business AI 及定制化机器学习流水线，以提取文档元数据、预测库存短缺并优化客户查询响应。',
      stats: [
        { value: '95%', label: 'OCR 提取准确率' },
        { value: '4倍', label: '工作流审批加速' },
        { value: '12+', label: '已配置的 AI 智能体' }
      ],
      capabilities: [
        { title: 'SAP Joule 协同助手', desc: '部署对话式 AI 助手，引导企业用户完成复杂的业务流程操作。', icon: 'user' },
        { title: '智能文档处理', desc: '利用先进的 OCR 技术自动提取发票详情、物料清单和物流标签。', icon: 'document' },
        { title: '预测性需求模型', desc: '将历史销售数据与市场趋势相关联，精准预测库存需求高峰。', icon: 'bolt' }
      ],
      playbook: {
        tag: '联合创新',
        title: '基于 AI 的应付账款自动化',
        desc: '部署定制机器学习模型，自动分类并录入供应商发票至 SAP 应付账款系统。',
        metrics: '发票录入时间从3分钟缩短至4秒，准确率高达 98%。'
      },
      inquiryTitle: '联系我们的 AI 与机器学习首席架构师',
      namePlaceholder: '您的姓名',
      emailPlaceholder: '电子邮箱',
      msgPlaceholder: '请描述您的自动化目标或需要优化的业务流程...',
      submitBtn: '申请 AI 数字化转型路线图',
      successMsg: '谢谢！我们的 AI 顾问团队会尽快回复您。'
    }
  },
  de: {},
  fr: {},
  ja: {}
};
