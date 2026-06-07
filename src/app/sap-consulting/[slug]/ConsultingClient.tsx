"use client";

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { CONSULTING_TRANSLATIONS, ConsultingDetail } from '@/lib/sapConsultingTranslations';
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
      className="con-stat-pill"
      whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.2)' }}
      transition={{ duration: 0.2 }}
    >
      <span className="con-stat-val" ref={ref}>
        {count}
      </span>
      <span className="con-stat-lbl">{label}</span>
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
    <div className="con-particles-layer" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="con-particle"
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
function ConsultingIcon({ type, color }: { type: string; color: string }) {
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
    case 'currency':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <line x1="12" y1="1" x2="12" y2="23" {...strokeProps} />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" {...strokeProps} />
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

// Asset mappings for SAP Consulting pages
const CONSULTING_ASSETS_MAP: Record<string, { capabilitiesBg: string; playbookBg: string }> = {
  s4hana: {
    capabilitiesBg: '/assets/green_ledger_dashboard.png',
    playbookBg: '/assets/green_ledger_dashboard.png',
  },
  fico: {
    capabilitiesBg: '/assets/solutions/sol_capital-markets.png',
    playbookBg: '/assets/ind_capital-markets.png',
  },
  logistics: {
    capabilitiesBg: '/assets/solutions/sol_consumer-products.png',
    playbookBg: '/assets/ind_consumer-products.png',
  },
  production: {
    capabilitiesBg: '/assets/solutions/sol_manufacturing-industrial.png',
    playbookBg: '/assets/ind_manufacturing-industrial.png',
  },
  successfactors: {
    capabilitiesBg: '/assets/discover_val_client.png',
    playbookBg: '/assets/why_join_culture.png',
  },
  'abap-fiori': {
    capabilitiesBg: '/assets/discover_val_tech.png',
    playbookBg: '/assets/discover_val_tech.png',
  },
  integration: {
    capabilitiesBg: '/assets/discover_vision.png',
    playbookBg: '/assets/discover_vision.png',
  },
  'ariba-supply-chain': {
    capabilitiesBg: '/assets/solutions/sol_construction.png',
    playbookBg: '/assets/ind_construction.png',
  },
};

export default function ConsultingClient({ slug }: { slug: string }) {
  const { language } = useLanguage();
  const router = useRouter();

  // Inquiry form states
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMsg, setUserMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Fetch translation content
  const langKey = CONSULTING_TRANSLATIONS[language] ? language : 'en';
  const assets = CONSULTING_ASSETS_MAP[slug] || {
    capabilitiesBg: '/assets/discover_who_we_are.png',
    playbookBg: '/assets/why_join_culture.png',
  };
  const rawData: ConsultingDetail = CONSULTING_TRANSLATIONS[langKey][slug] || CONSULTING_TRANSLATIONS['en'][slug];

  // Override design to match the Careers Job Search page color palette
  const themeColor = '#f59e0b'; // Amber accent
  const gradientClass = 'linear-gradient(135deg, #1a1a1a 0%, #92400e 50%, #d97706 100%)'; // Espresso/Dark to Amber/Gold
  const data: ConsultingDetail = rawData ? {
    ...rawData,
    themeColor,
    gradientClass
  } : rawData;

  useEffect(() => {
    if (data) {
      document.title = `${data.title} | Dstellar SAP Consulting`;
    }
  }, [data]);

  if (!data) {
    return (
      <>
        <TopBar />
        <main className="con-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ color: '#1a1a1a', fontSize: '2rem', marginBottom: '16px' }}>Service Section Not Found</h1>
            <button className="con-submit-btn" style={{ background: '#f59e0b', padding: '12px 24px' }} onClick={() => router.push('/')}>Return Home</button>
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

  return (
    <>
      <TopBar />

      <main className="con-page">
        {/* Particle System Backdrop */}
        <div className="con-bg" aria-hidden="true">
          <div className="con-orb orb-primary" style={{ background: `radial-gradient(circle, rgba(245, 158, 11, 0.07) 0%, transparent 70%)` }} />
          <div className="con-orb orb-secondary" style={{ background: `radial-gradient(circle, rgba(220, 111, 26, 0.06) 0%, transparent 70%)` }} />
          <div className="con-grid" />
          <FloatingParticles color="#f59e0b" />
        </div>

        {/* HERO HEADER */}
        <section className="con-hero">
          <div className="con-inner">
            <div className="con-hero-content">
              <motion.div
                className="con-eyebrow"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="con-eyebrow-dot" style={{ background: data.themeColor, boxShadow: `0 0 10px ${data.themeColor}` }} />
                <span className="mono con-eyebrow-txt">{data.badge}</span>
              </motion.div>

              <motion.h1
                className="con-title"
                style={{ backgroundImage: data.gradientClass }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {data.title}
              </motion.h1>

              <motion.p
                className="con-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {data.subtitle}
              </motion.p>

              <motion.div
                className="con-actions"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <button
                  className="con-cta-primary"
                  style={{ background: data.themeColor }}
                  onClick={() => document.getElementById('consulting-inquiry-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book Assessment
                </button>
                <button
                  className="con-cta-ghost"
                  onClick={() => document.getElementById('capabilities-grid-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Capabilities
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* STATS COUNT-UP */}
        <section className="con-stats-section">
          <div className="con-inner">
            <div className="con-stats-grid">
              {data.stats.map((stat, idx) => (
                <StatPill key={idx} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>
        </section>

        {/* DETAILED OVERVIEW */}
        <section className="con-overview-section">
          <div className="con-inner">
            <motion.div
              className="con-overview-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="con-glow-bar" style={{ background: data.gradientClass }} />
              <p className="con-overview-text">{data.overview}</p>
            </motion.div>
          </div>
        </section>

        {/* CAPABILITIES SECTION */}
        <section className="con-capabilities-section" id="capabilities-grid-section">
          <div className="con-inner">
            <h2 className="con-section-heading">Core Capabilities & Delivery</h2>
            <div className="con-capabilities-grid">
              {data.capabilities.map((cap, idx) => (
                <motion.div
                  key={idx}
                  className="con-cap-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  {/* Underlay Image (Triptych Composite Pattern) */}
                  <div 
                    className="con-cap-banner-box"
                    style={{
                      backgroundImage: `url(${assets.capabilitiesBg})`,
                      backgroundPosition: idx === 0 ? '0% 50%' : idx === 1 ? '50% 50%' : '100% 50%',
                    }}
                  />
                  
                  {/* Frosted and Gold Glow overlays */}
                  <div className="con-cap-overlay" />
                  <div className="con-cap-glow-overlay" style={{ background: `radial-gradient(circle at 50% 100%, ${data.themeColor}1a 0%, transparent 60%)` }} />
                  
                  <div className="con-cap-card-content">
                    <div className="con-cap-icon-box" style={{ background: `${data.themeColor}12`, borderColor: `${data.themeColor}30` }}>
                      <ConsultingIcon type={cap.icon} color={data.themeColor} />
                    </div>
                    <h3 className="con-cap-title">{cap.title}</h3>
                    <p className="con-cap-desc">{cap.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDY PLAYBOOK */}
        <section className="con-playbook-section">
          <div className="con-inner">
            <motion.div
              className="con-playbook-card"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                backgroundImage: `url(${assets.playbookBg})`,
              }}
            >
              <div className="con-playbook-wash-overlay" />
              <div className="con-playbook-content">
                <span className="con-playbook-tag" style={{ color: data.themeColor, borderColor: `${data.themeColor}40` }}>{data.playbook.tag}</span>
                <h3 className="con-playbook-title">{data.playbook.title}</h3>
                <p className="con-playbook-desc">{data.playbook.desc}</p>
                <div className="con-playbook-divider" />
                <div className="con-playbook-metrics">
                  <span className="metrics-label">Transformation Outcome:</span>
                  <strong className="metrics-value" style={{ color: data.themeColor }}>{data.playbook.metrics}</strong>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* INQUIRY CONTACT FORM */}
        <section className="con-form-section" id="consulting-inquiry-section">
          <div className="con-inner">
            <motion.div
              className="con-form-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="con-form-heading">{data.inquiryTitle}</h3>

              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="inquiry-form"
                    onSubmit={handleFormSubmit}
                    className="con-contact-form"
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="con-form-field">
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

                    <div className="con-form-field">
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

                    <div className="con-form-field">
                      <label htmlFor="message">Project Scope Details</label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder={data.msgPlaceholder}
                        value={userMsg}
                        onChange={(e) => setUserMsg(e.target.value)}
                      />
                    </div>

                    <button type="submit" className="con-submit-btn" style={{ background: data.themeColor }} disabled={isSubmitting}>
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
                    className="con-success-wrapper"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', damping: 12 }}
                  >
                    <div className="con-checkmark-circle" style={{ borderColor: data.themeColor }}>
                      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke={data.themeColor} strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="con-success-txt">{data.successMsg}</p>
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
        .con-page {
          background: linear-gradient(135deg, #ffffff 0%, #fdfaf6 55%, #faf7f2 100%) !important;
          color: #1a1a1a !important;
          min-height: 100vh;
          overflow: hidden;
          position: relative;
          font-family: var(--font-sans, 'Inter', sans-serif);
          padding-top: 100px;
          padding-bottom: 80px;
        }

        .con-bg {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .con-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(130px);
        }

        .orb-primary {
          width: 700px;
          height: 700px;
          opacity: 0.07;
          top: -200px;
          left: -150px;
        }

        .orb-secondary {
          width: 600px;
          height: 600px;
          opacity: 0.06;
          bottom: -100px;
          right: -100px;
        }

        .con-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px) !important;
          background-size: 60px 60px;
        }

        .con-particles-layer {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .con-particle {
          position: absolute;
        }

        .con-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }

        /* Hero */
        .con-hero {
          padding-top: 90px;
          padding-bottom: 70px;
          text-align: center;
        }

        .con-hero-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .con-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 22px;
        }

        .con-eyebrow-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .con-eyebrow-txt {
          color: #b45309 !important;
          letter-spacing: 0.15em;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .con-title {
          font-size: clamp(2.4rem, 4.5vw, 4rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin: 0 0 20px 0;
          background-size: 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .con-subtitle {
          font-size: 1.2rem;
          color: rgba(60, 40, 10, 0.65) !important;
          line-height: 1.65;
          margin: 0 0 36px 0;
        }

        .con-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .con-cta-primary {
          color: #ffffff !important;
          border: none;
          padding: 14px 32px;
          border-radius: 100px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s;
        }

        .con-cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(245, 158, 11, 0.25) !important;
        }

        .con-cta-ghost {
          background: rgba(245, 158, 11, 0.02) !important;
          color: #b45309 !important;
          border: 1px solid rgba(245, 158, 11, 0.2) !important;
          padding: 14px 32px;
          border-radius: 100px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .con-cta-ghost:hover {
          background: rgba(245, 158, 11, 0.06) !important;
          border-color: rgba(245, 158, 11, 0.4) !important;
        }

        /* Stats */
        .con-stats-section {
          padding-top: 30px;
          padding-bottom: 40px;
        }

        .con-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .con-stat-pill {
          background: #ffffff !important;
          border: 1px solid rgba(245, 158, 11, 0.1) !important;
          backdrop-filter: blur(8px);
          border-radius: 18px;
          padding: 26px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 6px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02) !important;
          transition: all 0.2s ease;
        }

        .con-stat-pill:hover {
          background: #fffdf7 !important;
          border-color: rgba(245, 158, 11, 0.4) !important;
          box-shadow: 0 15px 35px rgba(245, 158, 11, 0.06) !important;
        }

        .con-stat-val {
          font-size: 2.3rem;
          font-weight: 800;
          color: #1a1a1a !important;
        }

        .con-stat-lbl {
          font-size: 0.8rem;
          color: #b45309 !important;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 500;
        }

        /* Overview */
        .con-overview-section {
          padding-top: 30px;
          padding-bottom: 50px;
        }

        .con-overview-card {
          background: #ffffff !important;
          border: 1px solid rgba(245, 158, 11, 0.1) !important;
          border-radius: 24px;
          padding: 40px;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(8px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.02) !important;
        }

        .con-glow-bar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
        }

        .con-overview-text {
          font-size: 1.3rem;
          color: #3e2715 !important;
          line-height: 1.75;
          margin: 0;
        }

        /* Capabilities */
        .con-capabilities-section {
          padding-top: 50px;
          padding-bottom: 60px;
        }

        .con-section-heading {
          font-size: 1.9rem;
          font-weight: 800;
          margin: 0 0 36px 0;
          text-align: center;
          letter-spacing: -0.02em;
          color: #1a1a1a !important;
        }

        .con-capabilities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .con-cap-card {
          position: relative;
          overflow: hidden;
          background: #ffffff !important;
          border: 1px solid rgba(245, 158, 11, 0.1) !important;
          border-radius: 20px;
          padding: 0 !important;
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02) !important;
        }

        .con-cap-banner-box {
          position: absolute;
          inset: 0;
          background-size: 300% 100%;
          background-repeat: no-repeat;
          opacity: 0.12;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s;
          z-index: 0;
        }

        .con-cap-card:hover .con-cap-banner-box {
          transform: scale(1.08);
          opacity: 0.22;
        }

        .con-cap-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.95));
          z-index: 1;
        }

        .con-cap-glow-overlay {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 2;
        }

        .con-cap-card:hover .con-cap-glow-overlay {
          opacity: 1;
        }

        .con-cap-card-content {
          position: relative;
          z-index: 3;
          padding: 36px 30px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .con-cap-card:hover {
          background: #fffdf7 !important;
          border-color: rgba(245, 158, 11, 0.5) !important;
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(245, 158, 11, 0.06) !important;
        }

        .con-cap-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          background: rgba(245, 158, 11, 0.05) !important;
          border-color: rgba(245, 158, 11, 0.2) !important;
        }

        .con-cap-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0 0 12px 0;
          color: #1a1a1a !important;
        }

        .con-cap-desc {
          font-size: 0.92rem;
          color: #5c453c !important;
          line-height: 1.55;
          margin: 0;
        }

        /* Playbook */
        .con-playbook-section {
          padding-top: 40px;
          padding-bottom: 60px;
        }

        .con-playbook-card {
          position: relative;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          border: 1px solid rgba(245, 158, 11, 0.1) !important;
          border-radius: 24px;
          padding: 0 !important;
          overflow: hidden;
          backdrop-filter: blur(8px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.02) !important;
        }

        .con-playbook-wash-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.97) 100%) !important;
          z-index: 0;
          transition: background 0.3s ease;
        }

        .con-playbook-card:hover .con-playbook-wash-overlay {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.94) 100%) !important;
        }

        .con-playbook-content {
          position: relative;
          z-index: 1;
          padding: 40px;
        }

        .con-playbook-tag {
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

        .con-playbook-title {
          font-size: 1.6rem;
          font-weight: 800;
          margin: 0 0 12px 0;
          color: #1a1a1a !important;
        }

        .con-playbook-desc {
          font-size: 1.05rem;
          color: #3e2715 !important;
          line-height: 1.65;
          margin: 0 0 26px 0;
        }

        .con-playbook-divider {
          height: 1px;
          background: rgba(245, 158, 11, 0.15) !important;
          margin-bottom: 24px;
        }

        .con-playbook-metrics {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.98rem;
        }

        .con-playbook-metrics .metrics-label {
          color: #7c635a !important;
        }

        .con-playbook-metrics .metrics-value {
          font-weight: 700;
        }

        /* Form */
        .con-form-section {
          padding-top: 50px;
          padding-bottom: 70px;
        }

        .con-form-card {
          max-width: 600px;
          margin: 0 auto;
          background: #ffffff !important;
          border: 1px solid rgba(245, 158, 11, 0.15) !important;
          border-radius: 24px;
          padding: 45px;
          backdrop-filter: blur(12px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.03) !important;
        }

        .con-form-heading {
          font-size: 1.4rem;
          font-weight: 700;
          margin: 0 0 32px 0;
          text-align: center;
          color: #1a1a1a !important;
        }

        .con-contact-form {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .con-form-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .con-form-field label {
          font-size: 0.78rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #b45309 !important;
        }

        .con-form-field input,
        .con-form-field textarea {
          background: rgba(255, 255, 255, 0.02) !important;
          border: 1px solid rgba(245, 158, 11, 0.15) !important;
          border-radius: 8px;
          padding: 12px;
          color: #1a1a1a !important;
          font-family: inherit;
          font-size: 0.92rem;
          transition: border-color 0.2s, background-color 0.2s;
        }

        .con-form-field input:focus,
        .con-form-field textarea:focus {
          outline: none;
          border-color: #f59e0b !important;
          background: #ffffff !important;
          box-shadow: 0 0 0 2px rgba(245, 158, 11, 0.1) !important;
        }

        .con-form-field input::placeholder,
        .con-form-field textarea::placeholder {
          color: rgba(60, 40, 10, 0.4) !important;
        }

        .con-submit-btn {
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

        .con-submit-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 15px rgba(245, 158, 11, 0.25) !important;
        }

        .con-submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Success */
        .con-success-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 20px 0;
        }

        .con-checkmark-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 2.5px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .con-success-txt {
          font-size: 1.05rem;
          line-height: 1.5;
          color: #1a1a1a !important;
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

        /* Mobile */
        @media (max-width: 968px) {
          .con-hero {
            padding-top: 60px;
            padding-bottom: 50px;
          }

          .con-stats-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .con-capabilities-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>
    </>
  );
}
