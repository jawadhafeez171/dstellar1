"use client";

import { useEffect, useState } from 'react';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function EventsMeetups() {
  const { tData } = useLanguage();
  const data = tData<any>('community_events');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [registeredEvents, setRegisteredEvents] = useState<Record<string, boolean>>({});
  const [showSuccessToast, setShowSuccessToast] = useState<string | null>(null);

  useEffect(() => {
    if (data && data.title) {
      document.title = `${data.title} | Dstellar`;
    }
  }, [data]);

  if (!data) return null;

  const categories = ["All", "Webinar", "Hackathon", "Meetup"];
  const events = data.events || [];

  const handleRegister = (title: string) => {
    setRegisteredEvents(prev => ({ ...prev, [title]: true }));
    setShowSuccessToast(title);
    setTimeout(() => {
      setShowSuccessToast(null);
    }, 4000);
  };

  const filteredEvents = events.filter((e: any) => {
    const matchesSearch = e.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          e.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || e.type === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <TopBar />

      <main className="community-page-container">
        {/* Glow Effects */}
        <div className="community-bg-glow">
          <div className="glow-orb orb-amber-light" />
          <div className="glow-orb orb-orange" />
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
              <span className="eyebrow-dot orange" />
              <span className="mono">{data.badge}</span>
            </motion.div>

            <motion.h1
              className="community-title orange-grad"
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
            <div className="community-glow-line orange-line" />
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
                placeholder="Search events or locations..."
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
                  {cat === 'All' ? (data.filter_all || 'All Formats') : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="events-grid">
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((event: any, idx: number) => {
                const isRegistered = registeredEvents[event.title];
                return (
                  <motion.div
                    key={event.title}
                    className="event-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    whileHover={{ y: -6 }}
                  >
                    <div className="event-card-header">
                      <span className={`event-type-badge ${event.type.toLowerCase()} mono`}>{event.type}</span>
                      <span className="event-spots-badge mono">{event.spots}</span>
                    </div>

                    <h3 className="event-card-title">{event.title}</h3>

                    <div className="event-details-list">
                      <div className="event-detail-item">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        <span>{event.date}</span>
                      </div>

                      <div className="event-detail-item">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                        </svg>
                        <span>{event.time}</span>
                      </div>

                      <div className="event-detail-item">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                        </svg>
                        <span className="event-loc">{event.location}</span>
                      </div>
                    </div>

                    <button 
                      className={`event-register-btn mono ${isRegistered ? 'registered' : ''}`}
                      disabled={isRegistered}
                      onClick={() => handleRegister(event.title)}
                    >
                      {isRegistered ? '✓ Registered' : data.cta}
                    </button>
                    <div className="card-hover-border orange-border" />
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {filteredEvents.length === 0 && (
              <div className="no-results" style={{ gridColumn: '1 / -1' }}>
                <p>No events found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>

        {/* Success Toast */}
        <AnimatePresence>
          {showSuccessToast && (
            <motion.div 
              className="toast-container"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <div className="toast-card">
                <div className="toast-icon">✓</div>
                <div>
                  <h4 className="mono">Registration Confirmed</h4>
                  <p>You have registered for: <strong>{showSuccessToast}</strong></p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />

      <style jsx global>{`
        .community-page-container {
          background: linear-gradient(135deg, #ffffff 0%, #fffcf8 50%, #fff9f0 100%);
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

        .orb-amber-light {
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, #f59e0b 0%, transparent 70%);
          opacity: 0.05;
          top: -200px;
          left: -150px;
        }

        .orb-orange {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, #ea580c 0%, transparent 70%);
          opacity: 0.05;
          bottom: -100px;
          right: -100px;
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(245, 158, 11, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 158, 11, 0.03) 1px, transparent 1px);
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

        .eyebrow-dot.orange {
          background: #f59e0b;
          box-shadow: 0 0 12px #f59e0b;
          animation: dotPulseOrange 2s infinite;
        }

        @keyframes dotPulseOrange {
          0%, 100% { box-shadow: 0 0 8px #f59e0b; }
          50% { box-shadow: 0 0 20px #f59e0b, 0 0 40px rgba(245,158,11,0.45); }
        }

        .community-eyebrow .mono {
          color: #d97706;
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

        .orange-grad {
          background: linear-gradient(135deg, #451a03 0%, #b45309 60%, #f59e0b 100%);
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

        .orange-line {
          background: linear-gradient(90deg, #f59e0b 0%, rgba(245, 158, 11, 0) 100%);
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
          border: 1px solid rgba(245, 158, 11, 0.2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          padding: 0 16px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.01);
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        .search-box-wrap:focus-within {
          border-color: rgba(245, 158, 11, 0.6);
          box-shadow: 0 0 15px rgba(245, 158, 11, 0.15);
        }

        .search-icon {
          color: #f59e0b;
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
          border-bottom: 1px solid rgba(245, 158, 11, 0.1);
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
          color: #f59e0b;
          background: rgba(245, 158, 11, 0.05);
        }

        .category-tab.active {
          color: white;
          background: #f59e0b;
        }

        /* Events Grid */
        .events-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 32px;
        }

        .event-card {
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(245, 158, 11, 0.12);
          border-radius: 16px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.02);
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        .event-card:hover {
          border-color: rgba(245, 158, 11, 0.35);
          box-shadow: 0 10px 30px rgba(245, 158, 11, 0.06);
        }

        .event-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .event-type-badge {
          font-size: 0.75rem;
          padding: 4px 10px;
          border-radius: 6px;
          font-weight: 600;
        }

        .event-type-badge.webinar {
          color: #d97706;
          background: rgba(245, 158, 11, 0.08);
        }

        .event-type-badge.hackathon {
          color: #3b82f6;
          background: rgba(59, 130, 246, 0.08);
        }

        .event-type-badge.meetup {
          color: #10b981;
          background: rgba(16, 185, 129, 0.08);
        }

        .event-spots-badge {
          font-size: 0.75rem;
          color: #dc2626;
          background: rgba(220, 38, 38, 0.05);
          border: 1px solid rgba(220, 38, 38, 0.15);
          padding: 2px 8px;
          border-radius: 6px;
        }

        .event-card-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0 0 20px 0;
          line-height: 1.35;
        }

        .event-details-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 28px;
        }

        .event-detail-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: #4b5563;
        }

        .event-detail-item svg {
          color: #f59e0b;
          flex-shrink: 0;
        }

        .event-loc {
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }

        .event-register-btn {
          font-family: inherit;
          width: 100%;
          border: 1px solid #f59e0b;
          background: transparent;
          color: #f59e0b;
          font-weight: 700;
          padding: 12px 0;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .event-register-btn:hover {
          background: #f59e0b;
          color: white;
        }

        .event-register-btn.registered {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          border-color: #10b981;
          cursor: not-allowed;
        }

        .orange-border {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #f59e0b 0%, #ea580c 100%);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s;
        }

        .event-card:hover .orange-border {
          transform: scaleX(1);
        }

        /* Success Toast */
        .toast-container {
          position: fixed;
          bottom: 40px;
          right: 40px;
          z-index: 1000;
        }

        .toast-card {
          background: white;
          border: 1px solid rgba(16, 185, 129, 0.2);
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          border-radius: 14px;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          max-width: 380px;
        }

        .toast-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #d1fae5;
          color: #059669;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          flex-shrink: 0;
        }

        .toast-card h4 {
          margin: 0 0 2px 0;
          color: #064e3b;
          font-size: 0.9rem;
        }

        .toast-card p {
          margin: 0;
          font-size: 0.85rem;
          color: #4b5563;
        }

        .no-results {
          padding: 48px;
          text-align: center;
          color: #6b7280;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 12px;
          border: 1px dashed rgba(245, 158, 11, 0.2);
        }

        @media (max-width: 768px) {
          .community-title {
            font-size: 2.5rem;
          }
          .toast-container {
            right: 20px;
            left: 20px;
            bottom: 20px;
          }
        }
      `}</style>
    </>
  );
}
