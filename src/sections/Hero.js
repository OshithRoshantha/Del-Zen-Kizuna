import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const SEGMENTS = [
  { start: 8,  end: 20 },
  { start: 46, end: 57 },
];

export default function Hero() {
  const videoRef = useRef(null);
  const segRef   = useRef(0);

  const [logoVisible, setLogoVisible] = useState(false);
  const [videoReady,  setVideoReady]  = useState(false);
  const [contentIn,   setContentIn]   = useState(false);

  /* Logo fades in fast so there's something on the black screen */
  useEffect(() => {
    const t = setTimeout(() => setLogoVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  /* Video segment logic + autoplay trigger */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playSegment = (index) => {
      const seg = SEGMENTS[index % SEGMENTS.length];
      video.currentTime = seg.start;
      // Return the promise so callers can chain
      return video.play();
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

    const onReady = () => {
      if (hasTriggered) return;
      hasTriggered = true;

      playSegment(0)
        .then(() => {
          // Play succeeded — video is actually rendering
          setVideoReady(true);
          setTimeout(() => setContentIn(true), 350);
        })
        .catch(() => {
          // Autoplay blocked — still show content after delay
          setVideoReady(true);
          setTimeout(() => setContentIn(true), 350);
        });
    };

    video.addEventListener('loadedmetadata', onReady);
    video.addEventListener('canplay',        onReady);
    video.addEventListener('timeupdate',     handleTimeUpdate);

    // If video is already loaded (cached)
    if (video.readyState >= 2) onReady();

    // Hard fallback: show content after 5s even if video never loads
    const fallback = setTimeout(() => {
      if (!hasTriggered) {
        hasTriggered = true;
        setVideoReady(true);
        setTimeout(() => setContentIn(true), 350);
      }
    }, 5000);

    return () => {
      clearTimeout(fallback);
      video.removeEventListener('loadedmetadata', onReady);
      video.removeEventListener('canplay',        onReady);
      video.removeEventListener('timeupdate',     handleTimeUpdate);
    };
  }, []);

  return (
    <section className="hero" id="hero">

      {/* ── Video background ── */}
      <div className="hero-video-bg">
        {/*
          autoPlay + muted + playsInline are ALL required for browser autoplay policies.
          React needs the camelCase autoPlay prop — the HTML attribute alone is ignored.
        */}
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
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