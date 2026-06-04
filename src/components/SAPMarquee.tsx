import { DSTELLAR_DATA as D } from '@/lib/data';

export function SAPMarquee() {
  const modules = D.nav.find(n => n.label==='SAP Consulting')?.children || [];
  const track = [...modules, ...modules];
  return (
    <section className="sap-strip">
      <div className="inner">
        <div className="section-eyebrow" style={{color:'rgba(255,255,255,0.6)'}}>
          <span>§ 04</span><span>SAP Modules delivered</span>
          <span className="line" style={{background:'rgba(255,255,255,0.15)'}}/>
        </div>
        <h2>Every SAP module you need. <span style={{color:'var(--accent-hi)'}}>Under one roof.</span></h2>
      </div>
      <div className="sap-marquee">
        <div className="sap-track">
          {track.map((m,i) => <span key={i} className="sap-pill">{m}</span>)}
        </div>
      </div>
      <div className="sap-marquee" style={{marginTop: 12}}>
        <div className="sap-track" style={{animationDirection:'reverse', animationDuration:'75s'}}>
          {[...D.servicesSupport, ...D.servicesSupport].map((m,i) => <span key={i} className="sap-pill">{m.t}</span>)}
        </div>
      </div>
    </section>
  );
}
