import React from 'react';
import useFadeIn from '../components/useFadeIn';
import './Directors.css';

const directors = [
  {
    name: 'Janaka Dharmaekeerthi',
    title: 'Chairman & Managing Director',
    description:
      'With decades of leadership in business and entrepreneurship across Sri Lanka, Janaka brings visionary guidance and unwavering commitment to excellence. His deep understanding of the local market and passion for elevating Sri Lankan hospitality are the foundations upon which Del Zen Kizuna is built.',
    img: '/images/directors/director-janaka.png',
    quote: '"Excellence is not an act — it is a habit cultivated every single day."',
  },
  {
    name: 'Delsha Dabarera',
    title: 'Director & Co-Founder',
    description:
      'Delsha is the creative force and operational heart of Del Zen Kizuna. With a sharp eye for detail and a natural gift for hospitality, he oversees the guest experience from concept to execution — ensuring that every visit is not just a meal, but a lasting memory worth sharing.',
    img: '/images/directors/director-delsha.jpg',
    quote: '"Every guest deserves to feel like the most important person in the room."',
  },
  {
    name: 'Lady Director',
    title: 'Director — Culture & Community',
    description:
      'A passionate advocate for Sri Lankan culinary heritage and community connection, she brings warmth, cultural depth, and an authentic spirit to everything Del Zen Kizuna represents. Her guidance ensures that the restaurant remains deeply rooted in the values and traditions of Sri Lanka while embracing the world.',
    img: '/images/directors/director-lady.png',
    quote: '"Our food carries the soul of our people — that is something we must always protect."',
  },
];

export default function Directors() {
  const [ref, v] = useFadeIn(0.1);

  return (
    <section className="directors" id="directors">
      <div className="directors-header" ref={ref}>
        <span className={`section-eyebrow fade-in ${v ? 'visible' : ''}`}>The Visionaries</span>
        <h2 className={`directors-title fade-in delay-1 ${v ? 'visible' : ''}`}>
          Minds Behind<br /><em>the Bond</em>
        </h2>
        <div className={`divider-line center fade-in delay-2 ${v ? 'visible' : ''}`} />
        <p className={`directors-sub fade-in delay-2 ${v ? 'visible' : ''}`}>
          Three individuals united by one shared dream — to celebrate Sri Lankan heritage
          and Asian artistry through the universal language of extraordinary food.
        </p>
      </div>

      <div className="directors-grid">
        {directors.map((d, i) => (
          <DirectorCard key={d.name} director={d} delay={i * 0.15} />
        ))}
      </div>
    </section>
  );
}

function DirectorCard({ director, delay }) {
  const [ref, v] = useFadeIn(0.12);

  return (
    <div
      ref={ref}
      className={`director-card fade-in ${v ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="director-img-wrap">
        <img src={director.img} alt={director.name} />
        <div className="director-img-overlay" />
        <div className="director-quote-hover">{director.quote}</div>
      </div>
      <div className="director-info">
        <h3 className="director-name">{director.name}</h3>
        <span className="director-title-tag">{director.title}</span>
        <div className="divider-line" style={{ marginTop: '1rem' }} />
        <p className="director-desc">{director.description}</p>
      </div>
    </div>
  );
}
