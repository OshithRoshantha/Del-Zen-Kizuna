import React, { useEffect, useState } from 'react';
import './Hero.css';

const INFO = [
  { icon: '🕐', label: 'Open Daily', value: '11 AM – 11 PM' },
  { icon: '📍', label: 'Location', value: 'Colombo, Sri Lanka' },
  { icon: '📞', label: 'Reservations', value: '+94 77 123 4567' },
  { icon: '🍷', label: 'BYOB', value: 'No Corkage Fee' },
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="hero">

      {/* Full-bleed background: layered food image + dark overlay */}
      <div className="hero-bg">
        <div
          className="hero-bg-img"
          style={{ backgroundImage: "url('/images/meals/restaurant/dragon-prawn-fried-rice.jpg')" }}
        />
        <div className="hero-bg-gradient" />
        <div className="hero-bg-noise" />
      </div>

      {/* Giant decorative kanji — right side */}
      <div className={`hero-kanji ${loaded ? 'in' : ''}`} aria-hidden="true">絆</div>

      {/* ── Main content ── */}
      <div className="hero-body">

        {/* Left column */}
        <div className="hero-left">
          <div className={`hero-eyebrow ${loaded ? 'in' : ''}`}>
            <span className="eyebrow-line" />
            <span>Sri Lanka's Premier Asian Fusion Dining</span>
            <span className="eyebrow-line" />
          </div>

          <h1 className={`hero-title ${loaded ? 'in' : ''}`}>
            <span className="ht-del">Del</span>
            <span className="ht-zen">Zen</span>
            <span className="ht-kizuna">Kizuna</span>
          </h1>

          <p className={`hero-tagline ${loaded ? 'in' : ''}`}>
            Where bonds are forged<br />through flavour
          </p>
        </div>

        {/* Right column — logo centrepiece */}
        <div className="hero-right">
          <div className={`hero-logo-frame ${loaded ? 'in' : ''}`}>
            <div className="logo-ring logo-ring-outer" />
            <div className="logo-ring logo-ring-inner" />
            <img src="/images/logo.png" alt="Del Zen Kizuna" className="hero-logo-img" />
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <div className="scroll-track"><div className="scroll-thumb" /></div>
        <span>Scroll to explore</span>
      </div>

      {/* ── Bottom info bar ── */}
      <div className="hero-infobar">
        {INFO.map((item, i) => (
          <React.Fragment key={item.label}>
            {i > 0 && <div className="infobar-sep" />}
            <div className="infobar-item">
              <span className="infobar-icon">{item.icon}</span>
              <div className="infobar-text">
                <span className="infobar-label">{item.label}</span>
                <span className="infobar-value">{item.value}</span>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

    </section>
  );
}
