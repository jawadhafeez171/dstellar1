"use client";
import { useState } from 'react';
import { DSTELLAR_DATA as D } from '@/lib/data';
import { Logo } from './Shared';

const PROMOS: Record<string, { title: string, desc: string, btn: string }> = {
  'Industries': { title: '19+ Verticals', desc: 'Deep industry expertise across the globe.', btn: 'Explore All' },
  'Products': { title: 'DSTELLAR Suite', desc: 'Explore our 22+ custom enterprise products.', btn: 'View Suite' },
  'SAP Consulting': { title: 'SAP Experts', desc: 'S/4HANA migrations, FICO, and end-to-end support.', btn: 'Book Assessment' },
  'Services & Support': { title: '24/7 Support', desc: 'Premium AMS, AI, and cloud elasticity services.', btn: 'Get Support' },
  'Trainings': { title: 'Learning Hub', desc: 'Master SAP with Dstellar certified courses.', btn: 'View Courses' },
  'Partners': { title: 'Partner Network', desc: 'Join the global Dstellar partner ecosystem.', btn: 'Become a Partner' },
  'Careers': { title: 'Join Dstellar', desc: 'Build the future of enterprise software.', btn: 'View Openings' },
  'Community': { title: 'Dstellar Network', desc: 'Connect with 10k+ SAP experts globally.', btn: 'Join Forum' },
  'Discover Dstellar': { title: 'Our Story', desc: 'Discover the Dstellar way and our global impact.', btn: 'Learn More' },
};

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

export function TopBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [globalOpen, setGlobalOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Logo/>
        <nav className={`mainnav ${mobileMenuOpen ? 'open' : ''}`}>
          {D.nav.slice(0, 9).map((n) => {
            const promo = PROMOS[n.label];
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
                        {n.children.map((c) => <a key={c} href="#">{c}</a>)}
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
              <button className="nav-global-btn" onClick={() => setGlobalOpen(!globalOpen)}><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></button>
              {globalOpen && (
                <div className="mobile-global-list">
                  {REGIONS.map(r => (
                    <div key={r.region} className="mobile-global-region-group">
                      <div className="mobile-global-region-header">{r.region}</div>
                      {r.countries.map(c => (
                        <button key={c.name} className="mobile-global-item">
                          <span className={`fi fi-${c.code} global-flag`}></span> {c.name}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button className="cta-btn accent">Login</button>
          </div>
        </nav>
        <div className="topbar-actions">
          <div className="global-dropdown-wrap" onMouseEnter={() => setGlobalOpen(true)} onMouseLeave={() => setGlobalOpen(false)}>
            <button className="nav-global-btn" aria-label="Select Region"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></button>
            {globalOpen && (
              <div className="global-dropdown">
                {REGIONS.map(r => (
                  <div key={r.region} className="global-region-col">
                    <div className="global-region-name">{r.region}</div>
                    <div className="global-country-list">
                      {r.countries.map(c => (
                        <button key={c.name} className="global-country-btn">
                          <span className={`fi fi-${c.code} global-flag`}></span> {c.name}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <button className="cta-btn topbar-cta">Login</button>
        </div>
        <button className="mobile-menu-btn" aria-label="Toggle Menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
}
