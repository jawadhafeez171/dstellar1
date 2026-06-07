"use client";

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { motion, useInView } from 'framer-motion';

// Custom Count-Up Counter Hook
function useCounter(targetStr: string, duration = 1.8) {
  const numMatch = targetStr.match(/(\d+)/);
  const target = numMatch ? parseInt(numMatch[1], 10) : 0;
  const suffix = targetStr.replace(/\d+/, '');
  const prefix = targetStr.startsWith('+') ? '+' : '';
  const cleanSuffix = suffix.replace('+', '');
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

  return { count: target === 0 ? targetStr : `${prefix}${count}${cleanSuffix}`, ref };
}

// Stats Card Component
function StatCard({ value, label }: { value: string; label: string }) {
  const { count, ref } = useCounter(value);
  return (
    <motion.div
      className="discover-stat-card"
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <span className="discover-stat-val" ref={ref}>
        {count}
      </span>
      <span className="discover-stat-lbl">{label}</span>
      <div className="stat-glow-outline" />
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

function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1.5 + Math.random() * 3,
        duration: 8 + Math.random() * 10,
        delay: Math.random() * 5,
        drift: Math.random() > 0.5 ? 15 : -15,
      }))
    );
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="discover-particles-layer" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="discover-particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: 'var(--accent-4, #00d4c8)',
            borderRadius: '50%',
            boxShadow: `0 0 ${p.size * 3}px var(--accent-4, #00d4c8)`,
            position: 'absolute',
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, p.drift, 0],
            opacity: [0, 0.4, 0],
            scale: [0.8, 1.2, 0.8],
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

// SVG Icons Component for Who We Are
function WhoWeAreIcon({ type }: { type: string }) {
  const strokeProps = { stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, fill: 'none' };
  switch (type) {
    case 'mission':
      return (
        <svg viewBox="0 0 24 24" width="32" height="32" className="icon-svg">
          <circle cx="12" cy="12" r="10" {...strokeProps} />
          <path d="M22 12h-4M6 12H2M12 2v4M12 18v4" {...strokeProps} />
          <circle cx="12" cy="12" r="4" {...strokeProps} />
        </svg>
      );
    case 'vision':
      return (
        <svg viewBox="0 0 24 24" width="32" height="32" className="icon-svg">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" {...strokeProps} />
          <circle cx="12" cy="12" r="3" {...strokeProps} />
        </svg>
      );
    case 'tech':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" className="icon-svg">
          <polyline points="16 18 22 12 16 6" {...strokeProps} />
          <polyline points="8 6 2 12 8 18" {...strokeProps} />
          <line x1="12" y1="2" x2="12" y2="22" {...strokeProps} />
        </svg>
      );
    case 'client':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" className="icon-svg">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" {...strokeProps} />
          <circle cx="9" cy="7" r="4" {...strokeProps} />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" {...strokeProps} />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" {...strokeProps} />
        </svg>
      );
    case 'innovation':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" className="icon-svg">
          <path d="M18 10a6 6 0 0 0-12 0c0 4.993-5.5 1H11v3h2v-3h7.5c-5.5 0-5.5 3.993-5.5 5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-1.007 0-5 5-5" {...strokeProps} />
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A7 7 0 0 0 4 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" {...strokeProps} />
          <line x1="9" y1="18" x2="15" y2="18" {...strokeProps} />
          <line x1="10" y1="22" x2="14" y2="22" {...strokeProps} />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" className="icon-svg">
          <circle cx="12" cy="12" r="10" {...strokeProps} />
          <line x1="12" y1="16" x2="12" y2="12" {...strokeProps} />
          <line x1="12" y1="8" x2="12.01" y2="8" {...strokeProps} />
        </svg>
      );
  }
}

