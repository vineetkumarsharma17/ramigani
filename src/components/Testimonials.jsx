import React from 'react';
import { Quote, Star } from 'lucide-react';
import Reveal from './Reveal';

// Placeholder testimonials — replace with real client quotes.
const items = [
  { quote: 'Ramigani delivered our mobile app ahead of schedule and the quality was outstanding. A genuine engineering partner.', name: 'Placeholder Name', role: 'Founder, Fintech Startup' },
  { quote: 'Their team rebuilt our web platform end-to-end. Performance and conversions both jumped noticeably.', name: 'Placeholder Name', role: 'Head of Product, SaaS' },
  { quote: 'Clear communication, senior talent, and reliable delivery. Exactly what we needed to scale.', name: 'Placeholder Name', role: 'CTO, E-commerce' },
];

export default function Testimonials() {
  return (
    <section className="py-24 relative border-y border-brand-line">
      <div className="absolute inset-0 bg-aurora-soft pointer-events-none" />
      <div className="container-x relative z-10">
        <Reveal className="max-w-2xl mx-auto text-center mb-14">
          <span className="eyebrow">Testimonials</span>
          <h2 className="mt-4 font-heading font-bold text-3xl sm:text-5xl tracking-tight text-white">
            Trusted by teams that <span className="gradient-text">ship</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="card rounded-3xl p-7 h-full flex flex-col aurora-ring hover:shadow-glow transition-all duration-300">
                <Quote className="w-8 h-8 text-brand-violet/40" />
                <div className="flex text-amber-400 my-3">
                  {[0,1,2,3,4].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <blockquote className="text-brand-body leading-relaxed flex-grow">“{t.quote}”</blockquote>
                <figcaption className="mt-5 pt-5 border-t border-brand-line">
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-brand-muted">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="text-center text-[11px] text-brand-muted mt-8 italic">Testimonials are placeholders — share real client quotes to finalize.</p>
      </div>
    </section>
  );
}
