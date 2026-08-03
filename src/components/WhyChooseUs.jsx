import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, DollarSign, Award, Users, ShieldCheck, Handshake, Target, ArrowRight } from 'lucide-react';

export default function WhyChooseUs({ onOpenQuoteModal }) {
  const miniCards = [
    {
      icon: Cpu,
      title: 'Cutting-Edge Technology',
      desc: 'Employing modern microservice architectures, cloud-native frameworks, and AI tools to deliver future-proof solutions.'
    },
    {
      icon: Zap,
      title: 'Agile Development',
      desc: 'Adapting quickly to evolving requirements with rapid sprint cycles, transparent roadmap tracking, and prototype drops.'
    },
    {
      icon: DollarSign,
      title: 'Cost-Effective Solutions',
      desc: 'Optimizing development pipelines to maximize return on investment without compromising quality or security.'
    }
  ];

  const trustPills = [
    { icon: Award, label: 'Proven Track Record' },
    { icon: Users, label: 'Strong Engineering Team' },
    { icon: ShieldCheck, label: 'Quality Assurance Focus' },
    { icon: Handshake, label: 'Strategic Partnerships' },
    { icon: Target, label: 'Customer Centric Approach' }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid matching Screenshot #3 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Arch Masked Image matching Screenshot #3 */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.92 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            className="lg:col-span-5 relative"
          >
            <div className="relative arch-image-mask overflow-hidden shadow-2xl border-4 border-white max-w-md mx-auto">
              <img
                src={`${import.meta.env.BASE_URL}assets/arch_tech_touch.jpg`}
                alt="Technology interface with glowing orange light circles"
                className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column: Text Content matching Screenshot #3 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#FF5500] block mb-1">
                About Ramigani
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-[#FF5500] font-heading tracking-tight">
                Why Choose Us?
              </h2>
            </div>

            <p className="text-slate-600 text-base leading-relaxed">
              With years of experience in the software industry, our team possesses an in-depth understanding of the complexities involved in enterprise application engineering and cloud infrastructure.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              At Ramigani Tech Solutions, our clients are at the center of everything we do. We understand that each project is unique, and we take the time to listen to your specific needs and requirements. Our customer-centric approach ensures that we deliver tailored solutions that align perfectly with your goals and objectives.
            </p>

            <p className="text-slate-700 font-semibold text-base leading-relaxed">
              Let us help you transform your ideas into reality with our innovative and reliable technology solutions.
            </p>

            {/* Feature Cards with Staggered Scroll Animation */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {miniCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, scale: 1.04, transition: { type: "spring", stiffness: 300 } }}
                  className="rounded-2xl bg-white border border-orange-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-orange-400 transition-all group cursor-pointer"
                >
                  {/* Top orange gradient header block matching screenshot #3 */}
                  <div className="bg-gradient-to-b from-[#FFF0E6] to-white p-4 border-b border-orange-100 text-center group-hover:from-[#FF5500] group-hover:to-[#FF6A00] transition-colors duration-300">
                    <h4 className="text-sm font-black text-[#FF5500] group-hover:text-white font-heading leading-tight transition-colors duration-300">
                      {card.title}
                    </h4>
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>

        {/* Marquee Strip below with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-20 pt-10 border-t border-slate-100 overflow-hidden marquee-container"
        >
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">
              Our Core Engineering Pillars
            </span>
          </div>

          <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent_0%,#000_15%,#000_85%,transparent_100%)]">
            <div className="flex gap-4 animate-marquee whitespace-nowrap py-2">
              {[...trustPills, ...trustPills, ...trustPills].map((pill, index) => {
                const PillIcon = pill.icon;
                return (
                  <div
                    key={index}
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#FFF5F0] border border-orange-200 text-slate-800 text-xs font-bold shadow-sm"
                  >
                    <PillIcon className="w-4 h-4 text-[#FF5500]" />
                    <span>{pill.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
