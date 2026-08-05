import React from 'react';

const stack = [
  'React', 'Next.js', 'React Native', 'Flutter', 'Node.js', 'Python',
  'TypeScript', 'AWS', 'Docker', 'Kubernetes', 'TensorFlow', 'PostgreSQL',
];

export default function TrustStrip() {
  return (
    <section className="py-12 border-y border-brand-line bg-white">
      <div className="container-x">
        <p className="text-center text-xs font-extrabold uppercase tracking-widest text-brand-purple/70 mb-7">
          Building with a modern, battle-tested stack
        </p>
        <div className="relative overflow-hidden marquee-paused [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {[...stack, ...stack].map((t, i) => (
              <span key={i} className="inline-flex items-center px-6 py-2.5 rounded-full border border-brand-line bg-paper text-sm font-bold text-brand-body hover:border-brand-purple hover:text-brand-purple transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
