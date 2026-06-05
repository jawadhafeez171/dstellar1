"use client";

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export function BigStats() {
  const { t } = useLanguage();
  const stats = [
    ['13', t('stat_years')],
    ['18', t('stat_industries')],
    ['40+', t('stat_modules')],
    ['24×7', t('stat_support')],
  ];
  
  return (
    <section className="section-pad">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="section-eyebrow">
          <span>§ 05</span>
          <span>{t('why_dstellar')}</span>
          <span className="line"/>
        </div>
        <h2 className="section-title">{t('proof_numbers')}</h2>
      </motion.div>
      <div className="big-stats">
        {stats.map(([n,l], i) => (
          <motion.div 
            key={l} 
            className="stat-cell"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
          >
            <div className="n">{n}</div>
            <div className="l">{l}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
