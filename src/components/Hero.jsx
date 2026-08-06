import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1];

export default function Hero({ onOpenQuoteModal }) {
  return (
    <section className="relative overflow-hidden pt-32 pb-14 sm:pt-40 sm:pb-16">
      {/* Faint editorial grid backdrop, masked */}
      <div className="absolute inset-0 grid-lines opacity-70 [mask-image:radial-gradient(95%_55%_at_50%_0%,#000_12%,transparent_88%)] pointer-events-none" />

      <div className="container-x relative z-10">
        {/* Masthead top line — publication meta */}
        <motion.div
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }}
          className="flex items-center justify-between text-[10px] sm:text-[11px] uppercase tracking-widest2 text-brand-muted pb-4"
        >
          <span className="text-brand-soft">Ramigani Tech — Software Engineering Studio</span>
          <span className="hidden sm:inline">Hyderabad · India · Est. 2016</span>
        </motion.div>
        <div className="h-px w-full bg-ink" />

        {/* Oversized masthead headline — spans the full width */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.05, ease }}
          className="mt-8 sm:mt-12 font-display font-normal tracking-tight text-ink text-[3.1rem] leading-[0.9] sm:text-8xl lg:text-[9rem] lg:leading-[0.86]"
        >
          Engineering that<br className="hidden sm:block" /> moves business{' '}
          <span className="italic accent-underline">forward</span>.
        </motion.h1>

        {/* Thin rule under the masthead */}
        <div className="mt-8 sm:mt-12 h-px w-full bg-brand-line" />

        {/* Lower masthead row: lede + CTAs left, right-aligned meta/index column */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 pt-8 sm:pt-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease }}
            className="lg:col-span-7"
          >
            <p className="text-lg sm:text-xl text-brand-body max-w-xl leading-relaxed">
              We design and build high-performance mobile apps, web platforms, and AI-powered products — from first concept to production scale.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button onClick={onOpenQuoteModal} className="btn-primary">
                Start your project <ArrowRight className="w-4 h-4" />
              </button>
              <Link to="/solutions" className="btn-ghost">Explore solutions</Link>
            </div>
          </motion.div>

          {/* Right-aligned index / masthead statistics */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3, ease }}
            className="lg:col-span-4 lg:col-start-9 lg:text-right"
          >
            <div className="flex items-center lg:justify-end gap-2 mb-5">
              <div className="flex text-ink">
                {[0,1,2,3,4].map((i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
              </div>
              <span className="text-sm text-brand-soft"><span className="font-semibold text-ink">4.9</span>/5 client rating</span>
            </div>
            <dl className="divide-y divide-brand-line border-t border-brand-line">
              {[
                { k: 'Projects shipped', v: '150+' },
                { k: 'Years of practice', v: '10+' },
                { k: 'Platform uptime', v: '99.99%' },
                { k: 'Client satisfaction', v: '99%' },
              ].map((row) => (
                <div key={row.k} className="flex items-baseline justify-between py-3">
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
