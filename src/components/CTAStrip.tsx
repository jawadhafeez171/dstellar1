"use client";

import { motion } from 'framer-motion';

export function CTAStrip() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="cta-strip"
    >
      <div>
        <h2>Let's make SAP<br/>your advantage.</h2>
        <p>60-minute assessment. No slides. Straight answers from a senior SAP architect.</p>
      </div>
      <div className="actions">
        <button className="cta-btn">Book a call →</button>
        <button className="cta-btn ghost">See case studies</button>
      </div>
    </motion.div>
  );
}
