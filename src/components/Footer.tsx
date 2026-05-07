import { DSTELLAR_DATA as D } from '@/lib/data';
import Image from 'next/image';

export function Footer() {
  const cols = [
    { title: 'Industries', items: D.industries.slice(0,8).map(i=>i.name) },
    { title: 'SAP Consulting', items: D.sapConsulting.slice(0,7).map(s=>s.t) },
    { title: 'Services', items: D.servicesSupport.slice(0,7).map(s=>s.t) },
    { title: 'Company', items: ['Who We Are','Leadership','Careers','Partners','Community','Investor Relations','Press'] },
  ];
  return (
    <footer>
      <div className="foot-inner">
        <div className="foot-grid">
          <div>
            <div className="foot-cta">Let's build what's next in SAP.</div>
            <button className="cta-btn accent">Start a conversation →</button>
            <div style={{marginTop: 40}}>
              <div style={{ display: 'flex', alignItems: 'center', marginLeft: '-10px' }}>
                <Image src="/assets/logo-white.webp" alt="Dstellar Footer Logo" width={250} height={65} style={{ objectFit: 'contain', width: '250px', height: 'auto' }} />
              </div>
              <div className="mono" style={{marginTop: 16, opacity: 0.6}}>Toronto · Madrid · Singapore · Austin</div>
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
          <span>© 2026 Dstellar Software Solutions</span>
          <span>Privacy · Terms · Security · Compliance</span>
        </div>
      </div>
    </footer>
  );
}
