"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DSTELLAR_DATA as D } from '@/lib/data';

const INDUSTRY_GLYPHS: Record<string, React.ReactNode> = {
  'Automotive': (<g><rect x="14" y="32" width="52" height="14" rx="4"/><circle cx="24" cy="50" r="6"/><circle cx="56" cy="50" r="6"/><path d="M20 32 L26 22 L54 22 L60 32"/></g>),
  'Consumer Products': (<g><path d="M22 22 H58 L54 56 H26 Z"/><path d="M30 22 V18 a10 10 0 0 1 20 0 V22"/></g>),
  'Electronic & High Tech': (<g><rect x="22" y="22" width="36" height="36" rx="3"/><rect x="30" y="30" width="20" height="20"/><path d="M22 28 H16 M22 36 H16 M22 44 H16 M22 52 H16 M64 28 H58 M64 36 H58 M64 44 H58 M64 52 H58"/></g>),
  'Government & Public Sector': (<g><path d="M14 56 H66"/><path d="M18 56 V36 M28 56 V36 M40 56 V36 M52 56 V36 M62 56 V36"/><path d="M12 36 L40 18 L68 36 Z"/></g>),
  'Media & Entertainment': (<g><rect x="14" y="22" width="52" height="34" rx="3"/><path d="M34 30 L48 39 L34 48 Z"/></g>),
  'Telecommunications': (<g><circle cx="40" cy="46" r="4"/><path d="M28 46 a16 16 0 0 1 24 0"/><path d="M20 46 a26 26 0 0 1 40 0"/><path d="M12 46 a36 36 0 0 1 56 0"/></g>),
  'Distribution & Wholesale': (<g><rect x="12" y="30" width="32" height="22" rx="2"/><path d="M44 36 H58 L64 44 V52 H44 Z"/><circle cx="22" cy="56" r="4"/><circle cx="36" cy="56" r="4"/><circle cx="54" cy="56" r="4"/></g>),
  'Energy & Utilities': (<g><path d="M44 14 L26 42 H38 L34 62 L54 32 H42 Z"/></g>),
  'Manufacturing & Industrial': (<g><path d="M14 58 V34 L28 42 V34 L42 42 V34 L62 42 V58 Z"/><rect x="20" y="48" width="6" height="6"/><rect x="34" y="48" width="6" height="6"/><rect x="48" y="48" width="6" height="6"/></g>),
  'Retail': (<g><path d="M16 26 H64 L60 56 H20 Z"/><path d="M28 26 V20 a12 12 0 0 1 24 0 V26"/></g>),
  'Hotel Management': (<g><path d="M14 56 V22 H40 V56"/><path d="M40 56 V32 H66 V56"/><path d="M22 32 H32 M22 42 H32 M48 40 H58 M48 50 H58"/></g>),
  'Capital Markets': (<g><path d="M14 56 H66"/><path d="M18 50 V42 M28 50 V36 M38 50 V28 M48 50 V32 M58 50 V22"/><path d="M14 22 L28 30 L42 18 L62 26"/></g>),
  'Life Sciences & Healthcare': (<g><path d="M40 14 V62 M14 38 H66" strokeWidth="6"/></g>),
  'Information Services': (<g><ellipse cx="40" cy="24" rx="22" ry="6"/><path d="M18 24 V46 a22 6 0 0 0 44 0 V24"/><path d="M18 36 a22 6 0 0 0 44 0"/></g>),
  'Public Services': (<g><circle cx="40" cy="32" r="10"/><path d="M22 58 a18 12 0 0 1 36 0"/></g>),
  'Travel, Transport & Hospitality': (<g><path d="M14 44 L40 14 L66 44"/><path d="M40 14 V58"/><path d="M14 44 V58 H66 V44"/></g>),
  'Construction': (<g><path d="M14 56 H66"/><path d="M22 56 V32 H58 V56"/><path d="M22 32 L40 18 L58 32"/><rect x="34" y="40" width="12" height="16"/></g>),
  'Education': (<g><path d="M40 18 L68 30 L40 42 L12 30 Z"/><path d="M22 36 V48 a18 8 0 0 0 36 0 V36"/></g>),
};

function IndustryGlyph({ name }: { name: string }) {
  const g = INDUSTRY_GLYPHS[name];
  return (
    <svg viewBox="0 0 80 80" className="ind-glyph" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {g || <rect x="20" y="20" width="40" height="40"/>}
      </g>
    </svg>
  );
}

export function Industries() {
  const [active, setActive] = useState(0);
  const ind = D.industries[active];

  return (
    <section className="section-pad industries">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="section-eyebrow"><span>§ 01</span><span>Industries · {D.industries.length} verticals</span><span className="line"/></div>
        <h2 className="section-title">Deep in the verticals <em>that matter to you.</em></h2>
      </motion.div>

      <div className="ind-stage">
        <div className="ind-focus">
          <AnimatePresence mode="wait">
            <motion.div 
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="ind-focus-glyph">
                <IndustryGlyph name={ind.name}/>
                <div className="ind-focus-rings">
                  <span/><span/><span/>
                </div>
              </div>
              <div className="ind-focus-meta">
                <div className="mono">{String(active+1).padStart(2,'0')} / {String(D.industries.length).padStart(2,'0')} · {ind.tag}</div>
                <h3>{ind.name}</h3>
                <p>{ind.desc}</p>
                <div className="ind-tags">
                  {['SAP S/4HANA','Industry add-ons','AMS','Analytics'].map(t => <span key={t} className="ind-tag">{t}</span>)}
                </div>
                <button className="cta-btn" style={{marginTop: 24, background:'var(--ink)', color:'var(--paper)'}}>
                  Open {ind.name} playbook →
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="ind-chips">
          {D.industries.map((it, i) => (
            <button
              key={it.name}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className={`ind-chip ${active===i?'active':''}`}>
              <IndustryGlyph name={it.name}/>
              <span className="ind-chip-name">{it.name}</span>
              <span className="ind-chip-num mono">{String(i+1).padStart(2,'0')}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
