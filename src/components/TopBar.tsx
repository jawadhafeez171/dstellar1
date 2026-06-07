"use client";
import { useState } from 'react';
import { Logo } from './Shared';
import { useLanguage, Language } from '@/context/LanguageContext';

const REGIONS = [
  {
    region: 'Americas',
    countries: [
      { name: 'United States', code: 'us' },
      { name: 'Canada', code: 'ca' },
      { name: 'Brazil', code: 'br' },
      { name: 'Mexico', code: 'mx' }
    ]
  },
  {
    region: 'Europe',
    countries: [
      { name: 'Germany', code: 'de' },
      { name: 'United Kingdom', code: 'gb' },
      { name: 'France', code: 'fr' },
      { name: 'Italy', code: 'it' },
      { name: 'Spain', code: 'es' }
    ]
  },
  {
    region: 'Asia Pacific',
    countries: [
      { name: 'India', code: 'in' },
      { name: 'Japan', code: 'jp' },
      { name: 'Singapore', code: 'sg' },
      { name: 'Australia', code: 'au' },
      { name: 'China', code: 'cn' }
    ]
  },
  {
    region: 'Middle East & Africa',
    countries: [
      { name: 'UAE', code: 'ae' },
      { name: 'Saudi Arabia', code: 'sa' },
      { name: 'South Africa', code: 'za' },
      { name: 'Turkey', code: 'tr' }
    ]
  }
];

const COUNTRY_LANGS: Record<string, Language> = {
  'United States': 'en',
  'Canada': 'en',
  'Brazil': 'en',
  'Mexico': 'es',
  'Germany': 'de',
  'United Kingdom': 'en',
  'France': 'fr',
  'Italy': 'en',
  'Spain': 'es',
  'India': 'en',
  'Japan': 'ja',
  'Singapore': 'en',
  'Australia': 'en',
  'China': 'zh',
  'UAE': 'en',
  'Saudi Arabia': 'en',
  'South Africa': 'en',
  'Turkey': 'en'
};

const INDUSTRIES_LINKS: Record<string, string> = {
  // English
  'Automotive': '/industries/automotive',
  'Consumer Products': '/industries/consumer-products',
  'Electronic & High Tech': '/industries/electronic-high-tech',
  'Manufacturing & Industrial': '/industries/manufacturing-industrial',
  'Energy & Utilities': '/industries/energy-utilities',
  'Life Sciences & Healthcare': '/industries/life-sciences-healthcare',
  'Government & Public Sector': '/industries/government-public-sector',
  'Capital Markets': '/industries/capital-markets',
  'Travel & Hospitality': '/industries/travel-hospitality',
  'Construction': '/industries/construction',

  // Spanish
  'Automotriz': '/industries/automotive',
  'Productos de Consumo': '/industries/consumer-products',
  'Electrónica y Alta Tecnología': '/industries/electronic-high-tech',
  'Manufactura e Industrial': '/industries/manufacturing-industrial',
  'Energía y Servicios Públicos': '/industries/energy-utilities',
  'Ciencias de la Vida y Salud': '/industries/life-sciences-healthcare',
  'Gobierno y Sector Público': '/industries/government-public-sector',
  'Mercados de Capitales': '/industries/capital-markets',
  'Viajes y Hospitalidad': '/industries/travel-hospitality',
  'Construcción': '/industries/construction',

  // Chinese
  '汽车制造': '/industries/automotive',
  '消费品行业': '/industries/consumer-products',
  '电子与高科技': '/industries/electronic-high-tech',
  '装备制造与工业': '/industries/manufacturing-industrial',
  '能源与公用事业': '/industries/energy-utilities',
  '生命科学与医疗健康': '/industries/life-sciences-healthcare',
  '政府与公共部门': '/industries/government-public-sector',
  '资本市场': '/industries/capital-markets',
  '旅游与酒店管理': '/industries/travel-hospitality',
  '建筑与工程': '/industries/construction',

  // German
  'Automobilindustrie': '/industries/automotive',
  'Konsumgüter': '/industries/consumer-products',
  'Elektronik & High-Tech': '/industries/electronic-high-tech',
  'Fertigung & Industrie': '/industries/manufacturing-industrial',
  'Energie & Versorger': '/industries/energy-utilities',
  'Life Sciences & Gesundheit': '/industries/life-sciences-healthcare',
  'Staat & Öffentlicher Sektor': '/industries/government-public-sector',
  'Kapitalmärkte': '/industries/capital-markets',
  'Reisen & Gastgewerbe': '/industries/travel-hospitality',
  'Bauwesen': '/industries/construction',

  // French
  'Automobile': '/industries/automotive',
  'Produits de Consommation': '/industries/consumer-products',
  'Électronique & Haute Technologie': '/industries/electronic-high-tech',
  'Fabrication & Industrie': '/industries/manufacturing-industrial',
  'Énergie & Services Publics': '/industries/energy-utilities',
  'Sciences de la Vie & Santé': '/industries/life-sciences-healthcare',
  'Gouvernement & Secteur Public': '/industries/government-public-sector',
  'Marchés de Capitaux': '/industries/capital-markets',
  'Voyages & Hôtellerie': '/industries/travel-hospitality',

  // Japanese
  '自動車産業': '/industries/automotive',
  '消費財': '/industries/consumer-products',
  '電子・ハイテク': '/industries/electronic-high-tech',
  '製造・産業機械': '/industries/manufacturing-industrial',
  '電力・ガス・水道': '/industries/energy-utilities',
  'ライフサイエンス・ヘルスケア': '/industries/life-sciences-healthcare',
  '政府・公共機関': '/industries/government-public-sector',
  '安全資本': '/industries/capital-markets',
  '資本市場': '/industries/capital-markets',
  '旅行・ホスピタリティ': '/industries/travel-hospitality',
  '建設・エンジニアリング': '/industries/construction'
};

