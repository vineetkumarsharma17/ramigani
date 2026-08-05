import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star, Activity, Cpu, ShieldCheck } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1];

export default function Hero({ onOpenQuoteModal }) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="absolute inset-0 line-grid opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_0%,#000_30%,transparent_75%)] pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-violet/25 rounded-full blur-[120px] animate-float-slow pointer-events-none" />
      <div className="absolute top-10 right-0 w-[420px] h-[420px] bg-brand-cyan/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="container-x relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left: copy */}
        <div className="lg:col-span-6 text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }}
            className="eyebrow"
          >
            <Sparkles className="w-3.5 h-3.5" /> Software Engineering Studio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05, ease }}
            className="mt-5 font-heading font-bold tracking-tight text-white text-4xl sm:text-6xl leading-[1.05]"
          >
            Engineering that <span className="gradient-text-anim animate-gradient-shift">moves business</span> forward.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15, ease }}
            className="mt-6 text-lg text-brand-body max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            We design and build high-performance mobile apps, web platforms, and AI-powered products — from first concept to production scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25, ease }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
          >
            <button onClick={onOpenQuoteModal} className="btn-primary w-full sm:w-auto px-8 py-3.5">
              Start your project <ArrowRight className="w-4 h-4" />
            </button>
            <Link to="/solutions" className="btn-ghost w-full sm:w-auto px-8 py-3.5">Explore solutions</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-brand-muted"
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

        {/* Right: floating product visual */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.2, ease }}
          className="lg:col-span-6 relative"
        >
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* glow behind card */}
            <div className="absolute inset-6 bg-indigo-gradient rounded-4xl blur-[70px] opacity-40 pointer-events-none" />

            {/* main dashboard card */}
            <div className="relative card rounded-4xl p-5 shadow-lift aurora-ring">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-400/80" />
                <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                <span className="ml-3 text-xs font-medium text-brand-muted">ramigani · analytics</span>
              </div>
              <div className="rounded-2xl bg-white/[0.04] border border-brand-line p-5">
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <div className="text-xs text-brand-muted">Deployments</div>
                    <div className="font-heading text-2xl font-bold text-white">1,284</div>
                  </div>
                  <span className="text-xs font-bold text-emerald-300 bg-emerald-400/10 border border-emerald-400/20 px-2 py-1 rounded-full">+24%</span>
                </div>
                {/* animated bars */}
                <div className="flex items-end gap-2 h-28">
                  {[40, 65, 50, 80, 60, 92, 74].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.8, delay: 0.5 + i * 0.08, ease }}
                      className="flex-1 rounded-t-lg bg-indigo-gradient shadow-glow"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* floating stat chips */}
            <motion.div
              animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-4 sm:-left-8 top-16 card rounded-2xl px-4 py-3 flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-brand-tint grid place-items-center"><Activity className="w-4 h-4 text-brand-violet" /></div>
              <div><div className="text-xs text-brand-muted">Uptime</div><div className="font-bold text-white text-sm">99.99%</div></div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-3 sm:-right-6 bottom-8 card rounded-2xl px-4 py-3 flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-brand-tint grid place-items-center"><Cpu className="w-4 h-4 text-brand-cyan" /></div>
              <div><div className="text-xs text-brand-muted">AI models</div><div className="font-bold text-white text-sm">Production-ready</div></div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute right-6 -top-4 card rounded-2xl px-4 py-3 flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-semibold text-white">Secure by design</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
