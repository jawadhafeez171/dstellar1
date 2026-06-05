"use client";

import { useEffect } from 'react';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function InvestorRelations() {
  const { t, tData } = useLanguage();
  const data = tData<any>('investor_relations');

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
        <div className="cyber-glow-bg">
          <div className="glow-circle blue" />
          <div className="glow-circle gold" />
        </div>

        <div className="discover-page-inner">
          <div className="discover-header">
            <span className="mono-eyebrow mono">Discover Dstellar · Financials</span>
            <h1 className="discover-title">{data.title}</h1>
            <p className="discover-subtitle">{data.subtitle}</p>
            <div className="glow-line" />
          </div>

          {/* Highlights Grid */}
          <div className="financial-section">
            <h2 className="section-heading mono">Key Growth Indicators</h2>
            <div className="highlights-grid">
              {data.highlights && data.highlights.map((stat: any, idx: number) => (
                <motion.div 
                  key={idx}
                  className="stat-metric-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="stat-glow" />
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Investor Overview block */}
          <motion.div 
            className="investor-info-panel"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="panel-cyber-tag mono">Equity Structure & Corporate Growth</div>
            <h3 className="panel-title">Stability Meets Vision</h3>
            <p className="panel-desc">{data.desc}</p>
            <div className="investor-graph-box">
              <div className="graph-dot active-dot" />
              <div className="graph-line-trend" />
              <span className="mono graph-trend-label">STEADY UPWARD ACCELERATION</span>
            </div>
            <div className="panel-highlight" />
          </motion.div>
        </div>

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

          .glow-circle.gold {
            width: 600px;
            height: 600px;
            background: var(--accent-hi);
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
            margin-bottom: 80px;
            position: relative;
          }

          .mono-eyebrow {
            color: var(--accent-hi);
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
            background: linear-gradient(90deg, var(--accent-hi) 0%, rgba(255, 209, 102, 0.1) 80%, transparent 100%);
            margin-top: 32px;
            width: 100%;
          }

          /* Financial section styles */
          .financial-section {
            margin-bottom: 80px;
          }

          .section-heading {
            font-size: 1.1rem;
            letter-spacing: 0.15em;
            color: var(--muted);
            margin-bottom: 32px;
            text-transform: uppercase;
            border-left: 2px solid var(--accent-hi);
            padding-left: 12px;
          }

          .highlights-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }

          .stat-metric-card {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            padding: 48px 32px;
            text-align: center;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            backdrop-filter: blur(8px);
            transition: all 0.3s ease;
          }

          .stat-metric-card:hover {
            border-color: var(--accent-hi);
            background: rgba(255, 255, 255, 0.04);
            box-shadow: 0 20px 40px rgba(255, 209, 102, 0.15);
          }

          .stat-glow {
            position: absolute;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: var(--accent-hi);
            filter: blur(40px);
            opacity: 0.1;
            top: -20px;
          }

          .stat-value {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 4rem;
            font-weight: 700;
            color: var(--accent-hi);
            line-height: 1;
            margin-bottom: 16px;
          }

          .stat-label {
            color: rgba(255, 255, 255, 0.75);
            font-size: 1.05rem;
            font-weight: 500;
          }

          /* Investor Overview Panel */
          .investor-info-panel {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.06);
            border-radius: 16px;
            padding: 48px;
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(8px);
          }

          .panel-cyber-tag {
            color: var(--accent-hi);
            font-size: 0.75rem;
            letter-spacing: 0.1em;
            margin-bottom: 20px;
          }

          .panel-title {
            font-size: 2rem;
            margin: 0 0 16px 0;
            font-weight: 700;
          }

          .panel-desc {
            color: rgba(255, 255, 255, 0.7);
            font-size: 1.1rem;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 0 40px 0;
            position: relative;
            z-index: 1;
          }

          /* Custom Graph Visual decoration */
          .investor-graph-box {
            height: 120px;
            border: 1px solid rgba(255, 209, 102, 0.1);
            position: relative;
            background: rgba(255, 209, 102, 0.02);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          }

          .graph-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--accent-hi);
            position: absolute;
            left: 20%;
            top: 70%;
            box-shadow: 0 0 15px var(--accent-hi);
          }

          .graph-line-trend {
            width: 60%;
            height: 2px;
            background: linear-gradient(90deg, var(--accent-hi) 0%, transparent 100%);
            position: absolute;
            left: 20%;
            top: 70%;
            transform: rotate(-15deg);
            transform-origin: left center;
          }

          .graph-trend-label {
            font-size: 0.75rem;
            color: var(--accent-hi);
            letter-spacing: 0.1em;
            z-index: 1;
            margin-top: 40px;
          }

          .panel-highlight {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            width: 6px;
            background: var(--accent-hi);
          }

          @media (max-width: 968px) {
            .highlights-grid {
              grid-template-columns: 1fr;
              gap: 24px;
            }

            .investor-info-panel {
              padding: 32px;
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