const DISCOVER_LINKS: Record<string, string> = {
  // English
  'Who We Are': '/discover/who-we-are',
  'History': '/discover/history',
  'Sustainability & CSR': '/discover/sustainability',
  'Innovation & Research': '/discover/innovation',
  'Investor Relations': '/discover/investor-relations',
  'Sports Sponsorships': '/discover/sports-sponsorships',
  
  // Spanish
  'Quiénes Somos': '/discover/who-we-are',
  'Historia': '/discover/history',
  'Sostenibilidad y RSC': '/discover/sustainability',
  'Innovación e Investigación': '/discover/innovation',
  'Relaciones con Inversores': '/discover/investor-relations',
  'Patrocinios Deportivos': '/discover/sports-sponsorships',
  
  // Chinese
  '公司简介': '/discover/who-we-are',
  '发展历史': '/discover/history',
  '可持续发展与 CSR': '/discover/sustainability',
  '创新与前沿研究': '/discover/innovation',
  '投资者关系': '/discover/investor-relations',
  '体育赞助': '/discover/sports-sponsorships',

  // German
  'Wer wir sind': '/discover/who-we-are',
  'Geschichte': '/discover/history',
  'Nachhaltigkeit & CSR': '/discover/sustainability',
  'Innovation & Forschung': '/discover/innovation',
  'Sport-Sponsoring': '/discover/sports-sponsorships',

  // French
  'Qui Nous Sommes': '/discover/who-we-are',
  'Histoire': '/discover/history',
  'Développement Durable & RSE': '/discover/sustainability',
  'Innovation & Recherche': '/discover/innovation',
  'Relations Investisseurs': '/discover/investor-relations',
  'Sponsorings Sportifs': '/discover/sports-sponsorships',

  // Japanese
  '私たちについて': '/discover/who-we-are',
  '沿革': '/discover/history',
  'サステナビリティ＆CSR': '/discover/sustainability',
  'イノベーション＆研究': '/discover/innovation',
  '投資家情報': '/discover/investor-relations',
  'スポーツ協賛': '/discover/sports-sponsorships'
};

