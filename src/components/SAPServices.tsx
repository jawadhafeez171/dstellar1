"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DSTELLAR_DATA as D } from '@/lib/data';

export function SAPServices() {
  const [active, setActive] = useState(0);
  const svc = D.sapConsulting[active];
  return (
    <section className="section-pad">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="section-eyebrow"><span>§ 02</span><span>SAP Consulting</span><span className="line"/></div>
        <h2 className="section-title">End-to-end SAP — <em>no hand-offs, no excuses.</em></h2>
      </motion.div>
      <div className="services-split">
        <div className="service-tabs">
          {D.sapConsulting.slice(0, 8).map((s, i) => (
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
                  <div className="mono" style={{color:'var(--accent-hi)'}}>Active · {svc.t}</div>
                  <h3>{svc.d}</h3>
                </div>
                <div className="sp-feats">
                  {['Fit-Gap Analysis in 6 weeks','Readiness & downtime planning','Clean-core custom code refactor','Cutover rehearsals (×3)','AMS handoff with runbooks','Continuous improvement roadmap'].map(f => (
                    <div key={f} className="sp-feat"><span className="dot"/><span>{f}</span></div>
                  ))}
                </div>
              </div>
              <div style={{marginTop: 32}}>
                <button className="cta-btn" style={{background: 'var(--accent)', color: '#fff'}}>Read the playbook →</button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
