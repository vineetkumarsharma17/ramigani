import React from 'react';
import Reveal from './Reveal';

// Placeholder testimonials — replace with real client quotes.
const items = [
  { quote: 'Ramigani delivered our mobile app ahead of schedule and the quality was outstanding. A genuine engineering partner.', name: 'Placeholder Name', role: 'Founder, Fintech Startup' },
  { quote: 'Their team rebuilt our web platform end-to-end. Performance and conversions both jumped noticeably.', name: 'Placeholder Name', role: 'Head of Product, SaaS' },
  { quote: 'Clear communication, senior talent, and reliable delivery. Exactly what we needed to scale.', name: 'Placeholder Name', role: 'CTO, E-commerce' },
];

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-28 border-t border-brand-line">
      <div className="container-x">
        <Reveal className="grid lg:grid-cols-12 gap-6 items-end border-b border-brand-line pb-8 mb-2">
          <div className="lg:col-span-8">
            <span className="eyebrow"><span className="font-display accent text-sm">04</span> Testimonials</span>
            <h2 className="mt-4 font-display font-normal text-4xl sm:text-6xl tracking-tight text-ink leading-[1.02]">
              Trusted by teams that <span className="italic">ship</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 border-b border-brand-line">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="h-full flex flex-col py-10 md:px-8 border-t md:border-t-0 border-brand-line md:border-l first:md:border-l-0 md:first:pl-0">
                <span className="font-display text-6xl leading-none text-brand-accent">“</span>
                <blockquote className="mt-4 font-display text-xl text-ink leading-relaxed flex-grow">{t.quote}</blockquote>
                <figcaption className="mt-8 pt-5 border-t border-brand-line">
                  <div className="font-medium text-ink text-sm">{t.name}</div>
                  <div className="text-xs text-brand-muted uppercase tracking-widest mt-1">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="text-center text-[11px] text-brand-muted mt-8 font-display italic">Testimonials are placeholders — share real client quotes to finalize.</p>
      </div>
    </section>
  );
}
