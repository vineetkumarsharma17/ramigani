import React from 'react';
import { services } from '../data/services';

/**
 * Editorial auto-scrolling marquee of the service names — oversized serif,
 * hairline-bordered band. A signature magazine touch. Motion pauses on hover
 * and collapses under prefers-reduced-motion (handled globally in index.css).
 */
export default function SolutionsMarquee() {
  const names = services.map((s) => s.name);
  return (
    <section className="border-y border-brand-line py-6 sm:py-8 overflow-hidden">
      <div className="relative marquee-paused [mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)]">
        <div className="flex items-center gap-8 sm:gap-12 animate-marquee whitespace-nowrap">
          {[...names, ...names].map((n, i) => (
            <span key={i} className="inline-flex items-center gap-8 sm:gap-12">
              <span className="font-display text-3xl sm:text-5xl text-ink">{n}</span>
              <span className="text-brand-accent font-display text-2xl sm:text-4xl">✳</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
