import React from 'react';
import { Link } from 'react-router-dom';
import {
  Smartphone, Globe, Palette, CheckSquare, BrainCircuit, ArrowUpRight, Layers,
} from 'lucide-react';
import { services } from '../data/services';
import Reveal from './Reveal';

const iconMap = {
  'app-development': Smartphone,
  'web-development': Globe,
  'ui-ux-design': Palette,
  'qa-testing': CheckSquare,
  'ai-ml-solutions': BrainCircuit,
};

export default function Services({ onOpenQuoteModal }) {
  return (
    <section id="solutions" className="py-24 relative">
      <div className="container-x">
        <Reveal className="max-w-2xl mx-auto text-center mb-14">
          <span className="eyebrow"><Layers className="w-3.5 h-3.5" /> What we do</span>
          <h2 className="mt-4 font-heading font-bold text-3xl sm:text-5xl tracking-tight text-ink">
            Solutions built to <span className="gradient-text">scale</span>
          </h2>
          <p className="mt-4 text-lg text-brand-body">
            End-to-end product engineering across mobile, web, design, quality, and AI. Explore each solution in detail.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => {
            const Icon = iconMap[svc.id] || Layers;
            const big = i === 0; // feature the first card across 2 cols on lg
            return (
              <Reveal key={svc.id} delay={(i % 3) * 0.08} className={big ? 'lg:col-span-2' : ''}>
                <Link
                  to={`/solutions/${svc.id}`}
                  className="group relative block h-full card rounded-3xl p-7 overflow-hidden hover:shadow-lift hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand-tint rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-start justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-gradient grid place-items-center shadow-indigo">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-brand-muted group-hover:text-brand-indigo group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="relative mt-5 font-heading font-bold text-xl text-ink group-hover:text-brand-indigo transition-colors">{svc.name}</h3>
                  <p className="relative mt-2 text-sm text-brand-body leading-relaxed max-w-md">{svc.short}</p>
                  {big && (
                    <div className="relative mt-4 flex flex-wrap gap-2">
                      {svc.features.slice(0, 3).map((f) => (
                        <span key={f.title} className="text-xs font-medium px-3 py-1 rounded-full bg-brand-tint text-brand-indigo">{f.title}</span>
                      ))}
                    </div>
                  )}
                  <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-indigo">
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
