"use client";

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { SERVICES_SUPPORT_TRANSLATIONS, ServiceSupportDetail } from '@/lib/servicesSupportTranslations';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// Custom Count-Up Counter Hook
function useCounter(targetStr: string, duration = 1.8) {
  const numMatch = targetStr.match(/(\d+)/);
  const target = numMatch ? parseInt(numMatch[1], 10) : 0;
  const suffix = targetStr.replace(/\d+/, '');
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || target === 0) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return { count: target === 0 ? targetStr : `${count}${suffix}`, ref };
}

// Stats Pill Component
function StatPill({ value, label }: { value: string; label: string }) {
  const { count, ref } = useCounter(value);
  return (
    <motion.div
      className="ser-stat-pill"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <span className="ser-stat-val" ref={ref}>
        {count}
      </span>
      <span className="ser-stat-lbl">{label}</span>
    </motion.div>
  );
}

// Particle System
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
}

function FloatingParticles({ color }: { color: string }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 3,
        duration: 6 + Math.random() * 10,
        delay: Math.random() * 5,
        drift: Math.random() > 0.5 ? 15 : -15,
      }))
    );
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="ser-particles-layer" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="ser-particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: color,
            borderRadius: '50%',
            boxShadow: `0 0 ${p.size * 3}px ${color}`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, p.drift, 0],
            opacity: [0, 0.6, 0],
            scale: [0.6, 1.2, 0.6],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// SVG Icons Component
function ServicesIcon({ type, color }: { type: string; color: string }) {
  const strokeProps = { stroke: color, strokeWidth: '2', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, fill: 'none' };
  switch (type) {
    case 'globe':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <circle cx="12" cy="12" r="10" {...strokeProps} />
          <line x1="2" y1="12" x2="22" y2="12" {...strokeProps} />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" {...strokeProps} />
        </svg>
      );
    case 'cpu':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2" {...strokeProps} />
          <rect x="9" y="9" width="6" height="6" {...strokeProps} />
          <line x1="9" y1="1" x2="9" y2="4" {...strokeProps} />
          <line x1="15" y1="1" x2="15" y2="4" {...strokeProps} />
          <line x1="9" y1="20" x2="9" y2="23" {...strokeProps} />
          <line x1="15" y1="20" x2="15" y2="23" {...strokeProps} />
          <line x1="20" y1="9" x2="23" y2="9" {...strokeProps} />
          <line x1="20" y1="15" x2="23" y2="15" {...strokeProps} />
          <line x1="1" y1="9" x2="4" y2="9" {...strokeProps} />
          <line x1="1" y1="15" x2="4" y2="15" {...strokeProps} />
        </svg>
      );
    case 'bolt':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" {...strokeProps} />
        </svg>
      );
    case 'database':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <ellipse cx="12" cy="5" rx="9" ry="3" {...strokeProps} />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" {...strokeProps} />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" {...strokeProps} />
        </svg>
      );
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" {...strokeProps} />
        </svg>
      );
    case 'grid':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <rect x="3" y="3" width="7" height="7" {...strokeProps} />
          <rect x="14" y="3" width="7" height="7" {...strokeProps} />
          <rect x="14" y="14" width="7" height="7" {...strokeProps} />
          <rect x="3" y="14" width="7" height="7" {...strokeProps} />
        </svg>
      );
    case 'exchange':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <polyline points="17 1 21 5 17 9" {...strokeProps} />
          <path d="M3 11V9a4 4 0 0 1 4-4h14" {...strokeProps} />
          <polyline points="7 23 3 19 7 15" {...strokeProps} />
          <path d="M21 13v2a4 4 0 0 1-4 4H3" {...strokeProps} />
        </svg>
      );
    case 'cogs':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <circle cx="12" cy="12" r="3" {...strokeProps} />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" {...strokeProps} />
        </svg>
      );
    case 'wrench':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 1 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" {...strokeProps} />
        </svg>
      );
    case 'user':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" {...strokeProps} />
          <circle cx="12" cy="7" r="4" {...strokeProps} />
        </svg>
      );
    case 'star':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" {...strokeProps} />
        </svg>
      );
    case 'lock':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" {...strokeProps} />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" {...strokeProps} />
        </svg>
      );
    case 'document':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" {...strokeProps} />
          <polyline points="14 2 14 8 20 8" {...strokeProps} />
          <line x1="16" y1="13" x2="8" y2="13" {...strokeProps} />
          <line x1="16" y1="17" x2="8" y2="17" {...strokeProps} />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <circle cx="12" cy="12" r="10" {...strokeProps} />
          <line x1="12" y1="16" x2="12" y2="12" {...strokeProps} />
          <line x1="12" y1="8" x2="12.01" y2="8" {...strokeProps} />
        </svg>
      );
  }
}

