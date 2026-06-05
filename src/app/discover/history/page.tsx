"use client";

import { useEffect } from 'react';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function History() {
  const { t, tData } = useLanguage();
  const data = tData<any>('history');

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
          <div className="glow-circle purple" />
        </div>

        <div className="discover-page-inner">
          <div className="discover-header">
            <span className="mono-eyebrow mono">Discover Dstellar · Legacy</span>
            <h1 className="discover-title">{data.title}</h1>
            <p className="discover-subtitle">{data.subtitle}</p>
            <div className="glow-line" />
          </div>

          {/* Timeline Container */}
          <div className="timeline-container">
            <div className="timeline-spine" />
            
            <div className="timeline-events-list">
              {data.events && data.events.map((evt: any, idx: number) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div 
                    key={idx}
                    className={`timeline-item ${isEven ? 'left-aligned' : 'right-aligned'}`}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: idx * 0.15 }}
                  >
                    {/* Node on the timeline spine */}
                    <div className="timeline-node">
                      <div className="node-pulse" />
                    </div>

                    {/* Milestone Card */}
                    <motion.div 
                      className="glass-card milestone-card"
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <div className="milestone-header">
                        <span className="milestone-year mono">{evt.y}</span>
                        <h3 className="milestone-title">{evt.t}</h3>
                      </div>
                      <p className="milestone-desc">{evt.d}</p>
                      <div className="milestone-badge mono">SAP CERTIFIED NODE</div>
                      <div className="card-glow-border" />
                    </motion.div>
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

          .glow-circle.purple {
            width: 600px;
            height: 600px;
            background: #2d1a5e;
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
            color: var(--accent-3);
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
            background: linear-gradient(90deg, var(--accent-3) 0%, rgba(255, 122, 0, 0.1) 80%, transparent 100%);
            margin-top: 32px;
            width: 100%;
          }

          /* Timeline Spine & Nodes */
          .timeline-container {
            position: relative;
            padding: 40px 0;
            margin-top: 40px;
          }

          .timeline-spine {
            position: absolute;
            left: 50%;
            top: 0;
            bottom: 0;
            width: 2px;
            background: linear-gradient(180deg, 
              var(--accent-3) 0%, 
              var(--accent) 50%, 
              rgba(74, 58, 255, 0.1) 100%
            );
            transform: translateX(-50%);
            z-index: 0;
          }

          .timeline-events-list {
            display: flex;
            flex-direction: column;
            gap: 60px;
            position: relative;
            z-index: 1;
          }

          .timeline-item {
            display: flex;
            width: 50%;
            position: relative;
          }

          .timeline-item.left-aligned {
            align-self: flex-start;
            padding-right: 50px;
            justify-content: flex-end;
          }

          .timeline-item.right-aligned {
            align-self: flex-end;
            padding-left: 50px;
            justify-content: flex-start;
          }

          /* Spine connection node */
          .timeline-node {
            position: absolute;
            top: 40px;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: var(--accent);
            border: 3px solid var(--ink);
            z-index: 2;
          }

          .timeline-item.left-aligned .timeline-node {
            right: -8px;
          }

          .timeline-item.right-aligned .timeline-node {
            left: -8px;
          }

          .node-pulse {
            position: absolute;
            inset: -4px;
            border-radius: 50%;
            border: 1px solid var(--accent);
            animation: nodePulse 2s infinite ease-out;
            opacity: 0;
          }

          @keyframes nodePulse {
            0% { transform: scale(1); opacity: 0.8; }
            100% { transform: scale(2.5); opacity: 0; }
          }

          /* Milestone Card */
          .glass-card {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.06);
            border-radius: 16px;
            padding: 32px;
            width: 100%;
            max-width: 500px;
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(8px);
            transition: all 0.3s ease;
          }

          .glass-card:hover {
            background: rgba(255, 255, 255, 0.04);
            border-color: rgba(255, 255, 255, 0.12);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          }

          .milestone-header {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 16px;
          }

          .milestone-year {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--accent-3);
            background: rgba(255, 122, 0, 0.1);
            padding: 2px 10px;
            border-radius: 6px;
            border: 1px solid rgba(255, 122, 0, 0.2);
          }

          .milestone-title {
            font-size: 1.35rem;
            font-weight: 600;
            margin: 0;
          }

          .milestone-desc {
            color: rgba(255, 255, 255, 0.7);
            line-height: 1.6;
            font-size: 0.95rem;
            margin: 0 0 20px 0;
          }

          .milestone-badge {
            font-size: 9px;
            letter-spacing: 0.1em;
            color: var(--muted);
            opacity: 0.6;
          }

          .card-glow-border {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, transparent 0%, var(--accent-3) 50%, transparent 100%);
            opacity: 0.4;
          }

          @media (max-width: 768px) {
            .timeline-spine {
              left: 20px;
            }

            .timeline-item {
              width: 100%;
              align-self: flex-start !important;
              padding-left: 50px !important;
              padding-right: 0 !important;
              justify-content: flex-start !important;
            }

            .timeline-item .timeline-node {
              left: 12px !important;
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