const CAREERS_LINKS: Record<string, string> = {
  // English
  'Job Search & Openings': '/careers/job-search',
  'Students & Graduates': '/careers/students',
  'Your Career Path': '/careers/career-path',
  'Why Join Dstellar': '/careers/why-join',
  // Spanish
  'Búsqueda de Empleo y Vacantes': '/careers/job-search',
  'Estudiantes y Graduados': '/careers/students',
  'Su Trayectoria Profesional': '/careers/career-path',
  'Por qué Unirse a Dstellar': '/careers/why-join',
  // Chinese
  '职位搜索与招聘': '/careers/job-search',
  '校园招聘与实习生': '/careers/students',
  '您的职业发展路径': '/careers/career-path',
  '为什么选择 Dstellar': '/careers/why-join',
  // German
  'Stellensuche & Stellenangebote': '/careers/job-search',
  'Studenten & Absolventen': '/careers/students',
  'Ihr Karriereweg': '/careers/career-path',
  'Warum Dstellar': '/careers/why-join',
  // French
  "Recherche d'Emploi & Postes Ouverts": '/careers/job-search',
  'Étudiants & Jeunes Diplômés': '/careers/students',
  'Votre Plan de Carrière': '/careers/career-path',
  'Pourquoi Nous Rejoindre': '/careers/why-join',
  // Japanese
  '求人検索・募集要項': '/careers/job-search',
  '新卒・学生向け採用': '/careers/students',
  'キャリアパス': '/careers/career-path',
  'Dstellarで働く理由': '/careers/why-join',
};

const COMMUNITY_LINKS: Record<string, string> = {
  // English
  'Community Forum': '/community/forum',
  'Expert Blogs': '/community/blogs',
  'Q&A and Forums': '/community/qa',
  'Events & Meetups': '/community/events',
  'Resource Library': '/community/resources',

  // Spanish
  'Foro de la Comunidad': '/community/forum',
  'Blogs de Expertos': '/community/blogs',
  'Preguntas y Respuestas': '/community/qa',
  'Eventos y Reuniones': '/community/events',
  'Biblioteca de Recursos': '/community/resources',

  // Chinese
  '社区论坛': '/community/forum',
  '专家博客': '/community/blogs',
  '问答社区': '/community/qa',
  '活动与线下聚会': '/community/events',
  '资源库': '/community/resources',

  // German
  'Community-Forum': '/community/forum',
  'Experten-Blogs': '/community/blogs',
  'Fragen & Antworten': '/community/qa',
  'Ressourcen-Bibliothek': '/community/resources',

  // French
  'Forum de la Communauté': '/community/forum',
  "Blogs d'Experts": '/community/blogs',
  'Questions & Réponses': '/community/qa',
  'Événements & Meetups': '/community/events',
  'Bibliothèque de Ressources': '/community/resources',

  // Japanese
  'コミュニティフォーラム': '/community/forum',
  'エキスパートブログ': '/community/blogs',
  'Q&Aとフォーラム': '/community/qa',
  'イベント＆勉強会': '/community/events',
  '資料ライブラリ': '/community/resources',
};

const PARTNERS_LINKS: Record<string, string> = {
  // English
  'Find a Partner': '/partners/find',
  'Strategic Partners': '/partners/strategic',
  'Become a Partner': '/partners/become',
  'Certified Solutions Directory': '/partners/solutions',
  'Outsourcing Partners': '/partners/outsourcing',
  
  // Spanish
  'Buscar un Socio': '/partners/find',
  'Socios Estratégicos': '/partners/strategic',
  'Convertirse en Socio': '/partners/become',
  'Directorio de Soluciones Certificadas': '/partners/solutions',
  'Socios de Outsourcing': '/partners/outsourcing',
  
  // Chinese
  '寻找合作伙伴': '/partners/find',
  '战略合作伙伴': '/partners/strategic',
  '成为合作伙伴': '/partners/become',
  '认证解决方案目录': '/partners/solutions',
  '外包合作伙伴': '/partners/outsourcing',
  
  // German
  'Partner finden': '/partners/find',
  'Strategische Partner': '/partners/strategic',
  'Partner werden': '/partners/become',
  'Verzeichnis zertifizierter Lösungen': '/partners/solutions',
  'Outsourcing-Partner': '/partners/outsourcing',
  
  // French
  'Trouver un Partenaire': '/partners/find',
  'Partenaires Strategiques': '/partners/strategic',
  'Devenir Partenaire': '/partners/become',
  'Répertoire des Solutions Certifiées': '/partners/solutions',
  'Partenaires de Sous-traitance': '/partners/outsourcing',
  
  // Japanese
  'パートナーを探す': '/partners/find',
  '戦略的パートナー': '/partners/strategic',
  'パートナーになる': '/partners/become',
  '公式ソリューションカタログ': '/partners/solutions',
  'アウトソーシングパートナー': '/partners/outsourcing'
};

