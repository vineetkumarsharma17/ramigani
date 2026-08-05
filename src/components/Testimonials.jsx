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
    <section className="py-24 section-tint border-y border-brand-line">
      <div className="container-x">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <span className="eyebrow">Testimonials</span>
          <h2 className="mt-5 font-heading font-extrabold text-4xl sm:text-5xl tracking-tight text-ink">
            Trusted by teams that <span className="gradient-text-pink">ship</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="card rounded-4xl p-8 h-full flex flex-col hover:shadow-lift hover:-translate-y-1.5 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-indigo-gradient grid place-items-center shadow-indigo">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                <div className="flex text-amber-400 my-4">
                  {[0,1,2,3,4].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <blockquote className="text-ink/90 leading-relaxed flex-grow text-[15px]">“{t.quote}”</blockquote>
                <figcaption className="mt-6 pt-6 border-t border-brand-line">
                  <div className="font-extrabold text-ink text-sm">{t.name}</div>
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
