import React from 'react';

export default function Contact({ onNav }) {
  return (
    <main id="main-content">
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow" style={{ display:'block', marginBottom:12 }}>Get in Touch</span>
          <h1 style={{ fontFamily:'var(--font-display)', fontSize:'var(--text-4xl)', fontWeight:300, color:'var(--ivory)', letterSpacing:'-0.01em', marginBottom:'var(--s1)' }}>
            Contact Us
          </h1>
          <p style={{ color:'var(--smoke)', fontWeight:300 }}>
            Our concierge team is available 24/7 to assist with your enquiries.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="grid-2" style={{ gap:'var(--s12)' }}>
            {/* Form */}
            <div>
              <form className="contact-form" onSubmit={e => e.preventDefault()}>
                <div className="form-group" style={{ marginBottom:'var(--s6)' }}>
                  <label style={{ display:'block', fontFamily:'var(--font-mono)', fontSize:'var(--text-xxs)', color:'var(--gold)', letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:'var(--s2)' }}>Full Name</label>
                  <input type="text" className="form-input" placeholder="Enter your name" style={{ width:'100%', padding:'var(--s4)', background:'var(--noir-2)', border:'1px solid var(--border)', color:'var(--ivory)', outline:'none' }} />
                </div>
                <div className="form-group" style={{ marginBottom:'var(--s6)' }}>
                  <label style={{ display:'block', fontFamily:'var(--font-mono)', fontSize:'var(--text-xxs)', color:'var(--gold)', letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:'var(--s2)' }}>Email Address</label>
                  <input type="email" className="form-input" placeholder="Enter your email" style={{ width:'100%', padding:'var(--s4)', background:'var(--noir-2)', border:'1px solid var(--border)', color:'var(--ivory)', outline:'none' }} />
                </div>
                <div className="form-group" style={{ marginBottom:'var(--s6)' }}>
                  <label style={{ display:'block', fontFamily:'var(--font-mono)', fontSize:'var(--text-xxs)', color:'var(--gold)', letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:'var(--s2)' }}>Message</label>
                  <textarea rows="6" className="form-input" placeholder="How can we help?" style={{ width:'100%', padding:'var(--s4)', background:'var(--noir-2)', border:'1px solid var(--border)', color:'var(--ivory)', outline:'none', resize:'vertical' }}></textarea>
                </div>
                <button type="submit" className="btn btn-gold" style={{ width:'100%' }}>Send Message</button>
              </form>
            </div>

            {/* Info */}
            <div>
              <div style={{ marginBottom:'var(--s10)' }}>
                <h3 style={{ fontFamily:'var(--font-display)', fontWeight:300, color:'var(--ivory)', marginBottom:'var(--s4)' }}>Boutique HQ</h3>
                <p style={{ color:'var(--smoke)', fontWeight:300, lineHeight:2, fontSize:'var(--text-sm)' }}>
                  123 Luxury Avenue<br />
                  Mayfair, London<br />
                  W1J 7JX, United Kingdom
                </p>
              </div>
              <div style={{ marginBottom:'var(--s10)' }}>
                <h3 style={{ fontFamily:'var(--font-display)', fontWeight:300, color:'var(--ivory)', marginBottom:'var(--s4)' }}>Direct Enquiries</h3>
                <p style={{ color:'var(--smoke)', fontWeight:300, lineHeight:2, fontSize:'var(--text-sm)' }}>
                  General: concierge@maison.com<br />
                  Press: press@maison.com<br />
                  Phone: +44 (0) 20 7946 0000
                </p>
              </div>
              <div>
                <h3 style={{ fontFamily:'var(--font-display)', fontWeight:300, color:'var(--ivory)', marginBottom:'var(--s4)' }}>Hours</h3>
                <p style={{ color:'var(--smoke)', fontWeight:300, lineHeight:2, fontSize:'var(--text-sm)' }}>
                  Mon – Fri: 09:00 – 21:00 GMT<br />
                  Sat – Sun: 10:00 – 18:00 GMT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height:'var(--s12)' }} />
    </main>
  );
}
