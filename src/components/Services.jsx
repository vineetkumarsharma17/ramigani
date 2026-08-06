import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { services } from '../data/services';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

export default function Services({ onOpenQuoteModal }) {
  return (
    <section id="solutions" className="py-24 sm:py-28">
      <div className="container-x">
        <SectionHead
          index="01"
          label="What we do"
          title={<>Solutions built to <span className="italic">scale</span></>}
          lede="End-to-end product engineering across mobile, web, design, quality, and AI. Explore each solution in detail."
        />

        {/* Numbered editorial list — big 01–07 indices, hairline row dividers */}
        <div className="border-b border-brand-line">
          {services.map((svc, i) => (
            <Reveal key={svc.id} delay={(i % 4) * 0.04}>
              <Link
                to={`/solutions/${svc.id}`}
                className="group grid grid-cols-12 gap-3 sm:gap-4 items-center py-6 sm:py-8 border-t border-brand-line hover:bg-brand-panel transition-colors duration-300 px-3 -mx-3"
              >
                <span className="col-span-2 sm:col-span-1 font-display text-3xl sm:text-5xl text-brand-lineStrong group-hover:text-brand-accent transition-colors leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="col-span-10 sm:col-span-5">
                  <h3 className="font-display text-2xl sm:text-4xl text-ink leading-[1.05] group-hover:translate-x-1.5 transition-transform duration-300">
                    {svc.name}
                  </h3>
                </div>

                <p className="hidden sm:block col-span-4 text-sm text-brand-soft leading-relaxed">
                  {svc.short}
                </p>

                <div className="hidden sm:flex col-span-2 items-center justify-end">
                  <span className="w-11 h-11 border border-brand-lineStrong grid place-items-center group-hover:bg-ink group-hover:border-ink transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-ink group-hover:text-paper transition-colors" />
                  </span>
                </div>

                <div className="col-span-12 sm:hidden mt-2 flex items-center justify-between gap-3">
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
