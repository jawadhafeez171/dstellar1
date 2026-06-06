"use client";

import { useEffect } from 'react';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function CareerPath() {
  const { tData } = useLanguage();
  const data = tData<any>('careers_path');

  useEffect(() => {
    if (data && data.title) {
      document.title = `${data.title} | Dstellar`;
    }
  }, [data]);

  if (!data) return null;

  const levelColors = ['#6b7280', '#4a3aff', '#00d4c8', '#ff7a00', '#ffd166'];
  const levelGlows = ['rgba(107,114,128,0.3)', 'rgba(74,58,255,0.4)', 'rgba(0,212,200,0.4)', 'rgba(255,122,0,0.4)', 'rgba(255,209,102,0.4)'];

  return (
    <>
      <TopBar />

      <main className="careers-page-container">
        <div className="careers-bg-glow">
          <div className="glow-orb orb-orange" />
          <div className="glow-orb orb-indigo" />
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
              <span className="eyebrow-dot orange" />
              <span className="mono">{data.badge}</span>
            </motion.div>

            <motion.h1
              className="careers-title orange-grad"
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
            <div className="careers-glow-line orange-line" />
          </div>

          {/* Career Ladder */}
          <div className="ladder-section">
            <div className="ladder-spine" />
            <div className="ladder-levels">
              {data.levels && data.levels.map((lvl: any, idx: number) => (
                <motion.div
                  key={idx}
                  className="ladder-row"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 + idx * 0.12 }}
                >
                  {/* Level indicator */}
                  <div className="level-node" style={{ borderColor: levelColors[idx], boxShadow: `0 0 20px ${levelGlows[idx]}` }}>
                    <span className="level-num mono" style={{ color: levelColors[idx] }}>{lvl.level}</span>
                  </div>

                  {/* Content card */}
                  <motion.div
                    className="level-card"
                    whileHover={{ x: 8, borderColor: levelColors[idx] }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="level-header">
                      <h3 className="level-title" style={{ color: levelColors[idx] }}>{lvl.title}</h3>
                      <span className="level-years mono">{lvl.years}</span>
                    </div>
                    <p className="level-desc">{lvl.desc}</p>
                    <div className="level-accent" style={{ background: levelColors[idx] }} />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Perks Section */}
          <motion.div
            className="perks-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <h2 className="perks-heading mono">{data.perks_title}</h2>
            <div className="perks-grid">
              {data.perks && data.perks.map((perk: any, idx: number) => (
                <motion.div
                  key={idx}
                  className="perk-card"
                  whileHover={{ y: -5, scale: 1.04 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="perk-icon">{perk.icon}</span>
                  <span className="perk-label">{perk.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <style jsx global>{`
          .careers-page-container {
            background: linear-gradient(135deg, #ffffff 0%, #fdf8f4 50%, #faf5ef 100%);
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

          .orb-orange {
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, #f97316 0%, transparent 70%);
            opacity: 0.07;
            top: -150px;
            right: 50px;
          }

          .orb-indigo {
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, #ea580c 0%, transparent 70%);
            opacity: 0.05;
            bottom: -100px;
            left: -100px;
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
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 24px;
            position: relative;
            z-index: 1;
          }

          .careers-header { margin-bottom: 70px; }

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
            animation: dotPulse 2s infinite;
          }

          .eyebrow-dot.orange {
            background: #f97316;
            box-shadow: 0 0 12px #f97316;
          }

          @keyframes dotPulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; box-shadow: 0 0 30px currentColor; }
          }

          .careers-eyebrow .mono { color: #c2410c; letter-spacing: 0.15em; }

          .careers-title {
            font-size: 3.5rem;
            font-weight: 800;
            letter-spacing: -0.03em;
            margin: 0 0 16px 0;
            line-height: 1.1;
          }

          .orange-grad {
            background: linear-gradient(135deg, #1a1a1a 0%, #7c2d12 45%, #c2410c 80%, #ea580c 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .careers-subtitle {
            font-size: 1.2rem;
            color: rgba(50,20,5,0.6);
            max-width: 700px;
            line-height: 1.65;
            margin: 0;
          }

          .careers-glow-line { height: 1px; margin-top: 32px; }

          .orange-line {
            background: linear-gradient(90deg, #f97316 0%, rgba(249,115,22,0.15) 70%, transparent 100%);
          }

          /* Career Ladder */
          .ladder-section {
            position: relative;
            margin-bottom: 80px;
          }

          .ladder-spine {
            position: absolute;
            left: 36px;
            top: 20px;
            bottom: 20px;
            width: 2px;
            background: linear-gradient(180deg, #fbbf24 0%, #f97316 30%, #dc2626 60%, #92400e 100%);
            z-index: 0;
          }

          .ladder-levels {
            display: flex;
            flex-direction: column;
            gap: 32px;
            position: relative;
            z-index: 1;
          }

          .ladder-row {
            display: flex;
            align-items: flex-start;
            gap: 24px;
          }

          .level-node {
            width: 72px;
            height: 72px;
            min-width: 72px;
            border-radius: 50%;
            border: 2px solid;
            background: #ffffff;
            box-shadow: 0 2px 10px rgba(0,0,0,0.08);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1;
            transition: all 0.3s ease;
          }

          .level-num {
            font-size: 0.85rem;
            font-weight: 700;
          }

          .level-card {
            flex: 1;
            background: #ffffff;
            border: 1px solid rgba(0,0,0,0.07);
            border-radius: 14px;
            padding: 28px 32px;
            position: relative;
            overflow: hidden;
            box-shadow: 0 2px 12px rgba(0,0,0,0.05);
            transition: all 0.25s ease;
            cursor: default;
          }

          .level-card:hover {
            background: #fffaf7;
            border-color: rgba(249,115,22,0.3);
            box-shadow: 0 12px 40px rgba(249,115,22,0.1);
          }

          .level-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;
            flex-wrap: wrap;
            gap: 8px;
          }

          .level-title {
            font-size: 1.35rem;
            font-weight: 700;
            margin: 0;
          }

          .level-years {
            color: #9ca3af;
            font-size: 0.8rem;
            letter-spacing: 0.06em;
          }

          .level-desc {
            color: #6b7280;
            line-height: 1.6;
            font-size: 0.95rem;
            margin: 0;
          }

          .level-accent {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 4px;
            border-radius: 4px 0 0 4px;
            opacity: 0.7;
          }

          /* Perks */
          .perks-section { }

          .perks-heading {
            font-size: 1rem;
            letter-spacing: 0.15em;
            color: #92400e;
            margin-bottom: 28px;
            text-transform: uppercase;
            border-left: 2px solid #f97316;
            padding-left: 12px;
          }

          .perks-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }

          .perk-card {
            background: #ffffff;
            border: 1px solid rgba(0,0,0,0.07);
            border-radius: 12px;
            padding: 24px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            text-align: center;
            cursor: default;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
            transition: all 0.25s ease;
          }

          .perk-card:hover {
            background: #fffaf7;
            border-color: rgba(249,115,22,0.3);
            box-shadow: 0 8px 24px rgba(249,115,22,0.1);
          }

          .perk-icon { font-size: 2rem; }

          .perk-label {
            color: #4b5563;
            font-size: 0.875rem;
            font-weight: 500;
          }

          @media (max-width: 900px) {
            .careers-title { font-size: 2.5rem; }
            .perks-grid { grid-template-columns: repeat(2, 1fr); }
            .ladder-spine { left: 28px; }
            .level-node { width: 56px; height: 56px; min-width: 56px; }
          }
        `}</style>
      </main>

      <Footer />
    </>
  );
}
