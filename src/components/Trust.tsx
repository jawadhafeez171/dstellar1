export function Trust() {
  const logos = ['SAP Gold Partner','ISO 27001','AWS Select','Microsoft Cloud','Oracle Netsuite','Google Cloud','Dstellar Certified','SOC 2 Type II'];
  const double = [...logos, ...logos];
  return (
    <section className="trust">
      <div className="trust-inner">
        <span className="trust-label">Certified · Partnered</span>
        <div className="trust-marquee">
          <div className="trust-track">
            {double.map((l,i) => <span key={i} className="trust-item">{l} ✦</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
