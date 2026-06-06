"use client";

import { useEffect, useState } from 'react';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function CommunityForum() {
  const { tData } = useLanguage();
  const data = tData<any>('community_forum');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [showNewThreadModal, setShowNewThreadModal] = useState(false);
  const [newThreadTitle, setNewThreadTitle] = useState('');
  const [newThreadCategory, setNewThreadCategory] = useState('');
  const [threads, setThreads] = useState<any[]>([]);

  useEffect(() => {
    if (data && data.title) {
      document.title = `${data.title} | Dstellar`;
    }
    if (data && data.threads) {
      setThreads(data.threads);
    }
  }, [data]);

  if (!data) return null;

  const categories = data.categories || ["All"];
  
  const filteredThreads = threads.filter((t: any) => {
    const matchesSearch = t.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          t.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || activeCategory === categories[0] || t.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCreateThread = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newThreadTitle.trim()) return;

    const newThread = {
      title: newThreadTitle,
      category: newThreadCategory || categories[1] || 'General Tech',
      author: 'You (Anonymous)',
      replies: 0,
      views: 1,
      date: 'Just now'
    };

    setThreads([newThread, ...threads]);
    setNewThreadTitle('');
    setShowNewThreadModal(false);
  };

  return (
    <>
      <TopBar />

      <main className="community-page-container">
        {/* Ambient background orbs */}
        <div className="community-bg-glow">
          <div className="glow-orb orb-violet" />
          <div className="glow-orb orb-indigo" />
          <div className="grid-overlay" />
        </div>

        <div className="community-page-inner">
          {/* Header section */}
          <div className="community-header">
            <motion.div
              className="community-eyebrow"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="eyebrow-dot violet" />
              <span className="mono">{data.badge}</span>
            </motion.div>

            <motion.h1
              className="community-title violet-grad"
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
            <div className="community-glow-line violet-line" />
          </div>

          {/* Stats Section */}
          <div className="forum-stats-grid">
            {data.stats && data.stats.map((stat: any, idx: number) => (
              <motion.div
                key={idx}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
              >
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label mono">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Search and Action Bar */}
          <div className="forum-action-bar">
            <div className="search-box-wrap">
              <svg className="search-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                type="text"
                className="search-input"
                placeholder={data.search_placeholder || "Search discussions..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <button 
              className="cta-btn accent-violet"
              onClick={() => {
                setNewThreadCategory(categories[1] || 'General Tech');
                setShowNewThreadModal(true);
              }}
            >
              {data.cta}
            </button>
          </div>

          {/* Category Navigation */}
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

          {/* Discussion List */}
          <div className="forum-threads-section">
            <h2 className="section-heading mono">{data.threads_title}</h2>

            <div className="threads-list">
              <AnimatePresence mode="popLayout">
                {filteredThreads.map((thread: any, idx: number) => (
                  <motion.div
                    key={thread.title}
                    className="thread-row-card"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    whileHover={{ scale: 1.005, y: -2 }}
                  >
                    <div className="thread-content-left">
                      <span className="thread-category-badge mono">{thread.category}</span>
                      <h3 className="thread-title-text">{thread.title}</h3>
                      <div className="thread-meta-desc">
                        <span>By <strong className="thread-author">{thread.author}</strong></span>
                        <span className="meta-dot">•</span>
                        <span>{thread.date}</span>
                      </div>
                    </div>

                    <div className="thread-content-right">
                      <div className="thread-stat-item">
                        <span className="stat-num">{thread.replies}</span>
                        <span className="stat-text mono">replies</span>
                      </div>
                      <div className="thread-stat-item">
                        <span className="stat-num">{thread.views}</span>
                        <span className="stat-text mono">views</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {filteredThreads.length === 0 && (
                <div className="no-results">
                  <p>No discussions found matching your filter options.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Create Thread Modal */}
        <AnimatePresence>
          {showNewThreadModal && (
            <div className="modal-overlay" onClick={() => setShowNewThreadModal(false)}>
              <motion.div 
                className="modal-content-card"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
              >
                <div className="modal-header-section">
                  <h3>Start a New Discussion</h3>
                  <button className="close-modal-btn" onClick={() => setShowNewThreadModal(false)}>✕</button>
                </div>

                <form onSubmit={handleCreateThread} className="modal-form">
                  <div className="form-group">
                    <label className="mono">Topic / Title</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="What would you like to discuss?"
                      value={newThreadTitle}
                      onChange={(e) => setNewThreadTitle(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="mono">Category</label>
                    <select 
                      className="form-select"
                      value={newThreadCategory}
                      onChange={(e) => setNewThreadCategory(e.target.value)}
                    >
                      {categories.slice(1).map((cat: string) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div className="modal-actions">
                    <button type="button" className="btn-cancel" onClick={() => setShowNewThreadModal(false)}>Cancel</button>
                    <button type="submit" className="cta-btn accent-violet">Post Thread</button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>

      <Footer />

      <style jsx global>{`
        .community-page-container {
          background: linear-gradient(135deg, #ffffff 0%, #fcfbfe 50%, #f6f5fa 100%);
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

        .orb-violet {
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, #8b5cf6 0%, transparent 70%);
          opacity: 0.06;
          top: -200px;
          left: -150px;
        }

        .orb-indigo {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, #6366f1 0%, transparent 70%);
          opacity: 0.05;
          bottom: -100px;
          right: -100px;
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px);
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

        .eyebrow-dot.violet {
          background: #8b5cf6;
          box-shadow: 0 0 12px #8b5cf6;
          animation: dotPulseViolet 2s infinite;
        }

        @keyframes dotPulseViolet {
          0%, 100% { box-shadow: 0 0 8px #8b5cf6; }
          50% { box-shadow: 0 0 20px #8b5cf6, 0 0 40px rgba(139,92,246,0.45); }
        }

        .community-eyebrow .mono {
          color: #6d28d9;
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

        .violet-grad {
          background: linear-gradient(135deg, #1e1b4b 0%, #6d28d9 60%, #8b5cf6 100%);
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

        .violet-line {
          background: linear-gradient(90deg, #8b5cf6 0%, rgba(139, 92, 246, 0) 100%);
          width: 250px;
        }

        /* Stats Grid */
        .forum-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-bottom: 48px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(139, 92, 246, 0.15);
          backdrop-filter: blur(8px);
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
          text-align: center;
          transition: border-color 0.3s;
        }

        .stat-card:hover {
          border-color: rgba(139, 92, 246, 0.4);
        }

        .stat-value {
          font-size: 2.2rem;
          font-weight: 800;
          color: #6d28d9;
          margin-bottom: 4px;
        }

        .stat-label {
          color: #6b7280;
          font-size: 0.85rem;
          letter-spacing: 0.05em;
        }

        /* Action Bar */
        .forum-action-bar {
          display: flex;
          gap: 16px;
          margin-bottom: 32px;
          align-items: center;
          flex-wrap: wrap;
        }

        .search-box-wrap {
          flex: 1;
          min-width: 280px;
          position: relative;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          padding: 0 16px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.01);
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        .search-box-wrap:focus-within {
          border-color: rgba(139, 92, 246, 0.6);
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.15);
        }

        .search-icon {
          color: #8b5cf6;
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

        .search-input::placeholder {
          color: #9ca3af;
        }

        .cta-btn {
          font-family: inherit;
          font-weight: 600;
          padding: 14px 28px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 1rem;
        }

        .accent-violet {
          background: linear-gradient(135deg, #7c3aed 0%, #6366f1 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
        }

        .accent-violet:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(124, 58, 237, 0.45);
        }

        /* Categories */
        .forum-categories-wrap {
          margin-bottom: 40px;
          border-bottom: 1px solid rgba(139, 92, 246, 0.1);
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
          color: #8b5cf6;
          background: rgba(139, 92, 246, 0.05);
        }

        .category-tab.active {
          color: white;
          background: #8b5cf6;
        }

        /* Threads List */
        .forum-threads-section {
          margin-top: 16px;
        }

        .section-heading {
          font-size: 1.1rem;
          letter-spacing: 0.1em;
          color: #6d28d9;
          margin-bottom: 24px;
        }

        .threads-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .thread-row-card {
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(139, 92, 246, 0.12);
          border-radius: 14px;
          padding: 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.01);
          transition: border-color 0.3s, box-shadow 0.3s;
          cursor: pointer;
        }

        .thread-row-card:hover {
          border-color: rgba(139, 92, 246, 0.35);
          box-shadow: 0 4px 20px rgba(139, 92, 246, 0.08);
        }

        .thread-content-left {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }

        .thread-category-badge {
          align-self: flex-start;
          font-size: 0.75rem;
          color: #7c3aed;
          background: rgba(124, 58, 237, 0.08);
          padding: 3px 8px;
          border-radius: 6px;
          font-weight: 600;
          letter-spacing: 0.03em;
        }

        .thread-title-text {
          font-size: 1.2rem;
          font-weight: 700;
          margin: 0;
          line-height: 1.35;
          color: #1f2937;
          transition: color 0.2s;
        }

        .thread-row-card:hover .thread-title-text {
          color: #7c3aed;
        }

        .thread-meta-desc {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: #6b7280;
        }

        .thread-author {
          color: #4b5563;
        }

        .meta-dot {
          color: #d1d5db;
        }

        .thread-content-right {
          display: flex;
          gap: 24px;
          align-items: center;
          flex-shrink: 0;
        }

        .thread-stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 60px;
        }

        .stat-num {
          font-size: 1.25rem;
          font-weight: 700;
          color: #111827;
        }

        .stat-text {
          font-size: 0.75rem;
          color: #9ca3af;
          margin-top: 2px;
        }

        .no-results {
          padding: 48px;
          text-align: center;
          color: #6b7280;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 12px;
          border: 1px dashed rgba(139, 92, 246, 0.2);
        }

        /* Modal styling */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(4px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .modal-content-card {
          background: white;
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 20px;
          width: 100%;
          max-width: 540px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          padding: 32px;
          position: relative;
        }

        .modal-header-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .modal-header-section h3 {
          font-size: 1.4rem;
          font-weight: 800;
          color: #1e1b4b;
          margin: 0;
        }

        .close-modal-btn {
          background: transparent;
          border: none;
          font-size: 1.2rem;
          color: #9ca3af;
          cursor: pointer;
          transition: color 0.2s;
        }

        .close-modal-btn:hover {
          color: #111827;
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 0.8rem;
          color: #6d28d9;
          font-weight: 600;
        }

        .form-input, .form-select {
          font-family: inherit;
          padding: 12px 16px;
          border: 1px solid rgba(139, 92, 246, 0.25);
          border-radius: 10px;
          outline: none;
          font-size: 1rem;
          color: #1a1a1a;
          background: #fafafc;
          transition: border-color 0.2s;
        }

        .form-input:focus, .form-select:focus {
          border-color: #8b5cf6;
          background: white;
        }

        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 12px;
        }

        .btn-cancel {
          background: #f3f4f6;
          color: #4b5563;
          border: none;
          padding: 12px 24px;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }

        .btn-cancel:hover {
          background: #e5e7eb;
        }

        @media (max-width: 768px) {
          .community-title {
            font-size: 2.5rem;
          }
          .thread-row-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .thread-content-right {
            align-self: flex-end;
          }
        }
      `}</style>
    </>
  );
}
