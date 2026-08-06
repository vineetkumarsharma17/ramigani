import React from 'react';
import Reveal from './Reveal';
import Counter from './Counter';
import SectionHead from './SectionHead';

const pillars = [
  'Modern engineering',
  'Agile delivery',
  'Quality & security',
  'True partnership',
];

const stats = [
  { value: 10, suffix: '+', label: 'Years of experience' },
  { value: 150, suffix: '+', label: 'Projects delivered' },
  { value: 50, suffix: '+', label: 'Expert engineers' },
  { value: 99, suffix: '%', label: 'Client satisfaction' },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 sm:py-28 border-t border-brand-line">
      <div className="container-x">
        <SectionHead
          index="02"
          label="Why Ramigani"
          title={<>A partner obsessed with <span className="italic accent-underline">your outcomes</span></>}
        />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 mt-10">
          {/* Justified two-column editorial body with a drop cap */}
          <Reveal className="lg:col-span-8">
            <div className="lg:columns-2 lg:gap-10 text-brand-body leading-relaxed text-justify [&>p]:mb-5">
              <p className="first-letter:font-display first-letter:text-7xl first-letter:leading-[0.7] first-letter:float-left first-letter:pr-3 first-letter:pt-1 first-letter:text-ink">
                Ramigani Tech Solutions brings together engineers, designers, and strategists to turn ambitious ideas into reliable, scalable products. Every engagement is tailored to your goals — never forced through a template.
              </p>
              <p>
                We build on modern engineering foundations: cloud-native architectures, clean code, and CI/CD pipelines built for the long run. Delivery is agile and transparent — rapid sprints, open roadmaps, and frequent demos, so you always know exactly where things stand.
              </p>
              <p>
                Quality and security are never an afterthought. Automated testing and security-first practices are baked into every release we ship. Above all, we work as a true partner: a senior team that cares about your outcomes, not just closing tickets.
              </p>
            </div>
          </Reveal>

          {/* Hairline-bordered stat sidebar */}
          <Reveal delay={0.1} className="lg:col-span-4">
            <div className="border border-brand-line">
              <div className="px-5 py-3 border-b border-brand-line">
                <span className="text-[10px] uppercase tracking-widest2 font-semibold text-brand-muted">By the numbers</span>
              </div>
              <div className="grid grid-cols-2">
                {stats.map((s, i) => (
                  <div key={s.label} className={`p-5 border-brand-line ${i % 2 === 0 ? 'border-r' : ''} ${i < 2 ? 'border-b' : ''}`}>
                    <div className="font-display text-4xl text-ink">
                      <Counter value={s.value} suffix={s.suffix} />
                    </div>
                    <div className="text-[10px] font-semibold text-brand-muted mt-2 uppercase tracking-widest leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="px-5 py-4 border-t border-brand-line">
                <span className="text-[10px] uppercase tracking-widest2 font-semibold text-brand-muted block mb-3">The pillars</span>
                <ul className="space-y-2">
                  {pillars.map((p, i) => (
                    <li key={p} className="flex items-baseline gap-3 text-sm text-brand-body">
                      <span className="font-display text-brand-accent">{String(i + 1).padStart(2, '0')}</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
