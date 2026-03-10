import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, onAdd, onNav }) {
  return (
    <div className="grid-4">
      {products.map((p, i) => (
        <div key={p.id} style={{ animation: `fadeUp 0.5s ease both`, animationDelay: `${i * 60}ms` }}>
          <ProductCard product={p} onAdd={onAdd} onNav={onNav} />
        </div>
      ))}
    </div>
  );
}
