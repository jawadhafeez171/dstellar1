"use client";

import { useState, useEffect } from 'react';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function EducationProgram() {
  const { tData } = useLanguage();
  const data = tData<any>('trainings_program');

  const [orgName, setOrgName] = useState('');
  const [academicEmail, setAcademicEmail] = useState('');
  const [partnerType, setPartnerType] = useState('University');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    if (data && data.title) {
      document.title = `${data.title} | Dstellar`;
    }
  }, [data]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orgName || !academicEmail) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setOrgName('');
      setAcademicEmail('');
    }, 1200);
  };

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

          {/* Curriculum Tiers Grid */}
          <div className="curriculum-section">
            <div className="section-title-wrap">
              <h2 className="trainings-section-title">{data.curriculum_title || 'Partnership Tiers & Licensing'}</h2>
            </div>
            
            <div className="features-grid">
              {data.tiers && data.tiers.map((tier: any, idx: number) => (
                <motion.div
                  key={idx}
                  className="feature-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="feature-icon-wrap">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#6366f1" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>
                  <h3 className="feature-title">{tier.name}</h3>
                  <p className="feature-price" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#6366f1', margin: '8px 0 16px 0' }}>{tier.price}</p>
                  <ul className="tier-features-list" style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: '#475569' }}>
                    {tier.features && tier.features.map((feat: string, fIdx: number) => (
                      <li key={fIdx} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#10b981" strokeWidth="3" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="tier-line-decorator" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="form-section">
            <motion.div 
              className="form-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="form-heading">{data.form_title || 'Partnership Inquiry'}</h3>
              
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
                      <label htmlFor="org-name">{data.form_name || 'Organization Name'}</label>
                      <input 
                        type="text" 
                        id="org-name"
                        value={orgName}
                        onChange={(e) => setOrgName(e.target.value)}
                        required
                        placeholder="e.g. Technical University of Munich"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="academic-email">{data.form_email || 'Academic Email Address'}</label>
                      <input 
                        type="email" 
                        id="academic-email"
                        value={academicEmail}
                        onChange={(e) => setAcademicEmail(e.target.value)}
                        required
                        placeholder="e.g. alliance@tum.de"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="partner-type">{data.form_org || 'Organization Type'}</label>
                      <select 
                        id="partner-type"
                        value={partnerType}
                        onChange={(e) => setPartnerType(e.target.value)}
                      >
                        <option value="University">University / College</option>
                        <option value="Training Center">Corporate Training Academy</option>
                        <option value="Independent Tutor">Independent Education Partner</option>
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
                          {data.cta || 'Apply Now'}
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
                      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#6366f1" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h4>Request Received!</h4>
                    <p>Thank you for applying. A representative from Dstellar Global Education will contact your organization to review server credentials and academic licensing packages.</p>
                    <button className="reset-btn" onClick={() => setSubmitSuccess(false)}>
                      Submit another request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
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

          /* Features Grid */
          .features-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
            margin-bottom: 56px;
          }

          .feature-card {
            background: #ffffff;
            border: 1px solid rgba(99, 102, 241, 0.1);
            border-radius: 16px;
            padding: 28px;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
            transition: all 0.3s ease;
          }

          .feature-card:hover {
            border-color: rgba(99, 102, 241, 0.3);
            transform: translateY(-5px);
          }

          .feature-icon-wrap {
            width: 48px;
            height: 48px;
            border-radius: 10px;
            background: rgba(99, 102, 241, 0.06);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 18px;
          }

          .feature-title {
            font-size: 1.15rem;
            font-weight: 700;
            color: #0f172a;
            margin: 0 0 10px 0;
          }

          .feature-desc {
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
            background: #6366f1;
          }

          /* Form Card */
          .form-section {
            margin-bottom: 56px;
          }

          .form-card {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid rgba(99, 102, 241, 0.15);
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
            border: 1px solid rgba(99, 102, 241, 0.2);
            border-radius: 8px;
            font-size: 0.95rem;
            font-family: inherit;
            color: inherit;
            background: #ffffff;
            outline: none;
            transition: all 0.2s ease;
          }

          .form-field input:focus, .form-field select:focus {
            border-color: #6366f1;
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
          }

          .form-submit-btn {
            background: #6366f1;
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
            background: #4f46e5;
            box-shadow: 0 6px 20px rgba(99, 102, 241, 0.3);
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
            background: #f5f3ff;
            border: 2px solid #6366f1;
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
            border: 1px solid rgba(99, 102, 241, 0.3);
            color: #4f46e5;
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 0.88rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .reset-btn:hover {
            background: #f5f3ff;
            border-color: #6366f1;
          }

          @media (max-width: 900px) {
            .features-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
            .form-card {
              padding: 24px;
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