const SAP_CONSULTING_LINKS: Record<string, string> = {
  // English
  'S/4HANA Implementations': '/sap-consulting/s4hana',
  'Finance & Controlling (FICO)': '/sap-consulting/fico',
  'Sales & Logistics (SD · MM · WM)': '/sap-consulting/logistics',
  'Production & Planning (PP)': '/sap-consulting/production',
  'SuccessFactors (HR)': '/sap-consulting/successfactors',
  'ABAP & Fiori Custom Development': '/sap-consulting/abap-fiori',
  'SAP Integration & API Suite': '/sap-consulting/integration',
  'Ariba & Supply Chain Solutions': '/sap-consulting/ariba-supply-chain',

  // Spanish
  'Implementaciones S/4HANA': '/sap-consulting/s4hana',
  'Finanzas y Control de Gestión (FICO)': '/sap-consulting/fico',
  'Ventas y Logística (SD · MM · WM)': '/sap-consulting/logistics',
  'Planificación de la Producción (PP)': '/sap-consulting/production',
  'SuccessFactors (RRHH)': '/sap-consulting/successfactors',
  'Desarrollo Personalizado ABAP y Fiori': '/sap-consulting/abap-fiori',
  'Suite de Integración y API SAP': '/sap-consulting/integration',
  'Soluciones de Cadena de Suministro y Ariba': '/sap-consulting/ariba-supply-chain',

  // Chinese
  'S/4HANA 系统实施': '/sap-consulting/s4hana',
  '财务与成本管理 (FICO)': '/sap-consulting/fico',
  '销售与物流管理 (SD · MM · WM)': '/sap-consulting/logistics',
  '生产与计划管理 (PP)': '/sap-consulting/production',
  'SuccessFactors 人力资源系统': '/sap-consulting/successfactors',
  'ABAP 与 Fiori 定制化开发': '/sap-consulting/abap-fiori',
  'SAP 集成与 API 套件': '/sap-consulting/integration',
  'Ariba 采购与供应链解决方案': '/sap-consulting/ariba-supply-chain',

  // German
  'S/4HANA-Implementierungen': '/sap-consulting/s4hana',
  'Finanzen & Controlling (FICO)': '/sap-consulting/fico',
  'Vertrieb & Logistik (SD · MM · WM)': '/sap-consulting/logistics',
  'Produktion & Planung (PP)': '/sap-consulting/production',
  'ABAP & Fiori Eigenentwicklungen': '/sap-consulting/abap-fiori',
  'SAP-Integrations & API-Suite': '/sap-consulting/integration',
  'Ariba & Supply-Chain-Lösungen': '/sap-consulting/ariba-supply-chain',

  // French
  'Intégrations S/4HANA': '/sap-consulting/s4hana',
  'Finance & Contrôle de Gestion (FICO)': '/sap-consulting/fico',
  'Ventes & Logistique (SD · MM · WM)': '/sap-consulting/logistics',
  'Planification de la Production (PP)': '/sap-consulting/production',
  'SuccessFactors (RH)': '/sap-consulting/successfactors',
  'Développement ABAP & Fiori sur Mesure': '/sap-consulting/abap-fiori',
  "Suite d'Intégration & APIs SAP": '/sap-consulting/integration',
  'Solutions Ariba & Chaîne Logistique': '/sap-consulting/ariba-supply-chain',

  // Japanese
  'S/4HANA移行・新規導入': '/sap-consulting/s4hana',
  '財務会計・管理会計 (FICO)': '/sap-consulting/fico',
  '販売管理・在庫購買・倉庫管理 (SD · MM · WM)': '/sap-consulting/logistics',
  '生産管理 (PP)': '/sap-consulting/production',
  'SuccessFactors (人事)': '/sap-consulting/successfactors',
  'ABAP & Fiori カスタム開発': '/sap-consulting/abap-fiori',
  'SAP統合＆APIスイート': '/sap-consulting/integration',
  'Ariba & サプライチェーン解決策': '/sap-consulting/ariba-supply-chain'
};