// Challenges Data mapper
const CHALLENGES_MAP: Record<string, { t: string; d: string }[]> = {
  'ai-ml': [
    { t: 'Model Hallucinations', d: 'Preventing erratic or false generation targets in automated workflows.' },
    { t: 'Integration Friction', d: 'Connecting disparate legacy tables with real-time vector embeddings.' },
    { t: 'Resource Scalability', d: 'Handling high concurrent request bounds during large transaction runs.' }
  ],
  'cloud-devsecops': [
    { t: 'Downtime Vulnerability', d: 'Keeping operations live during mass system conversion cutovers.' },
    { t: 'Hosting Overspend', d: 'Optimizing infrastructure instances to prevent billing leakage.' },
    { t: 'CI/CD Pipeline Security', d: 'Enforcing security scans at each release cycle of BTP extensions.' }
  ],
  'cybersecurity-compliance': [
    { t: 'Role Congestion', d: 'Resolving complex user group access conflicts under strict SOD rules.' },
    { t: 'Regulatory Audits', d: 'Adhering to shifting data privacy and compliance guidelines like GDPR or SOX.' },
    { t: 'Patch Negligence', d: 'Identifying and shielding configurations before vulnerabilities are exploited.' }
  ],
  'digital-transformation': [
    { t: 'Core Modifications', d: 'Extracting historical customized logic to return systems to standard codebases.' },
    { t: 'Data Incoherence', d: 'Linking multi-channel user storefronts with live inventory databases.' },
    { t: 'Organizational Lag', d: 'Accelerating crew onboarding when replacing manual paper pipelines.' }
  ],
  'technology-advisory': [
    { t: 'Misaligned Strategy', d: 'Preventing heavy software upgrades from drifting from core business targets.' },
    { t: 'Technical Debt Bloat', d: 'Pinpointing and pruning redundant customized programs.' },
    { t: 'Platform Ambiguity', d: 'Choosing optimal deployment paths between public, private, or hybrid cloud tiers.' }
  ],
  'premium-support-ams': [
    { t: 'Database Latency', d: 'Auditing index locks and memory leaks before they result in outages.' },
    { t: 'Queue Congestion', d: 'Reducing support backlogs through strict SLA incident routing.' },
    { t: 'Outdated Playbooks', d: 'Consolidating support procedures into easily executable automated scripts.' }
  ],
  'help-portal': [
    { t: 'Ticket Overhead', d: 'Decreasing simple troubleshooting queries through searchable user portals.' },
    { t: 'Documentation Gaps', d: 'Keeping configuration manuals updated across constant platform updates.' },
    { t: 'System Obscurity', d: 'Providing real-time transparency for incident resolution times.' }
  ]
};

// FAQ Data mapper
const FAQ_MAP: Record<string, { q: string; a: string }[]> = {
  'ai-ml': [
    { q: 'How does SAP Joule integrate with existing ERP workflows?', a: 'Joule connects using standard SAP BTP destination APIs, triggering secure transactions on behalf of users after natural language commands.' },
    { q: 'Is client business data used to train public models?', a: 'No. Dstellar AI architectures isolate all business contexts inside private tenants, ensuring zero data leakage to public models.' },
    { q: 'What accuracy SLA is guaranteed for document processing?', a: 'Our Intelligent Document Ingestion typically achieves over 95% accuracy out-of-the-box, scaling to 99%+ with active training.' }
  ],
  'cloud-devsecops': [
    { q: 'Which hyperscalers are supported for SAP migrations?', a: 'We support fully optimized migrations on AWS, Microsoft Azure, Google Cloud Platform, and SAP BTP.' },
    { q: 'How is system downtime managed during database migrations?', a: 'We utilize Near-Zero Downtime (NZDT) delta replication protocols, allowing normal operations until a brief final cutover window.' },
    { q: 'Does Dstellar support dynamic auto-scaling?', a: 'Yes. Application servers auto-scale based on runtime thresholds, while database cores utilize high-availability active-passive clusters.' }
  ],
  'cybersecurity-compliance': [
    { q: 'How is Segregation of Duties (SOD) audited?', a: 'We execute automated role mapping scripts that cross-reference access permissions to identify conflict pairs, building structured mitigation matrices.' },
    { q: 'Do your security setups comply with SOX and GDPR?', a: 'Yes. All implementations follow strict industry standards, passing GRC audit validations for global markets.' },
    { q: 'How frequently are vulnerability scans performed?', a: 'We configure weekly automated security health audits and real-time alerts for critical system logs.' }
  ],
  'digital-transformation': [
    { q: 'What does Clean Core mean in digital transformations?', a: 'It refers to separating custom code from the standard ERP core using API integrations on SAP BTP, allowing seamless system upgrades.' },
    { q: 'Can you link Shopify or Salesforce with SAP?', a: 'Absolutely. We integrate external channels using the SAP Integration Suite, syncing order records and stocks in real-time.' },
    { q: 'How is user adoption tracked during digitalization?', a: 'We embed digital adoption metrics directly into interfaces to audit usage, task durations, and help desk ticket rates.' }
  ],
  'technology-advisory': [
    { q: 'What does a Technical Debt Audit involve?', a: 'We run static code analyzers to identify custom codebase bloat, unused reports, and performance bottlenecks, mapping out a refactoring strategy.' },
    { q: 'How do you coordinate with our internal IT team?', a: 'Our fractional architects coordinate directly with your IT leadership, offering technical oversight during steerco planning.' },
    { q: 'Can you assist with software vendor negotiation?', a: 'Yes. We analyze your runtime usage statistics to recommend optimized software licensing models, cutting redundant catalog fees.' }
  ],
  'premium-support-ams': [
    { q: 'What are your standard SLA response times?', a: 'We offer response SLAs starting at 15 minutes for critical P1 outages, scaling up to 4 hours for standard questions.' },
    { q: 'Is support provided in multiple time zones?', a: 'Yes, Dstellar operates a Follow-the-Sun delivery model utilizing support hubs in Toronto, Madrid, and Singapore.' },
    { q: 'Do you offer preventative maintenance?', a: 'Yes. Our AMS contracts include weekly performance database tuning, log clearings, and preemptive memory audits.' }
  ],
  'help-portal': [
    { q: 'How do users authenticate into the Help Portal?', a: 'The portal integrates with your company\'s Single Sign-On (SSO) provider via SAML 2.0 or OpenID Connect.' },
    { q: 'Can we customize the documentation access roles?', a: 'Yes. Permissions can be mapped by business unit, allowing sensitive guides to be restricted to specific departments.' },
    { q: 'How do we request a new help article or configuration guide?', a: 'Users can submit content requests directly inside the portal, which are assigned to our lead training developers.' }
  ]
};

