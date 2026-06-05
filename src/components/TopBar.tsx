"use client";
import { useState } from 'react';
import { Logo } from './Shared';
import { useLanguage, Language } from '@/context/LanguageContext';

const REGIONS = [
  {
    region: 'Americas',
    countries: [
      { name: 'United States', code: 'us' },
      { name: 'Canada', code: 'ca' },
      { name: 'Brazil', code: 'br' },
      { name: 'Mexico', code: 'mx' }
    ]
  },
  {
    region: 'Europe',
    countries: [
      { name: 'Germany', code: 'de' },
      { name: 'United Kingdom', code: 'gb' },
      { name: 'France', code: 'fr' },
      { name: 'Italy', code: 'it' },
      { name: 'Spain', code: 'es' }
    ]
  },
  {
    region: 'Asia Pacific',
    countries: [
      { name: 'India', code: 'in' },
      { name: 'Japan', code: 'jp' },
      { name: 'Singapore', code: 'sg' },
      { name: 'Australia', code: 'au' },
      { name: 'China', code: 'cn' }
    ]
  },
  {
    region: 'Middle East & Africa',
    countries: [
      { name: 'UAE', code: 'ae' },
      { name: 'Saudi Arabia', code: 'sa' },
      { name: 'South Africa', code: 'za' },
      { name: 'Turkey', code: 'tr' }
    ]
  }
];

const COUNTRY_LANGS: Record<string, Language> = {
  'United States': 'en',
  'Canada': 'en',
  'Brazil': 'en',
  'Mexico': 'es',
  'Germany': 'de',
  'United Kingdom': 'en',
  'France': 'fr',
  'Italy': 'en',
  'Spain': 'es',
  'India': 'en',
  'Japan': 'ja',
  'Singapore': 'en',
  'Australia': 'en',
  'China': 'zh',
  'UAE': 'en',
  'Saudi Arabia': 'en',
  'South Africa': 'en',
  'Turkey': 'en'
};

export function TopBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [globalOpen, setGlobalOpen] = useState(false);
  const { language, setLanguage, t, tData } = useLanguage();

  const nav = tData<any[]>('nav');
  const promos = tData<any>('promos');

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Logo/>
        <nav className={`mainnav ${mobileMenuOpen ? 'open' : ''}`}>
          {nav.slice(0, 9).map((n) => {
            const promo = promos[n.label];
            const isGrid = n.children && n.children.length > 6;
            
            return (
              <div 
                key={n.label} 
                className={`nav-item ${activeMenu === n.label ? 'mobile-active' : ''}`}
                onClick={() => setActiveMenu(activeMenu === n.label ? null : n.label)}
              >
                {n.label}<span className="chev">⌄</span>
                {n.children && (
                  <div className="megamenu megamenu-wide" onClick={(e) => e.stopPropagation()}>
                    <div className="mega-split">
                      <div className={isGrid ? 'mega-links-grid' : 'mega-links'}>
                        {n.children.map((c: string) => <a key={c} href="#">{c}</a>)}
                      </div>
                      {promo && (
                        <div className="mega-promo">
                          <h4>{promo.title}</h4>
                          <p>{promo.desc}</p>
                          <button className="cta-btn ghost">{promo.btn}</button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <div className="mobile-only-login">
            <div className="mobile-global-wrap">
              <button className="nav-global-btn" onClick={() => setGlobalOpen(!globalOpen)}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </button>
              {globalOpen && (
                <div className="mobile-global-list">
                  <div className="mobile-global-region-group">
                    <div className="mobile-global-region-header">{t('select_language') || 'Language'}</div>
                    <div className="mobile-lang-grid">
                      {[
                        { code: 'en', label: 'English' },
                        { code: 'es', label: 'Español' },
                        { code: 'zh', label: '中文' },
                        { code: 'de', label: 'Deutsch' },
                        { code: 'fr', label: 'Français' },
                        { code: 'ja', label: '日本語' }
                      ].map(l => (
                        <button 
                          key={l.code} 
                          className={`mobile-lang-btn-item ${language === l.code ? 'active' : ''}`}
                          onClick={() => setLanguage(l.code as any)}
                        >
                          {l.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  {REGIONS.map(r => (
                    <div key={r.region} className="mobile-global-region-group">
                      <div className="mobile-global-region-header">{r.region}</div>
                      {r.countries.map(c => (
                        <button 
                          key={c.name} 
                          className="mobile-global-item"
                          onClick={() => {
                            const target = COUNTRY_LANGS[c.name];
                            if (target) setLanguage(target);
                          }}
                        >
                          <span className={`fi fi-${c.code} global-flag`}></span> {c.name}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button className="cta-btn accent">{t('login')}</button>
          </div>
        </nav>
        <div className="topbar-actions">
          <div className="global-dropdown-wrap" onMouseEnter={() => setGlobalOpen(true)} onMouseLeave={() => setGlobalOpen(false)}>
            <button className="nav-global-btn" aria-label={t('select_region')}><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></button>
            {globalOpen && (
              <div className="global-dropdown">
                <div className="global-lang-selector-section">
                  <div className="global-lang-header">{t('select_language') || 'Language'}</div>
                  <div className="global-lang-grid">
                    {[
                      { code: 'en', label: 'English' },
                      { code: 'es', label: 'Español' },
                      { code: 'zh', label: '中文' },
                      { code: 'de', label: 'Deutsch' },
                      { code: 'fr', label: 'Français' },
                      { code: 'ja', label: '日本語' }
                    ].map(l => (
                      <button 
                        key={l.code} 
                        className={`global-lang-btn-item ${language === l.code ? 'active' : ''}`}
                        onClick={() => setLanguage(l.code as any)}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="global-divider" />
                <div className="global-regions-grid">
                  {REGIONS.map(r => (
                    <div key={r.region} className="global-region-col">
                      <div className="global-region-name">{r.region}</div>
                      <div className="global-country-list">
                        {r.countries.map(c => (
                          <button 
                            key={c.name} 
                            className="global-country-btn"
                            onClick={() => {
                              const target = COUNTRY_LANGS[c.name];
                              if (target) setLanguage(target);
                            }}
                          >
                            <span className={`fi fi-${c.code} global-flag`}></span> {c.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <button className="cta-btn topbar-cta">{t('login')}</button>
        </div>
        <button className="mobile-menu-btn" aria-label="Toggle Menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
}
