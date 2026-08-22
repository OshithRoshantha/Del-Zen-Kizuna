import React, { useState } from 'react';
import useFadeIn from '../components/useFadeIn';
import './Menu.css';

const categories = ['Starters', 'Mains', 'Signatures', 'Desserts', 'Drinks'];

const menuData = {
  Starters: [
    { name: 'Pol Sambol Bruschetta', desc: 'Toasted artisan bread, spiced coconut relish, red onion, green chilli', price: '1,200' },
    { name: 'Spiced Prawn Tempura', desc: 'Jumbo prawns in light tempura batter, sriracha aioli, toasted sesame', price: '2,400' },
    { name: 'Kizuna Tasting Board', desc: 'Selection of Lankan & Asian starters — mutton rolls, gyoza, devilled squid', price: '3,200' },
    { name: 'Wambatu Moju', desc: 'Slow-fried eggplant, caramelised onion, Ceylon vinegar glaze', price: '1,100' },
  ],
  Mains: [
    { name: 'Black Pork Belly Curry', desc: ' 12-hour slow-cooked pork belly, roasted coconut gravy, string hoppers', price: '3,800' },
    { name: 'Miso Glazed Barramundi', desc: 'Pan-seared barramundi, white miso, bok choy, fragrant jasmine rice', price: '4,200' },
    { name: 'Jaffna Lamb Kothu', desc: 'Shredded roti, spiced Jaffna lamb, eggs, curry leaves, soy', price: '3,500' },
    { name: 'Mushroom & Tofu Noodle Bowl', desc: 'Shiitake, king oyster, silken tofu, ramen broth, scallion oil', price: '2,200' },
  ],
  Signatures: [
    { name: 'Del Zen Whole Crab', desc: 'Market-fresh blue swimmer crab, black pepper masala, garlic butter bun', price: 'MP', badge: 'Chef\'s Pick' },
    { name: 'Kizuna Platter for Two', desc: 'A curated journey — starters, mains & dessert sharing plates for two', price: '9,800', badge: 'Popular' },
    { name: 'Ceylon Wagyu Short Rib', desc: 'A5 Wagyu short rib, tamarind jus, pickled daikon, lotus root chips', price: '7,500', badge: 'Premium' },
    { name: '絆 Omakase (7 Courses)', desc: 'Chef\'s seasonal tasting menu — let us curate your evening', price: '12,500', badge: 'Reserve' },
  ],
  Desserts: [
    { name: 'Wattalapam Crème Brûlée', desc: 'Classic jaggery & coconut custard with caramelised cane sugar crust', price: '900' },
    { name: 'Mango Sticky Rice', desc: 'Alphonso mango, pandan glutinous rice, coconut cream, sesame brittle', price: '1,000' },
    { name: 'Dark Chocolate Lava Cake', desc: '70% Ceylon cocoa, passion fruit coulis, matcha ice cream', price: '1,200' },
  ],
  Drinks: [
    { name: 'Kizuna Mocktail', desc: 'Pandan, coconut water, lime, lemongrass, ginger', price: '650' },
    { name: 'Ceylon Iced Tea', desc: 'Single-estate high-grown tea, honey, fresh citrus, mint', price: '450' },
    { name: 'Matcha Latte', desc: 'Premium ceremonial grade matcha, oat milk, light honey foam', price: '750' },
    { name: 'King Coconut Water', desc: 'Fresh-cracked thambili with Himalayan salt rim', price: '400' },
  ],
};

export default function Menu() {
  const [active, setActive] = useState('Starters');
  const [ref, v] = useFadeIn(0.1);

  return (
    <section className="menu" id="menu">
      <div className="menu-header" ref={ref}>
        <span className={`section-eyebrow ${v ? '' : ''}`}>Culinary Journey</span>
        <h2 className={`menu-title fade-in ${v ? 'visible' : ''}`}>
          Our Menu
        </h2>
        <div className="divider-line center" />
        <p className={`menu-sub fade-in delay-1 ${v ? 'visible' : ''}`}>
          Every dish is a bridge between the familiar and the extraordinary.
          All prices in Sri Lankan Rupees (LKR).
        </p>
      </div>

      {/* Category tabs */}
      <div className="menu-tabs">
        {categories.map(cat => (
          <button
            key={cat}
            className={`menu-tab ${active === cat ? 'active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu items */}
      <div className="menu-grid">
        {menuData[active].map((item, i) => (
          <MenuCard key={item.name} item={item} index={i} />
        ))}
      </div>

      <div className="menu-footer-note">
        <p>All dishes are prepared fresh to order. Please inform your server of any dietary requirements.
        <br />Prices are exclusive of government taxes. * MP = Market Price</p>
        <a
          href="#order"
          className="btn-primary"
          style={{ display: 'inline-block', marginTop: '2rem', textDecoration: 'none', padding: '1rem 2.5rem', background: 'var(--gold)', color: 'var(--ink)', fontSize: '0.65rem', fontFamily: "'Jost', sans-serif", letterSpacing: '0.25em', textTransform: 'uppercase' }}
          onClick={(e) => { e.preventDefault(); document.querySelector('#order')?.scrollIntoView({ behavior: 'smooth' }); }}
        >
          Order via WhatsApp
        </a>
      </div>
    </section>
  );
}

function MenuCard({ item, index }) {
  const [ref, v] = useFadeIn(0.1);

  return (
    <div
      ref={ref}
      className={`menu-card fade-in ${v ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="menu-card-top">
        <div>
          <h3 className="menu-item-name">{item.name}</h3>
          {item.badge && <span className="menu-badge">{item.badge}</span>}
        </div>
        <span className="menu-price">Rs. {item.price}</span>
      </div>
      <p className="menu-item-desc">{item.desc}</p>
    </div>
  );
}
