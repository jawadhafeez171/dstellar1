"use client";

import { useEffect, useState } from 'react';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function ExpertBlogs() {
  const { tData } = useLanguage();
  const data = tData<any>('community_blogs');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedBlog, setSelectedBlog] = useState<any | null>(null);

  useEffect(() => {
    if (data && data.title) {
      document.title = `${data.title} | Dstellar`;
    }
  }, [data]);

  if (!data) return null;

  const categories = data.categories || ["All"];
  const blogs = data.blogs || [];

  const filteredBlogs = blogs.filter((b: any) => {
    const matchesSearch = b.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          b.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          b.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || activeCategory === categories[0] || b.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <TopBar />

      <main className="community-page-container">
        {/* Glow Effects */}
        <div className="community-bg-glow">
          <div className="glow-orb orb-indigo-light" />
          <div className="glow-orb orb-sky" />
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
              <span className="eyebrow-dot sky" />
              <span className="mono">{data.badge}</span>
            </motion.div>

            <motion.h1
              className="community-title sky-grad"
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
            <div className="community-glow-line sky-line" />
          </div>

          {/* Search and Filters */}
          <div className="forum-action-bar">
            <div className="search-box-wrap">
              <svg className="search-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                type="text"
                className="search-input"
                placeholder={data.search_placeholder || "Search articles..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Categories */}
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

          {/* Blogs Grid */}
          <div className="blogs-grid-container">
            <AnimatePresence mode="popLayout">
              {filteredBlogs.map((blog: any, idx: number) => (
                <motion.div
                  key={blog.title}
                  className="blog-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedBlog(blog)}
                >
                  <div className="blog-card-header">
                    <span className="blog-cat-badge mono">{blog.category}</span>
                    <span className="blog-read-time mono">{blog.readTime}</span>
                  </div>

                  <h3 className="blog-card-title">{blog.title}</h3>
                  <p className="blog-card-excerpt">{blog.excerpt}</p>

                  <div className="blog-card-footer">
                    <div className="blog-author-wrap">
                      <div className="author-avatar-stub">
                        {blog.author.charAt(0)}
                      </div>
                      <div className="author-meta">
                        <span className="author-name">{blog.author}</span>
                        <span className="blog-date">{blog.date}</span>
                      </div>
                    </div>

                    <button className="read-more-btn mono">
                      {data.cta}
                    </button>
                  </div>
                  <div className="card-hover-border" />
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredBlogs.length === 0 && (
              <div className="no-results" style={{ gridColumn: '1 / -1' }}>
                <p>No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>

        {/* Article Reading View Slide-out */}
        <AnimatePresence>
          {selectedBlog && (
            <div className="modal-overlay" onClick={() => setSelectedBlog(null)}>
              <motion.div 
                className="article-reader-container"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ type: "spring", damping: 25, stiffness: 150 }}
              >
                <button className="close-reader-btn" onClick={() => setSelectedBlog(null)}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>

                <div className="reader-scroll-area">
                  <div className="reader-header">
                    <span className="blog-cat-badge mono">{selectedBlog.category}</span>
                    <h2 className="reader-title">{selectedBlog.title}</h2>
                    
                    <div className="reader-author-row">
                      <div className="author-avatar-stub large">
                        {selectedBlog.author.charAt(0)}
                      </div>
                      <div className="reader-author-info">
                        <div className="reader-author-name">{selectedBlog.author}</div>
                        <div className="reader-meta-row mono">
                          <span>{selectedBlog.date}</span>
                          <span>•</span>
                          <span>{selectedBlog.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="reader-content-body">
                    <p className="lead-text">{selectedBlog.excerpt}</p>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    
                    <h3>Key Takeaways</h3>
                    <ul>
                      <li>Understanding modern frontend design constraints when communicating with SAP NetWeaver.</li>
                      <li>Ensuring secure authorization protocols with single-sign-on (SSO) interfaces.</li>
                      <li>Structuring clean, cacheable components that avoid hydration mismatches.</li>
                    </ul>

                    <p>Proactively automating systems via AI-driven Joule copilot engines is the future of business applications. Dstellar Software Solutions is committed to paving the way with state-of-the-art architectures, transparent development schedules, and functional SAP implementations worldwide.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>

      <Footer />

      <style jsx global>{`
        .community-page-container {
          background: linear-gradient(135deg, #ffffff 0%, #f7f9fc 50%, #eff3f8 100%);
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

        .orb-indigo-light {
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, #6366f1 0%, transparent 70%);
          opacity: 0.05;
          top: -200px;
          left: -150px;
        }

        .orb-sky {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, #0ea5e9 0%, transparent 70%);
          opacity: 0.06;
          bottom: -100px;
          right: -100px;
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(14, 165, 233, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.03) 1px, transparent 1px);
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

        .eyebrow-dot.sky {
          background: #0ea5e9;
          box-shadow: 0 0 12px #0ea5e9;
          animation: dotPulseSky 2s infinite;
        }

        @keyframes dotPulseSky {
          0%, 100% { box-shadow: 0 0 8px #0ea5e9; }
          50% { box-shadow: 0 0 20px #0ea5e9, 0 0 40px rgba(14,165,233,0.45); }
        }

        .community-eyebrow .mono {
          color: #0369a1;
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

        .sky-grad {
          background: linear-gradient(135deg, #0f172a 0%, #0369a1 60%, #0ea5e9 100%);
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

        .sky-line {
          background: linear-gradient(90deg, #0ea5e9 0%, rgba(14, 165, 233, 0) 100%);
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
          border: 1px solid rgba(14, 165, 233, 0.2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          padding: 0 16px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.01);
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        .search-box-wrap:focus-within {
          border-color: rgba(14, 165, 233, 0.6);
          box-shadow: 0 0 15px rgba(14, 165, 233, 0.15);
        }

        .search-icon {
          color: #0ea5e9;
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
          border-bottom: 1px solid rgba(14, 165, 233, 0.1);
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
          color: #0ea5e9;
          background: rgba(14, 165, 233, 0.05);
        }

        .category-tab.active {
          color: white;
          background: #0ea5e9;
        }

        /* Blogs Grid */
        .blogs-grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 32px;
        }

        .blog-card {
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(14, 165, 233, 0.12);
          border-radius: 16px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.02);
          cursor: pointer;
          position: relative;
          transition: border-color 0.3s, box-shadow 0.3s;
          overflow: hidden;
        }

        .blog-card:hover {
          border-color: rgba(14, 165, 233, 0.35);
          box-shadow: 0 10px 30px rgba(14, 165, 233, 0.06);
        }

        .blog-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .blog-cat-badge {
          font-size: 0.75rem;
          color: #0284c7;
          background: rgba(14, 165, 233, 0.08);
          padding: 4px 10px;
          border-radius: 6px;
          font-weight: 600;
        }

        .blog-read-time {
          font-size: 0.75rem;
          color: #6b7280;
        }

        .blog-card-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0 0 12px 0;
          line-height: 1.35;
          transition: color 0.2s;
        }

        .blog-card:hover .blog-card-title {
          color: #0ea5e9;
        }

        .blog-card-excerpt {
          font-size: 0.95rem;
          color: #4b5563;
          line-height: 1.55;
          margin: 0 0 24px 0;
          flex-grow: 1;
        }

        .blog-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(14, 165, 233, 0.08);
          padding-top: 20px;
          margin-top: auto;
        }

        .blog-author-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .author-avatar-stub {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 0.9rem;
        }

        .author-avatar-stub.large {
          width: 48px;
          height: 48px;
          font-size: 1.2rem;
        }

        .author-meta {
          display: flex;
          flex-direction: column;
        }

        .author-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: #374151;
        }

        .blog-date {
          font-size: 0.75rem;
          color: #9ca3af;
        }

        .read-more-btn {
          background: transparent;
          border: none;
          color: #0ea5e9;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: color 0.2s;
        }

        .blog-card:hover .read-more-btn {
          color: #0284c7;
        }

        .card-hover-border {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #0ea5e9 0%, #6366f1 100%);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s;
        }

        .blog-card:hover .card-hover-border {
          transform: scaleX(1);
        }

        /* Slide-out Panel Overlay */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.3);
          backdrop-filter: blur(4px);
          z-index: 1000;
          display: flex;
          justify-content: flex-end;
        }

        .article-reader-container {
          background: white;
          width: 100%;
          max-width: 720px;
          height: 100%;
          box-shadow: -10px 0 40px rgba(15, 23, 42, 0.15);
          position: relative;
          display: flex;
          flex-direction: column;
          border-left: 1px solid rgba(14, 165, 233, 0.15);
        }

        .close-reader-btn {
          position: absolute;
          top: 24px;
          right: 24px;
          background: rgba(15, 23, 42, 0.05);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #64748b;
          transition: all 0.2s;
          z-index: 10;
        }

        .close-reader-btn:hover {
          background: rgba(15, 23, 42, 0.1);
          color: #0f172a;
          transform: rotate(90deg);
        }

        .reader-scroll-area {
          overflow-y: auto;
          flex: 1;
          padding: 80px 48px;
        }

        .reader-header {
          margin-bottom: 40px;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          padding-bottom: 32px;
        }

        .reader-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.25;
          margin: 16px 0 24px 0;
        }

        .reader-author-row {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .reader-author-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .reader-author-name {
          font-weight: 700;
          color: #0f172a;
          font-size: 1.05rem;
        }

        .reader-meta-row {
          font-size: 0.8rem;
          color: #64748b;
          display: flex;
          gap: 8px;
        }

        .reader-content-body {
          font-size: 1.1rem;
          line-height: 1.75;
          color: #334155;
        }

        .reader-content-body h3 {
          font-size: 1.4rem;
          font-weight: 800;
          color: #0f172a;
          margin: 32px 0 16px 0;
        }

        .reader-content-body ul {
          margin-bottom: 24px;
          padding-left: 20px;
        }

        .reader-content-body li {
          margin-bottom: 8px;
        }

        .lead-text {
          font-size: 1.25rem;
          font-weight: 500;
          color: #0f172a;
          line-height: 1.6;
          margin-bottom: 28px;
        }

        .no-results {
          padding: 48px;
          text-align: center;
          color: #6b7280;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 12px;
          border: 1px dashed rgba(14, 165, 233, 0.2);
        }

        @media (max-width: 768px) {
          .community-title {
            font-size: 2.5rem;
          }
          .reader-scroll-area {
            padding: 60px 24px;
          }
          .reader-title {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </>
  );
}
