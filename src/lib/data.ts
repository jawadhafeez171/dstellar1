// Real Dstellar content extracted from Content Dstellar.xlsx

export const DSTELLAR_DATA = {
  nav: [
    { label: 'Industries', children: ["Automotive","Consumer Products","Electronic & High Tech","Government & Public Sector","Media & Entertainment","Telecommunications","Distribution & Wholesale","Energy & Utilities","Manufacturing & Industrial","Retail","Hotel Management","Capital Markets","Life Sciences & Healthcare","Information Services","Public Services","Travel, Transport & Hospitality","Construction","Education"] },
    { label: 'Products', children: ['Custom Software Development','DSTELLAR ERP','DSTELLAR E-Commerce','DSTELLAR Healthcare Suite','DSTELLAR Logistics & Warehouse','DSTELLAR Sales & Accounting','Business Intelligence & Analytics','Mobile & Web Applications'] },
    { label: 'SAP Consulting', children: ['S/4HANA Implementations','Finance & Controlling (FICO)','Sales & Logistics (SD · MM · WM)','Production & Planning (PP)','SuccessFactors (HR)','ABAP & Fiori Custom Development','SAP Integration & API Suite','Ariba & Supply Chain Solutions'] },
    { label: 'Services & Support', children: ['Artificial Intelligence & ML','Cloud Migration & DevSecOps','Cybersecurity & Compliance','Digital Transformation','Technology Advisory Services','Premium Support & Managed AMS','Dstellar Help Portal'] },
    { label: 'Trainings', children: ['Dstellar Learning Hub','Certified SAP Courses','Dstellar Certification Prep','Education Partner Program','Free openDstellar Training'] },
    { label: 'Partners', children: ['Find a Partner','Strategic Partners','Become a Partner','Certified Solutions Directory','Outsourcing Partners'] },
    { label: 'Careers', children: ['Job Search & Openings','Students & Graduates','Your Career Path','Why Join Dstellar'] },
    { label: 'Community', children: ['Community Forum','Expert Blogs','Q&A and Forums','Events & Meetups','Resource Library'] },
    { label: 'Discover Dstellar', children: ['Who We Are','History','Leadership & Governance','Sustainability & CSR','Innovation & Research','Investor Relations','Sports Sponsorships'] },
    { label: 'Try & Buy', children: ['Free Software Trials','Training & Enablement Catalog','Dstellar Solutions Store'] },
  ],

  industries: [
    { name: 'Automotive', tag: 'Mfg', desc: 'Connected vehicles, dealer networks, plant ops.', image: '/assets/automotive.webp' },
    { name: 'Consumer Products', tag: 'CPG', desc: 'Demand sensing, trade promo, omni-channel.', image: '/assets/consumer_products.webp' },
    { name: 'Electronic & High Tech', tag: 'HT', desc: 'Fast product cycles, global supply chains.', image: '/assets/electronic_high_tech.webp' },
    { name: 'Government & Public Sector', tag: 'Gov', desc: 'Funds mgmt, procurement, citizen services.', image: '/assets/government_public_sector.webp' },
    { name: 'Media & Entertainment', tag: 'M&E', desc: 'Rights, royalties, content monetization.', image: '/assets/media_entertainment.webp' },
    { name: 'Telecommunications', tag: 'Tel', desc: 'Billing, OSS/BSS, subscriber analytics.', image: '/assets/telecommunications.webp' },
    { name: 'Distribution & Wholesale', tag: 'D&W', desc: 'Order-to-cash at scale, warehouse velocity.', image: '/assets/distribution_wholesale.webp' },
    { name: 'Energy & Utilities', tag: 'E&U', desc: 'SAP IS-U, asset mgmt, outage ops.', image: '/assets/energy_utilities.webp' },
    { name: 'Manufacturing & Industrial', tag: 'Ind', desc: 'Discrete & process manufacturing, PM.', image: '/assets/manufacturing_industrial.webp' },
    { name: 'Retail', tag: 'Rtl', desc: 'Unified commerce, store ops, inventory.', image: '/assets/retail.webp' },
    { name: 'Hotel Management', tag: 'Hos', desc: 'Reservations, revenue mgmt, guest ops.', image: '/assets/hotel_management.webp' },
    { name: 'Capital Markets', tag: 'Fin', desc: 'Trade lifecycle, risk, regulatory reporting.', image: '/assets/capital_markets.webp' },
    { name: 'Life Sciences & Healthcare', tag: 'LSH', desc: 'GxP, QM, batch, regulatory reporting.', image: '/assets/life_sciences_healthcare.webp' },
    { name: 'Information Services', tag: 'IS',  desc: 'Data products, subscription billing.', image: '/assets/information_services.webp' },
    { name: 'Public Services', tag: 'PS',  desc: 'Grant mgmt, SLAs, case management.', image: '/assets/public_services.webp' },
    { name: 'Travel, Transport & Hospitality', tag: 'TTH', desc: 'Fleet, loyalty, booking operations.', image: '/assets/travel_transport.webp' },
    { name: 'Construction', tag: 'Con', desc: 'Project costing, equipment, subcontractor ops.', image: '/assets/construction.webp' },
    { name: 'Education', tag: 'Edu', desc: 'Student lifecycle, admissions, LMS integration.', image: '/assets/education.webp' },
  ],

  products: [
    { group: 'Build', items: ['Software Development','Website Development','iOS / macOS Apps','Android Applications','QA & Testing','Database Management'] },
    { group: 'DSTELLAR Suite', items: ['DSTELLAR ERP','DSTELLAR Hospital Management','DSTELLAR Clinic Management','DSTELLAR Doctor Software','DSTELLAR Dental Software','DSTELLAR Pharmacy Management','DSTELLAR E-Commerce','DSTELLAR Hospitality Management','DSTELLAR Ticketing Tool'] },
    { group: 'Business Packages', items: ['Logistic Package','Sales Package','Accounting Package','Inventory Package','Payroll Package','Business Object','Educational Software'] },
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
    { t: 'SAP HANA / Cloud', d: 'Platform modernization and migration.' },
  ],

  servicesSupport: [
    { t: 'Artificial Intelligence', d: 'Joule, embedded ML, document intelligence.' },
    { t: 'Cloud Services', d: 'Migration, managed cloud, cost optimization.' },
    { t: 'Cybersecurity', d: 'GRC, SOD, identity, vulnerability management.' },
    { t: 'Digital Services', d: 'CX, commerce, Fiori, mobile experiences.' },
    { t: 'Sustainability', d: 'Green Ledger, emissions, circular supply chain.' },
    { t: 'Transformation & Innovation', d: 'Business-led reinvention on clean core.' },
    { t: 'Advisory', d: 'Roadmaps, audits, fractional architects.' },
    { t: 'Premium Engagements', d: 'High-touch programs for critical systems.' },
  ],

  stats: [
    { n: '19', l: 'industries served' },
    { n: '22+', l: 'DSTELLAR products' },
    { n: '40+', l: 'SAP modules delivered' },
    { n: '24×7', l: 'support coverage' },
  ],
};
