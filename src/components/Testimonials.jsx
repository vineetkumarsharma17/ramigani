import React from 'react';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

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
        <SectionHead
          index="04"
          label="Testimonials"
          title={<>Trusted by teams that <span className="italic">ship</span></>}
        />

        <div className="grid md:grid-cols-3 border-b border-brand-line mt-2">
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
