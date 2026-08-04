import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Minimal text wordmark. variant: 'light' (dark text) | 'dark' (white text)
 */
export default function Brand({ variant = 'light', className = '' }) {
  const nameColor = variant === 'dark' ? 'text-white' : 'text-ink';
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="Ramigani Tech — Home">
      {/* Monogram tile */}
      <span className="relative grid place-items-center w-9 h-9 rounded-xl bg-indigo-gradient shadow-indigo overflow-hidden group-hover:scale-105 transition-transform">
        <span className="text-white font-heading font-bold text-[15px] leading-none">R</span>
        <span className="absolute -right-1 -bottom-1 w-3 h-3 rounded-full bg-brand-sky/80 blur-[2px]" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-heading font-bold text-[1.15rem] tracking-tight">
          <span className={nameColor}>Ramigani</span><span className="text-brand-indigo">Tech</span>
        </span>
        <span className={`text-[8.5px] tracking-[0.3em] font-semibold uppercase mt-1 ${variant === 'dark' ? 'text-white/50' : 'text-brand-muted'}`}>
          Software Engineering
        </span>
      </span>
    </Link>
  );
}
