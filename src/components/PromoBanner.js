import React, { useState, useEffect } from 'react';

function useCountdown(end) {
  const [t, setT] = useState({});
  useEffect(() => {
    const calc = () => {
      const d = end - Date.now();
      if (d <= 0) return { d:0, h:0, m:0, s:0 };
      return { d: Math.floor(d/86400000), h: Math.floor((d%86400000)/3600000),
               m: Math.floor((d%3600000)/60000), s: Math.floor((d%60000)/1000) };
    };
    setT(calc());
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, [end]);
  return t;
}

const p = n => String(n||0).padStart(2,'0');

export default function PromoBanner({ onNav }) {
  const [end] = useState(() => Date.now() + 4*24*3600*1000);
  const { d, h, m, s } = useCountdown(end);

  return (
    <div className="container">
      <section className="promo" aria-label="Sale promotion">
        <div className="promo-grid-lines" aria-hidden="true" />
        <div className="promo-content">
          <div className="promo-tag">
            <span className="promo-tag-dot" />
            Limited Time Offer
          </div>
          <h2>
            The Grand<br/>
            <em>Summer Sale</em>
          </h2>
          <p className="promo-sub">
            Up to 40% on our most celebrated pieces. For a limited time only.
          </p>
          <div className="promo-timer" aria-label="Time remaining">
            {[{v:p(d),l:'Days'},{v:p(h),l:'Hours'},{v:p(m),l:'Mins'},{v:p(s),l:'Secs'}].map(({v,l}) => (
              <div key={l} className="timer-block">
                <span className="timer-num">{v}</span>
                <span className="timer-label">{l}</span>
              </div>
            ))}
          </div>
          <button className="btn btn-primary" onClick={() => onNav('shop')}>
            <span>Shop the Sale</span>
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
        <div className="promo-visual" aria-hidden="true">🛍️</div>
      </section>
    </div>
  );
}
