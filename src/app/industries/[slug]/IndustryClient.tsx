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
    case 'film':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" {...strokeProps} />
          <line x1="7" y1="2" x2="7" y2="22" {...strokeProps} />
          <line x1="17" y1="2" x2="17" y2="22" {...strokeProps} />
          <line x1="2" y1="12" x2="22" y2="12" {...strokeProps} />
          <line x1="2" y1="7" x2="7" y2="7" {...strokeProps} />
          <line x1="2" y1="17" x2="7" y2="17" {...strokeProps} />
          <line x1="17" y1="17" x2="22" y2="17" {...strokeProps} />
          <line x1="17" y1="7" x2="22" y2="7" {...strokeProps} />
        </svg>
      );
    case 'music':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path d="M9 18V5l12-2v13" {...strokeProps} />
          <circle cx="6" cy="18" r="3" {...strokeProps} />
          <circle cx="18" cy="16" r="3" {...strokeProps} />
        </svg>
      );
    case 'play':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <polygon points="5 3 19 12 5 21 5 3" {...strokeProps} />
        </svg>
      );
    case 'phone':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" {...strokeProps} />
        </svg>
      );
    case 'wifi':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" {...strokeProps} />
        </svg>
      );
    case 'box':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" {...strokeProps} />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" {...strokeProps} />
          <line x1="12" y1="22.08" x2="12" y2="12" {...strokeProps} />
        </svg>
      );
    case 'archive':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <polyline points="21 8 21 21 3 21 3 8" {...strokeProps} />
          <rect x="1" y="3" width="22" height="5" rx="1" ry="1" {...strokeProps} />
          <line x1="10" y1="12" x2="14" y2="12" {...strokeProps} />
        </svg>
      );
    case 'shopping-bag':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" {...strokeProps} />
          <line x1="3" y1="6" x2="21" y2="6" {...strokeProps} />
          <path d="M16 10a4 4 0 0 1-8 0" {...strokeProps} />
        </svg>
      );
    case 'credit-card':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" {...strokeProps} />
          <line x1="1" y1="10" x2="23" y2="10" {...strokeProps} />
          <line x1="5" y1="15" x2="9" y2="15" {...strokeProps} />
        </svg>
      );
    case 'key':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.778-7.778zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3-3.5 3.5z" {...strokeProps} />
        </svg>
      );
    case 'coffee':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" {...strokeProps} /><line x1="6" y1="1" x2="6" y2="4" {...strokeProps} /><line x1="10" y1="1" x2="10" y2="4" {...strokeProps} /><line x1="14" y1="1" x2="14" y2="4" {...strokeProps} />
        </svg>
      );
    case 'bed':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path d="M3 7v14M21 7v14M2 17h20M2 8h20M6 12h5a2 2 0 0 1 2 2v3H6v-5z" {...strokeProps} />
        </svg>
      );
    case 'server':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" {...strokeProps} />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" {...strokeProps} />
          <line x1="6" y1="6" x2="6.01" y2="6" {...strokeProps} />
          <line x1="6" y1="18" x2="6.01" y2="18" {...strokeProps} />
        </svg>
      );
    case 'info':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <circle cx="12" cy="12" r="10" {...strokeProps} />
          <line x1="12" y1="16" x2="12" y2="12" {...strokeProps} />
          <line x1="12" y1="8" x2="12.01" y2="8" {...strokeProps} />
        </svg>
      );
    case 'users':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" {...strokeProps} /><circle cx="9" cy="7" r="4" {...strokeProps} /><path d="M23 21v-2a4 4 0 0 0-3-3.87" {...strokeProps} /><path d="M16 3.13a4 4 0 0 1 0 7.75" {...strokeProps} />
        </svg>
      );
    case 'briefcase':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" {...strokeProps} /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" {...strokeProps} />
        </svg>
      );
    case 'book':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" {...strokeProps} /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" {...strokeProps} />
        </svg>
      );
    case 'award':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <circle cx="12" cy="8" r="7" {...strokeProps} /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" {...strokeProps} />
        </svg>
      );
    case 'compass':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <circle cx="12" cy="12" r="10" {...strokeProps} /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" {...strokeProps} />
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
  'construction': 'linear-gradient(135deg, #ffffff 0%, #fbbf24 50%, #d97706 100%)',
  'media-entertainment': 'linear-gradient(135deg, #ffffff 0%, #f472b6 50%, #db2777 100%)',
  'telecommunications': 'linear-gradient(135deg, #ffffff 0%, #67e8f9 50%, #0891b2 100%)',
  'distribution-wholesale': 'linear-gradient(135deg, #ffffff 0%, #fcd34d 50%, #d97706 100%)',
  'retail': 'linear-gradient(135deg, #ffffff 0%, #6ee7b7 50%, #059669 100%)',
  'hotel-management': 'linear-gradient(135deg, #ffffff 0%, #c084fc 50%, #7c3aed 100%)',
  'information-services': 'linear-gradient(135deg, #ffffff 0%, #93c5fd 50%, #2563eb 100%)',
  'public-services': 'linear-gradient(135deg, #ffffff 0%, #a5b4fc 50%, #4f46e5 100%)',
  'education': 'linear-gradient(135deg, #ffffff 0%, #fdba74 50%, #ea580c 100%)'
};

