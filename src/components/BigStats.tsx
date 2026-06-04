"use client";

import { motion } from 'framer-motion';

export function BigStats() {
  const stats = [
    ['13', 'years serving enterprises'],
    ['18', 'industries, one partner'],
    ['40+','SAP modules delivered'],
    ['24×7','AMS support coverage'],
  ];
  return (
    <section className="section-pad">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="section-eyebrow"><span>§ 05</span><span>Why Dstellar</span><span className="line"/></div>
        <h2 className="section-title">Proof, <em>in the numbers.</em></h2>
      </motion.div>
      <div className="big-stats">
        {stats.map(([n,l], i) => (
          <motion.div 
            key={l} 
            className="stat-cell"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
          >
            <div className="n">{n}</div>
            <div className="l">{l}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
