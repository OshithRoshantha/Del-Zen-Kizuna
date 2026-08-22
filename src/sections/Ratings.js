import React from 'react';
import useFadeIn from '../components/useFadeIn';
import './Ratings.css';

const reviews = [
  {
    name: 'Priya Navaratnam',
    role: 'Food Critic, The Sunday Times',
    stars: 5,
    text: 'Del Zen Kizuna is nothing short of a revelation. The black pork belly curry is the finest interpretation of Sri Lankan flavour I have tasted in years — deeply spiced, perfectly balanced, and presented with a refinement that rivals the best restaurants in Asia.',
    avatar: 'PN',
  },
  {
    name: 'James Worthington',
    role: 'Travel Writer, Condé Nast',
    stars: 5,
    text: 'An unmissable destination in Colombo. The 絆 Omakase is a seven-course narrative of two culinary worlds colliding beautifully. The BYOB concept is a stroke of genius — we brought a bottle of Burgundy and the sommelier-level guidance from staff was remarkable.',
    avatar: 'JW',
  },
  {
    name: 'Kavindi & Roshan',
    role: 'Anniversary Dinner Guests',
    stars: 5,
    text: 'We celebrated our 10th anniversary at Del Zen Kizuna and the team made it absolutely unforgettable. From the personalised menu card to the dessert with our names, every detail was thoughtful. We will return for every special occasion.',
    avatar: 'KR',
  },
];

const aggregates = [
  { platform: 'Google', rating: '4.9', reviews: '284' },
  { platform: 'TripAdvisor', rating: '5.0', reviews: '147' },
  { platform: 'Facebook', rating: '4.8', reviews: '319' },
];

function Stars({ count }) {
  return (
    <div className="stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? 'star filled' : 'star'}>★</span>
      ))}
    </div>
  );
}

export default function Ratings() {
  const [ref, v] = useFadeIn(0.1);

  return (
    <section className="ratings" id="ratings">
      <div className="ratings-header" ref={ref}>
        <span className={`section-eyebrow fade-in ${v ? 'visible' : ''}`}>Guest Voices</span>
        <h2 className={`ratings-title fade-in delay-1 ${v ? 'visible' : ''}`}>
          What Our<br /><em>Guests Say</em>
        </h2>
        <div className={`divider-line center fade-in delay-2 ${v ? 'visible' : ''}`} />
      </div>

      {/* Aggregate scores */}
      <div className={`agg-strip fade-in ${v ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
        {aggregates.map(a => (
          <div key={a.platform} className="agg-item">
            <span className="agg-platform">{a.platform}</span>
            <span className="agg-rating">{a.rating}</span>
            <Stars count={5} />
            <span className="agg-reviews">{a.reviews} reviews</span>
          </div>
        ))}
      </div>

      {/* Review cards */}
      <div className="reviews-grid">
        {reviews.map((r, i) => (
          <ReviewCard key={r.name} review={r} delay={i * 0.15} />
        ))}
      </div>

      {/* Final CTA */}
      <div className="ratings-cta">
        <div className="cta-kanji">絆</div>
        <h3>Join the Kizuna Experience</h3>
        <p>Reserve your table and become part of our story.</p>
        <div className="cta-buttons">
          <button
            className="btn-primary"
            onClick={() => document.querySelector('#reservations')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Reserve a Table
          </button>
          <a
            href="https://wa.me/94771234567?text=Hello%20Del%20Zen%20Kizuna!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-link"
          >
            Order via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review, delay }) {
  const [ref, v] = useFadeIn(0.15);
  return (
    <div ref={ref} className={`review-card fade-in ${v ? 'visible' : ''}`} style={{ transitionDelay: `${delay}s` }}>
      <div className="review-top">
        <Stars count={review.stars} />
        <span className="review-quote-mark">"</span>
      </div>
      <p className="review-text">{review.text}</p>
      <div className="review-author">
        <div className="review-avatar">{review.avatar}</div>
        <div>
          <span className="review-name">{review.name}</span>
          <span className="review-role">{review.role}</span>
        </div>
      </div>
    </div>
  );
}
