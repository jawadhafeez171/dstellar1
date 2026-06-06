export const COMMUNITY_TRANSLATIONS = {
  en: {
    community_blogs: {
      badge: "Expert Blogs",
      title: "Insights from Dstellar Architects",
      subtitle: "Technical deep dives, architectural best practices, and enterprise strategy straight from our global consulting delivery teams.",
      search_placeholder: "Search articles...",
      categories: ["All", "Architecture", "Cloud Migration", "AI & Analytics"],
      cta: "Read Article",
      blogs: [
        { title: "Clean Core Strategies in SAP S/4HANA", category: "Architecture", readTime: "8 min read", excerpt: "Learn how to deprecate legacy custom enhancements and shift customizations to SAP BTP using side-by-side extensibility.", author: "Elena Rostova", date: "June 2, 2026" },
        { title: "Migrating 4 Terabytes of ECC Data to Azure", category: "Cloud Migration", readTime: "12 min read", excerpt: "A technical retrospective on zero-downtime cutover planning, data cleansing, and validation for a global consumer brand.", author: "Sanjay Mehta", date: "May 25, 2026" },
        { title: "Integrating AI Agents in Fiori Workflows", category: "AI & Analytics", readTime: "6 min read", excerpt: "How we leveraged SAP Joule and custom Large Language Models to automate vendor invoice verification directly in Fiori.", author: "Sarah Jenkins", date: "May 14, 2026" }
      ]
    },
    community_events: {
      badge: "Events & Meetups",
      title: "Connect with the SAP Community",
      subtitle: "Join our upcoming webinars, hackathons, and local meetups to share knowledge and explore next-generation tech.",
      filter_all: "All Formats",
      cta: "Register Free",
      events: [
        { title: "SAP BTP Hackathon 2026", type: "Hackathon", spots: "40 Spots Left", date: "July 15, 2026", time: "09:00 AM EST", location: "Toronto Hub & Online" },
        { title: "Clean Core Conversion Masterclass", type: "Webinar", spots: "Unlimited", date: "June 28, 2026", time: "02:00 PM CET", location: "Online Live Broadcast" },
        { title: "Austin SAP Architects Meetup", type: "Meetup", spots: "12 Spots Left", date: "July 08, 2026", time: "06:30 PM CST", location: "Dstellar Austin Office" }
      ]
    },
    community_forum: {
      badge: "Discussion Board",
      title: "Dstellar Developer Forum",
      subtitle: "Ask questions, share code snippets, and troubleshoot enterprise systems with fellow developers and consultants.",
      search_placeholder: "Search discussions...",
      cta: "Create New Thread",
      categories: ["All", "ABAP Development", "SAP Basis & Cloud", "FICO & Controlling"],
      stats: [
        { value: "12,400+", label: "Active Members" },
        { value: "48,000+", label: "Resolved Threads" },
        { value: "120+", label: "Daily Posts" }
      ],
      threads: [
        { title: "How to resolve memory bottleneck during custom CDS View execution?", category: "ABAP Development", author: "DevMage", replies: 14, views: 240, date: "2 hrs ago" },
        { title: "SAP IS-U database migration tips: ECC to S/4HANA", category: "SAP Basis & Cloud", author: "BasisMaster", replies: 8, views: 185, date: "1 day ago" },
        { title: "Proper account determination configuration for dynamic sales tax", category: "FICO & Controlling", author: "TaxExpert", replies: 19, views: 320, date: "3 days ago" }
      ]
    },
    community_qa: {
      badge: "Q&A Portal",
      title: "Questions & Answers",
      subtitle: "Get answers to your technical issues from certified architects. Upvote solutions that helped you.",
      search_placeholder: "Search QA archive...",
      cta: "Ask Question",
      filter_tabs: ["Recent", "Most Upvoted", "Unanswered"],
      questions: [
        { title: "How do I invoke external REST APIs directly from an ABAP Cloud class?", votes: 18, answers: 3, tags: ["abap", "api", "cloud"], resolved: true },
        { title: "Which database table replaces BSIS/BSAS in S/4HANA Financials?", votes: 24, answers: 5, tags: ["s4hana", "fico", "database"], resolved: true },
        { title: "Failed to configure custom Fiori theme in Fiori Launchpad Designer", votes: 4, answers: 0, tags: ["fiori", "theme", "basis"], resolved: false }
      ]
    },
    community_resources: {
      badge: "Resource Library",
      title: "Playbooks, Templates & Guides",
      subtitle: "Free, high-quality reference architectures, project checklists, and configuration cheat sheets compiled by our delivery teams.",
      categories: ["All", "Playbook", "Spreadsheet", "Cheat Sheet"],
      resources: [
        { title: "S/4HANA Migration Fit-Gap Analysis Template", type: "Spreadsheet", format: "XLSX", size: "1.4 MB", downloads: 1890 },
        { title: "SAP BTP Integration Best Practices Guide", type: "Playbook", format: "PDF", size: "4.8 MB", downloads: 3120 },
        { title: "ABAP Fiori Launchpad Configuration Cheat Sheet", type: "Cheat Sheet", format: "PDF", size: "820 KB", downloads: 980 }
      ]
    }
  },
  es: {
    community_blogs: {
      badge: "Blogs de Expertos",
      title: "Perspectivas de Arquitectos de Dstellar",
      subtitle: "Análisis técnicos detallados, mejores prácticas de arquitectura y estrategia empresarial directamente de nuestros equipos de entrega global.",
      search_placeholder: "Buscar artículos...",
      categories: ["All", "Arquitectura", "Migración Cloud", "IA y Analítica"],
      cta: "Leer Artículo",
      blogs: [
        { title: "Estrategias de Clean Core en SAP S/4HANA", category: "Arquitectura", readTime: "8 min de lectura", excerpt: "Aprenda a retirar extensiones personalizadas obsoletas y moverlas a SAP BTP utilizando extensibilidad side-by-side.", author: "Elena Rostova", date: "June 2, 2026" },
        { title: "Migrando 4 Terabytes de Datos ECC a Azure", category: "Migración Cloud", readTime: "12 min de lectura", excerpt: "Retrospectiva técnica sobre planificación de transición sin tiempo de inactividad, limpieza de datos y validación.", author: "Sanjay Mehta", date: "May 25, 2026" },
        { title: "Integrando Agentes de IA en Flujos de Fiori", category: "IA y Analítica", readTime: "6 min de lectura", excerpt: "Cómo aprovechamos SAP Joule y modelos de lenguaje de gran tamaño para automatizar la verificación de facturas de proveedores.", author: "Sarah Jenkins", date: "May 14, 2026" }
      ]
    },
    community_events: {
      badge: "Eventos y Meetups",
      title: "Conéctese con la Comunidad SAP",
      subtitle: "Únase a nuestros seminarios web, hackathons y meetups locales para compartir conocimientos y explorar tecnologías de vanguardia.",
      filter_all: "Todos los Formatos",
      cta: "Registrarse Gratis",
      events: [
        { title: "SAP BTP Hackathon 2026", type: "Hackathon", spots: "40 Plazas Libres", date: "July 15, 2026", time: "09:00 AM EST", location: "Toronto Hub y Online" },
        { title: "Masterclass de Conversión Clean Core", type: "Webinar", spots: "Ilimitado", date: "June 28, 2026", time: "02:00 PM CET", location: "Transmisión Online en Vivo" },
        { title: "Austin SAP Architects Meetup", type: "Meetup", spots: "12 Plazas Libres", date: "July 08, 2026", time: "06:30 PM CST", location: "Oficina de Dstellar Austin" }
      ]
    },
    community_forum: {
      badge: "Foro de Discusión",
      title: "Foro de Desarrolladores Dstellar",
      subtitle: "Haga preguntas, comparta fragmentos de código y solucione problemas con otros desarrolladores y consultores.",
      search_placeholder: "Buscar discusiones...",
      cta: "Crear Nuevo Hilo",
      categories: ["All", "ABAP Development", "SAP Basis & Cloud", "FICO & Controlling"],
      stats: [
        { value: "12,400+", label: "Miembros Activos" },
        { value: "48,000+", label: "Hilos Resueltos" },
        { value: "120+", label: "Mensajes Diarios" }
      ],
      threads: [
        { title: "¿Cómo resolver problemas de cuello de botella de memoria en CDS Views?", category: "ABAP Development", author: "DevMage", replies: 14, views: 240, date: "Hace 2 horas" },
        { title: "Consejos para migración de bases de datos SAP IS-U: de ECC a S/4HANA", category: "SAP Basis & Cloud", author: "BasisMaster", replies: 8, views: 185, date: "Ayer" },
        { title: "Configuración de determinación de cuentas para impuestos dinámicos", category: "FICO & Controlling", author: "TaxExpert", replies: 19, views: 320, date: "Hace 3 días" }
      ]
    },
    community_qa: {
      badge: "Portal de Q&A",
      title: "Preguntas y Respuestas",
      subtitle: "Obtenga respuestas a sus dudas técnicas por parte de arquitectos certificados. Vote las mejores soluciones.",
      search_placeholder: "Buscar en el archivo...",
      cta: "Hacer Pregunta",
      filter_tabs: ["Recientes", "Más Votadas", "Sin Responder"],
      questions: [
        { title: "¿Cómo invocar REST APIs externas directamente desde una clase ABAP Cloud?", votes: 18, answers: 3, tags: ["abap", "api", "cloud"], resolved: true },
        { title: "¿Qué tabla de base de datos reemplaza a BSIS/BSAS en S/4HANA Finance?", votes: 24, answers: 5, tags: ["s4hana", "fico", "database"], resolved: true },
        { title: "Fallo al configurar tema personalizado de Fiori en Launchpad Designer", votes: 4, answers: 0, tags: ["fiori", "theme", "basis"], resolved: false }
      ]
    },
    community_resources: {
      badge: "Biblioteca de Recursos",
      title: "Plantillas, Guías y Playbooks",
      subtitle: "Descargue arquitecturas de referencia gratuitas, listas de verificación de proyectos y guías rápidas creadas por nuestros equipos.",
      categories: ["All", "Playbook", "Planilla", "Guía Rápida"],
      resources: [
        { title: "Plantilla de Análisis de Brechas para Migración S/4HANA", type: "Planilla", format: "XLSX", size: "1.4 MB", downloads: 1890 },
        { title: "Guía de Mejores Prácticas para Integración SAP BTP", type: "Playbook", format: "PDF", size: "4.8 MB", downloads: 3120 },
        { title: "Guía Rápida de Configuración de Fiori Launchpad en ABAP", type: "Guía Rápida", format: "PDF", size: "820 KB", downloads: 980 }
      ]
    }
  },
  zh: {
    community_blogs: {
      badge: "专家博客",
      title: "Dstellar 架构师的见解",
      subtitle: "来自我们全球咨询交付团队的技术深度剖析、架构最佳实践及企业技术策略。",
      search_placeholder: "搜索文章...",
      categories: ["All", "系统架构", "云端迁移", "人工智能与分析"],
      cta: "阅读文章",
      blogs: [
        { title: "SAP S/4HANA 中的 Clean Core 净核策略", category: "系统架构", readTime: "阅读时长 8 分钟", excerpt: "了解如何停用陈旧的定制代码，并利用旁路扩展（side-by-side extensibility）技术将定制业务迁移至 SAP BTP。", author: "Elena Rostova", date: "June 2, 2026" },
        { title: "将 4TB 的 ECC 历史数据成功迁移至 Azure 平台", category: "云端迁移", readTime: "阅读时长 12 分钟", excerpt: "针对全球知名消费品牌如何进行零停机切换规划、数据清洗以及数据验证的技术性回顾。", author: "Sanjay Mehta", date: "May 25, 2026" },
        { title: "在 Fiori 工作流中集成人工智能 Agent", category: "人工智能与分析", readTime: "阅读时长 6 分钟", excerpt: "我们如何利用 SAP Joule 和自定义大语言模型，直接在 Fiori 界面中自动验证供应商发票。", author: "Sarah Jenkins", date: "May 14, 2026" }
      ]
    },
    community_events: {
      badge: "活动与聚会",
      title: "联结全球 SAP 社群",
      subtitle: "加入我们即将举办的在线研讨会、黑客马拉松和本地技术沙龙，分享经验并探索未来科技。",
      filter_all: "所有活动形式",
      cta: "免费报名",
      events: [
        { title: "SAP BTP 黑客马拉松 2026", type: "Hackathon", spots: "剩余 40 个名额", date: "July 15, 2026", time: "09:00 AM EST", location: "多伦多技术中心及线上" },
        { title: "Clean Core 净核转换大师课", type: "Webinar", spots: "不限名额", date: "June 28, 2026", time: "02:00 PM CET", location: "线上网络直播" },
        { title: "奥斯汀 SAP 架构师沙龙聚会", type: "Meetup", spots: "剩余 12 个名额", date: "July 08, 2026", time: "06:30 PM CST", location: "Dstellar 奥斯汀办公室" }
      ]
    },
    community_forum: {
      badge: "讨论板块",
      title: "Dstellar 开发者社区论坛",
      subtitle: "提问交流、分享代码片段，与全球开发者及顾问同仁一起排查系统故障。",
      search_placeholder: "搜索论坛帖子...",
      cta: "发起新讨论",
      categories: ["All", "ABAP Development", "SAP Basis & Cloud", "FICO & Controlling"],
      stats: [
        { value: "12,400+", label: "活跃社群成员" },
        { value: "48,000+", label: "已解决的讨论" },
        { value: "120+", label: "每日发帖量" }
      ],
      threads: [
        { title: "如何解决自定义 CDS 视图执行过程中的内存瓶颈？", category: "ABAP Development", author: "DevMage", replies: 14, views: 240, date: "2 小时前" },
        { title: "SAP IS-U 数据库迁移技巧：从 ECC 到 S/4HANA 数据库", category: "SAP Basis & Cloud", author: "BasisMaster", replies: 8, views: 185, date: "1 天前" },
        { title: "如何为动态销售税配置正确的会计科目确认？", category: "FICO & Controlling", author: "TaxExpert", replies: 19, views: 320, date: "3 天前" }
      ]
    },
    community_qa: {
      badge: "问答门户",
      title: "技术问答平台",
      subtitle: "向认证架构师提出您的技术难题。为您觉得有帮助的解决方案点赞投同赞同票。",
      search_placeholder: "搜索问答存档...",
      cta: "提问",
      filter_tabs: ["最近提问", "最多赞同", "等待回答"],
      questions: [
        { title: "如何直接从 ABAP 云类中调用外部 RESTful 接口？", votes: 18, answers: 3, tags: ["abap", "api", "cloud"], resolved: true },
        { title: "在 S/4HANA Finance 中，哪个数据库表替代了 BSIS/BSAS？", votes: 24, answers: 5, tags: ["s4hana", "fico", "database"], resolved: true },
        { title: "在 Fiori Launchpad Designer 中配置自定义主题失败报错", votes: 4, answers: 0, tags: ["fiori", "theme", "basis"], resolved: false }
      ]
    },
    community_resources: {
      badge: "资源中心",
      title: "实践指南、配置模板与资源文件",
      subtitle: "下载由我们交付团队整理编撰的高质量参考架构设计、项目检查清单和配置备忘单。",
      categories: ["All", "Playbook", "数据表格", "备忘单"],
      resources: [
        { title: "S/4HANA 迁移 Fit-Gap 差异分析配置模板", type: "数据表格", format: "XLSX", size: "1.4 MB", downloads: 1890 },
        { title: "SAP BTP 系统集成最佳实践指南", type: "Playbook", format: "PDF", size: "4.8 MB", downloads: 3120 },
        { title: "ABAP Fiori Launchpad 配置维护备忘单", type: "备忘单", format: "PDF", size: "820 KB", downloads: 980 }
      ]
    }
  },
  de: {
    community_blogs: {
      badge: "Experten-Blogs",
      title: "Einblicke von Dstellar-Architekten",
      subtitle: "Technische Tiefenanalysen, Architektur-Best-Practices und Unternehmensstrategien direkt von unseren globalen Beratungsteams.",
      search_placeholder: "Artikel durchsuchen...",
      categories: ["All", "Architektur", "Cloud-Migration", "KI & Analytik"],
      cta: "Artikel lesen",
      blogs: [
        { title: "Clean Core-Strategien in SAP S/4HANA", category: "Architektur", readTime: "8 Min. Lesezeit", excerpt: "Erfahren Sie, wie Sie veraltete Anpassungen abbauen und Erweiterungen mithilfe von Side-by-Side-Extensibility auf SAP BTP verlagern.", author: "Elena Rostova", date: "June 2, 2026" },
        { title: "Migration von 4 Terabyte ECC-Daten zu Azure", category: "Cloud-Migration", readTime: "12 Min. Lesezeit", excerpt: "Ein technischer Rückblick auf die Planung von Null-Ausfallzeiten-Cutover, Datenbereinigung und -validierung.", author: "Sanjay Mehta", date: "May 25, 2026" },
        { title: "Integration von KI-Agenten in Fiori-Workflows", category: "KI & Analytik", readTime: "6 Min. Lesezeit", excerpt: "Wie wir SAP Joule und maßgeschneiderte Sprachmodelle genutzt haben, um die Rechnungsprüfung direkt in Fiori zu automatisieren.", author: "Sarah Jenkins", date: "May 14, 2026" }
      ]
    },
    community_events: {
      badge: "Events & Meetups",
      title: "Verbinden Sie sich mit der SAP-Community",
      subtitle: "Nehmen Sie an unseren Webinaren, Hackathons und Meetups teil, um Wissen auszutauschen und neue Technologien zu entdecken.",
      filter_all: "Alle Formate",
      cta: "Kostenlos registrieren",
      events: [
        { title: "SAP BTP Hackathon 2026", type: "Hackathon", spots: "40 freie Plätze", date: "July 15, 2026", time: "09:00 Uhr EST", location: "Toronto Hub & Online" },
        { title: "Clean Core Conversion Masterclass", type: "Webinar", spots: "Unbegrenzt", date: "June 28, 2026", time: "14:00 Uhr CET", location: "Live-Webinar" },
        { title: "Austin SAP Architects Meetup", type: "Meetup", spots: "12 freie Plätze", date: "July 08, 2026", time: "18:30 Uhr CST", location: "Dstellar Austin Office" }
      ]
    },
    community_forum: {
      badge: "Diskussionsforum",
      title: "Dstellar Entwicklerforum",
      subtitle: "Stellen Sie Fragen, teilen Sie Code-Snippets und lösen Sie Probleme mit anderen Entwicklern und Beratern.",
      search_placeholder: "Diskussionen durchsuchen...",
      cta: "Neues Thema erstellen",
      categories: ["All", "ABAP Development", "SAP Basis & Cloud", "FICO & Controlling"],
      stats: [
        { value: "12.400+", label: "Aktive Mitglieder" },
        { value: "48.000+", label: "Gelöste Themen" },
        { value: "120+", label: "Beiträge pro Tag" }
      ],
      threads: [
        { title: "Wie behebe ich Speicherengpässe bei der Ausführung von Custom CDS Views?", category: "ABAP Development", author: "DevMage", replies: 14, views: 240, date: "Vor 2 Std." },
        { title: "SAP IS-U Datenbank-Migrationstipps: ECC zu S/4HANA", category: "SAP Basis & Cloud", author: "BasisMaster", replies: 8, views: 185, date: "Gestern" },
        { title: "Korrekte Kontenfindungskonfiguration für dynamische Umsatzsteuer", category: "FICO & Controlling", author: "TaxExpert", replies: 19, views: 320, date: "Vor 3 Tagen" }
      ]
    },
    community_qa: {
      badge: "Fragen & Antworten",
      title: "Q&A-Portal",
      subtitle: "Erhalten Sie Antworten auf Ihre technischen Fragen von zertifizierten Architekten. Bewerten Sie hilfreiche Lösungen.",
      search_placeholder: "Q&A-Archiv durchsuchen...",
      cta: "Frage stellen",
      filter_tabs: ["Aktuell", "Beliebteste", "Unbeantwortet"],
      questions: [
        { title: "Wie rufe ich externe REST-APIs direkt aus einer ABAP Cloud-Klasse auf?", votes: 18, answers: 3, tags: ["abap", "api", "cloud"], resolved: true },
        { title: "Welche Datenbanktabelle ersetzt BSIS/BSAS in S/4HANA Financials?", votes: 24, answers: 5, tags: ["s4hana", "fico", "database"], resolved: true },
        { title: "Konfiguration des benutzerdefinierten Fiori-Themes im Launchpad Designer fehlgeschlagen", votes: 4, answers: 0, tags: ["fiori", "theme", "basis"], resolved: false }
      ]
    },
    community_resources: {
      badge: "Ressourcen-Bibliothek",
      title: "Playbooks, Vorlagen & Anleitungen",
      subtitle: "Kostenlose Referenzarchitekturen, Projekt-Checklisten und Spickzettel, die von unseren Teams erstellt wurden.",
      categories: ["All", "Playbook", "Datenblatt", "Spickzettel"],
      resources: [
        { title: "S/4HANA Migration Fit-Gap-Analysevorlage", type: "Datenblatt", format: "XLSX", size: "1.4 MB", downloads: 1890 },
        { title: "SAP BTP Integration Best Practices Guide", type: "Playbook", format: "PDF", size: "4.8 MB", downloads: 3120 },
        { title: "ABAP Fiori Launchpad Konfiguration Spickzettel", type: "Spickzettel", format: "PDF", size: "820 KB", downloads: 980 }
      ]
    }
  },
  fr: {
    community_blogs: {
      badge: "Blogs Experts",
      title: "Analyses de nos Architectes",
      subtitle: "Tutoriels techniques, bonnes pratiques et stratégies d'entreprise rédigés par nos consultants.",
      search_placeholder: "Rechercher des articles...",
      categories: ["All", "Architecture", "Migration Cloud", "IA & Analytique"],
      cta: "Lire l'article",
      blogs: [
        { title: "Stratégies Clean Core sous SAP S/4HANA", category: "Architecture", readTime: "8 min de lecture", excerpt: "Découvrez comment retirer les personnalisations obsolètes et migrer vos développements vers SAP BTP via l'extensibilité side-by-side.", author: "Elena Rostova", date: "June 2, 2026" },
        { title: "Migration de 4 To de données ECC vers Azure", category: "Cloud Migration", readTime: "12 min de lecture", excerpt: "Retour d'expérience technique sur le basculement sans interruption de service pour un grand groupe de distribution.", author: "Sanjay Mehta", date: "May 25, 2026" },
        { title: "Intégration d'agents IA dans les flux Fiori", category: "IA & Analytique", readTime: "6 min de lecture", excerpt: "Comment exploiter SAP Joule et des LLM pour valider automatiquement les factures fournisseurs au sein de Fiori.", author: "Sarah Jenkins", date: "May 14, 2026" }
      ]
    },
    community_events: {
      badge: "Événements & Salons",
      title: "Restez Connecté à la Communauté SAP",
      subtitle: "Prenez part à nos webinaires, hackathons et meetups locaux pour échanger et découvrir de nouvelles technologies.",
      filter_all: "Tous les Formats",
      cta: "S'inscrire Gratuitement",
      events: [
        { title: "SAP BTP Hackathon 2026", type: "Hackathon", spots: "40 Places Restantes", date: "July 15, 2026", time: "09:00 AM EST", location: "Centre de Toronto & En Ligne" },
        { title: "Masterclass sur la transition Clean Core", type: "Webinar", spots: "Illimité", date: "June 28, 2026", time: "02:00 PM CET", location: "Diffusion En Direct" },
        { title: "Meetup Architectes SAP à Austin", type: "Meetup", spots: "12 Places Restantes", date: "July 08, 2026", time: "06:30 PM CST", location: "Bureaux Dstellar à Austin" }
      ]
    },
    community_forum: {
      badge: "Forum de Discussion",
      title: "Forum Développeur Dstellar",
      subtitle: "Posez des questions, partagez du code et résolvez des incidents techniques avec vos pairs.",
      search_placeholder: "Rechercher...",
      cta: "Créer un Hilo",
      categories: ["All", "ABAP Development", "SAP Basis & Cloud", "FICO & Controlling"],
      stats: [
        { value: "12,400+", label: "Membres Actifs" },
        { value: "48,000+", label: "Sujets Résolus" },
        { value: "120+", label: "Messages par jour" }
      ],
      threads: [
        { title: "Résoudre un goulot d'étranglement mémoire sur une CDS View ?", category: "ABAP Development", author: "DevMage", replies: 14, views: 240, date: "Il y a 2h" },
        { title: "Migration de bases de données SAP IS-U : ECC vers S/4HANA", category: "SAP Basis & Cloud", author: "BasisMaster", replies: 8, views: 185, date: "Hier" },
        { title: "Configuration de la détermination de compte pour la TVA", category: "FICO & Controlling", author: "TaxExpert", replies: 19, views: 320, date: "Il y a 3 jours" }
      ]
    },
    community_qa: {
      badge: "Questions & Réponses",
      title: "Portail d'Entraide",
      subtitle: "Consultez les réponses apportées par nos experts certifiés. Votez pour les contributions utiles.",
      search_placeholder: "Rechercher...",
      cta: "Poser une Question",
      filter_tabs: ["Récents", "Plus Votés", "Sans réponse"],
      questions: [
        { title: "Comment appeler une API REST depuis une classe ABAP Cloud ?", votes: 18, answers: 3, tags: ["abap", "api", "cloud"], resolved: true },
        { title: "Quelle table remplace BSIS/BSAS sous S/4HANA Finance ?", votes: 24, answers: 5, tags: ["s4hana", "fico", "database"], resolved: true },
        { title: "Impossible de paramétrer un thème Fiori dans Launchpad Designer", votes: 4, answers: 0, tags: ["fiori", "theme", "basis"], resolved: false }
      ]
    },
    community_resources: {
      badge: "Téléchargements",
      title: "Playbooks, Listes & Fiches",
      subtitle: "Accédez à nos architectures de référence, listes de validation et fiches de synthèse gratuites.",
      categories: ["All", "Playbook", "Tableur", "Fiche de Synthèse"],
      resources: [
        { title: "Tableur d'Analyse Fit-Gap pour Projet S/4HANA", type: "Tableur", format: "XLSX", size: "1.4 Mo", downloads: 1890 },
        { title: "Guide de Bonnes Pratiques d'Intégration sur SAP BTP", type: "Playbook", format: "PDF", size: "4.8 Mo", downloads: 3120 },
        { title: "Fiche d'aide de Configuration Fiori Launchpad sous ABAP", type: "Fiche de Synthèse", format: "PDF", size: "820 Ko", downloads: 980 }
      ]
    }
  },
  ja: {
    community_blogs: {
      badge: "エキスパートブログ",
      title: "Dstellarアーキテクトによる知見",
      subtitle: "グローバルコンサルティングチーム直伝の技術的な詳細解説、アーキテクチャのベストプラクティス、および企業技術戦略。",
      search_placeholder: "記事を検索...",
      categories: ["All", "アーキテクチャ", "クラウド移行", "AI＆アナリティクス"],
      cta: "記事を読む",
      blogs: [
        { title: "SAP S/4HANA におけるクリーンコア（Clean Core）戦略", category: "アーキテクチャ", readTime: "読了時間 8分", excerpt: "レガシーなアドオン修正を廃止し、サイドバイサイド拡張（side-by-side extensibility）を用いてカスタムロジックをSAP BTPへ移行する方法を解説。", author: "Elena Rostova", date: "June 2, 2026" },
        { title: "4テラバイトのECC歴史データをAzureへ安全に移行した実績", category: "クラウド移行", readTime: "読了時間 12分", excerpt: "グローバル消費財ブランドの移行において、停止時間ゼロの切り替え（Cutover）計画、データクレンジング、検証を行った振り返り。", author: "Sanjay Mehta", date: "May 25, 2026" },
        { title: "Fiori ワークフローへの AI エージェントの統合", category: "AI＆アナリティクス", readTime: "読了時間 6分", excerpt: "SAP Joule とカスタム大規模言語モデル（LLM）を活用して、仕入先請求書の照合をFiori上で自動化した実装方法を紹介。", author: "Sarah Jenkins", date: "May 14, 2026" }
      ]
    },
    community_events: {
      badge: "イベント＆勉強会",
      title: "SAPコミュニティとのつながり",
      subtitle: "知識を共有し最先端の技術を模索するために、今後のオンラインセミナー、ハッカソン、および地域の勉強会にご参加ください。",
      filter_all: "すべての形式",
      cta: "無料登録",
      events: [
        { title: "SAP BTP ハッカソン 2026", type: "Hackathon", spots: "残り40枠", date: "July 15, 2026", time: "09:00 AM EST", location: "トロントハブ ＆ オンライン" },
        { title: "クリーンコア（Clean Core）移行マスタークラス", type: "Webinar", spots: "定員なし", date: "June 28, 2026", time: "02:00 PM CET", location: "オンライン生放送" },
        { title: "オースティン SAP アーキテクト勉強会", type: "Meetup", spots: "残り12枠", date: "July 08, 2026", time: "06:30 PM CST", location: "Dstellar オースティンオフィス" }
      ]
    },
    community_forum: {
      badge: "ディスカッションボード",
      title: "Dstellar デベロッパーフォーラム",
      subtitle: "質問の投稿、コードの共有、および他の開発者やコンサルタントとのバグや障害のトラブルシューティング。",
      search_placeholder: "スレッドを検索...",
      cta: "新しいスレッドを作成",
      categories: ["All", "ABAP Development", "SAP Basis & Cloud", "FICO & Controlling"],
      stats: [
        { value: "12,400人以上", label: "アクティブメンバー" },
        { value: "48,000件以上", label: "解決済みスレッド" },
        { value: "120件以上", label: "一日の平均投稿" }
      ],
      threads: [
        { title: "カスタムCDSビューの実行中にメモリボトルネックを回避する方法は？", category: "ABAP Development", author: "DevMage", replies: 14, views: 240, date: "2時間前" },
        { title: "SAP IS-Uデータベース移行のヒント：ECCからS/4HANAへ", category: "SAP Basis & Cloud", author: "BasisMaster", replies: 8, views: 185, date: "1日前" },
        { title: "動的な消費税に対応するための適切な勘定設定の手法", category: "FICO & Controlling", author: "TaxExpert", replies: 19, views: 320, date: "3日前" }
      ]
    },
    community_qa: {
      badge: "Q&Aポータル",
      title: "技術質問と回答",
      subtitle: "認定アーキテクトから技術的な疑問への回答を得られます。役に立ったソリューションには高評価を送りましょう。",
      search_placeholder: "Q&Aアーカイブを検索...",
      cta: "質問を投稿",
      filter_tabs: ["最近の質問", "高評価", "未回答"],
      questions: [
        { title: "ABAP Cloudクラスから外部のREST APIを直接呼び出す方法は？", votes: 18, answers: 3, tags: ["abap", "api", "cloud"], resolved: true },
        { title: "S/4HANA FinanceにおいてBSIS/BSASテーブルを代替するのはどれですか？", votes: 24, answers: 5, tags: ["s4hana", "fico", "database"], resolved: true },
        { title: "Fiori Launchpad Designerでカスタムテーマの設定が失敗する", votes: 4, answers: 0, tags: ["fiori", "theme", "basis"], resolved: false }
      ]
    },
    community_resources: {
      badge: "リソースライブラリ",
      title: "プレイブック・構成テンプレート・ガイド一覧",
      subtitle: "デリバリーチームがまとめた、無料かつ高品質なリファレンスアーキテクチャ、プロジェクトチェックリスト、早見表をご利用ください。",
      categories: ["All", "プレイブック", "スプレッドシート", "早見表"],
      resources: [
        { title: "S/4HANA移行に伴うFit-Gap分析シート", type: "スプレッドシート", format: "XLSX", size: "1.4 MB", downloads: 1890 },
        { title: "SAP BTP システム統合ベストプラクティスガイド", type: "プレイブック", format: "PDF", size: "4.8 MB", downloads: 3120 },
        { title: "ABAP環境におけるFiori Launchpad構成手順早見表", type: "早見表", format: "PDF", size: "820 KB", downloads: 980 }
      ]
    }
  }
};
