import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const menuItems = [
  {
    name: 'Kizuna Platter',
    description:
      'A grand selection of our finest signature dishes, showcasing the best of Sri Lankan and Asian flavors on one exquisite platter.',
    price: 'LKR 8,500',
    category: 'Signature',
  },
  {
    name: 'Zen Garden Roll',
    description:
      'Freshly rolled with ocean-fresh ingredients, delicate avocado, crab, and our secret wasabi-cream sauce.',
    price: 'LKR 3,200',
    category: 'Asian Fusion',
  },
  {
    name: 'Spice Island Curry',
    description:
      'A rich, aromatic Sri Lankan curry blending twelve traditional spices with tender slow-cooked meat.',
    price: 'LKR 4,800',
    category: 'Sri Lankan',
  },
  {
    name: 'Harmony Seafood Bowl',
    description:
      'Grilled jumbo prawns, calamari, and crab served on fragrant Sri Lankan basmati with our signature sambal.',
    price: 'LKR 5,600',
    category: 'Seafood',
  },
  {
    name: 'Temple of Gold',
    description:
      'Crispy golden tempura featuring seasonal vegetables and tiger prawns with a passion-fruit ponzu dip.',
    price: 'LKR 3,800',
    category: 'Asian Fusion',
  },
  {
    name: 'Ceylon Spice Rack',
    description:
      'A tasting journey of five mini curries, each representing a different region of Sri Lanka.',
    price: 'LKR 4,200',
    category: 'Sri Lankan',
  },
  {
    name: "Ocean's Bounty",
    description:
      'Freshly caught lobster and crab prepared in our signature garlic-butter Sri Lankan style.',
    price: 'LKR 9,200',
    category: 'Seafood',
  },
  {
    name: 'Midnight Mango',
    description:
      'Tropical mango dessert with coconut cream, palm sugar caramel, and a hint of Ceylon cinnamon.',
    price: 'LKR 2,400',
    category: 'Desserts',
  },
  {
    name: 'Bond of Flames',
    description:
      "Our chef's fiery signature — wagyu beef strip infused with Sri Lankan chili and Japanese teriyaki glaze.",
    price: 'LKR 7,800',
    category: 'Signature',
  },
];

const categories = ['Signature', 'Sri Lankan', 'Asian Fusion', 'Seafood', 'Desserts'];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Signature');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const filteredItems =
    activeCategory === 'Signature'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" style={{
      padding: '120px 0 80px',
      background: '#0a0a0a',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ textAlign: 'center' }}
        >
          <span style={{
            fontFamily: 'Inter',
            fontSize: '0.7rem',
            letterSpacing: '0.3em',
            color: '#C9A96E',
            textTransform: 'uppercase',
          }}>
            CULINARY JOURNEY
          </span>
          <div style={{
            width: '60px',
            height: '1px',
            background: '#C9A96E',
            margin: '16px auto 0',
          }} />
          <h2 style={{
            fontFamily: 'Playfair Display',
            fontSize: '3rem',
            color: 'white',
            fontWeight: 400,
            margin: '20px 0 0',
          }}>
            Our Menu
          </h2>
          <p style={{
            fontFamily: 'Cormorant Garamond',
            fontStyle: 'italic',
            fontSize: '1.1rem',
            color: '#888',
            margin: '12px auto 0',
            maxWidth: '600px',
          }}>
            A curated selection of Sri Lankan heritage dishes and Asian fusion creations
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '50px',
            flexWrap: 'wrap',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '10px 24px',
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontFamily: 'Inter',
                color: activeCategory === cat ? '#C9A96E' : '#888',
                border: `1px solid ${
                  activeCategory === cat
                    ? 'rgba(201, 169, 110, 0.3)'
                    : 'transparent'
                }`,
                background: 'transparent',
                cursor: 'pointer',
                transition: 'all 0.3s',
                outline: 'none',
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.color = '#C9A96E';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.color = '#888';
                }
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <div id="menu-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginTop: '50px',
        }}>
          <style>{`
            @media (max-width: 768px) {
              #menu-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: 'easeOut',
              }}
              style={{
                background: 'rgba(21, 21, 21, 0.6)',
                border: '1px solid rgba(255,255,255,0.05)',
                padding: '28px',
                transition: 'all 0.4s',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201, 169, 110, 0.2)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.background = 'rgba(21, 21, 21, 0.9)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(21, 21, 21, 0.6)';
              }}
            >
              {/* Category Badge */}
              <span style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                fontSize: '0.6rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#555',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '3px 8px',
                fontFamily: 'Inter',
              }}>
                {item.category}
              </span>

              {/* Dish Name */}
              <h3 style={{
                fontFamily: 'Playfair Display',
                fontSize: '1.2rem',
                color: 'white',
                fontWeight: 500,
                margin: 0,
              }}>
                {item.name}
              </h3>

              {/* Gold Dotted Line */}
              <div style={{
                borderTop: '1px dotted rgba(201, 169, 110, 0.4)',
                marginTop: '10px',
              }} />

              {/* Description */}
              <p style={{
                fontFamily: 'Inter',
                fontSize: '0.82rem',
                color: '#777',
                lineHeight: 1.7,
                marginTop: '12px',
                margin: '12px 0 0',
                flex: 1,
              }}>
                {item.description}
              </p>

              {/* Price */}
              <p style={{
                fontFamily: 'Inter',
                fontSize: '0.85rem',
                color: '#C9A96E',
                fontWeight: 600,
                marginTop: '16px',
                marginBottom: 0,
              }}>
                {item.price}
              </p>
            </motion.div>
          ))}
        </div>

        {/* BYOB Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          style={{
            marginTop: '100px',
            borderTop: '1px solid rgba(201, 169, 110, 0.3)',
            background: 'linear-gradient(135deg, rgba(201, 169, 110, 0.03), transparent)',
          }}
        >
          <div style={{
            maxWidth: '700px',
            margin: '0 auto',
            padding: '60px 20px',
            textAlign: 'center',
          }}>
            {/* Decorative Gold Diamond */}
            <div style={{
              display: 'inline-block',
              width: '12px',
              height: '12px',
              border: '1px solid #C9A96E',
              transform: 'rotate(45deg)',
            }} />

            <h3 style={{
              fontFamily: 'Playfair Display',
              fontSize: '2rem',
              color: 'white',
              fontWeight: 400,
              margin: '16px 0 0',
            }}>
              Bring Your Own Bottle
            </h3>

            <p style={{
              fontFamily: 'Inter',
              fontSize: '0.9rem',
              color: '#888',
              lineHeight: 1.8,
              margin: '16px 0 0',
            }}>
              At Del Zen Kizuna, we invite you to bring your favorite beverage to
              complement your dining experience. Whether it's a vintage wine, a
              craft beer, or a special spirits selection — we'll ensure the
              perfect pairing with our cuisine. No corkage fee, just pure
              enjoyment.
            </p>

            <span style={{
              display: 'inline-block',
              marginTop: '24px',
              fontFamily: 'Inter',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#C9A96E',
              border: '1px solid rgba(201, 169, 110, 0.2)',
              padding: '8px 20px',
            }}>
              No Corkage Fee
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
