import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="/" className="navbar-logo" onClick={handleLogoClick}>
          <img src="/images/logo.png" alt="Del Zen Kizuna" className="logo-img" />
        </a>

        <nav className={`navbar-links ${open ? 'open' : ''}`}>
          {links.map(l => (
            <button key={l.label} className="nav-link" onClick={() => handleNav(l.href)}>
              {l.label}
            </button>
          ))}
          <button className="nav-link" onClick={() => { setOpen(false); navigate('/order'); }}>
            Order Online
          </button>
          <button className="nav-cta" onClick={() => { setOpen(false); handleNav('#reservations'); }}>
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
