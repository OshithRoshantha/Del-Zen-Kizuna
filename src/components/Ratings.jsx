import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const reviews = [
  {
    text: "An absolutely extraordinary dining experience. The fusion of Sri Lankan and Asian flavors is unlike anything I've ever tasted. The BYOB concept made our anniversary celebration truly special.",
    name: "Sarah M.",
    source: "Google Reviews",
  },
  {
    text: "From the moment we walked in, the ambiance was breathtaking. Every dish was a masterpiece. The Kizuna Platter is a must-try — it's a journey of flavors in one sitting.",
    name: "James K.",
    source: "TripAdvisor",
  },
  {
    text: "The hospitality at Del Zen Kizuna is world-class. The staff's attention to detail and genuine warmth made us feel like royalty. This is fine dining at its finest in Sri Lanka.",
    name: "Priya R.",
    source: "Google Reviews",
  },
  {
    text: "I've dined at restaurants across Asia and Europe, but Del Zen Kizuna stands apart. The Ocean's Bounty dish was the best seafood I've had in years. Truly exceptional.",
    name: "Michael T.",
    source: "TripAdvisor",
  },
  {
    text: "What a hidden gem in Colombo! The Spice Island Curry transported me back to my grandmother's kitchen, yet with a modern twist that elevated it to new heights. Cannot wait to return.",
    name: "Anika S.",
    source: "Google Reviews",
  },
  {
    text: "Perfect for special occasions. We hosted a corporate dinner here and every single guest was impressed. The presentation, the flavors, the service — everything was impeccable.",
    name: "David L.",
    source: "TripAdvisor",
  },
  ];

const StarSVG = ({ size = 24, color = '#C9A96E', opacity = 1 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ opacity, display: 'inline-block' }}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
  </svg>
);

const ReviewCard = ({ review, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      style={{
        background: 'rgba(21, 21, 21, 0.6)',
        border: '1px solid rgba(255,255,255,0.05)',
        padding: '32px',
        transition: 'all 0.4s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(201, 169, 110, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
      }}
    >
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '3rem',
        color: 'rgba(201, 169, 110, 0.3)',
        lineHeight: 1,
      }}>
        &ldquo;
      </div>
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.88rem',
        color: '#aaa',
        lineHeight: 1.8,
        marginTop: 8,
        fontStyle: 'italic',
        margin: '8px 0 0 0',
      }}>
        {review.text}
      </p>
      <div style={{ marginTop: 16, display: 'flex', gap: 2 }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <StarSVG key={i} size={12} color="#C9A96E" opacity={1} />
        ))}
      </div>
      <div style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.8rem',
        color: 'white',
        fontWeight: 500,
        marginTop: 16,
      }}>
        {review.name}
      </div>
      <span style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.65rem',
        color: '#555',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        border: '1px solid rgba(255,255,255,0.06)',
        padding: '3px 10px',
        display: 'inline-block',
        marginTop: 6,
      }}>
        {review.source}
      </span>
    </motion.div>
  );
};

const Ratings = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="ratings" style={{ padding: '100px 0', background: '#0f0f0f' }}>
      <style>{`
        @media (max-width: 768px) {
          #ratings .ratings-grid {
            grid-template-columns: 1fr !important;
          }
          #ratings .ratings-heading {
            font-size: 2rem !important;
          }
          #ratings .ratings-score {
            font-size: 3.5rem !important;
          }
        }
      `}</style>
      {/* Section Header */}
      <div style={{ textAlign: 'center' }}>
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.7rem',
            letterSpacing: '0.3em',
            color: '#C9A96E',
            textTransform: 'uppercase',
            display: 'inline-block',
          }}>
            GUEST EXPERIENCES
          </span>
          <div style={{
            width: 60,
            height: 1,
            background: '#C9A96E',
            margin: '16px auto 0',
          }} />
          <h2 className="ratings-heading" style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '2.8rem',
            color: 'white',
            fontWeight: 400,
            margin: '20px 0 0 0',
          }}>
            What Our Guests Say
          </h2>
        </motion.div>
      </div>

      {/* Overall Rating Display */}
      <motion.div
        style={{ textAlign: 'center', marginTop: 50 }}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <div className="ratings-score" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '5rem',
          color: '#C9A96E',
          lineHeight: 1,
        }}>
          4.9
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginTop: 8 }}>
          <StarSVG size={24} color="#C9A96E" opacity={1} />
          <StarSVG size={24} color="#C9A96E" opacity={1} />
          <StarSVG size={24} color="#C9A96E" opacity={1} />
          <StarSVG size={24} color="#C9A96E" opacity={1} />
          <StarSVG size={24} color="#C9A96E" opacity={0.8} />
        </div>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.8rem',
          color: '#666',
          marginTop: 8,
        }}>
          Based on 2,400+ Reviews
        </div>
      </motion.div>

      {/* Review Cards Grid */}
      <div className="ratings-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24,
        maxWidth: 1100,
        margin: '50px auto 0',
        padding: '0 24px',
      }}>
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Ratings;
