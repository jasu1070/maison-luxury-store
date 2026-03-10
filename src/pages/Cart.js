import React, { useState } from 'react';

export default function Cart({ items, onQty, onRemove, onNav }) {
  const [promo, setPromo] = useState('');
  const [applied, setApplied] = useState(false);

  const sub = items.reduce((a,i) => a + i.price*i.qty, 0);
  const disc = applied ? sub*0.1 : 0;
  const ship = sub >= 150 ? 0 : 18;
  const tax = (sub-disc)*0.08;
  const total = sub - disc + ship + tax;

  const applyPromo = () => {
    if (promo.toUpperCase() === 'MAISON10') setApplied(true);
  };

  if (items.length === 0) return (
    <main id="main-content">
      <div className="page-banner">
        <div className="container">
          <h1 style={{ fontFamily:'var(--font-display)', fontSize:'var(--text-4xl)', fontWeight:300, color:'var(--ivory)' }}>Your Bag</h1>
        </div>
      </div>
      <div className="section">
        <div className="container" style={{ textAlign:'center', paddingTop:'var(--s12)', paddingBottom:'var(--s12)' }}>
          <div style={{ fontSize:72, marginBottom:'var(--s3)', opacity:.2, filter:'grayscale(1)' }}>🛍</div>
          <h2 style={{ fontFamily:'var(--font-display)', fontWeight:300, marginBottom:'var(--s2)' }}>Your bag is empty</h2>
          <p style={{ color:'var(--smoke)', fontWeight:300, marginBottom:'var(--s5)' }}>Discover something exceptional.</p>
          <button className="btn btn-primary" onClick={() => onNav('shop')}>
            <span>Explore Collections</span>
          </button>
        </div>
      </div>
    </main>
  );

  return (
    <main id="main-content">
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow" style={{ display:'block', marginBottom:12 }}>Purchase</span>
          <h1 style={{ fontFamily:'var(--font-display)', fontSize:'var(--text-4xl)', fontWeight:300, color:'var(--ivory)' }}>Your Bag</h1>
          <p style={{ color:'var(--smoke)', fontWeight:300 }}>{items.length} piece{items.length !== 1 ? 's' : ''} selected</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="cart-grid">

            {/* Items */}
            <div>
              <div className="cart-table">
                <div className="cart-table-head">
                  <span>Item</span>
                  <span className="price-col">Price</span>
                  <span className="qty-col">Quantity</span>
                  <span>Total</span>
                </div>
                {items.map(item => (
                  <div key={item.id} className="cart-row">
                    <div className="cart-row-item">
                      <div className="cart-row-img">{item.emoji}</div>
                      <div>
                        <div className="cart-row-name">{item.name}</div>
                        <div className="cart-row-cat">{item.category}</div>
                        <button style={{ fontFamily:'var(--font-mono)', fontSize:'9px', color:'var(--smoke)', letterSpacing:'0.1em', textTransform:'uppercase', marginTop:6, transition:'color var(--t-fast)' }}
                          onClick={() => onRemove(item.id)}
                          onMouseOver={e => e.target.style.color='#D44'}
                          onMouseOut={e => e.target.style.color='var(--smoke)'}
                          aria-label={`Remove ${item.name}`}>
                          Remove
                        </button>
                      </div>
                    </div>
                    <span className="cart-row-price price-col">${item.price}</span>
                    <div className="qty-col" style={{ display:'flex', alignItems:'center', gap:10 }}>
                      <button className="qty-btn" onClick={() => onQty(item.id,item.qty-1)}>−</button>
                      <span className="qty-num">{item.qty}</span>
                      <button className="qty-btn" onClick={() => onQty(item.id,item.qty+1)}>+</button>
                    </div>
                    <span className="cart-row-total">${(item.price*item.qty).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop:'var(--s2)', display:'flex', justifyContent:'space-between' }}>
                <button className="btn-text" onClick={() => onNav('shop')}>← Continue Shopping</button>
                <button style={{ fontFamily:'var(--font-mono)', fontSize:'9px', color:'var(--smoke)', letterSpacing:'0.12em', textTransform:'uppercase' }}
                  onClick={() => items.forEach(i => onRemove(i.id))}>
                  Clear Bag
                </button>
              </div>
            </div>

            {/* Summary */}
            <div className="order-card">
              <div className="order-card-title">Order Summary</div>
              <div className="order-row"><span className="l">Subtotal ({items.length} items)</span><span className="r">${sub.toFixed(2)}</span></div>
              {applied && <div className="order-row"><span style={{ color:'var(--gold)', fontFamily:'var(--font-mono)', fontSize:'var(--text-xxs)', letterSpacing:'0.1em' }}>MAISON10 applied</span><span style={{ color:'var(--gold)' }}>−${disc.toFixed(2)}</span></div>}
              <div className="order-row"><span className="l">Shipping {ship===0&&<span style={{ color:'var(--gold)', fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.1em' }}> · Complimentary</span>}</span><span className="r">{ship===0?'Free':`$${ship.toFixed(2)}`}</span></div>
              <div className="order-row"><span className="l">Estimated Tax</span><span className="r">${tax.toFixed(2)}</span></div>
              <div className="order-total">
                <span className="l">Total</span>
                <span className="r">${total.toFixed(2)}</span>
              </div>

              {!applied ? (
                <div className="promo-row">
                  <input className="promo-in" placeholder="Promo code" value={promo}
                    onChange={e => setPromo(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && applyPromo()}
                    aria-label="Promo code" />
                  <button className="promo-btn" onClick={applyPromo}>Apply</button>
                </div>
              ) : (
                <div style={{ border:'1px solid var(--gold-border)', padding:'10px 14px', fontFamily:'var(--font-mono)', fontSize:'var(--text-xxs)', color:'var(--gold)', letterSpacing:'0.15em', margin:'var(--s2) 0' }}>
                  ✦ MAISON10 — 10% applied
                </div>
              )}

              <button className="drawer-checkout" style={{ marginBottom:'var(--s1)' }}>
                Proceed to Checkout
              </button>

              {!applied && (
                <p style={{ fontFamily:'var(--font-mono)', fontSize:9, color:'var(--smoke)', letterSpacing:'0.1em', textAlign:'center', marginTop:'var(--s1)' }}>
                  Use code <strong style={{ color:'var(--gold)' }}>MAISON10</strong> for 10% off
                </p>
              )}

              <div style={{ display:'flex', justifyContent:'center', gap:6, marginTop:'var(--s3)', paddingTop:'var(--s3)', borderTop:'1px solid var(--border)' }}>
                {['Visa','MC','Amex','PayPal'].map(p => (
                  <span key={p} style={{ fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.1em', color:'var(--smoke)', border:'1px solid var(--border)', padding:'3px 8px' }}>{p}</span>
                ))}
              </div>
              <p style={{ textAlign:'center', fontFamily:'var(--font-mono)', fontSize:9, color:'var(--smoke)', letterSpacing:'0.12em', marginTop:'var(--s1)' }}>
                🔐 SSL encrypted checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
