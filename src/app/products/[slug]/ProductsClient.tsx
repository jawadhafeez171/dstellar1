"use client";

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { PRODUCTS_TRANSLATIONS, ProductDetail } from '@/lib/productsTranslations';
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
      className="prod-stat-pill"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <span className="prod-stat-val" ref={ref}>
        {count}
      </span>
      <span className="prod-stat-lbl">{label}</span>
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
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 3,
        duration: 8 + Math.random() * 8,
        delay: Math.random() * 5,
        drift: Math.random() > 0.5 ? 20 : -20,
      }))
    );
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="prod-particles-layer" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="prod-particle"
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
            y: [0, -60, 0],
            x: [0, p.drift, 0],
            opacity: [0, 0.7, 0],
            scale: [0.5, 1.3, 0.5],
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
function ProductIcon({ type, color }: { type: string; color: string }) {
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
    case 'wrench':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 1 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" {...strokeProps} />
        </svg>
      );
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" {...strokeProps} />
        </svg>
      );
    case 'lock':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" {...strokeProps} />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" {...strokeProps} />
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
    case 'currency':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <line x1="12" y1="1" x2="12" y2="23" {...strokeProps} />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" {...strokeProps} />
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

// Graphic assets mapping for products pages
const PRODUCT_ASSETS_MAP: Record<string, { heroIllustration: string; capabilitiesBg: string; playbookBg: string }> = {
  'custom-software': {
    heroIllustration: '/assets/discover_who_we_are.png',
    capabilitiesBg: '/assets/solutions/sol_electronic-high-tech.png',
    playbookBg: '/assets/playbook_cloud-devsecops.png'
  },
  'erp': {
    heroIllustration: '/assets/green_ledger_dashboard.png',
    capabilitiesBg: '/assets/solutions/sol_manufacturing-industrial.png',
    playbookBg: '/assets/manufacturing_industrial.webp'
  },
  'ecommerce': {
    heroIllustration: '/assets/ind_consumer-products.png',
    capabilitiesBg: '/assets/solutions/sol_consumer-products.png',
    playbookBg: '/assets/consumer_products.webp'
  },
  'healthcare': {
    heroIllustration: '/assets/ind_life-sciences-healthcare.png',
    capabilitiesBg: '/assets/solutions/sol_life-sciences-healthcare.png',
    playbookBg: '/assets/life_sciences_healthcare.webp'
  },
  'logistics-warehouse': {
    heroIllustration: '/assets/ind_travel-hospitality.png',
    capabilitiesBg: '/assets/solutions/sol_travel-hospitality.png',
    playbookBg: '/assets/travel_transport.webp'
  },
  'sales-accounting': {
    heroIllustration: '/assets/ind_capital-markets.png',
    capabilitiesBg: '/assets/solutions/sol_capital-markets.png',
    playbookBg: '/assets/capital_markets.webp'
  },
  'bi-analytics': {
    heroIllustration: '/assets/discover_val_tech.png',
    capabilitiesBg: '/assets/ser_ai-ml.png',
    playbookBg: '/assets/discover_mission.png'
  },
  'mobile-web-apps': {
    heroIllustration: '/assets/discover_val_innovation.png',
    capabilitiesBg: '/assets/ser_help-portal.png',
    playbookBg: '/assets/discover_val_client.png'
  }
};

