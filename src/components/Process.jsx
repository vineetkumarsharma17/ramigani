import React from 'react';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

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
        <SectionHead
          index="03"
          label="How we work"
          title={<>A clear path from <span className="italic">idea to impact</span></>}
        />

        <div className="grid md:grid-cols-4 mt-10">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}
              className="relative py-8 md:py-10 md:px-8 border-b md:border-b-0 md:border-l border-brand-line first:md:border-l-0 first:md:pl-0">
              <span className="font-display text-6xl sm:text-7xl text-brand-lineStrong leading-none">{String(i + 1).padStart(2, '0')}</span>
              <div className="mt-6 h-px w-full bg-brand-line" />
              <h3 className="mt-6 font-display text-2xl sm:text-3xl text-ink">{s.title}</h3>
              <p className="mt-3 text-sm text-brand-soft leading-relaxed max-w-xs">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
