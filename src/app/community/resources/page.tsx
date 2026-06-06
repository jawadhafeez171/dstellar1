"use client";

import { useEffect, useState } from 'react';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function ResourceLibrary() {
  const { tData } = useLanguage();
  const data = tData<any>('community_resources');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [resources, setResources] = useState<any[]>([]);
  const [downloadingIndex, setDownloadingIndex] = useState<number | null>(null);

  useEffect(() => {
    if (data && data.title) {
      document.title = `${data.title} | Dstellar`;
    }
    if (data && data.resources) {
      setResources(data.resources);
    }
  }, [data]);

  if (!data) return null;

  const categories = data.categories || ["All"];
  
  const handleDownload = (idx: number) => {
    setDownloadingIndex(idx);
    setTimeout(() => {
      const updated = [...resources];
      updated[idx] = { ...updated[idx], downloads: updated[idx].downloads + 1 };
      setResources(updated);
      setDownloadingIndex(null);
      
      // Simulate file download trigger
      const link = document.createElement('a');
      link.href = '#';
      link.setAttribute('download', resources[idx].title);
      document.body.appendChild(link);
      // link.click(); // disabled to prevent page jump in mock env
      document.body.removeChild(link);
    }, 1200);
  };

  const filteredResources = resources.filter((r: any) => {
    const matchesSearch = r.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          r.format.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || activeCategory === categories[0] || r.type === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <TopBar />

      <main className="community-page-container">
        {/* Glow Effects */}
        <div className="community-bg-glow">
          <div className="glow-orb orb-rose-light" />
          <div className="glow-orb orb-violet-deep" />
          <div className="grid-overlay" />
        </div>

        <div className="community-page-inner">
          {/* Header */}
          <div className="community-header">
            <motion.div
              className="community-eyebrow"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="eyebrow-dot rose" />
              <span className="mono">{data.badge}</span>
            </motion.div>

            <motion.h1
              className="community-title rose-grad"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {data.title}
            </motion.h1>

            <motion.p
              className="community-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {data.subtitle}
            </motion.p>
            <div className="community-glow-line rose-line" />
          </div>

          {/* Action Bar */}
          <div className="forum-action-bar">
            <div className="search-box-wrap">
              <svg className="search-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                type="text"
                className="search-input"
                placeholder="Search playbooks, templates, checklists..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="forum-categories-wrap">
            <div className="categories-list">
              {categories.map((cat: string) => (
                <button
                  key={cat}
                  className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Resources Catalog Grid */}
          <div className="resources-grid">
            <AnimatePresence mode="popLayout">
              {filteredResources.map((res: any, idx: number) => {
                const originalIndex = resources.findIndex(item => item.title === res.title);
                const isDownloading = downloadingIndex === originalIndex;
                
                return (
                  <motion.div
                    key={res.title}
                    className="resource-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    whileHover={{ y: -6 }}
                  >
                    <div className="resource-card-header">
                      <span className="resource-type-badge mono">{res.type}</span>
                      <span className="resource-format-badge mono">{res.format} · {res.size}</span>
                    </div>

                    <h3 className="resource-card-title">{res.title}</h3>

                    <div className="resource-stats mono">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                      </svg>
                      <span>{res.downloads} downloads</span>
                    </div>

                    <button 
                      className={`resource-download-btn mono ${isDownloading ? 'downloading' : ''}`}
                      disabled={isDownloading}
                      onClick={() => handleDownload(originalIndex)}
                    >
                      {isDownloading ? (
                        <>
                          <span className="download-spinner" />
                          Downloading...
                        </>
                      ) : data.cta}
                    </button>
                    <div className="card-hover-border rose-border" />
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {filteredResources.length === 0 && (
              <div className="no-results" style={{ gridColumn: '1 / -1' }}>
                <p>No resources found matching your search term.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        .community-page-container {
          background: linear-gradient(135deg, #ffffff 0%, #fffbfb 50%, #fff0f2 100%);
          color: #1a1a1a;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          padding-top: 140px;
          padding-bottom: 100px;
        }

        .community-bg-glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(135px);
        }

        .orb-rose-light {
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, #f43f5e 0%, transparent 70%);
          opacity: 0.04;
          top: -200px;
          left: -150px;
        }

        .orb-violet-deep {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, #8b5cf6 0%, transparent 70%);
          opacity: 0.04;
          bottom: -100px;
          right: -100px;
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(244, 63, 94, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(244, 63, 94, 0.02) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .community-page-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }

        .community-header {
          margin-bottom: 48px;
        }

        .community-eyebrow {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
        }

        .eyebrow-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .eyebrow-dot.rose {
          background: #f43f5e;
          box-shadow: 0 0 12px #f43f5e;
          animation: dotPulseRose 2s infinite;
        }

        @keyframes dotPulseRose {
          0%, 100% { box-shadow: 0 0 8px #f43f5e; }
          50% { box-shadow: 0 0 20px #f43f5e, 0 0 40px rgba(244,63,94,0.45); }
        }

        .community-eyebrow .mono {
          color: #be123c;
          letter-spacing: 0.15em;
          font-weight: 600;
          font-size: 0.85rem;
        }

        .community-title {
          font-size: 3.5rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          margin: 0 0 16px 0;
          line-height: 1.1;
        }

        .rose-grad {
          background: linear-gradient(135deg, #4c0519 0%, #be123c 60%, #f43f5e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .community-subtitle {
          font-size: 1.2rem;
          color: #4b5563;
          max-width: 700px;
          line-height: 1.6;
          margin: 0;
        }

        .community-glow-line {
          height: 2px;
          margin-top: 32px;
          border-radius: 2px;
        }

        .rose-line {
          background: linear-gradient(90deg, #f43f5e 0%, rgba(244, 63, 94, 0) 100%);
          width: 250px;
        }

        /* Action Bar */
        .forum-action-bar {
          display: flex;
          gap: 16px;
          margin-bottom: 32px;
          align-items: center;
        }

        .search-box-wrap {
          flex: 1;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(244, 63, 94, 0.2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          padding: 0 16px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.01);
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        .search-box-wrap:focus-within {
          border-color: rgba(244, 63, 94, 0.6);
          box-shadow: 0 0 15px rgba(244, 63, 94, 0.15);
        }

        .search-icon {
          color: #f43f5e;
          margin-right: 12px;
          flex-shrink: 0;
        }

        .search-input {
          width: 100%;
          border: none;
          background: transparent;
          padding: 14px 0;
          color: #1a1a1a;
          font-size: 1rem;
          outline: none;
        }

        /* Categories */
        .forum-categories-wrap {
          margin-bottom: 40px;
          border-bottom: 1px solid rgba(244, 63, 94, 0.1);
          padding-bottom: 12px;
          overflow-x: auto;
        }

        .categories-list {
          display: flex;
          gap: 12px;
        }

        .category-tab {
          background: transparent;
          border: none;
          padding: 8px 18px;
          color: #6b7280;
          font-weight: 500;
          cursor: pointer;
          font-size: 0.95rem;
          border-radius: 8px;
          transition: all 0.2s;
          white-space: nowrap;
        }

        .category-tab:hover {
          color: #f43f5e;
          background: rgba(244, 63, 94, 0.05);
        }

        .category-tab.active {
          color: white;
          background: #f43f5e;
        }

        /* Catalog Grid */
        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 32px;
        }

        .resource-card {
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(244, 63, 94, 0.12);
          border-radius: 16px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.02);
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        .resource-card:hover {
          border-color: rgba(244, 63, 94, 0.35);
          box-shadow: 0 10px 30px rgba(244, 63, 94, 0.06);
        }

        .resource-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .resource-type-badge {
          font-size: 0.75rem;
          color: #be123c;
          background: rgba(244, 63, 94, 0.08);
          padding: 4px 10px;
          border-radius: 6px;
          font-weight: 600;
        }

        .resource-format-badge {
          font-size: 0.75rem;
          color: #6b7280;
        }

        .resource-card-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0 0 20px 0;
          line-height: 1.35;
          flex-grow: 1;
        }

        .resource-stats {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: #6b7280;
          margin-bottom: 24px;
        }

        .resource-stats svg {
          color: #f43f5e;
        }

        .resource-download-btn {
          font-family: inherit;
          width: 100%;
          border: 1px solid #f43f5e;
          background: transparent;
          color: #f43f5e;
          font-weight: 700;
          padding: 12px 0;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .resource-download-btn:hover {
          background: #f43f5e;
          color: white;
        }

        .resource-download-btn.downloading {
          background: rgba(244, 63, 94, 0.05);
          color: #f43f5e;
          border-color: rgba(244, 63, 94, 0.3);
          cursor: not-allowed;
        }

        .download-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(244, 63, 94, 0.25);
          border-top-color: #f43f5e;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .rose-border {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #f43f5e 0%, #be123c 100%);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s;
        }

        .resource-card:hover .rose-border {
          transform: scaleX(1);
        }

        .no-results {
          padding: 48px;
          text-align: center;
          color: #6b7280;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 12px;
          border: 1px dashed rgba(244, 63, 94, 0.2);
        }

        @media (max-width: 768px) {
          .community-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </>
  );
}