export default function WhoWeAre() {
  const { t, tData } = useLanguage();
  const router = useRouter();
  const data = tData<any>('who_we_are');

  useEffect(() => {
    if (data && data.title) {
      document.title = `${data.title} | Dstellar`;
    }
  }, [data]);

  if (!data) return null;

  const stats = [
    { value: '12+', label: 'Years of Enterprise Service' },
    { value: '300+', label: 'Migrations & Deployments' },
    { value: '100%', label: 'Delivery Success Rate' }
  ];

  const offices = [
    { city: 'Toronto', role: 'Global Headquarters', coords: '43.6532° N, 79.3832° W' },
    { city: 'Madrid', role: 'European Operations', coords: '40.4168° N, 3.7038° W' },
    { city: 'Singapore', role: 'APAC Service Delivery', coords: '1.3521° N, 103.8198° E' },
    { city: 'Austin', role: 'US Delivery Center', coords: '30.2672° N, 97.7431° W' }
  ];

  return (
    <>
      <TopBar />
      
      <main className="discover-page-container">
        {/* Background glow effects */}
        <div className="cyber-glow-bg">
          <div className="glow-circle blue" />
          <div className="glow-circle orange" />
          <div className="discover-grid-overlay" />
          <FloatingParticles />
        </div>

        <div className="discover-page-inner">
          
          {/* HERO SECTION (2-Column Layout) */}
          <section className="discover-hero">
            <div className="discover-hero-content">
              <motion.div 
                className="mono-eyebrow-wrap"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="mono-eyebrow mono">Discover Dstellar · Identity</span>
              </motion.div>
              
              <motion.h1 
                className="discover-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {data.title}
              </motion.h1>
              
              <motion.p 
                className="discover-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {data.subtitle}
              </motion.p>

              <motion.div 
                className="discover-hero-actions"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <button className="cta-btn primary" onClick={() => router.push('/careers/job-search')}>
                  Explore Careers
                </button>
                <button className="cta-btn ghost" onClick={() => router.push('/partners/become')}>
                  Become a Partner
                </button>
              </motion.div>
            </div>

            <motion.div 
              className="discover-hero-image-container"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="hero-image-glow" />
              <img 
                src="/assets/discover_who_we_are.png" 
                alt="Who We Are Identity Illustration" 
                className="discover-hero-img"
              />
            </motion.div>
          </section>

          {/* DYNAMIC STATISTICS ROW */}
          <section className="discover-stats-row">
            {stats.map((stat, idx) => (
              <StatCard key={idx} value={stat.value} label={stat.label} />
            ))}
          </section>

          {/* MISSION & VISION SECTION (Side-by-Side Cards) */}
          <section className="mission-vision-grid">
            <motion.div 
              className="glass-card mission-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="card-badge-box">
                <div className="icon-wrap mission-theme">
                  <WhoWeAreIcon type="mission" />
                </div>
                <span className="card-badge mono">{data.mission_title}</span>
              </div>
              <h3>Empowering Enterprise Velocity</h3>
              <p>{data.mission_desc}</p>
              <div className="card-glow-border target-mission" />
            </motion.div>

            <motion.div 
              className="glass-card vision-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="card-badge-box">
                <div className="icon-wrap vision-theme">
                  <WhoWeAreIcon type="vision" />
                </div>
                <span className="card-badge mono">{data.vision_title}</span>
              </div>
              <h3>The Global Gold Standard</h3>
              <p>{data.vision_desc}</p>
              <div className="card-glow-border target-vision" />
            </motion.div>
          </section>

          {/* CORE VALUES SECTION */}
          <section className="values-section">
            <h2 className="section-heading mono">{data.values_title}</h2>
            <div className="values-grid">
              {data.values && data.values.map((val: any, idx: number) => {
                const iconTypes = ['tech', 'client', 'innovation'];
                const cardClasses = ['val-tech-card', 'val-client-card', 'val-innovation-card'];
                return (
                  <motion.div 
                    key={idx}
                    className={`value-item-card ${cardClasses[idx] || ''}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -6 }}
                  >
                    <div className="value-card-header">
                      <div className="value-icon-box">
                        <WhoWeAreIcon type={iconTypes[idx] || 'default'} />
                      </div>
                      <div className="value-index mono">0{idx + 1}</div>
                    </div>
                    <h4>{val.t}</h4>
                    <p>{val.d}</p>
                    <div className="value-card-highlight" />
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* GLOBAL FOOTPRINT / OFFICES SECTION */}
          <section className="footprint-section">
            <h2 className="section-heading mono">Global Footprint</h2>
            <div className="footprint-grid">
              {offices.map((office, idx) => (
                <motion.div
                  key={idx}
                  className="office-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <span className="office-city">{office.city}</span>
                  <span className="office-role">{office.role}</span>
                  <span className="office-coords mono">{office.coords}</span>
                  <div className="office-ping" />
                </motion.div>
              ))}
            </div>
          </section>

        </div>

        {/* Dynamic global styling for custom visuals and responsive behaviors */}
        <style jsx global>{`
          .discover-page-container {
            background: var(--grad-ink, #0b0f19) !important;
            color: #ffffff !important;
            min-height: 100vh;
            position: relative;
            overflow: hidden;
            padding-top: 100px;
            padding-bottom: 80px;
            font-family: var(--font-sans, 'Inter', sans-serif);
          }

          .cyber-glow-bg {
            position: absolute;
            inset: 0;
            pointer-events: none;
            overflow: hidden;
            z-index: 0;
          }

          .discover-grid-overlay {
            position: absolute;
            inset: 0;
            background-image: 
              linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
            background-size: 50px 50px;
            opacity: 0.6;
          }

          .glow-circle {
            position: absolute;
            border-radius: 50%;
            filter: blur(140px);
            opacity: 0.12;
          }

          .glow-circle.blue {
            width: 700px;
            height: 700px;
            background: var(--accent, #0052d4);
            top: -200px;
            left: -150px;
          }

          .glow-circle.orange {
            width: 600px;
            height: 600px;
            background: var(--accent-2, #7928ca);
            bottom: -150px;
            right: -100px;
          }

          .discover-page-inner {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
            position: relative;
            z-index: 1;
          }

          /* Hero Layout 2-Column */
          .discover-hero {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            gap: 48px;
            align-items: center;
            padding-top: 70px;
            padding-bottom: 60px;
          }

          .mono-eyebrow-wrap {
            margin-bottom: 16px;
          }

          .mono-eyebrow {
            color: var(--accent-4, #00d4c8);
            font-size: 0.85rem;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            font-weight: 600;
          }

          .discover-title {
            font-size: clamp(2.4rem, 4.5vw, 3.8rem);
            font-weight: 850;
            letter-spacing: -0.03em;
            line-height: 1.15;
            margin: 0 0 24px 0;
            background: linear-gradient(135deg, #ffffff 30%, rgba(255, 255, 255, 0.7) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .discover-subtitle {
            font-size: 1.25rem;
            color: var(--muted, #a2a8c3) !important;
            line-height: 1.65;
            margin: 0 0 36px 0;
            max-width: 620px;
          }

          .discover-hero-actions {
            display: flex;
            gap: 16px;
          }

          .cta-btn {
            padding: 13px 28px;
            border-radius: 100px;
            font-size: 0.95rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.25s ease;
          }

          .cta-btn.primary {
            background: var(--accent-4, #00d4c8);
            color: #0b0f19 !important;
            border: none;
          }

          .cta-btn.primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 212, 200, 0.25) !important;
          }

          .cta-btn.ghost {
            background: rgba(255, 255, 255, 0.03);
            color: #ffffff !important;
            border: 1px solid rgba(255, 255, 255, 0.15);
          }

          .cta-btn.ghost:hover {
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 255, 255, 0.3);
            transform: translateY(-2px);
          }

          .discover-hero-image-container {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .hero-image-glow {
            position: absolute;
            inset: -20px;
            border-radius: 24px;
            background: radial-gradient(circle, rgba(0, 212, 200, 0.08) 0%, transparent 70%);
            filter: blur(20px);
            pointer-events: none;
          }

          .discover-hero-img {
            max-width: 100%;
            height: auto;
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.07);
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
            animation: identityFloat 6s ease-in-out infinite;
          }

          @keyframes identityFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }

          /* Dynamic Stats Card Row */
          .discover-stats-row {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-bottom: 75px;
          }

          .discover-stat-card {
            background: rgba(255, 255, 255, 0.02) !important;
            border: 1px solid rgba(255, 255, 255, 0.06) !important;
            border-radius: 18px;
            padding: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            position: relative;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2) !important;
          }

          .discover-stat-val {
            font-size: 2.6rem;
            font-weight: 850;
            color: #ffffff !important;
            background: linear-gradient(135deg, #ffffff 0%, var(--accent-4, #00d4c8) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 6px;
          }

          .discover-stat-lbl {
            font-size: 0.82rem;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            color: var(--muted, #a2a8c3) !important;
            font-weight: 550;
          }

          .stat-glow-outline {
            position: absolute;
            inset: 0;
            border: 1.5px solid transparent;
            border-radius: 18px;
            transition: all 0.3s ease;
            pointer-events: none;
          }

          .discover-stat-card:hover .stat-glow-outline {
            border-color: rgba(0, 212, 200, 0.25);
            box-shadow: inset 0 0 10px rgba(0, 212, 200, 0.05);
          }

          /* Mission & Vision Section */
          .mission-vision-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
            margin-bottom: 80px;
          }

          .glass-card {
            background: rgba(11, 15, 25, 0.4) !important;
            border: 1px solid rgba(255, 255, 255, 0.08) !important;
            border-radius: 20px;
            padding: 40px;
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(10px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2) !important;
            transition: border-color 0.3s ease, transform 0.3s ease;
            z-index: 1;
          }

          .glass-card::before {
            content: '';
            position: absolute;
            inset: 0;
            background-size: cover !important;
            background-position: center !important;
            z-index: -1;
            transition: transform 0.6s ease, opacity 0.6s ease;
            opacity: 0.55;
          }

          .mission-card::before {
            background: linear-gradient(180deg, rgba(11, 15, 25, 0.8) 0%, rgba(11, 15, 25, 0.94) 100%), url('/assets/discover_mission.png');
          }

          .vision-card::before {
            background: linear-gradient(180deg, rgba(11, 15, 25, 0.8) 0%, rgba(11, 15, 25, 0.94) 100%), url('/assets/discover_vision.png');
          }

          .glass-card:hover {
            border-color: rgba(255, 255, 255, 0.15) !important;
            transform: translateY(-4px);
          }

          .glass-card:hover::before {
            transform: scale(1.06);
            opacity: 0.8;
          }

          .card-badge-box {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 24px;
          }

          .icon-wrap {
            width: 46px;
            height: 46px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .icon-wrap.mission-theme {
            background: rgba(0, 212, 200, 0.1);
            color: var(--accent-4, #00d4c8);
          }

          .icon-wrap.vision-theme {
            background: rgba(121, 40, 202, 0.15);
            color: var(--accent-2, #a855f7);
          }

          .card-badge {
            background: rgba(255, 255, 255, 0.06) !important;
            color: #ffffff !important;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.78rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            letter-spacing: 0.05em;
          }

          .glass-card h3 {
            font-size: 1.6rem;
            font-weight: 800;
            margin: 0 0 14px 0;
            color: #ffffff;
          }

          .glass-card p {
            color: rgba(255, 255, 255, 0.7) !important;
            line-height: 1.6;
            font-size: 1.02rem;
            margin: 0;
          }

          .card-glow-border {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 3px;
            opacity: 0.3;
            transition: opacity 0.3s ease;
          }

          .glass-card:hover .card-glow-border {
            opacity: 0.8;
          }

          .target-mission {
            background: linear-gradient(90deg, transparent 0%, var(--accent-4, #00d4c8) 50%, transparent 100%);
          }

          .target-vision {
            background: linear-gradient(90deg, transparent 0%, var(--accent-2, #a855f7) 50%, transparent 100%);
          }

          /* Core Values Section */
          .values-section {
            margin-bottom: 80px;
          }

          .section-heading {
            font-size: 0.9rem;
            letter-spacing: 0.15em;
            color: var(--muted, #a2a8c3) !important;
            margin-bottom: 36px;
            text-transform: uppercase;
            border-left: 2px solid var(--accent-4, #00d4c8);
            padding-left: 12px;
            font-weight: 700;
          }

          .values-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }

          .value-item-card {
            background: rgba(11, 15, 25, 0.5) !important;
            border: 1px solid rgba(255, 255, 255, 0.05) !important;
            border-radius: 16px;
            padding: 36px 30px;
            position: relative;
            transition: all 0.3s ease;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
            z-index: 1;
            overflow: hidden;
          }

          .value-item-card::before {
            content: '';
            position: absolute;
            inset: 0;
            background-size: cover !important;
            background-position: center !important;
            z-index: -1;
            transition: transform 0.6s ease, opacity 0.6s ease;
            opacity: 0.45;
            border-radius: 16px;
          }

          .val-tech-card::before {
            background: linear-gradient(180deg, rgba(11, 15, 25, 0.82) 0%, rgba(11, 15, 25, 0.95) 100%), url('/assets/discover_val_tech.png');
          }

          .val-client-card::before {
            background: linear-gradient(180deg, rgba(11, 15, 25, 0.82) 0%, rgba(11, 15, 25, 0.95) 100%), url('/assets/discover_val_client.png');
          }

          .val-innovation-card::before {
            background: linear-gradient(180deg, rgba(11, 15, 25, 0.82) 0%, rgba(11, 15, 25, 0.95) 100%), url('/assets/discover_val_innovation.png');
          }

          .value-item-card:hover {
            border-color: rgba(0, 212, 200, 0.2) !important;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35) !important;
          }

          .value-item-card:hover::before {
            transform: scale(1.06);
            opacity: 0.75;
          }

          .value-card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 24px;
          }

          .value-icon-box {
            width: 44px;
            height: 44px;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.08);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--accent-4, #00d4c8);
            transition: all 0.3s ease;
          }

          .value-item-card:hover .value-icon-box {
            background: rgba(0, 212, 200, 0.1);
            border-color: rgba(0, 212, 200, 0.3);
            transform: scale(1.05);
          }

          .value-index {
            color: rgba(255, 255, 255, 0.15);
            font-weight: 800;
            font-size: 1.1rem;
            transition: color 0.3s ease;
          }

          .value-item-card:hover .value-index {
            color: var(--accent-4, #00d4c8);
          }

          .value-item-card h4 {
            font-size: 1.25rem;
            margin: 0 0 12px 0;
            font-weight: 700;
            color: #ffffff;
          }

          .value-item-card p {
            color: rgba(255, 255, 255, 0.6) !important;
            line-height: 1.6;
            margin: 0;
            font-size: 0.95rem;
          }

          .value-card-highlight {
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 0;
            background: var(--accent-4, #00d4c8);
            transition: height 0.3s ease;
            border-top-left-radius: 16px;
            border-bottom-left-radius: 16px;
          }

          .value-item-card:hover .value-card-highlight {
            height: 100%;
          }

          /* Global Footprint Grid */
          .footprint-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }

          .office-card {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            padding: 26px;
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 8px;
            transition: all 0.25s ease;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          }

          .office-card:hover {
            border-color: rgba(255, 255, 255, 0.15);
            background: rgba(255, 255, 255, 0.04);
            box-shadow: 0 12px 25px rgba(0, 0, 0, 0.25);
          }

          .office-city {
            font-size: 1.25rem;
            font-weight: 750;
            color: #ffffff;
          }

          .office-role {
            font-size: 0.82rem;
            color: var(--accent-4, #00d4c8);
            font-weight: 600;
          }

          .office-coords {
            font-size: 0.72rem;
            color: rgba(255, 255, 255, 0.3);
            margin-top: 8px;
          }

          .office-ping {
            position: absolute;
            top: 26px;
            right: 26px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--accent-4, #00d4c8);
            box-shadow: 0 0 10px var(--accent-4, #00d4c8);
          }

          /* Responsive Styles */
          @media (max-width: 968px) {
            .discover-hero {
              grid-template-columns: 1fr;
              gap: 40px;
              text-align: center;
              padding-top: 30px;
            }

            .discover-subtitle {
              margin-left: auto;
              margin-right: auto;
            }

            .discover-hero-actions {
              justify-content: center;
            }

            .discover-stats-row {
              grid-template-columns: 1fr;
              gap: 16px;
            }

            .mission-vision-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }

            .values-grid {
              grid-template-columns: 1fr;
              gap: 16px;
            }

            .footprint-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 16px;
            }
          }

          @media (max-width: 480px) {
            .footprint-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </main>

      <Footer />
    </>
  );
}
