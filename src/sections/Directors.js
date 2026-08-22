import React from 'react';
import useFadeIn from '../components/useFadeIn';
import './Directors.css';

const directors = [
  {
    name: 'Arjun Perera',
    title: 'Founder & Executive Director',
    description:
      'With over 20 years in the Sri Lankan hospitality industry, Arjun envisioned Del Zen Kizuna as a place where his homeland\'s culinary treasures could be celebrated on a world stage. His passion for authentic flavour and his belief in the power of a shared meal drives every decision made at the restaurant.',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80',
    quote: '"Food is the bridge between cultures."',
  },
  {
    name: 'Mei Lin Tanaka',
    title: 'Executive Chef & Creative Director',
    description:
      'Trained in Tokyo and refined in Singapore, Mei Lin brings a precise, artistic sensibility to the kitchen. She curates each dish as a narrative — honouring the spice traditions of Sri Lanka while weaving in contemporary Japanese and South-East Asian techniques that elevate every plate.',
    img: 'https://images.unsplash.com/photo-1583394293214-0b8e2c54db12?w=600&q=80',
    quote: '"Each dish tells the story of two worlds."',
  },
  {
    name: 'Dilshan Fernando',
    title: 'Director of Hospitality & Operations',
    description:
      'A veteran of five-star hospitality across Asia, Dilshan ensures that every guest\'s experience is flawless — from the first greeting to the last farewell. His philosophy is simple: genuine warmth, impeccable attention, and a commitment to making every visit feel like a celebration.',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80',
    quote: '"Hospitality is the art of making people feel at home."',
  },
];

export default function Directors() {
  const [ref, v] = useFadeIn(0.1);

  return (
    <section className="directors" id="directors">
      <div className="directors-header" ref={ref}>
        <span className={`section-eyebrow ${v ? 'visible' : ''}`} style={{ opacity: v ? 1 : 0, transition: 'opacity 0.8s' }}>The Visionaries</span>
        <h2 className={`directors-title fade-in ${v ? 'visible' : ''}`}>
          Minds Behind<br /><em>the Bond</em>
        </h2>
        <div className="divider-line center" />
        <p className={`directors-sub fade-in delay-1 ${v ? 'visible' : ''}`}>
          Three individuals, one shared dream — to unite cultures through the universal language of extraordinary food.
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
  const [ref, v] = useFadeIn(0.15);

  return (
    <div
      ref={ref}
      className={`director-card fade-in ${v ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="director-img-wrap">
        <img src={director.img} alt={director.name} />
        <div className="director-img-overlay" />
        <div className="director-quote">{director.quote}</div>
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
