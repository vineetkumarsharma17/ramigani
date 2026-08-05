import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { services, getService } from '../data/services';
import CTA from '../components/CTA';
import Reveal from '../components/Reveal';

export default function ServiceDetailPage({ onOpenQuoteModal }) {
  const { slug } = useParams();
  const service = getService(slug);

  if (!service) {
    return (
      <div className="pt-40 pb-24 text-center container-x min-h-[60vh]">
        <h1 className="font-display font-normal text-4xl text-ink mb-3">Solution not found</h1>
        <p className="text-brand-soft mb-6">The page you're looking for doesn't exist.</p>
        <Link to="/solutions" className="btn-primary">View all solutions</Link>
      </div>
    );
  }

  const index = services.findIndex((s) => s.id === service.id);
  const others = services.filter((s) => s.id !== service.id);

  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="relative overflow-hidden pt-14 pb-16 sm:pt-16 sm:pb-20">
        <div className="absolute inset-0 grid-lines opacity-60 [mask-image:radial-gradient(80%_60%_at_50%_0%,#000_10%,transparent_80%)] pointer-events-none" />
        <div className="container-x relative z-10">
          <Link to="/solutions" className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest font-semibold text-brand-muted hover:text-ink transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> All solutions
          </Link>

          <Reveal>
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-widest2 text-brand-soft mb-6">
              <span className="font-display accent text-lg">{String(index + 1).padStart(2, '0')}</span>
              <span className="h-px w-8 bg-brand-lineStrong" />
              <span>{service.category}</span>
            </div>
            <h1 className="font-display font-normal text-5xl sm:text-7xl tracking-tight text-ink leading-[1.0] max-w-4xl">{service.name}</h1>
            <p className="mt-8 font-display italic text-2xl text-brand-body max-w-2xl leading-snug">{service.tagline}</p>
            <p className="mt-6 text-lg text-brand-soft leading-relaxed max-w-2xl">{service.description}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <button onClick={onOpenQuoteModal} className="btn-primary">Get a quote <ArrowRight className="w-4 h-4" /></button>
              <Link to="/contact" className="btn-ghost">Talk to us</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 border-t border-brand-line">
        <div className="container-x">
          <Reveal className="border-b border-brand-line pb-8 mb-2">
            <h2 className="font-display font-normal text-3xl sm:text-5xl text-ink">What's included</h2>
            <p className="mt-3 text-brand-soft">Everything you get with our {service.name.toLowerCase()} service.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 border-l border-brand-line">
            {service.features.map((f, i) => (
              <Reveal key={i} delay={(i % 2) * 0.08}>
                <div className="h-full p-8 border-b border-r border-brand-line">
                  <span className="font-display text-lg text-brand-accent">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-4 font-display text-2xl text-ink">{f.title}</h3>
                  <p className="mt-2 text-sm text-brand-soft leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other solutions */}
      <section className="py-20 border-t border-brand-line">
        <div className="container-x">
          <div className="flex items-center justify-between mb-2 border-b border-brand-line pb-8">
            <h2 className="font-display font-normal text-3xl sm:text-4xl text-ink">Other solutions</h2>
            <Link to="/solutions" className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest font-semibold text-ink hover:gap-2.5 transition-all">View all <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="border-b border-brand-line">
            {others.map((s, i) => (
              <Link key={s.id} to={`/solutions/${s.id}`} className="group grid grid-cols-12 gap-4 items-center py-6 border-t border-brand-line hover:bg-brand-panel transition-colors px-2 -mx-2">
                <span className="col-span-2 sm:col-span-1 font-display text-brand-muted group-hover:text-brand-accent transition-colors">{String(services.findIndex((x) => x.id === s.id) + 1).padStart(2, '0')}</span>
                <h3 className="col-span-8 sm:col-span-5 font-display text-xl sm:text-2xl text-ink group-hover:translate-x-1 transition-transform">{s.name}</h3>
                <p className="hidden sm:block col-span-5 text-sm text-brand-soft">{s.short}</p>
                <ArrowUpRight className="col-span-2 sm:col-span-1 w-5 h-5 text-brand-muted group-hover:text-brand-accent transition-colors justify-self-end" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-brand-line">
        <CTA onOpenQuoteModal={onOpenQuoteModal} />
      </div>
    </div>
  );
}
