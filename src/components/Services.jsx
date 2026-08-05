import React from 'react';
import { Link } from 'react-router-dom';
import {
  Smartphone, Globe, Palette, CheckSquare, BrainCircuit, Search, Share2, ArrowUpRight, Layers,
} from 'lucide-react';
import { services } from '../data/services';
import Reveal from './Reveal';

const iconMap = {
  'app-development': Smartphone,
  'web-development': Globe,
  'ui-ux-design': Palette,
  'qa-testing': CheckSquare,
  'ai-ml-solutions': BrainCircuit,
  'seo-optimization': Search,
  'social-media': Share2,
};

// Per-card gradient accents to keep it colorful but cohesive
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
    <section id="solutions" className="py-24 relative">
      <div className="absolute inset-0 bg-mesh opacity-40 pointer-events-none" />
      <div className="container-x relative">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <span className="eyebrow"><Layers className="w-3.5 h-3.5 text-brand-blue" /> What we do</span>
          <h2 className="mt-5 font-heading font-extrabold text-4xl sm:text-5xl tracking-tight text-ink">
            Solutions built to <span className="gradient-text">scale</span>
          </h2>
          <p className="mt-4 text-lg text-brand-body">
            End-to-end product engineering across mobile, web, design, quality, and AI. Explore each solution in detail.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const Icon = iconMap[svc.id] || Layers;
            const grad = gradients[svc.id] || 'from-violet-600 to-blue-600';
            const big = i === 0; // feature the first card across 2 cols on lg
            return (
              <Reveal key={svc.id} delay={(i % 3) * 0.08} className={big ? 'lg:col-span-2' : ''}>
                <Link
                  to={`/solutions/${svc.id}`}
                  className="group relative block h-full card rounded-4xl p-8 overflow-hidden hover:shadow-lift hover:-translate-y-1.5 transition-all duration-300"
                >
                  {/* colorful hover wash */}
                  <div className={`absolute -right-16 -top-16 w-48 h-48 rounded-full bg-gradient-to-br ${grad} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />
                  <div className="relative flex items-start justify-between">
                    <div className={`w-14 h-14 rounded-3xl bg-gradient-to-br ${grad} grid place-items-center shadow-indigo group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-brand-muted group-hover:text-brand-purple group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="relative mt-6 font-heading font-extrabold text-2xl text-ink group-hover:text-brand-purple transition-colors">{svc.name}</h3>
                  <p className="relative mt-2 text-sm text-brand-body leading-relaxed max-w-md">{svc.short}</p>
                  {big && (
                    <div className="relative mt-5 flex flex-wrap gap-2">
                      {svc.features.slice(0, 3).map((f) => (
                        <span key={f.title} className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-brand-tint text-brand-purple">{f.title}</span>
                      ))}
                    </div>
                  )}
                  <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-extrabold text-brand-purple">
                    View details <ArrowUpRight className="w-4 h-4" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-12 text-center">
          <button onClick={onOpenQuoteModal} className="btn-dark px-9 py-4 text-base">Request a custom solution</button>
        </Reveal>
      </div>
    </section>
  );
}
