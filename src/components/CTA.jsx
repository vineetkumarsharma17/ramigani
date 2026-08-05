import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import Reveal from './Reveal';

export default function CTA({ onOpenQuoteModal }) {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-x">
        <Reveal className="relative overflow-hidden bg-ink text-paper px-8 py-16 sm:px-16 sm:py-24">
          <div className="absolute inset-0 grid-lines opacity-[0.06] pointer-events-none" />
          <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <span className="text-[11px] font-semibold uppercase tracking-widest2 text-paper/50">Let's build together</span>
              <h2 className="mt-5 font-display font-normal text-4xl sm:text-6xl tracking-tight leading-[1.02]">
                Ready to build something <span className="italic accent">great</span>?
              </h2>
              <p className="mt-6 text-lg text-paper/70 max-w-xl leading-relaxed">
                Tell us about your project and we'll get back within 24 hours with a plan and a quote.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
              <button onClick={onOpenQuoteModal} className="btn-invert w-full sm:w-auto">
                <Calendar className="w-4 h-4" /> Book a consultation
              </button>
              <Link to="/contact" className="btn w-full sm:w-auto justify-center border border-paper/30 text-paper px-7 py-3.5 uppercase tracking-widest font-medium hover:border-paper transition-colors">
                Contact us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