const TRAININGS_LINKS: Record<string, string> = {
  // English (also covers Spanish & French Learning Hub)
  'Dstellar Learning Hub': '/trainings/hub',
  'Certified SAP Courses': '/trainings/courses',
  'Dstellar Certification Prep': '/trainings/prep',
  'Education Partner Program': '/trainings/program',
  'Free openDstellar Training': '/trainings/free',
  
  // Spanish
  'Cursos SAP Certificados': '/trainings/courses',
  'Preparación de Certificaciones Dstellar': '/trainings/prep',
  'Programa de Socios Educativos': '/trainings/program',
  'Formación Gratuita openDstellar': '/trainings/free',
  
  // Chinese
  'Dstellar 学习中心': '/trainings/hub',
  'SAP 官方认证课程': '/trainings/courses',
  'Dstellar 考试认证辅导': '/trainings/prep',
  '教育合作伙伴计划': '/trainings/program',
  '免费开放课程 openDstellar': '/trainings/free',
  
  // German
  'Dstellar Schulungszentrum': '/trainings/hub',
  'Zertifizierte SAP-Kurse': '/trainings/courses',
  'Dstellar Prüfungsvorbereitung': '/trainings/prep',
  'Bildungspartner-Programm': '/trainings/program',
  'Kostenloses openDstellar-Training': '/trainings/free',
  
  // French
  'Cours Certifiés SAP': '/trainings/courses',
  'Préparation aux Certifications Dstellar': '/trainings/prep',
  'Programme de Partenaires Éducatifs': '/trainings/program',
  'Formation Gratuite openDstellar': '/trainings/free',
  
  // Japanese
  'Dstellarラーニングハブ': '/trainings/hub',
  '公式SAP認定コース': '/trainings/courses',
  'Dstellar試験合格支援': '/trainings/prep',
  '教育機関パートナープログラム': '/trainings/program',
  '無料 openDstellarトレーニング': '/trainings/free'
};

const SERVICES_SUPPORT_LINKS: Record<string, string> = {
  // English
  'Artificial Intelligence & ML': '/services-support/ai-ml',
  'Cloud Migration & DevSecOps': '/services-support/cloud-devsecops',
  'Cybersecurity & Compliance': '/services-support/cybersecurity-compliance',
  'Digital Transformation': '/services-support/digital-transformation',
  'Technology Advisory Services': '/services-support/technology-advisory',
  'Premium Support & Managed AMS': '/services-support/premium-support-ams',
  'Dstellar Help Portal': '/services-support/help-portal',

  // Spanish
  'Inteligencia Artificial y ML': '/services-support/ai-ml',
  'Migración Cloud y DevSecOps': '/services-support/cloud-devsecops',
  'Ciberseguridad y Cumplimiento': '/services-support/cybersecurity-compliance',
  'Transformación Digital': '/services-support/digital-transformation',
  'Servicios de Asesoría Tecnológica': '/services-support/technology-advisory',
  'Soporte Premium y AMS Gestionado': '/services-support/premium-support-ams',
  'Portal de Ayuda Dstellar': '/services-support/help-portal',

  // Chinese
  '人工智能与机器学习': '/services-support/ai-ml',
  '云迁移与 DevSecOps': '/services-support/cloud-devsecops',
  '网络安全与合规审计': '/services-support/cybersecurity-compliance',
  '企业数字化转型': '/services-support/digital-transformation',
  'IT 战略咨询服务': '/services-support/technology-advisory',
  '尊享支持与托管运维 (AMS)': '/services-support/premium-support-ams',
  'Dstellar 帮助中心': '/services-support/help-portal',

  // German
  'Künstliche Intelligenz & ML': '/services-support/ai-ml',
  'Cloud-Migration & DevSecOps': '/services-support/cloud-devsecops',
  'Cybersicherheit & Compliance': '/services-support/cybersecurity-compliance',
  'Digitale Transformation': '/services-support/digital-transformation',
  'Technologie-Beratung': '/services-support/technology-advisory',
  'Premium-Support & Managed AMS': '/services-support/premium-support-ams',
  'Dstellar Hilfe-Portal': '/services-support/help-portal',

  // French
  'Intelligence Artificielle & ML': '/services-support/ai-ml',
  'Migration Cloud & DevSecOps': '/services-support/cloud-devsecops',
  'Cybersécurité & Conformité': '/services-support/cybersecurity-compliance',
  'Transformation Numérique': '/services-support/digital-transformation',
  'Services de Conseil Technologique': '/services-support/technology-advisory',
  'Support Premium & AMS Géré': '/services-support/premium-support-ams',
  'Portail d\'Aide Dstellar': '/services-support/help-portal',

  // Japanese
  '人工知能＆機械学習': '/services-support/ai-ml',
  'クラウド移行＆DevSecOps': '/services-support/cloud-devsecops',
  'サイバーセキュリティ＆コンプライアンス': '/services-support/cybersecurity-compliance',
  'デジタルトランスフォーメーション': '/services-support/digital-transformation',
  'テクノロジー・アドバイザリー': '/services-support/technology-advisory',
  'プレミアムサポート＆AMS': '/services-support/premium-support-ams',
  'Dstellarヘルプポータル': '/services-support/help-portal'
};

