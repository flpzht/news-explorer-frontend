import { useState, useEffect, useRef } from 'react';

import '@/components/AboutAnimation/AboutAnimation.css';

import imageDev from '@/images/about-animation-dev.png';
import imageFin from '@/images/about-animation-fin.png';


const SPEED_PER_SEC = 12;
const AUTOPLAY_DELAY_MS = 2000;
const AUTO_MIN = 5;
const AUTO_MAX = 95;
const KEY_STEP = 2;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function AboutAnimation() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const containerRef = useRef(null);
  const positionRef = useRef(50);
  const directionRef = useRef(1);
  const isDragging = useRef(false);
  const isAutoPlaying = useRef(true);
  const resumeTimeoutRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frameId = null;
    let lastTime = null;

    const animate = (now) => {
      const dt = lastTime === null ? 0 : Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      if (isAutoPlaying.current) {
        let next = positionRef.current + SPEED_PER_SEC * dt * directionRef.current;

        if (next >= AUTO_MAX) directionRef.current = -1;
        else if (next <= AUTO_MIN) directionRef.current = 1;

        next = clamp(next, 0, 100);
        positionRef.current = next;
        setSliderPosition(next);
      }

      frameId = requestAnimationFrame(animate);
    };

    if (!reduceMotion) frameId = requestAnimationFrame(animate);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  const applyPosition = (value) => {
    const next = clamp(value, 0, 100);
    positionRef.current = next;
    setSliderPosition(next);
  };

  const pauseAutoPlay = () => {
    isAutoPlaying.current = false;
    clearTimeout(resumeTimeoutRef.current);
  };

  const scheduleResume = () => {
    clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      isAutoPlaying.current = true;
    }, AUTOPLAY_DELAY_MS);
  };

  const handlePointerDown = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    isDragging.current = true;
    pauseAutoPlay();
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    applyPosition(((e.clientX - rect.left) / rect.width) * 100);
  };

  const handlePointerEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    scheduleResume();
  };


  const handleKeyDown = (e) => {
    let next;
    if (e.key === 'ArrowLeft') next = positionRef.current - KEY_STEP;
    else if (e.key === 'ArrowRight') next = positionRef.current + KEY_STEP;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = 100;
    else return;

    e.preventDefault();
    pauseAutoPlay();
    applyPosition(next);
    scheduleResume();
  };

  return (
    <div
      className='about-animation__slider-container'
      ref={containerRef}
      style={{ '--pos': `${sliderPosition}%` }}
    >
      <span className='about-animation__badge about-animation__badge-left'>Economista</span>
      <span className='about-animation__badge about-animation__badge-right'>Full Stack Dev</span>

      <img src={imageDev} alt="Desenvolvedor Full Stack" className='about-animation__img about-animation__img-background' />
      <img src={imageFin} alt="Economista FP&A" className='about-animation__img about-animation__img-foreground' />

      <div
        className='about-animation__slider-handle'
        role="slider"
        tabIndex={0}
        aria-label="Comparar as imagens de economista e desenvolvedor"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(sliderPosition)}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        onKeyDown={handleKeyDown}
      >
        <div className='about-animation__slider-button' aria-hidden="true">
          &#8594;&#8592;
        </div>
      </div>
    </div>
  );
}