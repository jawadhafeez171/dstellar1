"use client";

import { useState, useEffect, useMemo } from 'react';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function FindPartner() {
  const { tData } = useLanguage();
  const data = tData<any>('partners_find');

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  useEffect(() => {
    if (data && data.title) {
      document.title = `${data.title} | Dstellar`;
    }
  }, [data]);

  const filteredPartners = useMemo(() => {
    if (!data || !data.partners) return [];
    return data.partners.filter((partner: any) => {
      const matchesSearch = partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            partner.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            partner.type.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRegion = selectedRegion === 'All' || 
                            partner.region.toLowerCase() === selectedRegion.toLowerCase() ||
                            (selectedRegion === 'América' && partner.region === 'Americas') ||
                            (selectedRegion === 'Americas' && partner.region === 'América');
      return matchesSearch && matchesRegion;
    });
  }, [data, searchQuery, selectedRegion]);

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
          {/* Header Section */}
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

          {/* Search & Filter Toolbar */}
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
                placeholder={data.search_placeholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-field"
              />
              {searchQuery && (
                <button className="search-clear-btn" onClick={() => setSearchQuery('')}>✕</button>
              )}
            </div>

            <div className="region-filter-tabs">
              {data.regions && data.regions.map((reg: string) => {
                const isActive = selectedRegion === reg;
                return (
                  <button
                    key={reg}
                    className={`region-tab-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setSelectedRegion(reg)}
                  >
                    {reg}
                    {isActive && (
                      <motion.div 
                        layoutId="activeTabUnderline" 
                        className="tab-underline"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Partners Directory Grid */}
          <motion.div layout className="directory-grid">
            <AnimatePresence mode="popLayout">
              {filteredPartners.map((partner: any, idx: number) => (
                <motion.div
                  layout
                  key={partner.name}
                  className="partner-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(16, 185, 129, 0.08)' }}
                >
                  <div className="partner-card-header">
                    <div className={`partner-type-badge ${partner.type.toLowerCase().includes('strategic') ? 'strategic' : partner.type.toLowerCase().includes('gold') ? 'gold' : 'delivery'}`}>
                      {partner.type}
                    </div>
                    <span className="partner-region-tag">{partner.region}</span>
                  </div>

                  <h3 className="partner-card-name">{partner.name}</h3>
                  
                  <div className="partner-card-details">
                    <div className="detail-row">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>
                      <span>{partner.location}</span>
                    </div>
                    <div className="detail-row">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      <span>{partner.projects} {data.projects_label || 'Delivered Projects'}</span>
                    </div>
                  </div>

                  <button className="partner-card-cta">
                    {data.cta}
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </button>

                  <div className="card-border-glow" />
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredPartners.length === 0 && (
              <motion.div 
                className="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h3>No partners found</h3>
                <p>Try refining your search query or choosing a different region.</p>
              </motion.div>
            )}
          </motion.div>
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

          /* Toolbar */
          .filter-toolbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(16, 185, 129, 0.12);
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
            border: 1px solid rgba(16, 185, 129, 0.15);
            background: #ffffff;
            border-radius: 10px;
            font-size: 0.95rem;
            font-family: inherit;
            color: inherit;
            outline: none;
            transition: all 0.2s ease;
          }

          .search-field:focus {
            border-color: #10b981;
            box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.15);
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

          .region-filter-tabs {
            display: flex;
            gap: 6px;
          }

          .region-tab-btn {
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

          .region-tab-btn:hover {
            color: #0f172a;
          }

          .region-tab-btn.active {
            color: #047857;
            font-weight: 600;
          }

          .tab-underline {
            position: absolute;
            bottom: 0;
            left: 10%;
            right: 10%;
            height: 3px;
            background: #10b981;
            border-radius: 2px;
          }

          /* Grid and cards */
          .directory-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 28px;
            position: relative;
          }

          .partner-card {
            background: #ffffff;
            border: 1px solid rgba(16, 185, 129, 0.1);
            border-radius: 16px;
            padding: 28px;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
            transition: all 0.3s ease;
          }

          .partner-card:hover {
            border-color: rgba(16, 185, 129, 0.4);
            transform: translateY(-6px);
          }

          .partner-card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
          }

          .partner-type-badge {
            font-size: 0.75rem;
            font-weight: 600;
            padding: 4px 10px;
            border-radius: 6px;
          }

          .partner-type-badge.strategic {
            background: rgba(16, 185, 129, 0.1);
            color: #047857;
          }

          .partner-type-badge.gold {
            background: rgba(245, 158, 11, 0.1);
            color: #d97706;
          }

          .partner-type-badge.delivery {
            background: rgba(59, 130, 246, 0.1);
            color: #2563eb;
          }

          .partner-region-tag {
            font-size: 0.75rem;
            color: #64748b;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .partner-card-name {
            font-size: 1.25rem;
            font-weight: 700;
            margin: 0 0 16px 0;
            color: #0f172a;
          }

          .partner-card-details {
            margin-bottom: 24px;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .detail-row {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 0.88rem;
            color: #475569;
          }

          .detail-row svg {
            color: #10b981;
          }

          .partner-card-cta {
            background: #f0fdf4;
            color: #047857;
            border: 1px solid rgba(16, 185, 129, 0.2);
            padding: 10px 16px;
            border-radius: 8px;
            font-size: 0.88rem;
            font-weight: 600;
            font-family: inherit;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            transition: all 0.2s ease;
          }

          .partner-card:hover .partner-card-cta {
            background: #10b981;
            color: #ffffff;
            border-color: #10b981;
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);
          }

          .card-border-glow {
            position: absolute;
            inset: 0;
            border-radius: 16px;
            pointer-events: none;
            border: 2px solid transparent;
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.4), transparent) border-box;
            -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .partner-card:hover .card-border-glow {
            opacity: 1;
          }

          .no-results {
            grid-column: 1 / -1;
            text-align: center;
            padding: 60px 20px;
            background: rgba(255, 255, 255, 0.5);
            border: 1px dashed rgba(16, 185, 129, 0.2);
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
            .region-filter-tabs {
              justify-content: center;
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
