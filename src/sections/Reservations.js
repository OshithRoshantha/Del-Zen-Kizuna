import React, { useState } from 'react';
import useFadeIn from '../components/useFadeIn';
import './Reservations.css';

export default function Reservations() {
  const [ref, v] = useFadeIn(0.1);
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '', guests: '2', note: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello Del Zen Kizuna! I'd like to make a reservation.%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Date:* ${form.date}%0A*Time:* ${form.time}%0A*Guests:* ${form.guests}%0A*Special Requests:* ${form.note || 'None'}`;
    window.open(`https://wa.me/94771234567?text=${msg}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="reservations" id="reservations">
      <div className="res-inner">
        <div className="res-left" ref={ref}>
          <span className={`section-eyebrow fade-in ${v ? 'visible' : ''}`}>Book Your Experience</span>
          <h2 className={`res-title fade-in delay-1 ${v ? 'visible' : ''}`}>
            Reserve<br /><em>Your Table</em>
          </h2>
          <div className={`divider-line fade-in delay-2 ${v ? 'visible' : ''}`} />
          <p className={`res-desc fade-in delay-2 ${v ? 'visible' : ''}`}>
            Every table at Del Zen Kizuna is a stage for memories.
            Reserve yours and let us craft an evening tailored to you.
          </p>

          <div className={`res-info-cards fade-in delay-3 ${v ? 'visible' : ''}`}>
            <div className="res-info-card">
              <span className="res-info-icon">🕐</span>
              <div>
                <span className="res-info-label">Lunch</span>
                <span className="res-info-val">11:00 AM – 3:00 PM</span>
              </div>
            </div>
            <div className="res-info-card">
              <span className="res-info-icon">🌙</span>
              <div>
                <span className="res-info-label">Dinner</span>
                <span className="res-info-val">6:00 PM – 11:00 PM</span>
              </div>
            </div>
            <div className="res-info-card">
              <span className="res-info-icon">📞</span>
              <div>
                <span className="res-info-label">Call Us</span>
                <span className="res-info-val">+94 77 123 4567</span>
              </div>
            </div>
            <div className="res-info-card">
              <span className="res-info-icon">📍</span>
              <div>
                <span className="res-info-label">Location</span>
                <span className="res-info-val">Colombo 03, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>

        <div className="res-form-wrap">
          {submitted ? (
            <div className="res-success">
              <span className="success-icon">✓</span>
              <h3>Request Sent!</h3>
              <p>We'll confirm your reservation via WhatsApp shortly.</p>
            </div>
          ) : (
            <form className="res-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Make a Reservation</h3>

              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+94 77 000 0000" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Date</label>
                  <input type="date" name="date" value={form.date} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} />
                </div>
                <div className="form-group">
                  <label>Time</label>
                  <select name="time" value={form.time} onChange={handleChange} required>
                    <option value="">Select time</option>
                    {['11:00 AM','12:00 PM','1:00 PM','2:00 PM','6:00 PM','7:00 PM','8:00 PM','9:00 PM','10:00 PM'].map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Number of Guests</label>
                <select name="guests" value={form.guests} onChange={handleChange}>
                  {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                  <option value="9+">9+ Guests (Group Booking)</option>
                </select>
              </div>

              <div className="form-group">
                <label>Special Requests <span className="optional">(optional)</span></label>
                <textarea name="note" value={form.note} onChange={handleChange} rows={3} placeholder="Dietary requirements, occasion, seating preference…" />
              </div>

              <button type="submit" className="res-submit">
                <span>Confirm via WhatsApp</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.527 5.845L0 24l6.335-1.506A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.018-1.38l-.36-.214-3.73.886.916-3.629-.235-.373A9.818 9.818 0 1112 21.818z"/>
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
