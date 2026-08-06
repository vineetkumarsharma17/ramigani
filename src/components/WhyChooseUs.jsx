import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, ShieldCheck, HeartHandshake } from 'lucide-react';
import Reveal from './Reveal';

const values = [
  { icon: Cpu, title: 'Modern engineering', desc: 'Cloud-native architectures, clean code, and CI/CD pipelines built for the long run.' },
  { icon: Zap, title: 'Agile delivery', desc: 'Rapid sprints, transparent roadmaps, and frequent demos so you always know where things stand.' },
  { icon: ShieldCheck, title: 'Quality & security', desc: 'Automated testing and security-first practices baked into every release.' },
  { icon: HeartHandshake, title: 'True partnership', desc: 'A senior team that cares about your outcomes — not just shipping tickets.' },
];

const ease = [0.16, 1, 0.3, 1];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 relative border-y border-brand-line overflow-hidden">
      <div className="absolute inset-0 bg-aurora-soft pointer-events-none" />
      <div className="absolute -left-40 top-1/4 w-[30rem] h-[30rem] bg-brand-violet/10 blur-[150px] pointer-events-none" />
      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-12 gap-14 items-start">
          {/* Left: sticky intro */}
          <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="eyebrow">Why Ramigani</span>
            <h2 className="mt-4 font-heading font-bold text-3xl sm:text-5xl tracking-tight text-white leading-tight">
              A partner obsessed with <span className="gradient-text">your outcomes</span>
            </h2>
            <p className="mt-5 text-lg text-brand-body leading-relaxed">
              We bring together engineers, designers, and strategists to turn ambitious ideas into reliable, scalable products. Every engagement is tailored to your goals.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white/[0.04] border border-brand-line px-5 py-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-gradient grid place-items-center shadow-glow">
                <HeartHandshake className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-white">Senior team, end to end</div>
                <div className="text-xs text-brand-muted">No hand-offs to juniors after the pitch.</div>
              </div>
            </div>
          </Reveal>

          {/* Right: large glowing numbered value list */}
          <div className="lg:col-span-7 divide-y divide-brand-line">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease }}
                  className="group flex items-start gap-6 py-7 first:pt-0"
                >
                  {/* big glowing number */}
                  <div className="relative flex-shrink-0">
                    <span className="font-heading text-5xl sm:text-6xl font-bold text-transparent [-webkit-text-stroke:1px_rgba(139,92,246,0.55)] group-hover:[-webkit-text-stroke:1px_rgba(139,92,246,0.9)] transition-all">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-tint grid place-items-center group-hover:shadow-glow transition-shadow">
                        <Icon className="w-5 h-5 text-brand-violet" />
                      </div>
                      <h3 className="font-heading font-bold text-xl text-white group-hover:text-brand-indigoLight transition-colors">{v.title}</h3>
                    </div>
                    <p className="mt-3 text-brand-body leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
