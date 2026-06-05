"use client";

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export function Products() {
  const { t, tData } = useLanguage();
  const products = tData<any[]>('products');

  return (
    <section className="section-pad" style={{ background: 'var(--paper-2)', maxWidth: 'none', paddingLeft: 0, paddingRight: 0, borderRadius: 0 }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 32px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="section-eyebrow">
            <span>§ 03</span>
            <span>{t('eyebrow_products')}</span>
            <span className="line" />
          </div>
          <h2 className="section-title">{t('title_products')}</h2>
        </motion.div>

        <div className="products-row">
          {products.map((g, i) => (
            <motion.div
              key={g.group}
              className="prod-group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mono">{g.group}</div>
              <h4>{g.items.length} {t('solutions')}</h4>
              <div className="prod-list">
                {g.items.map((it: string) => (
                  <div key={it} className="prod-item">
                    <span>{it}</span>
                    <span className="arr">→</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
