import React from 'react';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function AboutPage({ onOpenQuoteModal }) {
  return (
    <div className="pt-28">
      {/* Editorial page header */}
      <section className="pt-14 pb-16 sm:pt-16 sm:pb-20">
        <div className="container-x">
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-widest2 text-brand-soft mb-6">
            <span className="font-display accent text-lg">✳</span>
            <span className="h-px w-8 bg-brand-lineStrong" />
            <span>About the studio</span>
          </div>
          <h1 className="font-display font-normal text-5xl sm:text-7xl tracking-tight text-ink leading-[0.98] max-w-4xl">
            Senior engineers, <span className="italic">real</span> partnership.
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-brand-body max-w-2xl leading-relaxed">
            Ramigani Tech Solutions is a software engineering studio in Hyderabad. We help ambitious teams design, build, and scale digital products that hold up in production.
          </p>
        </div>
      </section>

      <WhyChooseUs />
      <Process />
      <Testimonials />
      <CTA onOpenQuoteModal={onOpenQuoteModal} />
    </div>
  );
}
