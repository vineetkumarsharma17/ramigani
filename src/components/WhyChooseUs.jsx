import React from 'react';
import { Cpu, Zap, ShieldCheck, HeartHandshake } from 'lucide-react';
import Reveal from './Reveal';

const values = [
  { icon: Cpu, title: 'Modern engineering', desc: 'Cloud-native architectures, clean code, and CI/CD pipelines built for the long run.', grad: 'from-violet-600 to-indigo-600' },
  { icon: Zap, title: 'Agile delivery', desc: 'Rapid sprints, transparent roadmaps, and frequent demos so you always know where things stand.', grad: 'from-blue-600 to-cyan-500' },
  { icon: ShieldCheck, title: 'Quality & security', desc: 'Automated testing and security-first practices baked into every release.', grad: 'from-fuchsia-600 to-pink-500' },
  { icon: HeartHandshake, title: 'True partnership', desc: 'A senior team that cares about your outcomes — not just shipping tickets.', grad: 'from-indigo-600 to-blue-600' },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 section-tint border-y border-brand-line">
      <div className="container-x">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <span className="eyebrow">Why Ramigani</span>
          <h2 className="mt-5 font-heading font-extrabold text-4xl sm:text-5xl tracking-tight text-ink leading-tight">
            A partner obsessed with <span className="gradient-text">your outcomes</span>
          </h2>
          <p className="mt-5 text-lg text-brand-body leading-relaxed">
            We bring together engineers, designers, and strategists to turn ambitious ideas into reliable, scalable products. Every engagement is tailored to your goals.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="card rounded-4xl p-8 h-full hover:shadow-lift hover:-translate-y-2 transition-all duration-300">
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
    </section>
  );
}
