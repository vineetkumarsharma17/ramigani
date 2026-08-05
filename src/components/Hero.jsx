import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star, Activity, Cpu, ShieldCheck, Rocket } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1];

const chips = ['Mobile Apps', 'Web Platforms', 'AI / ML', 'UI / UX', 'Cloud'];

export default function Hero({ onOpenQuoteModal }) {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Backdrop: colorful gradient blobs + subtle grid */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="absolute inset-0 line-grid opacity-50 [mask-image:radial-gradient(70%_60%_at_50%_0%,#000_30%,transparent_75%)] pointer-events-none" />
      <div className="absolute -top-32 -left-24 w-[420px] h-[420px] bg-brand-purple/25 rounded-full blur-[130px] animate-blob pointer-events-none" />
      <div className="absolute top-0 right-0 w-[460px] h-[460px] bg-brand-blue/20 rounded-full blur-[140px] animate-float-slower pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[360px] h-[360px] bg-brand-pink/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-x relative z-10 grid lg:grid-cols-12 gap-14 items-center">
        {/* Left: copy */}
        <div className="lg:col-span-6 text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }}
            className="eyebrow"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-pink" /> Software Engineering Studio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05, ease }}
            className="mt-6 font-heading font-extrabold tracking-tight text-ink text-5xl sm:text-6xl lg:text-7xl leading-[1.02]"
          >
            Engineering that <span className="gradient-text-anim animate-gradient-shift">moves business</span> forward.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15, ease }}
            className="mt-6 text-lg sm:text-xl text-brand-body max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            We design and build high-performance mobile apps, web platforms, and AI-powered products — from first concept to production scale.
          </motion.p>

          {/* floating capability chips */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-7 flex flex-wrap justify-center lg:justify-start gap-2"
          >
            {chips.map((c) => (
              <span key={c} className="px-3.5 py-1.5 rounded-full bg-white border border-brand-line text-xs font-bold text-brand-body shadow-soft">
                {c}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3, ease }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
          >
            <button onClick={onOpenQuoteModal} className="btn-primary w-full sm:w-auto px-9 py-4 text-base">
              Start your project <ArrowRight className="w-4 h-4" />
            </button>
            <Link to="/solutions" className="btn-ghost w-full sm:w-auto px-9 py-4 text-base">Explore solutions</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-9 flex items-center justify-center lg:justify-start gap-6 text-sm text-brand-muted"
          >
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[0,1,2,3,4].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="font-bold text-ink">4.9</span>/5 client rating
            </div>
            <div className="hidden sm:block h-4 w-px bg-brand-line" />
            <span className="hidden sm:inline"><span className="font-bold text-ink">150+</span> projects shipped</span>
          </motion.div>
        </div>

        {/* Right: floating product visual */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.2, ease }}
          className="lg:col-span-6 relative"
        >
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* glow behind card */}
            <div className="absolute -inset-6 bg-indigo-gradient rounded-[3rem] blur-3xl opacity-25 pointer-events-none" />

            {/* main dashboard card */}
            <div className="relative card rounded-5xl p-6 shadow-lift">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-3 h-3 rounded-full bg-brand-pink" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="ml-3 text-xs font-bold text-brand-muted">ramigani · analytics</span>
              </div>
              <div className="rounded-3xl section-tint border border-brand-line p-5">
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <div className="text-xs font-semibold text-brand-muted">Deployments</div>
                    <div className="font-heading text-3xl font-extrabold gradient-text">1,284</div>
                  </div>
                  <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">+24%</span>
                </div>
                {/* animated bars */}
                <div className="flex items-end gap-2 h-32">
                  {[40, 65, 50, 80, 60, 92, 74].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.8, delay: 0.5 + i * 0.08, ease }}
                      className="flex-1 rounded-t-xl bg-indigo-gradient"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* floating stat chips */}
            <motion.div
              animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-4 sm:-left-10 top-16 card rounded-3xl px-4 py-3 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-2xl bg-indigo-gradient grid place-items-center shadow-indigo"><Activity className="w-5 h-5 text-white" /></div>
              <div><div className="text-xs text-brand-muted font-semibold">Uptime</div><div className="font-extrabold text-ink text-sm">99.99%</div></div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-3 sm:-right-8 bottom-10 card rounded-3xl px-4 py-3 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-2xl bg-brand-gradient-pink grid place-items-center shadow-pink"><Cpu className="w-5 h-5 text-white" /></div>
              <div><div className="text-xs text-brand-muted font-semibold">AI models</div><div className="font-extrabold text-ink text-sm">Production-ready</div></div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute right-8 -top-5 card rounded-2xl px-4 py-3 flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span className="text-xs font-bold text-ink">Secure by design</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 9, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-3 bottom-4 card rounded-2xl px-4 py-3 flex items-center gap-2"
            >
              <Rocket className="w-4 h-4 text-brand-purple" />
              <span className="text-xs font-bold text-ink">Ship faster</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
