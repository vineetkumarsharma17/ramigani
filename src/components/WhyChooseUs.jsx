import React from 'react';
import { Cpu, Zap, ShieldCheck, HeartHandshake } from 'lucide-react';
import Reveal from './Reveal';
import Counter from './Counter';

const values = [
  { icon: Cpu, title: 'Modern engineering', desc: 'Cloud-native architectures, clean code, and CI/CD pipelines built for the long run.' },
  { icon: Zap, title: 'Agile delivery', desc: 'Rapid sprints, transparent roadmaps, and frequent demos so you always know where things stand.' },
  { icon: ShieldCheck, title: 'Quality & security', desc: 'Automated testing and security-first practices baked into every release.' },
  { icon: HeartHandshake, title: 'True partnership', desc: 'A senior team that cares about your outcomes — not just shipping tickets.' },
];

const stats = [
  { value: 10, suffix: '+', label: 'Years of experience' },
  { value: 150, suffix: '+', label: 'Projects delivered' },
  { value: 50, suffix: '+', label: 'Expert engineers' },
  { value: 99, suffix: '%', label: 'Client satisfaction' },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 relative border-y border-brand-line">
      <div className="absolute inset-0 bg-aurora-soft pointer-events-none" />
      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-5">
            <span className="eyebrow">Why Ramigani</span>
            <h2 className="mt-4 font-heading font-bold text-3xl sm:text-5xl tracking-tight text-white leading-tight">
              A partner obsessed with <span className="gradient-text">your outcomes</span>
            </h2>
            <p className="mt-5 text-lg text-brand-body leading-relaxed">
              We bring together engineers, designers, and strategists to turn ambitious ideas into reliable, scalable products. Every engagement is tailored to your goals.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-white/[0.04] border border-brand-line p-5">
                  <div className="font-heading text-3xl font-bold gradient-text">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-xs font-semibold text-brand-muted mt-1 uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={(i % 2) * 0.1}>
                  <div className="card rounded-3xl p-7 h-full aurora-ring hover:-translate-y-1 hover:shadow-glow transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-brand-tint grid place-items-center">
                      <Icon className="w-6 h-6 text-brand-violet" />
                    </div>
                    <h3 className="mt-5 font-heading font-bold text-lg text-white">{v.title}</h3>
                    <p className="mt-2 text-sm text-brand-body leading-relaxed">{v.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
