"use client";

import { useEffect } from 'react';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function WhoWeAre() {
  const { t, tData } = useLanguage();
  const data = tData<any>('who_we_are');

  useEffect(() => {
    if (data && data.title) {
      document.title = `${data.title} | Dstellar`;
    }
  }, [data]);

  if (!data) return null;

  return (
    <>
      <TopBar />
      
      <main className="discover-page-container">
        {/* Background glow effects */}
        <div className="cyber-glow-bg">
          <div className="glow-circle blue" />
          <div className="glow-circle orange" />
        </div>

        <div className="discover-page-inner">
          {/* Eyebrow and Page Title */}
          <div className="discover-header">
            <span className="mono-eyebrow mono">Discover Dstellar · Identity</span>
            <h1 className="discover-title">{data.title}</h1>
            <p className="discover-subtitle">{data.subtitle}</p>
            <div className="glow-line" />
          </div>

          {/* Mission & Vision Section */}
          <div className="mission-vision-grid">
            <motion.div 
              className="glass-card mission-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="card-badge mono">{data.mission_title}</div>
              <h3>Empowering Enterprise Velocity</h3>
              <p>{data.mission_desc}</p>
              <div className="card-glow-border" />
            </motion.div>

            <motion.div 
              className="glass-card vision-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="card-badge mono">{data.vision_title}</div>
              <h3>The Global Gold Standard</h3>
              <p>{data.vision_desc}</p>
              <div className="card-glow-border" />
            </motion.div>
          </div>

          {/* Core Values Section */}
          <div className="values-section">
            <h2 className="section-heading mono">{data.values_title}</h2>
            <div className="values-grid">
              {data.values && data.values.map((val: any, idx: number) => (
                <motion.div 
                  key={idx}
                  className="value-item-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="value-index mono">0{idx + 1}</div>
                  <h4>{val.t}</h4>
                  <p>{val.d}</p>
                  <div className="value-card-highlight" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Local styling to keep the cyber-tech aesthetic consistent */}
        <style jsx global>{`
          .discover-page-container {
            background: var(--grad-ink);
            color: #ffffff;
            min-height: 100vh;
            position: relative;
            overflow: hidden;
            padding-top: 140px;
            padding-bottom: 80px;
          }

          .cyber-glow-bg {
            position: absolute;
            inset: 0;
            pointer-events: none;
            overflow: hidden;
            z-index: 0;
          }

          .glow-circle {
            position: absolute;
            border-radius: 50%;
            filter: blur(150px);
            opacity: 0.15;
          }

          .glow-circle.blue {
            width: 600px;
            height: 600px;
            background: var(--accent);
            top: -100px;
            left: -100px;
          }

          .glow-circle.orange {
            width: 600px;
            height: 600px;
            background: var(--accent-2);
            bottom: -100px;
            right: -100px;
          }

          .discover-page-inner {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
            position: relative;
            z-index: 1;
          }

          .discover-header {
            margin-bottom: 60px;
            position: relative;
          }

          .mono-eyebrow {
            color: var(--accent-4);
            display: inline-block;
            margin-bottom: 12px;
          }

          .discover-title {
            font-size: 3.5rem;
            font-weight: 800;
            letter-spacing: -0.03em;
            margin: 0 0 16px 0;
            background: linear-gradient(135deg, #ffffff 0%, #a2a8c3 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .discover-subtitle {
            font-size: 1.25rem;
            color: var(--muted);
            max-width: 700px;
            line-height: 1.6;
            margin: 0;
          }

          .glow-line {
            height: 1px;
            background: linear-gradient(90deg, var(--accent-4) 0%, rgba(0, 212, 200, 0.1) 80%, transparent 100%);
            margin-top: 32px;
            width: 100%;
          }

          .mission-vision-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
            margin-bottom: 80px;
          }

          .glass-card {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 16px;
            padding: 40px;
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(8px);
          }

          .glass-card h3 {
            font-size: 1.75rem;
            margin: 20px 0 12px 0;
            font-weight: 700;
          }

          .glass-card p {
            color: rgba(255, 255, 255, 0.7);
            line-height: 1.6;
            font-size: 1.05rem;
            margin: 0;
          }

          .card-badge {
            background: rgba(255, 255, 255, 0.08);
            color: #fff;
            padding: 4px 12px;
            border-radius: 20px;
            display: inline-block;
            border: 1px solid rgba(255, 255, 255, 0.12);
          }

          .card-glow-border {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, transparent 0%, var(--accent) 50%, transparent 100%);
            opacity: 0.5;
          }

          .mission-card .card-glow-border {
            background: linear-gradient(90deg, transparent 0%, var(--accent) 50%, transparent 100%);
          }

          .vision-card .card-glow-border {
            background: linear-gradient(90deg, transparent 0%, var(--accent-2) 50%, transparent 100%);
          }

          .values-section {
            position: relative;
          }

          .section-heading {
            font-size: 1.1rem;
            letter-spacing: 0.15em;
            color: var(--muted);
            margin-bottom: 32px;
            text-transform: uppercase;
            border-left: 2px solid var(--accent-4);
            padding-left: 12px;
          }

          .values-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }

          .value-item-card {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            padding: 32px;
            position: relative;
            transition: all 0.3s ease;
            cursor: default;
          }

          .value-item-card:hover {
            border-color: rgba(255, 255, 255, 0.15);
            background: rgba(255, 255, 255, 0.04);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
          }

          .value-index {
            color: var(--accent-4);
            font-weight: 600;
            font-size: 0.9rem;
            margin-bottom: 24px;
          }

          .value-item-card h4 {
            font-size: 1.25rem;
            margin: 0 0 12px 0;
            font-weight: 600;
          }

          .value-item-card p {
            color: rgba(255, 255, 255, 0.6);
            line-height: 1.5;
            margin: 0;
            font-size: 0.95rem;
          }

          .value-card-highlight {
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 0;
            background: var(--accent-4);
            transition: height 0.3s ease;
          }

          .value-item-card:hover .value-card-highlight {
            height: 100%;
          }

          @media (max-width: 968px) {
            .mission-vision-grid {
              grid-template-columns: 1fr;
              gap: 24px;
            }

            .values-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }

            .discover-title {
              font-size: 2.5rem;
            }
          }
        `}</style>
      </main>

      <Footer />
    </>
  );
}
