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

// Bento column spans (3-col grid): fills 3 tidy rows for 7 items.
const spanMap = ['lg:col-span-2', '', '', 'lg:col-span-2', '', '', ''];

export default function Services({ onOpenQuoteModal }) {
  return (
    <section id="solutions" className="py-24 relative">
      <div className="container-x">
        <Reveal className="max-w-2xl mx-auto text-center mb-14">
          <span className="eyebrow"><Layers className="w-3.5 h-3.5" /> What we do</span>
          <h2 className="mt-4 font-heading font-bold text-3xl sm:text-5xl tracking-tight text-white">
            Solutions built to <span className="gradient-text">scale</span>
          </h2>
          <p className="mt-4 text-lg text-brand-body">
            End-to-end product engineering across mobile, web, design, quality, and AI. Explore each solution in detail.
          </p>
        </Reveal>

        {/* Bento grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
          {services.map((svc, i) => {
            const Icon = iconMap[svc.id] || Layers;
            const big = !!spanMap[i];
            return (
              <Reveal key={svc.id} delay={(i % 3) * 0.08} className={spanMap[i]}>
                <Link
                  to={`/solutions/${svc.id}`}
                  className="group relative block h-full card rounded-3xl p-7 overflow-hidden aurora-ring hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
                >
                  {/* glow wash on hover */}
                  <div className="absolute -right-10 -top-10 w-48 h-48 bg-brand-violet/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-start justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-gradient grid place-items-center shadow-glow">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-brand-muted group-hover:text-brand-violet group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="relative mt-5 font-heading font-bold text-xl text-white group-hover:text-brand-indigoLight transition-colors">{svc.name}</h3>
                  <p className="relative mt-2 text-sm text-brand-body leading-relaxed max-w-md">{svc.short}</p>
                  {big && (
                    <div className="relative mt-4 flex flex-wrap gap-2">
                      {svc.features.slice(0, 3).map((f) => (
                        <span key={f.title} className="text-xs font-medium px-3 py-1 rounded-full bg-brand-tint text-brand-indigoLight border border-brand-violet/20">{f.title}</span>
                      ))}
                    </div>
                  )}
                  <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-violet">
                    View details <ArrowUpRight className="w-4 h-4" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-10 text-center">
          <button onClick={onOpenQuoteModal} className="btn-dark px-8 py-3.5">Request a custom solution</button>
        </Reveal>
      </div>
    </section>
  );
}
