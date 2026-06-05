"use client";

import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

export function Footer() {
  const { t, tData } = useLanguage();
  
  const industries = tData<any[]>('industries');
  const sapConsulting = tData<any[]>('sapConsulting');
  const servicesSupport = tData<any[]>('servicesSupport');
  const companyItems = tData<string[]>('company_items');

  const cols = [
    { title: t('nav_title_industries'), items: industries.slice(0,8).map(i=>i.name) },
    { title: t('nav_title_sap_consulting'), items: sapConsulting.slice(0,7).map(s=>s.t) },
    { title: t('nav_title_services'), items: servicesSupport.slice(0,7).map(s=>s.t) },
    { title: t('nav_title_company'), items: companyItems },
  ];

  return (
    <footer>
      <div className="foot-inner">
        <div className="foot-grid">
          <div>
            <div className="foot-cta">{t('foot_cta')}</div>
            <button className="cta-btn accent">{t('start_conversation')}</button>
            <div style={{marginTop: 40}}>
              <div style={{ display: 'flex', alignItems: 'center', marginLeft: '-10px' }}>
                <Image src="/assets/logo-white.webp" alt="Dstellar Footer Logo" width={250} height={65} style={{ objectFit: 'contain', width: '250px', height: 'auto' }} />
              </div>
              <div className="mono" style={{marginTop: 16, opacity: 0.6}}>{t('locations')}</div>
            </div>
          </div>
          {cols.map(c => (
            <div key={c.title} className="foot-col">
              <h5>{c.title}</h5>
              {c.items.map(i => <a key={i} href="#">{i}</a>)}
            </div>
          ))}
        </div>
        <div className="foot-bottom">
          <span>{t('copyright')}</span>
          <span>{t('footer_bottom_links')}</span>
        </div>
      </div>
    </footer>
  );
}
