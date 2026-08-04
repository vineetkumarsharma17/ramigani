import React from 'react';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';
import Reveal from './Reveal';

const steps = [
  { icon: Search, title: 'Discover', desc: 'We dig into your goals, users, and constraints to define the right problem to solve.' },
  { icon: PenTool, title: 'Design', desc: 'Wireframes, prototypes, and a clear architecture — validated before a line of code.' },
  { icon: Code2, title: 'Build', desc: 'Agile sprints with clean, tested code and continuous delivery you can watch progress on.' },
  { icon: Rocket, title: 'Launch & scale', desc: 'Ship to production, monitor, and iterate — with support that grows alongside you.' },
];

export default function Process() {
  return (
    <section className="py-24">
      <div className="container-x">
        <Reveal className="max-w-2xl mx-auto text-center mb-14">
          <span className="eyebrow">How we work</span>
          <h2 className="mt-4 font-heading font-bold text-3xl sm:text-5xl tracking-tight text-ink">
            A clear path from <span className="gradient-text">idea to impact</span>
          </h2>
        </Reveal>

        <div className="relative grid md:grid-cols-4 gap-6">
          {/* connecting line */}
          <div className="hidden md:block absolute top-9 left-0 right-0 h-px bg-brand-line" />
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 0.1} className="relative">
                <div className="relative z-10 mx-auto md:mx-0 w-[72px] h-[72px] rounded-2xl bg-white border border-brand-line shadow-soft grid place-items-center">
                  <Icon className="w-7 h-7 text-brand-indigo" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-indigo-gradient text-white text-xs font-bold grid place-items-center shadow-indigo">{i + 1}</span>
                </div>
                <h3 className="mt-5 font-heading font-bold text-lg text-ink text-center md:text-left">{s.title}</h3>
                <p className="mt-2 text-sm text-brand-body leading-relaxed text-center md:text-left">{s.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
