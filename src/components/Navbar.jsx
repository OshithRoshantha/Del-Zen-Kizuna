import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Reservation', href: '#reservation' },
  { label: 'Order Online', href: '#order', highlight: true },
  { label: 'Contact', href: '#contact' },
];

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    clipPath: 'circle(0% at calc(100% - 40px) 32px)',
  },
  visible: {
    opacity: 1,
    clipPath: 'circle(150% at calc(100% - 40px) 32px)',
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.07,
      delayChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    clipPath: 'circle(0% at calc(100% - 40px) 32px)',
    transition: {
      duration: 0.45,
      ease: [0.55, 0, 1, 0.45],
    },
  },
};

const mobileLinkVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.25,
    },
  },
};

const navbarTransition = {
  duration: 0.4,
  ease: [0.22, 1, 0.36, 1],
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ── Desktop / Mobile Navbar Bar ── */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={navbarTransition}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          background: scrolled
            ? 'rgba(10, 10, 10, 0.75)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(201, 169, 110, 0.1)'
            : '1px solid transparent',
          transition: 'background 0.4s ease, border-bottom 0.4s ease, backdrop-filter 0.4s ease',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '1400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {/* ── Left: Decorative Gold Diamond ── */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#C9A96E',
                transform: 'rotate(45deg)',
                flexShrink: 0,
              }}
            />
          </div>

          {/* ── Center: Logo ── */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.1rem',
              fontWeight: 600,
              letterSpacing: '0.3em',
              color: '#C9A96E',
              textDecoration: 'none',
              userSelect: 'none',
              cursor: 'pointer',
            }}
          >
            DEL ZEN KIZUNA
          </a>

          {/* ── Right: Desktop Navigation Links ── */}
          <div
            className="navbar-desktop-links"
            style={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 400,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: link.highlight ? '#C9A96E' : '#aaaaaa',
                  textDecoration: 'none',
                  padding: link.highlight
                    ? '6px 14px'
                    : '6px 0',
                  border: link.highlight
                    ? '1px solid rgba(201, 169, 110, 0.4)'
                    : '1px solid transparent',
                  borderRadius: '2px',
                  transition:
                    'color 0.3s ease, border-color 0.3s ease',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#C9A96E';
                  if (link.highlight) {
                    e.currentTarget.style.borderColor =
                      'rgba(201, 169, 110, 0.8)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = link.highlight
                    ? '#C9A96E'
                    : '#aaaaaa';
                  if (link.highlight) {
                    e.currentTarget.style.borderColor =
                      'rgba(201, 169, 110, 0.4)';
                  }
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* ── Mobile Hamburger Button ── */}
          <button
            className="navbar-hamburger"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            style={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              width: '28px',
              height: '20px',
              display: 'none',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              zIndex: 60,
            }}
          >
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: 45, y: 9, width: '100%' }
                  : { rotate: 0, y: 0, width: '100%' }
              }
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: 'block',
                height: '1.5px',
                width: '100%',
                backgroundColor: '#C9A96E',
                transformOrigin: 'center',
              }}
            />
            <motion.span
              animate={
                mobileOpen
                  ? { opacity: 0, scaleX: 0 }
                  : { opacity: 1, scaleX: 1 }
              }
              transition={{ duration: 0.25 }}
              style={{
                display: 'block',
                height: '1.5px',
                width: '100%',
                backgroundColor: '#C9A96E',
                transformOrigin: 'center',
              }}
            />
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: -45, y: -9, width: '100%' }
                  : { rotate: 0, y: 0, width: '100%' }
              }
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: 'block',
                height: '1.5px',
                width: '100%',
                backgroundColor: '#C9A96E',
                transformOrigin: 'center',
              }}
            />
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile Full-Screen Overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 50,
              background: 'rgba(10, 10, 10, 0.97)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0',
            }}
          >
            {/* Decorative diamond at top */}
            <motion.div
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: '#C9A96E',
                transform: 'rotate(45deg)',
                marginBottom: '3rem',
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            />

            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                variants={mobileLinkVariants}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.6rem',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: link.highlight ? '#C9A96E' : '#aaaaaa',
                  textDecoration: 'none',
                  padding: '1rem 0',
                  borderBottom: link.highlight
                    ? 'none'
                    : '1px solid rgba(201, 169, 110, 0.08)',
                  cursor: 'pointer',
                  textAlign: 'center',
                  width: '70%',
                  maxWidth: '300px',
                  border: link.highlight
                    ? '1px solid rgba(201, 169, 110, 0.4)'
                    : undefined,
                  borderRadius: link.highlight ? '2px' : undefined,
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#C9A96E';
                  if (link.highlight) {
                    e.currentTarget.style.borderColor =
                      'rgba(201, 169, 110, 0.8)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = link.highlight
                    ? '#C9A96E'
                    : '#aaaaaa';
                  if (link.highlight) {
                    e.currentTarget.style.borderColor =
                      'rgba(201, 169, 110, 0.4)';
                  }
                }}
              >
                {link.label}
              </motion.a>
            ))}

            {/* Bottom decorative element */}
            <motion.div
              style={{
                marginTop: '2.5rem',
                width: '60px',
                height: '1px',
                background:
                  'linear-gradient(90deg, transparent, #C9A96E, transparent)',
              }}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Responsive Styles ── */}
      <style>{`
        @media (max-width: 768px) {
          .navbar-desktop-links {
            display: none !important;
          }
          .navbar-hamburger {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
