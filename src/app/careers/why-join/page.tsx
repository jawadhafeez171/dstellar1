"use client";

import { useEffect, useRef, useState } from 'react';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

/* ─── Animated counter hook ─────────────────────────────────────── */
function useCounter(target: number, duration = 1.8) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return { count, ref };
}

/* ─── Animated SVG icons for each pillar ────────────────────────── */
const PillarSVGs = [
  /* 0 – Rocket / High Impact */
  ({ color }: { color: string }) => (
    <svg viewBox="0 0 64 64" width="36" height="36" fill="none">
      <motion.path
        d="M32 8 C44 8 56 20 56 32 C56 44 44 56 32 56"
        stroke={color} strokeWidth="2" strokeLinecap="round" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
      />
      <motion.path
        d="M32 16 L20 44 L32 38 L44 44 Z"
        fill={color} opacity="0.85"
        animate={{ y: [-2, 2, -2] }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.circle cx="32" cy="44" r="3" fill={color}
        animate={{ scale: [1, 1.6, 1], opacity: [0.8, 0.3, 0.8] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.circle cx="24" cy="48" r="2" fill={color} opacity="0.5"
        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
      />
      <motion.circle cx="40" cy="48" r="2" fill={color} opacity="0.5"
        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
      />
    </svg>
  ),
  /* 1 – Handshake / Senior Teams */
  ({ color }: { color: string }) => (
    <svg viewBox="0 0 64 64" width="36" height="36" fill="none">
      <motion.path d="M8 28 L24 20 L32 24 L40 20 L56 28"
        stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none"
        animate={{ pathLength: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle cx="32" cy="24" r="5" fill={color} opacity="0.9"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      />
      <motion.path d="M16 28 L16 44 M48 28 L48 44"
        stroke={color} strokeWidth="2" strokeLinecap="round"
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.path d="M16 44 Q32 52 48 44"
        stroke={color} strokeWidth="2" strokeLinecap="round" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.5, repeat: Infinity, repeatDelay: 2 }}
      />
    </svg>
  ),
  /* 2 – Globe / Global Reach */
  ({ color }: { color: string }) => (
    <svg viewBox="0 0 64 64" width="36" height="36" fill="none">
      <motion.circle cx="32" cy="32" r="22" stroke={color} strokeWidth="2"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
      <motion.ellipse cx="32" cy="32" rx="10" ry="22" stroke={color} strokeWidth="1.5" opacity="0.5"
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
      <line x1="10" y1="32" x2="54" y2="32" stroke={color} strokeWidth="1.5" opacity="0.4" />
      <line x1="32" y1="10" x2="32" y2="54" stroke={color} strokeWidth="1.5" opacity="0.4" />
      {[[20,20],[44,20],[44,44],[20,44]].map(([cx, cy], i) => (
        <motion.circle key={i} cx={cx} cy={cy} r="3" fill={color}
          animate={{ scale: [0.6, 1.3, 0.6], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
    </svg>
  ),
  /* 3 – Brain / Cutting-Edge Tech */
  ({ color }: { color: string }) => (
    <svg viewBox="0 0 64 64" width="36" height="36" fill="none">
      <motion.path
        d="M20 40 C12 36 12 24 20 20 C20 14 28 10 32 16 C36 10 44 14 44 20 C52 24 52 36 44 40 L44 48 L20 48 Z"
        stroke={color} strokeWidth="2" fill="none" strokeLinejoin="round"
        animate={{ filter: [`drop-shadow(0 0 4px ${color})`, `drop-shadow(0 0 12px ${color})`, `drop-shadow(0 0 4px ${color})`] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      {[[28,28],[36,28],[32,34]].map(([cx,cy],i) => (
        <motion.circle key={i} cx={cx} cy={cy} r="2.5" fill={color}
          animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
      <motion.path d="M28 28 L36 28 M32 28 L32 34"
        stroke={color} strokeWidth="1.5" strokeLinecap="round"
        animate={{ opacity: [0.3, 0.9, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </svg>
  ),
  /* 4 – Chart / Transparent Growth */
  ({ color }: { color: string }) => (
    <svg viewBox="0 0 64 64" width="36" height="36" fill="none">
      <motion.polyline
        points="10,50 20,35 32,22 44,30 54,14"
        stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.5 }}
      />
      {[[20,35],[32,22],[44,30],[54,14]].map(([cx,cy],i) => (
        <motion.circle key={i} cx={cx} cy={cy} r="4" fill={color}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.4, delay: 0.3 + i * 0.35, repeat: Infinity, repeatDelay: 2.5 }}
        />
      ))}
      <line x1="10" y1="50" x2="54" y2="50" stroke={color} strokeWidth="1" opacity="0.3" />
      <line x1="10" y1="50" x2="10" y2="14" stroke={color} strokeWidth="1" opacity="0.3" />
    </svg>
  ),
  /* 5 – Heart / People-First */
  ({ color }: { color: string }) => (
    <svg viewBox="0 0 64 64" width="36" height="36" fill="none">
      <motion.path
        d="M32 48 C32 48 10 36 10 22 C10 14 16 10 22 12 C26 13 30 17 32 20 C34 17 38 13 42 12 C48 10 54 14 54 22 C54 36 32 48 32 48 Z"
        fill={color} opacity="0.85"
        animate={{ scale: [1, 1.08, 1], filter: [`drop-shadow(0 0 4px ${color})`, `drop-shadow(0 0 14px ${color})`, `drop-shadow(0 0 4px ${color})`] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      />
      {[[-6,-4],[6,-4],[0,6]].map(([dx,dy],i) => (
        <motion.circle key={i} cx={32+dx} cy={32+dy} r="1.5" fill="#fff" opacity="0.7"
          animate={{ opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.35 }}
        />
      ))}
    </svg>
  ),
];

/* ─── Floating particles background ─────────────────────────────── */
type Particle = {
  id: number; x: number; y: number; size: number;
  duration: number; delay: number; color: string; drift: number;
};

function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  // Only generate random values on the client to avoid SSR/client mismatch
  useEffect(() => {
    const colors = ['#4a3aff','#00d4c8','#ff7a00','#a78bfa','#ffd166'];
    setParticles(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1.5 + Math.random() * 3,
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 8,
        color: colors[i % colors.length],
        drift: Math.random() > 0.5 ? 20 : -20,
      }))
    );
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="particles-layer" aria-hidden="true">
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="particle"
          style={{
            left: `${p.x}%`, top: `${p.y}%`,
            width: p.size, height: p.size,
            background: p.color,
            borderRadius: '50%',
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, p.drift, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ─── Stat counter pill ──────────────────────────────────────────── */
function StatPill({ value, label }: { value: string; label: string }) {
  const numMatch = value.match(/(\d+)/);
  const num = numMatch ? parseInt(numMatch[1]) : 0;
  const suffix = value.replace(/\d+/, '');
  const { count, ref } = useCounter(num, 2);

  return (
    <motion.div
      className="stat-pill"
      whileHover={{ scale: 1.05, borderColor: 'rgba(74,58,255,0.5)' }}
      transition={{ duration: 0.2 }}
    >
      <span className="stat-val" ref={ref}>
        {count}{suffix}
      </span>
      <span className="stat-lbl">{label}</span>
    </motion.div>
  );
}

/* ─── Main page ──────────────────────────────────────────────────── */
export default function WhyJoin() {
  const { tData } = useLanguage();
  const data = tData<any>('careers_why');
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);

  useEffect(() => {
    if (data?.title) document.title = `${data.title} | Dstellar`;
  }, [data]);

  if (!data) return null;

  const pillarAccents = ['#4a3aff', '#00d4c8', '#ff7a00', '#a78bfa', '#ffd166', '#ff4d6d'];

  return (
    <>
      <TopBar />

      <main className="wj-page">
        {/* ── Background layers ── */}
        <div className="wj-bg" aria-hidden="true">
          <div className="wj-orb orb-1" />
          <div className="wj-orb orb-2" />
          <div className="wj-orb orb-3" />
          <div className="wj-grid" />
          <FloatingParticles />
        </div>

        {/* ── HERO SECTION with image ── */}
        <section className="wj-hero">
          <div className="wj-inner">
            <div className="hero-two-col">
              {/* Left: text */}
              <div className="hero-text-col">
                <motion.div
                  className="wj-eyebrow"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.span
                    className="eyebrow-dot"
                    animate={{
                      boxShadow: ['0 0 8px #4a3aff', '0 0 20px #ff7a00', '0 0 8px #00d4c8', '0 0 8px #4a3aff'],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <span className="mono eyebrow-txt">{data.badge}</span>
                </motion.div>

                <motion.h1
                  className="wj-title"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  {data.title}
                </motion.h1>

                <motion.p
                  className="wj-subtitle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  {data.subtitle}
                </motion.p>

                {/* Office locations animated pills */}
                <motion.div
                  className="location-pills"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  {['Toronto 🇨🇦','Madrid 🇪🇸','Singapore 🇸🇬','Austin 🇺🇸'].map((loc, i) => (
                    <motion.span
                      key={i}
                      className="location-pill"
                      whileHover={{ scale: 1.1, y: -3 }}
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
                    >
                      {loc}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Animated scroll indicator */}
                <motion.div
                  className="scroll-hint"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2">
                    <path d="M12 5v14M5 12l7 7 7-7"/>
                  </svg>
                </motion.div>
              </div>

              {/* Right: hero image */}
              <motion.div
                className="hero-img-col"
                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="hero-img-frame">
                  <Image
                    src="/assets/why_join_hero.png"
                    alt="Dstellar global team collaborating"
                    width={700}
                    height={440}
                    className="hero-img"
                    priority
                  />
                  {/* Decorative animated SVG overlay */}
                  <svg className="hero-corner-deco" viewBox="0 0 120 120" width="120" height="120" aria-hidden="true">
                    <motion.rect x="4" y="4" width="112" height="112" rx="12"
                      stroke="#4a3aff" strokeWidth="2" fill="none" opacity="0.6"
                      animate={{ strokeDashoffset: [448, 0] }}
                      style={{ strokeDasharray: 448 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.circle cx="60" cy="60" r="30"
                      stroke="#00d4c8" strokeWidth="1" fill="none" opacity="0.3"
                      animate={{ r: [28, 38, 28], opacity: [0.3, 0.1, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                  </svg>

                  {/* Floating badge over image */}
                  <motion.div
                    className="img-badge"
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="img-badge-val">300+</span>
                    <span className="img-badge-lbl">Enterprise Clients</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── STATS SECTION ── */}
        <section className="wj-stats-section">
          <div className="wj-inner">
            <motion.div
              className="stats-bar"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {data.stats?.map((stat: any, idx: number) => (
                <StatPill key={idx} value={stat.value} label={stat.label} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CULTURE IMAGE STRIP ── */}
        <section className="wj-image-strip">
          <div className="wj-inner">
            <div className="image-strip-grid">
              <motion.div
                className="strip-img-wrap large"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="/assets/why_join_globe.png"
                  alt="Dstellar global network"
                  width={600}
                  height={400}
                  className="strip-img"
                />
                <div className="strip-overlay">
                  <span className="strip-label mono">Global Reach</span>
                </div>
              </motion.div>

              <motion.div
                className="strip-img-wrap"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="/assets/why_join_culture.png"
                  alt="Dstellar team culture"
                  width={400}
                  height={400}
                  className="strip-img"
                />
                <div className="strip-overlay">
                  <span className="strip-label mono">People-First Culture</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── PILLARS SECTION ── */}
        <section className="wj-pillars-section">
          <div className="wj-inner">
            <motion.div
              className="section-heading-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-eyebrow mono">What makes us different</div>
              <h2 className="section-heading">Built for people who build the future</h2>
            </motion.div>

            <div className="pillars-grid">
              {data.pillars?.map((pillar: any, idx: number) => {
                const SVGIcon = PillarSVGs[idx];
                const accent = pillarAccents[idx];
                const isHovered = hoveredPillar === idx;

                return (
                  <motion.div
                    key={idx}
                    className="pillar-card"
                    style={{ '--accent': accent } as React.CSSProperties}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.08 }}
                    whileHover={{ y: -10 }}
                    onHoverStart={() => setHoveredPillar(idx)}
                    onHoverEnd={() => setHoveredPillar(null)}
                  >
                    {/* Animated SVG icon */}
                    <div
                      className="pillar-icon-wrap"
                      style={{
                        background: `${accent}15`,
                        border: `1px solid ${accent}30`,
                        boxShadow: isHovered ? `0 0 30px ${accent}40, inset 0 0 20px ${accent}10` : `0 4px 20px ${accent}15`,
                      }}
                    >
                      <SVGIcon color={accent} />
                    </div>

                    <h3 className="pillar-title">{pillar.title}</h3>
                    <p className="pillar-desc">{pillar.desc}</p>

                    {/* Corner number */}
                    <span className="pillar-num mono" style={{ color: accent }}>0{idx + 1}</span>

                    {/* Hover glow bg */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          className="pillar-glow-bg"
                          style={{ background: `radial-gradient(circle at bottom left, ${accent}18 0%, transparent 65%)` }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </AnimatePresence>

                    {/* Bottom accent bar */}
                    <motion.div
                      className="pillar-bar"
                      style={{ background: accent }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.35 }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA STRIP ── */}
        <section className="wj-cta-section">
          <div className="wj-inner">
            <motion.div
              className="cta-strip"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Animated background pattern */}
              <div className="cta-bg-pattern" aria-hidden="true">
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="cta-ring"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.03, 0.15] }}
                    transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.7 }}
                    style={{
                      width: 80 + i * 60,
                      height: 80 + i * 60,
                      border: '1px solid rgba(74,58,255,0.3)',
                      borderRadius: '50%',
                    }}
                  />
                ))}
              </div>

              <div className="cta-content">
                <div className="cta-text-col">
                  <motion.h2
                    className="cta-heading"
                    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    Ready to join the team?
                  </motion.h2>
                  <p className="cta-sub">Explore our open roles and take the next step in your enterprise tech career.</p>
                </div>
                <div className="cta-actions">
                  <motion.a href="/careers/job-search" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <button className="cta-btn-primary">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                      {data.cta}
                    </button>
                  </motion.a>
                  <motion.a href="/careers/students" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <button className="cta-btn-ghost">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                      Student Programs
                    </button>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ────────────────────────────────────── STYLES ── */}
        <style jsx global>{`
          .wj-page {
            background: linear-gradient(160deg, #07051d 0%, #0a1228 45%, #05080f 100%);
            color: #fff;
            min-height: 100vh;
            overflow: hidden;
            position: relative;
            font-family: var(--font-sans, 'Inter', sans-serif);
          }

          /* ── Background ── */
          .wj-bg {
            position: fixed;
            inset: 0;
            pointer-events: none;
            z-index: 0;
          }

          .wj-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(130px);
          }

          .orb-1 {
            width: 700px; height: 700px;
            background: radial-gradient(circle, #4a3aff 0%, transparent 70%);
            opacity: 0.14;
            top: -200px; left: -100px;
            animation: orbFloat 18s ease-in-out infinite;
          }

          .orb-2 {
            width: 600px; height: 600px;
            background: radial-gradient(circle, #ff7a00 0%, transparent 70%);
            opacity: 0.09;
            top: 400px; right: -150px;
            animation: orbFloat 22s ease-in-out infinite reverse;
          }

          .orb-3 {
            width: 500px; height: 500px;
            background: radial-gradient(circle, #00d4c8 0%, transparent 70%);
            opacity: 0.08;
            bottom: 200px; left: 35%;
            animation: orbFloat 15s ease-in-out infinite 3s;
          }

          @keyframes orbFloat {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -40px) scale(1.05); }
            66% { transform: translate(-20px, 30px) scale(0.95); }
          }

          .wj-grid {
            position: absolute;
            inset: 0;
            background-image:
              linear-gradient(rgba(74,58,255,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(74,58,255,0.035) 1px, transparent 1px);
            background-size: 60px 60px;
          }

          .particles-layer {
            position: absolute;
            inset: 0;
            overflow: hidden;
          }

          .particle {
            position: absolute;
          }

          /* ── Inner wrapper ── */
          .wj-inner {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 28px;
            position: relative;
            z-index: 1;
          }

          /* ── Hero ── */
          .wj-hero {
            padding-top: 148px;
            padding-bottom: 80px;
          }

          .hero-two-col {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 64px;
            align-items: center;
          }

          .wj-eyebrow {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 20px;
          }

          .eyebrow-dot {
            width: 9px; height: 9px;
            border-radius: 50%;
            background: linear-gradient(135deg, #4a3aff, #ff7a00);
            flex-shrink: 0;
          }

          .eyebrow-txt {
            background: linear-gradient(90deg, #a78bfa, #5eead4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: 0.15em;
            font-size: 0.75rem;
          }

          .wj-title {
            font-size: 4rem;
            font-weight: 900;
            letter-spacing: -0.04em;
            line-height: 1.05;
            margin: 0 0 20px 0;
            background: linear-gradient(140deg, #ffffff 0%, #c4b5fd 35%, #ff7a00 70%, #ffd166 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: 200%;
          }

          .wj-subtitle {
            font-size: 1.15rem;
            color: rgba(255,255,255,0.6);
            line-height: 1.7;
            margin: 0 0 32px 0;
            max-width: 520px;
          }

          .location-pills {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 40px;
          }

          .location-pill {
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 20px;
            padding: 6px 14px;
            font-size: 0.8rem;
            color: rgba(255,255,255,0.7);
            cursor: default;
          }

          .scroll-hint {
            display: inline-flex;
            align-items: center;
          }

          /* ── Hero image ── */
          .hero-img-col { position: relative; }

          .hero-img-frame {
            position: relative;
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid rgba(74,58,255,0.2);
            box-shadow: 0 30px 80px rgba(0,0,0,0.5), 0 0 60px rgba(74,58,255,0.08);
          }

          .hero-img {
            width: 100%;
            height: auto;
            display: block;
            transition: transform 0.5s ease;
          }

          .hero-img-frame:hover .hero-img {
            transform: scale(1.03);
          }

          .hero-corner-deco {
            position: absolute;
            top: -1px;
            right: -1px;
            pointer-events: none;
          }

          .img-badge {
            position: absolute;
            bottom: 24px;
            left: 24px;
            background: rgba(10,12,30,0.85);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(74,58,255,0.3);
            border-radius: 12px;
            padding: 14px 20px;
            display: flex;
            flex-direction: column;
            gap: 2px;
          }

          .img-badge-val {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 1.5rem;
            font-weight: 700;
            background: linear-gradient(135deg, #a78bfa, #5eead4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .img-badge-lbl {
            font-size: 0.75rem;
            color: rgba(255,255,255,0.5);
          }

          /* ── Stats ── */
          .wj-stats-section {
            padding: 0 0 60px 0;
          }

          .stats-bar {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
          }

          .stat-pill {
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 16px;
            padding: 24px 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            flex: 1;
            min-width: 160px;
            cursor: default;
            transition: background 0.3s ease;
          }

          .stat-pill:hover {
            background: rgba(74,58,255,0.06);
          }

          .stat-val {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 3rem;
            font-weight: 800;
            background: linear-gradient(135deg, #a78bfa, #5eead4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            line-height: 1;
          }

          .stat-lbl {
            font-size: 0.85rem;
            color: rgba(255,255,255,0.5);
            text-align: center;
          }

          /* ── Image strip ── */
          .wj-image-strip {
            padding: 0 0 80px 0;
          }

          .image-strip-grid {
            display: grid;
            grid-template-columns: 1.4fr 1fr;
            gap: 20px;
          }

          .strip-img-wrap {
            position: relative;
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid rgba(255,255,255,0.07);
            cursor: pointer;
          }

          .strip-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.5s ease;
          }

          .strip-img-wrap:hover .strip-img {
            transform: scale(1.06);
          }

          .strip-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(7,5,29,0.7) 0%, transparent 50%);
            display: flex;
            align-items: flex-end;
            padding: 20px;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .strip-img-wrap:hover .strip-overlay {
            opacity: 1;
          }

          .strip-label {
            font-size: 0.8rem;
            letter-spacing: 0.12em;
            color: rgba(255,255,255,0.8);
          }

          /* ── Pillars ── */
          .wj-pillars-section {
            padding: 0 0 80px 0;
          }

          .section-heading-row {
            margin-bottom: 48px;
          }

          .section-eyebrow {
            font-size: 0.75rem;
            letter-spacing: 0.18em;
            color: rgba(255,255,255,0.35);
            margin-bottom: 10px;
            border-left: 2px solid #4a3aff;
            padding-left: 12px;
          }

          .section-heading {
            font-size: 2.2rem;
            font-weight: 800;
            letter-spacing: -0.03em;
            margin: 0;
            background: linear-gradient(135deg, #fff 0%, #a78bfa 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .pillars-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }

          .pillar-card {
            background: rgba(255,255,255,0.025);
            border: 1px solid rgba(255,255,255,0.07);
            border-radius: 20px;
            padding: 36px 30px 32px;
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(10px);
            cursor: default;
            transition: border-color 0.3s ease, background 0.3s ease;
          }

          .pillar-card:hover {
            border-color: var(--accent, #4a3aff);
            background: rgba(255,255,255,0.04);
            box-shadow: 0 25px 60px rgba(0,0,0,0.3), 0 0 30px rgba(74,58,255,0.06);
          }

          .pillar-icon-wrap {
            width: 64px;
            height: 64px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 22px;
            transition: box-shadow 0.4s ease, transform 0.3s ease;
          }

          .pillar-card:hover .pillar-icon-wrap {
            transform: scale(1.08) rotate(-4deg);
          }

          .pillar-title {
            font-size: 1.15rem;
            font-weight: 700;
            margin: 0 0 10px 0;
            color: #fff;
            letter-spacing: -0.01em;
          }

          .pillar-desc {
            font-size: 0.9rem;
            line-height: 1.65;
            color: rgba(255,255,255,0.6);
            margin: 0;
          }

          .pillar-num {
            position: absolute;
            top: 20px;
            right: 22px;
            font-size: 0.65rem;
            opacity: 0.4;
          }

          .pillar-glow-bg {
            position: absolute;
            inset: 0;
            pointer-events: none;
          }

          .pillar-bar {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            transform-origin: left;
          }

          /* ── CTA ── */
          .wj-cta-section {
            padding: 0 0 100px 0;
          }

          .cta-strip {
            background: rgba(74,58,255,0.05);
            border: 1px solid rgba(74,58,255,0.18);
            border-radius: 24px;
            padding: 60px 56px;
            position: relative;
            overflow: hidden;
          }

          .cta-bg-pattern {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            pointer-events: none;
          }

          .cta-ring {
            position: absolute;
          }

          .cta-content {
            position: relative;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 40px;
            flex-wrap: wrap;
          }

          .cta-heading {
            font-size: 2rem;
            font-weight: 800;
            margin: 0 0 10px 0;
            background: linear-gradient(135deg, #fff 0%, #c4b5fd 50%, #ffd166 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .cta-sub {
            color: rgba(255,255,255,0.55);
            font-size: 1rem;
            margin: 0;
            max-width: 460px;
          }

          .cta-actions {
            display: flex;
            gap: 14px;
            flex-wrap: wrap;
          }

          .cta-btn-primary {
            display: flex;
            align-items: center;
            gap: 8px;
            background: linear-gradient(135deg, #4a3aff 0%, #7c3aed 100%);
            color: #fff;
            border: none;
            padding: 14px 30px;
            border-radius: 12px;
            font-size: 0.95rem;
            font-weight: 600;
            cursor: pointer;
            font-family: inherit;
            white-space: nowrap;
            transition: box-shadow 0.25s ease;
          }

          .cta-btn-primary:hover {
            box-shadow: 0 12px 35px rgba(74,58,255,0.5);
          }

          .cta-btn-ghost {
            display: flex;
            align-items: center;
            gap: 8px;
            background: transparent;
            color: rgba(255,255,255,0.75);
            border: 1px solid rgba(255,255,255,0.15);
            padding: 14px 28px;
            border-radius: 12px;
            font-size: 0.95rem;
            font-weight: 600;
            cursor: pointer;
            font-family: inherit;
            white-space: nowrap;
            transition: all 0.25s ease;
          }

          .cta-btn-ghost:hover {
            background: rgba(255,255,255,0.06);
            border-color: rgba(255,255,255,0.3);
            color: #fff;
          }

          /* ── Responsive ── */
          @media (max-width: 1000px) {
            .hero-two-col { grid-template-columns: 1fr; gap: 48px; }
            .hero-img-col { display: none; }
            .pillars-grid { grid-template-columns: repeat(2, 1fr); }
            .image-strip-grid { grid-template-columns: 1fr; }
            .wj-title { font-size: 3rem; }
          }

          @media (max-width: 640px) {
            .pillars-grid { grid-template-columns: 1fr; }
            .stats-bar { flex-direction: column; }
            .cta-content { flex-direction: column; }
            .cta-actions { flex-direction: column; width: 100%; }
            .cta-btn-primary, .cta-btn-ghost { justify-content: center; }
            .wj-title { font-size: 2.4rem; }
            .cta-strip { padding: 40px 24px; }
          }
        `}</style>
      </main>

      <Footer />
    </>
  );
}
