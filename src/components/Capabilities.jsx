import React from 'react';
import { Layers } from 'lucide-react';
import Reveal from './Reveal';

// Orbiting capability nodes — a constellation the old site never had.
const inner = ['Mobile', 'Web', 'UI/UX', 'AI / ML'];
const outer = ['Cloud', 'DevOps', 'QA & Testing', 'SEO', 'Data', 'APIs'];

// Position a node on a ring: angle in degrees, radius as % from center.
function nodeStyle(angle, radiusPct) {
  const rad = (angle * Math.PI) / 180;
  const x = 50 + radiusPct * Math.cos(rad);
  const y = 50 + radiusPct * Math.sin(rad);
  return { left: `${x}%`, top: `${y}%` };
}

export default function Capabilities() {
  return (
    <section className="py-24 relative overflow-hidden border-y border-brand-line">
      <div className="absolute inset-0 bg-aurora-soft pointer-events-none" />
      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Copy */}
          <Reveal>
            <span className="eyebrow"><Layers className="w-3.5 h-3.5" /> Capabilities</span>
            <h2 className="mt-4 font-heading font-bold text-3xl sm:text-5xl tracking-tight text-white leading-tight">
              One team, <span className="gradient-text">the whole stack</span>
            </h2>
            <p className="mt-5 text-lg text-brand-body leading-relaxed">
              Strategy, design, engineering, quality, and growth — orbiting a single delivery core. You get one accountable partner across every layer of the product, not a chain of vendors.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {[...inner, ...outer].map((c) => (
                <span key={c} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/[0.04] border border-brand-line text-brand-body">{c}</span>
              ))}
            </div>
          </Reveal>

          {/* Orbit constellation */}
          <Reveal delay={0.1}>
            <div className="relative mx-auto aspect-square w-full max-w-[480px]">
              {/* rings */}
              <div className="absolute inset-0 rounded-full border border-brand-line" />
              <div className="absolute inset-[20%] rounded-full border border-brand-line" />
              {/* soft glow */}
              <div className="absolute inset-[28%] rounded-full bg-brand-violet/15 blur-3xl animate-glow-pulse" />

              {/* center core */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-indigo-gradient shadow-glow grid place-items-center text-center p-3 z-10">
                <span className="font-heading font-bold text-white text-sm leading-tight">Full-stack<br />delivery</span>
              </div>

              {/* outer ring (rotating) */}
              <div className="absolute inset-0 animate-spin-slow">
                {outer.map((c, i) => (
                  <div key={c} className="absolute -translate-x-1/2 -translate-y-1/2" style={nodeStyle((360 / outer.length) * i - 90, 50)}>
                    <div className="animate-spin-slow [animation-direction:reverse]">
                      <span className="block whitespace-nowrap text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-full card">{c}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* inner ring (counter-rotating) */}
              <div className="absolute inset-[20%] animate-spin-slow [animation-direction:reverse]">
                {inner.map((c, i) => (
                  <div key={c} className="absolute -translate-x-1/2 -translate-y-1/2" style={nodeStyle((360 / inner.length) * i - 90, 50)}>
                    <div className="animate-spin-slow">
                      <span className="block whitespace-nowrap text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full bg-brand-tint border border-brand-violet/30 text-brand-indigoLight">{c}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
