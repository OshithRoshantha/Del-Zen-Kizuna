import React from 'react';
import './Footer.css';

export default function Footer() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="fl-del">Del</span>
            <span className="fl-zen">Zen</span>
            <span className="fl-kizuna">絆 Kizuna</span>
          </div>
          <p className="footer-tagline">
            Where bonds are forged through flavour.<br />
            Sri Lankan & Asian Fusion Cuisine — Colombo, Sri Lanka.
          </p>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <span>Instagram</span>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <span>Facebook</span>
            </a>
            <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer" className="social-link">
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              {[['About', '#about'],['Directors', '#directors'],['Menu', '#menu'],['BYOB', '#byob'],['Reservations', '#reservations'],['Order Online', '#order']].map(([l,h]) => (
                <li key={l}><button onClick={() => scrollTo(h)}>{l}</button></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><span>📞 +94 77 123 4567</span></li>
              <li><span>✉️ hello@delzenkizuna.lk</span></li>
              <li><span>📍 Colombo 03, Sri Lanka</span></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Hours</h4>
            <ul>
              <li><span>Lunch: 11 AM – 3 PM</span></li>
              <li><span>Dinner: 6 PM – 11 PM</span></li>
              <li><span>Open 7 days a week</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Del Zen Kizuna. All rights reserved.</p>
        <p className="footer-meaning">
          <em>Del</em> · Delight &nbsp;|&nbsp; <em>Zen</em> · Harmony &nbsp;|&nbsp; <em>絆 Kizuna</em> · Bond
        </p>
      </div>
    </footer>
  );
}
