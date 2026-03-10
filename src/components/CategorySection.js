import React from 'react';

function CategoryCard({ cat, onNav }) {
  return (
    <article
      className="cat-card"
      style={{ background: cat.bg }}
      onClick={() => onNav('shop')}
      role="button" tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onNav('shop')}
      aria-label={`Browse ${cat.name}`}
    >
      <div className="cat-bg">{cat.emoji}</div>
      <div className="cat-overlay" />
      <div className="cat-arrow">↗</div>
      <div className="cat-content">
        <div className="cat-sub">{cat.label}</div>
        <div className="cat-name">{cat.name}</div>
        <div className="cat-count">{cat.count} pieces</div>
      </div>
    </article>
  );
}

export default function CategorySection({ categories, onNav }) {
  return (
    <section className="section" aria-labelledby="cat-heading">
      <div className="container">
        <div className="sec-header sec-header-center">
          <span className="rule" />
          <span className="eyebrow" style={{ display: 'block', marginBottom: 12 }}>Collections</span>
          <h2 id="cat-heading">Shop by Category</h2>
          <p>From precision electronics to hand-crafted fashion — every category curated with intent</p>
        </div>
        <div className="grid-5">
          {categories.map((cat, i) => (
            <div key={cat.id} style={{ animation: `fadeUp 0.5s ease both`, animationDelay: `${i * 80}ms` }}>
              <CategoryCard cat={cat} onNav={onNav} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
