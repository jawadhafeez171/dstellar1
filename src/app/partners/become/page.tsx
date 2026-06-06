"use client";

import { useState, useEffect } from 'react';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function BecomePartner() {
  const { tData } = useLanguage();
  const data = tData<any>('partners_become');

  const [companyName, setCompanyName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [preferredTier, setPreferredTier] = useState('Silver');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    if (data && data.title) {
      document.title = `${data.title} | Dstellar`;
    }
  }, [data]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName || !businessEmail) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setCompanyName('');
      setBusinessEmail('');
    }, 1200);
  };

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

          {/* Program Benefits Grid */}
          <div className="benefits-section">
            <div className="section-title-wrap">
              <h2 className="partners-section-title">Program Benefits</h2>
            </div>
            <div className="benefits-grid">
              {data.benefits && data.benefits.map((benefit: any, idx: number) => (
                <motion.div
                  key={idx}
                  className="benefit-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                >
                  <div className="benefit-icon">{benefit.icon}</div>
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-desc">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Program Tiers */}
          <div className="tiers-section">
            <div className="section-title-wrap">
              <h2 className="partners-section-title">Program Tiers</h2>
            </div>
            <div className="tiers-grid">
              {data.tiers && data.tiers.map((tier: any, idx: number) => (
                <motion.div
                  key={idx}
                  className="tier-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="tier-header">
                    <span className="tier-level">{tier.tier}</span>
                    <span className="tier-badge">{tier.req}</span>
                  </div>
                  <p className="tier-desc">{tier.desc}</p>
                  <div className="tier-line-decorator" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Join Form Panel */}
          <div className="form-section">
            <motion.div 
              className="form-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="form-heading">{data.form_title}</h3>
              
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    className="partner-form"
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="form-field">
                      <label htmlFor="company-name">{data.form_name}</label>
                      <input 
                        type="text" 
                        id="company-name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        required
                        placeholder="e.g. Vance Consulting Group"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="business-email">{data.form_email}</label>
                      <input 
                        type="email" 
                        id="business-email"
                        value={businessEmail}
                        onChange={(e) => setBusinessEmail(e.target.value)}
                        required
                        placeholder="e.g. contact@vanceconsulting.com"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="preferred-tier">{data.form_tier}</label>
                      <select 
                        id="preferred-tier"
                        value={preferredTier}
                        onChange={(e) => setPreferredTier(e.target.value)}
                      >
                        <option value="Silver">Silver</option>
                        <option value="Gold">Gold</option>
                        <option value="Platinum">Platinum</option>
                      </select>
                    </div>

                    <button 
                      type="submit" 
                      className="form-submit-btn" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="spinner" />
                      ) : (
                        <>
                          {data.cta}
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    className="form-success-message"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", damping: 15 }}
                  >
                    <div className="success-icon-wrap">
                      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#10b981" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h4>Thank you!</h4>
                    <p>Your partner program application was submitted successfully. Our channel management team will review your application and contact you shortly.</p>
                    <button className="reset-btn" onClick={() => setSubmitSuccess(false)}>
                      Submit another application
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
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

          .benefits-section, .tiers-section, .form-section {
            margin-bottom: 56px;
          }

          /* Benefits */
          .benefits-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
          }

          .benefit-card {
            background: #ffffff;
            border: 1px solid rgba(16, 185, 129, 0.1);
            border-radius: 16px;
            padding: 28px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
          }

          .benefit-icon {
            font-size: 2rem;
            margin-bottom: 16px;
          }

          .benefit-title {
            font-size: 1.15rem;
            font-weight: 700;
            color: #0f172a;
            margin: 0 0 10px 0;
          }

          .benefit-desc {
            font-size: 0.92rem;
            color: #475569;
            line-height: 1.55;
            margin: 0;
          }

          /* Tiers */
          .tiers-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
          }

          .tier-card {
            background: #ffffff;
            border: 1px solid rgba(16, 185, 129, 0.1);
            border-radius: 16px;
            padding: 28px;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
            transition: all 0.3s ease;
          }

          .tier-card:hover {
            border-color: rgba(16, 185, 129, 0.3);
            transform: translateY(-6px);
          }

          .tier-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
          }

          .tier-level {
            font-size: 1.3rem;
            font-weight: 700;
            color: #0f172a;
          }

          .tier-badge {
            font-size: 0.72rem;
            font-weight: 600;
            background: rgba(16, 185, 129, 0.08);
            color: #047857;
            padding: 4px 8px;
            border-radius: 6px;
          }

          .tier-desc {
            font-size: 0.92rem;
            color: #475569;
            line-height: 1.55;
            margin: 0;
          }

          .tier-line-decorator {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: #10b981;
          }

          /* Form Card */
          .form-card {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid rgba(16, 185, 129, 0.15);
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
          }

          .form-heading {
            font-size: 1.4rem;
            font-weight: 700;
            color: #0f172a;
            margin: 0 0 28px 0;
            text-align: center;
          }

          .partner-form {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .form-field {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .form-field label {
            font-size: 0.88rem;
            font-weight: 600;
            color: #334155;
          }

          .form-field input, .form-field select {
            padding: 12px 14px;
            border: 1px solid rgba(16, 185, 129, 0.2);
            border-radius: 8px;
            font-size: 0.95rem;
            font-family: inherit;
            color: inherit;
            background: #ffffff;
            outline: none;
            transition: all 0.2s ease;
          }

          .form-field input:focus, .form-field select:focus {
            border-color: #10b981;
            box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.15);
          }

          .form-submit-btn {
            background: #10b981;
            color: #ffffff;
            border: none;
            padding: 14px;
            border-radius: 10px;
            font-size: 1rem;
            font-weight: 600;
            font-family: inherit;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            transition: all 0.2s ease;
            margin-top: 10px;
          }

          .form-submit-btn:hover:not(:disabled) {
            background: #059669;
            box-shadow: 0 6px 20px rgba(16, 185, 129, 0.3);
            transform: scale(1.01);
          }

          .form-submit-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
          }

          .spinner {
            width: 20px;
            height: 20px;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-top-color: #ffffff;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
          }

          @keyframes spin {
            to { transform: rotate(360deg); }
          }

          /* Success Message */
          .form-success-message {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 20px 10px;
          }

          .success-icon-wrap {
            width: 68px;
            height: 68px;
            border-radius: 50%;
            background: #f0fdf4;
            border: 2px solid #10b981;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
          }

          .form-success-message h4 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #0f172a;
            margin: 0 0 12px 0;
          }

          .form-success-message p {
            color: #475569;
            font-size: 0.95rem;
            line-height: 1.6;
            margin: 0 0 24px 0;
            max-width: 420px;
          }

          .reset-btn {
            background: none;
            border: 1px solid rgba(16, 185, 129, 0.3);
            color: #047857;
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 0.88rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .reset-btn:hover {
            background: #f0fdf4;
            border-color: #10b981;
          }

          @media (max-width: 900px) {
            .benefits-grid, .tiers-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
            .form-card {
              padding: 24px;
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
