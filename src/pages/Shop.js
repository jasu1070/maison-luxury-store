import React, { useState, useMemo } from 'react';
import ProductGrid from '../components/ProductGrid';
import { PRODUCTS, CATEGORIES } from '../data';

const SORTS = [
  { v:'featured', l:'Featured' },
  { v:'price-asc', l:'Price: Low to High' },
  { v:'price-desc', l:'Price: High to Low' },
  { v:'rating', l:'Highest Rated' },
];

export default function Shop({ filter, onAdd, onNav }) {
  const [cats, setCats] = useState([]);
  const [sort, setSort] = useState('featured');
  const [maxPrice, setMaxPrice] = useState(700);

  const toggle = c => setCats(p => p.includes(c) ? p.filter(x => x !== c) : [...p, c]);

  const products = useMemo(() => {
    let list = PRODUCTS.filter(p => p.price <= maxPrice);
    if (cats.length) list = list.filter(p => cats.includes(p.category));
    
    // Collection filters
    if (filter === 'new-arrivals') list = list.filter(p => p.badge === 'New');
    if (filter === 'best-sellers') list = list.filter(p => p.badge === 'Best Seller' || p.badge === 'Popular');
    if (filter === 'the-sale') list = list.filter(p => p.badgeType === 'sale');

    if (sort === 'price-asc') list = [...list].sort((a,b) => a.price - b.price);
    if (sort === 'price-desc') list = [...list].sort((a,b) => b.price - a.price);
    if (sort === 'rating') list = [...list].sort((a,b) => b.rating - a.rating);
    return list;
  }, [cats, sort, maxPrice, filter]);

  return (
    <main id="main-content">
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow" style={{ display:'block', marginBottom:12 }}>Collections</span>
          <h1 style={{ fontFamily:'var(--font-display)', fontSize:'var(--text-4xl)', fontWeight:300, color:'var(--ivory)', letterSpacing:'-0.01em', marginBottom:'var(--s1)' }}>
            {filter ? filter.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'All Pieces'}
          </h1>
          <p style={{ color:'var(--smoke)', fontWeight:300 }}>
            {PRODUCTS.length} carefully curated objects
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="shop-layout">

            {/* Sidebar */}
            <aside aria-label="Filters">
              <div className="sidebar-sticky">
                {/* Category */}
                <div className="filter-card">
                  <div className="filter-card-head">
                    <span className="filter-card-title">Category</span>
                    {cats.length > 0 && (
                      <button style={{ fontFamily:'var(--font-mono)', fontSize:'9px', color:'var(--gold)', letterSpacing:'0.15em', textTransform:'uppercase' }}
                        onClick={() => setCats([])}>Clear</button>
                    )}
                  </div>
                  <div className="filter-card-body">
                    {CATEGORIES.map(c => (
                      <div key={c.id} className="filter-opt"
                        onClick={() => toggle(c.name)}
                        role="checkbox" aria-checked={cats.includes(c.name)} tabIndex={0}
                        onKeyDown={e => e.key === 'Enter' && toggle(c.name)}>
                        <div className={`fbox${cats.includes(c.name) ? ' on' : ''}`} />
                        <span>{c.emoji} {c.name}</span>
                        <span className="filter-ct">{c.count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="filter-card">
                  <div className="filter-card-head">
                    <span className="filter-card-title">Price</span>
                  </div>
                  <div className="filter-card-body">
                    <input type="range" className="price-slider"
                      min={0} max={800} value={maxPrice}
                      onChange={e => setMaxPrice(Number(e.target.value))}
                      aria-label="Maximum price" />
                    <div className="price-range-labels">
                      <span>$0</span>
                      <span style={{ color:'var(--gold)' }}>Up to ${maxPrice}</span>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="filter-card">
                  <div className="filter-card-head">
                    <span className="filter-card-title">Min Rating</span>
                  </div>
                  <div className="filter-card-body">
                    {[4.8, 4.5, 4.0].map(r => (
                      <div key={r} className="filter-opt" role="button" tabIndex={0}>
                        <div className="fbox" />
                        <span style={{ color:'var(--gold)', fontSize:'var(--text-sm)', letterSpacing:'0.05em' }}>
                          {'★'.repeat(Math.floor(r))} {r}+
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main */}
            <div>
              <div className="shop-toolbar">
                <p className="shop-count">
                  Showing {products.length} of {PRODUCTS.length} pieces
                  {cats.length > 0 && ` — ${cats.join(', ')}`}
                </p>
                <select className="shop-sort" value={sort}
                  onChange={e => setSort(e.target.value)} aria-label="Sort by">
                  {SORTS.map(s => <option key={s.v} value={s.v}>{s.l}</option>)}
                </select>
              </div>

              {products.length > 0 ? (
                <ProductGrid products={products} onAdd={onAdd} onNav={onNav} />
              ) : (
                <div style={{ textAlign:'center', padding:'var(--s12) 0' }}>
                  <div style={{ fontSize:60, marginBottom:'var(--s2)', opacity:.3, filter:'grayscale(1)' }}>🔍</div>
                  <h3 style={{ fontFamily:'var(--font-display)', fontWeight:300, color:'var(--ivory)', marginBottom:'var(--s1)' }}>Nothing found</h3>
                  <p style={{ color:'var(--smoke)', fontWeight:300, marginBottom:'var(--s4)' }}>Try adjusting your filters</p>
                  <button className="btn btn-ghost" onClick={() => { setCats([]); setMaxPrice(800); }}>
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
