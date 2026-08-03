import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Globe,
  Palette,
  TrendingUp,
  Search,
  BrainCircuit,
  CheckSquare,
  Share2,
  ArrowUpRight,
  Layers,
} from 'lucide-react';
import { services } from '../data/services';

const iconMap = {
  'app-development': Smartphone,
  'web-development': Globe,
  'digital-marketing': TrendingUp,
  'ui-ux-design': Palette,
  'seo-optimization': Search,
  'ai-ml-solutions': BrainCircuit,
  'qa-testing': CheckSquare,
  'social-media': Share2,
};

export default function Services({ onOpenQuoteModal }) {
  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF0E6] text-[#FF5500] text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>End-to-End Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Our <span className="text-[#FF5500]">Solutions &amp; Services</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Empowering modern enterprises with scalable software engineering and high-impact digital growth strategies. Tap any service to explore what we deliver.
          </p>
        </div>

        {/* Clickable service cards -> dedicated screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => {
            const Icon = iconMap[svc.id] || Layers;
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: (idx % 3) * 0.08 }}
              >
                <Link
                  to={`/services/${svc.id}`}
                  className="group block h-full p-6 rounded-3xl bg-white border-2 border-slate-100 hover:border-[#FF5500] hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#FFF0E6] group-hover:bg-[#FF5500] flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6 text-[#FF5500] group-hover:text-white transition-colors" />
                    </div>
                    <span className="w-9 h-9 rounded-full bg-slate-50 group-hover:bg-[#FFF0E6] flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#FF5500] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-heading mb-2 group-hover:text-[#FF5500] transition-colors">
                    {svc.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {svc.short}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5500]">
                    View Details
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenQuoteModal}
            className="px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#FF6A00] hover:bg-[#FF5500] shadow-md shadow-orange-500/25 hover:-translate-y-0.5 transition-all"
          >
            Request a Custom Solution Quote
          </button>
        </div>

      </div>
    </section>
  );
}
