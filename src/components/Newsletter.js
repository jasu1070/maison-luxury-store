import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = e => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setDone(true); }, 900);
  };

  return (
    <div className="container">
      <section className="newsletter" aria-labelledby="nl-heading">
        <div className="newsletter-inner">
          <span className="eyebrow" style={{ display:'block', marginBottom: 12 }}>Inner Circle</span>
          <h2 id="nl-heading">Stay Ahead of the Curve</h2>
          <p className="newsletter-sub">
            Private access to new arrivals, exclusive offers, and editorial content
            — before anyone else.
          </p>

          {done ? (
            <div style={{ padding:'20px 32px', border:'1px solid var(--gold-border)', color:'var(--gold)', fontFamily:'var(--font-mono)', fontSize:'var(--text-xs)', letterSpacing:'0.15em', textTransform:'uppercase', animation:'scaleIn 0.3s ease' }}>
              ✦ Welcome to the Inner Circle
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={submit} noValidate>
              <label htmlFor="nl-email" className="sr-only">Email address</label>
              <input id="nl-email" type="email" className="newsletter-input"
                placeholder="Your email address" value={email}
                onChange={e => setEmail(e.target.value)} required />
              <button type="submit" className="newsletter-btn" disabled={loading}>
                {loading ? <span className="spinner" /> : 'Subscribe'}
              </button>
            </form>
          )}
          <p className="newsletter-note">No noise. Just signal. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
}
