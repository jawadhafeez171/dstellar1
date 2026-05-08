"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { DSTELLAR_DATA as D } from '@/lib/data';



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
      <div className="hero-bg-video">
        <video
          src="/assets/intro.webm"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-overlay" />
      </div>

      <motion.div variants={item} className="hero-eyebrow"><span className="pulse" />Dstellar Software Solutions · Est. 2013</motion.div>

      <motion.div
        className="hero-text"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={item} style={{ opacity: 0, pointerEvents: 'none', height: 0, margin: 0, overflow: 'hidden' }}>The enterprise runs on SAP. <em>We make sure it runs right.</em></motion.h1>
        <motion.p variants={item} className="hero-sub" style={{ opacity: 0, pointerEvents: 'none', height: 0, margin: 0, overflow: 'hidden' }}>
          From S/4HANA implementations to custom DSTELLAR products — we plan, build, migrate, and run SAP landscapes across 18 industries and four continents.
        </motion.p>
        <motion.div variants={item} className="hero-actions">
          <button className="cta-btn accent">Explore our services →</button>
          <button className="cta-btn ghost">Book an assessment</button>
          <VideoCard onOpen={() => setVideoOpen(true)} />
        </motion.div>
        
        <div className="hero-stats-row">
          {D.stats.map(s => (
            <div key={s.l} className="stat">
              <div className="n">{s.n}</div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
      </motion.div>
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </div>
  );
}
