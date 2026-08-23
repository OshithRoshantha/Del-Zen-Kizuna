import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
    } else {
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/images/logo.png" alt="Del Zen Kizuna" className="footer-logo-img" />
          </div>
          <p className="footer-tagline">
            Where bonds are forged through flavour.<br />
            Sri Lankan & Asian Fusion Cuisine — Colombo, Sri Lanka.
          </p>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
            <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer" className="social-link">WhatsApp</a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              {[['About', '#about'], ['Directors', '#directors'], ['Menu', '#menu'], ['Reservations', '#reservations']].map(([l, h]) => (
                <li key={l}><button onClick={() => scrollTo(h)}>{l}</button></li>
              ))}
              <li><button onClick={() => navigate('/order')}>Order Online</button></li>
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
        <p>
          <span style={{ color: '#FFD700' }}>Solutions by </span>{"  "}
          <a 
            href="https://odlabs.me/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <strong style={{ fontSize: '1.3em', fontWeight: '900' }}>
              <span style={{ color: '#ffffff' }}>OD</span>
              <span style={{ color: '#1A73E8' }}>LABS</span>
            </strong>
          </a>
        </p>
        <p className="footer-meaning">
          <em>Del</em> · Delight &nbsp;|&nbsp; <em>Zen</em> · Harmony &nbsp;|&nbsp; <em>絆 Kizuna</em> · Bond
        </p>
      </div>
    </footer>
  );
}