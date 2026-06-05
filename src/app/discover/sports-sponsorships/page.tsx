"use client";

import { useEffect } from 'react';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function SportsSponsorships() {
  const { t, tData } = useLanguage();
  const data = tData<any>('sports_sponsorships');

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
          <div className="glow-circle orange" />
          <div className="glow-circle pink" />
        </div>

        <div className="discover-page-inner">
          <div className="discover-header">
            <span className="mono-eyebrow mono">Discover Dstellar · Racing & Esports</span>
            <h1 className="discover-title">{data.title}</h1>
            <p className="discover-subtitle">{data.subtitle}</p>
            <div className="glow-line" />
          </div>

          {/* Description Panel */}
          <motion.div 
            className="sponsorship-intro-panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="card-badge mono">PRECISION ENGINEERING</div>
            <h3>High-Performance On & Off The Track</h3>
            <p>{data.desc}</p>
            <div className="card-glow-border" />
          </motion.div>

          {/* Showcase split cards */}
          <div className="sponsorship-showcase-grid">
            <motion.div 
              className="glass-card sport-card formula-e"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="sport-content">
                <span className="sport-category mono">CATEGORY 01 · MOTORSPORT</span>
                <h4>Formula E Racing</h4>
                <p>Engineering sustainable, high-velocity electrical powertrains. Mirroring our clean-core enterprise cloud transformations.</p>
                <div className="sport-stats">
                  <div className="stat-item">
                    <span className="n mono">220+</span>
                    <span className="l">MPH MAX SPEED</span>
                  </div>
                  <div className="stat-item">
                    <span className="n mono">100%</span>
                    <span className="l">CLEAN ENERGY</span>
                  </div>
                </div>
              </div>
              <div className="sport-graphic formula-e-graphic" />
              <div className="card-bottom-accent" />
            </motion.div>

            <motion.div 
              className="glass-card sport-card esports"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="sport-content">
                <span className="sport-category mono">CATEGORY 02 · CYBER-ATHLETICS</span>
                <h4>Cyber Pro Leagues</h4>
                <p>Sponsoring premier esports networks. Where hyper-fast millisecond reflex times demand robust high-concurrency systems.</p>
                <div className="sport-stats">
                  <div className="stat-item">
                    <span className="n mono">3.2B</span>
                    <span className="l">VIEWERS WORLDWIDE</span>
                  </div>
                  <div className="stat-item">
                    <span className="n mono">&lt;5MS</span>
                    <span className="l">LATENCY LIMIT</span>
                  </div>
                </div>
              </div>
              <div className="sport-graphic esports-graphic" />
              <div className="card-bottom-accent" />
            </motion.div>
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
            opacity: 0.12;
          }

          .glow-circle.orange {
            width: 600px;
            height: 600px;
            background: var(--accent-2);
            top: -100px;
            left: -100px;
          }

          .glow-circle.pink {
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

          /* Intro Panel */
          .sponsorship-intro-panel {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.06);
            border-radius: 16px;
            padding: 48px;
            margin-bottom: 56px;
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(8px);
          }

          .sponsorship-intro-panel h3 {
            font-size: 2rem;
            margin: 24px 0 16px 0;
            font-weight: 700;
          }

          .sponsorship-intro-panel p {
            color: rgba(255, 255, 255, 0.7);
            font-size: 1.15rem;
            line-height: 1.65;
            margin: 0;
            max-width: 900px;
          }

          .card-badge {
            background: rgba(255, 122, 0, 0.1);
            color: var(--accent-2);
            padding: 4px 12px;
            border-radius: 20px;
            display: inline-block;
            border: 1px solid rgba(255, 122, 0, 0.2);
            font-size: 0.75rem;
          }

          .card-glow-border {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, transparent 0%, var(--accent-2) 50%, transparent 100%);
            opacity: 0.5;
          }

          /* Showcase Split Grid */
          .sponsorship-showcase-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }

          .sport-card {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            padding: 40px;
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(8px);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: all 0.3s ease;
          }

          .sport-card:hover {
            background: rgba(255, 255, 255, 0.04);
            border-color: rgba(255, 255, 255, 0.12);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          }

          .sport-category {
            color: var(--muted);
            font-size: 0.75rem;
            display: block;
            margin-bottom: 20px;
          }

          .sport-card h4 {
            font-size: 1.75rem;
            margin: 0 0 16px 0;
            font-weight: 700;
          }

          .sport-card p {
            color: rgba(255, 255, 255, 0.65);
            line-height: 1.6;
            margin: 0 0 40px 0;
            font-size: 1rem;
          }

          .sport-stats {
            display: flex;
            gap: 40px;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            padding-top: 24px;
          }

          .stat-item {
            display: flex;
            flex-direction: column;
          }

          .stat-item .n {
            font-size: 2rem;
            font-weight: 700;
            color: var(--accent-2);
          }

          .stat-item .l {
            font-size: 0.75rem;
            color: var(--muted);
            margin-top: 4px;
            letter-spacing: 0.05em;
          }

          .card-bottom-accent {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: var(--accent-2);
            transform: scaleX(0);
            transition: transform 0.3s ease;
          }

          .sport-card:hover .card-bottom-accent {
            transform: scaleX(1);
          }

          @media (max-width: 968px) {
            .sponsorship-showcase-grid {
              grid-template-columns: 1fr;
              gap: 24px;
            }

            .sponsorship-intro-panel {
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
