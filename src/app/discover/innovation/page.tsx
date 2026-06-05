"use client";

import { useEffect } from 'react';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function Innovation() {
  const { t, tData } = useLanguage();
  const data = tData<any>('innovation');

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
          <div className="glow-circle magenta" />
        </div>

        <div className="discover-page-inner">
          <div className="discover-header">
            <span className="mono-eyebrow mono">Discover Dstellar · R&D Labs</span>
            <h1 className="discover-title">{data.title}</h1>
            <p className="discover-subtitle">{data.subtitle}</p>
            <div className="glow-line" />
          </div>

          {/* Innovation Projects List */}
          <div className="projects-section">
            <h2 className="section-heading mono">Active R&D Projects</h2>
            <div className="projects-grid">
              {data.projects && data.projects.map((proj: any, idx: number) => {
                const accentColor = idx === 0 ? 'var(--accent-4)' : idx === 1 ? 'var(--accent-2)' : 'var(--accent)';
                
                return (
                  <motion.div 
                    key={idx}
                    className="glass-card project-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: idx * 0.15 }}
                    whileHover={{ y: -8 }}
                  >
                    <div className="project-header">
                      <span className="project-index mono" style={{ color: accentColor }}>PROJECT_0{idx + 1}</span>
                      <div className="status-pulse-wrap">
                        <span className="pulse-dot" style={{ background: accentColor }} />
                        <span className="status-text mono">ACTIVE R&D</span>
                      </div>
                    </div>

                    <h3 className="project-title">{proj.t}</h3>
                    <p className="project-desc">{proj.d}</p>

                    {/* Scientific Grid/Lines decoration */}
                    <div className="project-decoration">
                      <div className="deco-bar" style={{ background: accentColor }} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
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

          .glow-circle.magenta {
            width: 600px;
            height: 600px;
            background: #ff7a00;
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
            color: var(--accent-2);
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
            background: linear-gradient(90deg, var(--accent-2) 0%, rgba(255, 122, 0, 0.1) 80%, transparent 100%);
            margin-top: 32px;
            width: 100%;
          }

          /* Innovation Layout */
          .projects-section {
            position: relative;
          }

          .section-heading {
            font-size: 1.1rem;
            letter-spacing: 0.15em;
            color: var(--muted);
            margin-bottom: 32px;
            text-transform: uppercase;
            border-left: 2px solid var(--accent-2);
            padding-left: 12px;
          }

          .projects-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }

          .project-card {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            padding: 36px;
            display: flex;
            flex-direction: column;
            backdrop-filter: blur(8px);
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
          }

          .project-card:hover {
            background: rgba(255, 255, 255, 0.04);
            border-color: rgba(255, 255, 255, 0.15);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          }

          .project-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 24px;
          }

          .project-index {
            font-size: 0.8rem;
            font-weight: 600;
          }

          .status-pulse-wrap {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .pulse-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            box-shadow: 0 0 10px currentColor;
          }

          .status-text {
            font-size: 8px;
            color: var(--muted);
            letter-spacing: 0.05em;
          }

          .project-title {
            font-size: 1.5rem;
            font-weight: 700;
            margin: 0 0 16px 0;
            line-height: 1.3;
          }

          .project-desc {
            color: rgba(255, 255, 255, 0.65);
            font-size: 0.95rem;
            line-height: 1.5;
            margin: 0 0 32px 0;
            flex-grow: 1;
          }

          /* Decoration lines */
          .project-decoration {
            width: 100%;
            height: 2px;
            background: rgba(255, 255, 255, 0.05);
            position: relative;
          }

          .deco-bar {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 40px;
            transition: width 0.3s ease;
          }

          .project-card:hover .deco-bar {
            width: 100%;
          }

          @media (max-width: 968px) {
            .projects-grid {
              grid-template-columns: 1fr;
              gap: 24px;
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
