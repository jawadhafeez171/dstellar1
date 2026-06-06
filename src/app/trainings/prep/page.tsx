"use client";

import { useState, useEffect } from 'react';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const EXPLANATIONS: Record<string, string[]> = {
  en: [
    "SAP S/4HANA is SAP's next-generation ERP suite, succeeding ECC. It is natively built on the in-memory SAP HANA database for real-time analytics and transaction processing.",
    "ACDOCA (the Universal Journal) is the single line-item table in SAP S/4HANA Finance that consolidates data from General Ledger (FI-GL), Asset Accounting (FI-AA), and Controlling (CO) into a single source of truth.",
    "Clean Core means keeping standard ERP code untouched. Custom developments are implemented as side-by-side extensions using APIs and SAP Business Technology Platform (BTP), allowing seamless system upgrades."
  ],
  es: [
    "SAP S/4HANA es la suite ERP de próxima generación de SAP, sucesora de ECC. Está desarrollada de forma nativa sobre la base de datos en memoria SAP HANA para análisis y procesamiento en tiempo real.",
    "ACDOCA (el Diario Universal) es la tabla única de partidas individuales en SAP S/4HANA Finance que consolida los datos de Libro Mayor (FI-GL), Contabilidad de Activos (FI-AA) y Control de Gestión (CO).",
    "Clean Core significa mantener intacto el código ERP estándar. Las modificaciones personalizadas se implementan como extensiones externas mediante APIs y SAP Business Technology Platform (BTP)."
  ],
  zh: [
    "SAP S/4HANA 是 SAP 的下一代 ERP 套件，继承自 ECC。它原生构建在内存数据库 SAP HANA 上，支持实时分析和事务处理。",
    "ACDOCA（万能日记账）是 SAP S/4HANA Finance 中的单行项目表，它将总账 (FI-GL)、资产会计 (FI-AA) 和管理会计 (CO) 的数据整合为单一事实来源。",
    "干净核心 (Clean Core) 意味着不修改标准 ERP 代码。自定义开发通过 API 和 SAP 业务技术平台 (BTP) 作为旁路扩展实现，以便系统无缝升级。"
  ],
  de: [
    "SAP S/4HANA ist die ERP-Suite der nächsten Generation von SAP und Nachfolger von ECC. Sie basiert nativ auf der In-Memory-Datenbank SAP HANA für Analysen und Transaktionen in Echtzeit.",
    "ACDOCA (das Universal Journal) ist die zentrale Tabelle für Einzelposten in SAP S/4HANA Finance, die Daten aus Hauptbuch (FI-GL), Anlagenbuchhaltung (FI-AA) und Controlling (CO) konsolidiert.",
    "Clean Core bedeutet, den ERP-Standardcode unverändert zu lassen. Kundeneigene Entwicklungen werden als Side-by-Side-Erweiterungen über APIs und die SAP Business Technology Platform (BTP) realisiert."
  ],
  fr: [
    "SAP S/4HANA est la suite ERP de nouvelle génération de SAP, succédant à ECC. Elle est conçue nativement sur la base de données en mémoire SAP HANA pour des analyses en temps réel.",
    "ACDOCA (le Journal Universel) est la table unique d'écritures dans SAP S/4HANA Finance, consolidant les données du Grand Livre (FI-GL), de la Comptabilité des Immo (FI-AA) et du Contrôle de Gestion (CO).",
    "Clean Core consiste à ne pas modifier le code standard de l'ERP. Les développements spécifiques sont réalisés à l'extérieur via des APIs et la SAP Business Technology Platform (BTP)."
  ],
  ja: [
    "SAP S/4HANAは、ECCの後継となるSAPの次世代ERPスイートです。リアルタイムの分析とトランザクション処理のために、インメモリデータベースであるSAP HANA上にネイティブに構築されています。",
    "ACDOCA（ユニバーサルジャーナル）は、総勘定元帳（FI-GL）、固定資産会計（FI-AA）、および管理会計（CO）のデータを単一のデータソースとして統合する、SAP S/4HANA Financeの明細テーブルです。",
    "クリーンコア（Clean Core）とは、標準のERPコードをそのままに保つことを意味します。カスタム開発は、APIやSAP Business Technology Platform（BTP）を使用したサイドバイサイドの拡張機能として実装されます。"
  ]
};

