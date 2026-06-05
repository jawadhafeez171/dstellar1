"use client";

import { useLanguage } from '@/context/LanguageContext';

export function Trust() {
  const { t } = useLanguage();
  const logos = ['SAP Gold Partner','ISO 27001','AWS Select','Microsoft Cloud','Oracle Netsuite','Google Cloud','Dstellar Certified','SOC 2 Type II'];
  const double = [...logos, ...logos];
  return (
    <section className="trust">
      <div className="trust-inner">
        <div className="trust-label">
          <span>{t('certified')}</span>
          <span className="dot">·</span>
          <span>{t('partnered')}</span>
        </div>
        <div className="trust-marquee">
          <div className="trust-track">
            {double.map((l,i) => <span key={i} className="trust-item">{l} ✦</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
