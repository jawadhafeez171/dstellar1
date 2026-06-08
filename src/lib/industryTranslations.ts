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
        { title: 'Public Procurement & Tendering', desc: 'Automate vendor bidding pipelines, manage contract lifecycles, and assist enterprise partners in bidding and strategizing for public tenders.', icon: 'document' }
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
    },
    'media-entertainment': {
      slug: 'media-entertainment',
      badge: 'Media & Entertainment',
      title: 'Media & Content Monetization',
      subtitle: 'Digital rights management, real-time royalties processing, and omnichannel content monetization.',
      overview: 'Dstellar transforms media and entertainment organizations by optimizing digital asset value chains, streamlining complex licensing royalties, and running subscription billing models at scale using SAP Billing and Revenue Innovation Management (BRIM).',
      gradientClass: 'linear-gradient(135deg, #180828 0%, #ec4899 45%, #e11d48 100%)',
      themeColor: '#ec4899',
      stats: [
        { value: '35%', label: 'Royalty Processing Speedup' },
        { value: '25M+', label: 'Daily Content Subscribers' },
        { value: '$2B+', label: 'Royalties Distributed Annually' }
      ],
      solutions: [
        { title: 'Rights & Royalty Audits', desc: 'Automate tracking of IP licensing agreements, royalty payouts, and auditing inside SAP BRIM.', icon: 'film' },
        { title: 'Subscription Invoicing', desc: 'Process billing logic for millions of dynamic digital content subscribers with high concurrency.', icon: 'music' },
        { title: 'Content Distribution Data', desc: 'Synchronize global streaming telemetry with finance ledgers for real-time profitability analytics.', icon: 'play' }
      ],
      playbook: {
        tag: 'Case Study',
        title: 'Modernizing Streaming Royalties',
        desc: 'How Dstellar built a high-speed billing pipeline processing 10 million streaming events daily and integrated it with SAP General Ledger.',
        metrics: '100% royalty payment accuracy achieved.'
      },
      inquiryTitle: 'Contact Our Media Specialists',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Tell us about your project...',
      submitBtn: 'Send Inquiry',
      successMsg: 'Thank you! Our media team will contact you shortly.'
    },
    'telecommunications': {
      slug: 'telecommunications',
      badge: 'Telecommunications',
      title: 'Telecommunications OSS/BSS Orchestration',
      subtitle: 'Dynamic subscriber billing, network infrastructure management, and telecom telemetry analytics.',
      overview: 'Dstellar integrates core network activities with enterprise ERP platforms, allowing telecommunication operators to manage high-volume billing streams, optimize cell tower maintenance cycles, and predict subscriber churn in real-time.',
      gradientClass: 'linear-gradient(135deg, #091e3a 0%, #06b6d4 45%, #3b82f6 100%)',
      themeColor: '#06b6d4',
      stats: [
        { value: '99.999%', label: 'Core Billing System Uptime' },
        { value: '50M+', label: 'Active Subscribers Managed' },
        { value: '15%', label: 'Reduction in Network Opex' }
      ],
      solutions: [
        { title: 'High-Volume Billing', desc: 'Ingest billing telemetry for voice, data, and value-added services directly into SAP BRIM.', icon: 'phone' },
        { title: 'Network Asset Management', desc: 'Coordinate cell tower, fiber optic line, and hardware maintenance with SAP Plant Maintenance.', icon: 'wifi' },
        { title: 'Churn Analytics Engine', desc: 'Apply ML modeling to subscriber traffic patterns and billing history to forecast customer retention.', icon: 'activity' }
      ],
      playbook: {
        tag: 'Network Scale',
        title: '5G Network Rollout Integration',
        desc: 'How Dstellar helped a national telecom operator integrate capital expenditure tracking with cell tower provisioning workflows.',
        metrics: 'Time-to-market for new towers cut from 6 months to 6 weeks.'
      },
      inquiryTitle: 'Contact Our Telecom Specialists',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Tell us about your project...',
      submitBtn: 'Send Inquiry',
      successMsg: 'Thank you! Our telecom team will contact you shortly.'
    },
    'distribution-wholesale': {
      slug: 'distribution-wholesale',
      badge: 'Distribution & Wholesale',
      title: 'High-Velocity Wholesale Distribution',
      subtitle: 'Order-to-cash acceleration, smart warehouse logistics, and global supplier coordination.',
      overview: 'Dstellar optimizes supply chain logistics and warehouse velocities for large-scale distributors. We integrate SAP Extended Warehouse Management (EWM) with real-time transportation networks to eliminate order-fulfillment bottlenecks.',
      gradientClass: 'linear-gradient(135deg, #1c1917 0%, #f59e0b 45%, #ea580c 100%)',
      themeColor: '#f59e0b',
      stats: [
        { value: '45%', label: 'Faster Order Fulfillment' },
        { value: '100k+', label: 'SKUs Optimized Daily' },
        { value: '22%', label: 'Reduction in Carrying Costs' }
      ],
      solutions: [
        { title: 'Extended Warehouse Velocity', desc: 'Optimize pick-pack-ship sequences using automated routing and spatial mapping in SAP EWM.', icon: 'box' },
        { title: 'Omnichannel Order Pipelines', desc: 'Consolidate orders from regional partners, distributors, and online channels into a single ledger.', icon: 'truck' },
        { title: 'Supplier Collaboration Portal', desc: 'Automate purchase orders and delivery acknowledgments with wholesale vendor networks.', icon: 'archive' }
      ],
      playbook: {
        tag: 'Case Study',
        title: 'Automating Global Supply Chains',
        desc: 'Dstellar built a central replenishment planner that automatically triggers vendor purchase orders when inventory levels drop below dynamic thresholds.',
        metrics: 'Out-of-stock occurrences reduced by 98%.'
      },
      inquiryTitle: 'Contact Our Distribution Specialists',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Tell us about your project...',
      submitBtn: 'Send Inquiry',
      successMsg: 'Thank you! Our distribution team will contact you shortly.'
    },
    'retail': {
      slug: 'retail',
      badge: 'Retail',
      title: 'Unified Retail & Commerce Integration',
      subtitle: 'Omnichannel retail inventory, checkout POS integration, and customer loyalty tracking.',
      overview: 'Dstellar bridges the gap between digital e-commerce channels and physical retail storefronts. We implement unified SAP Retail platforms that provide real-time inventory visibility and customer loyalty records across all touchpoints.',
      gradientClass: 'linear-gradient(135deg, #022c22 0%, #10b981 45%, #84cc16 100%)',
      themeColor: '#10b981',
      stats: [
        { value: '99.8%', label: 'Inventory Stock Accuracy' },
        { value: '12M+', label: 'Loyalty Profiles Synced' },
        { value: '30%', label: 'Increase in Customer Retention' }
      ],
      solutions: [
        { title: 'Unified Commerce Stock', desc: 'Track shelf stock, store storage, and web order reserves instantly in a central ledger.', icon: 'shopping-bag' },
        { title: 'Dynamic Price Engine', desc: 'Synchronize retail pricing, coupon rules, and promotion campaigns across all stores.', icon: 'tag' },
        { title: 'Omnichannel Checkout POS', desc: 'Integrate front-of-house point-of-sale systems with SAP financials for real-time sales reporting.', icon: 'credit-card' }
      ],
      playbook: {
        tag: 'Retail Growth',
        title: 'Real-Time Stock Sync',
        desc: 'How Dstellar helped a multi-national retail chain synchronize e-commerce storefronts with physical shop-floor inventory records.',
        metrics: 'Fulfillment errors decreased by 85%.'
      },
      inquiryTitle: 'Contact Our Retail Specialists',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Tell us about your project...',
      submitBtn: 'Send Inquiry',
      successMsg: 'Thank you! Our retail team will contact you shortly.'
    },
    'hotel-management': {
      slug: 'hotel-management',
      badge: 'Hotel Management',
      title: 'Hotel Management & Guest Operations',
      subtitle: 'Real-time booking engines, property management systems, and revenue yield optimization.',
      overview: 'Dstellar builds integrated hospitality solutions that link guest-facing property management interfaces with core financial ledgers. We optimize booking allocations, automate procurement, and streamline billing for global hotel operators.',
      gradientClass: 'linear-gradient(135deg, #1e1b4b 0%, #8b5cf6 45%, #d946ef 100%)',
      themeColor: '#8b5cf6',
      stats: [
        { value: '98%', label: 'Guest Satisfaction Index' },
        { value: '15M+', label: 'Bookings Managed Annually' },
        { value: '18%', label: 'Increase in Revenue per Room' }
      ],
      solutions: [
        { title: 'Property Management ERP', desc: 'Connect room cleaning status, check-ins, and guest charges directly to SAP billing.', icon: 'key' },
        { title: 'Yield & Pricing Engine', desc: 'Deploy automated pricing algorithms linked to occupancy trends and seasonal event calendars.', icon: 'coffee' },
        { title: 'Integrated Hotel Operations', desc: 'Streamline frontdesk workflows, restaurant billing, and spa booking under a single customer record.', icon: 'bed' }
      ],
      playbook: {
        tag: 'Hospitality Upgrade',
        title: 'Unified Resort Operations',
        desc: 'How Dstellar designed a single customer identifier system that tracks room charges, restaurant orders, and activity bookings across 50 resorts.',
        metrics: 'Billing errors cut down to under 0.1%.'
      },
      inquiryTitle: 'Contact Our Hospitality Specialists',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Tell us about your project...',
      submitBtn: 'Send Inquiry',
      successMsg: 'Thank you! Our hotel management team will contact you shortly.'
    },
    'information-services': {
      slug: 'information-services',
      badge: 'Information Services',
      title: 'Information & Data Services',
      subtitle: 'Monetizing data assets, high-performance API portals, and subscription billing systems.',
      overview: 'Dstellar helps data brokers, credit bureaus, and information providers package and monetize their digital assets. We design high-speed API delivery layers and automate recurring subscription accounting in SAP.',
      gradientClass: 'linear-gradient(135deg, #0f172a 0%, #3b82f6 45%, #00d4c8 100%)',
      themeColor: '#3b82f6',
      stats: [
        { value: '10B+', label: 'API Requests Processed Daily' },
        { value: '99.999%', label: 'Query Delivery Reliability' },
        { value: '40%', label: 'Reduction in Subscription Churn' }
      ],
      solutions: [
        { title: 'Dynamic API Monetization', desc: 'Track developer API usage and meter billings in real-time inside SAP Billing (BRIM).', icon: 'database' },
        { title: 'High-Performance Architecture', desc: 'Scale content caches and search index arrays to handle millions of queries per second.', icon: 'server' },
        { title: 'Structured Metadata Hub', desc: 'Organize raw dataset records, client permissions, and access logs securely in SAP HANA.', icon: 'info' }
      ],
      playbook: {
        tag: 'Data Scale',
        title: 'Monetizing Global Credit Data',
        desc: 'How Dstellar integrated a credit scoring platform API with SAP BRIM, automating billing cycles for 5,000 corporate clients.',
        metrics: 'Invoice generation window cut from 5 days to 2 minutes.'
      },
      inquiryTitle: 'Contact Our Data Specialists',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Tell us about your project...',
      submitBtn: 'Send Inquiry',
      successMsg: 'Thank you! Our data team will contact you shortly.'
    },
    'public-services': {
      slug: 'public-services',
      badge: 'Public Services',
      title: 'Public Services & Civic Infrastructure',
      subtitle: 'Community support, case management, and civic program administration.',
      overview: 'Dstellar empowers local government agencies and non-profit organizations to run efficient civic services. We automate case tracking, manage social program budgets, and ensure audit compliance in municipal projects.',
      gradientClass: 'linear-gradient(135deg, #030712 0%, #6366f1 45%, #4338ca 100%)',
      themeColor: '#6366f1',
      stats: [
        { value: '10M+', label: 'Citizens Supported' },
        { value: '100%', label: 'Program Audit Compliance' },
        { value: '50%', label: 'Reduction in Case Intake Latency' }
      ],
      solutions: [
        { title: 'Citizen Service Portals', desc: 'Fiori portals enabling citizens to apply for support and track case status securely online.', icon: 'users' },
        { title: 'Civic Program Budgets', desc: 'Track government grant allocations and program expenses in SAP Funds Management.', icon: 'shield' },
        { title: 'Social Case Management', desc: 'Coordinate multi-agency case workflows, client milestones, and services delivery databases.', icon: 'briefcase' }
      ],
      playbook: {
        tag: 'Civic Impact',
        title: 'Automating Welfare Delivery',
        desc: 'How Dstellar helped a municipal government automate welfare intake processing, verifying applicant criteria and distributing grants.',
        metrics: 'Application processing backlog reduced by 90%.'
      },
      inquiryTitle: 'Contact Our Civic Specialists',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Tell us about your project...',
      submitBtn: 'Send Inquiry',
      successMsg: 'Thank you! Our public services team will contact you shortly.'
    },
    'education': {
      slug: 'education',
      badge: 'Education',
      title: 'Education & Campus Management',
      subtitle: 'Student lifecycle tracking, digital admissions, and learning management integrations.',
      overview: 'Dstellar designs scalable education systems for universities and school networks. We implement student information systems, automate registrar workflows, and integrate learning management software with core financials.',
      gradientClass: 'linear-gradient(135deg, #2a0800 0%, #ea580c 45%, #eab308 100%)',
      themeColor: '#ea580c',
      stats: [
        { value: '250k+', label: 'Active Students Managed' },
        { value: '95%', label: 'Admissions Processing Speed' },
        { value: '100%', label: 'LMS Data Synchronization' }
      ],
      solutions: [
        { title: 'Student Lifecycle ERP', desc: 'Manage courses catalog, enrollment, grading, and registrar logs in SAP Student Lifecycle.', icon: 'book' },
        { title: 'Registrar Automation', desc: 'Automate tuition invoice generation, scholarship applications, and student accounts.', icon: 'award' },
        { title: 'Unified Learning Hub', desc: 'Integrate external LMS like Canvas and Moodle with backend academic and finance databases.', icon: 'compass' }
      ],
      playbook: {
        tag: 'Campus Upgrade',
        title: 'Unified Campus Cloud',
        desc: 'How Dstellar migrated a multi-campus university state system from legacy student databases into a unified SAP Cloud environment.',
        metrics: 'Student enrollment wait times dropped by 70%.'
      },
      inquiryTitle: 'Contact Our Education Specialists',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      msgPlaceholder: 'Tell us about your project...',
      submitBtn: 'Send Inquiry',
      successMsg: 'Thank you! Our education team will contact you shortly.'
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
        { title: 'Contratación Pública y Licitaciones', desc: 'Automatice los procesos de licitación, gestione contratos y asesore a empresas asociadas en su estrategia de preparación para licitaciones públicas.', icon: 'document' }
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
    },
    'media-entertainment': {
      slug: 'media-entertainment',
      badge: 'Medios y Entretenimiento',
      title: 'Monetización de Contenidos y Medios',
      subtitle: 'Gestión de derechos digitales, procesamiento de regalías en tiempo real y monetización de contenidos omnicanal.',
      overview: 'Dstellar transforma las organizaciones de medios y entretenimiento mediante la optimización de las cadenas de valor de activos digitales, la simplificación de las complejas regalías de licencias y la ejecución de modelos de facturación por suscripción a escala con SAP BRIM.',
      gradientClass: 'linear-gradient(135deg, #180828 0%, #ec4899 45%, #e11d48 100%)',
      themeColor: '#ec4899',
      stats: [
        { value: '35%', label: 'Aceleración de Regalías' },
        { value: '25M+', label: 'Suscriptores Diarios' },
        { value: '$2B+', label: 'Regalías Distribuidas Anualmente' }
      ],
      solutions: [
        { title: 'Auditoría de Derechos y Regalías', desc: 'Automatice el seguimiento de acuerdos de licencias de propiedad intelectual y pagos de regalías dentro de SAP BRIM.', icon: 'film' },
        { title: 'Facturación de Suscripciones', desc: 'Procese la lógica de facturación para millones de suscriptores de contenido digital dinámico con alta concurrencia.', icon: 'music' },
        { title: 'Datos de Distribución de Contenido', desc: 'Sincronice la telemetría de transmisión global con los libros financieros para obtener análisis de rentabilidad en tiempo real.', icon: 'play' }
      ],
      playbook: {
        tag: 'Caso de Éxito',
        title: 'Modernización de Regalías de Transmisión',
        desc: 'Cómo Dstellar construyó un flujo de facturación de alta velocidad que procesa 10 millones de eventos de transmisión diarios y lo integró con SAP General Ledger.',
        metrics: '100% de precisión en el pago de regalías lograda.'
      },
      inquiryTitle: 'Contacte a Nuestros Especialistas en Medios',
      namePlaceholder: 'Su Nombre',
      emailPlaceholder: 'Dirección de Correo',
      msgPlaceholder: 'Cuéntenos sobre su proyecto de derechos digitales o facturación...',
      submitBtn: 'Enviar Consulta',
      successMsg: '¡Gracias! Nuestro equipo de medios se pondrá en contacto con usted en breve.'
    },
    'telecommunications': {
      slug: 'telecommunications',
      badge: 'Telecomunicaciones',
      title: 'Orquestación de OSS/BSS de Telecomunicaciones',
      subtitle: 'Facturación dinámica de suscriptores, gestión de infraestructura de red y analítica de telemetría de telecomunicaciones.',
      overview: 'Dstellar integra actividades de red central con ERP empresariales, permitiendo a los operadores de telecomunicaciones gestionar flujos de facturación de gran volumen, optimizar los ciclos de mantenimiento de torres y predecir la pérdida de suscriptores en tiempo real.',
      gradientClass: 'linear-gradient(135deg, #091e3a 0%, #06b6d4 45%, #3b82f6 100%)',
      themeColor: '#06b6d4',
      stats: [
        { value: '99.999%', label: 'Disponibilidad del Sistema' },
        { value: '50M+', label: 'Suscriptores Activos' },
        { value: '15%', label: 'Reducción de Gastos de Red' }
      ],
      solutions: [
        { title: 'Facturación a Gran Escala', desc: 'Realice la ingesta de telemetría de facturación para voz, datos y servicios de valor añadido directamente en SAP BRIM.', icon: 'phone' },
        { title: 'Gestión de Activos de Red', desc: 'Coordine el mantenimiento de antenas, líneas de fibra óptica y hardware con SAP Plant Maintenance.', icon: 'wifi' },
        { title: 'Motor de Análisis de Deserción', desc: 'Aplique modelos de aprendizaje automático (ML) a los patrones de tráfico para pronosticar la retención de clientes.', icon: 'activity' }
      ],
      playbook: {
        tag: 'Escala de Red',
        title: 'Integración de Despliegue de Red 5G',
        desc: 'Cómo Dstellar ayudó a un operador nacional de telecomunicaciones a integrar el seguimiento de CAPEX con los flujos de aprovisionamiento de antenas.',
        metrics: 'Tiempo de comercialización de nuevas antenas reducido de 6 meses a 6 semanas.'
      },
      inquiryTitle: 'Contacte a Nuestros Especialistas en Telecomunicaciones',
      namePlaceholder: 'Su Nombre',
      emailPlaceholder: 'Dirección de Correo',
      msgPlaceholder: 'Describa sus desafíos de red o facturación...',
      submitBtn: 'Enviar Consulta',
      successMsg: '¡Gracias! Nuestro equipo de telecomunicaciones se pondrá en contacto con usted en breve.'
    },
    'distribution-wholesale': {
      slug: 'distribution-wholesale',
      badge: 'Distribución y Mayorista',
      title: 'Distribución Mayorista de Alta Velocidad',
      subtitle: 'Aceleración de ciclo order-to-cash, logística inteligente de almacén y coordinación global de proveedores.',
      overview: 'Dstellar optimiza la logística de la cadena de suministro y la velocidad de almacenamiento para distribuidores a gran escala. Integramos SAP Extended Warehouse Management (EWM) con redes de transporte en tiempo real para eliminar cuellos de botella.',
      gradientClass: 'linear-gradient(135deg, #1c1917 0%, #f59e0b 45%, #ea580c 100%)',
      themeColor: '#f59e0b',
      stats: [
        { value: '45%', label: 'Fulfillment de Pedidos Más Rápido' },
        { value: '100k+', label: 'SKUs Optimizados Al Día' },
        { value: '22%', label: 'Reducción en Costo de Almacenamiento' }
      ],
      solutions: [
        { title: 'Velocidad de Almacén Extendida', desc: 'Optimice las secuencias de preparación y envío mediante enrutamiento automático y mapas en SAP EWM.', icon: 'box' },
        { title: 'Canal de Pedidos Omnicanal', desc: 'Consolide pedidos de socios regionales, distribuidores y canales en línea en un solo libro mayor.', icon: 'truck' },
        { title: 'Portal de Colaboración de Proveedores', desc: 'Automatice las órdenes de compra y los acuses de recibo de entrega con las redes de proveedores.', icon: 'archive' }
      ],
      playbook: {
        tag: 'Estudio de Caso',
        title: 'Automatización de Cadenas de Suministro',
        desc: 'Dstellar construyó un planificador de reabastecimiento central que activa órdenes de compra automáticas de proveedores cuando los niveles caen por debajo de umbrales dinámicos.',
        metrics: 'Incidencias de falta de stock reducidas en un 98%.'
      },
      inquiryTitle: 'Contacte a Nuestros Especialistas en Distribución',
      namePlaceholder: 'Su Nombre',
      emailPlaceholder: 'Dirección de Correo',
      msgPlaceholder: 'Describa sus necesidades logísticas o de distribución...',
      submitBtn: 'Enviar Consulta',
      successMsg: '¡Gracias! Nuestro equipo de distribución se pondrá en contacto con usted en breve.'
    },
    'retail': {
      slug: 'retail',
      badge: 'Comercio Minorista (Retail)',
      title: 'Integración Unificada de Retail y Comercio',
      subtitle: 'Inventario omnicanal de retail, integración de sistemas POS de caja e historial de fidelización de clientes.',
      overview: 'Dstellar cierra la brecha entre los canales de comercio electrónico digital y las tiendas minoristas físicas. Implementamos plataformas unificadas SAP Retail que brindan visibilidad del inventario en tiempo real y perfiles de clientes en todos los puntos de contacto.',
      gradientClass: 'linear-gradient(135deg, #022c22 0%, #10b981 45%, #84cc16 100%)',
      themeColor: '#10b981',
      stats: [
        { value: '99.8%', label: 'Precisión del Inventario' },
        { value: '12M+', label: 'Perfiles de Fidelización Sincronizados' },
        { value: '30%', label: 'Aumento de Retención' }
      ],
      solutions: [
        { title: 'Inventario Unificado', desc: 'Realice el seguimiento de existencias en tienda, almacén y reservas web al instante en un libro centralizado.', icon: 'shopping-bag' },
        { title: 'Motor de Precios Dinámico', desc: 'Sincronice precios, reglas de cupones y campañas promocionales en todas las tiendas físicas y virtuales.', icon: 'tag' },
        { title: 'Integración POS de Caja', desc: 'Integre los sistemas de punto de venta front-of-house con SAP Finance para obtener reportes de ventas diarios.', icon: 'credit-card' }
      ],
      playbook: {
        tag: 'Crecimiento de Retail',
        title: 'Sincronización de Stock en Tiempo Real',
        desc: 'Cómo Dstellar ayudó a una cadena minorista multinacional a sincronizar el portal de comercio electrónico con los inventarios de las tiendas físicas.',
        metrics: 'Los errores de entrega y stock bajaron en un 85%.'
      },
      inquiryTitle: 'Contacte a Nuestros Especialistas en Retail',
      namePlaceholder: 'Su Nombre',
      emailPlaceholder: 'Dirección de Correo',
      msgPlaceholder: 'Cuéntenos sobre sus desafíos en tiendas o e-commerce...',
      submitBtn: 'Enviar Consulta',
      successMsg: '¡Gracias! Nuestro equipo de comercio minorista se pondrá en contacto con usted en breve.'
    },
    'hotel-management': {
      slug: 'hotel-management',
      badge: 'Gestión Hotelera',
      title: 'Gestión Hotelera y Operaciones de Huéspedes',
      subtitle: 'Motores de reserva en tiempo real, sistemas de gestión de propiedades y rendimiento de ingresos.',
      overview: 'Dstellar construye soluciones integradas que vinculan las interfaces de gestión de propiedades con los libros financieros centrales. Optimizamos la asignación de reservas, automatizamos las compras y agilizamos la facturación para operadores globales.',
      gradientClass: 'linear-gradient(135deg, #1e1b4b 0%, #8b5cf6 45%, #d946ef 100%)',
      themeColor: '#8b5cf6',
      stats: [
        { value: '98%', label: 'Índice de Satisfacción del Huésped' },
        { value: '15M+', label: 'Reservas Gestionadas' },
        { value: '18%', label: 'Aumento en Ingreso por Habitación' }
      ],
      solutions: [
        { title: 'ERP de Gestión de Propiedades', desc: 'Conecte el estado de limpieza de habitaciones, check-ins y cargos directamente a la facturación de SAP.', icon: 'key' },
        { title: 'Motor de Precios Dinámico', desc: 'Implemente algoritmos de tarifas vinculados a tendencias de ocupación y calendarios de eventos.', icon: 'coffee' },
        { title: 'Operaciones Integradas', desc: 'Agilice los flujos de recepción, la facturación de restaurantes y las reservas de spa bajo un único perfil de cliente.', icon: 'bed' }
      ],
      playbook: {
        tag: 'Modernización',
        title: 'Operaciones de Resorts Unificadas',
        desc: 'Cómo Dstellar diseñó un identificador de cliente único que rastrea consumos de habitación, pedidos de restaurantes y actividades en 50 centros vacacionales.',
        metrics: 'Errores de facturación reducidos a menos de 0.1%.'
      },
      inquiryTitle: 'Contacte a Nuestros Especialistas en Hotelería',
      namePlaceholder: 'Su Nombre',
      emailPlaceholder: 'Dirección de Correo',
      msgPlaceholder: 'Describa sus desafíos de administración o facturación...',
      submitBtn: 'Enviar Consulta',
      successMsg: '¡Gracias! Nuestro equipo de hotelería se pondrá en contacto con usted en breve.'
    },
    'information-services': {
      slug: 'information-services',
      badge: 'Servicios de Información',
      title: 'Servicios de Datos e Información',
      subtitle: 'Monetización de activos de datos, portales API de alto rendimiento y facturación por suscripción.',
      overview: 'Dstellar ayuda a los proveedores de información y burós de crédito a empaquetar y monetizar sus activos de datos. Diseñamos capas de entrega de API de alta velocidad y automatizamos la contabilidad de suscripción en SAP.',
      gradientClass: 'linear-gradient(135deg, #0f172a 0%, #3b82f6 45%, #00d4c8 100%)',
      themeColor: '#3b82f6',
      stats: [
        { value: '10B+', label: 'Consultas API Diarias' },
        { value: '99.999%', label: 'Confiabilidad de Entrega' },
        { value: '40%', label: 'Reducción de Pérdida de Clientes' }
      ],
      solutions: [
        { title: 'Monetización de APIs', desc: 'Realice el seguimiento de consumo de APIs de desarrolladores y facture consumos dinámicos en SAP BRIM.', icon: 'database' },
        { title: 'Arquitectura de Alta Capacidad', desc: 'Escale caches de contenido y arreglos de índices para manejar millones de solicitudes por segundo.', icon: 'server' },
        { title: 'Centro de Datos Estructurado', desc: 'Organice registros de datos sin procesar, accesos de clientes e historial de consultas de forma segura en SAP HANA.', icon: 'info' }
      ],
      playbook: {
        tag: 'Escala de Datos',
        title: 'Monetización de Datos de Crédito',
        desc: 'Cómo Dstellar integró la API de una plataforma de calificación crediticia con SAP BRIM, automatizando la facturación para 5,000 clientes corporativos.',
        metrics: 'Ventana de facturación reducida de 5 días a solo 2 minutos.'
      },
      inquiryTitle: 'Contacte a Nuestros Especialistas en Datos',
      namePlaceholder: 'Su Nombre',
      emailPlaceholder: 'Dirección de Correo',
      msgPlaceholder: 'Describa sus necesidades de API o estructuración de datos...',
      submitBtn: 'Enviar Consulta',
      successMsg: '¡Gracias! Nuestro equipo de servicios de información se comunicará con usted.'
    },
    'public-services': {
      slug: 'public-services',
      badge: 'Servicios Públicos',
      title: 'Servicios Públicos e Infraestructura Cívica',
      subtitle: 'Soporte comunitario, gestión de casos y administración de programas cívicos municipales.',
      overview: 'Dstellar capacita a agencias gubernamentales locales y ONGs para ejecutar servicios públicos eficientes. Automatizamos el seguimiento de casos sociales, gestionamos presupuestos de programas y garantizamos el cumplimiento de auditorías.',
      gradientClass: 'linear-gradient(135deg, #030712 0%, #6366f1 45%, #4338ca 100%)',
      themeColor: '#6366f1',
      stats: [
        { value: '10M+', label: 'Ciudadanos Apoyados' },
        { value: '100%', label: 'Cumplimiento de Auditorías' },
        { value: '50%', label: 'Aceleración de Procesamiento de Casos' }
      ],
      solutions: [
        { title: 'Portales de Servicio al Ciudadano', desc: 'Portales Fiori que permiten a los ciudadanos solicitar apoyo y consultar el estado de sus trámites en línea.', icon: 'users' },
        { title: 'Presupuestos de Programas', desc: 'Realice el seguimiento de subvenciones del gobierno y gastos de ayuda en SAP Funds Management.', icon: 'shield' },
        { title: 'Gestión de Casos Sociales', desc: 'Coordine flujos de casos multiagencia, hitos de solicitantes y entrega de servicios.', icon: 'briefcase' }
      ],
      playbook: {
        tag: 'Impacto Cívico',
        title: 'Automatización de Ayudas Sociales',
        desc: 'Cómo Dstellar ayudó a un ayuntamiento municipal a automatizar el ingreso de solicitudes de bienestar, validando criterios y entregando fondos.',
        metrics: 'Atrasos en el procesamiento reducidos en un 90%.'
      },
      inquiryTitle: 'Contacte a Nuestros Especialistas en Servicios Públicos',
      namePlaceholder: 'Su Nombre',
      emailPlaceholder: 'Dirección de Correo',
      msgPlaceholder: 'Describa los programas de su institución o agencia cívica...',
      submitBtn: 'Enviar Consulta',
      successMsg: '¡Gracias! Nuestro equipo de servicios públicos se pondrá en contacto con usted en breve.'
    },
    'education': {
      slug: 'education',
      badge: 'Educación',
      title: 'Educación y Gestión de Campus',
      subtitle: 'Seguimiento del ciclo de vida del estudiante, admisiones digitales e integración de LMS.',
      overview: 'Dstellar diseña sistemas educativos escalables para universidades y redes escolares. Implementamos sistemas de información de estudiantes, automatizamos el trabajo de registro y coordinamos el LMS con finanzas.',
      gradientClass: 'linear-gradient(135deg, #2a0800 0%, #ea580c 45%, #eab308 100%)',
      themeColor: '#ea580c',
      stats: [
        { value: '250k+', label: 'Estudiantes Activos' },
        { value: '95%', label: 'Velocidad de Admisiones' },
        { value: '100%', label: 'Sincronización LMS' }
      ],
      solutions: [
        { title: 'ERP de Ciclo de Vida Estudiantil', desc: 'Gestione el catálogo de asignaturas, matrículas, notas y registros de secretaría en SAP Student Lifecycle.', icon: 'book' },
        { title: 'Automatización de Registro', desc: 'Automatice la facturación de matrículas y pensiones, solicitudes de becas y cuentas de estudiantes.', icon: 'award' },
        { title: 'Centro de Aprendizaje Integrado', desc: 'Integre LMS externos como Canvas o Moodle con las bases de datos académicas y de finanzas.', icon: 'compass' }
      ],
      playbook: {
        tag: 'Modernización',
        title: 'Campus en la Nube Unificado',
        desc: 'Cómo Dstellar migró el sistema estatal de una universidad de múltiples campus desde bases de datos heredadas a la nube unificada de SAP.',
        metrics: 'Tiempos de espera de matriculación reducidos en un 70%.'
      },
      inquiryTitle: 'Contacte a Nuestros Especialistas en Educación',
      namePlaceholder: 'Su Nombre',
      emailPlaceholder: 'Dirección de Correo',
      msgPlaceholder: 'Describa los requisitos de su institución o universidad...',
      submitBtn: 'Enviar Consulta',
      successMsg: '¡Gracias! Nuestro equipo de educación se pondrá en contacto con usted en breve.'
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
        { title: '招投标公共采购与投标战略', desc: '自动协调供货商资格审查及比价合同管理，并帮助企业合作伙伴制定政府招投标的参与战略。', icon: 'document' }
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
    },
    'media-entertainment': {
      slug: 'media-entertainment',
      badge: '媒体与娱乐',
      title: '媒体与内容变现系统',
      subtitle: '数字版权管理、实时版税结算以及全渠道内容变现。',
      overview: 'Dstellar 协助媒体与娱乐机构优化数字资产价值链，简化复杂的 IP 授权版税计算，并利用 SAP 计费与收入创新管理 (BRIM) 运行超大规模订阅计费模型。',
      gradientClass: 'linear-gradient(135deg, #180828 0%, #ec4899 45%, #e11d48 100%)',
      themeColor: '#ec4899',
      stats: [
        { value: '35%', label: '版税处理提速' },
        { value: '25M+', label: '日活内容订阅用户' },
        { value: '$2B+', label: '年均发放版税额' }
      ],
      solutions: [
        { title: '版权与版税审计', desc: '在 SAP BRIM 中实现知识产权授权协议、版税支付 and 合规审计的自动化跟踪。', icon: 'film' },
        { title: '订阅账单与发票', desc: '支持高并发处理数百万动态数字内容订阅用户的计费逻辑和发票生成。', icon: 'music' },
        { title: '内容分发数据集成', desc: '将全球流媒体播发遥测数据与财务账套同步，实现实时的内容盈利性分析。', icon: 'play' }
      ],
      playbook: {
        tag: '成功案例',
        title: '流媒体版税系统现代化',
        desc: 'Dstellar 如何构建日均处理 1000 万流媒体播放事件的高速计费管道，并将其与 SAP 总账无缝集成。',
        metrics: '实现 100% 的版税支付准确率。'
      },
      inquiryTitle: '联系我们的媒体行业专家',
      namePlaceholder: '您的姓名',
      emailPlaceholder: '电子邮箱',
      msgPlaceholder: '请告诉我们您的数字版权或计费项目需求...',
      submitBtn: '发送咨询',
      successMsg: '谢谢！我们的媒体团队会尽快与您取得联系。'
    },
    'telecommunications': {
      slug: 'telecommunications',
      badge: '电信行业',
      title: '电信级 OSS/BSS 系统协同',
      subtitle: '动态订户计费管理、通信基础设施运维以及电信遥测流量数据分析。',
      overview: 'Dstellar 将通信运营商的核心网络活动与企业级 ERP 平台集成，协助电信运营商高效管理超海量话单和费率计算流，优化基站维护周期，并实现实时的订户流失预测。',
      gradientClass: 'linear-gradient(135deg, #091e3a 0%, #06b6d4 45%, #3b82f6 100%)',
      themeColor: '#06b6d4',
      stats: [
        { value: '99.999%', label: '核心计费系统可用率' },
        { value: '50M+', label: '在网活跃用户数' },
        { value: '15%', label: '降低网络运营开支 (Opex)' }
      ],
      solutions: [
        { title: '超高并发计费引擎', desc: '直接将语音、流量数据及增值服务的通话详单 (CDR) 实时接入 SAP BRIM 计费系统。', icon: 'phone' },
        { title: '网络资产与设备维护', desc: '利用 SAP Plant Maintenance (PM) 模块协调信号基站、光纤网络和网元硬件的定期维护保养。', icon: 'wifi' },
        { title: '订户流失预测分析', desc: '对订户的网络流量模式和缴费信用记录运行机器学习预测建模，以预测离网意向。', icon: 'activity' }
      ],
      playbook: {
        tag: '网络规模',
        title: '5G 网络大规模部署集成',
        desc: 'Dstellar 如何协助某国家级电信运营商将资本支出预算跟踪与 5G 基站设备上线审批工作流合并。',
        metrics: '新建基站从立项 to 开通的周期由 6 个月缩短至 6 周。'
      },
      inquiryTitle: '联系我们的电信网络专家',
      namePlaceholder: '您的姓名',
      emailPlaceholder: '电子邮箱',
      msgPlaceholder: '请描述您的网络资产或电信级计费需求...',
      submitBtn: '发送咨询',
      successMsg: '谢谢！我们的电信行业顾问会尽快联系您。'
    },
    'distribution-wholesale': {
      slug: 'distribution-wholesale',
      badge: '分销与批发',
      title: '敏捷供应链与批发分销系统',
      subtitle: '加速销售到收款流程、智能仓储物流管控以及全球供应商高效协同。',
      overview: 'Dstellar 针对大型分销和批发企业优化其供应链流向及仓库物料周转率。我们将 SAP 高级仓库管理系统 (EWM) 与实时运输网络集成，全面消除订单履约的技术瓶颈。',
      gradientClass: 'linear-gradient(135deg, #1c1917 0%, #f59e0b 45%, #ea580c 100%)',
      themeColor: '#f59e0b',
      stats: [
        { value: '45%', label: '订单履约周期缩短' },
        { value: '100k+', label: '日均优化库存品类 (SKU)' },
        { value: '22%', label: '降低仓储持有成本' }
      ],
      solutions: [
        { title: '高级仓库流转效率', desc: '基于 SAP EWM 中的自动化路径算法和三维货位映射，彻底优化拣货、包装和出库流程。', icon: 'box' },
        { title: '全渠道订单汇聚管道', desc: '将来自区域分销商、加盟商、线下及线上各端渠道的订单统合写入同一套财务总账。', icon: 'truck' },
        { title: '供应商协同作业平台', desc: '实现批发采购订单自动分发以及与供应商网络之间的交期自动匹配确认。', icon: 'archive' }
      ],
      playbook: {
        tag: '成功案例',
        title: '全球供应链补货流自动化',
        desc: 'Dstellar 为某跨国分销企业开发了中央自动补货系统，在库存水位低于预定动态指标时自动触发向上游订货的采购单。',
        metrics: '缺货停工停料发生率降低了 98%。'
      },
      inquiryTitle: '联系我们的分销与物流顾问',
      namePlaceholder: '您的姓名',
      emailPlaceholder: '电子邮箱',
      msgPlaceholder: '请告诉我们您的仓储物流或供应链项目计划...',
      submitBtn: '发送咨询',
      successMsg: '谢谢！我们的分销行业专家会尽快为您提供支持。'
    },
    'retail': {
      slug: 'retail',
      badge: '零售商贸',
      title: '全渠道统一零售与商业集成',
      subtitle: '全渠道实时库存共享、收银端 POS 交易集成以及消费者忠诚度管理系统。',
      overview: 'Dstellar 致力于打通传统电商数字渠道与实体零售门店之间的屏障。我们实施统一的 SAP 零售业解决方案，在每一个触点提供实时的库存视图和客户忠诚度画像。',
      gradientClass: 'linear-gradient(135deg, #022c22 0%, #10b981 45%, #84cc16 100%)',
      themeColor: '#10b981',
      stats: [
        { value: '99.8%', label: '实时库存盘点准确率' },
        { value: '12M+', label: '同步更新的会员画像' },
        { value: '30%', label: '提升顾客留存复购率' }
      ],
      solutions: [
        { title: '统一商贸库存共享', desc: '即时追踪门店货架、店仓以及网店冻结库存，并在 SAP 中央账套内实时自动平账。', icon: 'shopping-bag' },
        { title: '智能动态价调规则', desc: '跨所有门店及网络渠道同步最新的零售售价、优惠券卷扣减逻辑和满减优惠活动方案。', icon: 'tag' },
        { title: '收银 POS 账务直连', desc: '将门店收银 POS 系统数据直接连接到 SAP 财务模块，实现日结算自动化和营业额实时看盘。', icon: 'credit-card' }
      ],
      playbook: {
        tag: '零售增长',
        title: '多渠道实时大盘库存同步',
        desc: 'Dstellar 协助某跨国时尚服装零售商打通电商品牌订单流与其实体店库存主数据的接口。',
        metrics: '因库存差异导致的订单发货失败数大减 85%。'
      },
      inquiryTitle: '联系我们的零售解决方案专家',
      namePlaceholder: '您的姓名',
      emailPlaceholder: '电子邮箱',
      msgPlaceholder: '请提供您的实体零售店或电商系统改造方案需求...',
      submitBtn: '发送咨询',
      successMsg: '谢谢！我们的零售行业服务团队会尽快与您取得联系。'
    },
    'hotel-management': {
      slug: 'hotel-management',
      badge: '酒店管理',
      title: '酒旅运营与酒店管理系统',
      subtitle: '实时客房预订引擎、酒店前台 PMS 系统管理以及动态收益率优化。',
      overview: 'Dstellar 为全球酒店运营商构建一体化的酒店信息系统，实现面向宾客的酒店前后台 (PMS) 与 ERP 财务账套的数据直连。我们优化客房分配算法，实现自动化采购并简化前台账务。',
      gradientClass: 'linear-gradient(135deg, #1e1b4b 0%, #8b5cf6 45%, #d946ef 100%)',
      themeColor: '#8b5cf6',
      stats: [
        { value: '98%', label: '住客满意度指数' },
        { value: '15M+', label: '年均处理预订间夜数' },
        { value: '18%', label: '提升单房平均收益 (RevPAR)' }
      ],
      solutions: [
        { title: '酒店前台 (PMS) ERP 集成', desc: '将实时房态（清洁/房脏）、住退登记及挂账数据直接自动写入 SAP 计费总账。', icon: 'key' },
        { title: '动态收益率与定价引擎', desc: '基于实时入住率走势和当地季节性节假日日程部署智能房价控制算法。', icon: 'coffee' },
        { title: '统一酒店运营平台', desc: '合并前台日常接待、餐厅餐饮挂账和康乐预订流程，归入单一住客档案管理。', icon: 'bed' }
      ],
      playbook: {
        tag: '酒旅升级',
        title: '集团型度假村一体化运营',
        desc: 'Dstellar 针对某大型文旅度假集团部署了单一住客身份识别器 (One-ID)，统一追踪其 50 家度假村的挂账消费。',
        metrics: '将集团日常挂账账单错误率降至 0.1% 以下。'
      },
      inquiryTitle: '联系我们的酒店数字化顾问',
      namePlaceholder: '您的姓名',
      emailPlaceholder: '电子邮箱',
      msgPlaceholder: '请告诉我们您的酒店连锁管理或财务系统的升级需求...',
      submitBtn: '发送咨询',
      successMsg: '谢谢！我们的酒店行业专家会尽快联络您。'
    },
    'information-services': {
      slug: 'information-services',
      badge: '信息服务',
      title: '信息与数据资产服务平台',
      subtitle: '数据资产商业化封装、高并发 API 开发者门户以及订阅式自动账务管理。',
      overview: 'Dstellar 致力于协助数据服务商、信用征征信机构及各类信息服务商打包并变现其数字资产。我们设计极速 API 分发层，并在 SAP 中自动执行周期性订阅财务核算。',
      gradientClass: 'linear-gradient(135deg, #0f172a 0%, #3b82f6 45%, #00d4c8 100%)',
      themeColor: '#3b82f6',
      stats: [
        { value: '10B+', label: '日均处理 API 调用量' },
        { value: '99.999%', label: '海量查询响应高可用' },
        { value: '40%', label: '降低订阅用户解约率' }
      ],
      solutions: [
        { title: '动态 API 量化计费', desc: '即时收集开发者 API 真实调用指标，并在 SAP 计费模块 (BRIM) 中运行按量计算。', icon: 'database' },
        { title: '高响应技术物理架构', desc: '建立弹性数据缓存和搜索索引集群，满足秒级数百万并发数据获取需求。', icon: 'server' },
        { title: '元数据与索引中台', desc: '在内存数据库 SAP HANA 中安全地归集原始数据包属性、客户准入密钥和访问日志。', icon: 'info' }
      ],
      playbook: {
        tag: '数据规模',
        title: '全球征信评分数据商业化集成',
        desc: 'Dstellar 协助某跨国征信巨头将其征信评分查询 API 对接 SAP BRIM，使 5,000 家企业级客户账单全自动出单。',
        metrics: '开票及财务结算周期从 5 天压缩到 2 分钟。'
      },
      inquiryTitle: '联系我们的数据变现架构师',
      namePlaceholder: '您的姓名',
      emailPlaceholder: '电子邮箱',
      msgPlaceholder: '请提供您的大数据接口或订阅模式的系统升级要件...',
      submitBtn: '发送咨询',
      successMsg: '谢谢！我们的数据服务行业专家将尽快答复您。'
    },
    'public-services': {
      slug: 'public-services',
      badge: '公共服务',
      title: '公共事业与社会公益组织数字化系统',
      subtitle: '市民社会援助工作流管理、公益项目财务预决算管控以及行政工单跟进。',
      overview: 'Dstellar 支持地方政务机关及非营利组织运行高效的社会治理服务。我们提供自动化个案救助进度跟踪，精准管理民生工程预算，并确保完全符合公共财政审计标准。',
      gradientClass: 'linear-gradient(135deg, #030712 0%, #6366f1 45%, #4338ca 100%)',
      themeColor: '#6366f1',
      stats: [
        { value: '10M+', label: '受益市民人数' },
        { value: '100%', label: '项目专项审计通过率' },
        { value: '50%', label: '缩短民政工单受理响应周期' }
      ],
      solutions: [
        { title: '便民政务网络窗口', desc: '基于 Fiori 开发的在线服务门户，方便群众提交社保/求助申请并查询审批节点。', icon: 'users' },
        { title: '财政预算专项会计', desc: '在 SAP Funds Management (FM) 中追踪国家及地方政府拨款的使用合规性和支出进度。', icon: 'shield' },
        { title: '跨部门个案管理流', desc: '协同多个民政、医疗及就业相关机构的工作流，记录服务对象援助里程碑。', icon: 'briefcase' }
      ],
      playbook: {
        tag: '民生效应',
        title: '社会救助审批发放直联工程',
        desc: 'Dstellar 协助某民政局系统开发临时救助系统，自动对比资格库、批量发放社会专项津贴。',
        metrics: '社会援助金申领流转积压数缩减 90%。'
      },
      inquiryTitle: '联系我们的公共事业项目顾问',
      namePlaceholder: '您的姓名',
      emailPlaceholder: '电子邮箱',
      msgPlaceholder: '请提供您所在的市政机构或社会服务项目的具体建设要求...',
      submitBtn: '发送咨询',
      successMsg: '谢谢！我们的公共服务行业团队会尽快联络您的办公室。'
    },
    'education': {
      slug: 'education',
      badge: '教育',
      title: '高等教育与教务管理系统',
      subtitle: '学生在校全生命周期记录、数字化招生以及主流在线教学平台 (LMS) 集成。',
      overview: 'Dstellar 为高等院校及集团型教育网络设计高度可扩展的教务平台。我们部署学生信息系统 (SIS)、实现注册办公室自动出账管理，并打通 LMS 教学系统与后台财务账套。',
      gradientClass: 'linear-gradient(135deg, #2a0800 0%, #ea580c 45%, #eab308 100%)',
      themeColor: '#ea580c',
      stats: [
        { value: '250k+', label: '活跃在校生总数' },
        { value: '95%', label: '在线录取审批效率提速' },
        { value: '100%', label: '教学平台 (LMS) 数据实时打通' }
      ],
      solutions: [
        { title: '学籍管理与教务 ERP', desc: '在 SAP 统一系统中编排课程目录、控制选课选班流程、记录考试分数及学籍日志。', icon: 'book' },
        { title: '财务与奖助学金自动化', desc: '实现学杂费账单批量生成和清算，支持学生奖学金在线申请和自动核扣账款。', icon: 'award' },
        { title: '教学中台接口集成', desc: '将外部教学管理软件（如 Canvas、Moodle）与底层教务系统和财务核算数据库实时同步。', icon: 'compass' }
      ],
      playbook: {
        tag: '校园升级',
        title: '多校区统一教务云平台建设',
        desc: 'Dstellar 协助某省属多校区综合大学将陈旧的学生数据孤岛合并，成功迁移至统一的 SAP 教育云环境。',
        metrics: '新生开学季排队选课等待时长缩短 70%。'
      },
      inquiryTitle: '联系我们的教育信息化顾问',
      namePlaceholder: '您的姓名',
      emailPlaceholder: '电子邮箱',
      msgPlaceholder: '请告诉我们您的大学教务管理或数字化校园改造需求...',
      submitBtn: '发送咨询',
      successMsg: '谢谢！我们的教育行业顾问会尽快与您取得联系。'
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
        { title: 'Beschaffungswesen & Tender-Strategie', desc: 'Automatisieren Sie Ausschreibungsverfahren und unterstützen Sie Unternehmen bei der strategischen Vorbereitung auf öffentliche Ausschreibungen.', icon: 'document' }
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
    },
    'media-entertainment': {
      slug: 'media-entertainment',
      badge: 'Medien & Unterhaltung',
      title: 'Medien- & Content-Monetarisierung',
      subtitle: 'Digitales Rechtemanagement, Lizenzgebührenverarbeitung in Echtzeit und Omnichannel-Monetarisierung.',
      overview: 'Dstellar transformiert Medien- und Unterhaltungsunternehmen durch die Optimierung der Wertschöpfungsketten für digitale Assets, die Rationalisierung komplexer Lizenzgebühren und den Betrieb von Abonnement-Abrechnungsmodellen im großen Stil mit SAP BRIM.',
      gradientClass: 'linear-gradient(135deg, #180828 0%, #ec4899 45%, #e11d48 100%)',
      themeColor: '#ec4899',
      stats: [
        { value: '35%', label: 'Schnellere Lizenzabrechnung' },
        { value: '25M+', label: 'Tägliche Inhaltsabonnenten' },
        { value: '$2B+', label: 'Jährlich verteilte Lizenzen' }
      ],
      solutions: [
        { title: 'Rechte- & Lizenzgebühren-Audits', desc: 'Automatisieren Sie die Verfolgung von IP-Lizenzvereinbarungen, Lizenzgebührenauszahlungen und Audits in SAP BRIM.', icon: 'film' },
        { title: 'Abonnement-Abrechnung', desc: 'Verarbeiten Sie die Abrechnungslogik für Millionen dynamischer digitaler Content-Abonnenten mit hoher Parallelität.', icon: 'music' },
        { title: 'Inhaltsverteilungsdaten', desc: 'Synchronisieren Sie globale Streaming-Telemetrie mit Finanzbüchern für Rentabilitätsanalysen in Echtzeit.', icon: 'play' }
      ],
      playbook: {
        tag: 'Fallstudie',
        title: 'Modernisierung der Streaming-Lizenzen',
        desc: 'Wie Dstellar eine Hochgeschwindigkeits-Abrechnungspipeline aufbaute, die täglich 10 Millionen Streaming-Ereignisse verarbeitet und in das SAP Hauptbuch integriert.',
        metrics: '100% Genauigkeit bei den Lizenzgebührenzahlungen erreicht.'
      },
      inquiryTitle: 'Kontaktieren Sie unsere Medien-Experten',
      namePlaceholder: 'Ihr Name',
      emailPlaceholder: 'E-Mail-Adresse',
      msgPlaceholder: 'Erzählen Sie uns von Ihrem Projekt...',
      submitBtn: 'Anfrage senden',
      successMsg: 'Vielen Dank! Unser Medienteam wird sich in Kürze mit Ihnen in Verbindung setzen.'
    },
    'telecommunications': {
      slug: 'telecommunications',
      badge: 'Telekommunikation',
      title: 'OSS/BSS-Orchestrierung für Telekommunikation',
      subtitle: 'Dynamische Teilnehmerabrechnung, Netzwerk-Infrastrukturmanagement und Telekom-Telemetrieanalysen.',
      overview: 'Dstellar integriert Kernnetzwerkaktivitäten in ERP-Plattformen, sodass Telekommunikationsanbieter hohe Abrechnungsströme verwalten, Wartungszyklen für Mobilfunkmasten optimieren und Abwanderungen in Echtzeit vorhersagen können.',
      gradientClass: 'linear-gradient(135deg, #091e3a 0%, #06b6d4 45%, #3b82f6 100%)',
      themeColor: '#06b6d4',
      stats: [
        { value: '99.999%', label: 'Uptime des Kern-Abrechnungssystems' },
        { value: '50M+', label: 'Aktive Mobilfunkkunden' },
        { value: '15%', label: 'Reduzierung der Netzwerk-Opex' }
      ],
      solutions: [
        { title: 'Massendaten-Abrechnung', desc: 'Erfassen Sie Abrechnungstelemetrie für Sprache, Daten und Mehrwertdienste direkt in SAP BRIM.', icon: 'phone' },
        { title: 'Netzwerkanlagen-Management', desc: 'Koordinieren Sie Mobilfunkmasten, Glasfaserleitungen und Hardwarewartung mit der SAP Instandhaltung.', icon: 'wifi' },
        { title: 'Abwanderungs-Prognose', desc: 'Wenden Sie ML-Modelle auf Verkehrsdaten und Rechnungsverlauf an, um die Kundenbindung zu prognostizieren.', icon: 'activity' }
      ],
      playbook: {
        tag: 'Netzwerkskalierung',
        title: '5G-Netzwerk-Rollout-Integration',
        desc: 'Wie Dstellar einen nationalen Telekommunikationsanbieter dabei unterstützte, Investitionsausgaben mit der Bereitstellung von Mobilfunkmasten zu verknüpfen.',
        metrics: 'Time-to-Market für neue Masten von 6 Monaten auf 6 Wochen verkürzt.'
      },
      inquiryTitle: 'Kontaktieren Sie unsere Telekom-Spezialisten',
      namePlaceholder: 'Ihr Name',
      emailPlaceholder: 'E-Mail-Adresse',
      msgPlaceholder: 'Erzählen Sie uns von Ihrem Projekt...',
      submitBtn: 'Anfrage senden',
      successMsg: 'Vielen Dank! Unser Telekommunikations-Team wird sich in Kürze bei Ihnen melden.'
    },
    'distribution-wholesale': {
      slug: 'distribution-wholesale',
      badge: 'Vertrieb & Großhandel',
      title: 'Großhandelsvertrieb mit hoher Frequenz',
      subtitle: 'Order-to-Cash-Beschleunigung, intelligente Lagerlogistik und globale Lieferantenkoordination.',
      overview: 'Dstellar optimiert die Lieferkettenlogistik und die Lagergeschwindigkeiten für große Distributoren. Wir integrieren SAP Extended Warehouse Management (EWM) in Echtzeit-Transportnetzwerke, um Engpässe bei der Auftragsabwicklung zu beseitigen.',
      gradientClass: 'linear-gradient(135deg, #1c1917 0%, #f59e0b 45%, #ea580c 100%)',
      themeColor: '#f59e0b',
      stats: [
        { value: '45%', label: 'Schnellere Auftragsabwicklung' },
        { value: '100k+', label: 'Täglich optimierte SKUs' },
        { value: '22%', label: 'Reduzierung der Lagerkosten' }
      ],
      solutions: [
        { title: 'Optimierte Lagergeschwindigkeit', desc: 'Optimieren Sie Kommissionier-, Verpackungs- und Versandsequenzen mithilfe von automatisiertem Routing in SAP EWM.', icon: 'box' },
        { title: 'Omnichannel-Auftragsabwicklung', desc: 'Konsolidieren Sie Aufträge von regionalen Partnern, Distributoren und Online-Kanälen in einem einzigen Hauptbuch.', icon: 'truck' },
        { title: 'Lieferantenportal', desc: 'Automatisieren Sie Bestellungen und Lieferbestätigungen mit Ihrem Großhandelslieferantennetzwerk.', icon: 'archive' }
      ],
      playbook: {
        tag: 'Fallstudie',
        title: 'Automatisierung globaler Lieferketten',
        desc: 'Dstellar entwickelte einen zentralen Nachschubplaner, der automatisch Lieferantenbestellungen auslöst, wenn die Lagerbestände unter dynamische Schwellenwerte fallen.',
        metrics: 'Out-of-Stock-Ereignisse um 98% reduziert.'
      },
      inquiryTitle: 'Kontaktieren Sie unsere Großhandels-Spezialisten',
      namePlaceholder: 'Ihr Name',
      emailPlaceholder: 'E-Mail-Adresse',
      msgPlaceholder: 'Erzählen Sie uns von Ihrem Projekt...',
      submitBtn: 'Anfrage senden',
      successMsg: 'Vielen Dank! Unser Großhandels-Team wird sich in Kürze mit Ihnen in Verbindung setzen.'
    },
    'retail': {
      slug: 'retail',
      badge: 'Einzelhandel (Retail)',
      title: 'Vereinheitlichte Einzelhandels- & Commerce-Integration',
      subtitle: 'Omnichannel-Lagerbestand, Checkout-POS-Integration und Kundenbindungssysteme.',
      overview: 'Dstellar schließt die Lücke zwischen Online-Kanälen und physischen Ladengeschäften. Wir implementieren einheitliche SAP Retail-Plattformen, die Bestände und Kundenprofile in Echtzeit über alle Touchpoints hinweg synchronisieren.',
      gradientClass: 'linear-gradient(135deg, #022c22 0%, #10b981 45%, #84cc16 100%)',
      themeColor: '#10b981',
      stats: [
        { value: '99.8%', label: 'Lagerbestandsgenauigkeit' },
        { value: '12M+', label: 'Synchronisierte Kundenprofile' },
        { value: '30%', label: 'Steigerung der Kundenbindung' }
      ],
      solutions: [
        { title: 'Einheitlicher Commerce-Bestand', desc: 'Verfolgen Sie Regalbestände, Ladenlager und Online-Reservierungen sofort in einem zentralen Ledger.', icon: 'shopping-bag' },
        { title: 'Dynamisches Preismanagement', desc: 'Synchronisieren Sie Preise, Coupon-Regeln und Werbeaktionen in Echtzeit für alle Kanäle.', icon: 'tag' },
        { title: 'Checkout-POS-Integration', desc: 'Verbinden Sie Point-of-Sale-Kassensysteme mit SAP Finanzen für tägliche Verkaufsberichte.', icon: 'credit-card' }
      ],
      playbook: {
        tag: 'Retail-Wachstum',
        title: 'Lagerbestandsabgleich in Echtzeit',
        desc: 'Wie Dstellar einer großen Handelskette half, E-Commerce-Plattformen und Ladenbestände in einem System abzugleichen.',
        metrics: 'Fehler bei der Auftragsabwicklung um 85% gesenkt.'
      },
      inquiryTitle: 'Kontaktieren Sie unsere Einzelhandels-Spezialisten',
      namePlaceholder: 'Ihr Name',
      emailPlaceholder: 'E-Mail-Adresse',
      msgPlaceholder: 'Erzählen Sie uns von Ihrem Projekt...',
      submitBtn: 'Anfrage senden',
      successMsg: 'Vielen Dank! Unser Retail-Team wird sich in Kürze mit Ihnen in Verbindung setzen.'
    },
    'hotel-management': {
      slug: 'hotel-management',
      badge: 'Hotelmanagement',
      title: 'Hotelmanagement & Gästebetrieb',
      subtitle: 'Echtzeit-Buchungssysteme, PMS-Systeme und Ertragsoptimierung.',
      overview: 'Dstellar entwickelt integrierte Hotellösungen, die gästeorientierte Property-Management-Systeme mit den zentralen Finanzbüchern verbinden. Wir optimieren Buchungskapazitäten, automatisieren die Beschaffung und vereinfachen Abrechnungen.',
      gradientClass: 'linear-gradient(135deg, #1e1b4b 0%, #8b5cf6 45%, #d946ef 100%)',
      themeColor: '#8b5cf6',
      stats: [
        { value: '98%', label: 'Gästebewertung (CS)' },
        { value: '15M+', label: 'Jährlich verwaltete Buchungen' },
        { value: '18%', label: 'Steigerung des RevPAR' }
      ],
      solutions: [
        { title: 'PMS & ERP Integration', desc: 'Verbinden Sie Zimmerreinigungsstatus, Check-ins und Gästekosten direkt mit der SAP Abrechnung.', icon: 'key' },
        { title: 'Ertrags- & Preissystem', desc: 'Implementieren Sie automatisierte Tarife basierend auf Auslastungstrends und lokalen Veranstaltungskalendern.', icon: 'coffee' },
        { title: 'Integrierte Hotelabläufe', desc: 'Verwalten Sie Rezeption, Restaurantbuchungen und Spa-Termine über eine einzige Kundenkartei.', icon: 'bed' }
      ],
      playbook: {
        tag: 'Modernisierung',
        title: 'Vereinheitlichter Resortbetrieb',
        desc: 'Wie Dstellar ein einziges Kundenidentifikationssystem entwickelte, das Zimmerkosten, Restaurantbelege und Aktivitäten in 50 Resorts verfolgt.',
        metrics: 'Rechnungsfehler auf unter 0,1% reduziert.'
      },
      inquiryTitle: 'Kontaktieren Sie unsere Hospitality-Spezialisten',
      namePlaceholder: 'Ihr Name',
      emailPlaceholder: 'E-Mail-Adresse',
      msgPlaceholder: 'Erzählen Sie uns von Ihrem Projekt...',
      submitBtn: 'Anfrage senden',
      successMsg: 'Vielen Dank! Unser Hotelmanagement-Team wird sich in Kürze bei Ihnen melden.'
    },
    'information-services': {
      slug: 'information-services',
      badge: 'Informationsdienste',
      title: 'Informations- & Datendienste',
      subtitle: 'Monetarisierung von Datenwerten, High-Performance-API-Portale und Abo-Abrechnung.',
      overview: 'Dstellar unterstützt Datenbroker, Kreditauskünfte und Informationsanbieter bei der Paketierung und Monetarisierung ihrer digitalen Werte. Wir entwerfen schnelle API-Bereitstellungsschichten und automatisieren die Abonnementbuchhaltung in SAP.',
      gradientClass: 'linear-gradient(135deg, #0f172a 0%, #3b82f6 45%, #00d4c8 100%)',
      themeColor: '#3b82f6',
      stats: [
        { value: '10B+', label: 'Tägliche API-Anfragen' },
        { value: '99.999%', label: 'Verlässlichkeit der Datenabfrage' },
        { value: '40%', label: 'Verringerung der Abo-Kündigungen' }
      ],
      solutions: [
        { title: 'Dynamische API-Monetarisierung', desc: 'Verfolgen Sie die API-Nutzung von Entwicklern und rechnen Sie diese in Echtzeit in SAP BRIM ab.', icon: 'database' },
        { title: 'Hochleistungs-Architektur', desc: 'Skalieren Sie Inhalts-Caches und Suchindizes für Millionen von Abfragen pro Sekunde.', icon: 'server' },
        { title: 'Strukturiertes Metadaten-Hub', desc: 'Organisieren Sie Rohdaten, Client-Berechtigungen und Zugriffsprotokolle sicher in SAP HANA.', icon: 'info' }
      ],
      playbook: {
        tag: 'Datenskalierung',
        title: 'Monetarisierung globaler Bonitätsdaten',
        desc: 'Wie Dstellar die API einer Bonitätsplattform in SAP BRIM integrierte und die Abrechnungszyklen für 5.000 Firmenkunden automatisierte.',
        metrics: 'Abrechnungserstellung von 5 Tagen auf 2 Minuten verkürzt.'
      },
      inquiryTitle: 'Kontaktieren Sie unsere Datenspezialisten',
      namePlaceholder: 'Ihr Name',
      emailPlaceholder: 'E-Mail-Adresse',
      msgPlaceholder: 'Erzählen Sie uns von Ihrem Projekt...',
      submitBtn: 'Anfrage senden',
      successMsg: 'Vielen Dank! Unser Datenteam wird sich in Kürze mit Ihnen in Verbindung setzen.'
    },
    'public-services': {
      slug: 'public-services',
      badge: 'Öffentliche Dienste',
      title: 'Öffentliche Dienste & Bürger-Infrastruktur',
      subtitle: 'Gemeinschaftshilfe, Fallmanagement und Verwaltung ziviler Programme.',
      overview: 'Dstellar unterstützt lokale Behörden und gemeinnützige Organisationen bei der Bereitstellung effizienter ziviler Dienste. Wir automatisieren das Fallmanagement, verwalten Budgets für Sozialprogramme und sichern die Einhaltung von Audits.',
      gradientClass: 'linear-gradient(135deg, #030712 0%, #6366f1 45%, #4338ca 100%)',
      themeColor: '#6366f1',
      stats: [
        { value: '10M+', label: 'Unterstützte Bürger' },
        { value: '100%', label: 'Einhaltung von Programm-Audits' },
        { value: '50%', label: 'Schnellere Bearbeitungszeit' }
      ],
      solutions: [
        { title: 'Bürger-Serviceportale', desc: 'Fiori-Portale, über die Bürger Unterstützung beantragen und den Status ihrer Anliegen sicher online einsehen können.', icon: 'users' },
        { title: 'Zivile Programm-Budgets', desc: 'Verfolgen Sie Zuweisungen von Fördermitteln und Programmausgaben in der SAP Haushaltsverwaltung.', icon: 'shield' },
        { title: 'Soziales Fallmanagement', desc: 'Koordinieren Sie behördenübergreifende Arbeitsabläufe, Klientenmeilensteine und Unterstützungsdaten.', icon: 'briefcase' }
      ],
      playbook: {
        tag: 'Bürger-Nutzen',
        title: 'Automatisierung von Sozialhilfe',
        desc: 'Wie Dstellar eine Stadtverwaltung bei der Automatisierung der Sozialhilfeanträge unterstützte, Kriterien prüfte und Zuschüsse auszahlte.',
        metrics: 'Rückstand bei der Antragsbearbeitung um 90% verringert.'
      },
      inquiryTitle: 'Kontaktieren Sie unsere Spezialisten des öffentlichen Sektors',
      namePlaceholder: 'Ihr Name',
      emailPlaceholder: 'E-Mail-Adresse',
      msgPlaceholder: 'Erzählen Sie uns von Ihrem Projekt...',
      submitBtn: 'Anfrage senden',
      successMsg: 'Vielen Dank! Unser Team für den öffentlichen Dienst wird sich in Kürze mit Ihnen in Verbindung setzen.'
    },
    'education': {
      slug: 'education',
      badge: 'Bildungswesen',
      title: 'Campusmanagement & Bildungswesen',
      subtitle: 'Verfolgung des studentischen Lebenszyklus, digitale Zulassungen und LMS-Integrationen.',
      overview: 'Dstellar entwickelt skalierbare Bildungssysteme für Universitäten und Schulnetzwerke. Wir implementieren Studenten-Informationssysteme, automatisieren Registrierungsabläufe und integrieren LMS-Software in die Finanzdaten.',
      gradientClass: 'linear-gradient(135deg, #2a0800 0%, #ea580c 45%, #eab308 100%)',
      themeColor: '#ea580c',
      stats: [
        { value: '250k+', label: 'Aktive Studenten' },
        { value: '95%', label: 'Zulassungsbearbeitung' },
        { value: '100%', label: 'LMS-Synchronisation' }
      ],
      solutions: [
        { title: 'Studenten-Lifecycle-ERP', desc: 'Verwalten Sie Vorlesungsverzeichnisse, Einschreibungen und Noten in der SAP Student Lifecycle-Lösung.', icon: 'book' },
        { title: 'Automatisierung für Studienbüros', desc: 'Automatisieren Sie die Erstellung von Studiengebührenrechnungen, Stipendienanträgen und Studentenkonten.', icon: 'award' },
        { title: 'Integrierte Lernplattform', desc: 'Verbinden Sie externe LMS wie Canvas und Moodle mit akademischen und finanziellen Backend-Datenbanken.', icon: 'compass' }
      ],
      playbook: {
        tag: 'Campus-Upgrade',
        title: 'Vereinheitlichte Campus-Cloud',
        desc: 'Wie Dstellar eine Landesuniversität mit mehreren Standorten von Altsystemen auf eine einheitliche SAP Cloud-Umgebung migrierte.',
        metrics: 'Wartezeiten bei der Einschreibung um 70% gesenkt.'
      },
      inquiryTitle: 'Kontaktieren Sie unsere Bildungs-Spezialisten',
      namePlaceholder: 'Ihr Name',
      emailPlaceholder: 'E-Mail-Adresse',
      msgPlaceholder: 'Erzählen Sie uns von Ihrem Projekt...',
      submitBtn: 'Anfrage senden',
      successMsg: 'Vielen Dank! Unser Bildungsteam wird sich in Kürze mit Ihnen in Verbindung setzen.'
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
        { title: 'Achats, Marchés Publics & Appels d\'Offres', desc: 'Automatisez les appels d\'offres et accompagnez les entreprises partenaires à structurer et à stratégiser leurs réponses aux marchés publics.', icon: 'document' }
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
    },
    'media-entertainment': {
      slug: 'media-entertainment',
      badge: 'Médias & Divertissement',
      title: 'Monétisation des Médias et Contenus',
      subtitle: 'Gestion des droits numériques, traitement des redevances en temps réel et monétisation omnicanale.',
      overview: 'Dstellar transforme les organisations de médias et de divertissement en optimisant les chaînes de valeur des actifs numériques, en rationalisant les redevances complexes et en exécutant des modèles de facturation d\'abonnements à grande échelle avec SAP BRIM.',
      gradientClass: 'linear-gradient(135deg, #180828 0%, #ec4899 45%, #e11d48 100%)',
      themeColor: '#ec4899',
      stats: [
        { value: '35%', label: 'Traitement des Redevances Accéléré' },
        { value: '25M+', label: 'Abonnés Quotidiens' },
        { value: '$2B+', label: 'Redevances Distribuées par An' }
      ],
      solutions: [
        { title: 'Audit de Droits et Redevances', desc: 'Automatisez le suivi des accords de licence de propriété intellectuelle, des paiements de redevances et de l\'audit dans SAP BRIM.', icon: 'film' },
        { title: 'Facturation d\'Abonnements', desc: 'Traitez la logique de facturation pour des millions d\'abonnés à des contenus numériques dynamiques avec une haute simultanéité.', icon: 'music' },
        { title: 'Données de Distribution', desc: 'Synchronisez la télémétrie de diffusion mondiale avec les grands livres financiers pour des analyses de rentabilité en temps réel.', icon: 'play' }
      ],
      playbook: {
        tag: 'Étude de Cas',
        title: 'Modernisation des Redevances de Streaming',
        desc: 'Comment Dstellar a construit un pipeline de facturation rapide traitant 10 millions d\'événements de streaming par jour et l\'a intégré avec SAP General Ledger.',
        metrics: 'Précision de 100% des paiements de redevances atteinte.'
      },
      inquiryTitle: 'Contactez Nos Spécialistes des Médias',
      namePlaceholder: 'Votre Nom',
      emailPlaceholder: 'Adresse E-mail',
      msgPlaceholder: 'Parlez-nous de votre projet de droits numériques ou de facturation...',
      submitBtn: 'Envoyer une Demande',
      successMsg: 'Merci ! Notre équipe médias vous contactera prochainement.'
    },
    'telecommunications': {
      slug: 'telecommunications',
      badge: 'Télécommunications',
      title: 'Orchestration OSS/BSS Télécom',
      subtitle: 'Facturation dynamique des abonnés, gestion des infrastructures réseau et télémétrie.',
      overview: 'Dstellar intègre les activités réseau cœur avec les ERP d\'entreprise, permettant aux opérateurs de télécommunications de gérer des flux de facturation à haut volume, d\'optimiser les cycles de maintenance des antennes et de prédire le désabonnement en réel.',
      gradientClass: 'linear-gradient(135deg, #091e3a 0%, #06b6d4 45%, #3b82f6 100%)',
      themeColor: '#06b6d4',
      stats: [
        { value: '99.999%', label: 'Disponibilité du Système de Facturation' },
        { value: '50M+', label: 'Abonnés Actifs Gérés' },
        { value: '15%', label: 'Réduction des Dépenses Réseau' }
      ],
      solutions: [
        { title: 'Facturation Grand Volume', desc: 'Intégrez les données de facturation pour la voix, les données et les services à valeur ajoutée dans SAP BRIM.', icon: 'phone' },
        { title: 'Gestion des Actifs Réseau', desc: 'Coordonnez la maintenance des antennes, des lignes de fibre optique et du matériel avec SAP Plant Maintenance.', icon: 'wifi' },
        { title: 'Analyse du Churn', desc: 'Appliquez des modèles de ML aux habitudes de trafic des abonnés pour anticiper et réduire les résiliations.', icon: 'activity' }
      ],
      playbook: {
        tag: 'Échelle Réseau',
        title: 'Intégration du Déploiement 5G',
        desc: 'Comment Dstellar a aidé un opérateur national à intégrer le suivi des budgets d\'investissement avec les workflows de déploiement des antennes.',
        metrics: 'Temps de mise en service des nouvelles antennes réduit de 6 mois à 6 semaines.'
      },
      inquiryTitle: 'Contactez Nos Spécialistes Télécom',
      namePlaceholder: 'Votre Nom',
      emailPlaceholder: 'Adresse E-mail',
      msgPlaceholder: 'Décrivez votre infrastructure ou vos besoins de facturation...',
      submitBtn: 'Envoyer une Demande',
      successMsg: 'Merci ! Notre équipe télécom va vous contacter dans les plus brefs délais.'
    },
    'distribution-wholesale': {
      slug: 'distribution-wholesale',
      badge: 'Distribution & Vente en Gros',
      title: 'Distribution de Gros à Flux Tendu',
      subtitle: 'Accélération de l\'Order-to-Cash, logistique d\'entrepôt intelligente et approvisionnement.',
      overview: 'Dstellar optimise la logistique de la chaîne d\'approvisionnement et le flux de rotation des stocks des grands distributeurs. Nous intégrons SAP Extended Warehouse Management (EWM) avec les réseaux de transport en temps réel pour éliminer les goulots d\'embouteillage.',
      gradientClass: 'linear-gradient(135deg, #1c1917 0%, #f59e0b 45%, #ea580c 100%)',
      themeColor: '#f59e0b',
      stats: [
        { value: '45%', label: 'Traitement des Commandes Accéléré' },
        { value: '100k+', label: 'Articles (SKU) Gérés par Jour' },
        { value: '22%', label: 'Réduction des Coûts de Stockage' }
      ],
      solutions: [
        { title: 'Vitesse d\'Entrepôt Optimisée', desc: 'Optimisez les processus de prélèvement, d\'emballage et d\'expédition via l\'enroutement intelligent dans SAP EWM.', icon: 'box' },
        { title: 'Pipeline de Commandes Unifié', desc: 'Centralisez les flux de commandes des concessionnaires régionaux, magasins et du web dans un seul livre comptable.', icon: 'truck' },
        { title: 'Portail Collaboratif Fournisseurs', desc: 'Automatisez la passation de commandes d\'achat et la réception des livraisons avec vos réseaux de grossistes.', icon: 'archive' }
      ],
      playbook: {
        tag: 'Étude de Cas',
        title: 'Automatisation des Réapprovisionnements',
        desc: 'Dstellar a déployé un planificateur centralisé de réapprovisionnement automatique qui émet des commandes dès que les stocks passent sous des seuils définis.',
        metrics: 'Ruptures de stock réduites de 98%.'
      },
      inquiryTitle: 'Contactez Nos Spécialistes Distribution',
      namePlaceholder: 'Votre Nom',
      emailPlaceholder: 'Adresse E-mail',
      msgPlaceholder: 'Parlez-nous de vos besoins en logistique ou en gestion des stocks...',
      submitBtn: 'Envoyer une Demande',
      successMsg: 'Merci ! Notre équipe de distribution va vous recontacter très bientôt.'
    },
    'retail': {
      slug: 'retail',
      badge: 'Vente au Détail',
      title: 'Commerce Unifié & Vente au Détail',
      subtitle: 'Stocks omnicanaux, intégration des systèmes POS de caisse et fidélité client.',
      overview: 'Dstellar comble le fossé entre e-commerce et magasins physiques. Nous mettons en œuvre les plateformes standardisées SAP Retail pour fournir une visibilité en temps réel des stocks et de la fidélité client.',
      gradientClass: 'linear-gradient(135deg, #022c22 0%, #10b981 45%, #84cc16 100%)',
      themeColor: '#10b981',
      stats: [
        { value: '99.8%', label: 'Exactitude des Stocks en Temps Réel' },
        { value: '12M+', label: 'Profils de Fidélisation Synchronisés' },
        { value: '30%', label: 'Augmentation de la Rétention Client' }
      ],
      solutions: [
        { title: 'Stock de Commerce Unifié', desc: 'Suivez le stock en rayon, en arrière-boutique et les réserves web sur un grand livre central unique.', icon: 'shopping-bag' },
        { title: 'Moteur de Prix Dynamique', desc: 'Synchronisez les barèmes de prix, les coupons et les campagnes de promotion sur tous les canaux physiques et web.', icon: 'tag' },
        { title: 'Système POS Intégré', desc: 'Reliez vos caisses de points de vente aux modules SAP Finance pour des analyses de chiffre d\'affaires journalières.', icon: 'credit-card' }
      ],
      playbook: {
        tag: 'Croissance Retail',
        title: 'Synchronisation des Stocks en Direct',
        desc: 'Comment Dstellar a aidé une chaîne de magasins à synchroniser les stocks du site internet avec ceux des surfaces de vente physiques.',
        metrics: 'Erreurs de traitement logistique diminuées de 85%.'
      },
      inquiryTitle: 'Contactez Nos Spécialistes Vente au Détail',
      namePlaceholder: 'Votre Nom',
      emailPlaceholder: 'Adresse E-mail',
      msgPlaceholder: 'Décrivez vos enjeux de gestion de magasin ou de commerce électronique...',
      submitBtn: 'Envoyer le Message',
      successMsg: 'Merci ! Notre équipe commerce de détail reviendra vers vous très vite.'
    },
    'hotel-management': {
      slug: 'hotel-management',
      badge: 'Gestion Hôtelière',
      title: 'Gestion Hôtelière & Services Clients',
      subtitle: 'Moteurs de réservation, systèmes de gestion de propriété (PMS) et yield management.',
      overview: 'Dstellar conçoit des solutions intégrées qui relient les interfaces PMS destinées aux clients avec le cœur comptable. Nous optimisons la répartition des réservations, automatisons les achats et fluidifions la facturation.',
      gradientClass: 'linear-gradient(135deg, #1e1b4b 0%, #8b5cf6 45%, #d946ef 100%)',
      themeColor: '#8b5cf6',
      stats: [
        { value: '98%', label: 'Indice de Satisfaction des Clients' },
        { value: '15M+', label: 'Réservations Gérées par An' },
        { value: '18%', label: 'Augmentation du Revenu par Chambre' }
      ],
      solutions: [
        { title: 'ERP de Gestion Hôtelière PMS', desc: 'Intégrez les statuts de nettoyage des chambres, check-ins et frais des clients dans SAP Facturation.', icon: 'key' },
        { title: 'Moteur de Tarifs Dynamiques', desc: 'Déployez des règles de tarifs automatisées basées sur les tendances d\'occupation et le calendrier local.', icon: 'coffee' },
        { title: 'Opérations Intégrées', desc: 'Centralisez les flux d\'accueil, la facturation des restaurants et les réservations de spa sous un seul identifiant client.', icon: 'bed' }
      ],
      playbook: {
        tag: 'Modernisation Hôtelière',
        title: 'Gestion Unifiée de Complexes Touristiques',
        desc: 'Comment Dstellar a conçu un identifiant client unique qui centralise la facturation des chambres, bars et activités de 50 complexes hôteliers.',
        metrics: 'Erreurs de facturation ramenées à moins de 0,1%.'
      },
      inquiryTitle: 'Contactez Nos Spécialistes Hôtellerie',
      namePlaceholder: 'Votre Nom',
      emailPlaceholder: 'Adresse E-mail',
      msgPlaceholder: 'Parlez-nous de votre séjour ou de vos besoins de facturation...',
      submitBtn: 'Envoyer le Message',
      successMsg: 'Merci ! Notre équipe de gestion hôtelière vous contactera dans les plus brefs délais.'
    },
    'information-services': {
      slug: 'information-services',
      badge: 'Services d\'Information',
      title: 'Services de Données & d\'Information',
      subtitle: 'Valorisation des données, portails API haute performance et facturation récurrente.',
      overview: 'Dstellar aide les courtiers en données, agences de crédit et fournisseurs d\'information à monétiser leurs actifs numériques. Nous concevons des API d\'accès ultra-rapides et automatisons la comptabilité récurrente dans SAP.',
      gradientClass: 'linear-gradient(135deg, #0f172a 0%, #3b82f6 45%, #00d4c8 100%)',
      themeColor: '#3b82f6',
      stats: [
        { value: '10B+', label: 'Requêtes API Traitées par Jour' },
        { value: '99.999%', label: 'Fiabilité de la Distribution des Données' },
        { value: '40%', label: 'Réduction du Désabonnement' }
      ],
      solutions: [
        { title: 'Monétisation des APIs', desc: 'Suivez la consommation d\'API des développeurs et facturez à l\'usage réel avec SAP BRIM.', icon: 'database' },
        { title: 'Architecture Haute Performance', desc: 'Mettez à l\'échelle les caches et les index de recherche pour répondre à des millions d\'appels par seconde.', icon: 'server' },
        { title: 'Hub de Métadonnées Structurées', desc: 'Structurez les bases de données brutes, droits d\'accès et logs de requêtes sur SAP HANA.', icon: 'info' }
      ],
      playbook: {
        tag: 'Monétisation de Données',
        title: 'Facturation Automatisée de Scores de Crédit',
        desc: 'Comment Dstellar a relié l\'API de notation de crédit avec SAP BRIM, automatisant les prélèvements de 5 000 clients B2B.',
        metrics: 'Délai d\'émission des factures ramené de 5 jours à 2 minutes.'
      },
      inquiryTitle: 'Contactez Nos Spécialistes des Données',
      namePlaceholder: 'Votre Nom',
      emailPlaceholder: 'Adresse E-mail',
      msgPlaceholder: 'Parlez-nous de vos flux d\'intégration d\'API ou de valorisation de données...',
      submitBtn: 'Envoyer le Message',
      successMsg: 'Merci ! Notre équipe de services d\'information va vous recontacter rapidement.'
    },
    'public-services': {
      slug: 'public-services',
      badge: 'Services Publics',
      title: 'Services Publics & Action Sociale',
      subtitle: 'Soutien aux usagers, gestion des dossiers et programmes d\'aide civique.',
      overview: 'Dstellar donne aux municipalités et aux associations les moyens de gérer efficacement leurs programmes. Nous automatisons le suivi des dossiers, contrôlons les enveloppes d\'aide et assurons la conformité comptable.',
      gradientClass: 'linear-gradient(135deg, #030712 0%, #6366f1 45%, #4338ca 100%)',
      themeColor: '#6366f1',
      stats: [
        { value: '10M+', label: 'Citoyens Accompagnés' },
        { value: '100%', label: 'Conformité aux Audits Publics' },
        { value: '50%', label: 'Temps de Traitement des Dossiers Divisé par 2' }
      ],
      solutions: [
        { title: 'Portail des Services aux Citoyens', desc: 'Guichet en ligne Fiori pour permettre aux usagers de déposer leurs demandes d\'aides et de suivre l\'avancement.', icon: 'users' },
        { title: 'Gestion Budgétaire Publique', desc: 'Suivez les allocations de subventions et les dépenses dans SAP Funds Management.', icon: 'shield' },
        { title: 'Suivi des Dossiers Sociaux', desc: 'Assurez la coordination entre plusieurs administrations et le suivi des aides versées.', icon: 'briefcase' }
      ],
      playbook: {
        tag: 'Impact Social',
        title: 'Instruction Automatisée des Allocations',
        desc: 'Comment Dstellar a aidé une métropole à automatiser l\'instruction des demandes d\'aide, vérifiant les critères et émettant les virements.',
        metrics: 'Dossiers en attente de traitement réduits de 90%.'
      },
      inquiryTitle: 'Contactez Nos Spécialistes du Secteur Public',
      namePlaceholder: 'Votre Nom',
      emailPlaceholder: 'Adresse E-mail',
      msgPlaceholder: 'Parlez-nous de vos besoins de dématérialisation ou de gestion budgétaire...',
      submitBtn: 'Envoyer le Message',
      successMsg: 'Message envoyé. Nos équipes prendront contact avec vous.'
    },
    'education': {
      slug: 'education',
      badge: 'Éducation',
      title: 'Éducation & Gestion de Campus',
      subtitle: 'Cycle de vie des étudiants, admissions numériques et intégrations LMS.',
      overview: 'Dstellar conçoit des systèmes éducatifs évolutifs pour les universités et les réseaux d\'écoles. Nous déployons des systèmes d\'information sur les étudiants (SIS), automatisons la scolarité et lions le LMS avec la comptabilité.',
      gradientClass: 'linear-gradient(135deg, #2a0800 0%, #ea580c 45%, #eab308 100%)',
      themeColor: '#ea580c',
      stats: [
        { value: '250k+', label: 'Étudiants Actifs Gérés' },
        { value: '95%', label: 'Vitesse de Traitement des Admissions' },
        { value: '100%', label: 'Synchronisation des Données LMS' }
      ],
      solutions: [
        { title: 'ERP du Cycle de Vie Étudiant', desc: 'Gérérez le catalogue des cours, les inscriptions, les relevés de notes et les dossiers scolaires dans SAP Student Lifecycle.', icon: 'book' },
        { title: 'Automatisation Administrative', desc: 'Automatisez la facturation des frais de scolarité, les demandes de bourses et le suivi des comptes étudiants.', icon: 'award' },
        { title: 'Hub de Formation Unifié', desc: 'Intégrez des LMS comme Canvas et Moodle avec vos bases de données académiques et financières.', icon: 'compass' }
      ],
      playbook: {
        tag: 'Campus Cloud',
        title: 'Modernisation de l\'Enseignement Supérieur',
        desc: 'Comment Dstellar a migré le parc d\'applications d\'une université multi-campus vers un environnement SAP Cloud intégré unique.',
        metrics: 'Délais d\'inscription administrative réduits de 70%.'
      },
      inquiryTitle: 'Contactez Nos Spécialistes Éducation',
      namePlaceholder: 'Votre Nom',
      emailPlaceholder: 'Adresse E-mail',
      msgPlaceholder: 'Parlez-nous de vos besoins en dématérialisation ou en scolarité...',
      submitBtn: 'Envoyer le Message',
      successMsg: 'Message envoyé. Nos équipes reviendront vers vous.'
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
        { title: '公共調達・入札＆テンダー戦略', desc: '入札審査・調達フローの自動化に加え、企業パートナーが公的機関の入札（テンダー）で落札するための獲得戦略策定を支援します。', icon: 'document' }
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
    },
    'media-entertainment': {
      slug: 'media-entertainment',
      badge: 'メディア＆エンターテインメント',
      title: 'メディア＆コンテンツ収益化基盤',
      subtitle: 'デジタル著作権管理、リアルタイムでのロイヤリティ計算、オムニチャネル課金。',
      overview: 'デジタルアセットの価値チェーンを最適化し、複雑なライセンスロイヤリティ計算を合理化し、SAP BRIMを用いて大規模なサブスクリプション請求モデルを実行できるようメディア・娯楽企業を支援します。',
      gradientClass: 'linear-gradient(135deg, #180828 0%, #ec4899 45%, #e11d48 100%)',
      themeColor: '#ec4899',
      stats: [
        { value: '35%', label: 'ロイヤリティ処理の高速化' },
        { value: '25M+', label: '日次コンテンツ購読者数' },
        { value: '$2B+', label: '年間ロイヤリティ分配総額' }
      ],
      solutions: [
        { title: '著作権・ロイヤリティ監査', desc: 'IPライセンス契約、ロイヤリティの支払管理、および監査トレースの自動化をSAP BRIM内で実現します。', icon: 'film' },
        { title: 'サブスクリプション請求管理', desc: '何百万人もの動的デジタルコンテンツ購読者に対する請求・課金ロジックを高トランザクションで処理します。', icon: 'music' },
        { title: 'コンテンツ配信データ統合', desc: '世界中のストリーミング視聴データと財務システムを同期し、リアルタイムでの収益性分析を提供します。', icon: 'play' }
      ],
      playbook: {
        tag: '導入事例',
        title: 'ストリーミングロイヤリティ管理の刷新',
        desc: '日次1,000万件の再生イベントを処理する超高速な課金パイプラインを構築し、SAP総勘定元帳と統合したプロジェクト。',
        metrics: '分配金支払処理の正確性100%を達成。'
      },
      inquiryTitle: 'メディア専門チームへのご相談',
      namePlaceholder: 'お名前',
      emailPlaceholder: 'メールアドレス',
      msgPlaceholder: '著作権管理や課金システムのご要件についてご記入ください...',
      submitBtn: '問い合わせを送信する',
      successMsg: '送信しました。専任のメディア担当者よりご連絡いたします。'
    },
    'telecommunications': {
      slug: 'telecommunications',
      badge: '電気通信',
      title: '電気通信向けOSS/BSS統合・最適化',
      subtitle: '大規模な加入者請求処理、ネットワークインフラ管理、リアルタイムトラフィック分析。',
      overview: '通信コアネットワークの稼働状況と企業システムを強固に統合し、高トラフィックな通信課金データの処理、携帯基地局メンテナンスの最適化、解約予測モデルの運用を可能にします。',
      gradientClass: 'linear-gradient(135deg, #091e3a 0%, #06b6d4 45%, #3b82f6 100%)',
      themeColor: '#06b6d4',
      stats: [
        { value: '99.999%', label: 'コア課金システム稼働率' },
        { value: '50M+', label: '管理対象のアクティブ回線数' },
        { value: '15%', label: 'ネットワーク運用費用 (Opex) の削減' }
      ],
      solutions: [
        { title: '超大量トランザクション課金', desc: '音声通話、パケット通信、および付加価値サービスの課金データを直接SAP BRIMへ取り込み処理します。', icon: 'phone' },
        { title: 'ネットワーク資産管理', desc: '電波基地局、光ファイバー網、および関連ハードウェアの保守計画をSAP Plant Maintenance内で管理します。', icon: 'wifi' },
        { title: '回線解約アナリティクス', desc: '加入者の通信トラフィック推移や請求履歴に機械学習を適用し、解約予兆検知モデルを実行します。', icon: 'activity' }
      ],
      playbook: {
        tag: 'ネットワーク規模',
        title: '5Gネットワーク展開の業務システム統合',
        desc: '大手通信事業者向けに、設備投資計画 of 進捗と現地アンテナ基地局の敷設ワークフローを統合したプロジェクト。',
        metrics: '新規基地局の開通リードタイムを6ヶ月から6週間へ短縮。'
      },
      inquiryTitle: '電気通信専門チームへのご相談',
      namePlaceholder: 'お名前',
      emailPlaceholder: 'メールアドレス',
      msgPlaceholder: '課金トランザクションや設備管理のご要件についてご記入ください...',
      submitBtn: 'メッセージを送信する',
      successMsg: '送信しました。専任の電気通信IT担当よりご連絡いたします。'
    },
    'distribution-wholesale': {
      slug: 'distribution-wholesale',
      badge: '流通・卸売',
      title: '流通・卸売・サプライチェーン优化',
      subtitle: '現金化サイクル (Order-to-Cash) の加速、倉庫ロジスティクスのスマート化。',
      overview: '大規模なディストリビューター向けに、サプライチェーンロジスティクスと倉庫処理のスピードを最大化します。SAP EWM（拡張倉庫管理）と配送ネットワークを統合し、出荷業務のボトルネックを解消します。',
      gradientClass: 'linear-gradient(135deg, #1c1917 0%, #f59e0b 45%, #ea580c 100%)',
      themeColor: '#f59e0b',
      stats: [
        { value: '45%', label: '出荷リードタイム短縮率' },
        { value: '100k+', label: '日次最適化対象のSKU（アイテム数）' },
        { value: '22%', label: '在庫保管維持費の削減率' }
      ],
      solutions: [
        { title: '拡張倉庫オペレーション', desc: 'SAP EWM内の自動経路選定や3D棚割マップを活用し、ピッキングから発送までのシーケンスを最適化します。', icon: 'box' },
        { title: 'オムニチャネル受注フロー', desc: '各地域の卸販売先、代理店、および直販サイトからの注文データを一元化し、単一の勘定へ反映します。', icon: 'truck' },
        { title: 'サプライヤー協働ポータル', desc: '仕入先ベンダーとの購買発注処理や納期回答書のやり取りをシステム上で完全自動化します。', icon: 'archive' }
      ],
      playbook: {
        tag: '導入事例',
        title: 'グローバル自动补货ロジックの構築',
        desc: '安全在庫数を下回ったタイミングで、取引先ベンダーへの追加購買依頼を自動発行する在庫予測エンジンを実装。',
        metrics: '欠品在庫発生による販売機会損失を98%抑止。'
      },
      inquiryTitle: '流通・卸売専門チームへのご相談',
      namePlaceholder: 'お名前',
      emailPlaceholder: 'メールアドレス',
      msgPlaceholder: '倉庫管理や出荷システムのご要件についてご記入ください...',
      submitBtn: '問い合わせを送信する',
      successMsg: '送信しました。流通・卸売IT担当者よりご連絡いたします。'
    },
    'retail': {
      slug: 'retail',
      badge: '小売 (Retail)',
      title: 'オムニチャネル統一小売＆EC統合基盤',
      subtitle: '全チャネルでのリアルタイム在庫把握、POSレジ決済連携、ロイヤリティプログラム統合。',
      overview: '顧客向けのECサイトと実店舗の在庫管理のギャップを解消します。店舗の棚在庫、倉庫保管分、ネット予約引当分を一括同期し、すべての接点で高精度な在庫情報と会員情報を提供します。',
      gradientClass: 'linear-gradient(135deg, #022c22 0%, #10b981 45%, #84cc16 100%)',
      themeColor: '#10b981',
      stats: [
        { value: '99.8%', label: 'リアルタイム在庫データ精度' },
        { value: '12M+', label: '同期されている会員ロイヤリティアカウント数' },
        { value: '30%', label: 'ロイヤリティ会員の客単価・リピート率向上' }
      ],
      solutions: [
        { title: '統一オムニチャネル在庫', desc: '店頭在庫、バックヤード、およびWEB注文引当分を一元管理し、瞬時に勘定データへ反映します。', icon: 'shopping-bag' },
        { title: 'ダイナミック販売価格制御', desc: '全店舗およびオンラインストアでの価格設定、割引クーポン適用ルール、セール情報を同期します。', icon: 'tag' },
        { title: 'POSレジ会計のERP連動', desc: '店舗レジ（POSシステム）の売上トランザクションをSAP財務システムへ直結し、日次締めを自動化します。', icon: 'credit-card' }
      ],
      playbook: {
        tag: '店舗成長',
        title: '多店舗在庫の完全リアルタイム同期化',
        desc: '大手アパレル小売事業者向けに、EC受注と各都市の店舗在庫情報を完全に同期するERPコアモジュールを構築。',
        metrics: '在庫データの不一致に伴う未発送キャンセルを85%削減。'
      },
      inquiryTitle: '小売・コマース専門チームへのご相談',
      namePlaceholder: 'お名前',
      emailPlaceholder: 'メールアドレス',
      msgPlaceholder: '店舗システムやEC連携についてご記入ください...',
      submitBtn: '問い合わせを送信する',
      successMsg: '送信しました。弊社の小売IT担当よりご連絡いたします。'
    },
    'hotel-management': {
      slug: 'hotel-management',
      badge: 'ホテル管理',
      title: 'ホテル運営・客室管理システム',
      subtitle: 'リアルタイム客室予約エンジン、PMSレジ連携、ホテル稼働収益率の最大化。',
      overview: '顧客向けの客室管理（PMS）システムと基幹財務ERPシステムを連動させます。予約在庫の自動配置、ホテル内物資の自動調達、チェックアウト時のスピード請求をグローバルに最適化します。',
      gradientClass: 'linear-gradient(135deg, #1e1b4b 0%, #8b5cf6 45%, #d946ef 100%)',
      themeColor: '#8b5cf6',
      stats: [
        { value: '98%', label: '顧客満足度（CS）指数' },
        { value: '15M+', label: '処理される年間予約客室数' },
        { value: '18%', label: '部屋あたり収益 (RevPAR) の改善率' }
      ],
      solutions: [
        { title: 'Property Management ERP', desc: '清掃状況（メイク完了）、チェックイン、ルームチャージデータを直接SAP会計システムへ連携します。', icon: 'key' },
        { title: '宿泊価格・ダイナミック算出', desc: 'ホテル稼働傾向や地域の主要イベントカレンダーに基づき、客室の自動値決めロジックを走らせます。', icon: 'coffee' },
        { title: '統合ホテルサービス運営', desc: 'フロント業務、ホテル内料飲（F&B）掛売り、スパ予約の決済などを単一顧客カルテで管理します。', icon: 'bed' }
      ],
      playbook: {
        tag: '導入事例',
        title: '多拠点リゾートホテルの掛売りシステム統合',
        desc: '世界50箇所のリゾート内のすべてのレストラン、各種アクティビティ代金を部屋付け処理するための顧客 One-ID システムを設計。',
        metrics: '請求ミスの発生率を0.1%以下へ抑制。'
      },
      inquiryTitle: 'ホテル・観光IT専門チームへの相談',
      namePlaceholder: 'お名前',
      emailPlaceholder: 'メールアドレス',
      msgPlaceholder: '宿泊予約やホテル業務システムのご要件についてご記入ください...',
      submitBtn: 'メッセージを送信する',
      successMsg: '送信しました。ホスピタリティ担当チームより追ってご連絡いたします。'
    },
    'information-services': {
      slug: 'information-services',
      badge: '情報サービス',
      title: '情報サービス・データマネタイズ基盤',
      subtitle: 'データ資産のパッケージ販売、高スループットAPI配信、サブスク自動会計。',
      overview: 'データブローカーや信用情報機関が持つデジタルデータを商品化・マネタイズするのを支援します。高速なデータ参照APIレイヤーの構築や、SAPでのサブスク契約管理と継続課金を自動化します。',
      gradientClass: 'linear-gradient(135deg, #0f172a 0%, #3b82f6 45%, #00d4c8 100%)',
      themeColor: '#3b82f6',
      stats: [
        { value: '10B+', label: '日次APIアクセス処理件数' },
        { value: '99.999%', label: 'クエリ処理の高可用性' },
        { value: '40%', label: 'サブスクリプション継続率の向上' }
      ],
      solutions: [
        { title: 'API従量課金システム', desc: '開発者側のAPI呼び出しトランザクションをリアルタイム追跡し、SAP BRIMで従量課金を行います。', icon: 'database' },
        { title: '超高応答データ配信', desc: '秒間数百万件の同時問い合わせに対処できるよう、データキャッシュやインデックス分散配置を構築します。', icon: 'server' },
        { title: '構造化メタデータ・ハブ', desc: '生データレコード、クライアントのアクセス権限キー、問い合わせ履歴ログをSAP HANA内で安全に保持します。', icon: 'info' }
      ],
      playbook: {
        tag: '導入事例',
        title: 'グローバル信用情報APIの従量課金化',
        desc: '薬事審査やスコアリングのための各種データベース照合と、月次の請求書発行を自動化したプロジェクト。',
        metrics: '月次の請求書作成期間を5日間から2分間へ短縮。'
      },
      inquiryTitle: 'データマネタイズ専門チームへの相談',
      namePlaceholder: 'お名前',
      emailPlaceholder: 'メールアドレス',
      msgPlaceholder: 'API連携やサブスクリプション請求についてご記入ください...',
      submitBtn: 'メッセージを送信する',
      successMsg: '送信しました。データインフラ担当チームより追ってご連絡いたします。'
    },
    'public-services': {
      slug: 'public-services',
      badge: '公共サービス',
      title: '公共サービス・自治体業務システム',
      subtitle: '市民生活支援、各種申請管理、地域振興プログラム予算管理。',
      overview: '地方自治体や非営利団体向けに、効率的かつ透明性の高い公共福祉サービス運営をサポートします。住民申請の履歴追跡、特定福祉予算の適正な執行管理、公的監査への合致を支援します。',
      gradientClass: 'linear-gradient(135deg, #030712 0%, #6366f1 45%, #4338ca 100%)',
      themeColor: '#6366f1',
      stats: [
        { value: '10M+', label: 'サービス提供対象の市民数' },
        { value: '100%', label: '事業予算監査クリア実績' },
        { value: '50%', label: '相談窓口・受付業務処理期間の削減率' }
      ],
      solutions: [
        { title: '住民向け電子申請窓口', desc: '市民がオンラインで給付金や社会保障支援の申請、進捗追跡を行うためのセキュアなFioriポータルを構築します。', icon: 'users' },
        { title: '公的基金・予算管理 (FI-FM)', desc: '国・地方からの補助金交付状況、およびプログラム経費支出をSAP Funds Managementで監査トレースします。', icon: 'shield' },
        { title: '福祉ケース・業務管理ワークフロー', desc: '複数の行政・医療機関をまたぐ住民の相談ケース記録や、支援マイルストーンを統合データベース化します。', icon: 'briefcase' }
      ],
      playbook: {
        tag: '社会貢献',
        title: '住民給付金申請プロセスの自動化',
        desc: '地方政府向けに、受給資格情報のデータベース照合と、給付金送金指示を自動化するモジュールを設計。',
        metrics: '申请処理の滞留（バックログ）を90%解消。'
      },
      inquiryTitle: '公共・自治体専門チームへのご相談',
      namePlaceholder: 'お名前',
      emailPlaceholder: 'メールアドレス',
      msgPlaceholder: '窓口システムや公的資金管理についてご記入ください...',
      submitBtn: 'メッセージを送信する',
      successMsg: '送信しました。自治体公共ITアドバイザーより折り返しご連絡いたします。'
    },
    'education': {
      slug: 'education',
      badge: '教育',
      title: '教育機関・統合学務管理システム',
      subtitle: '在籍ライフサイクル追跡、デジタル入試選考、学習管理（LMS）データ同期。',
      overview: '大学や学校法人グループ向けに、拡張性の高い統合教育システムを構築します。学籍・成績情報管理、授業料等の出納・奨学金処理の自動化、CanvasやMoodleなどのLMSとのシームレス連携を実現します。',
      gradientClass: 'linear-gradient(135deg, #2a0800 0%, #ea580c 45%, #eab308 100%)',
      themeColor: '#ea580c',
      stats: [
        { value: '250k+', label: '管理対象のアクティブ学生数' },
        { value: '95%', label: '出願・選考処理の高速化率' },
        { value: '100%', label: 'LMSと学務DBの同期完了率' }
      ],
      solutions: [
        { title: '統合学務ライフサイクル (SLM)', desc: 'コースシラバス、履修登録、成績評価、学籍簿管理をSAP Student Lifecycleモジュールで運用します。', icon: 'book' },
        { title: '学費・会計業務の自動化', desc: '期別の授業料請求書のバッチ発行、各種奨学金枠の管理、学生個人口座の入金消込を自動化します。', icon: 'award' },
        { title: '学習ポータル (LMS) 連携', desc: 'CanvasやMoodleなどの外部学習管理システムと、バックエンドの学生マスタ・財務DBを相互同期します。', icon: 'compass' }
      ],
      playbook: {
        tag: '導入事例',
        title: 'マルチキャンパス大学のクラウド学務移行',
        desc: '複数拠点を持つ州立大学において、分散していた学籍データベースを統合されたSAP Cloud学務環境へ統合した事例。',
        metrics: '新学期の履修登録待ち時間を70%削減。'
      },
      inquiryTitle: '教育情報化チームへのご相談',
      namePlaceholder: 'お名前',
      emailPlaceholder: 'メールアドレス',
      msgPlaceholder: '学務システムやLMS連携のご要件についてご記入ください...',
      submitBtn: 'メッセージを送信する',
      successMsg: '送信しました。教育ITアドバイザーより追ってご連絡いたします。'
    }
  }
};
