import React from 'react';

const stack = [
  'React', 'Next.js', 'React Native', 'Flutter', 'Node.js', 'Python',
  'TypeScript', 'AWS', 'Docker', 'Kubernetes', 'TensorFlow', 'PostgreSQL',
];

export default function TrustStrip() {
  return (
    <section className="py-12 border-y border-brand-line">
      <div className="container-x">
        <p className="text-center text-[11px] font-semibold uppercase tracking-widest2 text-brand-muted mb-7">
          Building with a modern, battle-tested stack
        </p>
        <div className="relative overflow-hidden marquee-paused [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
          <div className="flex gap-10 animate-marquee whitespace-nowrap">
            {[...stack, ...stack].map((t, i) => (
              <span key={i} className="inline-flex items-center gap-3 text-lg font-display text-brand-soft">
                {t}
                <span className="text-brand-accent text-xs">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
