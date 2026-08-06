import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star, Activity, Cpu, ShieldCheck, Rocket, TrendingUp } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1];

export default function Hero({ onOpenQuoteModal }) {
  return (
    <section
      className="relative overflow-hidden bg-indigo-gradient pt-36 pb-48 sm:pt-44 sm:pb-56"
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 88%, 0 100%)' }}
    >
      {/* Backdrop: grid + animated colorful blobs on the gradient */}
      <div className="absolute inset-0 line-grid opacity-20 pointer-events-none" />
      <div className="absolute -top-24 -left-16 w-[420px] h-[420px] bg-brand-pink/40 rounded-full blur-[130px] animate-blob pointer-events-none" />
      <div className="absolute top-10 right-0 w-[460px] h-[460px] bg-brand-blue/50 rounded-full blur-[150px] animate-float-slower pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 w-[380px] h-[380px] bg-violet-500/40 rounded-full blur-[130px] pointer-events-none" />

      <div className="container-x relative z-10">
        {/* Asymmetric layout: wide copy block offset left, card cluster lower-right */}
        <div className="grid lg:grid-cols-12 gap-y-20 gap-x-8 items-center">
          {/* Copy — spans wide, pushed up-left */}
          <div className="lg:col-span-7 lg:pr-10 text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/25 text-white text-[11px] font-extrabold uppercase tracking-widest"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-pink" /> Software Engineering Studio
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05, ease }}
              className="mt-6 font-heading font-extrabold tracking-tight text-white text-5xl sm:text-7xl lg:text-[5.25rem] leading-[0.98]"
            >
              Engineering that
              <span className="block mt-2 bg-gradient-to-r from-pink-300 via-white to-sky-200 bg-clip-text text-transparent">
                moves business
              </span>
              forward.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15, ease }}
              className="mt-7 text-lg sm:text-xl text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              We design and build high-performance mobile apps, web platforms, and AI-powered products — from first concept to production scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.28, ease }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
            >
              <button onClick={onOpenQuoteModal} className="btn w-full sm:w-auto bg-white text-brand-purple px-9 py-4 text-base font-extrabold shadow-lift hover:-translate-y-0.5">
                Start your project <ArrowRight className="w-4 h-4" />
              </button>
              <Link to="/solutions" className="btn w-full sm:w-auto bg-white/10 text-white border-2 border-white/40 px-9 py-4 text-base font-bold hover:bg-white/20 hover:-translate-y-0.5">
                Explore solutions
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-white/70"
            >
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-300">
                  {[0,1,2,3,4].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="font-bold text-white">4.9</span>/5 client rating
              </div>
              <div className="hidden sm:block h-4 w-px bg-white/30" />
              <span className="hidden sm:inline"><span className="font-bold text-white">150+</span> projects shipped</span>
            </motion.div>
          </div>

          {/* Overlapping stacked card cluster arranged diagonally */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2, ease }}
            className="lg:col-span-5 relative min-h-[440px] sm:min-h-[500px]"
          >
            {/* Card 1 — analytics, top, tilted left */}
            <motion.div
              initial={{ opacity: 0, y: -40, rotate: -12 }} animate={{ opacity: 1, y: 0, rotate: -7 }}
              transition={{ duration: 0.7, delay: 0.35, ease }}
              className="absolute left-0 sm:-left-6 top-0 w-64 sm:w-72 bg-white rounded-4xl shadow-lift p-5 z-20"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-brand-muted">Deployments</span>
                <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">+24%</span>
              </div>
              <div className="font-heading text-3xl font-extrabold gradient-text mb-3">1,284</div>
              <div className="flex items-end gap-1.5 h-16">
                {[40, 65, 50, 80, 60, 92, 74].map((h, i) => (
                  <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }}
                    transition={{ duration: 0.7, delay: 0.7 + i * 0.07, ease }}
                    className="flex-1 rounded-t-md bg-indigo-gradient" />
                ))}
              </div>
            </motion.div>

            {/* Card 2 — phone/app mockup, center, tilted right, overlapping */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 12 }} animate={{ opacity: 1, y: 0, rotate: 6 }}
              transition={{ duration: 0.7, delay: 0.45, ease }}
              className="absolute right-0 sm:-right-2 top-24 sm:top-28 w-52 sm:w-56 bg-white rounded-[2.25rem] shadow-lift p-3 z-30"
            >
              <div className="rounded-[1.6rem] overflow-hidden bg-ink">
                <div className="h-8 bg-indigo-gradient flex items-center justify-center">
                  <span className="w-16 h-1.5 rounded-full bg-white/50" />
                </div>
                <div className="p-4 space-y-3 bg-paper">
                  <div className="flex items-center gap-2">
                    <span className="w-9 h-9 rounded-xl bg-indigo-gradient grid place-items-center"><Rocket className="w-4 h-4 text-white" /></span>
                    <div className="flex-1">
                      <div className="h-2 w-20 rounded-full bg-brand-line" />
                      <div className="h-2 w-12 rounded-full bg-brand-line mt-1.5" />
                    </div>
                  </div>
                  <div className="rounded-2xl bg-brand-tint p-3">
                    <div className="text-[10px] font-bold text-brand-muted">Revenue</div>
                    <div className="font-heading text-xl font-extrabold text-ink">₹8.4L</div>
                    <div className="mt-2 h-1.5 w-full rounded-full bg-white overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: '72%' }} transition={{ duration: 1, delay: 0.9, ease }}
                        className="h-full bg-brand-gradient-pink" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-xl bg-white border border-brand-line p-2">
                      <TrendingUp className="w-4 h-4 text-brand-purple" />
                      <div className="h-1.5 w-10 rounded-full bg-brand-line mt-2" />
                    </div>
                    <div className="rounded-xl bg-white border border-brand-line p-2">
                      <Cpu className="w-4 h-4 text-brand-blue" />
                      <div className="h-1.5 w-8 rounded-full bg-brand-line mt-2" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3 — uptime chip, bottom-left */}
            <motion.div
              animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-2 sm:left-0 bottom-4 bg-white rounded-3xl shadow-lift px-4 py-3 flex items-center gap-3 z-40"
            >
              <div className="w-10 h-10 rounded-2xl bg-indigo-gradient grid place-items-center shadow-indigo"><Activity className="w-5 h-5 text-white" /></div>
              <div><div className="text-[11px] text-brand-muted font-semibold">Uptime</div><div className="font-extrabold text-ink text-sm">99.99%</div></div>
            </motion.div>

            {/* Card 4 — secure badge, mid-right */}
            <motion.div
              animate={{ y: [0, 9, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute right-4 sm:right-8 bottom-24 bg-white rounded-2xl shadow-lift px-4 py-2.5 flex items-center gap-2 z-40"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span className="text-xs font-bold text-ink">Secure by design</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
