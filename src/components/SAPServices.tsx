"use client";
 
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { CONSULTING_TRANSLATIONS } from '@/lib/sapConsultingTranslations';

export function SAPServices() {
  const [active, setActive] = useState(0);
  const { language, t } = useLanguage();
  
  const SLUGS = [
    's4hana',
    'fico',
    'logistics',
    'production',
    'successfactors',
    'abap-fiori',
    'integration',
    'ariba-supply-chain'
  ];

  const services = SLUGS.map(slug => {
    return CONSULTING_TRANSLATIONS[language]?.[slug] || CONSULTING_TRANSLATIONS['en'][slug];
  });

  const svc = services[active];

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
          {services.map((s, i) => (
            <div key={s.slug} className={`service-tab ${active===i?'active':''}`} onClick={() => setActive(i)}>
              <div className="mono">0{i+1}</div>
              <h4>{s.badge}</h4>
              <p style={{ margin: '4px 0 0', opacity: 0.85 }}>{s.title}</p>
            </div>
          ))}
        </div>
        <div className="service-panel" style={{ overflow: 'hidden', position: 'relative' }}>
          <div 
            className="sp-glow" 
            style={{ 
              background: `radial-gradient(circle at 50% 50%, ${svc.themeColor}1a 0%, transparent 70%)` 
            }} 
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', position: 'relative', zIndex: 2 }}
            >
              <div>
                <div className="sp-hero">
                  <div className="mono" style={{color:'var(--accent-hi)'}}>{t('active')} · {svc.badge}</div>
                  <h3>{svc.subtitle}</h3>
                </div>

                {/* Dynamic Stats Row */}
                <div className="sp-stats-row">
                  {svc.stats.map(st => (
                    <div key={st.label} className="sp-stat-item">
                      <div className="sp-stat-value">{st.value}</div>
                      <div className="sp-stat-label">{st.label}</div>
                    </div>
                  ))}
                </div>

                {/* Dynamic Capabilities */}
                <div className="sp-caps">
                  {svc.capabilities.map(cap => (
                    <div key={cap.title} className="sp-cap">
                      <div className="sp-cap-title-row">
                        <span className="dot" style={{ background: svc.themeColor, boxShadow: `0 0 8px ${svc.themeColor}` }} />
                        <strong>{cap.title}</strong>
                      </div>
                      <p>{cap.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{marginTop: 32}}>
                <a 
                  href={`/sap-consulting/${svc.slug}`} 
                  className="cta-btn" 
                  style={{ 
                    background: svc.themeColor, 
                    color: '#fff', 
                    textDecoration: 'none', 
                    display: 'inline-flex', 
                    alignItems: 'center',
                    boxShadow: `0 8px 24px -6px ${svc.themeColor}aa`
                  }}
                >
                  {t('read_playbook')}
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
