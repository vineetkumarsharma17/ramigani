import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1];

export default function Hero({ onOpenQuoteModal }) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-24">
      {/* Faint editorial grid backdrop, masked */}
      <div className="absolute inset-0 grid-lines opacity-70 [mask-image:radial-gradient(80%_60%_at_50%_0%,#000_20%,transparent_80%)] pointer-events-none" />

      <div className="container-x relative z-10">
        {/* Top meta row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }}
          className="flex items-center justify-between border-b border-brand-line pb-4 mb-12"
        >
          <span className="eyebrow"><span className="accent font-display text-sm">✳</span> Software Engineering Studio</span>
          <span className="hidden sm:inline text-[11px] uppercase tracking-widest2 text-brand-muted">Est. Hyderabad · India</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-end">
          {/* Left: headline */}
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.05, ease }}
              className="font-display font-normal tracking-tight text-ink text-[2.75rem] sm:text-7xl lg:text-[5.25rem] leading-[0.98]"
            >
              Engineering that<br className="hidden sm:block" /> moves business
              <span className="italic accent-underline"> forward</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease }}
              className="mt-8 text-lg sm:text-xl text-brand-body max-w-xl leading-relaxed"
            >
              We design and build high-performance mobile apps, web platforms, and AI-powered products — from first concept to production scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3, ease }}
              className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <button onClick={onOpenQuoteModal} className="btn-primary">
                Start your project <ArrowRight className="w-4 h-4" />
              </button>
              <Link to="/solutions" className="btn-ghost">Explore solutions</Link>
            </motion.div>
          </div>

          {/* Right: editorial index panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25, ease }}
            className="lg:col-span-4 border-t border-brand-line pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-ink">
                {[0,1,2,3,4].map((i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
              </div>
              <span className="text-sm text-brand-soft"><span className="font-semibold text-ink">4.9</span>/5 client rating</span>
            </div>

            <dl className="divide-y divide-brand-line">
              {[
                { k: 'Projects shipped', v: '150+' },
                { k: 'Years of practice', v: '10+' },
                { k: 'Platform uptime', v: '99.99%' },
                { k: 'Client satisfaction', v: '99%' },
              ].map((row) => (
                <div key={row.k} className="flex items-baseline justify-between py-3.5">
                  <dt className="text-[13px] text-brand-soft">{row.k}</dt>
                  <dd className="font-display text-2xl text-ink">{row.v}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
