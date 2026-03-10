import React, { useState } from 'react';
import { PRODUCTS } from '../data';

export default function ProductDetails({ productId, onAdd, onNav }) {
  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState(0);
  const [size, setSize] = useState(0);
  const [thumb, setThumb] = useState(0);
  const [added, setAdded] = useState(false);

  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const disc = product.originalPrice ? Math.round((1 - product.price / product.originalPrice)*100) : null;
  const thumbs = [product.emoji, '📦', '✨', '🔍'];
  const colors = ['#1a1a1a','#8B7355','#C0C0C0','#2C3E50'];
  const sizes = product.category === 'Fashion' ? ['XS','S','M','L','XL'] : null;

  const buy = () => {
    for (let i = 0; i < qty; i++) onAdd(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <main id="main-content">
      <div className="section">
        <div className="container">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ display:'flex', gap:10, alignItems:'center', marginBottom:'var(--s5)', fontFamily:'var(--font-mono)', fontSize:'var(--text-xxs)', letterSpacing:'0.15em', color:'var(--smoke)', textTransform:'uppercase' }}>
            <button style={{ color:'var(--gold)' }} onClick={() => onNav('home')}>Home</button>
            <span style={{ color:'var(--charcoal)' }}>—</span>
            <button style={{ color:'var(--gold)' }} onClick={() => onNav('shop')}>Collections</button>
            <span style={{ color:'var(--charcoal)' }}>—</span>
            <button style={{ color:'var(--gold)' }} onClick={() => onNav('shop')}>{product.category}</button>
            <span style={{ color:'var(--charcoal)' }}>—</span>
            <span style={{ color:'var(--mist)' }}>{product.name}</span>
          </nav>

          <div className="pdp-grid">
            {/* Gallery */}
            <div>
              <div className="pdp-gallery-main">
                <span className="pdp-emoji">{product.emoji}</span>
                {product.badge && (
                  <span className={`prod-badge prod-badge-${product.badgeType}`}
                    style={{ position:'absolute', top:'var(--s2)', left:'var(--s2)', zIndex:2 }}>
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="pdp-thumbs">
                {thumbs.map((t,i) => (
                  <button key={i} className={`pdp-thumb${thumb===i?' on':''}`}
                    onClick={() => setThumb(i)} aria-label={`Image ${i+1}`} aria-pressed={thumb===i}>
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="pdp-brand">{product.category}</div>
              <h1 className="pdp-title">{product.name}</h1>

              {/* Rating */}
              <div style={{ display:'flex', alignItems:'center', gap:'var(--s2)', marginBottom:'var(--s3)' }}>
                <div style={{ display:'flex', gap:2 }}>
                  {[1,2,3,4,5].map(i => (
                    <span key={i} style={{ color:'var(--gold)', fontSize:16, opacity: i <= Math.round(product.rating) ? 1 : 0.25 }}>★</span>
                  ))}
                </div>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:'var(--text-xs)', color:'var(--smoke)', letterSpacing:'0.1em' }}>
                  {product.rating} · {product.reviews.toLocaleString()} reviews
                </span>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:'var(--text-xxs)', color:'#4ade80', letterSpacing:'0.1em', marginLeft:'auto' }}>
                  ✦ In Stock
                </span>
              </div>

              {/* Price */}
              <div className="pdp-meta">
                <div>
                  <div className="pdp-price">${product.price}</div>
                  {product.originalPrice && (
                    <div className="pdp-price-was">${product.originalPrice}</div>
                  )}
                </div>
                {disc && <span className="pdp-save">Save {disc}%</span>}
              </div>

              <p className="pdp-desc">{product.description}</p>

              {/* Colors */}
              <div style={{ marginBottom:'var(--s3)' }}>
                <div className="pdp-opt-label">Finish — <span style={{ color:'var(--ivory)', textTransform:'capitalize' }}>
                  {['Obsidian','Cognac','Silver','Marine'][color]}
                </span></div>
                <div className="pdp-colors">
                  {colors.map((c,i) => (
                    <button key={i} className={`pdp-color${color===i?' on':''}`}
                      style={{ background:c }}
                      onClick={() => setColor(i)}
                      aria-label={['Obsidian','Cognac','Silver','Marine'][i]}
                      aria-pressed={color===i} />
                  ))}
                </div>
              </div>

              {/* Sizes */}
              {sizes && (
                <div style={{ marginBottom:'var(--s3)' }}>
                  <div className="pdp-opt-label">Size — <span style={{ color:'var(--ivory)' }}>{sizes[size]}</span></div>
                  <div className="pdp-sizes">
                    {sizes.map((s,i) => (
                      <button key={i} className={`pdp-size${size===i?' on':''}`}
                        onClick={() => setSize(i)} aria-pressed={size===i}>{s}</button>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="pdp-actions">
                <div className="pdp-qty">
                  <button className="qty-btn" onClick={() => setQty(q => Math.max(1,q-1))} disabled={qty<=1}>−</button>
                  <span className="qty-num">{qty}</span>
                  <button className="qty-btn" onClick={() => setQty(q => q+1)}>+</button>
                </div>
                <button className="pdp-buy" onClick={buy} aria-live="polite">
                  <span>{added ? '✦ Added to Bag' : `Add to Bag — $${(product.price*qty).toFixed(2)}`}</span>
                </button>
                <button className="pdp-wish" aria-label="Save to wishlist">♡</button>
              </div>

              {/* Guarantees */}
              <div className="pdp-guarantee">
                {[
                  { ico:'🚢', text:<><strong>Complimentary shipping</strong> on orders over $150</> },
                  { ico:'↩️', text:<><strong>60-day returns</strong> — pristine condition</> },
                  { ico:'🔐', text:<><strong>Secure checkout</strong> — fully encrypted</> },
                  { ico:'✦', text:<><strong>Authenticity guarantee</strong> on every piece</> },
                ].map(({ico,text},i) => (
                  <div key={i} className="pdp-g-row">
                    <span className="pdp-g-ico">{ico}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div style={{ marginTop:'var(--s16)' }}>
              <div className="sec-header">
                <span className="eyebrow" style={{ display:'block', marginBottom:12 }}>More to Consider</span>
                <h2>From the Same Collection</h2>
              </div>
              <div className="grid-4">
                {related.map((p,i) => (
                  <article key={p.id} className="product-card"
                    onClick={() => onNav('product', p.id)}
                    style={{ cursor:'pointer', animation:`fadeUp 0.5s ease both`, animationDelay:`${i*60}ms` }}>
                    <div className="product-image">
                      <div className="product-image-inner">
                        <span className="product-emoji-lg">{p.emoji}</span>
                      </div>
                    </div>
                    <div className="product-body">
                      <div className="product-cat">{p.category}</div>
                      <h3 className="product-name">{p.name}</h3>
                      <div className="product-footer">
                        <span className="prod-price">${p.price}</span>
                        <button className="prod-add-btn"
                          onClick={e => { e.stopPropagation(); onAdd(p); }}
                          aria-label={`Add ${p.name}`}>+</button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
