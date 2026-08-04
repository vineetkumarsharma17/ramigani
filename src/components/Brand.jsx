import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Text-only brand wordmark (no image logo).
 * variant: 'light' (dark text, for light backgrounds) | 'dark' (white text, for dark backgrounds)
 */
export default function Brand({ variant = 'light', className = '' }) {
  const nameColor = variant === 'dark' ? 'text-white' : 'text-[#1E293B]';
  const taglineColor = variant === 'dark' ? 'text-slate-400' : 'text-slate-400';

  return (
    <Link to="/" className={`group inline-flex items-center gap-2 ${className}`} aria-label="Ramigani Tech — Home">
      {/* Accent mark: a small gradient bar that reads as a logo device */}
      <span
        aria-hidden="true"
        className="h-7 w-1.5 rounded-full bg-gradient-to-b from-[#3A72C4] via-[#1E4F87] to-[#0A1E3F] group-hover:scale-y-110 origin-center transition-transform"
      />
      <span className="flex flex-col leading-none">
        <span className="font-heading font-black text-[1.35rem] tracking-tight">
          <span className={nameColor}>Ramigani</span>
          <span className="gradient-text-orange">Tech</span>
          <span className="text-[#1E4F87]">.</span>
        </span>
        <span className={`text-[8.5px] tracking-[0.28em] font-bold uppercase mt-1 ${taglineColor}`}>
          Empowering The Future
        </span>
      </span>
    </Link>
  );
}
