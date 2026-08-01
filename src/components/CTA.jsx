import React from 'react';
import { Calendar, Sparkles } from 'lucide-react';

export default function CTA({ onOpenQuoteModal }) {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Card with Ember Gradient */}
        <div className="relative rounded-[2.5rem] bg-ember-gradient p-8 sm:p-14 lg:p-16 text-center text-white shadow-2xl shadow-orange-500/25 overflow-hidden">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Let's Build Together</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-heading leading-tight">
              Ready to Start Your Project?
            </h2>

            <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
              From idea to launch, we've got you covered. Partner with Ramigani Tech Solutions for reliable technology solutions, high performance engineering, and measurable growth.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto px-10 py-4 rounded-full font-extrabold text-sm text-slate-900 bg-white hover:bg-slate-100 shadow-xl hover:scale-105 active:scale-100 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#FF5500]" />
                <span>Book a Consultation</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
