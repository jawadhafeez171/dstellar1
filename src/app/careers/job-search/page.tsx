"use client";

import { useEffect, useState } from 'react';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function JobSearch() {
  const { tData } = useLanguage();
  const data = tData<any>('careers_job_search');
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    if (data && data.title) {
      document.title = `${data.title} | Dstellar`;
    }
  }, [data]);

  if (!data) return null;

  const filteredJobs = activeFilter === 'All' || activeFilter === (data.filters && data.filters[0])
    ? data.jobs
    : data.jobs.filter((j: any) => j.dept === activeFilter);

  const tagColors: Record<string, string> = {
    HOT: '#ff4d6d', NEW: '#00d4c8', DESTACADO: '#ff4d6d', NUEVO: '#00d4c8',
    '热门': '#ff4d6d', '新职位': '#00d4c8', BELIEBT: '#ff4d6d', NEU: '#00d4c8',
    POPULAIRE: '#ff4d6d', NOUVEAU: '#00d4c8', '人気': '#ff4d6d', '新着': '#00d4c8',
  };

  return (
    <>
      <TopBar />

      <main className="careers-page-container">
        {/* Background */}
        <div className="careers-bg-glow">
          <div className="glow-orb orb-amber" />
          <div className="glow-orb orb-gold" />
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
              <span className="eyebrow-dot" />
              <span className="mono">{data.badge}</span>
            </motion.div>

            <motion.h1
              className="careers-title"
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
            <div className="careers-glow-line" />
          </div>

          {/* Filter Tabs */}
          <motion.div
            className="filter-bar"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="filter-label mono">{data.filter_label}</span>
            <div className="filter-tabs">
              {data.filters && data.filters.map((f: string) => (
                <button
                  key={f}
                  className={`filter-tab ${activeFilter === f ? 'active' : ''}`}
                  onClick={() => setActiveFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Job Listings */}
          <div className="jobs-grid">
            {filteredJobs && filteredJobs.map((job: any, idx: number) => (
              <motion.div
                key={idx}
                className="job-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + idx * 0.07 }}
                whileHover={{ y: -5 }}
              >
                {job.tag && (
                  <span
                    className="job-tag mono"
                    style={{ background: tagColors[job.tag] || '#4a3aff', color: '#fff' }}
                  >
                    {job.tag}
                  </span>
                )}
                <div className="job-dept mono">{job.dept}</div>
                <h3 className="job-title">{job.title}</h3>
                <div className="job-meta">
                  <span className="job-meta-item">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {job.location}
                  </span>
                  <span className="job-meta-item">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {job.type}
                  </span>
                </div>
                <div className="job-card-footer">
                  <button className="apply-btn">{data.cta}</button>
                  <div className="job-accent-line" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Open Application CTA */}
          <motion.div
            className="open-apply-banner"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span>{data.no_role}</span>
            <button className="cta-btn accent">{data.cta}</button>
          </motion.div>
        </div>

        <style jsx global>{`
          .careers-page-container {
            background: linear-gradient(135deg, #ffffff 0%, #fdfaf6 55%, #faf7f2 100%);
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

          .orb-amber {
            width: 700px;
            height: 700px;
            background: radial-gradient(circle, #f59e0b 0%, transparent 70%);
            opacity: 0.07;
            top: -200px;
            left: -150px;
          }

          .orb-gold {
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, #dc6f1a 0%, transparent 70%);
            opacity: 0.06;
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

          .careers-header {
            margin-bottom: 56px;
          }

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
            background: #f59e0b;
            box-shadow: 0 0 12px #f59e0b;
            animation: dotPulse 2s infinite;
          }

          @keyframes dotPulse {
            0%, 100% { box-shadow: 0 0 8px #f59e0b; }
            50% { box-shadow: 0 0 22px #f59e0b, 0 0 44px rgba(245,158,11,0.45); }
          }

          .careers-eyebrow .mono {
            color: #b45309;
            letter-spacing: 0.15em;
          }

          .careers-title {
            font-size: 3.5rem;
            font-weight: 800;
            letter-spacing: -0.03em;
            margin: 0 0 16px 0;
            background: linear-gradient(135deg, #1a1a1a 0%, #92400e 50%, #d97706 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            line-height: 1.1;
          }

          .careers-subtitle {
            font-size: 1.2rem;
            color: rgba(60,40,10,0.6);
            max-width: 700px;
            line-height: 1.65;
            margin: 0;
          }

          .careers-glow-line {
            height: 1px;
            background: linear-gradient(90deg, #f59e0b 0%, rgba(245,158,11,0.2) 70%, transparent 100%);
            margin-top: 32px;
          }

          /* Filter Bar */
          .filter-bar {
            display: flex;
            align-items: center;
            gap: 24px;
            margin-bottom: 40px;
            flex-wrap: wrap;
          }

          .filter-label {
            color: rgba(60,40,10,0.5);
            white-space: nowrap;
          }

          .filter-tabs {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
          }

          .filter-tab {
            background: rgba(245,158,11,0.07);
            border: 1px solid rgba(245,158,11,0.2);
            color: #78350f;
            padding: 8px 18px;
            border-radius: 20px;
            font-size: 0.85rem;
            cursor: pointer;
            transition: all 0.2s ease;
            font-family: inherit;
          }

          .filter-tab:hover {
            background: rgba(245,158,11,0.15);
            border-color: rgba(245,158,11,0.5);
            color: #92400e;
          }

          .filter-tab.active {
            background: #f59e0b;
            border-color: #d97706;
            color: #fff;
          }

          /* Job Cards Grid */
          .jobs-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            margin-bottom: 60px;
          }

          .job-card {
            background: #ffffff;
            border: 1px solid rgba(0,0,0,0.07);
            border-radius: 16px;
            padding: 32px;
            position: relative;
            overflow: hidden;
            box-shadow: 0 2px 12px rgba(0,0,0,0.06);
            transition: all 0.3s ease;
          }

          .job-card:hover {
            border-color: rgba(245,158,11,0.5);
            background: #fffdf7;
            box-shadow: 0 20px 50px rgba(245,158,11,0.12), 0 4px 16px rgba(0,0,0,0.06);
          }

          .job-tag {
            display: inline-block;
            padding: 3px 10px;
            border-radius: 12px;
            font-size: 10px;
            letter-spacing: 0.1em;
            font-weight: 700;
            margin-bottom: 12px;
          }

          .job-dept {
            color: #b45309;
            font-size: 10px;
            margin-bottom: 8px;
            letter-spacing: 0.1em;
          }

          .job-title {
            font-size: 1.3rem;
            font-weight: 700;
            margin: 0 0 20px 0;
            line-height: 1.3;
            color: #1a1a1a;
          }

          .job-meta {
            display: flex;
            gap: 20px;
            margin-bottom: 24px;
          }

          .job-meta-item {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 0.85rem;
            color: #6b7280;
          }

          .job-meta-item svg {
            flex-shrink: 0;
            opacity: 0.6;
          }

          .job-card-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .apply-btn {
            background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%);
            color: #1a0e00;
            border: none;
            padding: 10px 24px;
            border-radius: 8px;
            font-size: 0.875rem;
            font-weight: 700;
            cursor: pointer;
            font-family: inherit;
            transition: all 0.2s ease;
          }

          .apply-btn:hover {
            transform: scale(1.03);
            box-shadow: 0 8px 24px rgba(245,158,11,0.45);
          }

          .job-accent-line {
            height: 2px;
            width: 40px;
            background: linear-gradient(90deg, #f59e0b, #fde68a);
            border-radius: 2px;
          }

          /* Open Application Banner */
          .open-apply-banner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
            border: 1px solid rgba(245,158,11,0.3);
            border-radius: 16px;
            padding: 28px 40px;
            gap: 24px;
            flex-wrap: wrap;
          }

          .open-apply-banner span {
            color: #78350f;
            font-size: 1rem;
          }

          @media (max-width: 900px) {
            .jobs-grid { grid-template-columns: 1fr; }
            .careers-title { font-size: 2.5rem; }
            .filter-bar { flex-direction: column; align-items: flex-start; }
            .open-apply-banner { flex-direction: column; text-align: center; }
          }
        `}</style>
      </main>

      <Footer />
    </>
  );
}
