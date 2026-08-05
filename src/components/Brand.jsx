import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Minimal text wordmark. variant: 'light' (dark text) | 'dark' (white text)
 */
export default function Brand({ variant = 'light', className = '' }) {
  const nameColor = variant === 'dark' ? 'text-white' : 'text-ink';
  const techColor = variant === 'dark' ? 'text-white/80' : 'text-brand-purple';
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="Ramigani Tech — Home">
      {/* Monogram tile */}
      <span className="relative grid place-items-center w-10 h-10 rounded-2xl bg-indigo-gradient shadow-indigo overflow-hidden group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
        <span className="text-white font-heading font-extrabold text-[16px] leading-none">R</span>
        <span className="absolute -right-1.5 -bottom-1.5 w-4 h-4 rounded-full bg-brand-pink/90 blur-[2px]" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-heading font-extrabold text-[1.18rem] tracking-tight">
          <span className={nameColor}>Ramigani</span><span className={techColor}>Tech.</span>
        </span>
        <span className={`text-[8.5px] tracking-[0.3em] font-bold uppercase mt-1 ${variant === 'dark' ? 'text-white/50' : 'text-brand-muted'}`}>
          Software Engineering
        </span>
      </span>
    </Link>
  );
}
