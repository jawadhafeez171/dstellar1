"use client";

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { INDUSTRY_TRANSLATIONS, IndustryDetail } from '@/lib/industryTranslations';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

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
      className="ind-stat-pill"
      whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.2)' }}
      transition={{ duration: 0.2 }}
    >
      <span className="ind-stat-val" ref={ref}>
        {count}
      </span>
      <span className="ind-stat-lbl">{label}</span>
    </motion.div>
  );
}

// Particle System matching theme
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
    <div className="ind-particles-layer" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="ind-particle"
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

// Localized Custom SVG Icons
function SolutionIcon({ type, color }: { type: string; color: string }) {
  const strokeProps = { stroke: color, strokeWidth: '2', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, fill: 'none' };
  switch (type) {
    case 'telematics':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <circle cx="12" cy="12" r="10" {...strokeProps} />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" {...strokeProps} />
          <path d="M2 12h20" {...strokeProps} />
        </svg>
      );
    case 'factory':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path d="M22 21H2V3l7 4 7-4 6 4v14z" {...strokeProps} />
          <rect x="6" y="12" width="4" height="4" {...strokeProps} />
          <rect x="14" y="12" width="4" height="4" {...strokeProps} />
        </svg>
      );
    case 'truck':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <rect x="1" y="3" width="15" height="13" {...strokeProps} />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" {...strokeProps} />
          <circle cx="5.5" cy="18.5" r="2.5" {...strokeProps} />
          <circle cx="18.5" cy="18.5" r="2.5" {...strokeProps} />
        </svg>
      );
    case 'chart':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <line x1="18" y1="20" x2="18" y2="10" {...strokeProps} />
          <line x1="12" y1="20" x2="12" y2="4" {...strokeProps} />
          <line x1="6" y1="20" x2="6" y2="14" {...strokeProps} />
        </svg>
      );
    case 'shopping':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <circle cx="9" cy="21" r="1" {...strokeProps} />
          <circle cx="20" cy="21" r="1" {...strokeProps} />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" {...strokeProps} />
        </svg>
      );
    case 'piggy':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path d="M19 5c-1.5 0-2.8.9-3.4 2.2-.7-.7-1.7-1.2-2.8-1.2-2.2 0-4 1.8-4 4 0 .4.1.8.2 1.2A5 5 0 0 0 4 15c0 2.2 1.8 4 4 4h10c2.8 0 5-2.2 5-5s-2.2-5-5-5z" {...strokeProps} />
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
    case 'database':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <ellipse cx="12" cy="5" rx="9" ry="3" {...strokeProps} />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" {...strokeProps} />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" {...strokeProps} />
        </svg>
      );
    case 'globe':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <circle cx="12" cy="12" r="10" {...strokeProps} />
          <line x1="2" y1="12" x2="22" y2="12" {...strokeProps} />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" {...strokeProps} />
        </svg>
      );
    case 'wrench':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 1 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" {...strokeProps} />
        </svg>
      );
    case 'cogs':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <circle cx="12" cy="12" r="3" {...strokeProps} />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" {...strokeProps} />
        </svg>
      );
    case 'check':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <polyline points="20 6 9 17 4 12" {...strokeProps} />
        </svg>
      );
    case 'bolt':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" {...strokeProps} />
        </svg>
      );
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" {...strokeProps} />
        </svg>
      );
    case 'leaf':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path d="M2 22c1.25-6.7 5.85-11.85 12-14M22 2c-3.1 0-7.3 1.5-10 4.2-3.1 3.1-4.8 7.3-4.8 11.8 0 1.1.9 2 2 2 4.5 0 8.7-1.7 11.8-4.8 2.7-2.7 4.2-6.9 4.2-10a1 1 0 0 0-1-1.1z" {...strokeProps} />
        </svg>
      );
    case 'heart':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" {...strokeProps} />
        </svg>
      );
    case 'search':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <circle cx="11" cy="11" r="8" {...strokeProps} />
          <line x1="21" y1="21" x2="16.65" y2="16.65" {...strokeProps} />
        </svg>
      );
    case 'activity':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" {...strokeProps} />
        </svg>
      );
    case 'lock':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" {...strokeProps} />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" {...strokeProps} />
        </svg>
      );
    case 'user':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" {...strokeProps} />
          <circle cx="12" cy="7" r="4" {...strokeProps} />
        </svg>
      );
    case 'document':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" {...strokeProps} />
          <polyline points="14 2 14 8 20 8" {...strokeProps} />
          <line x1="16" y1="13" x2="8" y2="13" {...strokeProps} />
          <line x1="16" y1="17" x2="8" y2="17" {...strokeProps} />
          <polyline points="10 9 9 9 8 9" {...strokeProps} />
        </svg>
      );
    case 'currency':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <line x1="12" y1="1" x2="12" y2="23" {...strokeProps} />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" {...strokeProps} />
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
    case 'file-text':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" {...strokeProps} />
          <polyline points="14 2 14 8 20 8" {...strokeProps} />
          <line x1="16" y1="13" x2="8" y2="13" {...strokeProps} />
          <line x1="16" y1="17" x2="8" y2="17" {...strokeProps} />
        </svg>
      );
    case 'tag':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" {...strokeProps} />
          <line x1="7" y1="7" x2="7.01" y2="7" {...strokeProps} />
        </svg>
      );
    case 'plane':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" {...strokeProps} />
        </svg>
      );
    case 'star':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" {...strokeProps} />
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
    case 'hammer':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91" {...strokeProps} />
          <path d="M18 2l4 4" {...strokeProps} />
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

