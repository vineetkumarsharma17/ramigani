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

// Asymmetric bento layout (4-col grid on lg). Fills a tidy 4×3 mosaic for 7 tiles.
const spanMap = [
  'lg:col-span-2 lg:row-span-2', // 0 — big feature tile
  'lg:col-span-2',               // 1 — wide
  '',                            // 2
  '',                            // 3
  'lg:col-span-2',               // 4 — wide
  '',                            // 5
  '',                            // 6
];

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

        {/* Asymmetric bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[13.5rem] gap-4">
          {services.map((svc, i) => {
            const Icon = iconMap[svc.id] || Layers;
            const big = i === 0;
            return (
              <Reveal key={svc.id} delay={(i % 4) * 0.06} className={spanMap[i]}>
                <Link
                  to={`/solutions/${svc.id}`}
                  className="group relative flex flex-col h-full min-h-[13.5rem] card rounded-3xl p-6 overflow-hidden aurora-ring hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
                >
                  {/* glow wash on hover */}
                  <div className="absolute -right-12 -top-12 w-52 h-52 bg-brand-violet/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-start justify-between">
                    <div className={`rounded-2xl bg-indigo-gradient grid place-items-center shadow-glow ${big ? 'w-14 h-14' : 'w-11 h-11'}`}>
                      <Icon className={big ? 'w-7 h-7 text-white' : 'w-5 h-5 text-white'} />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-brand-muted group-hover:text-brand-violet group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <h3 className={`relative font-heading font-bold text-white group-hover:text-brand-indigoLight transition-colors ${big ? 'mt-6 text-2xl' : 'mt-4 text-lg'}`}>{svc.name}</h3>
                  <p className={`relative mt-2 text-brand-body leading-relaxed ${big ? 'text-sm max-w-md' : 'text-[13px]'}`}>{svc.short}</p>

                  {big && (
                    <div className="relative mt-auto pt-5 flex flex-wrap gap-2">
                      {svc.features.slice(0, 4).map((f) => (
                        <span key={f.title} className="text-xs font-medium px-3 py-1 rounded-full bg-brand-tint text-brand-indigoLight border border-brand-violet/20">{f.title}</span>
                      ))}
                    </div>
                  )}
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
