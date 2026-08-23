import React, { useState } from 'react';
import useFadeIn from '../components/useFadeIn';
import './Menu.css';

const categories = ['Appetizers', 'Restaurant Menu', 'BYOB Menu', 'Desserts'];

const menuData = {
  Appetizers: [
    { name: 'Chilli Garlic Prawns', desc: 'Tender prawns tossed in fiery chilli garlic sauce, spring onion, sesame oil', price: '1,850', img: '/images/meals/appetizers/chilli-garlic-prawns.jpg' },
    { name: 'Crispy Chilli Chicken Bites', desc: 'Golden-fried chicken morsels, crispy chilli glaze, toasted sesame', price: '1,400', img: '/images/meals/appetizers/crispy-chilli-chicken-bites.jpg' },
    { name: 'Crispy Wonton Pockets', desc: 'Pan-fried wontons stuffed with spiced prawn & ginger, sweet chilli dip', price: '1,200', img: '/images/meals/appetizers/crispy-wonton-pockets.jpg' },
    { name: 'Devilled Mushroom Bites', desc: 'Button mushrooms in tangy Lankan devilled sauce, caramelised onion', price: '1,100', img: '/images/meals/appetizers/devilled-mushroom-bites.jpg' },
    { name: 'Dragon Spring Rolls', desc: 'Crispy rolls with spiced vegetables & glass noodles, dragon sauce dip', price: '1,150', img: '/images/meals/appetizers/dragon-spring-rolls.jpg' },
    { name: 'Hot & Spicy Chicken Bao', desc: 'Steamed bao buns, slow-braised spiced chicken, pickled cucumber', price: '1,600', img: '/images/meals/appetizers/hot-spicy-chicken-bao.jpg' },
    { name: 'Szechuan Chicken Wings', desc: 'Crispy wings in numbing Szechuan pepper glaze, scallion garnish', price: '1,750', img: '/images/meals/appetizers/szechuan-chicken-wings.jpg' },
  ],
  'Restaurant Menu': [
    { name: 'Cantonese Fried Rice', desc: 'Wok-tossed jasmine rice, egg, seasonal vegetables, light soy, scallion', price: '1,600', img: '/images/meals/restaurant/cantonese-fried-rice.jpg' },
    { name: 'Chilli Paneer Stir-Fry', desc: 'Indo-Chinese style paneer, bell peppers, onion, bold chilli sauce', price: '1,950', img: '/images/meals/restaurant/chilli-paneer-stir-fry.jpg' },
    { name: 'Crispy Chilli Beef', desc: 'Crispy-fried beef strips, sweet chilli reduction, sesame, spring onion', price: '2,400', img: '/images/meals/restaurant/crispy-chilli-beef.jpg' },
    { name: 'Devilled Chicken', desc: 'Classic Sri Lankan devilled chicken, capsicum, onion, tangy-spicy sauce', price: '2,100', img: '/images/meals/restaurant/devilled-chicken.jpg' },
    { name: 'Dragon Chicken Rice', desc: 'Aromatic fried rice topped with dragon-sauce glazed chicken, fried egg', price: '2,200', img: '/images/meals/restaurant/dragon-chicken-rice.jpg' },
    { name: 'Dragon Prawn Fried Rice', desc: 'Wok-fried rice with jumbo prawns, chilli oil, garlic, fresh herbs', price: '2,800', img: '/images/meals/restaurant/dragon-prawn-fried-rice.jpg' },
    { name: 'Kung Pao Chicken', desc: 'Sichuan classic — diced chicken, roasted peanuts, dried chilli, honey', price: '2,300', img: '/images/meals/restaurant/kung-pao-chicken.jpg' },
    { name: 'Sweet & Sour Chicken', desc: 'Crispy chicken, fresh pineapple, bell peppers, classic sweet-sour glaze', price: '2,100', img: '/images/meals/restaurant/sweet-sour-chicken.jpg' },
  ],
  'BYOB Menu': {
    note: {
      title: 'Bring Your Own Bottle',
      text: 'No corkage fee. Bring your favourite wine, whisky, or spirits and pair it with our exclusive BYOB menu — crafted for a more elevated, sharing-style experience. Premium glassware, ice buckets, and all accompaniments provided at no charge.',
      perks: ['No corkage fee', 'Premium glassware & ice provided', 'Ideal for celebrations & groups', 'Contact us for groups of 8+'],
    },
    items: [
      { name: 'Black Pepper Chicken', desc: 'Wok-seared chicken strips, bold black pepper sauce, caramelised onion, butter', price: '2,400', img: '/images/meals/byob/black-pepper-chicken.jpg' },
      { name: 'Chilli Garlic Prawns', desc: 'Jumbo prawns, fiery chilli-garlic butter, lemon oil, micro herbs', price: '2,950', img: '/images/meals/byob/chilli-garlic-prawns.jpg' },
      { name: 'Hot & Spicy Beef', desc: 'Tender beef wok-fried with bold Asian spices, chilli oil, sesame seeds', price: '2,800', img: '/images/meals/byob/hot-spicy-beef.jpg' },
      { name: 'Mongolian Beef', desc: 'Slow-marinated beef strips, hoisin-ginger sauce, crispy noodle nest', price: '2,900', img: '/images/meals/byob/mongolian-beef.jpg' },
      { name: 'Shanghai Chicken Noodles', desc: 'Hand-pulled noodles, spiced Shanghai chicken, soy broth, pickled veg', price: '2,500', img: '/images/meals/byob/shanghai-chicken-noodles.jpg' },
      { name: 'Singapore Chicken Noodles', desc: 'Thin vermicelli, Singapore-spiced chicken, egg, spring onion, curry leaf', price: '2,400', img: '/images/meals/byob/singapore-chicken-noodles.jpg' },
      { name: 'Szechuan Chicken', desc: 'Tender chicken in numbing Szechuan sauce, dried chilli, roasted peanuts', price: '2,500', img: '/images/meals/byob/szechuan-chicken.jpg' },
    ],
  },
  Desserts: [
    { name: 'Caramel Wok Pineapple', desc: 'Wok-caramelised fresh pineapple, salted caramel, vanilla cream', price: '950', img: '/images/meals/desserts/caramel-wok-pineapple.jpg' },
    { name: 'Chinese Honey Banana', desc: 'Crispy battered banana, honey glaze, sesame, served with ice cream', price: '900', img: '/images/meals/desserts/chinese-honey-banana.jpg' },
    { name: 'Chocolate Bao Buns', desc: 'Steamed chocolate bao, dark chocolate ganache, berry coulis', price: '1,100', img: '/images/meals/desserts/chocolate-bao-buns.jpg' },
    { name: 'Coconut Pandan Cake', desc: 'Layered pandan sponge, coconut cream frosting, toasted coconut flakes', price: '1,050', img: '/images/meals/desserts/coconut-pandan-cake.jpg' },
    { name: 'Dragon Chocolate Lava Cake', desc: '70% Ceylon dark cocoa lava cake, passion fruit coulis, matcha ice cream', price: '1,200', img: '/images/meals/desserts/dragon-chocolate-lava-cake.jpg' },
    { name: 'Mango Coconut Pudding', desc: 'Silky coconut panna cotta, Alphonso mango coulis, edible flowers', price: '950', img: '/images/meals/desserts/mango-coconut-pudding.jpg' },
    { name: 'Sesame Ice Cream Crunch', desc: 'Artisan sesame ice cream, black sesame brittle, honey drizzle', price: '1,000', img: '/images/meals/desserts/sesame-ice-cream-crunch.jpg' },
  ],
};

