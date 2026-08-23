import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import './OrderPage.css';

const menuData = [
  {
    category: 'Appetizers',
    items: [
      { id: 'a1', name: 'Chilli Garlic Prawns', desc: 'Tender prawns tossed in fiery chilli garlic sauce, spring onion, sesame oil', price: 1850, img: '/images/meals/appetizers/chilli-garlic-prawns.jpg' },
      { id: 'a2', name: 'Crispy Chilli Chicken Bites', desc: 'Golden-fried chicken morsels, crispy chilli glaze, toasted sesame', price: 1400, img: '/images/meals/appetizers/crispy-chilli-chicken-bites.jpg' },
      { id: 'a3', name: 'Crispy Wonton Pockets', desc: 'Pan-fried wontons stuffed with spiced prawn & ginger, sweet chilli dip', price: 1200, img: '/images/meals/appetizers/crispy-wonton-pockets.jpg' },
      { id: 'a4', name: 'Devilled Mushroom Bites', desc: 'Button mushrooms in tangy Lankan devilled sauce, caramelised onion', price: 1100, img: '/images/meals/appetizers/devilled-mushroom-bites.jpg' },
      { id: 'a5', name: 'Dragon Spring Rolls', desc: 'Crispy rolls with spiced vegetables & glass noodles, dragon sauce dip', price: 1150, img: '/images/meals/appetizers/dragon-spring-rolls.jpg' },
      { id: 'a6', name: 'Hot & Spicy Chicken Bao', desc: 'Steamed bao buns, slow-braised spiced chicken, pickled cucumber', price: 1600, img: '/images/meals/appetizers/hot-spicy-chicken-bao.jpg' },
      { id: 'a7', name: 'Szechuan Chicken Wings', desc: 'Crispy wings in numbing Szechuan pepper glaze, scallion garnish', price: 1750, img: '/images/meals/appetizers/szechuan-chicken-wings.jpg' },
    ],
  },
  {
    category: 'Restaurant Menu',
    items: [
      { id: 'r1', name: 'Cantonese Fried Rice', desc: 'Wok-tossed jasmine rice, egg, seasonal vegetables, light soy, scallion', price: 1600, img: '/images/meals/restaurant/cantonese-fried-rice.jpg' },
      { id: 'r2', name: 'Chilli Paneer Stir-Fry', desc: 'Indo-Chinese style paneer, bell peppers, onion, bold chilli sauce', price: 1950, img: '/images/meals/restaurant/chilli-paneer-stir-fry.jpg' },
      { id: 'r3', name: 'Crispy Chilli Beef', desc: 'Crispy-fried beef strips, sweet chilli reduction, sesame, spring onion', price: 2400, img: '/images/meals/restaurant/crispy-chilli-beef.jpg' },
      { id: 'r4', name: 'Devilled Chicken', desc: 'Classic Sri Lankan devilled chicken, capsicum, onion, tangy-spicy sauce', price: 2100, img: '/images/meals/restaurant/devilled-chicken.jpg' },
      { id: 'r5', name: 'Dragon Chicken Rice', desc: 'Aromatic fried rice topped with dragon-sauce glazed chicken, fried egg', price: 2200, img: '/images/meals/restaurant/dragon-chicken-rice.jpg' },
      { id: 'r6', name: 'Dragon Prawn Fried Rice', desc: 'Wok-fried rice with jumbo prawns, chilli oil, garlic, fresh herbs', price: 2800, img: '/images/meals/restaurant/dragon-prawn-fried-rice.jpg' },
      { id: 'r7', name: 'Kung Pao Chicken', desc: 'Sichuan classic — diced chicken, roasted peanuts, dried chilli, honey', price: 2300, img: '/images/meals/restaurant/kung-pao-chicken.jpg' },
      { id: 'r8', name: 'Sweet & Sour Chicken', desc: 'Crispy chicken, fresh pineapple, bell peppers, classic sweet-sour glaze', price: 2100, img: '/images/meals/restaurant/sweet-sour-chicken.jpg' },
    ],
  },
  {
    category: 'BYOB Menu',
    items: [
      { id: 'b1', name: 'Black Pepper Chicken', desc: 'Wok-seared chicken strips, bold black pepper sauce, caramelised onion, butter', price: 2400, img: '/images/meals/byob/black-pepper-chicken.jpg' },
      { id: 'b2', name: 'Chilli Garlic Prawns (BYOB)', desc: 'Jumbo prawns, fiery chilli-garlic butter, lemon oil, micro herbs', price: 2950, img: '/images/meals/byob/chilli-garlic-prawns.jpg' },
      { id: 'b3', name: 'Hot & Spicy Beef', desc: 'Tender beef wok-fried with bold Asian spices, chilli oil, sesame seeds', price: 2800, img: '/images/meals/byob/hot-spicy-beef.jpg' },
      { id: 'b4', name: 'Mongolian Beef', desc: 'Slow-marinated beef strips, hoisin-ginger sauce, crispy noodle nest', price: 2900, img: '/images/meals/byob/mongolian-beef.jpg' },
      { id: 'b5', name: 'Shanghai Chicken Noodles', desc: 'Hand-pulled noodles, spiced Shanghai chicken, soy broth, pickled veg', price: 2500, img: '/images/meals/byob/shanghai-chicken-noodles.jpg' },
      { id: 'b6', name: 'Singapore Chicken Noodles', desc: 'Thin vermicelli, Singapore-spiced chicken, egg, spring onion, curry leaf', price: 2400, img: '/images/meals/byob/singapore-chicken-noodles.jpg' },
      { id: 'b7', name: 'Szechuan Chicken', desc: 'Tender chicken in numbing Szechuan sauce, dried chilli, roasted peanuts', price: 2500, img: '/images/meals/byob/szechuan-chicken.jpg' },
    ],
  },
  {
    category: 'Desserts',
    items: [
      { id: 'd1', name: 'Caramel Wok Pineapple', desc: 'Wok-caramelised fresh pineapple, salted caramel, vanilla cream', price: 950, img: '/images/meals/desserts/caramel-wok-pineapple.jpg' },
      { id: 'd2', name: 'Chinese Honey Banana', desc: 'Crispy battered banana, honey glaze, sesame, served with ice cream', price: 900, img: '/images/meals/desserts/chinese-honey-banana.jpg' },
      { id: 'd3', name: 'Chocolate Bao Buns', desc: 'Steamed chocolate bao, dark chocolate ganache, berry coulis', price: 1100, img: '/images/meals/desserts/chocolate-bao-buns.jpg' },
      { id: 'd4', name: 'Coconut Pandan Cake', desc: 'Layered pandan sponge, coconut cream frosting, toasted coconut flakes', price: 1050, img: '/images/meals/desserts/coconut-pandan-cake.jpg' },
      { id: 'd5', name: 'Dragon Chocolate Lava Cake', desc: '70% Ceylon dark cocoa lava cake, passion fruit coulis, matcha ice cream', price: 1200, img: '/images/meals/desserts/dragon-chocolate-lava-cake.jpg' },
      { id: 'd6', name: 'Mango Coconut Pudding', desc: 'Silky coconut panna cotta, Alphonso mango coulis, edible flowers', price: 950, img: '/images/meals/desserts/mango-coconut-pudding.jpg' },
      { id: 'd7', name: 'Sesame Ice Cream Crunch', desc: 'Artisan sesame ice cream, black sesame brittle, honey drizzle', price: 1000, img: '/images/meals/desserts/sesame-ice-cream-crunch.jpg' },
    ],
  },
];