// Vibrant high-contrast text gradients for maximum readability on dark background
const VIBRANT_GRADIENTS: Record<string, string> = {
  'automotive': 'linear-gradient(135deg, #ffffff 0%, #818cf8 50%, #2dd4bf 100%)',
  'consumer-products': 'linear-gradient(120deg, #ffffff 0%, #ff9d42 50%, #ff7a00 100%)',
  'electronic-high-tech': 'linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #3b82f6 100%)',
  'manufacturing-industrial': 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #64748b 100%)',
  'energy-utilities': 'linear-gradient(135deg, #ffffff 0%, #4ade80 50%, #10b981 100%)',
  'life-sciences-healthcare': 'linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #f472b6 100%)',
  'government-public-sector': 'linear-gradient(135deg, #ffffff 0%, #93c5fd 50%, #3b82f6 100%)',
  'capital-markets': 'linear-gradient(135deg, #ffffff 0%, #fbbf24 50%, #f59e0b 100%)',
  'travel-hospitality': 'linear-gradient(120deg, #ffffff 0%, #c084fc 50%, #a855f7 100%)',
  'construction': 'linear-gradient(135deg, #ffffff 0%, #fbbf24 50%, #d97706 100%)'
};

export default function IndustryClient({ slug }: { slug: string }) {
  const { language } = useLanguage();
  const router = useRouter();

  // Handle inquiry form state
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMsg, setUserMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Fetch translation data
  const langKey = INDUSTRY_TRANSLATIONS[language] ? language : 'en';
  const data: IndustryDetail = INDUSTRY_TRANSLATIONS[langKey][slug];
  const gradient = data ? (VIBRANT_GRADIENTS[slug] || data.gradientClass) : '';

  useEffect(() => {
    if (data) {
      document.title = `${data.title} | Dstellar Industries`;
    }
  }, [data]);

  // Handle invalid slug redirects
  if (!data) {
    return (
      <>
        <TopBar />
        <main className="ind-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ color: '#fff', fontSize: '2rem', marginBottom: '16px' }}>Industry Section Not Found</h1>
            <button className="ind-submit-btn" onClick={() => router.push('/')}>Return Home</button>
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

      <main className="ind-page">
        {/* Dynamic Background */}
        <div className="ind-bg" aria-hidden="true">
          <div className="ind-orb orb-primary" style={{ background: `radial-gradient(circle, ${data.themeColor}1a 0%, transparent 70%)` }} />
          <div className="ind-orb orb-secondary" style={{ background: `radial-gradient(circle, #ff7a0010 0%, transparent 70%)` }} />
          <div className="ind-grid" />
          <FloatingParticles color={data.themeColor} />
        </div>

        {/* HERO SECTION */}
        <section className="ind-hero">
          <div className="ind-inner">
            <div className="ind-hero-split">
              {/* Left Column Text */}
              <div className="ind-hero-text">
                <motion.div
                  className="ind-eyebrow"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="ind-eyebrow-dot" style={{ background: data.themeColor, boxShadow: `0 0 10px ${data.themeColor}` }} />
                  <span className="mono ind-eyebrow-txt">{data.badge}</span>
                </motion.div>

                <motion.h1
                  className="ind-title"
                  style={{ backgroundImage: gradient }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {data.title}
                </motion.h1>

                <motion.p
                  className="ind-subtitle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {data.subtitle}
                </motion.p>

                <motion.div
                  className="ind-actions"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <button
                    className="ind-cta-primary"
                    style={{ background: data.themeColor }}
                    onClick={() => document.getElementById('inquiry-form-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get in Touch
                  </button>
                  <button
                    className="ind-cta-ghost"
                    onClick={() => document.getElementById('solutions-grid-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Solutions
                  </button>
                </motion.div>
              </div>

              {/* Right Column Abstract Image */}
              <motion.div
                className="ind-hero-img-col"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="ind-img-frame" style={{ borderColor: `${data.themeColor}30` }}>
                  <Image
                    src={`/assets/ind_${slug}.png`}
                    alt={`${data.title} Illustration`}
                    width={600}
                    height={400}
                    className="ind-hero-img"
                    priority
                  />
                  <div className="ind-img-overlay" style={{ background: `linear-gradient(to top, rgba(10,18,40,0.85), transparent)` }} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* METRICS / STATS SECTION */}
        <section className="ind-stats-section">
          <div className="ind-inner">
            <div className="ind-stats-grid">
              {data.stats.map((stat, idx) => (
                <StatPill key={idx} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>
        </section>

        {/* DETAILED OVERVIEW SECTION */}
        <section className="ind-overview-section">
          <div className="ind-inner">
            <motion.div
              className="ind-overview-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="ind-glow-bar" style={{ background: data.gradientClass }} />
              <p className="ind-overview-text">{data.overview}</p>
            </motion.div>
          </div>
        </section>

        {/* CORE SOLUTIONS SECTION */}
        <section className="ind-solutions-section" id="solutions-grid-section">
          <div className="ind-inner">
            <h2 className="ind-section-heading">Core Solutions & Capability</h2>
            <div className="ind-solutions-grid">
              {data.solutions.map((sol, idx) => (
                <motion.div
                  key={idx}
                  className="ind-sol-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  {/* Underlay Image */}
                  <div 
                    className="ind-sol-banner-box"
                    style={{
                      backgroundImage: `url(/assets/solutions/sol_${slug}.png)`,
                      backgroundPosition: idx === 0 ? '0% 50%' : idx === 1 ? '50% 50%' : '100% 50%',
                    }}
                  />
                  
                  {/* Colored/Dark Wash Gradient Overlay */}
                  <div className="ind-sol-overlay" />
                  <div className="ind-sol-glow-overlay" style={{ background: `radial-gradient(circle at 50% 100%, ${data.themeColor}22 0%, transparent 60%)` }} />
                  
                  {/* Card Content */}
                  <div className="ind-sol-card-content">
                    {/* Top: Icon */}
                    <div className="ind-sol-icon-box" style={{ background: `${data.themeColor}15`, borderColor: `${data.themeColor}40`, color: data.themeColor }}>
                      <SolutionIcon type={sol.icon} color={data.themeColor} />
                    </div>
                    
                    {/* Bottom: Text */}
                    <div className="ind-sol-text-box">
                      <h3 className="ind-sol-title">{sol.title}</h3>
                      <p className="ind-sol-desc">{sol.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDY PLAYBOOK CARD */}
        <section className="ind-playbook-section">
          <div className="ind-inner">
            <motion.div
              className="ind-playbook-card"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="ind-playbook-content">
                <span className="ind-playbook-tag" style={{ color: data.themeColor, borderColor: `${data.themeColor}40` }}>{data.playbook.tag}</span>
                <h3 className="ind-playbook-title">{data.playbook.title}</h3>
                <p className="ind-playbook-desc">{data.playbook.desc}</p>
                <div className="ind-playbook-divider" />
                <div className="ind-playbook-metrics">
                  <span className="metrics-label">Impact Metric:</span>
                  <strong className="metrics-value" style={{ color: data.themeColor }}>{data.playbook.metrics}</strong>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* INQUIRY CONTACT FORM */}
        <section className="ind-form-section" id="inquiry-form-section">
          <div className="ind-inner">
            <motion.div
              className="ind-form-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="ind-form-heading">{data.inquiryTitle}</h3>

              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="inquiry-form"
                    onSubmit={handleFormSubmit}
                    className="ind-contact-form"
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="ind-form-field">
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

                    <div className="ind-form-field">
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

                    <div className="ind-form-field">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder={data.msgPlaceholder}
                        value={userMsg}
                        onChange={(e) => setUserMsg(e.target.value)}
                      />
                    </div>

                    <button type="submit" className="ind-submit-btn" style={{ background: data.themeColor }} disabled={isSubmitting}>
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
                    className="ind-success-wrapper"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', damping: 12 }}
                  >
                    <div className="ind-checkmark-circle" style={{ borderColor: data.themeColor }}>
                      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke={data.themeColor} strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="ind-success-txt">{data.successMsg}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Global Embedded Styles */}
      <style jsx global>{`
        .ind-page {
          background: linear-gradient(160deg, #07051d 0%, #0a1228 45%, #05080f 100%);
          color: #fff;
          min-height: 100vh;
          overflow: hidden;
          position: relative;
          font-family: var(--font-sans, 'Inter', sans-serif);
          padding-top: 100px;
          padding-bottom: 80px;
        }

        .ind-bg {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .ind-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
        }

        .orb-primary {
          width: 650px;
          height: 650px;
          opacity: 0.18;
          top: -150px;
          left: -100px;
        }

        .orb-secondary {
          width: 550px;
          height: 550px;
          opacity: 0.12;
          bottom: -100px;
          right: -100px;
        }

        .ind-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
          background-size: 55px 55px;
        }

        .ind-particles-layer {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .ind-particle {
          position: absolute;
        }

        .ind-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }

        /* Hero */
        .ind-hero {
          padding-top: 80px;
          padding-bottom: 60px;
        }

        .ind-hero-split {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 50px;
          align-items: center;
        }

        .ind-eyebrow {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 18px;
        }

        .ind-eyebrow-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .ind-eyebrow-txt {
          background: linear-gradient(90deg, #c4b5fd, #2dd4bf);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 0.15em;
          font-size: 0.78rem;
          font-weight: 600;
        }

        .ind-title {
          font-size: clamp(2.4rem, 4.2vw, 3.8rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin: 0 0 20px 0;
          background-size: 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ind-subtitle {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.6;
          margin: 0 0 32px 0;
          max-width: 540px;
        }

        .ind-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .ind-cta-primary {
          color: #fff;
          border: none;
          padding: 12px 28px;
          border-radius: 100px;
          font-size: 0.92rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s, filter 0.2s;
        }

        .ind-cta-primary:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
        }

        .ind-cta-ghost {
          background: rgba(255, 255, 255, 0.04);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 12px 28px;
          border-radius: 100px;
          font-size: 0.92rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .ind-cta-ghost:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .ind-hero-img-col {
          position: relative;
        }

        .ind-img-frame {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.4);
        }

        .ind-hero-img {
          width: 100%;
          height: auto;
          display: block;
        }

        .ind-img-overlay {
          position: absolute;
          inset: 0;
        }

        /* Stats Section */
        .ind-stats-section {
          padding-top: 40px;
          padding-bottom: 40px;
        }

        .ind-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .ind-stat-pill {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(8px);
          border-radius: 16px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 4px;
        }

        .ind-stat-val {
          font-size: 2.2rem;
          font-weight: 800;
          color: #fff;
        }

        .ind-stat-lbl {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 500;
        }

        /* Overview */
        .ind-overview-section {
          padding-top: 30px;
          padding-bottom: 40px;
        }

        .ind-overview-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 36px;
          position: relative;
          overflow: hidden;
        }

        .ind-glow-bar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
        }

        .ind-overview-text {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.7;
          margin: 0;
        }

        /* Solutions */
        .ind-solutions-section {
          padding-top: 50px;
          padding-bottom: 60px;
        }

        .ind-section-heading {
          font-size: 1.8rem;
          font-weight: 800;
          margin: 0 0 32px 0;
          letter-spacing: -0.02em;
        }

        .ind-solutions-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .ind-sol-card {
          position: relative;
          min-height: 380px;
          background: rgba(7, 5, 29, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 0;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
        }

        .ind-sol-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .ind-sol-banner-box {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background-size: 300% 100%;
          background-repeat: no-repeat;
          z-index: 0;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
          opacity: 0.45;
        }

        .ind-sol-card:hover .ind-sol-banner-box {
          transform: scale(1.1);
          opacity: 0.65;
        }

        .ind-sol-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(7, 5, 29, 0.98) 0%,
            rgba(7, 5, 29, 0.82) 45%,
            rgba(7, 5, 29, 0.3) 100%
          );
          z-index: 1;
          transition: background 0.4s ease;
        }

        .ind-sol-glow-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .ind-sol-card:hover .ind-sol-glow-overlay {
          opacity: 1;
        }

        .ind-sol-card-content {
          position: relative;
          z-index: 3;
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          flex-grow: 1;
        }

        .ind-sol-icon-box {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .ind-sol-card:hover .ind-sol-icon-box {
          transform: scale(1.05) rotate(5deg);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }

        .ind-sol-text-box {
          margin-top: auto;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ind-sol-card:hover .ind-sol-text-box {
          transform: translateY(-2px);
        }

        .ind-sol-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin: 0 0 12px 0;
          color: #fff;
          letter-spacing: -0.01em;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }

        .ind-sol-desc {
          font-size: 0.92rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin: 0;
          text-shadow: 0 1px 3px rgba(0,0,0,0.5);
          transition: color 0.3s ease;
        }

        .ind-sol-card:hover .ind-sol-desc {
          color: rgba(255, 255, 255, 0.9);
        }

        /* Playbook */
        .ind-playbook-section {
          padding-top: 40px;
          padding-bottom: 50px;
        }

        .ind-playbook-card {
          background: radial-gradient(circle at top right, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          padding: 36px;
        }

        .ind-playbook-tag {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          border: 1px solid;
          padding: 3px 8px;
          border-radius: 6px;
          display: inline-block;
          margin-bottom: 16px;
        }

        .ind-playbook-title {
          font-size: 1.5rem;
          font-weight: 800;
          margin: 0 0 12px 0;
        }

        .ind-playbook-desc {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin: 0 0 24px 0;
        }

        .ind-playbook-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
          margin-bottom: 20px;
        }

        .ind-playbook-metrics {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
        }

        .ind-playbook-metrics .metrics-label {
          color: rgba(255, 255, 255, 0.5);
        }

        .ind-playbook-metrics .metrics-value {
          font-weight: 700;
        }

        /* Form Section */
        .ind-form-section {
          padding-top: 50px;
          padding-bottom: 60px;
        }

        .ind-form-card {
          max-width: 600px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 40px;
          backdrop-filter: blur(12px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.3);
        }

        .ind-form-heading {
          font-size: 1.35rem;
          font-weight: 700;
          margin: 0 0 28px 0;
          text-align: center;
        }

        .ind-contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .ind-form-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .ind-form-field label {
          font-size: 0.78rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: rgba(255, 255, 255, 0.5);
        }

        .ind-form-field input,
        .ind-form-field textarea {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 12px;
          color: #fff;
          font-family: inherit;
          font-size: 0.92rem;
          transition: border-color 0.2s, background-color 0.2s;
        }

        .ind-form-field input:focus,
        .ind-form-field textarea:focus {
          outline: none;
          border-color: rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.06);
        }

        .ind-submit-btn {
          color: #fff;
          border: none;
          padding: 12px;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          transition: transform 0.2s, filter 0.2s;
        }

        .ind-submit-btn:hover {
          transform: translateY(-1px);
          filter: brightness(1.1);
        }

        .ind-submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Success screen */
        .ind-success-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 20px 0;
        }

        .ind-checkmark-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 2.5px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .ind-success-txt {
          font-size: 1.05rem;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
          font-weight: 500;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2.5px solid rgba(255, 255, 255, 0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Responsive Layouts */
        @media (max-width: 968px) {
          .ind-hero-split {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }
          
          .ind-eyebrow {
            justify-content: center;
          }

          .ind-subtitle {
            margin-left: auto;
            margin-right: auto;
          }

          .ind-actions {
            justify-content: center;
          }

          .ind-stats-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .ind-solutions-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>
    </>
  );
}
