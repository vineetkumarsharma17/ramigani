import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import Reveal from './Reveal';

export default function CTA({ onOpenQuoteModal }) {
  return (
    <section className="py-24">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-indigo-gradient px-8 py-14 sm:px-14 sm:py-20 text-center">
          <div className="absolute inset-0 line-grid opacity-20 pointer-events-none" />
          <div className="absolute -top-16 -right-10 w-72 h-72 bg-white/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-10 w-72 h-72 bg-brand-sky/25 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-heading font-bold text-3xl sm:text-5xl tracking-tight text-white leading-tight">
              Ready to build something great?
            </h2>
            <p className="mt-5 text-lg text-white/85">
              Tell us about your project and we'll get back within 24 hours with a plan and a quote.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button onClick={onOpenQuoteModal} className="btn w-full sm:w-auto bg-white text-brand-indigo px-8 py-3.5 font-bold hover:-translate-y-0.5 shadow-lift">
                <Calendar className="w-4 h-4" /> Book a consultation
              </button>
              <Link to="/contact" className="btn w-full sm:w-auto bg-white/10 text-white border border-white/30 px-8 py-3.5 font-semibold hover:bg-white/20">
                Contact us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
