// Real Dstellar content extracted from Content Dstellar.xlsx

export const DSTELLAR_DATA = {
  nav: [
    { label: 'Industries', children: ['Automotive','Consumer Products','Electronic & High Tech','Government & Public Sector','Media & Entertainment','Telecoms','Distribution & Wholesale','Energy & Utilities','Manufacturing & Industrial','Retail','Hotel Management','Capital Markets','Communications, Media & Technology','Life Sciences & Healthcare','Public Services','Travel, Transportation & Hospitality','Construction','Education'] },
    { label: 'Products', children: ['Software Development','Website Development','iOS / macOS Apps','Android Applications','QA & Testing','Database Management','DSTELLAR ERP','DSTELLAR Dental Software','DSTELLAR Doctor Software','DSTELLAR Hospital Management','DSTELLAR Clinic Management','DSTELLAR Pharmacy Management','DSTELLAR E-Commerce','DSTELLAR Logistic Package','DSTELLAR Ticketing Tool','DSTELLAR Sales Package','DSTELLAR Accounting Package','DSTELLAR Inventory Package','DSTELLAR Payroll Package','DSTELLAR Hospitality Management','Educational Software','Business Object'] },
    { label: 'SAP Consulting', children: ['SAP Implementations & Support (ECC · S/4HANA · Cloud)','Finance & Controlling (FICO)','Sales & Distribution (SD)','Material Management (MM)','Production Planning (PP)','Human Resources (HR)','Logistics Execution (LE)','Project System (PS)','Investment Management (IM)','Central Finance','ABAP Development','Third-Party System Integration','India GST Automations','SAP HANA / Cloud','SAP S/4HANA','SAP Fiori','SAP Integration Suite','SAP Ariba Invoice Management','SAP Extended Warehouse Management','SAP Financial Closing Cockpit','SAP Treasury and Risk Management','SAP Transportation Resource Planning'] },
    { label: 'Services & Support', children: ['Artificial Intelligence','Business Services','Cloud Services','Cybersecurity Services','Digital Services','Intelligent Services','Sustainability Services','Technology Solutions','Transformation & Innovation','Advisory Services','Implementation Services','Support Services','Premium Engagements','Dstellar Help Portal'] },
    { label: 'Trainings', children: ['Dstellar Learning Journeys','Dstellar Certification','Dstellar Learning Hub','Free Training with openDstellar','Dstellar Education Partners','SAP Training Courses','User Adoption Solutions'] },
    { label: 'Partners', children: ['Find a Partner','Strategic Partners','Certified Solutions & Hardware','Outsourcing Partners','Dstellar Partner Finder','Dstellar Pinnacle Awards','Become a Partner'] },
    { label: 'Careers', children: ['Who We Are','Students & Recent Graduates','Your Career','Joining Dstellar','Job Search'] },
    { label: 'Community', children: ['Community Overview','Questions & Answers','Browse Topics','Blogs','Community Events','Community Programs','Community Resources'] },
    { label: 'Discover Dstellar', children: ['Who We Are','History','Investor Relations','Sports Sponsorships','Alliances & Partnerships','Corporate Sustainability','Corporate Social Responsibility','Leadership & Diversity','The Dstellar Way','Dstellar Research','Leadership','Diversity and Inclusion','Innovation','Quality'] },
    { label: 'Try & Buy', children: ['Free software trials','Get training and enablement','Solutions and services from Dstellar'] },
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
    { name: 'Education', tag: 'Edu', desc: 'Student lifecycle, admissions, LMS integration.' },
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
