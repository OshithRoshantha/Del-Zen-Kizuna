import React, { useState, useEffect } from 'react';
import './Navbar.css';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Order Online', href: '#order' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#hero" className="navbar-logo" onClick={(e) => { e.preventDefault(); handleNav('#hero'); }}>
          <img src="/images/logo.png" alt="Del Zen Kizuna" className="logo-img" />
        </a>

        <nav className={`navbar-links ${open ? 'open' : ''}`}>
          {links.map(l => (
            <button key={l.label} className="nav-link" onClick={() => handleNav(l.href)}>
              {l.label}
            </button>
          ))}
          <button className="nav-cta" onClick={() => handleNav('#reservations')}>
            Reserve a Table
          </button>
        </nav>

        <button className={`hamburger ${open ? 'active' : ''}`} onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
