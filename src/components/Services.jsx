import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { services } from '../data/services';
import Reveal from './Reveal';

export default function Services({ onOpenQuoteModal }) {
  return (
    <section id="solutions" className="py-24 sm:py-28">
      <div className="container-x">
        {/* Section header */}
        <Reveal className="grid lg:grid-cols-12 gap-6 items-end border-b border-brand-line pb-8 mb-2">
          <div className="lg:col-span-8">
            <span className="eyebrow"><span className="font-display accent text-sm">01</span> What we do</span>
            <h2 className="mt-4 font-display font-normal text-4xl sm:text-6xl tracking-tight text-ink leading-[1.02]">
              Solutions built to <span className="italic">scale</span>
            </h2>
          </div>
          <p className="lg:col-span-4 text-brand-body leading-relaxed lg:text-right lg:self-end">
            End-to-end product engineering across mobile, web, design, quality, and AI. Explore each solution in detail.
          </p>
        </Reveal>

        {/* Numbered editorial list */}
        <div className="border-b border-brand-line">
          {services.map((svc, i) => (
            <Reveal key={svc.id} delay={(i % 4) * 0.05}>
              <Link
                to={`/solutions/${svc.id}`}
                className="group grid grid-cols-12 gap-4 items-center py-7 border-t border-brand-line hover:bg-brand-panel transition-colors duration-300 px-2 -mx-2"
              >
                <span className="col-span-2 sm:col-span-1 font-display text-lg text-brand-muted group-hover:text-brand-accent transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="col-span-10 sm:col-span-4">
                  <h3 className="font-display text-2xl sm:text-3xl text-ink leading-tight group-hover:translate-x-1 transition-transform duration-300">
                    {svc.name}
                  </h3>
                </div>

                <p className="hidden sm:block col-span-4 text-sm text-brand-soft leading-relaxed">
                  {svc.short}
                </p>

                <div className="hidden sm:flex col-span-3 items-center justify-end gap-4">
                  <span className="text-[11px] uppercase tracking-widest text-brand-muted">{svc.category}</span>
                  <span className="w-10 h-10 border border-brand-lineStrong grid place-items-center group-hover:bg-ink group-hover:border-ink transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-ink group-hover:text-paper transition-colors" />
                  </span>
                </div>

                <div className="col-span-12 sm:hidden mt-2 flex items-center justify-between">
                  <span className="text-xs text-brand-soft">{svc.short}</span>
                  <ArrowUpRight className="w-4 h-4 text-brand-accent flex-shrink-0" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="font-display italic text-xl text-brand-soft">Need something bespoke?</p>
          <button onClick={onOpenQuoteModal} className="btn-primary">Request a custom solution</button>
        </Reveal>
      </div>
    </section>
  );
}
