import React, { useState } from 'react';
import useFadeIn from '../components/useFadeIn';
import './OrderOnline.css';

const quickItems = [
  { name: 'Jaffna Lamb Kothu', price: '3,500' },
  { name: 'Black Pork Belly Curry', price: '3,800' },
  { name: 'Kizuna Tasting Board', price: '3,200' },
  { name: 'Miso Glazed Barramundi', price: '4,200' },
  { name: 'Wattalapam Crème Brûlée', price: '900' },
  { name: 'Ceylon Iced Tea', price: '450' },
];

export default function OrderOnline() {
  const [ref, v] = useFadeIn(0.1);
  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState('');

  const addToCart = (item) => {
    setCart(prev => {
      const exists = prev.find(i => i.name === item.name);
      if (exists) return prev.map(i => i.name === item.name ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeItem = (name) => setCart(prev => prev.filter(i => i.name !== name));

  const sendOrder = () => {
    if (!cart.length) return alert('Please add items to your order.');
    if (!address.trim()) return alert('Please enter your delivery address.');
    const items = cart.map(i => `• ${i.name} x${i.qty} — Rs. ${i.price}`).join('%0A');
    const msg = `Hello Del Zen Kizuna! I'd like to place an order.%0A%0A*Order:%0A*${items}%0A%0A*Delivery Address:* ${address}%0A%0A*Payment:* Cash on Delivery`;
    window.open(`https://wa.me/94771234567?text=${msg}`, '_blank');
    setCart([]);
    setAddress('');
  };

  return (
    <section className="order" id="order">
      <div className="order-inner">
        <div className="order-left" ref={ref}>
          <span className={`section-eyebrow fade-in ${v ? 'visible' : ''}`}>Order Now</span>
          <h2 className={`order-title fade-in delay-1 ${v ? 'visible' : ''}`}>
            Del Zen Kizuna<br /><em>Delivered to You</em>
          </h2>
          <div className={`divider-line fade-in delay-2 ${v ? 'visible' : ''}`} />
          <p className={`order-desc fade-in delay-2 ${v ? 'visible' : ''}`}>
            Can't come to us? We'll come to you. Order directly via WhatsApp and
            enjoy our signature dishes at home. Cash on delivery — simple, fast, delicious.
          </p>

          <div className={`order-badges fade-in delay-3 ${v ? 'visible' : ''}`}>
            <div className="order-badge">
              <span className="badge-icon">🚗</span>
              <span>Cash on Delivery</span>
            </div>
            <div className="order-badge">
              <span className="badge-icon">⏱️</span>
              <span>45–60 min delivery</span>
            </div>
            <div className="order-badge">
              <span className="badge-icon">📦</span>
              <span>Premium packaging</span>
            </div>
            <div className="order-badge">
              <span className="badge-icon">📍</span>
              <span>Colombo & suburbs</span>
            </div>
          </div>

          <div className={`whatsapp-direct fade-in delay-3 ${v ? 'visible' : ''}`}>
            <p className="direct-label">Or contact us directly:</p>
            <a
              href="https://wa.me/94771234567?text=Hello%20Del%20Zen%20Kizuna!%20I'd%20like%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn-large"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.527 5.845L0 24l6.335-1.506A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.018-1.38l-.36-.214-3.73.886.916-3.629-.235-.373A9.818 9.818 0 1112 21.818z"/>
              </svg>
              Chat on WhatsApp — +94 77 123 4567
            </a>
          </div>
        </div>

        {/* Quick Order Panel */}
        <div className="order-panel">
          <div className="panel-header">
            <h3>Quick Order</h3>
            <span className="panel-note">Select items, then send via WhatsApp</span>
          </div>

          <div className="quick-items">
            {quickItems.map(item => {
              const inCart = cart.find(i => i.name === item.name);
              return (
                <div key={item.name} className="quick-item">
                  <div>
                    <span className="qi-name">{item.name}</span>
                    <span className="qi-price">Rs. {item.price}</span>
                  </div>
                  {inCart ? (
                    <div className="qi-controls">
                      <button className="qi-btn" onClick={() => removeItem(item.name)}>✕</button>
                      <span className="qi-qty">{inCart.qty}</span>
                      <button className="qi-btn qi-add" onClick={() => addToCart(item)}>+</button>
                    </div>
                  ) : (
                    <button className="qi-btn qi-add" onClick={() => addToCart(item)}>+</button>
                  )}
                </div>
              );
            })}
          </div>

          {cart.length > 0 && (
            <div className="order-cart">
              <div className="cart-title">Your Order ({cart.reduce((a,b) => a + b.qty, 0)} items)</div>
              {cart.map(item => (
                <div key={item.name} className="cart-item">
                  <span>{item.name} × {item.qty}</span>
                  <button onClick={() => removeItem(item.name)} className="remove-btn">✕</button>
                </div>
              ))}
              <input
                className="address-input"
                placeholder="Delivery address..."
                value={address}
                onChange={e => setAddress(e.target.value)}
              />
              <button className="send-order-btn" onClick={sendOrder}>
                Send Order via WhatsApp
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
