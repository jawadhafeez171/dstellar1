"use client";

import { useEffect } from 'react';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function Sustainability() {
  const { t, tData } = useLanguage();
  const data = tData<any>('sustainability');

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
          <div className="glow-circle teal" />
          <div className="glow-circle green" />
        </div>

        <div className="discover-page-inner">
          <div className="discover-header">
            <span className="mono-eyebrow mono">Discover Dstellar · Sustainability</span>
            <h1 className="discover-title">{data.title}</h1>
            <p className="discover-subtitle">{data.subtitle}</p>
            <div className="glow-line" />
          </div>

          {/* Metrics Grid */}
          <div className="metrics-section">
            <h2 className="section-heading mono">{data.metrics_title}</h2>
            <div className="metrics-grid">
              {data.metrics && data.metrics.map((metric: any, idx: number) => {
                // Determine icon based on metric index
                const renderIcon = () => {
                  if (idx === 0) {
                    return (
                      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#00e676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="metric-icon anim-sway">
                        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 22 2c0 5-1.5 6.5-6.1 12.2a7 7 0 0 1-4.9 5.8Z" />
                        <path d="M9 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    );
                  } else if (idx === 1) {
                    return (
                      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#00e676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="metric-icon anim-document">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" className="doc-line line-1" />
                        <line x1="16" y1="17" x2="8" y2="17" className="doc-line line-2" />
                      </svg>
                    );
                  } else {
                    return (
                      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#00e676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="metric-icon anim-cloud">
                        <path d="M18 10 a 5 5 0 0 0 -9.5 -2.5 a 4 4 0 0 0 -3.5 4 a 4 4 0 0 0 4 4 H 18 a 5 5 0 0 0 0 -10 z" />
                        <g className="arrow-group">
                          <line x1="12" y1="12" x2="12" y2="18" />
                          <polyline points="9 15 12 12 15 15" />
                        </g>
                      </svg>
                    );
                  }
                };

                return (
                  <motion.div 
                    key={idx}
                    className="metric-stat-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="metric-glow" />
                    <div className="metric-icon-wrap">{renderIcon()}</div>
                    <span className="metric-value">{metric.value}</span>
                    <span className="metric-label">{metric.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Green Ledger Section */}
          <motion.div 
            className="green-ledger-panel"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="panel-cyber-tag mono">System Integrated Green Ledger Consulting</div>
            <h3 className="panel-title">Real-Time Carbon & Environmental Tracing</h3>
            <p className="panel-desc">{data.desc}</p>
            <div className="ledger-graphic-image-wrap">
              <img src="/assets/green_ledger_dashboard.png" alt="Green Ledger Dashboard" className="ledger-graphic-img" />
              <span className="mono label-co2">CO2 COMPLIANT MODULE v1.4</span>
            </div>
            <div className="panel-highlight" />
          </motion.div>

          {/* ESR Section */}
          <motion.div 
            className="esr-panel"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            <div className="panel-cyber-tag mono">Environmental & Social Responsibility (ESR)</div>
            <h3 className="panel-title">{data.esr_title}</h3>
            <p className="panel-desc">{data.esr_desc}</p>
            <div className="esr-framework-grid">
              <div className="esr-pillar">
                <div className="pillar-header">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#00f5d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pillar-icon anim-shield">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M8 11h8" className="shield-inner-line" />
                    <path d="M12 7v8" className="shield-inner-line" />
                  </svg>
                  <span className="mono pillar-eyebrow">ENVIRONMENTAL STANDARDS</span>
                </div>
                <span className="pillar-text">Carbon emissions auditing, Green Ledger integrations, green cloud deployments, and electronic waste reductions.</span>
              </div>
              <div className="esr-pillar">
                <div className="pillar-header">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#00f5d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pillar-icon anim-social">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" className="social-head" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span className="mono pillar-eyebrow">SOCIAL RESPONSIBILITY GOVERNANCE</span>
                </div>
                <span className="pillar-text">Ethical sourcing verification modules, sustainable labor compliance audits, and community-first IT empowerment programs.</span>
              </div>
            </div>
            <div className="panel-highlight" />
          </motion.div>
        </div>

        <style jsx global>{`
          .discover-page-container {
            background: linear-gradient(135deg, #020c08 0%, #061a12 60%, #0c2b1f 100%);
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
            opacity: 0.12;
          }

          .glow-circle.teal {
            width: 600px;
            height: 600px;
            background: #00e676;
            top: -100px;
            left: -100px;
          }

          .glow-circle.green {
            width: 600px;
            height: 600px;
            background: #00f5d4;
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
            color: #00e676;
            display: inline-block;
            margin-bottom: 12px;
          }

          .discover-title {
            font-size: 3.5rem;
            font-weight: 800;
            letter-spacing: -0.03em;
            margin: 0 0 16px 0;
            background: linear-gradient(135deg, #ffffff 0%, #a2c7b9 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .discover-subtitle {
            font-size: 1.25rem;
            color: #8fa099;
            max-width: 700px;
            line-height: 1.6;
            margin: 0;
          }

          .glow-line {
            height: 1px;
            background: linear-gradient(90deg, #00e676 0%, rgba(0, 230, 118, 0.1) 80%, transparent 100%);
            margin-top: 32px;
            width: 100%;
          }

          /* Metrics Section */
          .metrics-section {
            margin-bottom: 80px;
          }

          .section-heading {
            font-size: 1.1rem;
            letter-spacing: 0.15em;
            color: #8fa099;
            margin-bottom: 32px;
            text-transform: uppercase;
            border-left: 2px solid #00e676;
            padding-left: 12px;
          }

          .metrics-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }

          .metric-stat-card {
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

          .metric-stat-card:hover {
            border-color: #00e676;
            background: rgba(255, 255, 255, 0.04);
            box-shadow: 0 20px 40px rgba(0, 230, 118, 0.15);
          }

          .metric-glow {
            position: absolute;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: #00e676;
            filter: blur(40px);
            opacity: 0.1;
            top: -20px;
          }

          .metric-value {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 4rem;
            font-weight: 700;
            color: #00e676;
            line-height: 1;
            margin-bottom: 16px;
          }

          .metric-label {
            color: rgba(255, 255, 255, 0.75);
            font-size: 1.05rem;
            font-weight: 500;
          }

          /* Green Ledger Panel */
          .green-ledger-panel {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.06);
            border-radius: 16px;
            padding: 48px;
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(8px);
          }

          /* ESR Panel */
          .esr-panel {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.06);
            border-radius: 16px;
            padding: 48px;
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(8px);
            margin-top: 40px;
          }

          .esr-framework-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
            margin-top: 24px;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            padding-top: 24px;
          }

          .esr-pillar {
            display: flex;
            flex-direction: column;
            gap: 12px;
            text-align: left;
          }

          .pillar-eyebrow {
            color: #00f5d4;
            font-size: 0.75rem;
            letter-spacing: 0.12em;
          }

          .pillar-text {
            color: rgba(255, 255, 255, 0.65);
            font-size: 0.95rem;
            line-height: 1.6;
          }

          .panel-cyber-tag {
            color: #00e676;
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

          /* Ledger graphic element */
          .ledger-graphic-image-wrap {
            height: 200px;
            border: 1px solid rgba(0, 230, 118, 0.15);
            position: relative;
            background: rgba(0, 230, 118, 0.02);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          }

          .ledger-graphic-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.8;
            transition: transform 0.5s ease;
          }

          .ledger-graphic-image-wrap:hover .ledger-graphic-img {
            transform: scale(1.05);
          }

          .metric-icon-wrap {
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: rgba(0, 230, 118, 0.08);
            border: 1px solid rgba(0, 230, 118, 0.15);
          }

          .pillar-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 12px;
          }

          .label-co2 {
            font-size: 0.75rem;
            color: #00e676;
            letter-spacing: 0.1em;
            z-index: 1;
            position: absolute;
            bottom: 12px;
            left: 12px;
            background: rgba(2, 12, 8, 0.8);
            padding: 4px 8px;
            border-radius: 4px;
            border: 1px solid rgba(0, 230, 118, 0.2);
            backdrop-filter: blur(4px);
          }

          .panel-highlight {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            width: 6px;
            background: #00e676;
          }

          /* --- Animated Icons Styles --- */
          
          /* 1. Carbon Sway/Float */
          @keyframes animSway {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-3px) rotate(4deg); }
          }
          .anim-sway {
            animation: animSway 4s ease-in-out infinite;
          }

          /* 2. Paperless Document Wiggle & Typing Lines */
          @keyframes lineTyping {
            0%, 100% { stroke-dashoffset: 0; }
            50% { stroke-dashoffset: 8; }
          }
          .doc-line {
            stroke-dasharray: 8;
            animation: lineTyping 2.5s ease-in-out infinite;
          }
          .line-2 {
            animation-delay: 0.5s;
          }
          
          @keyframes animDoc {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }
          .metric-stat-card:hover .anim-document {
            animation: animDoc 0.6s ease-in-out infinite alternate;
          }

          /* 3. Cloud Arrow Upload Loop */
          @keyframes uploadArrow {
            0% { transform: translateY(3px); opacity: 1; }
            80% { transform: translateY(-5px); opacity: 0; }
            100% { transform: translateY(3px); opacity: 0; }
          }
          .metric-stat-card:hover .arrow-group {
            animation: uploadArrow 1.2s infinite ease-in-out;
          }
          
          /* 4. ESR Environmental Shield Pulse */
          @keyframes shieldPulse {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
          }
          .esr-pillar:hover .shield-inner-line {
            animation: shieldPulse 1.5s infinite ease-in-out;
            stroke: #00f5d4;
          }
          
          /* 5. ESR Social Heads Floating */
          @keyframes socialFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
          }
          .esr-pillar:hover .social-head {
            animation: socialFloat 1.2s infinite ease-in-out alternate;
          }

          @media (max-width: 968px) {
            .metrics-grid {
              grid-template-columns: 1fr;
              gap: 24px;
            }

            .green-ledger-panel,
            .esr-panel {
              padding: 32px;
            }

            .esr-framework-grid {
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
