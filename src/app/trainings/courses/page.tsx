"use client";

import { useState, useEffect } from 'react';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function CertifiedCourses() {
  const { tData } = useLanguage();
  const data = tData<any>('trainings_courses');

  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    if (data && data.title) {
      document.title = `${data.title} | Dstellar`;
    }
    if (data && data.courses && data.courses.length > 0 && !selectedCourse) {
      setSelectedCourse(data.courses[0].title);
    }
  }, [data, selectedCourse]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !studentEmail || !selectedCourse) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setStudentName('');
      setStudentEmail('');
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

          {/* Courses Listing */}
          <div className="courses-grid-section">
            <div className="courses-grid">
              {data.courses && data.courses.map((course: any, idx: number) => (
                <motion.div
                  key={idx}
                  className="course-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="course-card-header">
                    <span className="course-code-badge">{course.code}</span>
                    <span className="course-duration-badge">{course.duration}</span>
                  </div>

                  <h3 className="course-card-title">{course.title}</h3>
                  <p className="course-card-desc">{course.desc}</p>
                  
                  <div className="course-meta-row">
                    <span className="course-level-label">Difficulty Level:</span>
                    <span className="course-level-value">{course.level}</span>
                  </div>

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
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="form-heading">Course Registration Inquiry</h3>
              
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    className="registration-form"
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="form-field">
                      <label htmlFor="student-name">Full Name</label>
                      <input 
                        type="text" 
                        id="student-name"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        required
                        placeholder="e.g. Dieter Müller"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="student-email">Email Address</label>
                      <input 
                        type="email" 
                        id="student-email"
                        value={studentEmail}
                        onChange={(e) => setStudentEmail(e.target.value)}
                        required
                        placeholder="e.g. dieter@example.com"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="course-select">Select Certified Course</label>
                      <select 
                        id="course-select"
                        value={selectedCourse}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                      >
                        {data.courses && data.courses.map((course: any, idx: number) => (
                          <option key={idx} value={course.title}>{course.title} ({course.code})</option>
                        ))}
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
                      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#6366f1" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h4>Inquiry Received!</h4>
                    <p>Thank you for your inquiry. A coordinator from our SAP Academy will contact you within 24 hours with syllabus details and schedule options.</p>
                    <button className="reset-btn" onClick={() => setSubmitSuccess(false)}>
                      Submit another inquiry
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

          /* Courses Grid */
          .courses-grid-section {
            margin-bottom: 60px;
          }

          .courses-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 28px;
          }

          .course-card {
            background: #ffffff;
            border: 1px solid rgba(99, 102, 241, 0.1);
            border-radius: 18px;
            padding: 32px;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
            transition: all 0.3s ease;
            overflow: hidden;
          }

          .course-card:hover {
            border-color: rgba(99, 102, 241, 0.35);
            transform: translateY(-5px);
          }

          .course-card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 18px;
          }

          .course-code-badge {
            font-size: 0.72rem;
            font-weight: 700;
            background: rgba(99, 102, 241, 0.08);
            color: #4f46e5;
            padding: 4px 8px;
            border-radius: 6px;
          }

          .course-duration-badge {
            font-size: 0.8rem;
            color: #64748b;
            font-weight: 500;
          }

          .course-card-title {
            font-size: 1.35rem;
            font-weight: 700;
            color: #0f172a;
            margin: 0 0 12px 0;
            line-height: 1.25;
          }

          .course-card-desc {
            color: #475569;
            font-size: 0.95rem;
            line-height: 1.6;
            margin: 0 0 24px 0;
            flex-grow: 1;
          }

          .course-meta-row {
            display: flex;
            gap: 8px;
            font-size: 0.85rem;
            align-items: center;
            margin-top: 10px;
          }

          .course-level-label {
            color: #64748b;
          }

          .course-level-value {
            font-weight: 600;
            color: #0f172a;
          }

          .tier-line-decorator {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, #6366f1, #8b5cf6);
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

          .registration-form {
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
            .courses-grid {
              grid-template-columns: 1fr;
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
