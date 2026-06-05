"use client";

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export function CTAStrip() {
  const { t } = useLanguage();
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="cta-strip"
    >
      <div>
        <h2 style={{ whiteSpace: 'pre-line' }}>{t('advantage_title')}</h2>
        <p>{t('advantage_sub')}</p>
      </div>
      <div className="actions">
        <button className="cta-btn">{t('book_call')}</button>
        <button className="cta-btn ghost">{t('see_case_studies')}</button>
      </div>
    </motion.div>
  );
}
