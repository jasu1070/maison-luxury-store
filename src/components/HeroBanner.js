import React from 'react';

export default function HeroBanner({ onNav }) {
  return (
    <section className="hero" aria-label="Hero">
      {/* Ambient */}
      <div className="hero-ambient" aria-hidden="true">
        <div className="hero-ambient-1" />
        <div className="hero-ambient-2" />
        <div className="hero-grid-lines" />
      </div>

      <div className="container" style={{ width: '100%' }}>
        <div className="hero-inner">

          {/* Left — Content */}
          <div className="hero-content">
            <div className="hero-pre">
              <div className="hero-pre-line" />
              <span className="eyebrow">New Collection · SS 2025</span>
            </div>

            <h1 className="hero-title">
              <span className="hero-title-block delay-1">
                <span className="hero-title-inner">The Art of</span>
              </span>
              <span className="hero-title-block delay-2">
                <span className="hero-title-inner"><em>Living</em></span>
              </span>
              <span className="hero-title-block delay-3">
                <span className="hero-title-inner">Beautifully</span>
              </span>
            </h1>

            <p className="hero-desc">
              Curated objects for those who appreciate the extraordinary.
              Each piece selected for its craft, provenance, and enduring worth.
            </p>

            <div className="hero-cta">
              <button className="btn btn-primary" onClick={() => onNav('shop')}>
                <span>Explore Collections</span>
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <button className="btn btn-ghost" onClick={() => onNav('home')}>
                Our Story
              </button>
            </div>

            <div className="hero-stats-row">
              {[
                { num: '12K+', label: 'Curated Items' },
                { num: '98%', label: 'Satisfaction' },
                { num: '48h', label: 'Express Delivery' },
              ].map((s, i) => (
                <React.Fragment key={s.label}>
                  {i > 0 && <div className="hero-stat-div" />}
                  <div className="hero-stat">
                    <div className="hero-stat-num">{s.num}</div>
                    <div className="hero-stat-label">{s.label}</div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right — Visual showcase */}
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-showcase">
              <div className="hero-showcase-main">
                <div className="hero-product-grid">
                  {[
                    { emoji:'🎧', name:'Audio', price:'$349' },
                    { emoji:'⌚', name:'Time', price:'$529' },
                    { emoji:'✒️', name:'Writing', price:'$185' },
                    { emoji:'🧥', name:'Fashion', price:'$395' },
                  ].map((p, i) => (
                    <div key={i} className="hero-product-cell">
                      <span className="hero-product-emoji">{p.emoji}</span>
                      <span className="hero-cell-name">{p.name}</span>
                      <span className="hero-cell-price">{p.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <div className="hero-float-card hero-card-top">
                <span className="hero-float-label">Today's Offer</span>
                <span className="hero-float-value">40% Off</span>
              </div>
              <div className="hero-float-card hero-card-bot">
                <span className="hero-float-label">Shipping</span>
                <span className="hero-float-value">Free</span>
              </div>

              {/* Vertical text */}
              <span className="hero-vertical-text">Est. 2019 · Paris · London · Tokyo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
