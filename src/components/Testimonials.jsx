import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, ArrowLeft, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

// Placeholder testimonials — replace with real client quotes.
const items = [
  { quote: 'Ramigani delivered our mobile app ahead of schedule and the quality was outstanding. A genuine engineering partner.', name: 'Placeholder Name', role: 'Founder, Fintech Startup', grad: 'from-violet-600 to-indigo-600' },
  { quote: 'Their team rebuilt our web platform end-to-end. Performance and conversions both jumped noticeably.', name: 'Placeholder Name', role: 'Head of Product, SaaS', grad: 'from-indigo-600 to-blue-600' },
  { quote: 'Clear communication, senior talent, and reliable delivery. Exactly what we needed to scale.', name: 'Placeholder Name', role: 'CTO, E-commerce', grad: 'from-fuchsia-600 to-pink-500' },
  { quote: 'The AI automation they built saved our ops team dozens of hours a week. Thoughtful, production-ready work.', name: 'Placeholder Name', role: 'COO, Logistics', grad: 'from-blue-600 to-cyan-500' },
  { quote: 'From design to launch they felt like part of our own team. We keep coming back for every new build.', name: 'Placeholder Name', role: 'Director, Healthtech', grad: 'from-purple-600 to-blue-600' },
];

export default function Testimonials() {
  const trackRef = useRef(null);

  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.8, 420);
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <section className="py-24 section-tint border-y border-brand-line overflow-hidden">
      <div className="container-x">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <Reveal className="max-w-xl">
            <span className="eyebrow">Testimonials</span>
            <h2 className="mt-5 font-heading font-extrabold text-4xl sm:text-5xl tracking-tight text-ink">
              Trusted by teams that <span className="gradient-text-pink">ship</span>
            </h2>
          </Reveal>

          {/* Carousel arrows */}
          <div className="flex items-center gap-3">
            <button onClick={() => scrollBy(-1)} aria-label="Previous testimonials"
              className="w-12 h-12 rounded-full bg-white border border-brand-line text-ink grid place-items-center hover:bg-indigo-gradient hover:text-white hover:border-transparent transition-all">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scrollBy(1)} aria-label="Next testimonials"
              className="w-12 h-12 rounded-full bg-white border border-brand-line text-ink grid place-items-center hover:bg-indigo-gradient hover:text-white hover:border-transparent transition-all">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal sliding row (scroll-snap + drag on touch) */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-5 sm:px-6 lg:px-8 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((t, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8 }}
            className="snap-start shrink-0 w-[85vw] sm:w-[380px] card rounded-4xl p-8 flex flex-col"
          >
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${t.grad} grid place-items-center shadow-indigo`}>
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
          </motion.figure>
        ))}
        {/* trailing spacer so last card isn't flush to edge */}
        <span className="shrink-0 w-1" aria-hidden="true" />
      </div>

      <div className="container-x">
        <p className="text-center text-[11px] text-brand-muted mt-8 italic">Testimonials are placeholders — share real client quotes to finalize.</p>
      </div>
    </section>
  );
}
