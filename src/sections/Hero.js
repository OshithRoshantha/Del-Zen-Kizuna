import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const SEGMENTS = [
  { start: 8,  end: 20 },
  { start: 46, end: 57 },
];

export default function Hero() {
  const videoRef   = useRef(null);
  const segRef     = useRef(0);

  // logoVisible: logo shown (pre-load)
  // videoReady:  video has loaded & started — triggers content-in + logo-out
  const [logoVisible,  setLogoVisible]  = useState(false);
  const [videoReady,   setVideoReady]   = useState(false);
  const [contentIn,    setContentIn]    = useState(false);

  /* Logo fades in quickly so there's something on the black screen */
  useEffect(() => {
    const t = setTimeout(() => setLogoVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  /* Video segment logic */
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

    let hasTriggered = false;

    const handleLoaded = () => {
      if (hasTriggered) return;
      hasTriggered = true;
      segRef.current = 0;
      playSegment(0);

      // After a tiny buffer so first frame is actually painted:
      setTimeout(() => {
        setVideoReady(true);   // triggers logo fade-out
        // Stagger the content entrance slightly after logo starts leaving
        setTimeout(() => setContentIn(true), 350);
      }, 200);
    };

    video.addEventListener('loadedmetadata', handleLoaded);
    video.addEventListener('canplay',          handleLoaded);
    video.addEventListener('playing',          handleLoaded);
    video.addEventListener('timeupdate',       handleTimeUpdate);

    if (video.readyState >= 1) handleLoaded();

    // Safety fallback: ensure logo disappears even if video is slow or autoplay restricted
    const fallbackTimer = setTimeout(() => {
      handleLoaded();
    }, 4000);

    return () => {
      clearTimeout(fallbackTimer);
      video.removeEventListener('loadedmetadata', handleLoaded);
      video.removeEventListener('canplay',          handleLoaded);
      video.removeEventListener('playing',          handleLoaded);
      video.removeEventListener('timeupdate',       handleTimeUpdate);
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

      {/* ── Pre-load: centred logo (shown until video ready, then fades out) ── */}
      <div className={`hero-preload ${logoVisible ? 'visible' : ''} ${videoReady ? 'exit' : ''}`}>
        <div className="hero-logo-frame">
          <div className="logo-pulse-ring" />
          <div className="logo-pulse-ring logo-pulse-ring-delayed" />
          <div className="logo-ring logo-ring-outer" />
          <div className="logo-ring logo-ring-mid" />
          <div className="logo-ring logo-ring-inner" />
          <img src="/images/logo.png" alt="Del Zen Kizuna" className="hero-logo-img" />
        </div>
      </div>

      {/* ── Post-load: left name + right kanji ── */}

      {/* Left — restaurant name */}
      <div className={`hero-name ${contentIn ? 'in' : ''}`}>
        <div className="hero-name-eyebrow">
          <span className="eyebrow-line" />
          <span>Sri Lanka's Premier Asian Fusion</span>
          <span className="eyebrow-line" />
        </div>
        <h1 className="hero-title">
          <span className="ht-del">Del</span>
          <span className="ht-zen">Zen</span>
          <span className="ht-kizuna">Kizuna</span>
        </h1>
        <p className="hero-tagline">
          Where bonds are forged<br />through flavour
        </p>
      </div>

      {/* Right — decorative kanji, partially cropped */}
      <div className={`hero-kanji-wrap ${contentIn ? 'in' : ''}`} aria-hidden="true">
        <span className="hero-kanji">絆</span>
      </div>

    </section>
  );
}