const PRODUCTS_LINKS: Record<string, string> = {
  // English
  'Custom Software Development': '/products/custom-software',
  'DSTELLAR ERP': '/products/erp',
  'DSTELLAR E-Commerce': '/products/ecommerce',
  'DSTELLAR Healthcare Suite': '/products/healthcare',
  'DSTELLAR Logistics & Warehouse': '/products/logistics-warehouse',
  'DSTELLAR Sales & Accounting': '/products/sales-accounting',
  'Business Intelligence & Analytics': '/products/bi-analytics',
  'Mobile & Web Applications': '/products/mobile-web-apps',

  // Spanish
  'Desarrollo de Software a Medida': '/products/custom-software',
  'ERP DSTELLAR': '/products/erp',
  'E-Commerce DSTELLAR': '/products/ecommerce',
  'Suite de Salud DSTELLAR': '/products/healthcare',
  'Logística y Almacenes DSTELLAR': '/products/logistics-warehouse',
  'Ventas y Contabilidad DSTELLAR': '/products/sales-accounting',
  'Inteligencia de Negocios y Analítica': '/products/bi-analytics',
  'Aplicaciones Móviles y Web': '/products/mobile-web-apps',

  // Chinese
  '定制软件开发': '/products/custom-software',
  'DSTELLAR ERP 系统': '/products/erp',
  'DSTELLAR 电子商务 system': '/products/ecommerce',
  'DSTELLAR 电子商务系统': '/products/ecommerce',
  'DSTELLAR 医疗健康套件': '/products/healthcare',
  'DSTELLAR 物流与仓储系统': '/products/logistics-warehouse',
  'DSTELLAR 销售与财务系统': '/products/sales-accounting',
  '商业智能与数据分析': '/products/bi-analytics',
  '移动与 Web 应用程序': '/products/mobile-web-apps',

  // German
  'Individuelle Softwareentwicklung': '/products/custom-software',
  'DSTELLAR Logistik & Lager': '/products/logistics-warehouse',
  'DSTELLAR Vertrieb & Buchhaltung': '/products/sales-accounting',
  'Business Intelligence & Analysen': '/products/bi-analytics',
  'Mobile & Web-Apps': '/products/mobile-web-apps',

  // French
  'Développement de Logiciels sur Mesure': '/products/custom-software',
  'Suite Santé DSTELLAR': '/products/healthcare',
  'Logistique & Entrepôt DSTELLAR': '/products/logistics-warehouse',
  'Ventes & Comptabilité DSTELLAR': '/products/sales-accounting',
  'Business Intelligence & Analytique': '/products/bi-analytics',
  'Applications Mobiles & Web': '/products/mobile-web-apps',

  // Japanese
  'カスタムソフトウェア開発': '/products/custom-software',
  'DSTELLAR Eコマース': '/products/ecommerce',
  'DSTELLAR ヘルスケアスイート': '/products/healthcare',
  'DSTELLAR 物流・倉庫': '/products/logistics-warehouse',
  'DSTELLAR 販売・会計': '/products/sales-accounting',
  'ビジネスインテリジェンス・分析': '/products/bi-analytics',
  'モバイル＆Webアプリ': '/products/mobile-web-apps'
};

