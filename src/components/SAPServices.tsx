"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export function SAPServices() {
  const [active, setActive] = useState(0);
  const { t, tData } = useLanguage();
  
  const sapConsulting = tData<any[]>('sapConsulting');
  const sapFeats = tData<string[]>('sap_feats');
  const svc = sapConsulting[active];

  return (
    <section className="section-pad">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="section-eyebrow">
          <span>§ 02</span>
          <span>{t('eyebrow_sap')}</span>
          <span className="line"/>
        </div>
        <h2 className="section-title">{t('title_sap')}</h2>
      </motion.div>
      <div className="services-split">
        <div className="service-tabs">
          {sapConsulting.slice(0, 8).map((s, i) => (
            <div key={s.t} className={`service-tab ${active===i?'active':''}`} onClick={() => setActive(i)}>
              <div className="mono">0{i+1}</div>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
        <div className="service-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}
            >
              <div>
                <div className="sp-hero">
                  <div className="mono" style={{color:'var(--accent-hi)'}}>{t('active')} · {svc.t}</div>
                  <h3>{svc.d}</h3>
                </div>
                <div className="sp-feats">
                  {sapFeats.map(f => (
                    <div key={f} className="sp-feat"><span className="dot"/><span>{f}</span></div>
                  ))}
                </div>
              </div>
              <div style={{marginTop: 32}}>
                <button className="cta-btn" style={{background: 'var(--accent)', color: '#fff'}}>{t('read_playbook')}</button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
