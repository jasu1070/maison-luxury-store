import React from 'react';

export default function Atelier({ onNav }) {
  return (
    <main id="main-content">
      <div className="page-banner">
        <div className="container" style={{ textAlign:'center' }}>
          <span className="eyebrow" style={{ display:'block', marginBottom:12 }}>The Foundation</span>
          <h1 style={{ fontFamily:'var(--font-display)', fontSize:'var(--text-5xl)', fontWeight:300, color:'var(--ivory)', letterSpacing:'-0.02em', marginBottom:'var(--s2)' }}>
            L'Atelier
          </h1>
          <p style={{ color:'var(--smoke)', fontWeight:300, maxWidth:'600px', margin:'0 auto' }}>
            Where ancient techniques meet modern precision. Explore the philosophy behind Maison's craftsmanship.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems:'center', gap:'var(--s16)', marginBottom:'var(--s20)' }}>
            <div>
              <div style={{ fontSize:'100px', marginBottom:'var(--s4)', opacity:0.8 }}>⚒️</div>
              <h2 style={{ fontFamily:'var(--font-display)', fontSize:'var(--text-3xl)', fontWeight:300, color:'var(--ivory)', marginBottom:'var(--s4)' }}>Forged in Fire</h2>
              <p style={{ color:'var(--smoke)', lineHeight:2, fontWeight:300, fontSize:'var(--text-lg)' }}>
                Our titanium frames and hardware are forged in the historical workshops of Sabae, Japan. 
                Each piece undergoes 300 individual manual processes, ensuring a finish that is as durable as it is beautiful.
              </p>
            </div>
            <div style={{ background:'var(--noir-2)', height:'400px', display:'flex', alignItems:'center', justifyContent:'center', border:'1px solid var(--border)' }}>
              <span style={{ fontFamily:'var(--font-mono)', fontSize:'var(--text-xs)', color:'var(--gold)', letterSpacing:'0.2em' }}>[ IMAGE: JAPANESE WORKSHOP ]</span>
            </div>
          </div>

          <div className="grid-2" style={{ alignItems:'center', gap:'var(--s16)', marginBottom:'var(--s20)', direction:'rtl' }}>
            <div style={{ direction:'ltr' }}>
              <div style={{ fontSize:'100px', marginBottom:'var(--s4)', opacity:0.8 }}>🧵</div>
              <h2 style={{ fontFamily:'var(--font-display)', fontSize:'var(--text-3xl)', fontWeight:300, color:'var(--ivory)', marginBottom:'var(--s4)' }}>The Art of the Stitch</h2>
              <p style={{ color:'var(--smoke)', lineHeight:2, fontWeight:300, fontSize:'var(--text-lg)' }}>
                Our leather goods are hand-stitched by master artisans in Florence. Using only vegetable-tanned 
                skins, we employ the traditional saddle-stitch—a technique that cannot be replicated by machinery.
              </p>
            </div>
            <div style={{ background:'var(--noir-2)', height:'400px', display:'flex', alignItems:'center', justifyContent:'center', border:'1px solid var(--border)' }}>
              <span style={{ fontFamily:'var(--font-mono)', fontSize:'var(--text-xs)', color:'var(--gold)', letterSpacing:'0.2em' }}>[ IMAGE: FLORENTINE LEATHERWORK ]</span>
            </div>
          </div>

          <div style={{ textAlign:'center', background:'var(--gold)', padding:'var(--s16)', color:'var(--noir)' }}>
            <h3 style={{ fontFamily:'var(--font-display)', fontSize:'var(--text-3xl)', marginBottom:'var(--s4)' }}>Experience the Collection</h3>
            <p style={{ marginBottom:'var(--s8)', opacity:0.8 }}>Discover the results of hundreds of hours of manual effort.</p>
            <button className="btn" style={{ background:'var(--noir)', color:'var(--ivory)' }} onClick={() => onNav('shop')}>Explore Atelier Pieces</button>
          </div>
        </div>
      </div>
      <div style={{ height:'var(--s12)' }} />
    </main>
  );
}
