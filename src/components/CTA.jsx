import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import Reveal from './Reveal';

export default function CTA({ onOpenQuoteModal }) {
  return (
    <section className="py-24">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-5xl bg-indigo-gradient px-8 py-16 sm:px-14 sm:py-24 text-center">
          <div className="absolute inset-0 line-grid opacity-20 pointer-events-none" />
          <div className="absolute -top-16 -right-10 w-80 h-80 bg-brand-pink/40 rounded-full blur-3xl animate-blob pointer-events-none" />
          <div className="absolute -bottom-24 -left-10 w-80 h-80 bg-brand-sky/30 rounded-full blur-3xl animate-float-slower pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-heading font-extrabold text-4xl sm:text-6xl tracking-tight text-white leading-[1.05]">
              Ready to build something great?
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-white/85">
              Tell us about your project and we'll get back within 24 hours with a plan and a quote.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button onClick={onOpenQuoteModal} className="btn w-full sm:w-auto bg-white text-brand-purple px-9 py-4 text-base font-extrabold hover:-translate-y-0.5 shadow-lift">
                <Calendar className="w-4 h-4" /> Book a consultation
              </button>
              <Link to="/contact" className="btn w-full sm:w-auto bg-white/10 text-white border-2 border-white/40 px-9 py-4 text-base font-bold hover:bg-white/20">
                Contact us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
