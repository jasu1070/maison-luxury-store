import React from 'react';

const SECTIONS = {
  'order-tracking': {
    title: 'Order Tracking',
    content: 'Enter your order number and email address to see the current status of your shipment. Most orders are processed within 24-48 hours.'
  },
  'returns-repairs': {
    title: 'Returns & Repairs',
    content: 'We offer complimentary returns within 60 days of purchase. For delicate items, we also provide a lifetime repair service for manufacturing defects.'
  },
  'size-guide': {
    title: 'Size Guide',
    content: 'Our pieces are designed with international sizing standards. Please refer to our detailed measurements for each category to ensure a perfect fit.'
  },
  'care-instructions': {
    title: 'Care Instructions',
    content: 'Luxury objects require specialized care. We provide specific cleaning and storage recommendations for leather, titanium, and fine fabrics.'
  },
  'faqs': {
    title: 'Frequently Asked Questions',
    content: 'Find instant answers to common questions about accounts, shipping, international duties, and our sustainable sourcing practices.'
  }
};

export default function Support({ category, onNav }) {
  const current = SECTIONS[category] || SECTIONS['faqs'];

  return (
    <main id="main-content">
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow" style={{ display:'block', marginBottom:12 }}>Assistance</span>
          <h1 style={{ fontFamily:'var(--font-display)', fontSize:'var(--text-4xl)', fontWeight:300, color:'var(--ivory)', letterSpacing:'-0.01em', marginBottom:'var(--s1)' }}>
            {current.title}
          </h1>
          <p style={{ color:'var(--smoke)', fontWeight:300 }}>
            Dedicated support for your Maison experience.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="grid-shop" style={{ gridTemplateColumns:'240px 1fr' }}>
            {/* Sidebar */}
            <aside>
              <nav style={{ display:'flex', flexDirection:'column', gap:'var(--s2)' }}>
                {Object.keys(SECTIONS).map(key => (
                  <button key={key} 
                    onClick={() => onNav('support', key)}
                    style={{ 
                      textAlign:'left', 
                      background:'none', 
                      border:'none', 
                      padding:'var(--s3)', 
                      fontFamily:'var(--font-mono)', 
                      fontSize:'var(--text-xs)', 
                      letterSpacing:'0.1em', 
                      textTransform:'uppercase',
                      color: category === key ? 'var(--gold)' : 'var(--smoke)',
                      borderLeft: category === key ? '2px solid var(--gold)' : '2px solid transparent',
                      cursor:'pointer',
                      transition:'all 0.2s'
                    }}>
                    {SECTIONS[key].title}
                  </button>
                ))}
                <div style={{ height:'var(--s6)' }} />
                <button onClick={() => onNav('contact')} className="btn btn-ghost" style={{ width:'100%', fontSize:'10px' }}>Contact Concierge</button>
              </nav>
            </aside>

            {/* Content */}
            <div style={{ paddingLeft:'var(--s12)' }}>
              <div style={{ background:'var(--noir-2)', padding:'var(--s10)', border:'1px solid var(--border)' }}>
                <h2 style={{ fontFamily:'var(--font-display)', fontWeight:300, color:'var(--ivory)', marginBottom:'var(--s6)' }}>{current.title}</h2>
                <p style={{ color:'var(--smoke)', fontWeight:300, lineHeight:2, fontSize:'var(--text-base)' }}>
                  {current.content}
                </p>
                <div style={{ marginTop:'var(--s10)', paddingTop:'var(--s10)', borderTop:'1px solid var(--border)' }}>
                  <p style={{ color:'var(--smoke)', fontSize:'var(--text-sm)', marginBottom:'var(--s4)' }}>Still need help?</p>
                  <button onClick={() => onNav('contact')} className="btn btn-gold">Speak with an Advisor</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height:'var(--s12)' }} />
    </main>
  );
}
