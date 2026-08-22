import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Reservation = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '',
    date: '',
    time: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const labelStyle = {
    fontFamily: 'Inter',
    fontSize: '0.7rem',
    color: '#666',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginBottom: '8px',
    display: 'block',
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    color: 'white',
    fontFamily: 'Inter',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.3s',
    boxSizing: 'border-box',
  };

  const timeOptions = [];
  const startHour = 11;
  const endHour = 22;
  for (let h = startHour; h <= endHour; h++) {
    const period = h < 12 ? 'AM' : 'PM';
    const displayHour = h > 12 ? h - 12 : h;
    timeOptions.push(`${displayHour}:00 ${period}`);
    timeOptions.push(`${displayHour}:30 ${period}`);
  }

  const guestOptions = [];
  for (let i = 1; i <= 20; i++) {
    guestOptions.push(i);
  }

  const handleFocus = (e) => {
    e.target.style.borderColor = '#C9A96E';
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = 'rgba(255,255,255,0.08)';
  };

  const selectStyle = {
    ...inputStyle,
    appearance: 'none',
    WebkitAppearance: 'none',
    backgroundImage:
      "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23888%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 16px center',
    paddingRight: '40px',
  };

  return (
    <section
      id="reservation"
      style={{
        padding: '120px 0',
        background:
          'linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 50%, #0a0a0a 100%)',
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          gap: '60px',
          alignItems: 'flex-start',
          flexDirection: 'row',
        }}
        className="reservation-container"
      >
        {/* Left Column - Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{
            flex: '1 1 50%',
            minWidth: '0',
          }}
          className="reservation-text-col"
        >
          <span
            style={{
              fontFamily: 'Inter',
              fontSize: '0.7rem',
              letterSpacing: '0.3em',
              color: '#C9A96E',
              textTransform: 'uppercase',
            }}
          >
            RESERVATIONS
          </span>

          <div
            style={{
              width: '40px',
              height: '1px',
              background: '#C9A96E',
              marginTop: '16px',
            }}
          />

          <h2
            style={{
              fontFamily: 'Playfair Display',
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              color: 'white',
              fontWeight: 400,
              lineHeight: 1.3,
              marginTop: '24px',
            }}
          >
            Reserve Your Experience
          </h2>

          <p
            style={{
              fontFamily: 'Inter',
              fontSize: '0.9rem',
              color: '#888',
              lineHeight: 1.8,
              marginTop: '20px',
            }}
          >
            Join us for an unforgettable dining experience. Whether it's an
            intimate dinner, a celebration with loved ones, or a corporate event,
            our team will ensure every moment is extraordinary.
          </p>

          <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Opening Hours */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9A96E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span
                  style={{
                    fontFamily: 'Inter',
                    fontSize: '0.7rem',
                    color: '#C9A96E',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                  }}
                >
                  Opening Hours
                </span>
              </div>
              <span
                style={{
                  fontFamily: 'Inter',
                  fontSize: '0.85rem',
                  color: '#ccc',
                  marginLeft: '26px',
                  display: 'block',
                }}
              >
                Monday - Sunday: 11:00 AM - 11:00 PM
              </span>
            </div>

            {/* Location */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9A96E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span
                  style={{
                    fontFamily: 'Inter',
                    fontSize: '0.7rem',
                    color: '#C9A96E',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                  }}
                >
                  Location
                </span>
              </div>
              <span
                style={{
                  fontFamily: 'Inter',
                  fontSize: '0.85rem',
                  color: '#ccc',
                  marginLeft: '26px',
                  display: 'block',
                }}
              >
                Colombo, Sri Lanka
              </span>
              <span
                style={{
                  fontFamily: 'Inter',
                  fontSize: '0.75rem',
                  color: '#666',
                  marginLeft: '26px',
                  display: 'block',
                  marginTop: '4px',
                }}
              >
                Detailed address available upon reservation
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          style={{
            flex: '1 1 50%',
            minWidth: '0',
            background: 'rgba(21, 21, 21, 0.5)',
            border: '1px solid rgba(201, 169, 110, 0.1)',
            padding: '40px',
          }}
          className="reservation-form-col"
        >
          <form onSubmit={handleSubmit}>
            {/* Row 1: Name + Email */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
              }}
              className="form-row"
            >
              <div>
                <label style={labelStyle} htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Full Name"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle} htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Row 2: Phone + Guests */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
                marginTop: '16px',
              }}
              className="form-row"
            >
              <div>
                <label style={labelStyle} htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+94 XX XXX XXXX"
                  value={form.phone}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle} htmlFor="guests">
                  Number of Guests
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  style={{
                    ...selectStyle,
                    color: form.guests ? 'white' : '#444',
                  }}
                >
                  <option value="" disabled style={{ background: '#1a1a1a', color: '#444' }}>
                    Select Guests
                  </option>
                  {guestOptions.map((n) => (
                    <option
                      key={n}
                      value={n}
                      style={{ background: '#1a1a1a', color: '#ccc' }}
                    >
                      {n} {n === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Preferred Date */}
            <div style={{ marginTop: '16px' }}>
              <label style={labelStyle} htmlFor="date">
                Preferred Date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={{
                  ...inputStyle,
                  colorScheme: 'dark',
                }}
              />
            </div>

            {/* Preferred Time */}
            <div style={{ marginTop: '16px' }}>
              <label style={labelStyle} htmlFor="time">
                Preferred Time
              </label>
              <select
                id="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={{
                  ...selectStyle,
                  color: form.time ? 'white' : '#444',
                }}
              >
                <option value="" disabled style={{ background: '#1a1a1a', color: '#444' }}>
                  Select Time
                </option>
                {timeOptions.map((t) => (
                  <option
                    key={t}
                    value={t}
                    style={{ background: '#1a1a1a', color: '#ccc' }}
                  >
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Special Requests */}
            <div style={{ marginTop: '16px' }}>
              <label style={labelStyle} htmlFor="message">
                Special Requests
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Any dietary requirements, celebrations, or special arrangements..."
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={{
                  ...inputStyle,
                  resize: 'vertical',
                  minHeight: '80px',
                }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitted}
              style={{
                width: '100%',
                padding: '16px',
                background: submitted ? 'transparent' : '#C9A96E',
                color: submitted ? '#C9A96E' : '#0a0a0a',
                fontSize: '0.7rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                fontWeight: 600,
                cursor: submitted ? 'default' : 'pointer',
                border: submitted ? '1px solid #C9A96E' : 'none',
                transition: 'all 0.3s',
                marginTop: '24px',
                fontFamily: 'Inter',
              }}
              onMouseEnter={(e) => {
                if (!submitted) {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#C9A96E';
                  e.target.style.border = '1px solid #C9A96E';
                }
              }}
              onMouseLeave={(e) => {
                if (!submitted) {
                  e.target.style.background = '#C9A96E';
                  e.target.style.color = '#0a0a0a';
                  e.target.style.border = 'none';
                }
              }}
            >
              {submitted ? 'Reservation Received' : 'Make a Reservation'}
            </button>
          </form>
        </motion.div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .reservation-container {
            flex-direction: column !important;
            gap: 40px !important;
          }
          .reservation-text-col,
          .reservation-form-col {
            flex: 1 1 100% !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
          .reservation-form-col {
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Reservation;
