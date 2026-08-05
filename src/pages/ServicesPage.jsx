import React from 'react';
import Services from '../components/Services';
import Process from '../components/Process';
import CTA from '../components/CTA';

export default function ServicesPage({ onOpenQuoteModal }) {
  return (
    <div className="pt-28">
      {/* Editorial page header */}
      <section className="pt-14 pb-10 sm:pt-16 sm:pb-12">
        <div className="container-x">
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-widest2 text-brand-soft mb-6">
            <span className="font-display accent text-lg">✳</span>
            <span className="h-px w-8 bg-brand-lineStrong" />
            <span>Our solutions</span>
          </div>
          <h1 className="font-display font-normal text-5xl sm:text-7xl tracking-tight text-ink leading-[0.98] max-w-4xl">
            Seven ways we help you <span className="italic">ship</span>.
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-brand-body max-w-2xl leading-relaxed">
            From mobile and web engineering to design, quality, AI, and growth — a full-stack studio for every stage of your product.
          </p>
        </div>
      </section>

      <Services onOpenQuoteModal={onOpenQuoteModal} />
      <Process />
      <CTA onOpenQuoteModal={onOpenQuoteModal} />
    </div>
  );
}
