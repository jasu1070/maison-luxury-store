import React from 'react';

function Stars({ rating }) {
  return (
    <div className="stars">
      {[1,2,3,4,5].map(i => (
        <span key={i} className={`star${i <= Math.round(rating) ? ' filled' : ''}`}>★</span>
      ))}
    </div>
  );
}

export default function ProductCard({ product, onAdd, onNav }) {
  const disc = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100) : null;

  return (
    <article className="product-card" onClick={() => onNav('product', product.id)} aria-label={product.name}>
      {/* Image */}
      <div className="product-image">
        <div className="product-image-inner">
          <span className="product-emoji-lg">{product.emoji}</span>
        </div>

        {/* Badges */}
        <div className="product-badge-wrap">
          {product.badge && (
            <span className={`prod-badge prod-badge-${product.badgeType}`}>{product.badge}</span>
          )}
          {disc && <span className="prod-badge prod-badge-sale">−{disc}%</span>}
        </div>

        {/* Hover actions */}
        <div className="product-actions">
          <button className="prod-action-btn" onClick={e => e.stopPropagation()} aria-label="Wishlist" title="Save">♡</button>
          <button className="prod-action-btn" onClick={e => { e.stopPropagation(); onNav('product', product.id); }} aria-label="Quick view">
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="product-body">
        <div className="product-cat">{product.category}</div>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
          <Stars rating={product.rating} />
          <span className="review-ct">({product.reviews.toLocaleString()})</span>
        </div>
        <div className="product-footer">
          <div className="product-price-wrap">
            <span className="prod-price">${product.price}</span>
            {product.originalPrice && (
              <span className="prod-price-was">${product.originalPrice}</span>
            )}
          </div>
          <button
            className="prod-add-btn"
            onClick={e => { e.stopPropagation(); onAdd(product); }}
            aria-label={`Add ${product.name} to bag`}
            title="Add to bag"
          >+</button>
        </div>
      </div>
    </article>
  );
}
