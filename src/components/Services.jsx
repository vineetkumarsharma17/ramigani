import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Globe, 
  Palette, 
  CheckSquare, 
  TrendingUp, 
  Search, 
  Share2, 
  BrainCircuit, 
  ArrowUpRight,
  Layers,
  CheckCircle2,
  X
} from 'lucide-react';

export default function Services({ onOpenQuoteModal }) {
  const [activeModalService, setActiveModalService] = useState(null);

  const capabilities = [
    { name: 'App Development', id: 'app-dev', desc: 'Native & cross-platform iOS & Android mobile applications built for high performance and offline scale.' },
    { name: 'Web Development', id: 'web-dev', desc: 'Full-stack enterprise web platforms, Next.js, React, and headless cloud architectures.' },
    { name: 'UI/UX Design', id: 'ui-ux', desc: 'Intuitive user research, wireframing, interactive prototypes, and modern design systems.' },
    { name: 'Software Testing & QA', id: 'qa-testing', desc: 'Automated testing pipelines, security vulnerability audits, and load profiling.' },
    { name: 'Digital Marketing', id: 'digital-marketing', desc: 'Data-driven performance marketing, PPC ads, and conversion rate optimization.' },
    { name: 'SEO Optimization', id: 'seo', desc: 'Technical SEO audits, rank tracking, and high-intent keyword strategies.' },
    { name: 'Social Media Management', id: 'social-media', desc: 'Strategic content creation, brand building, and community engagement campaigns.' },
    { name: 'AI/ML Solutions', id: 'ai-ml', desc: 'Custom machine learning models, predictive intelligence, and workflow automation.' }
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF0E6] text-[#FF5500] text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>End-to-End Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Our <span className="text-[#FF5500]">Solutions & Services</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Empowering modern enterprises with scalable software engineering and high-impact digital growth strategies.
          </p>
        </motion.div>

        {/* Split Layout matching Screenshot #2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: White Card with Orange Border (matching Screenshot #2) */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 orange-card-border p-8 sm:p-10 rounded-3xl space-y-6 shadow-xl shadow-orange-500/5 hover:shadow-orange-500/15 transition-all"
          >
            <div>
              <h3 className="text-3xl font-extrabold text-[#FF5500] font-heading mb-4">
                Software & Growth Services
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We specialize in delivering comprehensive software engineering and digital marketing services that cover the entire project lifecycle. We build high-performance, low-latency, and cost-effective digital solutions tailored to diverse enterprise requirements.
              </p>
            </div>

            {/* Sub-capability Pill Grid matching Screenshot #2 with Staggered Scroll Animation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
              {capabilities.map((cap, idx) => (
                <motion.button
                  key={cap.id}
                  onClick={() => setActiveModalService(cap)}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.05, y: -3, transition: { type: "spring", stiffness: 400 } }}
                  whileTap={{ scale: 0.97 }}
                  className="orange-pill-btn px-4 py-3 rounded-2xl text-xs font-bold text-center leading-snug flex items-center justify-between group shadow-sm cursor-pointer"
                >
                  <span>{cap.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                </motion.button>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenQuoteModal}
                className="px-6 py-3 rounded-full text-xs font-bold text-white bg-[#FF6A00] hover:bg-[#FF5500] shadow-md shadow-orange-500/20 transition-all cursor-pointer"
              >
                Request Custom Solution Quote
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: High-tech Circuit Microchip Visual matching Screenshot #2 */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={`${import.meta.env.BASE_URL}assets/microchip_circuit.jpg`}
                alt="High tech orange microchip circuit board"
                className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300 block mb-1">
                  Next-Gen Architecture
                </span>
                <h4 className="text-lg font-bold">Cloud-Native Technology</h4>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Detail Brief Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white border border-slate-100 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative"
          >
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#FFF0E6] text-[#FF5500] flex items-center justify-center font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-heading">{activeModalService.name}</h3>
                <span className="text-xs text-[#FF5500] font-bold">Ramigani Tech Capability</span>
              </div>
            </div>

            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              {activeModalService.desc}
            </p>

            <div className="bg-[#FFF5F0] rounded-2xl p-4 border border-orange-100 mb-6">
              <h4 className="text-xs font-bold uppercase text-[#FF5500] mb-2 tracking-wider">Highlights:</h4>
              <div className="space-y-1.5 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5500]" />
                  <span>Enterprise SLA & Dedicated Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5500]" />
                  <span>Scalable Architecture & CI/CD Pipelines</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setActiveModalService(null);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 rounded-full text-xs font-bold text-white bg-[#FF6A00] hover:bg-[#FF5500] shadow-md transition-all text-center"
              >
                Request Quote For {activeModalService.name}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
