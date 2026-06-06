"use client";

import { useEffect, useState } from 'react';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function FreeTraining() {
  const { tData } = useLanguage();
  const data = tData<any>('trainings_free');

  const [activeLectureIdx, setActiveLectureIdx] = useState<number | null>(null);

  useEffect(() => {
    if (data && data.title) {
      document.title = `${data.title} | Dstellar`;
    }
  }, [data]);

  if (!data) return null;

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

          {/* Videos Grid */}
          <div className="lectures-section">
            <div className="section-title-wrap">
              <h2 className="trainings-section-title">{data.videos_title || 'Video Lectures'}</h2>
            </div>

            <div className="lectures-grid">
              {data.videos && data.videos.map((vid: any, idx: number) => (
                <motion.div
                  key={idx}
                  className="lecture-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="lecture-thumbnail">
                    {/* Mock Play Button Overlay */}
                    <div className="play-button-overlay" onClick={() => setActiveLectureIdx(idx)}>
                      <svg viewBox="0 0 24 24" width="28" height="28" fill="#ffffff"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    </div>
                    <div className="lecture-duration-tag">{vid.duration}</div>
                  </div>

                  <div className="lecture-info">
                    <h3 className="lecture-title">{vid.title}</h3>
                    <div className="lecture-instructor-row">
                      <span className="lbl">Instructor:</span>
                      <span className="val">{vid.instructor}</span>
                    </div>
                  </div>

                  <button className="lecture-watch-btn" onClick={() => setActiveLectureIdx(idx)}>
                    {data.cta}
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  </button>

                  <div className="tier-line-decorator" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Interactive Mock Video Player Modal */}
          <AnimatePresence>
            {activeLectureIdx !== null && (
              <motion.div 
                className="video-modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveLectureIdx(null)}
              >
                <motion.div 
                  className="video-modal-card"
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button className="close-modal-btn" onClick={() => setActiveLectureIdx(null)}>✕</button>
                  
                  <div className="modal-player-screen">
                    <div className="screen-content">
                      <svg className="playback-spinner" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#6366f1" strokeWidth="3"><circle cx="12" cy="12" r="10"/></svg>
                      <h4>Streaming Lecture...</h4>
                      <p>Connecting to Dstellar Learning CDN</p>
                    </div>
                  </div>

                  <div className="modal-lecture-details">
                    <h3>{data.videos[activeLectureIdx].title}</h3>
                    <span className="instructor">Instructor: {data.videos[activeLectureIdx].instructor}</span>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
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

          /* Sections General */
          .section-title-wrap {
            margin-bottom: 24px;
            border-bottom: 1px solid rgba(99, 102, 241, 0.08);
            padding-bottom: 12px;
          }

          .trainings-section-title {
            font-size: 1.6rem;
            font-weight: 700;
            color: #0f172a;
            margin: 0;
          }

          /* Lectures Grid */
          .lectures-section {
            margin-bottom: 56px;
          }

          .lectures-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 28px;
          }

          .lecture-card {
            background: #ffffff;
            border: 1px solid rgba(99, 102, 241, 0.1);
            border-radius: 16px;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
            transition: all 0.3s ease;
          }

          .lecture-card:hover {
            border-color: rgba(99, 102, 241, 0.35);
            transform: translateY(-5px);
          }

          .lecture-thumbnail {
            height: 180px;
            background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .play-button-overlay {
            width: 58px;
            height: 58px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(8px);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s ease;
            border: 1px solid rgba(255, 255, 255, 0.3);
          }

          .play-button-overlay:hover {
            transform: scale(1.1);
            background: rgba(255, 255, 255, 0.25);
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
          }

          .play-button-overlay svg {
            margin-left: 4px;
          }

          .lecture-duration-tag {
            position: absolute;
            bottom: 12px;
            right: 12px;
            background: rgba(15, 23, 42, 0.85);
            color: #ffffff;
            font-size: 0.75rem;
            font-weight: 600;
            padding: 4px 8px;
            border-radius: 4px;
          }

          .lecture-info {
            padding: 24px 24px 12px 24px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            flex-grow: 1;
          }

          .lecture-title {
            font-size: 1.15rem;
            font-weight: 700;
            color: #0f172a;
            margin: 0;
            line-height: 1.35;
          }

          .lecture-instructor-row {
            display: flex;
            gap: 8px;
            font-size: 0.85rem;
            align-items: center;
          }

          .lecture-instructor-row .lbl {
            color: #64748b;
          }

          .lecture-instructor-row .val {
            font-weight: 600;
            color: #334155;
          }

          .lecture-watch-btn {
            background: #f5f3ff;
            color: #4f46e5;
            border: none;
            border-top: 1px solid rgba(0, 0, 0, 0.05);
            padding: 14px;
            font-size: 0.88rem;
            font-weight: 700;
            font-family: inherit;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            transition: all 0.2s ease;
            width: 100%;
          }

          .lecture-card:hover .lecture-watch-btn {
            background: #6366f1;
            color: #ffffff;
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
          }

          .tier-line-decorator {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: #6366f1;
          }

          /* Video Modal */
          .video-modal-backdrop {
            position: fixed;
            inset: 0;
            background: rgba(15, 23, 42, 0.75);
            backdrop-filter: blur(8px);
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
          }

          .video-modal-card {
            background: #ffffff;
            border-radius: 20px;
            width: 100%;
            max-width: 800px;
            overflow: hidden;
            position: relative;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
          }

          .close-modal-btn {
            position: absolute;
            top: 16px;
            right: 16px;
            background: rgba(15, 23, 42, 0.5);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: #ffffff;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10;
            transition: all 0.2s ease;
          }

          .close-modal-btn:hover {
            background: rgba(15, 23, 42, 0.8);
            transform: scale(1.05);
          }

          .modal-player-screen {
            height: 400px;
            background: #000000;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }

          .screen-content {
            text-align: center;
            color: #ffffff;
          }

          .playback-spinner {
            animation: spin 1s linear infinite;
            margin: 0 auto 16px auto;
          }

          @keyframes spin {
            to { transform: rotate(360deg); }
          }

          .screen-content h4 {
            font-size: 1.25rem;
            margin: 0 0 8px 0;
          }

          .screen-content p {
            color: #64748b;
            margin: 0;
            font-size: 0.9rem;
          }

          .modal-lecture-details {
            padding: 28px;
            border-top: 1px solid rgba(0, 0, 0, 0.05);
          }

          .modal-lecture-details h3 {
            font-size: 1.4rem;
            font-weight: 700;
            color: #0f172a;
            margin: 0 0 8px 0;
          }

          .modal-lecture-details .instructor {
            font-size: 0.9rem;
            color: #64748b;
            font-weight: 600;
          }

          @media (max-width: 768px) {
            .lectures-grid {
              grid-template-columns: 1fr;
            }
            .modal-player-screen {
              height: 250px;
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
