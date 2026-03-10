import React, { useState } from 'react';

const SHOP = ['New Arrivals','Best Sellers','The Sale','Electronics','Fashion','Home & Living','Accessories'];
const HELP = ['Order Tracking','Returns & Repairs','Size Guide','Care Instructions','Contact Us','FAQs'];
const SOCIALS = [
  { label:'Instagram', icon:'◻' },
  { label:'Pinterest', icon:'◻' },
  { label:'Twitter', icon:'◻' },
  { label:'LinkedIn', icon:'◻' },
];

export default function Footer({ onNav }) {
  const [email, setEmail] = useState('');
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="grid-footer">

          {/* Brand */}
          <div>
            <div className="footer-logo-wrap">
              <div className="footer-logo-emblem">
                <span className="footer-logo-letter">M</span>
              </div>
              <span className="footer-logo-name">Maison</span>
            </div>
            <p className="footer-brand-text">
              Curating objects of enduring quality for those who appreciate
              the extraordinary. Since 2019.
            </p>
            <div className="footer-socials">
              {['𝕏','◈','f','in'].map((s,i) => (
                <button key={i} className="footer-soc" aria-label={`Social ${i+1}`}>{s}</button>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <div className="footer-col-title">Collections</div>
            <nav className="footer-links" aria-label="Shop navigation">
              {SHOP.map(l => (
                <button key={l} className="footer-link" onClick={() => onNav('shop')}>{l}</button>
              ))}
            </nav>
          </div>

          {/* Help */}
          <div>
            <div className="footer-col-title">Assistance</div>
            <nav className="footer-links" aria-label="Help links">
              {HELP.map(l => (
                <button key={l} className="footer-link">{l}</button>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <div className="footer-col-title">Inner Circle</div>
            <p style={{ color:'var(--smoke)', fontSize:'var(--text-sm)', fontWeight:300, lineHeight:1.8, marginBottom:'var(--s3)' }}>
              Private access to new arrivals and exclusive offers.
            </p>
            <input type="email" className="footer-nl-input" placeholder="Your email"
              value={email} onChange={e => setEmail(e.target.value)} aria-label="Newsletter signup" />
            <button className="footer-nl-btn" onClick={() => setEmail('')}>
              Subscribe
            </button>
            <div style={{ marginTop:'var(--s3)' }}>
              <div style={{ fontFamily:'var(--font-mono)', fontSize:'var(--text-xxs)', color:'var(--smoke)', letterSpacing:'0.15em', marginBottom:10, textTransform:'uppercase' }}>
                We accept
              </div>
              <div style={{ display:'flex', gap:6 }}>
                {['Visa','MC','Amex','PayPal'].map(p => (
                  <span key={p} style={{ fontFamily:'var(--font-mono)', fontSize:'9px', letterSpacing:'0.1em', color:'var(--smoke)', border:'1px solid var(--border)', padding:'3px 7px' }}>{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">© 2025 Maison. All rights reserved.</span>
          <nav className="footer-legal" aria-label="Legal">
            {['Privacy','Terms','Cookies'].map(l => (
              <button key={l} className="footer-legal-link">{l}</button>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
