import React from 'react';
import Reveal from './Reveal';

/**
 * Large numbered editorial section header — "§01" index, label, serif title,
 * and an optional right-aligned lede. Hairline rule underneath.
 */
export default function SectionHead({ index, label, title, lede, className = '' }) {
  return (
    <Reveal className={`border-b border-brand-line pb-8 mb-2 ${className}`}>
      <div className="flex items-baseline gap-4 mb-6">
        <span className="font-display text-2xl sm:text-3xl text-brand-accent leading-none">§{index}</span>
        <span className="h-px flex-1 max-w-[3rem] bg-brand-lineStrong self-center" />
        <span className="text-[11px] font-semibold uppercase tracking-widest2 text-brand-soft">{label}</span>
      </div>
      <div className="grid lg:grid-cols-12 gap-6 items-end">
        <h2 className="lg:col-span-8 font-display font-normal text-4xl sm:text-6xl tracking-tight text-ink leading-[1.0]">
          {title}
        </h2>
        {lede && (
          <p className="lg:col-span-4 text-brand-body leading-relaxed lg:text-right lg:self-end">
            {lede}
          </p>
        )}
      </div>
    </Reveal>
  );
}