const CHALLENGES_LOCALIZATION: Record<string, {
  title: string;
  subtitle: string;
  items: Array<{ title: string; desc: string }>;
}> = {
  en: {
    title: "Key Industry Challenges We Solve",
    subtitle: "Overcoming legacy complexities, operational bottlenecks, and compliance overhead.",
    items: [
      { title: "Legacy System Technical Debt", desc: "Monolithic ERP systems filled with custom modifications make upgrades expensive. We help separate the core to keep upgrades clean." },
      { title: "Siloed Supply Chain Data", desc: "Disconnected logistics, warehouse, and supplier operations limit visibility. We link edge sensors directly to core financials." },
      { title: "Evolving Global Compliance", desc: "Navigating international regulations, audits, and carbon reporting. We automate compliance tracking directly in S/4HANA." }
    ]
  },
  es: {
    title: "Desafíos Clave de la Industria que Resolvemos",
    subtitle: "Superando complejidades heredadas, cuellos de botella operativos y costos de cumplimiento.",
    items: [
      { title: "Deuda Técnica de Sistemas Heredados", desc: "Los sistemas ERP monolíticos con modificaciones personalizadas encarecen las actualizaciones. Ayudamos a mantener limpio el núcleo." },
      { title: "Datos de Cadena de Suministro Aislados", desc: "Las operaciones desconectadas de logística y proveedores limitan la visibilidad. Vinculamos sensores de borde con finanzas." },
      { title: "Cumplimiento Global en Evolución", desc: "Navegar por regulaciones internacionales e informes de carbono. Automatizamos el cumplimiento dentro de S/4HANA." }
    ]
  },
  zh: {
    title: "我们解决的核心行业挑战",
    subtitle: "克服历史系统复杂度、运营瓶颈和合规审计成本。",
    items: [
      { title: "老旧系统技术债", desc: "充满定制化修改的单体 ERP 系统使升级成本高昂。我们帮助重构干净的核心系统。" },
      { title: "孤立的供应链数据", desc: "脱节的物流、仓储与供应商协同限制了业务可见性。我们将边缘传感器直接连接到财务核心。" },
      { title: "复杂的全球合规要求", desc: "应对多国监管、合规审计及碳排放报告。我们在 S/4HANA 中自动执行合规性跟踪。" }
    ]
  },
  de: {
    title: "Herausforderungen der Branche, die wir lösen",
    subtitle: "Überwindung von Altlasten, operativen Engpässen und Compliance-Kosten.",
    items: [
      { title: "Technische Schulden in Altsystemen", desc: "Monolithische ERP-Systeme mit benutzerdefinierten Änderungen erschweren Upgrades. Wir helfen, den Kern sauber zu halten." },
      { title: "Siloartige Lieferkettendaten", desc: "Getrennte Logistik- und Lieferantenprozesse schränken die Transparenz ein. Wir verbinden IoT-Sensoren direkt mit den Finanzdaten." },
      { title: "Dynamische globale Compliance", desc: "Einhaltung internationaler Vorschriften und CO2-Berichterstattung. Wir automatisieren die Compliance-Überwachung in S/4HANA." }
    ]
  },
  fr: {
    title: "Défis Majeurs du Secteur que Nous Résolvons",
    subtitle: "Surmonter les complexités des systèmes hérités, les goulots d'étranglement et la conformité.",
    items: [
      { title: "Dette Technique des Systèmes Hérités", desc: "Les systèmes ERP monolithiques avec de multiples modifications rendent les mises à niveau coûteuses. Nous aidons à isoler le noyau propre." },
      { title: "Données Logistiques Cloisonnées", desc: "Le manque d'intégration entre logistique, entrepôt et fournisseur limite la visibilité. Nous connectons les capteurs au cœur financier." },
      { title: "Conformité Globale Évolutive", desc: "Naviguer dans les réglementations internationales et bilans carbone. Nous automatisons les rapports réglementaires dans S/4HANA." }
    ]
  },
  ja: {
    title: "解決する主な業界の課題",
    subtitle: "レガシーシステム複雑性、業務ボトルネック、コンプライアンス管理負担の解消。",
    items: [
      { title: "レガシーシステムの技術的負債", desc: "アドオンだらけのモノリシックなERPはバージョンアップコストを高騰させます。コアをクリーン化しアップグレードを容易にします。" },
      { title: "サイロ化されたサプライチェーン", desc: "分断された物流、倉庫、サプライヤー連携が可視性を制限します。エッジセンサーとコア財務を直結させます。" },
      { title: "進化するグローバル法規制合規", desc: "国際的な法規制、監査、環境炭素報告への対応。S/4HANA上でコンプライアンス追跡を自動化します。" }
    ]
  }
};

