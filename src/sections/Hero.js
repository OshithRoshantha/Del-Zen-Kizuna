import React, { useEffect, useState } from 'react';
import './Hero.css';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      {/* Layered background */}
      <div className="hero-bg">
        <div className="hero-bg-overlay" />
        <div className="hero-bg-pattern" />
        <div className="hero-bg-vignette" />
      </div>

      {/* Animated kanji watermark */}
      <div className={`hero-kanji ${loaded ? 'visible' : ''}`}>絆</div>

      <div className="hero-content">
        <div className={`hero-eyebrow ${loaded ? 'visible' : ''}`}>
          Sri Lankan & Asian Fusion
        </div>

        <h1 className={`hero-title ${loaded ? 'visible' : ''}`}>
          <span className="title-line1">Del Zen</span>
          <span className="title-line2">Kizuna</span>
        </h1>

        <p className={`hero-tagline ${loaded ? 'visible' : ''}`}>
          Where bonds are forged through flavour
        </p>

        <div className={`hero-actions ${loaded ? 'visible' : ''}`}>
          <button className="btn-primary" onClick={() => scrollTo('#reservations')}>
            Reserve Your Table
          </button>
          <button className="btn-ghost" onClick={() => scrollTo('#menu')}>
            Explore the Menu
          </button>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>

      {/* Bottom info strip */}
      <div className="hero-strip">
        <div className="strip-item">
          <span className="strip-label">Open Daily</span>
          <span className="strip-value">11:00 AM – 11:00 PM</span>
        </div>
        <div className="strip-divider" />
        <div className="strip-item">
          <span className="strip-label">Location</span>
          <span className="strip-value">Colombo, Sri Lanka</span>
        </div>
        <div className="strip-divider" />
        <div className="strip-item">
          <span className="strip-label">Reservations</span>
          <span className="strip-value">+94 77 123 4567</span>
        </div>
        <div className="strip-divider" />
        <div className="strip-item">
          <span className="strip-label">Concept</span>
          <span className="strip-value">BYOB Available</span>
        </div>
      </div>
    </section>
  );
}
