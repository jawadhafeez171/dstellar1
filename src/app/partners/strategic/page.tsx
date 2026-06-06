"use client";

import { useEffect } from 'react';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function StrategicPartners() {
  const { tData } = useLanguage();
  const data = tData<any>('partners_strategic');

  useEffect(() => {
    if (data && data.title) {
      document.title = `${data.title} | Dstellar`;
    }
  }, [data]);

  if (!data) return null;

  return (
    <>
      <TopBar />

      <main className="partners-page-container">
        <div className="partners-bg-glow">
          <div className="glow-orb orb-emerald" />
          <div className="glow-orb orb-teal" />
          <div className="grid-overlay" />
        </div>

        <div className="partners-page-inner">
          {/* Header */}
          <div className="partners-header">
            <motion.div
              className="partners-eyebrow"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="eyebrow-dot emerald" />
              <span className="mono">{data.badge}</span>
            </motion.div>

            <motion.h1
              className="partners-title emerald-grad"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {data.title}
            </motion.h1>

            <motion.p
              className="partners-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {data.subtitle}
            </motion.p>
            <div className="partners-glow-line emerald-line" />
          </div>

          {/* Metrics Grid */}
          <div className="metrics-grid">
            {data.metrics && data.metrics.map((metric: any, idx: number) => (
              <motion.div
                key={idx}
                className="metric-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                whileHover={{ scale: 1.03, boxShadow: '0 15px 30px rgba(16, 185, 129, 0.05)' }}
              >
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
                <div className="metric-accent-bar" />
              </motion.div>
            ))}
          </div>

          {/* Alliance Showcase Section */}
          <div className="alliances-section">
            <div className="alliances-grid">
              {data.alliances && data.alliances.map((alliance: any, idx: number) => (
                <motion.div
                  key={idx}
                  className="alliance-card"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.12 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="alliance-top">
                    <div className="alliance-avatar">
                      {alliance.name.charAt(0)}
                    </div>
                    <div className="alliance-name-wrap">
                      <h3 className="alliance-name">{alliance.name}</h3>
                      <span className="alliance-role">{alliance.role}</span>
                    </div>
                  </div>

                  <p className="alliance-desc">{alliance.desc}</p>

                  <button className="alliance-cta-btn">
                    {data.cta}
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </button>

                  <div className="alliance-card-glow" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <style jsx global>{`
          .partners-page-container {
            background: linear-gradient(135deg, #ffffff 0%, #f5fbf7 60%, #eaf7f0 100%);
            color: #0f172a;
            min-height: 100vh;
            position: relative;
            overflow: hidden;
            padding-top: 140px;
            padding-bottom: 100px;
          }

          .partners-bg-glow {
            position: absolute;
            inset: 0;
            pointer-events: none;
            z-index: 0;
          }

          .glow-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(140px);
            opacity: 0.08;
          }

          .orb-emerald {
            width: 700px;
            height: 700px;
            background: radial-gradient(circle, #10b981 0%, transparent 75%);
            top: -150px;
            left: -100px;
          }

          .orb-teal {
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, #14b8a6 0%, transparent 75%);
            bottom: -100px;
            right: -100px;
          }

          .grid-overlay {
            position: absolute;
            inset: 0;
            background-image:
              linear-gradient(rgba(16, 185, 129, 0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.04) 1px, transparent 1px);
            background-size: 50px 50px;
          }

          .partners-page-inner {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
            position: relative;
            z-index: 1;
          }

          .partners-header {
            margin-bottom: 50px;
          }

          .partners-eyebrow {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 14px;
          }

          .eyebrow-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
          }

          .eyebrow-dot.emerald {
            background: #10b981;
            box-shadow: 0 0 12px #10b981;
          }

          .partners-eyebrow .mono {
            color: #047857;
            font-size: 0.85rem;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            font-weight: 600;
          }

          .partners-title {
            font-size: 3.2rem;
            font-weight: 800;
            letter-spacing: -0.03em;
            margin: 0 0 16px 0;
            line-height: 1.15;
          }

          .emerald-grad {
            background: linear-gradient(135deg, #0f172a 10%, #047857 70%, #10b981 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .partners-subtitle {
            font-size: 1.15rem;
            color: #475569;
            max-width: 680px;
            line-height: 1.6;
            margin: 0;
          }

          .partners-glow-line {
            height: 1px;
            margin-top: 32px;
          }

          .emerald-line {
            background: linear-gradient(90deg, #10b981 0%, rgba(16, 185, 129, 0.15) 75%, transparent 100%);
          }

          /* Metrics Section */
          .metrics-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
            margin-bottom: 60px;
          }

          .metric-card {
            background: #ffffff;
            border: 1px solid rgba(16, 185, 129, 0.12);
            border-radius: 16px;
            padding: 32px;
            text-align: center;
            position: relative;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
            transition: all 0.3s ease;
          }

          .metric-value {
            font-size: 3rem;
            font-weight: 800;
            color: #047857;
            margin-bottom: 8px;
            line-height: 1;
            letter-spacing: -0.02em;
          }

          .metric-label {
            font-size: 0.95rem;
            color: #64748b;
            font-weight: 500;
          }

          .metric-accent-bar {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, #10b981, #14b8a6);
          }

          /* Alliances Section */
          .alliances-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 32px;
          }

          .alliance-card {
            background: #ffffff;
            border: 1px solid rgba(16, 185, 129, 0.1);
            border-radius: 20px;
            padding: 36px;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
            transition: all 0.3s ease;
            overflow: hidden;
          }

          .alliance-card:hover {
            border-color: rgba(16, 185, 129, 0.4);
            box-shadow: 0 20px 40px rgba(16, 185, 129, 0.06);
          }

          .alliance-top {
            display: flex;
            gap: 20px;
            align-items: center;
            margin-bottom: 24px;
          }

          .alliance-avatar {
            width: 54px;
            height: 54px;
            border-radius: 12px;
            background: linear-gradient(135deg, #10b981, #047857);
            color: #ffffff;
            font-size: 1.5rem;
            font-weight: 800;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .alliance-name-wrap {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }

          .alliance-name {
            font-size: 1.3rem;
            font-weight: 700;
            color: #0f172a;
            margin: 0;
          }

          .alliance-role {
            font-size: 0.82rem;
            color: #10b981;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .alliance-desc {
            color: #475569;
            font-size: 0.95rem;
            line-height: 1.6;
            margin: 0 0 28px 0;
          }

          .alliance-cta-btn {
            background: #ffffff;
            color: #047857;
            border: 1px solid rgba(16, 185, 129, 0.2);
            padding: 12px 24px;
            border-radius: 10px;
            font-size: 0.9rem;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-family: inherit;
            transition: all 0.2s ease;
          }

          .alliance-card:hover .alliance-cta-btn {
            background: #10b981;
            color: #ffffff;
            border-color: #10b981;
            box-shadow: 0 6px 18px rgba(16, 185, 129, 0.25);
          }

          .alliance-card-glow {
            position: absolute;
            top: 0;
            right: 0;
            width: 120px;
            height: 120px;
            background: radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%);
            border-radius: 0 20px 0 100%;
          }

          @media (max-width: 900px) {
            .metrics-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
            .alliances-grid {
              grid-template-columns: 1fr;
            }
            .partners-title {
              font-size: 2.4rem;
            }
          }
        `}</style>
      </main>

      <Footer />
    </>
  );
}