export default function CertificationPrep() {
  const { tData, language } = useLanguage();
  const data = tData<any>('trainings_prep');

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes mock timer

  useEffect(() => {
    if (data && data.title) {
      document.title = `${data.title} | Dstellar`;
    }
  }, [data]);

  // Quiz timer count down
  useEffect(() => {
    if (isSubmitted || timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft, isSubmitted]);

  // Submit check
  useEffect(() => {
    if (timeLeft === 0 && !isSubmitted) {
      handleQuizSubmit();
    }
  }, [timeLeft, isSubmitted]);

  if (!data || !data.questions) return null;

  const currentQuestion = data.questions[currentQuestionIdx];

  const handleOptionSelect = (idx: number) => {
    if (isSubmitted) return;
    setSelectedOption(idx);
    setAnswers((prev) => ({ ...prev, [currentQuestionIdx]: idx }));
  };

  const handleNext = () => {
    if (currentQuestionIdx < data.questions.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
      setSelectedOption(answers[currentQuestionIdx + 1] !== undefined ? answers[currentQuestionIdx + 1] : null);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIdx > 0) {
      setCurrentQuestionIdx((prev) => prev - 1);
      setSelectedOption(answers[currentQuestionIdx - 1]);
    }
  };

  const handleQuizSubmit = () => {
    let finalScore = 0;
    data.questions.forEach((q: any, idx: number) => {
      if (answers[idx] === q.correct) {
        finalScore += 1;
      }
    });
    setScore(finalScore);
    setIsSubmitted(true);
  };

  const handleQuizReset = () => {
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setAnswers({});
    setIsSubmitted(false);
    setScore(0);
    setTimeLeft(300);
  };

  const getExplanation = (idx: number) => {
    const lang = (language && EXPLANATIONS[language]) ? language : 'en';
    const explanationsList = EXPLANATIONS[lang] || EXPLANATIONS['en'];
    return explanationsList[idx] || '';
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

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

          {/* Programs Grid Section */}
          {data.programs && (
            <div className="programs-section">
              <div className="section-title-wrap">
                <h2 className="trainings-section-title">
                  {language === 'ja' ? '提供中の試験対策プログラム' : 
                   language === 'es' ? 'Programas de Preparación Disponibles' : 
                   language === 'zh' ? '可用备考项目' : 
                   language === 'de' ? 'Verfügbare Vorbereitungsprogramme' :
                   language === 'fr' ? 'Programmes de Préparation Disponibles' :
                   'Available Preparation Programs'}
                </h2>
              </div>
              
              <div className="programs-grid">
                {data.programs.map((prog: any, idx: number) => (
                  <motion.div
                    key={idx}
                    className="program-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                    whileHover={{ y: -6 }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                        <span className="program-badge">{prog.exam}</span>
                        <span className="program-duration">{prog.duration}</span>
                      </div>

                      <h3 className="program-title">{prog.title}</h3>
                      
                      <div style={{ marginBottom: '20px' }}>
                        <p className="program-topics-label">
                          {language === 'ja' ? '対象トピック:' :
                           language === 'es' ? 'Temas clave:' :
                           language === 'zh' ? '核心主题:' :
                           language === 'de' ? 'Hauptthemen:' :
                           language === 'fr' ? 'Sujets clés :' :
                           'Key Topics:'}
                        </p>
                        <div className="program-topics-wrap">
                          {prog.topics && prog.topics.map((topic: string, tIdx: number) => (
                            <span key={tIdx} className="program-topic-tag">{topic}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="program-footer">
                      <span className="program-pass-rate">
                        {language === 'ja' ? '過去の合格率: ' :
                         language === 'es' ? 'Tasa de aprobado: ' :
                         language === 'zh' ? '历史通过率: ' :
                         language === 'de' ? 'Bestehensquote: ' :
                         language === 'fr' ? 'Taux de réussite : ' :
                         'Past Pass Rate: '}
                        <strong className="program-pass-rate-val">{prog.passRate}</strong>
                      </span>
                      
                      <button 
                        className="program-action-btn"
                        onClick={() => {
                          const quizSection = document.getElementById('quiz-practice-section');
                          if (quizSection) {
                            quizSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        {language === 'ja' ? '模擬試験を受ける →' :
                         language === 'es' ? 'Tomar examen →' :
                         language === 'zh' ? '参加模拟测试 →' :
                         language === 'de' ? 'Test starten →' :
                         language === 'fr' ? 'Lancer le test →' :
                         'Take Mock Test →'}
                      </button>
                    </div>
                    
                    <div className="program-card-line" />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Practice Quiz Panel */}
          <div className="quiz-section" id="quiz-practice-section">
            <motion.div 
              className="quiz-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Quiz Status Toolbar */}
              <div className="quiz-toolbar">
                <span className="quiz-progress-text">
                  {data.question_label || 'Question'} {currentQuestionIdx + 1} of {data.questions.length}
                </span>
                
                {!isSubmitted && (
                  <div className="quiz-timer">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    <span>{data.timer_label || 'Time Remaining'}: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>
                  </div>
                )}
              </div>

              {/* Progress bar */}
              <div className="quiz-progressbar-container">
                <div 
                  className="quiz-progressbar-fill"
                  style={{ width: `${((currentQuestionIdx + 1) / data.questions.length) * 100}%` }}
                />
              </div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key={currentQuestionIdx}
                    className="question-body"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="quiz-question-title">{currentQuestion.q}</h3>

                    <div className="quiz-options-list">
                      {currentQuestion.options.map((opt: string, oIdx: number) => {
                        const isSelected = selectedOption === oIdx;
                        return (
                          <button
                            key={oIdx}
                            className={`quiz-option-btn ${isSelected ? 'selected' : ''}`}
                            onClick={() => handleOptionSelect(oIdx)}
                          >
                            <span className="option-marker">{String.fromCharCode(65 + oIdx)}</span>
                            <span className="option-text">{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="quiz-navigation">
                      <button 
                        className="nav-btn prev"
                        onClick={handlePrev}
                        disabled={currentQuestionIdx === 0}
                      >
                        {data.prev_label || '← Previous'}
                      </button>

                      {currentQuestionIdx < data.questions.length - 1 ? (
                        <button 
                          className="nav-btn next"
                          onClick={handleNext}
                          disabled={selectedOption === null}
                        >
                          {data.next_label || 'Next →'}
                        </button>
                      ) : (
                        <button 
                          className="submit-quiz-btn"
                          onClick={handleQuizSubmit}
                          disabled={Object.keys(answers).length < data.questions.length}
                        >
                          {data.cta || 'Submit Quiz'}
                        </button>
                      )}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="results"
                    className="quiz-results"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", damping: 15 }}
                  >
                    <div className="score-ring-wrap">
                      <div className="score-value-big">{score} / {data.questions.length}</div>
                      <div className="score-desc">{data.score_label || 'Your Mock Score'}</div>
                    </div>

                    <h4 className="results-heading">Review Answers</h4>
                    <div className="review-list">
                      {data.questions.map((q: any, idx: number) => {
                        const isCorrect = answers[idx] === q.correct;
                        return (
                          <div key={idx} className={`review-item ${isCorrect ? 'correct' : 'incorrect'}`}>
                            <div className="review-status-header">
                              <span className="review-question-num">Question {idx + 1}</span>
                              <span className="review-status-label">{isCorrect ? '✓ Correct' : '✕ Incorrect'}</span>
                            </div>
                            <p className="review-question-txt">{q.q}</p>
                            <div className="review-details">
                              <div className="review-detail-row">
                                <span className="lbl">
                                  {language === 'ja' ? 'あなたの回答:' :
                                   language === 'es' ? 'Tu respuesta:' :
                                   language === 'zh' ? '您的回答:' :
                                   language === 'de' ? 'Ihre Antwort:' :
                                   language === 'fr' ? 'Votre réponse :' :
                                   'Your Answer:'}
                                </span>
                                <span className="val">{q.options[answers[idx]]}</span>
                              </div>
                              {!isCorrect && (
                                <div className="review-detail-row correct-answer">
                                  <span className="lbl">
                                    {language === 'ja' ? '正しい回答:' :
                                     language === 'es' ? 'Respuesta correcta:' :
                                     language === 'zh' ? '正确回答:' :
                                     language === 'de' ? 'Richtige Antwort:' :
                                     language === 'fr' ? 'Réponse correcte :' :
                                     'Correct Answer:'}
                                  </span>
                                  <span className="val">{q.options[q.correct]}</span>
                                </div>
                              )}
                              {getExplanation(idx) && (
                                <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px dashed rgba(99, 102, 241, 0.15)' }}>
                                  <p className="explanation-title">
                                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                                    {language === 'ja' ? '解説:' :
                                     language === 'es' ? 'Explicación:' :
                                     language === 'zh' ? '解析:' :
                                     language === 'de' ? 'Erklärung:' :
                                     language === 'fr' ? 'Explication :' :
                                     'Explanation:'}
                                  </p>
                                  <p className="explanation-text">
                                    {getExplanation(idx)}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <button className="reset-quiz-btn" onClick={handleQuizReset}>
                      Try mock test again
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

          /* Programs Section & Cards */
          .programs-section {
            margin-bottom: 60px;
          }

          .programs-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 28px;
          }

          .program-card {
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

          .program-card:hover {
            border-color: rgba(99, 102, 241, 0.35);
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(99, 102, 241, 0.08);
          }

          .program-badge {
            font-size: 0.72rem;
            font-weight: 700;
            background: rgba(99, 102, 241, 0.08);
            color: #4f46e5;
            padding: 4px 8px;
            border-radius: 6px;
            text-transform: uppercase;
          }

          .program-duration {
            font-size: 0.8rem;
            color: #64748b;
            font-weight: 500;
          }

          .program-title {
            font-size: 1.25rem;
            font-weight: 700;
            color: #0f172a;
            margin: 0 0 16px 0;
            line-height: 1.3;
          }

          .program-topics-label {
            font-size: 0.85rem;
            font-weight: 650;
            color: #475569;
            margin: 0 0 8px 0;
          }

          .program-topics-wrap {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-bottom: 20px;
          }

          .program-topic-tag {
            font-size: 0.75rem;
            background: #f1f5f9;
            color: #334155;
            padding: 3px 8px;
            border-radius: 6px;
            font-weight: 500;
          }

          .program-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 16px;
            border-top: 1px solid #f1f5f9;
            margin-top: auto;
          }

          .program-pass-rate {
            font-size: 0.8rem;
            color: #64748b;
          }

          .program-pass-rate-val {
            color: #16a34a;
            font-weight: 700;
          }

          .program-action-btn {
            background: none;
            border: none;
            color: #4f46e5;
            font-weight: 600;
            font-size: 0.85rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 4px;
            padding: 0;
            transition: color 0.2s ease;
          }

          .program-action-btn:hover {
            color: #312e81;
          }

          .program-card-line {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, #6366f1, #8b5cf6);
          }

          .explanation-title {
            margin: 0;
            font-size: 0.88rem;
            color: #4f46e5;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 4px;
          }

          .explanation-text {
            margin: 4px 0 0 0;
            font-size: 0.88rem;
            color: #475569;
            line-height: 1.45;
          }

          /* Quiz Panel */
          .quiz-section {
            margin-bottom: 56px;
          }

          .quiz-card {
            max-width: 720px;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid rgba(99, 102, 241, 0.15);
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
          }

          .quiz-toolbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
          }

          .quiz-progress-text {
            font-size: 0.88rem;
            font-weight: 600;
            color: #64748b;
          }

          .quiz-timer {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 0.88rem;
            color: #dc2626;
            font-weight: 600;
            background: #fef2f2;
            border: 1px solid rgba(220, 38, 38, 0.2);
            padding: 4px 10px;
            border-radius: 6px;
          }

          .quiz-progressbar-container {
            height: 6px;
            background: #f1f5f9;
            border-radius: 3px;
            overflow: hidden;
            margin-bottom: 32px;
          }

          .quiz-progressbar-fill {
            height: 100%;
            background: linear-gradient(90deg, #6366f1, #8b5cf6);
            border-radius: 3px;
            transition: width 0.3s ease;
          }

          .quiz-question-title {
            font-size: 1.3rem;
            font-weight: 700;
            line-height: 1.4;
            color: #0f172a;
            margin: 0 0 24px 0;
          }

          .quiz-options-list {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-bottom: 32px;
          }

          .quiz-option-btn {
            display: flex;
            align-items: center;
            gap: 16px;
            text-align: left;
            background: #ffffff;
            border: 1px solid rgba(99, 102, 241, 0.15);
            border-radius: 10px;
            padding: 16px;
            cursor: pointer;
            font-family: inherit;
            color: inherit;
            transition: all 0.2s ease;
          }

          .quiz-option-btn:hover {
            border-color: #6366f1;
            background: #f5f3ff;
          }

          .quiz-option-btn.selected {
            background: #6366f1;
            color: #ffffff;
            border-color: #6366f1;
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
          }

          .option-marker {
            width: 28px;
            height: 28px;
            border-radius: 6px;
            background: rgba(99, 102, 241, 0.08);
            color: #4f46e5;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.85rem;
            font-weight: 700;
            transition: all 0.2s ease;
          }

          .quiz-option-btn.selected .option-marker {
            background: rgba(255, 255, 255, 0.2);
            color: #ffffff;
          }

          .option-text {
            font-size: 0.95rem;
            font-weight: 500;
          }

          .quiz-navigation {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid rgba(0, 0, 0, 0.05);
            padding-top: 24px;
          }

          .nav-btn {
            background: none;
            border: 1px solid rgba(99, 102, 241, 0.25);
            color: #4f46e5;
            padding: 10px 20px;
            border-radius: 8px;
            font-size: 0.9rem;
            font-weight: 600;
            cursor: pointer;
            font-family: inherit;
            transition: all 0.2s ease;
          }

          .nav-btn:hover:not(:disabled) {
            background: #f5f3ff;
            border-color: #6366f1;
          }

          .nav-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }

          .submit-quiz-btn {
            background: linear-gradient(135deg, #4f46e5, #7c3aed);
            color: #ffffff;
            border: none;
            padding: 10px 24px;
            border-radius: 8px;
            font-size: 0.9rem;
            font-weight: 600;
            cursor: pointer;
            font-family: inherit;
            transition: all 0.2s ease;
          }

          .submit-quiz-btn:hover:not(:disabled) {
            transform: scale(1.02);
            box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
          }

          .submit-quiz-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }

          /* Results Section */
          .quiz-results {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .score-ring-wrap {
            width: 140px;
            height: 140px;
            border-radius: 50%;
            background: #f5f3ff;
            border: 3px solid #6366f1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-bottom: 32px;
            box-shadow: 0 6px 20px rgba(99, 102, 241, 0.08);
          }

          .score-value-big {
            font-size: 2rem;
            font-weight: 800;
            color: #4f46e5;
          }

          .score-desc {
            font-size: 0.72rem;
            color: #64748b;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-top: 4px;
          }

          .results-heading {
            align-self: flex-start;
            font-size: 1.25rem;
            font-weight: 700;
            color: #0f172a;
            margin: 0 0 18px 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            width: 100%;
            padding-bottom: 10px;
          }

          .review-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
            width: 100%;
            margin-bottom: 32px;
          }

          .review-item {
            background: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.05);
            border-radius: 12px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .review-item.correct {
            border-left: 4px solid #16a34a;
            background: #f0fdf4;
          }

          .review-item.incorrect {
            border-left: 4px solid #dc2626;
            background: #fef2f2;
          }

          .review-status-header {
            display: flex;
            justify-content: space-between;
            font-size: 0.8rem;
            font-weight: 600;
          }

          .review-item.correct .review-status-label {
            color: #15803d;
          }

          .review-item.incorrect .review-status-label {
            color: #b91c1c;
          }

          .review-question-txt {
            font-size: 0.95rem;
            font-weight: 700;
            color: #0f172a;
            margin: 0;
          }

          .review-details {
            display: flex;
            flex-direction: column;
            gap: 6px;
            border-top: 1px solid rgba(0, 0, 0, 0.03);
            padding-top: 8px;
          }

          .review-detail-row {
            display: flex;
            gap: 8px;
            font-size: 0.88rem;
          }

          .review-detail-row .lbl {
            color: #64748b;
            font-weight: 500;
          }

          .review-detail-row .val {
            font-weight: 600;
            color: #334155;
          }

          .review-detail-row.correct-answer .val {
            color: #15803d;
          }

          .reset-quiz-btn {
            background: none;
            border: 1px solid rgba(99, 102, 241, 0.3);
            color: #4f46e5;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 0.9rem;
            font-weight: 600;
            cursor: pointer;
            font-family: inherit;
            transition: all 0.2s ease;
          }

          .reset-quiz-btn:hover {
            background: #f5f3ff;
            border-color: #6366f1;
          }

          @media (max-width: 768px) {
            .quiz-card {
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
