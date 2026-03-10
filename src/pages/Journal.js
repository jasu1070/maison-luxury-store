import React from 'react';

const STORIES = [
  {
    id: 1,
    category: 'Travel',
    title: 'Postcards from the Amalfi Coast',
    excerpt: 'A journey through the hidden coves and lemon groves of Southern Italy.',
    date: 'March 2024',
    emoji: '🍋'
  },
  {
    id: 2,
    category: 'Design',
    title: 'The Brutalist Aesthetic',
    excerpt: 'Exploring the raw beauty and architectural influence of concrete and form.',
    date: 'February 2024',
    emoji: '🏛️'
  },
  {
    id: 3,
    category: 'Lifestyle',
    title: 'The Morning Ritual',
    excerpt: 'How early hours and intentional coffee preparation set the tone for a luxury life.',
    date: 'January 2024',
    emoji: '☕'
  }
];

export default function Journal({ onNav }) {
  return (
    <main id="main-content">
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow" style={{ display:'block', marginBottom:12 }}>Editorial</span>
          <h1 style={{ fontFamily:'var(--font-display)', fontSize:'var(--text-4xl)', fontWeight:300, color:'var(--ivory)', letterSpacing:'-0.01em', marginBottom:'var(--s1)' }}>
            The Journal
          </h1>
          <p style={{ color:'var(--smoke)', fontWeight:300 }}>
            Observations on art, travel, design, and the lifestyle of the modern nomad.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:'var(--s12)' }}>
            {STORIES.map(story => (
              <article key={story.id} style={{ display:'grid', gridTemplateColumns:'400px 1fr', gap:'var(--s10)', border:'1px solid var(--border)', background:'var(--noir-2)', overflow:'hidden' }}>
                <div style={{ height:'300px', background:'var(--border)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'80px' }}>
                  {story.emoji}
                </div>
                <div style={{ padding:'var(--s8)', display:'flex', flexDirection:'column', justifyContent:'center' }}>
                  <div style={{ fontFamily:'var(--font-mono)', fontSize:'var(--text-xxs)', color:'var(--gold)', letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:'var(--s4)' }}>
                    {story.category} — {story.date}
                  </div>
                  <h2 style={{ fontFamily:'var(--font-display)', fontSize:'var(--text-2xl)', fontWeight:300, color:'var(--ivory)', marginBottom:'var(--s4)' }}>{story.title}</h2>
                  <p style={{ color:'var(--smoke)', fontWeight:300, lineHeight:1.8, marginBottom:'var(--s6)' }}>{story.excerpt}</p>
                  <button className="btn btn-ghost" style={{ alignSelf:'flex-start', padding:'0', border:'none', borderBottom:'1px solid var(--gold)', borderRadius:0 }}>Read More</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div style={{ height:'var(--s12)' }} />
    </main>
  );
}
