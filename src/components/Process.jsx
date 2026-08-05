import React from 'react';
import Reveal from './Reveal';

const steps = [
  { title: 'Discover', desc: 'We dig into your goals, users, and constraints to define the right problem to solve.' },
  { title: 'Design', desc: 'Wireframes, prototypes, and a clear architecture — validated before a line of code.' },
  { title: 'Build', desc: 'Agile sprints with clean, tested code and continuous delivery you can watch progress on.' },
  { title: 'Launch & scale', desc: 'Ship to production, monitor, and iterate — with support that grows alongside you.' },
];

export default function Process() {
  return (
    <section className="py-24 sm:py-28 border-t border-brand-line">
      <div className="container-x">
        <Reveal className="grid lg:grid-cols-12 gap-6 items-end border-b border-brand-line pb-8 mb-14">
          <div className="lg:col-span-8">
            <span className="eyebrow"><span className="font-display accent text-sm">03</span> How we work</span>
            <h2 className="mt-4 font-display font-normal text-4xl sm:text-6xl tracking-tight text-ink leading-[1.02]">
              A clear path from <span className="italic">idea to impact</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}
              className="relative px-0 md:px-7 py-8 md:py-0 border-b md:border-b-0 md:border-l border-brand-line first:md:border-l-0 first:md:pl-0">
              <span className="font-display text-5xl text-brand-lineStrong">{String(i + 1).padStart(2, '0')}</span>
              <div className="mt-6 h-px w-10 bg-brand-accent" />
              <h3 className="mt-5 font-display text-2xl text-ink">{s.title}</h3>
              <p className="mt-3 text-sm text-brand-soft leading-relaxed max-w-xs">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
