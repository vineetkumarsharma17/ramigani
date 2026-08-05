import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

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
    <section id="careers" className="py-24 sm:py-28">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid lg:grid-cols-12 gap-6 items-end border-b border-brand-line pb-8 mb-2"
        >
          <div className="lg:col-span-8">
            <span className="eyebrow"><span className="font-display accent text-sm">✳</span> Join our team</span>
            <h2 className="mt-4 font-display font-normal text-4xl sm:text-6xl tracking-tight text-ink leading-[1.02]">
              Build your career at <span className="italic accent-underline">Ramigani</span>
            </h2>
          </div>
          <p className="lg:col-span-4 text-brand-body leading-relaxed lg:text-right lg:self-end">
            We are always looking for passionate software engineers, product designers, and growth marketers.
          </p>
        </motion.div>

        <div className="border-b border-brand-line">
          {openings.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group grid grid-cols-12 gap-4 items-center py-8 border-t border-brand-line"
            >
              <div className="col-span-12 sm:col-span-7">
                <span className="text-[10px] uppercase font-semibold tracking-widest2 text-brand-muted">{job.dept}</span>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl text-ink">{job.title}</h3>
              </div>
              <div className="col-span-6 sm:col-span-3 text-sm text-brand-soft">
                <p>{job.type}</p>
                <p className="mt-1 text-brand-muted">{job.exp}</p>
              </div>
              <div className="col-span-6 sm:col-span-2 flex justify-end">
                <button
                  onClick={onOpenQuoteModal}
                  className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-ink border-b border-transparent hover:border-ink pb-1 transition-colors"
                >
                  <span>Apply</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-brand-accent" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
