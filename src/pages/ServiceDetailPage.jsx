import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Smartphone, Globe, Palette, TrendingUp, Search, BrainCircuit,
  ArrowLeft, ArrowRight, CheckCircle2, Layers, Sparkles
} from 'lucide-react';
import { services, getService } from '../data/services';
import CTA from '../components/CTA';

const iconMap = {
  'app-development': Smartphone,
  'web-development': Globe,
  'digital-marketing': TrendingUp,
  'ui-ux-design': Palette,
  'seo-optimization': Search,
  'ai-ml-solutions': BrainCircuit,
};

export default function ServiceDetailPage({ onOpenQuoteModal }) {
  const { slug } = useParams();
  const service = getService(slug);

  // Fallback for an unknown slug
  if (!service) {
    return (
      <div className="pt-32 pb-24 text-center px-6 min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-black text-slate-900 font-heading mb-3">Service not found</h1>
        <p className="text-slate-600 mb-6">The service you're looking for doesn't exist.</p>
        <Link to="/services" className="px-6 py-3 rounded-full text-sm font-bold text-white bg-[#FF6A00] hover:bg-[#FF5500] transition-all">
          View all services
        </Link>
      </div>
    );
  }

  const Icon = iconMap[service.id] || Layers;
  const others = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#FFF5F0] to-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#FF5500] transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            All Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF0E6] text-[#FF5500] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ramigani Tech Service</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 font-heading tracking-tight leading-tight">
                {service.name}
              </h1>
              <p className="mt-4 text-lg text-[#FF5500] font-semibold">
                {service.tagline}
              </p>
              <p className="mt-4 text-slate-600 text-base leading-relaxed max-w-2xl">
                {service.description}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenQuoteModal}
                  className="px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#FF6A00] hover:bg-[#FF5500] shadow-md shadow-orange-500/25 hover:-translate-y-0.5 transition-all"
                >
                  Get a Quote
                </button>
                <Link
                  to="/contact"
                  className="px-8 py-3.5 rounded-full text-sm font-bold text-slate-700 bg-white border border-slate-200 hover:border-[#FF5500] hover:text-[#FF5500] transition-all text-center"
                >
                  Talk to Us
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-[2rem] bg-gradient-to-br from-[#FF9100] via-[#FF5500] to-[#D50000] flex items-center justify-center shadow-2xl shadow-orange-500/30">
                <Icon className="w-20 h-20 sm:w-24 sm:h-24 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 font-heading">
              What's <span className="text-[#FF5500]">Included</span>
            </h2>
            <p className="mt-3 text-slate-600">Everything you get with our {service.name.toLowerCase()} service.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {service.features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FFF0E6] text-[#FF5500] flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-heading mb-1">{f.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16 bg-[#FFF5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-slate-900 font-heading">Explore Other Services</h2>
            <Link to="/services" className="text-xs font-bold text-[#FF5500] hover:underline inline-flex items-center gap-1">
              View all <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {others.map((s) => {
              const OIcon = iconMap[s.id] || Layers;
              return (
                <Link
                  key={s.id}
                  to={`/services/${s.id}`}
                  className="group block p-6 rounded-2xl bg-white border border-slate-100 hover:border-[#FF5500] hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FFF0E6] group-hover:bg-[#FF5500] flex items-center justify-center mb-3 transition-colors">
                    <OIcon className="w-5 h-5 text-[#FF5500] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#FF5500] font-heading transition-colors">{s.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{s.short}</p>
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
