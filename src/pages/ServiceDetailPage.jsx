import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Smartphone, Globe, Palette, CheckSquare, BrainCircuit,
  ArrowLeft, ArrowRight, Check, Layers,
} from 'lucide-react';
import { services, getService } from '../data/services';
import CTA from '../components/CTA';
import Reveal from '../components/Reveal';

const iconMap = {
  'app-development': Smartphone,
  'web-development': Globe,
  'ui-ux-design': Palette,
  'qa-testing': CheckSquare,
  'ai-ml-solutions': BrainCircuit,
};

export default function ServiceDetailPage({ onOpenQuoteModal }) {
  const { slug } = useParams();
  const service = getService(slug);

  if (!service) {
    return (
      <div className="pt-40 pb-24 text-center container-x min-h-[60vh]">
        <h1 className="font-heading font-bold text-3xl text-ink mb-3">Solution not found</h1>
        <p className="text-brand-body mb-6">The page you're looking for doesn't exist.</p>
        <Link to="/solutions" className="btn-primary">View all solutions</Link>
      </div>
    );
  }

  const Icon = iconMap[service.id] || Layers;
  const others = services.filter((s) => s.id !== service.id);

  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        <div className="container-x relative z-10">
          <Link to="/solutions" className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-muted hover:text-brand-indigo transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> All solutions
          </Link>
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <Reveal className="lg:col-span-7">
              <span className="eyebrow"><Icon className="w-3.5 h-3.5" /> {service.category}</span>
              <h1 className="mt-4 font-heading font-bold text-4xl sm:text-5xl tracking-tight text-ink leading-[1.08]">{service.name}</h1>
              <p className="mt-4 text-xl text-brand-indigo font-medium">{service.tagline}</p>
              <p className="mt-4 text-lg text-brand-body leading-relaxed max-w-2xl">{service.description}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button onClick={onOpenQuoteModal} className="btn-primary px-8 py-3.5">Get a quote <ArrowRight className="w-4 h-4" /></button>
                <Link to="/contact" className="btn-ghost px-8 py-3.5">Talk to us</Link>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5">
              <div className="relative mx-auto w-52 h-52 sm:w-64 sm:h-64">
                <div className="absolute inset-0 rounded-4xl bg-indigo-gradient shadow-indigo animate-float-slow" />
                <div className="absolute inset-0 grid place-items-center">
                  <Icon className="w-24 h-24 text-white" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20 bg-white border-y border-brand-line">
        <div className="container-x">
          <Reveal className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-ink">What's included</h2>
            <p className="mt-3 text-brand-body">Everything you get with our {service.name.toLowerCase()} service.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {service.features.map((f, i) => (
              <Reveal key={i} delay={(i % 2) * 0.08}>
                <div className="card rounded-3xl p-6 flex items-start gap-4 h-full">
                  <div className="w-10 h-10 rounded-xl bg-brand-tint grid place-items-center flex-shrink-0">
                    <Check className="w-5 h-5 text-brand-indigo" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-ink">{f.title}</h3>
                    <p className="mt-1 text-sm text-brand-body leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other solutions */}
      <section className="py-16">
        <div className="container-x">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading font-bold text-2xl text-ink">Other solutions</h2>
            <Link to="/solutions" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-indigo hover:gap-2.5 transition-all">View all <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {others.map((s) => {
              const OIcon = iconMap[s.id] || Layers;
              return (
                <Link key={s.id} to={`/solutions/${s.id}`} className="group card rounded-3xl p-6 hover:shadow-lift hover:-translate-y-1 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-brand-tint grid place-items-center mb-3">
                    <OIcon className="w-5 h-5 text-brand-indigo" />
                  </div>
                  <h3 className="font-heading font-bold text-ink group-hover:text-brand-indigo transition-colors">{s.name}</h3>
                  <p className="mt-1 text-xs text-brand-muted leading-relaxed">{s.short}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTA onOpenQuoteModal={onOpenQuoteModal} />
    </div>
  );
}