const ROADMAP_LOCALIZATION: Record<string, {
  title: string;
  subtitle: string;
  steps: Array<{ phase: string; title: string; desc: string }>;
}> = {
  en: {
    title: "Transformation Roadmap",
    subtitle: "Our proven step-by-step methodology to migrate, extend, and innovate.",
    steps: [
      { phase: "Phase 1", title: "Discovery & Core Assessment", desc: "We perform an extensive audit of your custom code footprint, database sizing, and S/4HANA readiness checklist." },
      { phase: "Phase 2", title: "Clean Core Sandbox & BTP Extension", desc: "We move custom integrations side-by-side onto SAP Business Technology Platform (BTP), keeping your core ERP central clean." },
      { phase: "Phase 3", title: "Production Orchestration & Cutover", desc: "Automated regression testing, final dry-run simulations, and seamless deployment with zero business disruption." }
    ]
  },
  es: {
    title: "Ruta de Transformación",
    subtitle: "Nuestra metodología probada paso a paso para migrar, extender e innovar.",
    steps: [
      { phase: "Fase 1", title: "Descubrimiento y Evaluación del Núcleo", desc: "Realizamos una auditoría exhaustiva del código personalizado, tamaño de base de datos y preparación para S/4HANA." },
      { phase: "Fase 2", title: "Extensión BTP y Núcleo Limpio", desc: "Movemos las integraciones personalizadas a SAP Business Technology Platform (BTP), manteniendo limpio el ERP central." },
      { phase: "Fase 3", title: "Orquestación de Producción y Puesta en Marcha", desc: "Pruebas de regresión automatizadas, simulaciones de lanzamiento y despliegue sin interrupciones del negocio." }
    ]
  },
  zh: {
    title: "数字化转型路线图",
    subtitle: "我们经过验证的迁移、扩展与创新三步法方法论。",
    steps: [
      { phase: "第一阶段", title: "评估与发现", desc: "我们对您的自定义代码、数据库大小进行全面审计，并输出 S/4HANA 准备就绪度检查清单。" },
      { phase: "第二阶段", title: "干净核心与 BTP 扩展", desc: "我们将自定义的集成应用移至 SAP 业务技术平台 (BTP) 侧，保持核心 ERP 系统的「干净核心」。" },
      { phase: "第三阶段", title: "生产割接与上线部署", desc: "自动化回归测试、上线演练模拟以及零业务中断的平稳生产系统切换上线。" }
    ]
  },
  de: {
    title: "Transformations-Roadmap",
    subtitle: "Unsere bewährte Schritt-für-Schritt-Methodik zur Migration, Erweiterung und Innovation.",
    steps: [
      { phase: "Phase 1", title: "Analyse & Core-Bewertung", desc: "Wir führen ein detailliertes Audit Ihrer benutzerdefinierten Codes und Ihrer S/4HANA-Bereitschaft durch." },
      { phase: "Phase 2", title: "Clean Core Sandbox & BTP-Erweiterung", desc: "Wir verlagern kundenspezifische Integrationen auf die SAP Business Technology Platform (BTP), um das Kern-ERP sauber zu halten." },
      { phase: "Phase 3", title: "Produktions-Orchestrierung & Cutover", desc: "Automatisierte Regressionstests, Go-Live-Simulationen und nahtlose Bereitstellung ohne Betriebsunterbrechung." }
    ]
  },
  fr: {
    title: "Feuille de Route de Transformation",
    subtitle: "Notre méthodologie éprouvée étape par étape pour migrer, étendre et innover.",
    steps: [
      { phase: "Phase 1", title: "Cadrage & Audit du Core", desc: "Nous réalisons un audit approfondi de vos codes personnalisés, de la taille des bases de données et de l'éligibilité S/4HANA." },
      { phase: "Phase 2", title: "Sandbox Clean Core & Extensions BTP", desc: "Nous déplaçons les développements spécifiques sur SAP BTP pour conserver un ERP propre et standard." },
      { phase: "Phase 3", title: "Orchestration & Lancement de la Production", desc: "Tests de régression automatisés, simulations de bascule à blanc et déploiement sans interruption d'activité." }
    ]
  },
  ja: {
    title: "トランスフォーメーション・ロードマップ",
    subtitle: "移行、拡張、イノベーションを推進する実証済みのステップバイステップ手法。",
    steps: [
      { phase: "フェーズ 1", title: "現状分析とコアアセスメント", desc: "カスタムコード의 監査、データベース容量の分析、S/4HANA移行準備状態の評価を行います。" },
      { phase: "フェーズ 2", title: "クリーンコア化とBTP拡張", desc: "アドオン開発をSAP Business Technology Platform (BTP) 上へサイドバイサイドで移行し、コアERPを標準状態に保ちます。" },
      { phase: "フェーズ 3", title: "本番オーケストレーションと移行切替", desc: "自動回帰テスト、本番移行の事前リハーサル、業務停止ゼロでのスムーズな稼働開始を実現します。" }
    ]
  }
};

