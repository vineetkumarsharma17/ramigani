import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star, ChevronDown } from 'lucide-react';
import Counter from './Counter';

const ease = [0.16, 1, 0.3, 1];

const stats = [
  { value: 10, suffix: '+', label: 'Years of experience' },
  { value: 150, suffix: '+', label: 'Projects delivered' },
  { value: 50, suffix: '+', label: 'Expert engineers' },
  { value: 99, suffix: '%', label: 'Client satisfaction' },
];

export default function Hero({ onOpenQuoteModal }) {
  return (
    <>
      {/* Centered, full-viewport immersive hero */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden px-5 pt-28 pb-16 text-center">
        {/* Animated aurora background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-mesh" />
          <div className="absolute inset-0 line-grid opacity-40 [mask-image:radial-gradient(75%_75%_at_50%_45%,#000_20%,transparent_80%)]" />
          <motion.div
            animate={{ x: [0, 60, -30, 0], y: [0, -40, 30, 0], scale: [1, 1.2, 0.95, 1] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[10%] left-[15%] w-[34rem] h-[34rem] rounded-full bg-brand-violet/30 blur-[130px]"
          />
          <motion.div
            animate={{ x: [0, -50, 40, 0], y: [0, 30, -30, 0], scale: [1, 0.9, 1.15, 1] }}
            transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-[8%] right-[12%] w-[30rem] h-[30rem] rounded-full bg-brand-cyan/20 blur-[130px]"
          />
          <motion.div
            animate={{ x: [0, 30, -40, 0], y: [0, -20, 20, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[28%] right-[28%] w-[26rem] h-[26rem] rounded-full bg-brand-indigo/25 blur-[130px]"
          />
          {/* fade into the page */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-brand-base" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }}
            className="eyebrow"
          >
            <Sparkles className="w-3.5 h-3.5" /> Software Engineering Studio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.05, ease }}
            className="mt-6 font-heading font-bold tracking-tight text-white text-5xl sm:text-7xl lg:text-[5.25rem] leading-[0.98]"
          >
            Engineering that<br className="hidden sm:block" /> <span className="gradient-text-anim animate-gradient-shift">moves business</span> forward.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.18, ease }}
            className="mt-7 text-lg sm:text-xl text-brand-body max-w-2xl mx-auto leading-relaxed"
          >
            We design and build high-performance mobile apps, web platforms, and AI-powered products — from first concept to production scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <button onClick={onOpenQuoteModal} className="btn-primary w-full sm:w-auto px-8 py-4 text-base">
              Start your project <ArrowRight className="w-4 h-4" />
            </button>
            <Link to="/solutions" className="btn-ghost w-full sm:w-auto px-8 py-4 text-base">Explore solutions</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-8 flex items-center justify-center gap-6 text-sm text-brand-muted"
          >
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[0,1,2,3,4].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="font-semibold text-ink">4.9</span>/5 client rating
            </div>
            <div className="hidden sm:block h-4 w-px bg-brand-line" />
            <span className="hidden sm:inline"><span className="font-semibold text-ink">150+</span> projects shipped</span>
          </motion.div>
        </div>

        {/* scroll cue */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1 text-brand-muted">
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* Full-width horizontal stats ribbon */}
      <section className="relative border-y border-brand-line bg-white/[0.02] backdrop-blur">
        <div className="container-x">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-brand-line">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                className="px-4 py-8 sm:py-10 text-center"
              >
                <div className="font-heading text-4xl sm:text-5xl font-bold gradient-text">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-[11px] sm:text-xs font-semibold text-brand-muted uppercase tracking-widest">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
