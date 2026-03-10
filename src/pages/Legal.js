import React from 'react';

const POLICIES = {
  'privacy': {
    title: 'Privacy Policy',
    content: 'Your privacy is paramount. We use industry-standard encryption to protect your data and only share information necessary for order fulfillment.'
  },
  'terms': {
    title: 'Terms & Conditions',
    content: 'By using our site, you agree to our terms of service, which include our commitment to authenticity, intellectual property rights, and secure transactions.'
  },
  'cookies': {
    title: 'Cookie Policy',
    content: 'We use essential cookies to manage your session and bag. Optional cookies help us refine our collection based on your preferences.'
  }
};

export default function Legal({ category, onNav }) {
  const current = POLICIES[category] || POLICIES['privacy'];

  return (
    <main id="main-content">
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow" style={{ display:'block', marginBottom:12 }}>Legal</span>
          <h1 style={{ fontFamily:'var(--font-display)', fontSize:'var(--text-4xl)', fontWeight:300, color:'var(--ivory)', letterSpacing:'-0.01em', marginBottom:'var(--s1)' }}>
            {current.title}
          </h1>
          <p style={{ color:'var(--smoke)', fontWeight:300 }}>
            Our commitment to transparency and trust.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container" style={{ maxWidth:'800px' }}>
          <div style={{ display:'flex', gap:'var(--s4)', marginBottom:'var(--s10)', borderBottom:'1px solid var(--border)', paddingBottom:'var(--s2)' }}>
            {Object.keys(POLICIES).map(key => (
              <button key={key} 
                onClick={() => onNav('legal', key)}
                style={{ 
                  background:'none', 
                  border:'none', 
                  padding:'var(--s2) var(--s4)', 
                  fontFamily:'var(--font-mono)', 
                  fontSize:'var(--text-xxs)', 
                  letterSpacing:'0.15em', 
                  textTransform:'uppercase',
                  color: category === key ? 'var(--gold)' : 'var(--smoke)',
                  cursor:'pointer',
                  borderBottom: category === key ? '1px solid var(--gold)' : 'none'
                }}>
                {POLICIES[key].title}
              </button>
            ))}
          </div>

          <div style={{ lineHeight:2, color:'var(--ivory)', fontWeight:300 }}>
            <h2 style={{ fontFamily:'var(--font-display)', fontWeight:300, marginBottom:'var(--s6)' }}>{current.title}</h2>
            <p style={{ marginBottom:'var(--s6)' }}>Last updated: January 2025</p>
            <p style={{ color:'var(--smoke)' }}>{current.content}</p>
            {/* Mock content */}
            <h3 style={{ marginTop:'var(--s8)', marginBottom:'var(--s4)', fontFamily:'var(--font-display)', fontSize:'var(--text-xl)' }}>1. Data Collection</h3>
            <p style={{ color:'var(--smoke)' }}>We collect information directly from you when you register on our site, place an order, or subscribe to our newsletter. This includes your name, email address, mailing address, phone number, and credit card information.</p>
            <h3 style={{ marginTop:'var(--s8)', marginBottom:'var(--s4)', fontFamily:'var(--font-display)', fontSize:'var(--text-xl)' }}>2. Use of Information</h3>
            <p style={{ color:'var(--smoke)' }}>Any of the information we collect from you may be used in one of the following ways: to personalize your experience, to improve our website, to improve customer service, and to process transactions.</p>
          </div>
        </div>
      </div>
      <div style={{ height:'var(--s12)' }} />
    </main>
  );
}
