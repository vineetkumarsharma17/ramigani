import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Editorial serif wordmark. variant: 'light' (dark text) | 'dark' (paper text)
 */
export default function Brand({ variant = 'light', className = '' }) {
  const nameColor = variant === 'dark' ? 'text-paper' : 'text-ink';
  const subColor = variant === 'dark' ? 'text-paper/45' : 'text-brand-muted';
  return (
    <Link to="/" className={`group inline-flex items-center gap-3 ${className}`} aria-label="Ramigani Tech — Home">
      {/* Serif monogram in a hairline square */}
      <span className={`relative grid place-items-center w-10 h-10 border ${variant === 'dark' ? 'border-paper/25' : 'border-brand-lineStrong'} rounded-none group-hover:border-brand-accent transition-colors`}>
        <span className={`font-display font-semibold text-[19px] leading-none ${nameColor}`}>R</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display font-semibold text-[1.2rem] tracking-tight ${nameColor}`}>
          Ramigani<span className="accent">.</span>
        </span>
        <span className={`text-[8.5px] tracking-widest2 font-semibold uppercase mt-1.5 ${subColor}`}>
          Software Engineering
        </span>
      </span>
    </Link>
  );
}
