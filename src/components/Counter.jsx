import React, { useEffect, useRef, useState } from 'react';

/**
 * Animated count-up that triggers when scrolled into view.
 * props: value (number), suffix, prefix, duration (ms), className
 */
export default function Counter({ value, suffix = '', prefix = '', duration = 1600, className = '' }) {
  const [display, setDisplay] = useState(0);
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    let raf, start;
    const step = (ts) => {
      if (start === undefined) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, value, duration]);

  return (
    <span ref={ref} className={className}>{prefix}{display}{suffix}</span>
  );
}
