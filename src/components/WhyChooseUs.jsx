import React from 'react';
import Reveal from './Reveal';
import Counter from './Counter';

const values = [
  { n: '01', title: 'Modern engineering', desc: 'Cloud-native architectures, clean code, and CI/CD pipelines built for the long run.' },
  { n: '02', title: 'Agile delivery', desc: 'Rapid sprints, transparent roadmaps, and frequent demos so you always know where things stand.' },
  { n: '03', title: 'Quality & security', desc: 'Automated testing and security-first practices baked into every release.' },
  { n: '04', title: 'True partnership', desc: 'A senior team that cares about your outcomes — not just shipping tickets.' },
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
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="eyebrow"><span className="font-display accent text-sm">02</span> Why Ramigani</span>
            <h2 className="mt-4 font-display font-normal text-4xl sm:text-5xl tracking-tight text-ink leading-[1.05]">
              A partner obsessed with <span className="italic accent-underline">your outcomes</span>
            </h2>
            <p className="mt-6 text-lg text-brand-body leading-relaxed">
              We bring together engineers, designers, and strategists to turn ambitious ideas into reliable, scalable products. Every engagement is tailored to your goals.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 border-t border-l border-brand-line">
              {stats.map((s) => (
                <div key={s.label} className="border-b border-r border-brand-line p-5">
                  <div className="font-display text-4xl text-ink">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-[11px] font-semibold text-brand-muted mt-2 uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="border-t border-brand-line">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={(i % 2) * 0.08}>
                  <div className="group grid grid-cols-12 gap-4 py-8 border-b border-brand-line">
                    <span className="col-span-2 font-display text-xl text-brand-muted group-hover:text-brand-accent transition-colors">{v.n}</span>
                    <div className="col-span-10">
                      <h3 className="font-display text-2xl text-ink">{v.title}</h3>
                      <p className="mt-2 text-brand-soft leading-relaxed max-w-lg">{v.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
