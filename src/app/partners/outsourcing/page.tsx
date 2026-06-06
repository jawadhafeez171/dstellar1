"use client";

import { useEffect } from 'react';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function OutsourcingPartners() {
  const { tData } = useLanguage();
  const data = tData<any>('partners_outsourcing');

  useEffect(() => {
    if (data && data.title) {
      document.title = `${data.title} | Dstellar`;
    }
  }, [data]);

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
          {/* Header */}
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

          {/* Global Delivery Centers */}
          <div className="delivery-centers-section">
            <div className="section-title-wrap">
              <h2 className="partners-section-title">{data.locations_title}</h2>
            </div>
            
            <div className="locations-grid">
              {data.locations && data.locations.map((loc: any, idx: number) => (
                <motion.div
                  key={idx}
                  className="location-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="location-card-header">
                    <h3 className="location-city">{loc.city}</h3>
                    <span className="location-zone-badge">{loc.zone}</span>
                  </div>

                  <div className="location-stats">
                    <div className="loc-stat-row">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                      <span>{loc.staff}</span>
                    </div>
                    <div className="loc-stat-row">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      <span>{loc.activeContracts} Active Accounts</span>
                    </div>
                  </div>

                  <div className="tier-line-decorator" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits / Augmentation Details */}
          <div className="augmentation-details-section">
            <div className="details-grid">
              {/* Left Column: List of Benefits */}
              <motion.div 
                className="benefits-checklist-card"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="checklist-heading">Why Outsource with Dstellar?</h3>
                <div className="checklist-items">
                  {data.benefits_outsourcing && data.benefits_outsourcing.map((benefit: string, idx: number) => (
                    <div key={idx} className="checklist-item">
                      <div className="check-icon-wrap">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#10b981" strokeWidth="3.5"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <span className="checklist-text">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right Column: CTA Panel */}
              <motion.div 
                className="inquiry-cta-card"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="cta-icon-badge">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#ffffff" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </div>
                <h3>Augmentation Inquiry</h3>
                <p>Need dedicated SAP architects, functional consultants, or ABAP developers to scale your local project capacity?</p>
                <button className="inquiry-submit-btn">
                  {data.cta}
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </motion.div>
            </div>
          </div>
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

          /* Sections General */
          .section-title-wrap {
            margin-bottom: 24px;
            border-bottom: 1px solid rgba(16, 185, 129, 0.08);
            padding-bottom: 12px;
          }

          .partners-section-title {
            font-size: 1.6rem;
            font-weight: 700;
            color: #0f172a;
            margin: 0;
          }

          .delivery-centers-section, .augmentation-details-section {
            margin-bottom: 56px;
          }

          /* Locations Grid */
          .locations-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
          }

          .location-card {
            background: #ffffff;
            border: 1px solid rgba(16, 185, 129, 0.1);
            border-radius: 16px;
            padding: 28px;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
            transition: all 0.3s ease;
          }

          .location-card:hover {
            border-color: rgba(16, 185, 129, 0.35);
            transform: translateY(-5px);
          }

          .location-card-header {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 18px;
          }

          .location-city {
            font-size: 1.3rem;
            font-weight: 700;
            color: #0f172a;
            margin: 0;
          }

          .location-zone-badge {
            align-self: flex-start;
            font-size: 0.72rem;
            font-weight: 600;
            background: rgba(16, 185, 129, 0.08);
            color: #047857;
            padding: 4px 8px;
            border-radius: 6px;
            text-transform: uppercase;
            letter-spacing: 0.02em;
          }

          .location-stats {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .loc-stat-row {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.9rem;
            color: #475569;
          }

          .loc-stat-row svg {
            color: #10b981;
          }

          .tier-line-decorator {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: #10b981;
          }

          /* Details Section Split */
          .details-grid {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 32px;
            align-items: stretch;
          }

          .benefits-checklist-card {
            background: #ffffff;
            border: 1px solid rgba(16, 185, 129, 0.12);
            border-radius: 20px;
            padding: 36px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
          }

          .checklist-heading {
            font-size: 1.35rem;
            font-weight: 750;
            color: #0f172a;
            margin: 0 0 24px 0;
          }

          .checklist-items {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .checklist-item {
            display: flex;
            gap: 12px;
            align-items: flex-start;
          }

          .check-icon-wrap {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: #f0fdf4;
            border: 1px solid rgba(16, 185, 129, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            margin-top: 2px;
          }

          .checklist-text {
            font-size: 0.95rem;
            color: #334155;
            line-height: 1.5;
          }

          .inquiry-cta-card {
            background: linear-gradient(135deg, #047857 0%, #10b981 100%);
            border-radius: 20px;
            padding: 40px;
            color: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: 0 10px 30px rgba(16, 185, 129, 0.15);
            position: relative;
            overflow: hidden;
          }

          .cta-icon-badge {
            width: 54px;
            height: 54px;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.15);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 24px;
          }

          .inquiry-cta-card h3 {
            font-size: 1.5rem;
            font-weight: 750;
            margin: 0 0 12px 0;
          }

          .inquiry-cta-card p {
            font-size: 0.95rem;
            line-height: 1.6;
            margin: 0 0 32px 0;
            color: rgba(255, 255, 255, 0.85);
          }

          .inquiry-submit-btn {
            background: #ffffff;
            color: #047857;
            border: none;
            padding: 14px 24px;
            border-radius: 10px;
            font-size: 0.95rem;
            font-weight: 700;
            font-family: inherit;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            transition: all 0.2s ease;
          }

          .inquiry-submit-btn:hover {
            transform: scale(1.02);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
          }

          @media (max-width: 900px) {
            .locations-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
            .details-grid {
              grid-template-columns: 1fr;
              gap: 24px;
            }
            .inquiry-cta-card {
              padding: 30px;
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
