import React from 'react';
import useFadeIn from '../components/useFadeIn';
import './About.css';

export default function About() {
  const [ref1, v1] = useFadeIn();
  const [ref2, v2] = useFadeIn();
  const [ref3, v3] = useFadeIn();

  return (
    <section className="about" id="about">
      <div className="about-inner">
        {/* Left: visual column */}
        <div className="about-visual" ref={ref1}>
          <div className={`about-img-frame ${v1 ? 'visible' : ''}`}>
            <div className="about-img-main">
              <img
                src="/images/meals/restaurant/dragon-prawn-fried-rice.jpg"
                alt="Del Zen Kizuna signature dish"
              />
            </div>
            <div className="about-img-accent">
              <img
                src="/images/meals/desserts/dragon-chocolate-lava-cake.jpg"
                alt="Artisan dessert"
              />
            </div>
            <div className="about-img-badge">
              <img src="/images/logo.png" alt="Del Zen Kizuna" className="badge-logo" />
            </div>
          </div>
        </div>

        {/* Right: text column */}
        <div className="about-text">
          <div ref={ref2} className={`fade-in ${v2 ? 'visible' : ''}`}>
            <span className="section-eyebrow">Our Story</span>
            <h2 className="about-heading">
              Where Sri Lankan<br />
              <em>Heritage Meets</em><br />
              Asian Artistry
            </h2>
            <div className="divider-line" />
          </div>

          <div ref={ref3} className={`fade-in delay-2 ${v3 ? 'visible' : ''}`}>
            <p className="about-body">
              Del Zen Kizuna was born from a singular vision — to create a space where
              the bold, aromatic soul of Sri Lankan cuisine converges with the refined
              elegance of Asian culinary traditions. The name itself tells our story:
              <em> Del</em> for the delight of every bite, <em>Zen</em> for the harmony
              of flavours, and <em>Kizuna</em> (絆) — the Japanese word for bond —
              for the connections forged at every table.
            </p>
            <p className="about-body">
              We source our ingredients with care, partnering with local Sri Lankan
              farmers and artisans to ensure every dish honours both the land and its
              people. Our kitchen marries ancient spice traditions with modern
              techniques, delivering an experience that is as memorable as it is authentic.
            </p>

            <div className="about-values">
              {['Excellence', 'Authenticity', 'Innovation', 'Sustainability'].map((v) => (
                <div key={v} className="value-chip">
                  <span className="value-dot" />
                  {v}
                </div>
              ))}
            </div>

            <div className="about-stats">
              <div className="stat">
                <span className="stat-num">60+</span>
                <span className="stat-label">Signature Dishes</span>
              </div>
              <div className="stat-sep" />
              <div className="stat">
                <span className="stat-num">8</span>
                <span className="stat-label">Core Values</span>
              </div>
              <div className="stat-sep" />
              <div className="stat">
                <span className="stat-num">100%</span>
                <span className="stat-label">Local Ingredients</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Name meaning strip */}
      <div className="name-meaning">
        <div className="meaning-item">
          <span className="meaning-word">Del</span>
          <span className="meaning-def">Delight & Joy of exceptional dining</span>
        </div>
        <div className="meaning-sep">·</div>
        <div className="meaning-item">
          <span className="meaning-word">Zen</span>
          <span className="meaning-def">Harmony, balance & refined simplicity</span>
        </div>
        <div className="meaning-sep">·</div>
        <div className="meaning-item">
          <span className="meaning-word">絆 Kizuna</span>
          <span className="meaning-def">Bond, connection & lasting relationships</span>
        </div>
      </div>
    </section>
  );
}