export default function Menu() {
  const [active, setActive] = useState('Appetizers');
  const [ref, v] = useFadeIn(0.1);

  const isByob = active === 'BYOB Menu';
  const items = isByob ? menuData['BYOB Menu'].items : menuData[active];

  return (
    <section className="menu" id="menu">
      <div className="menu-header" ref={ref}>
        <span className="section-eyebrow">Culinary Journey</span>
        <h2 className={`menu-title fade-in ${v ? 'visible' : ''}`}>Our Menu</h2>
        <div className={`divider-line center fade-in delay-1 ${v ? 'visible' : ''}`} />
        <p className={`menu-sub fade-in delay-2 ${v ? 'visible' : ''}`}>
          Every dish is a bridge between the familiar and the extraordinary.
          Prices in Sri Lankan Rupees (LKR).
        </p>
      </div>

      {/* Category tabs */}
      <div className="menu-tabs">
        {categories.map(cat => (
          <button
            key={cat}
            className={`menu-tab ${active === cat ? 'active' : ''} ${cat === 'BYOB Menu' ? 'byob-tab' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat === 'BYOB Menu' ? (
              <><span className="byob-dot">🍷</span> BYOB Menu</>
            ) : cat}
          </button>
        ))}
      </div>

      {/* BYOB Banner */}
      {isByob && (
        <div className="byob-banner">
          <div className="byob-banner-inner">
            <div className="byob-banner-text">
              <span className="byob-icon-big">🍷</span>
              <div>
                <h3>{menuData['BYOB Menu'].note.title}</h3>
                <p>{menuData['BYOB Menu'].note.text}</p>
              </div>
            </div>
            <div className="byob-perks-row">
              {menuData['BYOB Menu'].note.perks.map(p => (
                <div key={p} className="byob-perk-pill">
                  <span className="perk-check">✓</span> {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Menu grid with images */}
      <div className={`menu-cards-grid ${isByob ? 'byob-grid' : ''}`}>
        {items.map((item, i) => (
          <MenuCard key={item.name} item={item} index={i} />
        ))}
      </div>

      <div className="menu-footer-note">
        <p>All dishes prepared fresh to order. Please inform your server of any dietary requirements.<br />
          Prices are exclusive of government taxes.</p>
        <button
          className="btn-wa"
          onClick={() => document.querySelector('#order')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.527 5.845L0 24l6.335-1.506A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.018-1.38l-.36-.214-3.73.886.916-3.629-.235-.373A9.818 9.818 0 1112 21.818z"/>
          </svg>
          Order via WhatsApp
        </button>
      </div>
    </section>
  );
}

function MenuCard({ item, index }) {
  const [ref, v] = useFadeIn(0.08);

  return (
    <div
      ref={ref}
      className={`menu-card fade-in ${v ? 'visible' : ''}`}
      style={{ transitionDelay: `${(index % 4) * 0.08}s` }}
    >
      <div className="menu-card-img">
        <img src={item.img} alt={item.name} loading="lazy" />
        <div className="menu-card-img-overlay" />
        {item.badge && <span className="menu-badge">{item.badge}</span>}
      </div>
      <div className="menu-card-body">
        <div className="menu-card-top">
          <h3 className="menu-item-name">{item.name}</h3>
          <span className="menu-price">Rs. {item.price}</span>
        </div>
        <p className="menu-item-desc">{item.desc}</p>
      </div>
    </div>
  );
}
