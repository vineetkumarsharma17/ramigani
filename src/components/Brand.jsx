import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Minimal text wordmark. variant kept for API compatibility; Aurora Dark
 * always renders near-white text on the dark canvas.
 */
export default function Brand({ variant = 'dark', className = '' }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="Ramigani Tech — Home">
      {/* Monogram tile with aurora glow */}
      <span className="relative grid place-items-center w-9 h-9 rounded-xl bg-indigo-gradient shadow-glow overflow-hidden group-hover:scale-105 transition-transform">
        <span className="text-white font-heading font-bold text-[15px] leading-none">R</span>
        <span className="absolute -right-1 -bottom-1 w-3 h-3 rounded-full bg-brand-cyan/80 blur-[2px]" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-heading font-bold text-[1.15rem] tracking-tight">
          <span className="text-white">Ramigani</span><span className="gradient-text">Tech</span>
        </span>
        <span className="text-[8.5px] tracking-[0.3em] font-semibold uppercase mt-1 text-brand-muted">
          Software Engineering
        </span>
      </span>
    </Link>
  );
}
