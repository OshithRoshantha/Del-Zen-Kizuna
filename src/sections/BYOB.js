import React from 'react';
import useFadeIn from '../components/useFadeIn';
import './BYOB.css';

const perks = [
  { icon: '🍷', title: 'Bring Your Own Bottle', desc: 'No corkage fee. Bring your favourite wine, whisky, or spirits to complement your meal.' },
  { icon: '🧊', title: 'Ice & Glassware Provided', desc: 'We provide premium glassware, ice buckets, and all accompaniments at no charge.' },
  { icon: '🔒', title: 'Secured Storage', desc: 'Your bottles are stored safely upon arrival until you\'re ready to enjoy them.' },
  { icon: '🎉', title: 'Perfect for Celebrations', desc: 'Ideal for birthdays, anniversaries, and corporate events. Ask us about exclusive event packages.' },
];

export default function BYOB() {
  const [ref, v] = useFadeIn(0.1);

  return (
    <section className="byob" id="byob">
      <div className="byob-inner">
        <div className="byob-visual">
          <div className="byob-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80"
              alt="BYOB concept"
            />
            <div className="byob-img-overlay" />
          </div>
          <div className="byob-badge">
            <span>BYOB</span>
            <span>No Corkage</span>
          </div>
        </div>

        <div className="byob-content">
          <div ref={ref}>
            <span className={`section-eyebrow fade-in ${v ? 'visible' : ''}`}>A Unique Concept</span>
            <h2 className={`byob-title fade-in delay-1 ${v ? 'visible' : ''}`}>
              Bring Your Own<br /><em>Bottle</em>
            </h2>
            <div className={`divider-line fade-in delay-2 ${v ? 'visible' : ''}`} />
            <p className={`byob-desc fade-in delay-2 ${v ? 'visible' : ''}`}>
              At Del Zen Kizuna, we believe your perfect evening includes the drink of your choosing.
              Our BYOB policy is designed to give you total freedom — pair your meal with the wine
              you love, the whisky you've been saving, or the champagne that marks the occasion.
              No corkage fee. No compromise.
            </p>
          </div>

          <div className="byob-perks">
            {perks.map((p, i) => (
              <PerkCard key={p.title} perk={p} delay={i * 0.12} />
            ))}
          </div>

          <div className={`byob-note fade-in ${v ? 'visible' : ''}`} style={{ transitionDelay: '0.5s' }}>
            <span>For groups of 8+, please contact us in advance to arrange your BYOB setup.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function PerkCard({ perk, delay }) {
  const [ref, v] = useFadeIn(0.15);
  return (
    <div ref={ref} className={`perk-card fade-in ${v ? 'visible' : ''}`} style={{ transitionDelay: `${delay}s` }}>
      <span className="perk-icon">{perk.icon}</span>
      <div>
        <h4 className="perk-title">{perk.title}</h4>
        <p className="perk-desc">{perk.desc}</p>
      </div>
    </div>
  );
}
