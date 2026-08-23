import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  return (
    <section className="ratings" id="ratings">
      <div className="ratings-reviews-bg">
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
          <button
            className="btn-wa"
            onClick={() => navigate('/order')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.527 5.845L0 24l6.335-1.506A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.018-1.38l-.36-.214-3.73.886.916-3.629-.235-.373A9.818 9.818 0 1112 21.818z" />
            </svg>
            Order via WhatsApp
          </button>
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
