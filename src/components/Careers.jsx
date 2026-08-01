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
    <section id="careers" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF0E6] text-[#FF5500] text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Join Our Team</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Build Your Career at <span className="text-[#FF5500]">Ramigani</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            We are always looking for passionate software engineers, product designers, and growth marketers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {openings.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-slate-200 p-6 rounded-3xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
            >
              <div>
                <span className="text-[10px] uppercase font-bold text-[#FF5500] tracking-wider bg-[#FFF0E6] px-3 py-1 rounded-full inline-block mb-3">
                  {job.dept}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">
                  {job.title}
                </h3>
                <p className="text-xs text-slate-500 mb-1">{job.type}</p>
                <p className="text-xs text-slate-500">{job.exp}</p>
              </div>

              <div className="pt-6">
                <button
                  onClick={onOpenQuoteModal}
                  className="w-full py-2.5 rounded-full bg-slate-100 hover:bg-[#FF6A00] text-xs font-bold text-slate-700 hover:text-white flex items-center justify-center gap-2 transition-all"
                >
                  <span>Apply Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