export default function ProductsClient({ slug }: { slug: string }) {
  const { language } = useLanguage();
  const router = useRouter();

  // Contact form state
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMsg, setUserMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Fetch translation content
  const langKey = PRODUCTS_TRANSLATIONS[language] ? language : 'en';
  const rawData: ProductDetail = PRODUCTS_TRANSLATIONS[langKey][slug] || PRODUCTS_TRANSLATIONS['en'][slug];

  // Map accents and visual resources
  const assets = PRODUCT_ASSETS_MAP[slug] || {
    heroIllustration: '/assets/discover_who_we_are.png',
    capabilitiesBg: '/assets/solutions/sol_electronic-high-tech.png',
    playbookBg: '/assets/discover_who_we_are.png'
  };

  const themeColor = rawData?.themeColor || '#a855f7';
  const gradientClass = rawData?.gradientClass || `linear-gradient(135deg, #ffffff 0%, #c084fc 50%, ${themeColor} 100%)`;
  const data = rawData ? {
    ...rawData,
    themeColor,
    gradientClass
  } : null;

  useEffect(() => {
    if (data) {
      document.title = `${data.title} | Dstellar Product Suite`;
    }
  }, [data]);

  if (!data) {
    return (
      <>
        <TopBar />
        <main className="prod-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ color: '#fff', fontSize: '2rem', marginBottom: '16px' }}>Product Page Not Found</h1>
            <button className="prod-submit-btn" style={{ background: '#a855f7', padding: '12px 24px' }} onClick={() => router.push('/')}>Return Home</button>
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

  const integrations = [
    { name: 'SAP Integration Suite', role: 'Enterprise Middleware' },
    { name: 'REST & GraphQL APIs', role: 'Live Connectors' },
    { name: 'SAP BTP Cloud Security', role: 'Identity Gate' },
    { name: 'Azure / AWS Hosting', role: 'Scalable Compute' }
  ];

  return (
    <>
      <TopBar />

      <main 
        className="prod-page"
        style={{
          '--prod-theme-color': data.themeColor,
          '--prod-theme-color-glow': `${data.themeColor}1a`,
          '--prod-theme-color-glow-hover': `${data.themeColor}3a`,
          '--prod-theme-color-border-hover': `${data.themeColor}77`
        } as React.CSSProperties}
      >
        {/* Cyber Dark particles and orbs backdrop */}
        <div className="prod-bg" aria-hidden="true">
          <div className="prod-orb orb-primary" />
          <div className="prod-orb orb-secondary" />
          <div className="prod-orb orb-tertiary" />
          <div className="prod-grid" />
          <FloatingParticles color={data.themeColor} />
        </div>

        {/* HERO SECTION */}
        <section className="prod-hero">
          <div className="prod-inner">
            <div className="prod-hero-grid">
              <div className="prod-hero-content">
                <motion.div
                  className="prod-eyebrow"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="prod-eyebrow-dot" style={{ background: data.themeColor, boxShadow: `0 0 10px ${data.themeColor}` }} />
                  <span className="mono prod-eyebrow-txt" style={{ color: data.themeColor }}>{data.badge}</span>
                </motion.div>

                <motion.h1
                  className="prod-title"
                  style={{ backgroundImage: data.gradientClass }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {data.title}
                </motion.h1>

                <motion.p
                  className="prod-subtitle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {data.subtitle}
                </motion.p>

                <motion.div
                  className="prod-actions"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <button
                    className="prod-cta-primary"
                    style={{ background: data.themeColor }}
                    onClick={() => document.getElementById('products-demo-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Request Live Demo
                  </button>
                  <button
                    className="prod-cta-ghost"
                    style={{ color: '#fff', borderColor: `${data.themeColor}40`, background: `${data.themeColor}10` }}
                    onClick={() => document.getElementById('capabilities-grid-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Capabilities
                  </button>
                </motion.div>
              </div>

              {/* Graphic Illustration */}
              <motion.div
                className="prod-hero-image-wrap"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="prod-image-glow" style={{ background: `radial-gradient(circle, ${data.themeColor}15 0%, transparent 70%)` }} />
                <img
                  src={assets.heroIllustration}
                  alt={data.title}
                  className="prod-hero-img"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* METRICS COUNT-UP GRID */}
        <section className="prod-stats-section">
          <div className="prod-inner">
            <div className="prod-stats-grid">
              {data.stats.map((stat, idx) => (
                <StatPill key={idx} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>
        </section>

        {/* BRIEF OVERVIEW */}
        <section className="prod-overview-section">
          <div className="prod-inner">
            <motion.div
              className="prod-overview-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="prod-glow-bar" style={{ background: data.gradientClass }} />
              <p className="prod-overview-text">{data.overview}</p>
            </motion.div>
          </div>
        </section>

        {/* CORE CAPABILITIES (Triptych Composite Pattern) */}
        <section className="prod-capabilities-section" id="capabilities-grid-section">
          <div className="prod-inner">
            <h2 className="prod-section-heading">Signature Product Features</h2>
            <div className="prod-capabilities-grid">
              {data.capabilities.map((cap, idx) => (
                <motion.div
                  key={idx}
                  className="prod-cap-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  {/* Underlay Image */}
                  <div 
                    className="prod-cap-banner-box"
                    style={{
                      backgroundImage: `url(${assets.capabilitiesBg})`,
                      backgroundPosition: idx === 0 ? '0% 50%' : idx === 1 ? '50% 50%' : '100% 50%',
                    }}
                  />
                  
                  {/* Light Wash and Violet Glow overlays */}
                  <div className="prod-cap-overlay" />
                  <div className="prod-cap-glow-overlay" style={{ background: `radial-gradient(circle at 50% 100%, var(--prod-theme-color-glow) 0%, transparent 60%)` }} />
                  
                  <div className="prod-cap-card-content">
                    <div className="prod-cap-icon-box" style={{ background: `${data.themeColor}12`, borderColor: `${data.themeColor}30` }}>
                      <ProductIcon type={cap.icon} color={data.themeColor} />
                    </div>
                    <h3 className="prod-cap-title">{cap.title}</h3>
                    <p className="prod-cap-desc">{cap.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCT PLAYBOOK */}
        <section className="prod-playbook-section">
          <div className="prod-inner">
            <motion.div
              className="prod-playbook-card"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                backgroundImage: `url(${assets.playbookBg})`,
              }}
            >
              <div className="prod-playbook-wash-overlay" />
              <div className="prod-playbook-content">
                <span className="prod-playbook-tag" style={{ color: data.themeColor, borderColor: `${data.themeColor}40` }}>{data.playbook.tag}</span>
                <h3 className="prod-playbook-title">{data.playbook.title}</h3>
                <p className="prod-playbook-desc">{data.playbook.desc}</p>
                <div className="prod-playbook-divider" />
                <div className="prod-playbook-metrics">
                  <span className="metrics-label">Performance Metric:</span>
                  <strong className="metrics-value" style={{ color: data.themeColor }}>{data.playbook.metrics}</strong>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SYSTEM INTEGRATION STACK */}
        <section className="prod-matrix-section">
          <div className="prod-inner">
            <h2 className="prod-section-heading">Connected Ecosystem Stack</h2>
            <div className="prod-matrix-grid">
              {integrations.map((tech, idx) => (
                <motion.div
                  key={idx}
                  className="prod-matrix-card"
                  whileHover={{ scale: 1.03, borderColor: data.themeColor }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="prod-matrix-tag mono" style={{ color: data.themeColor }}>API Integration</span>
                  <h3 className="prod-matrix-name">{tech.name}</h3>
                  <p className="prod-matrix-role">{tech.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DEMO / REGISTRATION FORM */}
        <section className="prod-form-section" id="products-demo-section">
          <div className="prod-inner">
            <motion.div
              className="prod-form-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="prod-form-heading">Request a Guided Walkthrough</h3>

              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="demo-form"
                    onSubmit={handleFormSubmit}
                    className="prod-contact-form"
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="prod-form-field">
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

                    <div className="prod-form-field">
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

                    <div className="prod-form-field">
                      <label htmlFor="message">Demo Customization Requests</label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder={data.msgPlaceholder}
                        value={userMsg}
                        onChange={(e) => setUserMsg(e.target.value)}
                      />
                    </div>

                    <button type="submit" className="prod-submit-btn" style={{ background: data.themeColor }} disabled={isSubmitting}>
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
                    className="prod-success-wrapper"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', damping: 12 }}
                  >
                    <div className="prod-checkmark-circle" style={{ borderColor: data.themeColor }}>
                      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke={data.themeColor} strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="prod-success-txt">{data.successMsg}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Styled JSX Styles */}
      <style jsx global>{`
        .prod-page {
          background: linear-gradient(135deg, #070514 0%, #0d0926 60%, #150a3c 100%) !important;
          color: #ffffff !important;
          min-height: 100vh;
          overflow: hidden;
          position: relative;
          font-family: var(--font-sans, 'Inter', sans-serif);
          padding-top: 100px;
          padding-bottom: 80px;
        }

        .prod-bg {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .prod-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
        }

        .orb-primary {
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.09) 0%, transparent 70%);
          opacity: 0.85;
          top: -200px;
          left: -150px;
        }

        .orb-secondary {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(217, 70, 239, 0.07) 0%, transparent 70%);
          opacity: 0.8;
          bottom: -100px;
          right: -100px;
        }

        .orb-tertiary {
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, transparent 70%);
          top: 40%;
          left: 30%;
        }

        .prod-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px) !important;
          background-size: 60px 60px;
        }

        .prod-particles-layer {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .prod-particle {
          position: absolute;
        }

        .prod-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }

        /* Hero */
        .prod-hero {
          padding-top: 80px;
          padding-bottom: 70px;
        }

        .prod-hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
          align-items: center;
        }

        .prod-hero-content {
          max-width: 650px;
        }

        .prod-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 22px;
        }

        .prod-eyebrow-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .prod-eyebrow-txt {
          letter-spacing: 0.15em;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .prod-title {
          font-size: clamp(2.4rem, 4.5vw, 4rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin: 0 0 20px 0;
          background-size: 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .prod-subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.7) !important;
          line-height: 1.6;
          margin: 0 0 36px 0;
        }

        .prod-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .prod-cta-primary {
          color: #ffffff !important;
          border: none;
          padding: 14px 32px;
          border-radius: 100px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .prod-cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(139, 92, 246, 0.35) !important;
        }

        .prod-cta-ghost {
          color: #ffffff !important;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
          padding: 14px 32px;
          border-radius: 100px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .prod-cta-ghost:hover {
          border-color: var(--prod-theme-color-border-hover) !important;
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.05) !important;
        }

        .prod-hero-image-wrap {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .prod-image-glow {
          position: absolute;
          inset: -40px;
          filter: blur(40px);
          z-index: 0;
        }

        .prod-hero-img {
          max-width: 100%;
          height: auto;
          max-height: 400px;
          object-fit: contain;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          position: relative;
          z-index: 1;
        }

        /* Stats */
        .prod-stats-section {
          padding-top: 30px;
          padding-bottom: 40px;
        }

        .prod-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .prod-stat-pill {
          background: rgba(15, 10, 36, 0.5) !important;
          border: 1px solid rgba(255, 255, 255, 0.06) !important;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 18px;
          padding: 26px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 6px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
          transition: all 0.2s ease;
        }

        .prod-stat-pill:hover {
          background: rgba(15, 10, 36, 0.65) !important;
          border-color: var(--prod-theme-color-border-hover) !important;
          box-shadow: 0 15px 35px var(--prod-theme-color-glow-hover) !important;
        }

        .prod-stat-val {
          font-size: 2.3rem;
          font-weight: 800;
          color: #ffffff !important;
        }

        .prod-stat-lbl {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.5) !important;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 500;
        }

        /* Overview */
        .prod-overview-section {
          padding-top: 30px;
          padding-bottom: 50px;
        }

        .prod-overview-card {
          background: rgba(15, 10, 36, 0.45) !important;
          border: 1px solid rgba(255, 255, 255, 0.06) !important;
          border-radius: 24px;
          padding: 40px;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15) !important;
        }

        .prod-glow-bar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
        }

        .prod-overview-text {
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.85) !important;
          line-height: 1.75;
          margin: 0;
        }

        /* Capabilities (Triptych Composite Pattern) */
        .prod-capabilities-section {
          padding-top: 50px;
          padding-bottom: 60px;
        }

        .prod-section-heading {
          font-size: 1.9rem;
          font-weight: 800;
          margin: 0 0 36px 0;
          text-align: center;
          letter-spacing: -0.02em;
          color: #ffffff !important;
        }

        .prod-capabilities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .prod-cap-card {
          position: relative;
          overflow: hidden;
          background: rgba(15, 10, 36, 0.5) !important;
          border: 1px solid rgba(255, 255, 255, 0.06) !important;
          border-radius: 20px;
          padding: 0 !important;
          transition: all 0.3s ease;
          backdrop-filter: blur(18px) saturate(130%) !important;
          -webkit-backdrop-filter: blur(18px) saturate(130%) !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15) !important;
          min-height: 280px;
        }

        .prod-cap-banner-box {
          position: absolute;
          inset: 0;
          background-size: 300% 100%;
          background-repeat: no-repeat;
          opacity: 0.08;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s;
          z-index: 0;
        }

        .prod-cap-card:hover .prod-cap-banner-box {
          transform: scale(1.08);
          opacity: 0.18;
        }

        .prod-cap-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(7, 5, 20, 0.85), rgba(7, 5, 20, 0.94)) !important;
          z-index: 1;
        }

        .prod-cap-glow-overlay {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 2;
        }

        .prod-cap-card:hover .prod-cap-glow-overlay {
          opacity: 1;
        }

        .prod-cap-card-content {
          position: relative;
          z-index: 3;
          padding: 36px 30px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .prod-cap-card:hover {
          background: rgba(15, 10, 36, 0.6) !important;
          border-color: var(--prod-theme-color-border-hover) !important;
          transform: translateY(-5px);
          box-shadow: 0 15px 35px var(--prod-theme-color-glow-hover) !important;
        }

        .prod-cap-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .prod-cap-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0 0 12px 0;
          color: #ffffff !important;
        }

        .prod-cap-desc {
          font-size: 0.92rem;
          color: rgba(255, 255, 255, 0.65) !important;
          line-height: 1.55;
          margin: 0;
        }

        /* Playbook */
        .prod-playbook-section {
          padding-top: 40px;
          padding-bottom: 60px;
        }

        .prod-playbook-card {
          position: relative;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          border: 1px solid rgba(255, 255, 255, 0.06) !important;
          border-radius: 24px;
          padding: 0 !important;
          overflow: hidden;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2) !important;
        }

        .prod-playbook-wash-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(7, 5, 20, 0.9) 0%, rgba(7, 5, 20, 0.96) 100%) !important;
          z-index: 0;
          transition: background 0.3s ease;
        }

        .prod-playbook-card:hover .prod-playbook-wash-overlay {
          background: linear-gradient(135deg, rgba(7, 5, 20, 0.85) 0%, rgba(7, 5, 20, 0.93) 100%) !important;
        }

        .prod-playbook-content {
          position: relative;
          z-index: 1;
          padding: 40px;
        }

        .prod-playbook-tag {
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

        .prod-playbook-title {
          font-size: 1.6rem;
          font-weight: 800;
          margin: 0 0 12px 0;
          color: #ffffff !important;
        }

        .prod-playbook-desc {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.8) !important;
          line-height: 1.65;
          margin: 0 0 26px 0;
        }

        .prod-playbook-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.1) !important;
          margin-bottom: 24px;
        }

        .prod-playbook-metrics {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.98rem;
        }

        .prod-playbook-metrics .metrics-label {
          color: rgba(255, 255, 255, 0.5) !important;
        }

        .prod-playbook-metrics .metrics-value {
          font-weight: 700;
        }

        /* Integration Stack Matrix */
        .prod-matrix-section {
          padding-top: 45px;
          padding-bottom: 55px;
        }

        .prod-matrix-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .prod-matrix-card {
          background: rgba(15, 10, 36, 0.45) !important;
          border: 1px solid rgba(255, 255, 255, 0.06) !important;
          border-radius: 16px;
          padding: 24px;
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .prod-matrix-card:hover {
          background: rgba(15, 10, 36, 0.6) !important;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px var(--prod-theme-color-glow-hover) !important;
        }

        .prod-matrix-tag {
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 12px;
        }

        .prod-matrix-name {
          font-size: 1.15rem;
          font-weight: 750;
          margin: 0 0 6px 0;
          color: #ffffff !important;
        }

        .prod-matrix-role {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5) !important;
          margin: 0;
        }

        /* Form */
        .prod-form-section {
          padding-top: 50px;
          padding-bottom: 70px;
        }

        .prod-form-card {
          max-width: 600px;
          margin: 0 auto;
          background: rgba(15, 10, 36, 0.55) !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          border-radius: 24px;
          padding: 45px;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3) !important;
        }

        .prod-form-heading {
          font-size: 1.4rem;
          font-weight: 700;
          margin: 0 0 32px 0;
          text-align: center;
          color: #ffffff !important;
        }

        .prod-contact-form {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .prod-form-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .prod-form-field label {
          font-size: 0.78rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: rgba(255, 255, 255, 0.5) !important;
        }

        .prod-form-field input,
        .prod-form-field textarea {
          background: rgba(7, 5, 20, 0.4) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-radius: 8px;
          padding: 12px;
          color: #ffffff !important;
          font-family: inherit;
          font-size: 0.92rem;
          transition: border-color 0.2s, background-color 0.2s;
        }

        .prod-form-field input:focus,
        .prod-form-field textarea:focus {
          outline: none;
          border-color: var(--prod-theme-color) !important;
          background: rgba(7, 5, 20, 0.6) !important;
          box-shadow: 0 0 0 2px var(--prod-theme-color-glow) !important;
        }

        .prod-form-field input::placeholder,
        .prod-form-field textarea::placeholder {
          color: rgba(255, 255, 255, 0.35) !important;
        }

        .prod-submit-btn {
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
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .prod-submit-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 15px var(--prod-theme-color-glow) !important;
        }

        .prod-submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Success */
        .prod-success-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 20px 0;
        }

        .prod-checkmark-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 2.5px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .prod-success-txt {
          font-size: 1.05rem;
          line-height: 1.5;
          color: #ffffff !important;
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

        /* Mobile adaptation */
        @media (max-width: 968px) {
          .prod-hero {
            padding-top: 40px;
            padding-bottom: 40px;
          }

          .prod-hero-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .prod-hero-image-wrap {
            order: -1;
          }

          .prod-hero-img {
            max-height: 300px;
          }

          .prod-stats-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .prod-capabilities-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .prod-matrix-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .prod-form-card {
            padding: 30px 20px;
          }
        }
      `}</style>
    </>
  );
}
