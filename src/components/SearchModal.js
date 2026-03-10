import React, { useState, useEffect, useRef } from 'react';
import { PRODUCTS } from '../data';

const TRENDING = ['Headphones', 'Leather', 'Espresso', 'Watch', 'Pen'];

export default function SearchModal({ open, onClose, onNav }) {
  const [q, setQ] = useState('');
  const ref = useRef(null);

  const results = q.length > 1
    ? PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(q.toLowerCase()) ||
        p.category.toLowerCase().includes(q.toLowerCase())
      ).slice(0, 5)
    : [];

  useEffect(() => {
    if (open) setTimeout(() => ref.current?.focus(), 80);
    else setQ('');
  }, [open]);

  useEffect(() => {
    const fn = e => { if (e.key === 'Escape') onClose(); };
    if (open) window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="search-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Search">
      <div className="search-box" onClick={e => e.stopPropagation()}>
        <div className="search-inner">
          <div className="search-row">
            <span className="search-ico" aria-hidden="true">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </span>
            <input ref={ref} type="search" className="search-field"
              placeholder="Search the collection…" value={q}
              onChange={e => setQ(e.target.value)} aria-label="Search" autoComplete="off" />
            <button className="search-esc" onClick={onClose}>ESC</button>
          </div>

          {results.length > 0 ? (
            <div className="search-results" role="listbox">
              {results.map(p => (
                <div key={p.id} className="search-result" role="option" tabIndex={0}
                  onClick={() => { onClose(); onNav('product', p.id); }}
                  onKeyDown={e => e.key === 'Enter' && (onClose(), onNav('product', p.id))}>
                  <div className="search-result-img">{p.emoji}</div>
                  <div>
                    <div className="search-result-name">{p.name}</div>
                    <div className="search-result-cat">{p.category}</div>
                  </div>
                  <div className="search-result-price">${p.price}</div>
                </div>
              ))}
            </div>
          ) : q.length > 1 ? (
            <div style={{ padding:'var(--s5)', textAlign:'center', color:'var(--smoke)', fontFamily:'var(--font-mono)', fontSize:'var(--text-xs)', letterSpacing:'0.15em', textTransform:'uppercase' }}>
              No results for "{q}"
            </div>
          ) : null}

          <div className="search-tags">
            <span className="search-tags-label">Trending:</span>
            {TRENDING.map(t => (
              <button key={t} className="search-tag" onClick={() => setQ(t)}>{t}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
