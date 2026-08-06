import React from 'react';
import { motion } from 'framer-motion';
import Counter from './Counter';

const ease = [0.16, 1, 0.3, 1];

const stats = [
  { value: 10, suffix: '+', label: 'Years of experience' },
  { value: 150, suffix: '+', label: 'Projects delivered' },
  { value: 50, suffix: '+', label: 'Expert engineers' },
  { value: 99, suffix: '%', label: 'Client satisfaction' },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-indigo-gradient py-20 sm:py-24">
      <div className="absolute inset-0 line-grid opacity-15 pointer-events-none" />
      <div className="absolute -top-20 left-1/4 w-80 h-80 bg-brand-pink/40 rounded-full blur-[130px] animate-blob pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-80 h-80 bg-brand-blue/50 rounded-full blur-[140px] animate-float-slower pointer-events-none" />

      <div className="container-x relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 divide-white/15 lg:divide-x">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="text-center px-4"
            >
              <div className="font-heading font-extrabold text-white text-6xl sm:text-7xl tracking-tight leading-none">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-4 text-xs sm:text-sm font-bold text-white/75 uppercase tracking-widest">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
