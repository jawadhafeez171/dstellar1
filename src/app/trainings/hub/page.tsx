"use client";

import { useState, useEffect, useMemo } from 'react';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function LearningHub() {
  const { tData } = useLanguage();
  const data = tData<any>('trainings_hub');

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');

  useEffect(() => {
    if (data && data.title) {
      document.title = `${data.title} | Dstellar`;
    }
  }, [data]);

  const filteredPathways = useMemo(() => {
    if (!data || !data.pathways) return [];
    return data.pathways.filter((path: any) => {
      const matchesSearch = path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            path.desc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLevel = selectedLevel === 'All' || 
                           path.level.toLowerCase() === selectedLevel.toLowerCase() ||
                           (selectedLevel === 'Avanzado' && path.level === 'Advanced') ||
                           (selectedLevel === 'Advanced' && path.level === 'Avanzado') ||
                           (selectedLevel === '中级' && path.level === 'Intermediate') ||
                           (selectedLevel === 'Intermediate' && path.level === '中级') ||
                           (selectedLevel === 'Mittel' && path.level === 'Intermediate') ||
                           (selectedLevel === 'Fortgeschritten' && path.level === 'Advanced');
      return matchesSearch && matchesLevel;
    });
  }, [data, searchQuery, selectedLevel]);

  if (!data) return null;

  const levels = ['All', 'Intermediate', 'Advanced', 'Specialist'];

  return (
    <>
      <TopBar />

      <main className="trainings-page-container">
        <div className="trainings-bg-glow">
          <div className="glow-orb orb-indigo" />
          <div className="glow-orb orb-violet" />
          <div className="grid-overlay" />
        </div>

        <div className="trainings-page-inner">
          {/* Header */}
          <div className="trainings-header">
            <motion.div
              className="trainings-eyebrow"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="eyebrow-dot violet" />
              <span className="mono">{data.badge}</span>
            </motion.div>

            <motion.h1
              className="trainings-title indigo-grad"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {data.title}
            </motion.h1>

            <motion.p
              className="trainings-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {data.subtitle}
            </motion.p>
            <div className="trainings-glow-line indigo-line" />
          </div>

          {/* Search & Filter */}
          <motion.div 
            className="filter-toolbar"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="search-input-wrap">
              <svg className="search-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input 
                type="text" 
                placeholder="Search learning pathways..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-field"
              />
              {searchQuery && (
                <button className="search-clear-btn" onClick={() => setSearchQuery('')}>✕</button>
              )}
            </div>

            <div className="level-filter-tabs">
              {levels.map((lvl) => {
                const isActive = selectedLevel === lvl;
                return (
                  <button
                    key={lvl}
                    className={`level-tab-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setSelectedLevel(lvl)}
                  >
                    {lvl}
                    {isActive && (
                      <motion.div 
                        layoutId="activeLevelUnderline" 
                        className="tab-underline"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Pathways Grid */}
          <motion.div layout className="pathways-grid">
            <AnimatePresence mode="popLayout">
              {filteredPathways.map((path: any, idx: number) => (
                <motion.div
                  layout
                  key={path.title}
                  className="pathway-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.08)' }}
                >
                  <div className="pathway-card-header">
                    <span className="pathway-level-tag">{path.level}</span>
                    <span className="pathway-duration">{path.duration}</span>
                  </div>

                  <h3 className="pathway-card-title">{path.title}</h3>
                  <p className="pathway-card-desc">{path.desc}</p>

                  <button className="pathway-card-cta">
                    {data.cta}
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </button>

                  <div className="card-border-glow" />
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredPathways.length === 0 && (
              <motion.div 
                className="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h3>No pathways found</h3>
                <p>Try refining your search query or choosing a different level filter.</p>
              </motion.div>
            )}
          </motion.div>
        </div>

        <style jsx global>{`
          .trainings-page-container {
            background: linear-gradient(135deg, #ffffff 0%, #f6f5ff 60%, #edd8ff 100%);
            color: #0f172a;
            min-height: 100vh;
            position: relative;
            overflow: hidden;
            padding-top: 140px;
            padding-bottom: 100px;
          }

          .trainings-bg-glow {
            position: absolute;
            inset: 0;
            pointer-events: none;
            z-index: 0;
          }

          .glow-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(140px);
            opacity: 0.06;
          }

          .orb-indigo {
            width: 700px;
            height: 700px;
            background: radial-gradient(circle, #6366f1 0%, transparent 75%);
            top: -150px;
            left: -100px;
          }

          .orb-violet {
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, #8b5cf6 0%, transparent 75%);
            bottom: -100px;
            right: -100px;
          }

          .grid-overlay {
            position: absolute;
            inset: 0;
            background-image:
              linear-gradient(rgba(99, 102, 241, 0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.04) 1px, transparent 1px);
            background-size: 50px 50px;
          }

          .trainings-page-inner {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
            position: relative;
            z-index: 1;
          }

          .trainings-header {
            margin-bottom: 50px;
          }

          .trainings-eyebrow {
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

          .eyebrow-dot.violet {
            background: #8b5cf6;
            box-shadow: 0 0 12px #8b5cf6;
          }

          .trainings-eyebrow .mono {
            color: #6d28d9;
            font-size: 0.85rem;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            font-weight: 600;
          }

          .trainings-title {
            font-size: 3.2rem;
            font-weight: 800;
            letter-spacing: -0.03em;
            margin: 0 0 16px 0;
            line-height: 1.15;
          }

          .indigo-grad {
            background: linear-gradient(135deg, #0f172a 10%, #4f46e5 70%, #8b5cf6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .trainings-subtitle {
            font-size: 1.15rem;
            color: #475569;
            max-width: 680px;
            line-height: 1.6;
            margin: 0;
          }

          .trainings-glow-line {
            height: 1px;
            margin-top: 32px;
          }

          .indigo-line {
            background: linear-gradient(90deg, #6366f1 0%, rgba(99, 102, 241, 0.15) 75%, transparent 100%);
          }

          /* Toolbar */
          .filter-toolbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(99, 102, 241, 0.12);
            border-radius: 16px;
            padding: 16px 20px;
            margin-bottom: 40px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
          }

          .search-input-wrap {
            position: relative;
            flex-grow: 1;
            max-width: 450px;
            display: flex;
            align-items: center;
          }

          .search-icon {
            position: absolute;
            left: 14px;
            color: #94a3b8;
            pointer-events: none;
          }

          .search-field {
            width: 100%;
            padding: 12px 16px 12px 42px;
            border: 1px solid rgba(99, 102, 241, 0.15);
            background: #ffffff;
            border-radius: 10px;
            font-size: 0.95rem;
            font-family: inherit;
            color: inherit;
            outline: none;
            transition: all 0.2s ease;
          }

          .search-field:focus {
            border-color: #6366f1;
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
          }

          .search-clear-btn {
            position: absolute;
            right: 14px;
            background: none;
            border: none;
            cursor: pointer;
            font-size: 0.85rem;
            color: #94a3b8;
            padding: 4px;
          }

          .search-clear-btn:hover {
            color: #64748b;
          }

          .level-filter-tabs {
            display: flex;
            gap: 6px;
          }

          .level-tab-btn {
            position: relative;
            background: none;
            border: none;
            padding: 10px 18px;
            font-size: 0.9rem;
            font-weight: 500;
            color: #64748b;
            cursor: pointer;
            border-radius: 8px;
            transition: color 0.2s ease;
          }

          .level-tab-btn:hover {
            color: #0f172a;
          }

          .level-tab-btn.active {
            color: #4f46e5;
            font-weight: 600;
          }

          .tab-underline {
            position: absolute;
            bottom: 0;
            left: 10%;
            right: 10%;
            height: 3px;
            background: #6366f1;
            border-radius: 2px;
          }

          /* Grid and cards */
          .pathways-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 28px;
            position: relative;
          }

          .pathway-card {
            background: #ffffff;
            border: 1px solid rgba(99, 102, 241, 0.1);
            border-radius: 18px;
            padding: 32px;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
            transition: all 0.3s ease;
          }

          .pathway-card:hover {
            border-color: rgba(99, 102, 241, 0.4);
            transform: translateY(-6px);
          }

          .pathway-card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 18px;
          }

          .pathway-level-tag {
            font-size: 0.75rem;
            font-weight: 700;
            color: #6366f1;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .pathway-duration {
            font-size: 0.8rem;
            color: #64748b;
            font-weight: 500;
          }

          .pathway-card-title {
            font-size: 1.35rem;
            font-weight: 700;
            color: #0f172a;
            margin: 0 0 12px 0;
            line-height: 1.25;
          }

          .pathway-card-desc {
            color: #475569;
            font-size: 0.95rem;
            line-height: 1.6;
            margin: 0 0 28px 0;
            flex-grow: 1;
          }

          .pathway-card-cta {
            background: #f5f3ff;
            color: #4f46e5;
            border: 1px solid rgba(99, 102, 241, 0.25);
            padding: 10px 16px;
            border-radius: 8px;
            font-size: 0.88rem;
            font-weight: 700;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-family: inherit;
            transition: all 0.2s ease;
          }

          .pathway-card:hover .pathway-card-cta {
            background: #6366f1;
            color: #ffffff;
            border-color: #6366f1;
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
          }

          .card-border-glow {
            position: absolute;
            inset: 0;
            border-radius: 18px;
            pointer-events: none;
            border: 2px solid transparent;
            background: linear-gradient(135deg, rgba(99, 102, 241, 0.4), transparent) border-box;
            -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .pathway-card:hover .card-border-glow {
            opacity: 1;
          }

          .no-results {
            grid-column: 1 / -1;
            text-align: center;
            padding: 60px 20px;
            background: rgba(255, 255, 255, 0.5);
            border: 1px dashed rgba(99, 102, 241, 0.2);
            border-radius: 16px;
          }

          .no-results h3 {
            font-size: 1.3rem;
            margin: 0 0 8px 0;
            color: #334155;
          }

          .no-results p {
            color: #64748b;
            margin: 0;
          }

          @media (max-width: 900px) {
            .filter-toolbar {
              flex-direction: column;
              align-items: stretch;
            }
            .search-input-wrap {
              max-width: 100%;
            }
            .level-filter-tabs {
              justify-content: center;
            }
            .trainings-title {
              font-size: 2.4rem;
            }
          }
        `}</style>
      </main>

      <Footer />
    </>
  );
}
