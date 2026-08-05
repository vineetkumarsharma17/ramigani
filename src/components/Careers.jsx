import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowUpRight } from 'lucide-react';

export default function Careers({ onOpenQuoteModal }) {
  const openings = [
    {
      title: 'Senior Full-Stack Engineer (React & Node)',
      type: 'Full-Time | Hyderabad / Hybrid',
      exp: '4+ Years Exp',
      dept: 'Engineering'
    },
    {
      title: 'Mobile App Developer (Flutter / React Native)',
      type: 'Full-Time | Hyderabad',
      exp: '3+ Years Exp',
      dept: 'Mobile Engineering'
    },
    {
      title: 'Performance Digital Marketer & SEO Specialist',
      type: 'Full-Time | Hyderabad',
      exp: '2+ Years Exp',
      dept: 'Digital Growth'
    }
  ];

  return (
    <section id="careers" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-aurora-soft pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-tint border border-brand-violet/20 text-brand-indigoLight text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Join Our Team</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
            Build Your Career at <span className="gradient-text">Ramigani</span>
          </h2>
          <p className="mt-3 text-brand-body text-base sm:text-lg">
            We are always looking for passionate software engineers, product designers, and growth marketers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {openings.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.03, transition: { type: "spring", stiffness: 300 } }}
              className="card p-6 rounded-3xl flex flex-col justify-between aurora-ring hover:shadow-glow transition-all group cursor-pointer"
            >
              <div>
                <span className="text-[10px] uppercase font-bold text-brand-indigoLight tracking-wider bg-brand-tint border border-brand-violet/20 group-hover:bg-indigo-gradient group-hover:text-white group-hover:border-transparent px-3 py-1 rounded-full inline-block mb-3 transition-all duration-300">
                  {job.dept}
                </span>
                <h3 className="text-base font-bold text-white mb-2 font-heading group-hover:text-brand-indigoLight transition-colors duration-300">
                  {job.title}
                </h3>
                <p className="text-xs text-brand-muted mb-1">{job.type}</p>
                <p className="text-xs text-brand-muted">{job.exp}</p>
              </div>

              <div className="pt-6">
                <button
                  onClick={onOpenQuoteModal}
                  className="w-full py-2.5 rounded-full bg-white/[0.05] border border-brand-line hover:bg-indigo-gradient hover:border-transparent text-xs font-bold text-brand-body hover:text-white flex items-center justify-center gap-2 transition-all"
                >
                  <span>Apply Now</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