const ECOSYSTEM_LOCALIZATION: Record<string, {
  title: string;
  subtitle: string;
  items: Array<{ name: string; category: string; desc: string }>;
}> = {
  en: {
    title: "Technology Ecosystem Stack",
    subtitle: "We leverage industry-leading platforms and tools to drive robust architectures.",
    items: [
      { name: "SAP S/4HANA Cloud", category: "Core ERP", desc: "Clean core financial and logistics ledger." },
      { name: "SAP BTP", category: "Platform & Extensions", desc: "Side-by-side app development and API integration." },
      { name: "AWS / Azure / GCP", category: "Hyperscalers", desc: "Highly scalable cloud compute infrastructure." },
      { name: "Framer Motion", category: "Frontend Animation", desc: "Dynamic, smooth fluid micro-animations." },
      { name: "TypeScript & Next.js", category: "Application Stack", desc: "Statically built type-safe secure user interfaces." }
    ]
  },
  es: {
    title: "Pila de Ecosistema Tecnológico",
    subtitle: "Aprovechamos plataformas y herramientas líderes para impulsar arquitecturas robustas.",
    items: [
      { name: "SAP S/4HANA Cloud", category: "ERP Central", desc: "Libro mayor financiero y logístico de núcleo limpio." },
      { name: "SAP BTP", category: "Plataforma y Extensiones", desc: "Desarrollo de aplicaciones y gestión de APIs." },
      { name: "AWS / Azure / GCP", category: "Nubes a Escala", desc: "Infraestructura informática de nube escalable." },
      { name: "Framer Motion", category: "Animación de Interfaz", desc: "Microanimaciones fluidas, dinámicas y suaves." },
      { name: "TypeScript & Next.js", category: "Pila de Aplicación", desc: "Interfaces de usuario estáticas y seguras." }
    ]
  },
  zh: {
    title: "技术生态技术栈",
    subtitle: "我们利用行业领先的平台与工具来驱动高健壮度的企业级架构。",
    items: [
      { name: "SAP S/4HANA Cloud", category: "核心 ERP", desc: "干净核心财务与业务主数据账套。" },
      { name: "SAP BTP", category: "平台与扩展能力", desc: "Side-by-side 应用开发及 API 中台集成。" },
      { name: "AWS / Azure / GCP", category: "主流云基础架构", desc: "高弹性、高可扩展的云主机与网络设施。" },
      { name: "Framer Motion", category: "前端动画", desc: "动态、流畅的微动效交互体验。" },
      { name: "TypeScript & Next.js", category: "应用技术栈", desc: "静态编译、类型安全且高安全性的用户界面。" }
    ]
  },
  de: {
    title: "Technologie-Ökosystem",
    subtitle: "Wir nutzen führende Plattformen für robuste Unternehmensarchitekturen.",
    items: [
      { name: "SAP S/4HANA Cloud", category: "Kern-ERP", desc: "Sauberer Kern für Finanz- und Logistikbuchhaltung." },
      { name: "SAP BTP", category: "Plattform & Integration", desc: "Side-by-side-App-Entwicklung und API-Management." },
      { name: "AWS / Azure / GCP", category: "Infrastruktur", desc: "Skalierbare Cloud-Compute-Infrastruktur." },
      { name: "Framer Motion", category: "Frontend-Animation", desc: "Flüssige, dynamische Mikroanimationen." },
      { name: "TypeScript & Next.js", category: "Anwendungs-Stack", desc: "Statisch generierte, typsichere Benutzeroberflächen." }
    ]
  },
  fr: {
    title: "Écosystème Technologique",
    subtitle: "Nous exploitons les meilleures plateformes pour propulser des architectures robustes.",
    items: [
      { name: "SAP S/4HANA Cloud", category: "ERP Central", desc: "Comptabilité financière et logistique Clean Core." },
      { name: "SAP BTP", category: "Plateforme & Extensions", desc: "Développement d'applications et orchestrateur d'API." },
      { name: "AWS / Azure / GCP", category: "Hébergement Cloud", desc: "Infrastructure de calcul cloud hautement évolutive." },
      { name: "Framer Motion", category: "Animations Frontend", desc: "Micro-animations fluides, dynamiques et réactives." },
      { name: "TypeScript & Next.js", category: "Socle Technique", desc: "Interfaces utilisateur sécurisées et typées." }
    ]
  },
  ja: {
    title: "テクノロジーエコシステムスタック",
    subtitle: "堅牢なアーキテクチャを実現するため、業界トップクラスのプラットフォームを採用しています。",
    items: [
      { name: "SAP S/4HANA Cloud", category: "コア ERP", desc: "クリーンコア化された財務・物流統合台帳。" },
      { name: "SAP BTP", category: "拡張開発プラットフォーム", desc: "アドオン開発およびAPI統合コントロール。" },
      { name: "AWS / Azure / GCP", category: "クラウド基盤", desc: "高度にスケール可能なクラウドコンピューティングインフラ。" },
      { name: "Framer Motion", category: "フロントエンド演出", desc: "スムーズで美しい、流動的なマイクロアニメーション効果。" },
      { name: "TypeScript & Next.js", category: "アプリケーション構成", desc: "静的ビルドによる、型安全で高セキュリティなフロント画面。" }
    ]
  }
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
  const chalData = CHALLENGES_LOCALIZATION[langKey] || CHALLENGES_LOCALIZATION['en'];
  const roadmapData = ROADMAP_LOCALIZATION[langKey] || ROADMAP_LOCALIZATION['en'];
  const ecoData = ECOSYSTEM_LOCALIZATION[langKey] || ECOSYSTEM_LOCALIZATION['en'];

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

        {/* KEY CHALLENGES SECTION */}
        <section className="ind-challenges-section">
          <div className="ind-inner">
            <h2 className="ind-section-heading">{chalData.title}</h2>
            <p className="ind-section-subtitle" style={{ color: 'rgba(255,255,255,0.6)', marginTop: '-20px', marginBottom: '36px', maxWidth: '600px', fontSize: '1.02rem', lineHeight: '1.5' }}>
              {chalData.subtitle}
            </p>
            <div className="ind-challenge-grid">
              {chalData.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="ind-challenge-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ borderColor: `${data.themeColor}50`, boxShadow: `0 8px 30px ${data.themeColor}10` }}
                >
                  <div className="ind-challenge-icon-tag" style={{ color: data.themeColor, fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
                    0{idx + 1} / Problem
                  </div>
                  <h3 className="ind-challenge-title">{item.title}</h3>
                  <p className="ind-challenge-desc">{item.desc}</p>
                  <div className="ind-challenge-decor-line" style={{ background: `linear-gradient(90deg, ${data.themeColor}, transparent)` }} />
                </motion.div>
              ))}
            </div>
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

        {/* ROADMAP SECTION */}
        <section className="ind-roadmap-section">
          <div className="ind-inner">
            <h2 className="ind-section-heading" style={{ textAlign: 'center' }}>{roadmapData.title}</h2>
            <p className="ind-section-subtitle" style={{ color: 'rgba(255,255,255,0.6)', marginTop: '-20px', marginBottom: '48px', textAlign: 'center', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', fontSize: '1.02rem', lineHeight: '1.5' }}>
              {roadmapData.subtitle}
            </p>
            <div className="ind-roadmap-timeline">
              {roadmapData.steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  className="ind-roadmap-step"
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                >
                  <div className="ind-roadmap-dot" style={{ color: data.themeColor, borderColor: `${data.themeColor}60`, background: `radial-gradient(circle, ${data.themeColor}20 0%, #07051d 100%)`, boxShadow: `0 0 15px ${data.themeColor}30` }}>
                    {step.phase}
                  </div>
                  <div className="ind-roadmap-content">
                    <h3 className="ind-roadmap-step-title">{step.title}</h3>
                    <p className="ind-roadmap-step-desc">{step.desc}</p>
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

        {/* TECHNOLOGY ECOSYSTEM SECTION */}
        <section className="ind-ecosystem-section">
          <div className="ind-inner">
            <h2 className="ind-section-heading" style={{ textAlign: 'center' }}>{ecoData.title}</h2>
            <p className="ind-section-subtitle" style={{ color: 'rgba(255,255,255,0.6)', marginTop: '-20px', marginBottom: '48px', textAlign: 'center', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', fontSize: '1.02rem', lineHeight: '1.5' }}>
              {ecoData.subtitle}
            </p>
            <div className="ind-ecosystem-grid">
              {ecoData.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="ind-ecosystem-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ borderColor: `${data.themeColor}40`, y: -4, boxShadow: `0 8px 25px ${data.themeColor}08` }}
                >
                  <span className="ind-ecosystem-cat" style={{ color: data.themeColor }}>{item.category}</span>
                  <h3 className="ind-ecosystem-name">{item.name}</h3>
                  <p className="ind-ecosystem-desc">{item.desc}</p>
                </motion.div>
              ))}
            </div>
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

        /* Challenges Section */
        .ind-challenges-section {
          padding-top: 50px;
          padding-bottom: 60px;
        }

        .ind-challenge-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .ind-challenge-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          padding: 32px 30px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .ind-challenge-card:hover {
          background: rgba(255, 255, 255, 0.04);
          transform: translateY(-4px);
        }

        .ind-challenge-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 12px 0;
        }

        .ind-challenge-desc {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.6;
          margin: 0;
        }

        .ind-challenge-decor-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          opacity: 0.8;
        }

        /* Roadmap Section */
        .ind-roadmap-section {
          padding-top: 60px;
          padding-bottom: 70px;
        }

        .ind-roadmap-timeline {
          display: flex;
          flex-direction: column;
          gap: 32px;
          max-width: 800px;
          margin: 0 auto;
          position: relative;
        }

        .ind-roadmap-timeline::before {
          content: '';
          position: absolute;
          left: 36px;
          top: 20px;
          bottom: 20px;
          width: 2px;
          background: rgba(255, 255, 255, 0.08);
        }

        .ind-roadmap-step {
          display: flex;
          gap: 24px;
          position: relative;
        }

        .ind-roadmap-dot {
          width: 74px;
          height: 74px;
          border-radius: 50%;
          border: 2px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.82rem;
          font-weight: 700;
          z-index: 1;
          flex-shrink: 0;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          text-transform: uppercase;
        }

        .ind-roadmap-content {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 24px 30px;
          flex-grow: 1;
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }

        .ind-roadmap-step:hover .ind-roadmap-content {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .ind-roadmap-step-title {
          font-size: 1.2rem;
          font-weight: 700;
          margin: 0 0 8px 0;
          color: #fff;
        }

        .ind-roadmap-step-desc {
          font-size: 0.92rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
          margin: 0;
        }

        /* Ecosystem Section */
        .ind-ecosystem-section {
          padding-top: 60px;
          padding-bottom: 70px;
        }

        .ind-ecosystem-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }

        .ind-ecosystem-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 24px 20px;
          text-align: center;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 160px;
          backdrop-filter: blur(8px);
        }

        .ind-ecosystem-card:hover {
          background: rgba(255, 255, 255, 0.04);
          transform: translateY(-4px);
        }

        .ind-ecosystem-cat {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .ind-ecosystem-name {
          font-size: 1.05rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 8px 0;
        }

        .ind-ecosystem-desc {
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.4;
          margin: 0;
        }

        /* Responsive Layouts */
        @media (max-width: 968px) {
          .ind-challenge-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .ind-roadmap-timeline::before {
            left: 24px;
          }

          .ind-roadmap-dot {
            width: 50px;
            height: 50px;
            font-size: 0.65rem;
          }

          .ind-ecosystem-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

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

        @media (max-width: 480px) {
          .ind-ecosystem-grid {
            grid-template-columns: 1fr;
          }
          .ind-roadmap-timeline::before {
            display: none;
          }
          .ind-roadmap-step {
            flex-direction: column;
            gap: 12px;
          }
          .ind-roadmap-dot {
            width: auto;
            height: auto;
            border-radius: 8px;
            padding: 4px 12px;
            align-self: flex-start;
          }
        }
      `}</style>
    </>
  );
}
