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

export function TopBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Logo/>
        <nav className={`mainnav ${mobileMenuOpen ? 'open' : ''}`}>
          {D.nav.slice(0, 9).map((n) => {
            const promo = PROMOS[n.label];
            const isGrid = n.children && n.children.length > 8;
            const limit = isGrid ? 10 : 5;
            
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
                        {n.children.slice(0, limit).map((c) => <a key={c} href="#">{c}</a>)}
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
        </nav>
        <button className="cta-btn topbar-cta">Login</button>
        <button className="mobile-menu-btn" aria-label="Toggle Menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
}