const PROMO_LINKS: Record<string, string> = {
  // English
  'Partners': '/partners/become',
  'Careers': '/careers/job-search',
  'Community': '/community/forum',
  'Discover Dstellar': '/discover/who-we-are',
  'Industries': '/discover/who-we-are',
  'Products': '/discover/who-we-are',
  'SAP Consulting': '/discover/who-we-are',
  'Services & Support': '/discover/who-we-are',
  'Trainings': '/trainings/courses',

  // Spanish
  'Socios': '/partners/become',
  'Carreras': '/careers/job-search',
  'Comunidad': '/community/forum',
  'Descubrir Dstellar': '/discover/who-we-are',
  'Sectores': '/discover/who-we-are',
  'Productos': '/discover/who-we-are',
  'Consultoría SAP': '/discover/who-we-are',
  'Servicios y Soporte': '/discover/who-we-are',
  'Formaciones': '/trainings/courses',

  // Chinese
  '合作伙伴': '/partners/become',
  '加入我们': '/careers/job-search',
  '互动社区': '/community/forum',
  '发现 Dstellar': '/discover/who-we-are',
  '服务行业': '/discover/who-we-are',
  '产品中心': '/discover/who-we-are',
  'SAP 咨询服务': '/discover/who-we-are',
  '服务与支持': '/discover/who-we-are',
  '培训中心': '/trainings/courses',

  // German
  'Partner': '/partners/become',
  'Karriere': '/careers/job-search',
  'Dstellar entdecken': '/discover/who-we-are',
  'Branchen': '/discover/who-we-are',
  'Produkte': '/discover/who-we-are',
  'SAP-Beratung': '/discover/who-we-are',
  'Dienstleistungen & Support': '/discover/who-we-are',
  'Schulungen': '/trainings/courses',

  // French
  'Partenaires': '/partners/become',
  'Carrières': '/careers/job-search',
  'Communauté': '/community/forum',
  'Découvrir Dstellar': '/discover/who-we-are',
  'Produits': '/discover/who-we-are',
  'Conseil SAP': '/discover/who-we-are',
  'Formations': '/trainings/courses',

  // Japanese
  'パートナー': '/partners/become',
  '採用情報': '/careers/job-search',
  'コミュニティ': '/community/forum',
  'Dstellarを知る': '/discover/who-we-are',
  '提供中の業界': '/discover/who-we-are',
  'プロダクト': '/discover/who-we-are',
  'SAPコンサルティング': '/discover/who-we-are',
  'サービス＆サポート': '/discover/who-we-are',
  'トレーニング': '/trainings/courses'
};