const allItems = menuData.flatMap(c => c.items);
const STEPS = ['menu', 'details', 'review'];

export default function OrderPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState('menu');
  const [cart, setCart] = useState({});
  const [activeCategory, setActiveCategory] = useState('Appetizers');
  const [cartOpen, setCartOpen] = useState(false);
  const cartDrawerRef = useRef(null);
  const [details, setDetails] = useState({
    name: '',
    phone: '',
    fulfillment: 'delivery',
    address: '',
    notes: '',
  });

  // ── Scroll to top on mount ──
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // ── Lock body scroll when cart is open ──
  useEffect(() => {
    if (cartOpen) {
      document.body.classList.add('cart-open');
    } else {
      document.body.classList.remove('cart-open');
    }
    return () => document.body.classList.remove('cart-open');
  }, [cartOpen]);

  // ── Close cart drawer when clicking outside ──
  useEffect(() => {
    const handleClick = (e) => {
      if (cartOpen && cartDrawerRef.current && !cartDrawerRef.current.contains(e.target)) {
        setCartOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [cartOpen]);

  const addItem = (id) => setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  const removeItem = (id) => setCart(prev => {
    const next = { ...prev };
    if (next[id] > 1) next[id]--;
    else delete next[id];
    return next;
  });
  const deleteItem = (id) => setCart(prev => {
    const next = { ...prev };
    delete next[id];
    return next;
  });

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const cartTotal = Object.entries(cart).reduce((total, [id, qty]) => {
    const item = allItems.find(i => i.id === id);
    return total + (item ? item.price * qty : 0);
  }, 0);
  const cartItems = Object.entries(cart).map(([id, qty]) => {
    const item = allItems.find(i => i.id === id);
    return { ...item, qty };
  });

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setDetails(prev => ({ ...prev, [name]: value }));
  };

  const validateDetails = () => {
    if (!details.name.trim()) return alert('Please enter your name.');
    if (!details.phone.trim()) return alert('Please enter your phone number.');
    if (details.fulfillment === 'delivery' && !details.address.trim()) return alert('Please enter your delivery address.');
    setStep('review');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToStep = (s) => {
    setStep(s);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const placeOrder = () => {
    let lineNum = 1;
    const orderLines = cartItems.map(item => {
      const subtotal = (item.price * item.qty).toLocaleString();
      return `${lineNum++}. ${item.name}\n   Quantity: ${item.qty}\n   Price: Rs. ${item.price.toLocaleString()}\n   Subtotal: Rs. ${subtotal}`;
    }).join('\n');

    const addressLine = details.fulfillment === 'delivery'
      ? `Delivery Address: ${details.address}`
      : 'Fulfillment: Pickup';

    const notesLine = details.notes.trim() ? `\nSpecial Notes: ${details.notes}` : '';

    const message =
`NEW ORDER
Customer Details:
Name: ${details.name}
Phone: ${details.phone}
${addressLine}${notesLine}

Order Details:
${orderLines}

Total: Rs. ${cartTotal.toLocaleString()}
Please confirm my order and delivery details.`;

    window.open(`https://wa.me/94771234567?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="op-root">
      {/* ── Header ── */}
      <header className="op-header">
        <button className="op-back" onClick={() => navigate('/')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M5 12l7-7M5 12l7 7"/>
          </svg>
          Back
        </button>

        <div className="op-logo-wrap">
          <img src="/images/logo.png" alt="Del Zen Kizuna" className="op-logo" />
        </div>

        {/* Clickable cart pill */}
        <button
          className={`op-cart-pill ${cartCount > 0 ? 'has-items' : ''}`}
          onClick={() => setCartOpen(o => !o)}
          aria-label="Open cart"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          {cartCount} item{cartCount !== 1 ? 's' : ''} · Rs. {cartTotal.toLocaleString()}
          {cartCount > 0 && <span className="op-cart-badge">{cartCount}</span>}
        </button>
      </header>

      {/* ── Cart Drawer ── */}
      {cartOpen && (
        <div className="op-cart-overlay">
          <div className="op-cart-drawer" ref={cartDrawerRef}>
            <div className="op-cart-drawer-header">
              <h3>Your Cart</h3>
              <button className="op-cart-close" onClick={() => setCartOpen(false)}>✕</button>
            </div>

            {cartItems.length === 0 ? (
              <div className="op-cart-empty">
                <span>🛒</span>
                <p>Your cart is empty</p>
              </div>
            ) : (
              <>
                <div className="op-cart-items">
                  {cartItems.map(item => (
                    <div key={item.id} className="op-cart-row">
                      <img src={item.img} alt={item.name} className="op-cart-row-img" />
                      <div className="op-cart-row-info">
                        <span className="op-cart-row-name">{item.name}</span>
                        <span className="op-cart-row-price">Rs. {item.price.toLocaleString()}</span>
                      </div>
                      <div className="op-cart-row-controls">
                        <button className="op-qty-btn" onClick={() => removeItem(item.id)}>−</button>
                        <span className="op-qty-num">{item.qty}</span>
                        <button className="op-qty-btn op-qty-add" onClick={() => addItem(item.id)}>+</button>
                      </div>
                      <button className="op-cart-row-delete" onClick={() => deleteItem(item.id)} aria-label="Remove item">✕</button>
                    </div>
                  ))}
                </div>

                <div className="op-cart-drawer-footer">
                  <div className="op-cart-total-row">
                    <span>Total</span>
                    <span>Rs. {cartTotal.toLocaleString()}</span>
                  </div>
                  <button
                    className="op-proceed-btn full-width"
                    onClick={() => { setCartOpen(false); goToStep('details'); }}
                  >
                    Proceed to Checkout →
                  </button>
                  <button
                    className="op-keep-shopping"
                    onClick={() => { setCartOpen(false); goToStep('menu'); }}
                  >
                    ← Keep Shopping
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* ── Step Indicator ── */}
      <div className="op-steps">
        {['Select Items', 'Your Details', 'Review & Order'].map((label, i) => {
          const key = STEPS[i];
          const idx = STEPS.indexOf(step);
          const isActive = i === idx;
          const isDone = i < idx;
          return (
            <div key={key} className={`op-step ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}>
              <div className="op-step-circle">{isDone ? '✓' : i + 1}</div>
              <span>{label}</span>
            </div>
          );
        })}
      </div>

      {/* ── STEP 1: Menu ── */}
      {step === 'menu' && (
        <div className="op-menu-step">
          <div className="op-section-heading">
            <h1>Online Order</h1>
            <p>Browse our menu, add items to your cart, then proceed to checkout.</p>
          </div>

          <div className="op-cat-tabs">
            {menuData.map(c => (
              <button
                key={c.category}
                className={`op-cat-tab ${activeCategory === c.category ? 'active' : ''}`}
                onClick={() => setActiveCategory(c.category)}
              >
                {c.category}
              </button>
            ))}
          </div>

          <div className="op-cards-grid">
            {menuData.find(c => c.category === activeCategory)?.items.map(item => (
              <div key={item.id} className="op-card">
                <div className="op-card-img-wrap">
                  <img src={item.img} alt={item.name} loading="lazy" />
                </div>
                <div className="op-card-body">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  <div className="op-card-footer">
                    <span className="op-card-price">Rs. {item.price.toLocaleString()}</span>
                    {cart[item.id] ? (
                      <div className="op-qty-controls">
                        <button className="op-qty-btn" onClick={() => removeItem(item.id)}>−</button>
                        <span className="op-qty-num">{cart[item.id]}</span>
                        <button className="op-qty-btn op-qty-add" onClick={() => addItem(item.id)}>+</button>
                      </div>
                    ) : (
                      <button className="op-add-btn" onClick={() => addItem(item.id)}>Add</button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {cartCount > 0 && (
            <div className="op-sticky-bar">
              <button className="op-sticky-cart-btn" onClick={() => setCartOpen(true)}>
                🛒 View Cart ({cartCount})
              </button>
              <button className="op-proceed-btn" onClick={() => goToStep('details')}>
                Proceed to Details →
              </button>
            </div>
          )}
        </div>
      )}

      {/* ── STEP 2: Details ── */}
      {step === 'details' && (
        <div className="op-details-step">
          <div className="op-section-heading">
            <h1>Your Details</h1>
            <p>Tell us who you are and how you'd like to receive your order.</p>
          </div>

          <div className="op-form">
            <div className="op-form-group">
              <label>Full Name *</label>
              <input name="name" placeholder="e.g. Dasun Navindu" value={details.name} onChange={handleDetailsChange} />
            </div>

            <div className="op-form-group">
              <label>Phone Number *</label>
              <input name="phone" placeholder="e.g. 0752576969" value={details.phone} onChange={handleDetailsChange} />
            </div>

            <div className="op-form-group">
              <label>Fulfillment Method *</label>
              <div className="op-radio-group">
                <label className={`op-radio-option ${details.fulfillment === 'delivery' ? 'selected' : ''}`}>
                  <input type="radio" name="fulfillment" value="delivery" checked={details.fulfillment === 'delivery'} onChange={handleDetailsChange} />
                  🚗 Delivery
                </label>
                <label className={`op-radio-option ${details.fulfillment === 'pickup' ? 'selected' : ''}`}>
                  <input type="radio" name="fulfillment" value="pickup" checked={details.fulfillment === 'pickup'} onChange={handleDetailsChange} />
                  🏠 Pickup
                </label>
              </div>
            </div>

            {details.fulfillment === 'delivery' && (
              <div className="op-form-group">
                <label>Delivery Address *</label>
                <textarea name="address" placeholder="e.g. 149/14, Kuruduwaththe, Heiyanthuduwa" rows={3} value={details.address} onChange={handleDetailsChange} />
              </div>
            )}

            <div className="op-form-group">
              <label>Special Notes <span className="op-optional">(optional)</span></label>
              <textarea name="notes" placeholder="Allergies, spice level preferences, etc." rows={3} value={details.notes} onChange={handleDetailsChange} />
            </div>

            <div className="op-form-actions">
              <button className="op-back-btn" onClick={() => goToStep('menu')}>← Back to Menu</button>
              <button className="op-proceed-btn" onClick={validateDetails}>Review Order →</button>
            </div>
          </div>
        </div>
      )}

      {/* ── STEP 3: Review ── */}
      {step === 'review' && (
        <div className="op-review-step">
          <div className="op-section-heading">
            <h1>Review & Place Order</h1>
            <p>Confirm your order below and send it via WhatsApp.</p>
          </div>

          <div className="op-review-grid">
            <div className="op-review-left">
              <div className="op-review-card">
                <h3>Order Summary</h3>
                <div className="op-review-items">
                  {cartItems.map((item, i) => (
                    <div key={item.id} className="op-review-item">
                      <span className="op-ri-num">{i + 1}.</span>
                      <div className="op-ri-details">
                        <span className="op-ri-name">{item.name}</span>
                        <span className="op-ri-qty">Qty: {item.qty} × Rs. {item.price.toLocaleString()}</span>
                      </div>
                      <span className="op-ri-sub">Rs. {(item.price * item.qty).toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                <div className="op-review-total">
                  <span>Total</span>
                  <span>Rs. {cartTotal.toLocaleString()}</span>
                </div>
                <button className="op-edit-cart-btn" onClick={() => goToStep('menu')}>✏️ Edit Cart</button>
              </div>

              <div className="op-review-card">
                <h3>Customer Details</h3>
                <div className="op-detail-row"><span>Name</span><span>{details.name}</span></div>
                <div className="op-detail-row"><span>Phone</span><span>{details.phone}</span></div>
                <div className="op-detail-row">
                  <span>Fulfillment</span>
                  <span>{details.fulfillment === 'delivery' ? '🚗 Delivery' : '🏠 Pickup'}</span>
                </div>
                {details.fulfillment === 'delivery' && (
                  <div className="op-detail-row"><span>Address</span><span>{details.address}</span></div>
                )}
                {details.notes && (
                  <div className="op-detail-row"><span>Notes</span><span>{details.notes}</span></div>
                )}
                <button className="op-edit-cart-btn" onClick={() => goToStep('details')}>✏️ Edit Details</button>
              </div>
            </div>

            <div className="op-review-right">
              <div className="op-whatsapp-cta">
                <div className="op-wa-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.527 5.845L0 24l6.335-1.506A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.018-1.38l-.36-.214-3.73.886.916-3.629-.235-.373A9.818 9.818 0 1112 21.818z"/>
                  </svg>
                </div>
                <h3>Ready to order?</h3>
                <p>Your order will be sent as a WhatsApp message to our team. We'll confirm within a few minutes.</p>
                <div className="op-wa-badges">
                  <span>🚗 Cash on Delivery</span>
                  <span>⏱️ 45–60 min delivery</span>
                  <span>📞 +94 77 123 4567</span>
                </div>
                <button className="op-wa-btn" onClick={placeOrder}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.527 5.845L0 24l6.335-1.506A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.018-1.38l-.36-.214-3.73.886.916-3.629-.235-.373A9.818 9.818 0 1112 21.818z"/>
                  </svg>
                  Place Order via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
