"use client";

import { useEffect } from 'react';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function StudentsGraduates() {
  const { tData } = useLanguage();
  const data = tData<any>('careers_students');

  useEffect(() => {
    if (data && data.title) {
      document.title = `${data.title} | Dstellar`;
    }
  }, [data]);

  if (!data) return null;

  const programColors = ['#4a3aff', '#00d4c8', '#ff7a00', '#a78bfa'];

  return (
    <>
      <TopBar />

      <main className="careers-page-container">
        <div className="careers-bg-glow">
          <div className="glow-orb orb-rose" />
          <div className="glow-orb orb-coral" />
          <div className="grid-overlay" />
        </div>

        <div className="careers-page-inner">
          {/* Header */}
          <div className="careers-header">
            <motion.div
              className="careers-eyebrow"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="eyebrow-dot teal" />
              <span className="mono">{data.badge}</span>
            </motion.div>

            <motion.h1
              className="careers-title teal-grad"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {data.title}
            </motion.h1>

            <motion.p
              className="careers-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {data.subtitle}
            </motion.p>
            <div className="careers-glow-line teal-line" />
          </div>

          {/* Programs Grid */}
          <div className="programs-grid">
            {data.programs && data.programs.map((prog: any, idx: number) => (
              <motion.div
                key={idx}
                className="program-card"
                style={{ '--accent-color': programColors[idx % programColors.length] } as React.CSSProperties}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.12 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Icon bubble */}
                <div className="program-icon-wrap" style={{ background: `${programColors[idx % programColors.length]}22`, border: `1px solid ${programColors[idx % programColors.length]}44` }}>
                  <span className="program-icon">{prog.icon}</span>
                </div>

                <h3 className="program-title">{prog.title}</h3>
                <p className="program-desc">{prog.desc}</p>

                <div className="program-meta">
                  <div className="program-meta-item">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    <span>{prog.duration}</span>
                  </div>
                  <div className="program-meta-item">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    <span>{prog.spots}</span>
                  </div>
                </div>

                <button className="program-apply-btn" style={{ background: `linear-gradient(135deg, ${programColors[idx % programColors.length]}, ${programColors[(idx+1) % programColors.length]})` }}>
                  {data.apply_cta}
                </button>

                {/* Corner accent */}
                <div className="program-corner-accent" style={{ background: `linear-gradient(135deg, ${programColors[idx % programColors.length]}33, transparent)` }} />
                <div className="program-bottom-accent" style={{ background: programColors[idx % programColors.length] }} />
              </motion.div>
            ))}
          </div>

          {/* Eligibility note */}
          <motion.div
            className="eligibility-note"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#00d4c8" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <span>{data.eligibility}</span>
          </motion.div>
        </div>

        <style jsx global>{`
          .careers-page-container {
            background: linear-gradient(135deg, #ffffff 0%, #fdf6f7 55%, #faf4f5 100%);
            color: #1a1a1a;
            min-height: 100vh;
            position: relative;
            overflow: hidden;
            padding-top: 140px;
            padding-bottom: 100px;
          }

          .careers-bg-glow {
            position: absolute;
            inset: 0;
            pointer-events: none;
            z-index: 0;
          }

          .glow-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(130px);
          }

          .orb-rose {
            width: 700px;
            height: 700px;
            background: radial-gradient(circle, #e11d48 0%, transparent 70%);
            opacity: 0.06;
            top: -200px;
            left: -100px;
          }

          .orb-coral {
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, #fb923c 0%, transparent 70%);
            opacity: 0.05;
            bottom: -100px;
            right: -100px;
          }

          .grid-overlay {
            position: absolute;
            inset: 0;
            background-image:
              linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
            background-size: 60px 60px;
          }

          .careers-page-inner {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
            position: relative;
            z-index: 1;
          }

          .careers-header { margin-bottom: 60px; }

          .careers-eyebrow {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 16px;
          }

          .eyebrow-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #fb7185;
            box-shadow: 0 0 12px #fb7185;
            animation: dotPulse 2s infinite;
          }

          @keyframes dotPulse {
            0%, 100% { box-shadow: 0 0 8px #fb7185; }
            50% { box-shadow: 0 0 22px #fb7185, 0 0 44px rgba(251,113,133,0.45); }
          }

          .careers-eyebrow .mono { color: #be123c; letter-spacing: 0.15em; }

          .careers-title {
            font-size: 3.5rem;
            font-weight: 800;
            letter-spacing: -0.03em;
            margin: 0 0 16px 0;
            line-height: 1.1;
          }

          .teal-grad {
            background: linear-gradient(135deg, #1a1a1a 0%, #9f1239 55%, #e11d48 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .careers-subtitle {
            font-size: 1.2rem;
            color: rgba(60,10,20,0.6);
            max-width: 700px;
            line-height: 1.65;
            margin: 0;
          }

          .careers-glow-line {
            height: 1px;
            margin-top: 32px;
          }

          .teal-line {
            background: linear-gradient(90deg, #fb7185 0%, rgba(251,113,133,0.15) 70%, transparent 100%);
          }

          /* Programs */
          .programs-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
            margin-bottom: 48px;
          }

          .program-card {
            background: #ffffff;
            border: 1px solid rgba(0,0,0,0.07);
            border-radius: 20px;
            padding: 40px;
            position: relative;
            overflow: hidden;
            box-shadow: 0 2px 14px rgba(0,0,0,0.06);
            transition: all 0.3s ease;
          }

          .program-card:hover {
            border-color: rgba(251,113,133,0.4);
            background: #fff8f9;
            box-shadow: 0 20px 60px rgba(225,29,72,0.1), 0 4px 16px rgba(0,0,0,0.05);
          }

          .program-icon-wrap {
            width: 60px;
            height: 60px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 24px;
          }

          .program-icon { font-size: 1.75rem; }

          .program-title {
            font-size: 1.4rem;
            font-weight: 700;
            margin: 0 0 12px 0;
          }

          .program-desc {
            color: #6b7280;
            font-size: 0.95rem;
            line-height: 1.6;
            margin: 0 0 24px 0;
          }

          .program-meta {
            display: flex;
            gap: 20px;
            margin-bottom: 28px;
          }

          .program-meta-item {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 0.85rem;
            color: #9ca3af;
          }

          .program-apply-btn {
            border: none;
            color: #fff;
            padding: 12px 28px;
            border-radius: 10px;
            font-size: 0.875rem;
            font-weight: 600;
            cursor: pointer;
            font-family: inherit;
            transition: all 0.2s ease;
            width: 100%;
          }

          .program-apply-btn:hover {
            transform: scale(1.02);
            box-shadow: 0 8px 25px rgba(225,29,72,0.3);
          }

          .program-corner-accent {
            position: absolute;
            top: 0;
            right: 0;
            width: 100px;
            height: 100px;
            border-radius: 0 20px 0 100%;
          }

          .program-bottom-accent {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            opacity: 0.6;
            transform: scaleX(0);
            transition: transform 0.4s ease;
          }

          .program-card:hover .program-bottom-accent {
            transform: scaleX(1);
          }

          /* Eligibility */
          .eligibility-note {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            background: #fff1f2;
            border: 1px solid rgba(251,113,133,0.25);
            border-radius: 12px;
            padding: 20px 28px;
            color: #9f1239;
            font-size: 0.95rem;
            line-height: 1.6;
          }

          .eligibility-note svg { flex-shrink: 0; margin-top: 2px; }

          @media (max-width: 900px) {
            .programs-grid { grid-template-columns: 1fr; }
            .careers-title { font-size: 2.5rem; }
          }
        `}</style>
      </main>

      <Footer />
    </>
  );
}
