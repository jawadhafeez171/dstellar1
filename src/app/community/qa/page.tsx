"use client";

import { useEffect, useState } from 'react';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function QAPortal() {
  const { tData } = useLanguage();
  const data = tData<any>('community_qa');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('Recent');
  const [showAskModal, setShowAskModal] = useState(false);
  const [newQuestionTitle, setNewQuestionTitle] = useState('');
  const [newQuestionTags, setNewQuestionTags] = useState('');
  const [questions, setQuestions] = useState<any[]>([]);

  useEffect(() => {
    if (data && data.title) {
      document.title = `${data.title} | Dstellar`;
    }
    if (data && data.questions) {
      setQuestions(data.questions);
    }
  }, [data]);

  if (!data) return null;

  const filterTabs = data.filter_tabs || ["Recent", "Most Upvoted", "Unanswered"];

  // Sort and filter logic
  const handleVote = (idx: number) => {
    const updated = [...questions];
    updated[idx] = { ...updated[idx], votes: updated[idx].votes + 1 };
    setQuestions(updated);
  };

  const filteredQuestions = questions
    .filter((q: any) => {
      const matchesSearch = q.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            q.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const tabName = activeTab.toLowerCase();
      if (tabName.includes('unanswered') || tabName.includes('sin responder') || tabName.includes('等待回答') || tabName.includes('unbeantwortet') || tabName.includes('sans réponse') || tabName.includes('未回答')) {
        return matchesSearch && q.answers === 0;
      }
      return matchesSearch;
    })
    .sort((a: any, b: any) => {
      const tabName = activeTab.toLowerCase();
      if (tabName.includes('upvoted') || tabName.includes('votadas') || tabName.includes('最多赞同') || tabName.includes('beliebteste') || tabName.includes('plus votées') || tabName.includes('高評価')) {
        return b.votes - a.votes;
      }
      // default recent
      return 0; // retain initial order
    });

  const handleAskQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestionTitle.trim()) return;

    const tagsArray = newQuestionTags
      .split(',')
      .map(t => t.trim().toLowerCase())
      .filter(t => t.length > 0);

    const newQ = {
      title: newQuestionTitle,
      votes: 0,
      answers: 0,
      tags: tagsArray.length > 0 ? tagsArray : ["general"],
      resolved: false
    };

    setQuestions([newQ, ...questions]);
    setNewQuestionTitle('');
    setNewQuestionTags('');
    setShowAskModal(false);
  };

  return (
    <>
      <TopBar />

      <main className="community-page-container">
        {/* Glow Effects */}
        <div className="community-bg-glow">
          <div className="glow-orb orb-emerald" />
          <div className="glow-orb orb-teal" />
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
              <span className="eyebrow-dot emerald" />
              <span className="mono">{data.badge}</span>
            </motion.div>

            <motion.h1
              className="community-title emerald-grad"
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
            <div className="community-glow-line emerald-line" />
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
                placeholder={data.search_placeholder || "Ask a question..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <button 
              className="cta-btn accent-emerald"
              onClick={() => setShowAskModal(true)}
            >
              {data.cta}
            </button>
          </div>

          {/* Tabs */}
          <div className="forum-categories-wrap">
            <div className="categories-list">
              {filterTabs.map((tab: string) => (
                <button
                  key={tab}
                  className={`category-tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Questions Stack */}
          <div className="questions-stack">
            <AnimatePresence mode="popLayout">
              {filteredQuestions.map((q: any, idx: number) => {
                const originalIndex = questions.findIndex(item => item.title === q.title);
                return (
                  <motion.div
                    key={q.title}
                    className="question-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    whileHover={{ scale: 1.005 }}
                  >
                    {/* Vote Sidebar */}
                    <div className="vote-sidebar">
                      <button 
                        className="upvote-btn" 
                        onClick={() => handleVote(originalIndex)}
                        aria-label="Upvote question"
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="18 15 12 9 6 15"/>
                        </svg>
                      </button>
                      <span className="votes-count">{q.votes}</span>
                    </div>

                    {/* Question Content */}
                    <div className="question-content-main">
                      <div className="question-header-row">
                        {q.resolved && (
                          <span className="resolved-badge mono">
                            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                            RESOLVED
                          </span>
                        )}
                      </div>

                      <h3 className="question-card-title">{q.title}</h3>

                      <div className="question-footer-row">
                        <div className="tags-list">
                          {q.tags.map((tag: string) => (
                            <span key={tag} className="tag-badge mono">#{tag}</span>
                          ))}
                        </div>

                        <div className="answers-count-badge mono">
                          <strong>{q.answers}</strong> answers
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {filteredQuestions.length === 0 && (
              <div className="no-results">
                <p>No questions found. Be the first to ask!</p>
              </div>
            )}
          </div>
        </div>

        {/* Ask Question Modal */}
        <AnimatePresence>
          {showAskModal && (
            <div className="modal-overlay" onClick={() => setShowAskModal(false)}>
              <motion.div 
                className="modal-content-card"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
              >
                <div className="modal-header-section">
                  <h3>Ask a Technical Question</h3>
                  <button className="close-modal-btn" onClick={() => setShowAskModal(false)}>✕</button>
                </div>

                <form onSubmit={handleAskQuestion} className="modal-form">
                  <div className="form-group">
                    <label className="mono">Question Title</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="Be specific. What configuration are you stuck on?"
                      value={newQuestionTitle}
                      onChange={(e) => setNewQuestionTitle(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="mono">Tags (comma separated)</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. nextjs, ssr, sap"
                      value={newQuestionTags}
                      onChange={(e) => setNewQuestionTags(e.target.value)}
                    />
                  </div>

                  <div className="modal-actions">
                    <button type="button" className="btn-cancel" onClick={() => setShowAskModal(false)}>Cancel</button>
                    <button type="submit" className="cta-btn accent-emerald">Submit Question</button>
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
          background: linear-gradient(135deg, #ffffff 0%, #f7faf8 50%, #f0f5f2 100%);
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

        .orb-emerald {
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, #10b981 0%, transparent 70%);
          opacity: 0.05;
          top: -200px;
          left: -150px;
        }

        .orb-teal {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, #14b8a6 0%, transparent 70%);
          opacity: 0.05;
          bottom: -100px;
          right: -100px;
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(16, 185, 129, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.03) 1px, transparent 1px);
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

        .eyebrow-dot.emerald {
          background: #10b981;
          box-shadow: 0 0 12px #10b981;
          animation: dotPulseEmerald 2s infinite;
        }

        @keyframes dotPulseEmerald {
          0%, 100% { box-shadow: 0 0 8px #10b981; }
          50% { box-shadow: 0 0 20px #10b981, 0 0 40px rgba(16,185,129,0.45); }
        }

        .community-eyebrow .mono {
          color: #047857;
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

        .emerald-grad {
          background: linear-gradient(135deg, #064e3b 0%, #047857 60%, #10b981 100%);
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

        .emerald-line {
          background: linear-gradient(90deg, #10b981 0%, rgba(16, 185, 129, 0) 100%);
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
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          padding: 0 16px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.01);
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        .search-box-wrap:focus-within {
          border-color: rgba(16, 185, 129, 0.6);
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.15);
        }

        .search-icon {
          color: #10b981;
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

        .accent-emerald {
          background: linear-gradient(135deg, #059669 0%, #14b8a6 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(5, 150, 105, 0.3);
        }

        .accent-emerald:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(5, 150, 105, 0.45);
        }

        /* Categories / Tabs */
        .forum-categories-wrap {
          margin-bottom: 40px;
          border-bottom: 1px solid rgba(16, 185, 129, 0.1);
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
          color: #10b981;
          background: rgba(16, 185, 129, 0.05);
        }

        .category-tab.active {
          color: white;
          background: #10b981;
        }

        /* Questions stack */
        .questions-stack {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .question-card {
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(16, 185, 129, 0.12);
          border-radius: 16px;
          padding: 24px;
          display: flex;
          gap: 24px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.01);
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        .question-card:hover {
          border-color: rgba(16, 185, 129, 0.35);
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.06);
        }

        .vote-sidebar {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(16, 185, 129, 0.05);
          border: 1px solid rgba(16, 185, 129, 0.1);
          border-radius: 12px;
          width: 54px;
          height: 72px;
          flex-shrink: 0;
        }

        .upvote-btn {
          background: transparent;
          border: none;
          color: #10b981;
          cursor: pointer;
          padding: 4px;
          transition: transform 0.2s;
        }

        .upvote-btn:hover {
          transform: translateY(-2px);
          color: #059669;
        }

        .votes-count {
          font-weight: 700;
          font-size: 1.1rem;
          color: #1f2937;
        }

        .question-content-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 12px;
        }

        .question-header-row {
          display: flex;
          justify-content: flex-end;
        }

        .resolved-badge {
          font-size: 0.7rem;
          font-weight: 700;
          color: #059669;
          background: rgba(16, 185, 129, 0.1);
          padding: 3px 8px;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          letter-spacing: 0.05em;
        }

        .question-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0;
          line-height: 1.4;
        }

        .question-footer-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        .tags-list {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .tag-badge {
          font-size: 0.75rem;
          color: #0d9488;
          background: rgba(20, 184, 166, 0.06);
          border: 1px solid rgba(20, 184, 166, 0.15);
          padding: 2px 8px;
          border-radius: 6px;
          font-weight: 600;
        }

        .answers-count-badge {
          font-size: 0.85rem;
          color: #6b7280;
        }

        .answers-count-badge strong {
          color: #111827;
        }

        .no-results {
          padding: 48px;
          text-align: center;
          color: #6b7280;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 12px;
          border: 1px dashed rgba(16, 185, 129, 0.2);
        }

        /* Modal overlay */
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
          border: 1px solid rgba(16, 185, 129, 0.2);
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
          color: #064e3b;
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
          color: #047857;
          font-weight: 600;
        }

        .form-input {
          font-family: inherit;
          padding: 12px 16px;
          border: 1px solid rgba(16, 185, 129, 0.25);
          border-radius: 10px;
          outline: none;
          font-size: 1rem;
          color: #1a1a1a;
          background: #fbfdfc;
          transition: border-color 0.2s;
        }

        .form-input:focus {
          border-color: #10b981;
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
          .question-card {
            gap: 16px;
            padding: 16px;
          }
        }
      `}</style>
    </>
  );
}
