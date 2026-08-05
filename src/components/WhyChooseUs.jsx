import React from 'react';
import { Cpu, Zap, ShieldCheck, HeartHandshake } from 'lucide-react';
import Reveal from './Reveal';
import Counter from './Counter';

const values = [
  { icon: Cpu, title: 'Modern engineering', desc: 'Cloud-native architectures, clean code, and CI/CD pipelines built for the long run.', grad: 'from-violet-600 to-indigo-600' },
  { icon: Zap, title: 'Agile delivery', desc: 'Rapid sprints, transparent roadmaps, and frequent demos so you always know where things stand.', grad: 'from-blue-600 to-cyan-500' },
  { icon: ShieldCheck, title: 'Quality & security', desc: 'Automated testing and security-first practices baked into every release.', grad: 'from-fuchsia-600 to-pink-500' },
  { icon: HeartHandshake, title: 'True partnership', desc: 'A senior team that cares about your outcomes — not just shipping tickets.', grad: 'from-indigo-600 to-blue-600' },
];

const stats = [
  { value: 10, suffix: '+', label: 'Years of experience' },
  { value: 150, suffix: '+', label: 'Projects delivered' },
  { value: 50, suffix: '+', label: 'Expert engineers' },
  { value: 99, suffix: '%', label: 'Client satisfaction' },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 section-tint border-y border-brand-line">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-5">
            <span className="eyebrow">Why Ramigani</span>
            <h2 className="mt-5 font-heading font-extrabold text-4xl sm:text-5xl tracking-tight text-ink leading-tight">
              A partner obsessed with <span className="gradient-text">your outcomes</span>
            </h2>
            <p className="mt-5 text-lg text-brand-body leading-relaxed">
              We bring together engineers, designers, and strategists to turn ambitious ideas into reliable, scalable products. Every engagement is tailored to your goals.
            </p>

            {/* Stats — gradient tiles */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.06}>
                  <div className="rounded-3xl bg-indigo-gradient p-6 shadow-indigo">
                    <div className="font-heading text-4xl font-extrabold text-white">
                      <Counter value={s.value} suffix={s.suffix} />
                    </div>
                    <div className="text-xs font-bold text-white/75 mt-1.5 uppercase tracking-wide">{s.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={(i % 2) * 0.1}>
                  <div className="card rounded-4xl p-8 h-full hover:shadow-lift hover:-translate-y-1.5 transition-all duration-300">
                    <div className={`w-14 h-14 rounded-3xl bg-gradient-to-br ${v.grad} grid place-items-center shadow-indigo`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="mt-6 font-heading font-extrabold text-xl text-ink">{v.title}</h3>
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
