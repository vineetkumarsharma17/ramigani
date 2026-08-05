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
    <section className="py-24 relative">
      <div className="container-x">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <span className="eyebrow">How we work</span>
          <h2 className="mt-5 font-heading font-extrabold text-4xl sm:text-5xl tracking-tight text-ink">
            A clear path from <span className="gradient-text">idea to impact</span>
          </h2>
        </Reveal>

        <div className="relative grid md:grid-cols-4 gap-6">
          {/* connecting gradient line */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-1 rounded-full bg-indigo-gradient opacity-25" />
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 0.1} className="relative">
                <div className="relative z-10 mx-auto md:mx-0 w-20 h-20 rounded-3xl bg-indigo-gradient shadow-indigo grid place-items-center group hover:scale-105 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                  <span className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-white text-brand-purple text-sm font-extrabold grid place-items-center shadow-soft border border-brand-line">{i + 1}</span>
                </div>
                <h3 className="mt-6 font-heading font-extrabold text-xl text-ink text-center md:text-left">{s.title}</h3>
                <p className="mt-2 text-sm text-brand-body leading-relaxed text-center md:text-left">{s.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
