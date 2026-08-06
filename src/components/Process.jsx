import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket, ChevronRight } from 'lucide-react';
import Reveal from './Reveal';

const ease = [0.16, 1, 0.3, 1];

const steps = [
  { icon: Search, title: 'Discover', desc: 'We dig into your goals, users, and constraints to define the right problem to solve.' },
  { icon: PenTool, title: 'Design', desc: 'Wireframes, prototypes, and a clear architecture — validated before a line of code.' },
  { icon: Code2, title: 'Build', desc: 'Agile sprints with clean, tested code and continuous delivery you can watch progress on.' },
  { icon: Rocket, title: 'Launch & scale', desc: 'Ship to production, monitor, and iterate — with support that grows alongside you.' },
];

export default function Process() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container-x">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <span className="eyebrow">How we work</span>
          <h2 className="mt-5 font-heading font-extrabold text-4xl sm:text-5xl tracking-tight text-ink">
            A clear path from <span className="gradient-text">idea to impact</span>
          </h2>
        </Reveal>

        {/* Horizontal stepper with chevron connectors */}
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-4 lg:gap-0">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <React.Fragment key={s.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, delay: i * 0.12, ease }}
                  whileHover={{ y: -6 }}
                  className="flex-1 card rounded-4xl p-7 text-center lg:text-left"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 rounded-3xl bg-indigo-gradient grid place-items-center shadow-indigo">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="font-heading font-extrabold text-5xl gradient-text leading-none">{i + 1}</span>
                  </div>
                  <h3 className="mt-6 font-heading font-extrabold text-xl text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-brand-body leading-relaxed">{s.desc}</p>
                </motion.div>

                {/* chevron connector between steps */}
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.12 + 0.2 }}
                    className="grid place-items-center px-2 lg:px-3"
                  >
                    <span className="w-11 h-11 rounded-full bg-brand-tint grid place-items-center shadow-soft">
                      <ChevronRight className="w-6 h-6 text-brand-purple rotate-90 lg:rotate-0" />
                    </span>
                  </motion.div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