export function TopBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [globalOpen, setGlobalOpen] = useState(false);
  const { language, setLanguage, t, tData } = useLanguage();

  const nav = tData<any[]>('nav');
  const promos = tData<any>('promos');

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Logo/>
        <nav className={`mainnav ${mobileMenuOpen ? 'open' : ''}`}>
          {nav.slice(0, 9).map((n) => {
            const promo = promos[n.label];
            const isGrid = n.children && n.children.length > 6;
            
            return (
              <div 
                key={n.label} 
                className={`nav-item ${activeMenu === n.label ? 'mobile-active' : ''}`}
                onClick={() => setActiveMenu(activeMenu === n.label ? null : n.label)}
              >
                {n.label}<span className="chev">⌄</span>
                {n.children && (
                  <div className="megamenu megamenu-wide" onClick={(e) => e.stopPropagation()}>
                    <div className="mega-split">
                      <div className={isGrid ? 'mega-links-grid' : 'mega-links'}>
                        {n.children.map((c: string) => {
                          const href = INDUSTRIES_LINKS[c] || PRODUCTS_LINKS[c] || SAP_CONSULTING_LINKS[c] || DISCOVER_LINKS[c] || CAREERS_LINKS[c] || COMMUNITY_LINKS[c] || PARTNERS_LINKS[c] || TRAININGS_LINKS[c] || SERVICES_SUPPORT_LINKS[c] || '#';
                          return <a key={c} href={href}>{c}</a>;
                        })}

                      </div>
                      {promo && (
                        <div className="mega-promo">
                          <h4>{promo.title}</h4>
                          <p>{promo.desc}</p>
                          <a href={PROMO_LINKS[n.label] || '#'} className="cta-btn ghost" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>
                            {promo.btn}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <div className="mobile-only-login">
            <div className="mobile-global-wrap">
              <button className="nav-global-btn" onClick={() => setGlobalOpen(!globalOpen)}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </button>
              {globalOpen && (
                <div className="mobile-global-list">
                  <div className="mobile-global-region-group">
                    <div className="mobile-global-region-header">{t('select_language') || 'Language'}</div>
                    <div className="mobile-lang-grid">
                      {[
                        { code: 'en', label: 'English' },
                        { code: 'es', label: 'Español' },
                        { code: 'zh', label: '中文' },
                        { code: 'de', label: 'Deutsch' },
                        { code: 'fr', label: 'Français' },
                        { code: 'ja', label: '日本語' }
                      ].map(l => (
                        <button 
                          key={l.code} 
                          className={`mobile-lang-btn-item ${language === l.code ? 'active' : ''}`}
                          onClick={() => setLanguage(l.code as any)}
                        >
                          {l.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  {REGIONS.map(r => (
                    <div key={r.region} className="mobile-global-region-group">
                      <div className="mobile-global-region-header">{r.region}</div>
                      {r.countries.map(c => (
                        <button 
                          key={c.name} 
                          className="mobile-global-item"
                          onClick={() => {
                            const target = COUNTRY_LANGS[c.name];
                            if (target) setLanguage(target);
                          }}
                        >
                          <span className={`fi fi-${c.code} global-flag`}></span> {c.name}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button className="cta-btn accent">{t('login')}</button>
          </div>
        </nav>
        <div className="topbar-actions">
          <div className="global-dropdown-wrap" onMouseEnter={() => setGlobalOpen(true)} onMouseLeave={() => setGlobalOpen(false)}>
            <button className="nav-global-btn" aria-label={t('select_region')}><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></button>
            {globalOpen && (
              <div className="global-dropdown">
                <div className="global-lang-selector-section">
                  <div className="global-lang-header">{t('select_language') || 'Language'}</div>
                  <div className="global-lang-grid">
                    {[
                      { code: 'en', label: 'English' },
                      { code: 'es', label: 'Español' },
                      { code: 'zh', label: '中文' },
                      { code: 'de', label: 'Deutsch' },
                      { code: 'fr', label: 'Français' },
                      { code: 'ja', label: '日本語' }
                    ].map(l => (
                      <button 
                        key={l.code} 
                        className={`global-lang-btn-item ${language === l.code ? 'active' : ''}`}
                        onClick={() => setLanguage(l.code as any)}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="global-divider" />
                <div className="global-regions-grid">
                  {REGIONS.map(r => (
                    <div key={r.region} className="global-region-col">
                      <div className="global-region-name">{r.region}</div>
                      <div className="global-country-list">
                        {r.countries.map(c => (
                          <button 
                            key={c.name} 
                            className="global-country-btn"
                            onClick={() => {
                              const target = COUNTRY_LANGS[c.name];
                              if (target) setLanguage(target);
                            }}
                          >
                            <span className={`fi fi-${c.code} global-flag`}></span> {c.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <button className="cta-btn topbar-cta">{t('login')}</button>
        </div>
        <button className="mobile-menu-btn" aria-label="Toggle Menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
}
