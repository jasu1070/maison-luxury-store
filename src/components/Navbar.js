import React, { useState, useEffect } from 'react';

const LINKS = [
  { label:'Collections', page:'shop' },
  { label:'Maison', page:'home' },
  { label:'Atelier', page:'shop' },
  { label:'Journal', page:'home' },
  { label:'Contact', page:'contact' },
];

export default function Navbar({ page, onNav, cartCount, onCart, onSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} aria-label="Main navigation">
        <div className="navbar-bg" />
        <div className="container">
          <div className="navbar-inner">

            {/* Logo */}
            <button className="navbar-logo" onClick={() => onNav('home')} aria-label="MAISON home">
              <div className="logo-emblem">
                <span className="logo-letter">M</span>
              </div>
              <div>
                <span className="logo-wordmark">Maison</span>
                <span className="logo-tagline">Curated Luxury</span>
              </div>
            </button>

            {/* Desktop nav */}
            <nav className="navbar-nav" aria-label="Site links">
              {LINKS.map(l => (
                <button
                  key={l.label}
                  className={`nav-link${page === l.page ? ' active' : ''}`}
                  onClick={() => {
                    if (l.label === 'Atelier') onNav('atelier');
                    else if (l.label === 'Journal') onNav('journal');
                    else onNav(l.page);
                  }}
                >
                  {l.label}
                </button>
              ))}
            </nav>

            {/* Actions */}
            <div className="navbar-actions">
              <button className="nav-action" onClick={onSearch} aria-label="Search" title="Search (Ctrl+K)">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
              </button>
              <button className="nav-action" aria-label="Account">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </button>
              <button className="cart-pill" onClick={onCart} aria-label={`Bag — ${cartCount} items`}>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
                <span>Bag</span>
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
              </button>

              <button
                className={`hamburger${open ? ' open' : ''}`}
                onClick={() => setOpen(o => !o)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
              >
                <span/><span/><span/>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mobile-menu" role="dialog" aria-label="Mobile navigation">
          {LINKS.map(l => (
            <button key={l.label} className="mobile-menu-link"
              onClick={() => { onNav(l.page); setOpen(false); }}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
