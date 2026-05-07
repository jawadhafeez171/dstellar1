"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { DSTELLAR_DATA as D } from '@/lib/data';

function HeroOrbits() {
  return (
    <motion.svg
      className="hero-orbits" viewBox="0 0 600 600" aria-hidden="true"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <defs>
        <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffd166" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#ff5b9d" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#4a3aff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ringStroke" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#4a3aff" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#ff5b9d" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ff8a3d" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      <circle cx="300" cy="300" r="180" fill="url(#coreGrad)" />

      <g fill="none" stroke="url(#ringStroke)" strokeWidth="1">
        <circle cx="300" cy="300" r="120" />
        <circle cx="300" cy="300" r="180" />
        <circle cx="300" cy="300" r="240" strokeDasharray="2 6" />
      </g>

      <g className="orbit orbit-1"><g transform="translate(300 180)"><circle r="10" fill="#4a3aff" /><circle r="18" fill="none" stroke="#4a3aff" strokeOpacity="0.35" /></g></g>
      <g className="orbit orbit-2"><g transform="translate(480 300)"><circle r="6" fill="#ff5b9d" /></g></g>
      <g className="orbit orbit-3"><g transform="translate(120 300)"><circle r="8" fill="#00d4c8" /></g></g>
      <g className="orbit orbit-4"><g transform="translate(420 460)"><circle r="5" fill="#ffd166" stroke="#ff8a3d" strokeWidth="1" /></g></g>
      <g className="orbit orbit-5"><g transform="translate(180 480)"><circle r="4" fill="#ff8a3d" /></g></g>

      <g transform="translate(300 300)">
        <circle r="62" fill="var(--ink)" />
        <circle r="62" fill="none" stroke="var(--accent-hi)" strokeOpacity="0.4" />
        <text textAnchor="middle" y="-4" fill="var(--paper)" fontSize="13" fontFamily="IBM Plex Mono, monospace" letterSpacing="2">CLEAN</text>
        <text textAnchor="middle" y="14" fill="var(--accent-hi)" fontSize="14" fontWeight="700" fontFamily="Inter, sans-serif">S/4HANA</text>
        <text textAnchor="middle" y="30" fill="var(--paper)" fontSize="9" fontFamily="IBM Plex Mono, monospace" opacity="0.6">CORE</text>
      </g>

      <g className="chip-float chip-1">
        <rect x="60" y="120" width="92" height="26" rx="13" fill="var(--card)" stroke="var(--line)" />
        <text x="106" y="137" textAnchor="middle" fontSize="10" fontFamily="IBM Plex Mono, monospace" fill="var(--ink)">FICO</text>
      </g>
      <g className="chip-float chip-2">
        <rect x="430" y="90" width="120" height="26" rx="13" fill="var(--card)" stroke="var(--line)" />
        <text x="490" y="107" textAnchor="middle" fontSize="10" fontFamily="IBM Plex Mono, monospace" fill="var(--ink)">EWM · LE</text>
      </g>
      <g className="chip-float chip-3">
        <rect x="40" y="440" width="120" height="26" rx="13" fill="var(--card)" stroke="var(--line)" />
        <text x="100" y="457" textAnchor="middle" fontSize="10" fontFamily="IBM Plex Mono, monospace" fill="var(--ink)">FIORI</text>
      </g>
      <g className="chip-float chip-4">
        <rect x="450" y="500" width="110" height="26" rx="13" fill="var(--card)" stroke="var(--line)" />
        <text x="505" y="517" textAnchor="middle" fontSize="10" fontFamily="IBM Plex Mono, monospace" fill="var(--ink)">JOULE AI</text>
      </g>
    </motion.svg>
  );
}

function VideoModal({ open, onClose }: { open: boolean, onClose: () => void }) {
  const vref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    setTimeout(() => { try { vref.current?.play(); } catch (e) { } }, 50);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="video-modal" onClick={onClose}>
      <button className="video-close" onClick={onClose} aria-label="Close">×</button>
      <div className="video-modal-inner" onClick={e => e.stopPropagation()}>
        <video ref={vref} src="/assets/intro.webm" controls autoPlay playsInline />
        <div className="video-modal-cap mono">Dstellar · 90-sec intro reel</div>
      </div>
    </div>
  );
}

function VideoCard({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.button
      className="video-pill"
      onClick={onOpen}
      aria-label="Play intro video"
      whileHover="hover"
      whileTap="tap"
      variants={{
        hover: { scale: 1.04, y: -2, transition: { type: "spring", stiffness: 400, damping: 17 } },
        tap: { scale: 0.96 }
      }}
    >
      <motion.span
        className="video-pill-icon"
        variants={{
          hover: { scale: 1.1, rotate: 15 }
        }}
      >
        <svg viewBox="0 0 24 24" width="10" height="10"><path d="M8 5 L19 12 L8 19 Z" fill="currentColor" /></svg>
      </motion.span>
      <span className="video-pill-text">
        <span className="video-pill-title">Inside Dstellar</span>
        <span className="video-pill-meta mono">90 SEC · WATCH</span>
      </span>
    </motion.button>
  );
}

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="hero hero-anim">
      <motion.div
        className="hero-text"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="hero-eyebrow"><span className="pulse" />Dstellar Software Solutions · Est. 2013</motion.div>
        <motion.h1 variants={item}>The enterprise runs on SAP. <em>We make sure it runs right.</em></motion.h1>
        <motion.p variants={item} className="hero-sub">
          From S/4HANA implementations to custom DSTELLAR products — we plan, build, migrate, and run SAP landscapes across 18 industries and four continents.
        </motion.p>
        <motion.div variants={item} className="hero-actions">
          <button className="cta-btn accent">Explore our services →</button>
          <button className="cta-btn ghost">Book an assessment</button>
          <VideoCard onOpen={() => setVideoOpen(true)} />
        </motion.div>
        <motion.div variants={item} className="hero-stats-row">
          {D.stats.map(s => (
            <div key={s.l} className="stat">
              <div className="n">{s.n}</div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
      <div className="hero-orbit-col">
        <HeroOrbits />
      </div>
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </div>
  );
}
