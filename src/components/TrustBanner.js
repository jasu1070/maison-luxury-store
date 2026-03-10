import React from 'react';
import { TRUST } from '../data';

export default function TrustBanner() {
  return (
    <section className="trust-strip" aria-label="Our promises">
      <div className="grid-trust">
        {TRUST.map((t, i) => (
          <div key={t.id} className="trust-item"
            style={{ animation: `fadeUp 0.5s ease both`, animationDelay: `${i * 100}ms` }}>
            <div className="trust-icon" role="img" aria-label={t.title}>{t.icon}</div>
            <div className="trust-text">
              <h4>{t.title}</h4>
              <p>{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
