import React from 'react';

const stack = [
  'React', 'Next.js', 'React Native', 'Flutter', 'Node.js', 'Python',
  'TypeScript', 'AWS', 'Docker', 'Kubernetes', 'TensorFlow', 'PostgreSQL',
];

export default function TrustStrip() {
  return (
    <section className="py-10 border-y border-brand-line bg-white/60">
      <div className="container-x">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-brand-muted mb-6">
          Building with a modern, battle-tested stack
        </p>
        <div className="relative overflow-hidden marquee-paused [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {[...stack, ...stack].map((t, i) => (
              <span key={i} className="inline-flex items-center px-5 py-2 rounded-full border border-brand-line bg-white text-sm font-semibold text-brand-body">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
