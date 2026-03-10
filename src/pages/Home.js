import React from 'react';
import HeroBanner from '../components/HeroBanner';
import TrustBanner from '../components/TrustBanner';
import ProductGrid from '../components/ProductGrid';
import CategorySection from '../components/CategorySection';
import PromoBanner from '../components/PromoBanner';
import Newsletter from '../components/Newsletter';
import { PRODUCTS, CATEGORIES } from '../data';

export default function Home({ onAdd, onNav }) {
  return (
    <main id="main-content">
      <HeroBanner onNav={onNav} />
      <TrustBanner />

      {/* Featured */}
      <section className="section" aria-labelledby="feat-heading">
        <div className="container">
          <div className="sec-header">
            <span className="eyebrow" style={{ display:'block', marginBottom:12 }}>Featured</span>
            <span className="rule" style={{ marginBottom:'var(--s2)', display:'block' }} />
            <h2 id="feat-heading">Considered Selections</h2>
            <p>Each piece chosen for its craft, quality and lasting relevance</p>
          </div>
          <ProductGrid products={PRODUCTS} onAdd={onAdd} onNav={onNav} />
          <div className="view-all-wrap">
            <button className="btn btn-ghost" onClick={() => onNav('shop')}>
              View All Collections
            </button>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container"><div className="rule-full" /></div>

      <CategorySection categories={CATEGORIES} onNav={onNav} />

      <PromoBanner onNav={onNav} />

      {/* Editorial strip */}
      <section className="section-sm" aria-label="Brand values">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1px', background:'var(--border)' }}>
            {[
              { num:'01', title:'Provenance', desc:'Every piece is traceable to its origin — we know the hands that made it.' },
              { num:'02', title:'Craft', desc:'We select only those things made with intention, skill, and lasting materials.' },
              { num:'03', title:'Service', desc:'White-glove concierge support from first enquiry to final delivery.' },
            ].map(item => (
              <div key={item.num} style={{ background:'var(--noir-2)', padding:'var(--s6)' }}>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:'var(--text-xxs)', color:'var(--gold)', letterSpacing:'0.3em', marginBottom:'var(--s2)' }}>{item.num}</div>
                <h4 style={{ fontFamily:'var(--font-display)', fontSize:'var(--text-xl)', fontWeight:300, color:'var(--ivory)', marginBottom:'var(--s1)' }}>{item.title}</h4>
                <p style={{ color:'var(--smoke)', fontWeight:300, fontSize:'var(--text-sm)', lineHeight:1.8 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <div style={{ height:'var(--s10)' }} />
    </main>
  );
}