export default function ServicesClient({ slug }: { slug: string }) {
  const { language } = useLanguage();
  const router = useRouter();

  // Inquiry form states
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMsg, setUserMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // FAQ accordion state
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Fetch translation content
  const langKey = SERVICES_SUPPORT_TRANSLATIONS[language] ? language : 'en';
  const rawData: ServiceSupportDetail = SERVICES_SUPPORT_TRANSLATIONS[langKey][slug] || SERVICES_SUPPORT_TRANSLATIONS['en'][slug];

  // Override / bind design values
  const themeColor = rawData?.themeColor || '#2563eb'; // Default to tech blue
  const gradientClass = rawData?.gradientClass || `linear-gradient(135deg, #0f172a 0%, #1e40af 50%, ${themeColor} 100%)`;
  const data = rawData ? {
    ...rawData,
    themeColor,
    gradientClass
  } as ServiceSupportDetail & { themeColor: string; gradientClass: string } : null;

  useEffect(() => {
    if (data) {
      document.title = `${data.title} | Dstellar Services & Support`;
    }
  }, [data]);

  if (!data) {
    return (
      <>
        <TopBar />
        <main className="ser-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ color: '#0f172a', fontSize: '2rem', marginBottom: '16px' }}>Service Section Not Found</h1>
            <button className="ser-submit-btn" style={{ background: '#2563eb', padding: '12px 24px' }} onClick={() => router.push('/')}>Return Home</button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userEmail) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setUserName('');
      setUserEmail('');
      setUserMsg('');
    }, 1500);
  };

  // Challenges, timeline, and FAQ data
  const challenges = CHALLENGES_MAP[slug] || CHALLENGES_MAP['ai-ml'];
  const faqs = FAQ_MAP[slug] || FAQ_MAP['ai-ml'];

  const timelineSteps = [
    { title: 'Discovery & Landscape Audit', desc: 'We execute detailed scans of your databases, custom extensions, and security configurations.' },
    { title: 'Sandbox Execution & Testing', desc: 'Deploying secure sandboxes on SAP BTP or cloud servers to validate data integrations and workflows.' },
    { title: 'Cutover & Production Launch', desc: 'Deploying code using automation pipelines, supported by Near-Zero Downtime data replication.' },
    { title: '24/7 Managed AMS Support', desc: 'Transferring systems to our Follow-the-Sun support engineers with automated warning dashboards.' }
  ];

  const ecoSystems = [
    { name: 'SAP BTP', role: 'Business Technology Platform' },
    { name: 'AWS / Azure', role: 'Cloud Infrastructure' },
    { name: 'Kubernetes / Docker', role: 'DevOps Containers' },
    { name: 'SAP Integration Suite', role: 'Middleware Services' },
    { name: 'SAP Fiori / Next.js', role: 'User Interfaces' }
  ];

  const isPlaybookImgSpecial = ['ai-ml', 'cloud-devsecops', 'cybersecurity-compliance', 'digital-transformation'].includes(slug);
  const playbookBgUrl = isPlaybookImgSpecial ? `/assets/playbook_${slug}.png` : `/assets/ser_${slug}.png`;

  return (
    <>
      <TopBar />

      <main 
        className="ser-page"
        style={{
          '--ser-theme-color': data.themeColor,
          '--ser-theme-color-glow': `${data.themeColor}1a`,
          '--ser-theme-color-glow-hover': `${data.themeColor}30`,
          '--ser-theme-color-border': `${data.themeColor}33`,
          '--ser-theme-color-border-hover': `${data.themeColor}66`,
          '--ser-playbook-bg': `url('${playbookBgUrl}')`
        } as React.CSSProperties}
      >
        {/* Particle System Backdrop */}
        <div className="ser-bg" aria-hidden="true">
          <div className="ser-orb orb-primary" />
          <div className="ser-orb orb-secondary" />
          <div className="ser-orb orb-tertiary" />
          <div className="ser-grid" />
          <FloatingParticles color={data.themeColor} />
        </div>

        {/* HERO HEADER */}
        <section className="ser-hero">
          <div className="ser-inner">
            <div className="ser-hero-grid">
              <div className="ser-hero-content">
                <motion.div
                  className="ser-eyebrow"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="ser-eyebrow-dot" style={{ background: data.themeColor, boxShadow: `0 0 10px ${data.themeColor}` }} />
                  <span className="mono ser-eyebrow-txt" style={{ color: data.themeColor }}>{data.badge}</span>
                </motion.div>

                <motion.h1
                  className="ser-title"
                  style={{ backgroundImage: data.gradientClass }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {data.title}
                </motion.h1>

                <motion.p
                  className="ser-subtitle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {data.subtitle}
                </motion.p>

                <motion.div
                  className="ser-actions"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <button
                    className="ser-cta-primary"
                    style={{ background: data.themeColor }}
                    onClick={() => document.getElementById('services-inquiry-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Book Consultation
                  </button>
                  <button
                    className="ser-cta-ghost"
                    style={{ color: data.themeColor, borderColor: `${data.themeColor}30`, background: `${data.themeColor}05` }}
                    onClick={() => document.getElementById('capabilities-grid-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Explore Capabilities
                  </button>
                </motion.div>
              </div>

              {/* Graphic Illustration */}
              <motion.div
                className="ser-hero-image-wrap"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="ser-image-glow" style={{ background: `radial-gradient(circle, ${data.themeColor}15 0%, transparent 70%)` }} />
                <img
                  src={`/assets/ser_${data.slug}.png`}
                  alt={data.title}
                  className="ser-hero-img"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* STATS COUNT-UP */}
        <section className="ser-stats-section">
          <div className="ser-inner">
            <div className="ser-stats-grid">
              {data.stats.map((stat, idx) => (
                <StatPill key={idx} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>
        </section>

        {/* DETAILED OVERVIEW */}
        <section className="ser-overview-section">
          <div className="ser-inner">
            <motion.div
              className="ser-overview-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="ser-glow-bar" style={{ background: data.gradientClass }} />
              <p className="ser-overview-text">{data.overview}</p>
            </motion.div>
          </div>
        </section>

        {/* KEY CHALLENGES WE SOLVE */}
        <section className="ser-challenges-section">
          <div className="ser-inner">
            <h2 className="ser-section-heading">Key Challenges We Address</h2>
            <div className="ser-challenges-grid">
              {challenges.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="ser-challenge-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <span className="ser-challenge-num" style={{ color: data.themeColor, background: `${data.themeColor}12` }}>0{idx + 1}</span>
                  <h3 className="ser-challenge-title">{item.t}</h3>
                  <p className="ser-challenge-desc">{item.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CAPABILITIES SECTION */}
        <section className="ser-capabilities-section" id="capabilities-grid-section">
          <div className="ser-inner">
            <h2 className="ser-section-heading">Core Capabilities & Delivery</h2>
            <div className="ser-capabilities-grid">
              {data.capabilities.map((cap, idx) => (
                <motion.div
                  key={idx}
                  className="ser-cap-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  {/* Underlay Image (Triptych Composite Pattern) */}
                  <div 
                    className="ser-cap-banner-box"
                    style={{
                      backgroundImage: `url(/assets/ser_${slug}.png)`,
                      backgroundPosition: idx === 0 ? '0% 50%' : idx === 1 ? '50% 50%' : '100% 50%',
                    }}
                  />
                  
                  {/* Frosted and Accent Glow overlays */}
                  <div className="ser-cap-overlay" />
                  <div className="ser-cap-glow-overlay" style={{ background: `radial-gradient(circle at 50% 100%, var(--ser-theme-color-glow) 0%, transparent 60%)` }} />
                  
                  <div className="ser-cap-card-content">
                    <div className="ser-cap-icon-box" style={{ background: `${data.themeColor}12`, borderColor: `${data.themeColor}30` }}>
                      <ServicesIcon type={cap.icon} color={data.themeColor} />
                    </div>
                    <h3 className="ser-cap-title">{cap.title}</h3>
                    <p className="ser-cap-desc">{cap.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* IMPLEMENTATION ROADMAP */}
        <section className="ser-roadmap-section">
          <div className="ser-inner">
            <h2 className="ser-section-heading">The Dstellar Implementation Path</h2>
            <div className="ser-roadmap-timeline">
              <div className="timeline-line" style={{ background: `linear-gradient(180deg, ${data.themeColor} 0%, rgba(37,99,235,0.1) 100%)` }} />
              {timelineSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  className="timeline-item"
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                >
                  <div className="timeline-dot" style={{ backgroundColor: data.themeColor, boxShadow: `0 0 0 6px ${data.themeColor}20` }} />
                  <div className="timeline-content">
                    <span className="timeline-index mono" style={{ color: data.themeColor }}>Phase 0{idx + 1}</span>
                    <h3 className="timeline-title">{step.title}</h3>
                    <p className="timeline-desc">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNOLOGY INTEGRATION MATRIX */}
        <section className="ser-matrix-section">
          <div className="ser-inner">
            <h2 className="ser-section-heading">Our Integrated Technology Stack</h2>
            <div className="ser-matrix-grid">
              {ecoSystems.map((tech, idx) => (
                <motion.div
                  key={idx}
                  className="ser-matrix-card"
                  whileHover={{ scale: 1.03, borderColor: data.themeColor }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="ser-matrix-tag mono" style={{ color: data.themeColor }}>Integration Ready</span>
                  <h3 className="ser-matrix-name">{tech.name}</h3>
                  <p className="ser-matrix-role">{tech.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDY PLAYBOOK */}
        <section className="ser-playbook-section">
          <div className="ser-inner">
            <motion.div
              className="ser-playbook-card"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="ser-playbook-content">
                <span className="ser-playbook-tag" style={{ color: data.themeColor, borderColor: `${data.themeColor}40` }}>{data.playbook.tag}</span>
                <h3 className="ser-playbook-title">{data.playbook.title}</h3>
                <p className="ser-playbook-desc">{data.playbook.desc}</p>
                <div className="ser-playbook-divider" />
                <div className="ser-playbook-metrics">
                  <span className="metrics-label">Transformation Outcome:</span>
                  <strong className="metrics-value" style={{ color: data.themeColor }}>{data.playbook.metrics}</strong>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="ser-faq-section">
          <div className="ser-inner">
            <h2 className="ser-section-heading">Frequently Asked Questions</h2>
            <div className="ser-faq-list">
              {faqs.map((faq, idx) => (
                <div key={idx} className="ser-faq-item">
                  <button
                    className={`ser-faq-question ${activeFaq === idx ? 'active' : ''}`}
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  >
                    <span>{faq.q}</span>
                    <span className="ser-faq-icon">{activeFaq === idx ? '−' : '+'}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {activeFaq === idx && (
                      <motion.div
                        className="ser-faq-answer-wrap"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <p className="ser-faq-answer">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INQUIRY CONTACT FORM */}
        <section className="ser-form-section" id="services-inquiry-section">
          <div className="ser-inner">
            <motion.div
              className="ser-form-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="ser-form-heading">{data.inquiryTitle}</h3>

              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="inquiry-form"
                    onSubmit={handleFormSubmit}
                    className="ser-contact-form"
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="ser-form-field">
                      <label htmlFor="name">{data.namePlaceholder}</label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder={data.namePlaceholder}
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>

                    <div className="ser-form-field">
                      <label htmlFor="email">{data.emailPlaceholder}</label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder={data.emailPlaceholder}
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                      />
                    </div>

                    <div className="ser-form-field">
                      <label htmlFor="message">Project Scope Details</label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder={data.msgPlaceholder}
                        value={userMsg}
                        onChange={(e) => setUserMsg(e.target.value)}
                      />
                    </div>

                    <button type="submit" className="ser-submit-btn" style={{ background: data.themeColor }} disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="spinner" />
                      ) : (
                        data.submitBtn
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    className="ser-success-wrapper"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', damping: 12 }}
                  >
                    <div className="ser-checkmark-circle" style={{ borderColor: data.themeColor }}>
                      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke={data.themeColor} strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="ser-success-txt">{data.successMsg}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Styled JSX Global definitions */}
      <style jsx global>{`
        .ser-page {
          background: linear-gradient(135deg, #ffffff 0%, #f1f5f9 60%, #e2e8f0 100%) !important;
          color: #0f172a !important;
          min-height: 100vh;
          overflow: hidden;
          position: relative;
          font-family: var(--font-sans, 'Inter', sans-serif);
          padding-top: 100px;
          padding-bottom: 80px;
        }

        .ser-bg {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .ser-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
        }

        .orb-primary {
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.14) 0%, rgba(165, 180, 252, 0.04) 50%, transparent 70%);
          opacity: 0.85;
          top: -150px;
          left: -150px;
        }

        .orb-secondary {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.11) 0%, rgba(251, 207, 232, 0.03) 50%, transparent 70%);
          opacity: 0.85;
          bottom: -100px;
          right: -100px;
        }

        .orb-tertiary {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.09) 0%, rgba(207, 250, 254, 0.03) 50%, transparent 70%);
          opacity: 0.8;
          top: 35%;
          left: 25%;
        }

        .ser-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(37, 99, 235, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 99, 235, 0.015) 1px, transparent 1px) !important;
          background-size: 60px 60px;
        }

        .ser-particles-layer {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .ser-particle {
          position: absolute;
        }

        .ser-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }

        /* Hero Layout 2-Column */
        .ser-hero {
          padding-top: 90px;
          padding-bottom: 70px;
        }

        .ser-hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 48px;
          align-items: center;
        }

        .ser-hero-content {
          text-align: left;
        }

        .ser-hero-image-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ser-image-glow {
          position: absolute;
          inset: -30px;
          border-radius: 50%;
          filter: blur(40px);
          z-index: 0;
          pointer-events: none;
        }

        .ser-hero-img {
          max-width: 100%;
          height: auto;
          border-radius: 20px;
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.06);
          z-index: 1;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.5);
          animation: floatingFloat 6s ease-in-out infinite;
        }

        @keyframes floatingFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .ser-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 22px;
        }

        .ser-eyebrow-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .ser-eyebrow-txt {
          letter-spacing: 0.15em;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .ser-title {
          font-size: clamp(2.4rem, 4vw, 3.8rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin: 0 0 20px 0;
          background-size: 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ser-subtitle {
          font-size: 1.2rem;
          color: #475569 !important;
          line-height: 1.65;
          margin: 0 0 36px 0;
        }

        .ser-actions {
          display: flex;
          gap: 16px;
          justify-content: flex-start;
          flex-wrap: wrap;
        }

        .ser-cta-primary {
          color: #ffffff !important;
          border: none;
          padding: 14px 32px;
          border-radius: 100px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s;
        }

        .ser-cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px var(--ser-theme-color-glow-hover) !important;
        }

        .ser-cta-ghost {
          border: 1px solid;
          padding: 14px 32px;
          border-radius: 100px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .ser-cta-ghost:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.03);
        }

        /* Stats Section */
        .ser-stats-section {
          padding-top: 30px;
          padding-bottom: 40px;
        }

        .ser-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .ser-stat-pill {
          background: rgba(255, 255, 255, 0.45) !important;
          backdrop-filter: blur(18px) saturate(130%) !important;
          -webkit-backdrop-filter: blur(18px) saturate(130%) !important;
          border: 1px solid rgba(255, 255, 255, 0.5) !important;
          border-radius: 18px;
          padding: 26px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 6px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.02) !important;
          transition: all 0.3s ease;
        }

        .ser-stat-pill:hover {
          background: rgba(255, 255, 255, 0.6) !important;
          border-color: var(--ser-theme-color-border-hover) !important;
          transform: translateY(-4px);
          box-shadow: 0 15px 35px var(--ser-theme-color-glow) !important;
        }

        .ser-stat-val {
          font-size: 2.3rem;
          font-weight: 800;
          color: #0f172a !important;
        }

        .ser-stat-lbl {
          font-size: 0.8rem;
          color: #64748b !important;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 500;
        }

        /* Overview Section */
        .ser-overview-section {
          padding-top: 30px;
          padding-bottom: 40px;
        }

        .ser-overview-card {
          background: rgba(255, 255, 255, 0.45) !important;
          backdrop-filter: blur(18px) saturate(130%) !important;
          -webkit-backdrop-filter: blur(18px) saturate(130%) !important;
          border: 1px solid rgba(255, 255, 255, 0.5) !important;
          border-radius: 24px;
          padding: 40px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(15, 23, 42, 0.02) !important;
        }

        .ser-glow-bar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
        }

        .ser-overview-text {
          font-size: 1.3rem;
          color: #334155 !important;
          line-height: 1.75;
          margin: 0;
        }

        /* Challenges Section */
        .ser-challenges-section {
          padding-top: 40px;
          padding-bottom: 50px;
        }

        .ser-challenges-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .ser-challenge-card {
          background: rgba(255, 255, 255, 0.45) !important;
          backdrop-filter: blur(18px) saturate(130%) !important;
          -webkit-backdrop-filter: blur(18px) saturate(130%) !important;
          border: 1px solid rgba(255, 255, 255, 0.5) !important;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.02) !important;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          transition: all 0.3s ease;
        }

        .ser-challenge-card:hover {
          border-color: var(--ser-theme-color-border-hover) !important;
          background: rgba(255, 255, 255, 0.6) !important;
          box-shadow: 0 15px 35px var(--ser-theme-color-glow) !important;
        }

        .ser-challenge-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 8px;
        }

        .ser-challenge-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #0f172a !important;
          margin: 0;
        }

        .ser-challenge-desc {
          font-size: 0.92rem;
          color: #475569 !important;
          line-height: 1.55;
          margin: 0;
        }

        /* Capabilities Section */
        .ser-capabilities-section {
          padding-top: 40px;
          padding-bottom: 50px;
        }

        .ser-section-heading {
          font-size: 1.9rem;
          font-weight: 800;
          margin: 0 0 36px 0;
          text-align: center;
          letter-spacing: -0.02em;
          color: #0f172a !important;
        }

        .ser-capabilities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .ser-cap-card {
          position: relative;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.45) !important;
          backdrop-filter: blur(18px) saturate(130%) !important;
          -webkit-backdrop-filter: blur(18px) saturate(130%) !important;
          border: 1px solid rgba(255, 255, 255, 0.5) !important;
          border-radius: 20px;
          padding: 0 !important;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.02) !important;
        }

        .ser-cap-banner-box {
          position: absolute;
          inset: 0;
          background-size: 300% 100%;
          background-repeat: no-repeat;
          opacity: 0.12;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s;
          z-index: 0;
        }

        .ser-cap-card:hover .ser-cap-banner-box {
          transform: scale(1.08);
          opacity: 0.22;
        }

        .ser-cap-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.95));
          z-index: 1;
        }

        .ser-cap-glow-overlay {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 2;
        }

        .ser-cap-card:hover .ser-cap-glow-overlay {
          opacity: 1;
        }

        .ser-cap-card-content {
          position: relative;
          z-index: 3;
          padding: 36px 30px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .ser-cap-card:hover {
          background: rgba(255, 255, 255, 0.6) !important;
          border-color: var(--ser-theme-color-border-hover) !important;
          transform: translateY(-5px);
          box-shadow: 0 15px 35px var(--ser-theme-color-glow-hover) !important;
        }

        .ser-cap-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .ser-cap-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0 0 12px 0;
          color: #0f172a !important;
        }

        .ser-cap-desc {
          font-size: 0.92rem;
          color: #475569 !important;
          line-height: 1.55;
          margin: 0;
        }

        /* Roadmap Timeline */
        .ser-roadmap-section {
          padding-top: 40px;
          padding-bottom: 50px;
        }

        .ser-roadmap-timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: 20px 0;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 0;
          bottom: 0;
          width: 2px;
          z-index: 0;
        }

        .timeline-item {
          display: flex;
          justify-content: flex-end;
          padding-left: 30px;
          margin-bottom: 40px;
          position: relative;
          width: 50%;
        }

        .timeline-item:nth-child(even) {
          align-self: flex-end;
          justify-content: flex-start;
          padding-left: 0;
          padding-right: 30px;
          left: 50%;
        }

        .timeline-dot {
          position: absolute;
          right: -8px;
          top: 10px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          z-index: 2;
        }

        .timeline-item:nth-child(even) .timeline-dot {
          left: -8px;
          right: auto;
        }

        .timeline-content {
          background: rgba(255, 255, 255, 0.45) !important;
          backdrop-filter: blur(18px) saturate(130%) !important;
          -webkit-backdrop-filter: blur(18px) saturate(130%) !important;
          border: 1px solid rgba(255, 255, 255, 0.5) !important;
          border-radius: 16px;
          padding: 24px;
          width: 100%;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.02) !important;
          transition: all 0.3s ease;
        }

        .timeline-content:hover {
          background: rgba(255, 255, 255, 0.6) !important;
          border-color: var(--ser-theme-color-border-hover) !important;
          box-shadow: 0 15px 30px var(--ser-theme-color-glow) !important;
        }

        .timeline-index {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 6px;
          display: block;
        }

        .timeline-title {
          font-size: 1.15rem;
          font-weight: 750;
          color: #0f172a;
          margin: 0 0 10px 0;
        }

        .timeline-desc {
          font-size: 0.9rem;
          color: #475569;
          line-height: 1.5;
          margin: 0;
        }

        /* Tech Matrix */
        .ser-matrix-section {
          padding-top: 40px;
          padding-bottom: 50px;
        }

        .ser-matrix-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }

        .ser-matrix-card {
          background: rgba(255, 255, 255, 0.45) !important;
          backdrop-filter: blur(18px) saturate(130%) !important;
          -webkit-backdrop-filter: blur(18px) saturate(130%) !important;
          border: 1px solid rgba(255, 255, 255, 0.5) !important;
          border-radius: 16px;
          padding: 24px;
          text-align: center;
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.01) !important;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 140px;
        }

        .ser-matrix-card:hover {
          background: rgba(255, 255, 255, 0.6) !important;
          border-color: var(--ser-theme-color) !important;
          box-shadow: 0 15px 30px var(--ser-theme-color-glow) !important;
          transform: translateY(-2px);
        }

        .ser-matrix-tag {
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 12px;
        }

        .ser-matrix-name {
          font-size: 1.1rem;
          font-weight: 750;
          color: #0f172a;
          margin: 0 0 6px 0;
        }

        .ser-matrix-role {
          font-size: 0.78rem;
          color: #64748b;
          line-height: 1.35;
          margin: 0;
        }

        /* Playbook Section */
        .ser-playbook-section {
          padding-top: 40px;
          padding-bottom: 50px;
        }

        .ser-playbook-card {
          background: rgba(255, 255, 255, 0.45) !important;
          backdrop-filter: blur(18px) saturate(130%) !important;
          -webkit-backdrop-filter: blur(18px) saturate(130%) !important;
          border: 1px solid rgba(255, 255, 255, 0.5) !important;
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 15px 40px rgba(15, 23, 42, 0.02) !important;
          transition: border-color 0.3s ease;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .ser-playbook-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.96) 100%), var(--ser-playbook-bg);
          background-size: cover !important;
          background-position: center !important;
          z-index: -1;
          transition: transform 0.6s ease, opacity 0.6s ease;
          opacity: 0.55;
        }

        .ser-playbook-card:hover {
          border-color: var(--ser-theme-color-border-hover) !important;
        }

        .ser-playbook-card:hover::before {
          transform: scale(1.05);
          opacity: 0.8;
        }

        .ser-playbook-tag {
          font-size: 0.72rem;
          font-weight: 750;
          text-transform: uppercase;
          border: 1px solid;
          padding: 3px 8px;
          border-radius: 6px;
          display: inline-block;
          margin-bottom: 18px;
          letter-spacing: 0.05em;
        }

        .ser-playbook-title {
          font-size: 1.6rem;
          font-weight: 800;
          margin: 0 0 12px 0;
          color: #0f172a !important;
        }

        .ser-playbook-desc {
          font-size: 1.05rem;
          color: #334155 !important;
          line-height: 1.65;
          margin: 0 0 26px 0;
        }

        .ser-playbook-divider {
          height: 1px;
          background: rgba(37, 99, 235, 0.1) !important;
          margin-bottom: 24px;
        }

        .ser-playbook-metrics {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.98rem;
        }

        .ser-playbook-metrics .metrics-label {
          color: #475569 !important;
        }

        .ser-playbook-metrics .metrics-value {
          font-weight: 700;
        }

        /* FAQ Accordion Section */
        .ser-faq-section {
          padding-top: 40px;
          padding-bottom: 50px;
        }

        .ser-faq-list {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .ser-faq-item {
          background: rgba(255, 255, 255, 0.45) !important;
          backdrop-filter: blur(18px) saturate(130%) !important;
          -webkit-backdrop-filter: blur(18px) saturate(130%) !important;
          border: 1px solid rgba(255, 255, 255, 0.5) !important;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(15, 23, 42, 0.01) !important;
          transition: all 0.3s ease;
        }

        .ser-faq-item:hover {
          border-color: var(--ser-theme-color-border-hover) !important;
        }

        .ser-faq-question {
          width: 100%;
          background: transparent;
          border: none;
          padding: 22px 28px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.05rem;
          font-weight: 700;
          color: #0f172a;
          text-align: left;
          cursor: pointer;
          font-family: inherit;
          transition: color 0.2s;
        }

        .ser-faq-question:hover,
        .ser-faq-question.active {
          color: var(--ser-theme-color) !important;
        }

        .ser-faq-icon {
          font-size: 1.4rem;
          line-height: 1;
          color: #64748b;
          user-select: none;
        }

        .ser-faq-answer-wrap {
          overflow: hidden;
        }

        .ser-faq-answer {
          padding: 0 28px 22px 28px;
          margin: 0;
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.6;
        }

        /* Contact Form */
        .ser-form-section {
          padding-top: 50px;
          padding-bottom: 70px;
        }

        .ser-form-card {
          max-width: 600px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.45) !important;
          backdrop-filter: blur(18px) saturate(130%) !important;
          -webkit-backdrop-filter: blur(18px) saturate(130%) !important;
          border: 1px solid rgba(255, 255, 255, 0.5) !important;
          border-radius: 24px;
          padding: 45px;
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.03) !important;
        }

        .ser-form-heading {
          font-size: 1.4rem;
          font-weight: 700;
          margin: 0 0 32px 0;
          text-align: center;
          color: #0f172a !important;
        }

        .ser-contact-form {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .ser-form-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .ser-form-field label {
          font-size: 0.78rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--ser-theme-color) !important;
        }

        .ser-form-field input,
        .ser-form-field textarea {
          background: rgba(255, 255, 255, 0.6) !important;
          border: 1px solid rgba(255, 255, 255, 0.5) !important;
          border-radius: 8px;
          padding: 12px;
          color: #0f172a !important;
          font-family: inherit;
          font-size: 0.92rem;
          transition: border-color 0.2s, background-color 0.2s;
        }

        .ser-form-field input:focus,
        .ser-form-field textarea:focus {
          outline: none;
          border-color: var(--ser-theme-color) !important;
          background: #ffffff !important;
          box-shadow: 0 0 0 2px var(--ser-theme-color-glow) !important;
        }

        .ser-form-field input::placeholder,
        .ser-form-field textarea::placeholder {
          color: rgba(71, 85, 105, 0.5) !important;
        }

        .ser-submit-btn {
          color: #ffffff !important;
          border: none;
          padding: 12px;
          border-radius: 8px;
          font-size: 0.98rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s;
        }

        .ser-submit-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 15px rgba(37, 99, 235, 0.2) !important;
        }

        .ser-submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Success elements */
        .ser-success-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 20px 0;
        }

        .ser-checkmark-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 2.5px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .ser-success-txt {
          font-size: 1.05rem;
          line-height: 1.5;
          color: #0f172a !important;
          margin: 0;
          font-weight: 500;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2.5px solid rgba(255, 255, 255, 0.2) !important;
          border-top-color: #ffffff !important;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Responsive Layouts */
        @media (max-width: 968px) {
          .ser-hero-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .ser-hero-content {
            text-align: center;
          }

          .ser-actions {
            justify-content: center;
          }

          .ser-stats-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .ser-challenges-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .ser-capabilities-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .ser-matrix-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .ser-roadmap-timeline {
            padding: 10px 0;
          }

          .timeline-line {
            left: 20px;
          }

          .timeline-item {
            width: 100%;
            padding-left: 45px;
            padding-right: 0;
            justify-content: flex-start;
          }

          .timeline-item:nth-child(even) {
            left: 0;
            padding-left: 45px;
            padding-right: 0;
            justify-content: flex-start;
          }

          .timeline-dot {
            left: 12px !important;
            right: auto !important;
          }
        }

        @media (max-width: 480px) {
          .ser-matrix-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
