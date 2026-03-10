import React from 'react';

export default function CartDrawer({ open, onClose, items, onQty, onRemove, onNav }) {
  if (!open) return null;
  const sub = items.reduce((a, i) => a + i.price * i.qty, 0);
  const ship = sub >= 150 ? 0 : 18;
  const total = sub + ship;

  return (
    <>
      <div className="drawer-overlay" onClick={onClose} aria-hidden="true" />
      <aside className="cart-drawer" role="dialog" aria-modal="true" aria-label="Shopping bag">
        <div className="drawer-head">
          <h2 className="drawer-title">
            Your Bag
            {items.length > 0 && (
              <span style={{ fontFamily:'var(--font-mono)', fontSize:'var(--text-xs)', color:'var(--gold)', marginLeft:12, letterSpacing:'0.1em' }}>
                {items.length} {items.length === 1 ? 'piece' : 'pieces'}
              </span>
            )}
          </h2>
          <button className="drawer-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        <div className="drawer-body">
          {items.length === 0 ? (
            <div className="drawer-empty">
              <div className="drawer-empty-icon">🛍</div>
              <h3>Your bag is empty</h3>
              <p>Add something exceptional.</p>
              <button className="btn btn-ghost" style={{ marginTop:16 }}
                onClick={() => { onClose(); onNav('shop'); }}>
                Explore Collections
              </button>
            </div>
          ) : items.map(item => (
            <div key={item.id} className="cart-line">
              <div className="cart-line-img">{item.emoji}</div>
              <div className="cart-line-info">
                <div className="cart-line-name">{item.name}</div>
                <div className="cart-line-cat">{item.category}</div>
                <div className="cart-qty">
                  <button className="qty-btn" onClick={() => onQty(item.id, item.qty-1)} aria-label="Less">−</button>
                  <span className="qty-num">{item.qty}</span>
                  <button className="qty-btn" onClick={() => onQty(item.id, item.qty+1)} aria-label="More">+</button>
                </div>
              </div>
              <div className="cart-line-right">
                <span className="cart-line-price">${(item.price*item.qty).toFixed(2)}</span>
                <button className="cart-remove" onClick={() => onRemove(item.id)} aria-label={`Remove ${item.name}`}>Remove</button>
              </div>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <div className="drawer-foot">
            <div className="drawer-subtotal">
              <span>Subtotal</span><span>${sub.toFixed(2)}</span>
            </div>
            <div className="drawer-subtotal" style={{ marginBottom:'var(--s2)' }}>
              <span>Shipping</span>
              <span>{ship === 0 ? 'Complimentary' : `$${ship.toFixed(2)}`}</span>
            </div>
            <div className="drawer-total">
              <span className="drawer-total-label">Total</span>
              <span className="drawer-total-val">${total.toFixed(2)}</span>
            </div>
            <button className="drawer-checkout" onClick={() => { onClose(); onNav('cart'); }}>
              Proceed to Checkout
            </button>
            <button className="drawer-continue" onClick={onClose}>
              ← Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
