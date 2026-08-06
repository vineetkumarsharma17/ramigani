import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Smartphone, Globe, Palette, CheckSquare, BrainCircuit, Search, Share2, ArrowUpRight, Layers, Check,
} from 'lucide-react';
import { services } from '../data/services';
import Reveal from './Reveal';

const ease = [0.16, 1, 0.3, 1];

const iconMap = {
  'app-development': Smartphone,
  'web-development': Globe,
  'ui-ux-design': Palette,
  'qa-testing': CheckSquare,
  'ai-ml-solutions': BrainCircuit,
  'seo-optimization': Search,
  'social-media': Share2,
};

// Per-row gradient accents to keep it colorful but cohesive
const gradients = {
  'app-development': 'from-violet-600 to-indigo-600',
  'web-development': 'from-indigo-600 to-blue-600',
  'ui-ux-design': 'from-fuchsia-600 to-pink-500',
  'qa-testing': 'from-blue-600 to-cyan-500',
  'ai-ml-solutions': 'from-purple-600 to-blue-600',
  'seo-optimization': 'from-pink-500 to-rose-500',
  'social-media': 'from-indigo-600 to-fuchsia-600',
};

export default function Services({ onOpenQuoteModal }) {
  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
      <div className="container-x relative">
        <Reveal className="max-w-2xl mx-auto text-center mb-20">
          <span className="eyebrow"><Layers className="w-3.5 h-3.5 text-brand-blue" /> What we do</span>
          <h2 className="mt-5 font-heading font-extrabold text-4xl sm:text-5xl tracking-tight text-ink">
            Solutions built to <span className="gradient-text">scale</span>
          </h2>
          <p className="mt-4 text-lg text-brand-body">
            End-to-end product engineering across mobile, web, design, quality, and AI — explored one by one.
          </p>
        </Reveal>

        {/* Zig-zag alternating feature rows */}
        <div className="space-y-24 sm:space-y-28">
          {services.map((svc, i) => {
            const Icon = iconMap[svc.id] || Layers;
            const grad = gradients[svc.id] || 'from-violet-600 to-blue-600';
            const index = String(i + 1).padStart(2, '0');
            const flip = i % 2 === 1; // alternate visual side
            return (
              <div key={svc.id} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Visual panel */}
                <motion.div
                  initial={{ opacity: 0, x: flip ? 60 : -60, scale: 0.94 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease }}
                  className={`relative ${flip ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className={`relative aspect-[4/3] rounded-5xl bg-gradient-to-br ${grad} shadow-lift overflow-hidden`}>
                    <div className="absolute inset-0 line-grid opacity-20" />
                    {/* giant faded index */}
                    <span className="absolute -bottom-6 -right-2 font-heading font-extrabold text-white/15 text-[11rem] leading-none select-none">{index}</span>
                    {/* centered glass icon tile */}
                    <div className="absolute inset-0 grid place-items-center">
                      <motion.div
                        whileHover={{ scale: 1.08, rotate: -4 }}
                        className="w-28 h-28 rounded-4xl bg-white/15 backdrop-blur-md border border-white/25 grid place-items-center shadow-2xl"
                      >
                        <Icon className="w-14 h-14 text-white" />
                      </motion.div>
                    </div>
                    {/* floating mini chips */}
                    <motion.span
                      animate={{ y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute top-6 left-6 px-3 py-1.5 rounded-full bg-white text-[11px] font-extrabold text-ink shadow-lift"
                    >
                      {svc.category}
                    </motion.span>
                    <motion.span
                      animate={{ y: [0, 8, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute bottom-6 left-6 px-3 py-1.5 rounded-full bg-white/90 text-[11px] font-bold text-brand-purple shadow-lift"
                    >
                      {svc.features.length} capabilities
                    </motion.span>
                  </div>
                </motion.div>

                {/* Text side */}
                <motion.div
                  initial={{ opacity: 0, x: flip ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.1, ease }}
                  className={`${flip ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-heading font-extrabold text-5xl bg-gradient-to-br ${grad} bg-clip-text text-transparent`}>{index}</span>
                    <span className="h-px flex-grow bg-brand-line" />
                  </div>
                  <h3 className="mt-5 font-heading font-extrabold text-3xl sm:text-4xl text-ink tracking-tight">{svc.name}</h3>
                  <p className="mt-3 text-base text-brand-purple font-bold">{svc.tagline}</p>
                  <p className="mt-4 text-lg text-brand-body leading-relaxed">{svc.short}</p>

                  <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                    {svc.features.map((f) => (
                      <li key={f.title} className="flex items-start gap-2.5 text-sm text-ink font-semibold">
                        <span className={`mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br ${grad} grid place-items-center flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </span>
                        {f.title}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/solutions/${svc.id}`}
                    className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-white text-sm font-extrabold hover:-translate-y-0.5 transition-transform"
                  >
                    View details <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-24 text-center">
          <button onClick={onOpenQuoteModal} className="btn-primary px-9 py-4 text-base">Request a custom solution</button>
        </Reveal>
      </div>
    </section>
  );
}
