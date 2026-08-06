import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';
import Reveal from './Reveal';

const steps = [
  { icon: Search, title: 'Discover', desc: 'We dig into your goals, users, and constraints to define the right problem to solve.' },
  { icon: PenTool, title: 'Design', desc: 'Wireframes, prototypes, and a clear architecture — validated before a line of code.' },
  { icon: Code2, title: 'Build', desc: 'Agile sprints with clean, tested code and continuous delivery you can watch progress on.' },
  { icon: Rocket, title: 'Launch & scale', desc: 'Ship to production, monitor, and iterate — with support that grows alongside you.' },
];

const ease = [0.16, 1, 0.3, 1];

export default function Process() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container-x">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <span className="eyebrow">How we work</span>
          <h2 className="mt-4 font-heading font-bold text-3xl sm:text-5xl tracking-tight text-white">
            A clear path from <span className="gradient-text">idea to impact</span>
          </h2>
        </Reveal>

        {/* Vertical timeline */}
        <div className="relative max-w-3xl mx-auto pl-16 sm:pl-24">
          {/* glowing left rail */}
          <div className="absolute left-6 sm:left-9 top-2 bottom-2 w-px bg-gradient-to-b from-brand-violet via-brand-indigo to-brand-cyan" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.4, ease }}
            style={{ transformOrigin: 'top' }}
            className="absolute left-6 sm:left-9 top-2 bottom-2 w-px bg-gradient-to-b from-brand-violet via-brand-indigo to-brand-cyan blur-[2px]"
          />

          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease }}
                className="relative pb-14 last:pb-0"
              >
                {/* node on the rail */}
                <div className="absolute -left-[3.25rem] sm:-left-[4.75rem] top-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-panel border border-brand-line grid place-items-center shadow-glow aurora-ring">
                  <Icon className="w-6 h-6 text-brand-violet" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-indigo-gradient text-white text-xs font-bold grid place-items-center">{i + 1}</span>
                </div>
                <div className="card rounded-3xl p-6 aurora-ring hover:shadow-glow transition-all duration-300">
                  <h3 className="font-heading font-bold text-xl text-white">{s.title}</h3>
                  <p className="mt-2 text-brand-body leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
