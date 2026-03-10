import React, { useState, useEffect, useCallback, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import SearchModal from './components/SearchModal';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Support from './pages/Support';
import Legal from './pages/Legal';
import Atelier from './pages/Atelier';
import Journal from './pages/Journal';
import './styles/global.css';
import './styles/layout.css';
import './styles/components.css';

/* ── Custom Cursor ── */
function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring_pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = e => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dot.current) {
        dot.current.style.left = e.clientX + 'px';
        dot.current.style.top = e.clientY + 'px';
      }
    };
    let raf;
    const animate = () => {
      ring_pos.current.x += (pos.current.x - ring_pos.current.x) * 0.12;
      ring_pos.current.y += (pos.current.y - ring_pos.current.y) * 0.12;
      if (ring.current) {
        ring.current.style.left = ring_pos.current.x + 'px';
        ring.current.style.top = ring_pos.current.y + 'px';
      }
      raf = requestAnimationFrame(animate);
    };
    window.addEventListener('mousemove', move);
    raf = requestAnimationFrame(animate);
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div className="cursor" ref={dot} style={{ position:'fixed', pointerEvents:'none', zIndex:99999 }}>
        <div className="cursor-dot" />
      </div>
      <div className="cursor" ref={ring} style={{ position:'fixed', pointerEvents:'none', zIndex:99998 }}>
        <div className="cursor-ring" />
      </div>
    </>
  );
}

/* ── Toast ── */
function Toast({ msg, onHide }) {
  useEffect(() => {
    const t = setTimeout(onHide, 3200);
    return () => clearTimeout(t);
  }, [onHide]);
  return (
    <div className="toast" role="alert" aria-live="polite">
      <span className="toast-ico">✦</span>
      <span className="toast-msg">{msg}</span>
    </div>
  );
}

/* ── App ── */
export default function App() {
  const [page, setPage] = useState('home');
  const [productId, setProductId] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [toast, setToast] = useState(null);

  // Keyboard shortcut
  useEffect(() => {
    const fn = e => { if ((e.metaKey||e.ctrlKey) && e.key==='k') { e.preventDefault(); setSearchOpen(true); } };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, []);

  // Scroll to top on nav
  useEffect(() => { window.scrollTo({ top:0, behavior:'smooth' }); }, [page, productId]);

  const nav = useCallback((p, id=null) => {
    setPage(p); setProductId(id);
    setCartOpen(false); setSearchOpen(false);
  }, []);

  const addToCart = useCallback(product => {
    setCart(prev => {
      const ex = prev.find(i => i.id === product.id);
      if (ex) return prev.map(i => i.id === product.id ? {...i, qty:i.qty+1} : i);
      return [...prev, {...product, qty:1}];
    });
    setToast(`${product.name} added to bag`);
  }, []);

  const updateQty = useCallback((id, qty) => {
    if (qty < 1) setCart(p => p.filter(i => i.id !== id));
    else setCart(p => p.map(i => i.id===id ? {...i,qty} : i));
  }, []);

  const removeItem = useCallback(id => setCart(p => p.filter(i => i.id !== id)), []);

  const cartCount = cart.reduce((a,i) => a+i.qty, 0);

  const renderPage = () => {
    switch(page) {
      case 'shop':    return <Shop filter={productId} onAdd={addToCart} onNav={nav} />;
      case 'product': return <ProductDetails productId={productId} onAdd={addToCart} onNav={nav} />;
      case 'cart':    return <Cart items={cart} onQty={updateQty} onRemove={removeItem} onNav={nav} />;
      case 'contact': return <Contact onNav={nav} />;
      case 'support': return <Support category={productId} onNav={nav} />;
      case 'legal':   return <Legal category={productId} onNav={nav} />;
      case 'atelier': return <Atelier onNav={nav} />;
      case 'journal': return <Journal onNav={nav} />;
      default:        return <Home onAdd={addToCart} onNav={nav} />;
    }
  };

  return (
    <div className="app">
      <Cursor />

      {/* Skip link */}
      <a href="#main-content" style={{
        position:'absolute', top:-100, left:0, padding:'8px 16px',
        background:'var(--gold)', color:'var(--noir)', zIndex:99999,
        fontFamily:'var(--font-mono)', fontSize:'var(--text-xs)', letterSpacing:'0.1em',
        transition:'top 0.2s',
      }} onFocus={e=>e.target.style.top='0'} onBlur={e=>e.target.style.top='-100px'}>
        Skip to content
      </a>

      <Navbar page={page} onNav={nav} cartCount={cartCount}
        onCart={() => setCartOpen(true)} onSearch={() => setSearchOpen(true)} />

      <div className="app-main">{renderPage()}</div>

      <Footer onNav={nav} />

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)}
        items={cart} onQty={updateQty} onRemove={removeItem} onNav={nav} />

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} onNav={nav} />

      {toast && <Toast msg={toast} onHide={() => setToast(null)} />}
    </div>
  );
}
