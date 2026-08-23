import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const SEGMENTS = [
  { start: 8, end: 20 },
  { start: 46, end: 57 },
];

export default function Hero() {
  const videoRef = useRef(null);
  const segRef = useRef(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playSegment = (index) => {
      const seg = SEGMENTS[index % SEGMENTS.length];
      video.currentTime = seg.start;
      video.play().catch(() => {});
    };

    const handleTimeUpdate = () => {
      const v = videoRef.current;
      if (!v) return;
      const seg = SEGMENTS[segRef.current % SEGMENTS.length];
      if (v.currentTime >= seg.end) {
        segRef.current = (segRef.current + 1) % SEGMENTS.length;
        playSegment(segRef.current);
      }
    };

    const handleLoaded = () => {
      segRef.current = 0;
      playSegment(0);
    };

    video.addEventListener('loadedmetadata', handleLoaded);
    video.addEventListener('timeupdate', handleTimeUpdate);

    if (video.readyState >= 1) handleLoaded();

    return () => {
      video.removeEventListener('loadedmetadata', handleLoaded);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <section className="hero" id="hero">

      {/* ── Video background ── */}
      <div className="hero-video-bg">
        <video
          ref={videoRef}
          className="hero-video"
          muted
          playsInline
          preload="auto"
        >
          <source src="/images/title_video.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />
      </div>

      {/* ── Centered logo ── */}
      <div className={`hero-center ${loaded ? 'in' : ''}`}>
        <div className="hero-logo-frame">
          <div className="logo-ring logo-ring-outer" />
          <div className="logo-ring logo-ring-inner" />
          <img src="/images/logo.png" alt="Del Zen Kizuna" className="hero-logo-img" />
        </div>
      </div>

    </section>
  );
}