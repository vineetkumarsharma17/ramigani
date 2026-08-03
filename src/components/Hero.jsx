import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Rocket, Cpu, ShieldCheck, Cloud, Database } from 'lucide-react';

export default function Hero({ onOpenQuoteModal }) {
  const canvasRef = useRef(null);

  const stats = [
    { label: 'Enterprise Projects', value: '150+', icon: Cpu },
    { label: 'Client Satisfaction', value: '99.8%', icon: ShieldCheck },
    { label: 'Expert Engineers', value: '50+', icon: Cloud },
    { label: 'Cloud Availability', value: '99.99%', icon: Database },
  ];

  // High-Tech IT Sector Infinite Loop Canvas Animation (Logo Brand Orange Theme)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // IT Network Nodes matching Logo Brand Colors (#FF5500 & #FFB700)
    const nodeCount = Math.min(Math.floor(width / 18), 75);
    const nodes = [];
    const maxDistance = 140;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2.2 + 1.5,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.02,
        color: Math.random() > 0.35 ? '#FF5500' : '#FFB700',
      });
    }

    // Binary / Code Streams Floating in IT Sector Network (Orange/Amber Telemetry)
    const codeChars = ['0', '1', 'AI', 'CLOUD', 'DEV', 'DATA', 'API', 'CYBER', '101', '010'];
    const streamCount = 22;
    const streams = [];

    for (let i = 0; i < streamCount; i++) {
      streams.push({
        x: Math.random() * width,
        y: Math.random() * height,
        text: codeChars[Math.floor(Math.random() * codeChars.length)],
        speedY: -(0.3 + Math.random() * 0.5),
        alpha: Math.random() * 0.45 + 0.15,
        fontSize: Math.floor(Math.random() * 4) + 10,
      });
    }

    // Expanding Server Pulse Waves (Logo Orange Glow)
    const pulses = [
      { r: 0, maxR: 280, speed: 0.6, alpha: 0.5, cx: width * 0.2, cy: height * 0.3 },
      { r: 100, maxR: 350, speed: 0.5, alpha: 0.4, cx: width * 0.8, cy: height * 0.7 },
    ];

    let lastTime = performance.now();

    const render = (now) => {
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Holographic Tech Grid Lines (Warm Brand Accent)
      ctx.strokeStyle = 'rgba(255, 85, 0, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 45;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Draw Server Data Pulse Waves (Vibrant Orange Glow)
      pulses.forEach((p) => {
        p.r += p.speed;
        if (p.r > p.maxR) p.r = 0;
        const fadeAlpha = (1 - p.r / p.maxR) * p.alpha;
        ctx.beginPath();
        ctx.arc(p.cx, p.cy, p.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 85, 0, ${fadeAlpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      // 3. Draw IT Data Streams (Code / Binary Telemetry in Amber/Orange)
      streams.forEach((s) => {
        s.y += s.speedY;
        if (s.y < -20) {
          s.y = height + 20;
          s.x = Math.random() * width;
          s.text = codeChars[Math.floor(Math.random() * codeChars.length)];
        }
        ctx.font = `${s.fontSize}px monospace`;
        ctx.fillStyle = `rgba(255, 145, 0, ${s.alpha})`;
        ctx.fillText(s.text, s.x, s.y);
      });

      // 4. Update & Draw IT Network Nodes and Inter-Connections (Logo Colors)
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        // Glitch-Free Seamless Wrapping
        if (n.x < -10) n.x = width + 10;
        if (n.x > width + 10) n.x = -10;
        if (n.y < -10) n.y = height + 10;
        if (n.y > height + 10) n.y = -10;

        n.pulse += n.pulseSpeed;
        const currentRadius = n.radius + Math.sin(n.pulse) * 0.8;

        // Draw connections between nearby IT nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n.x - n2.x;
          const dy = n.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.4;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);

            const gradient = ctx.createLinearGradient(n.x, n.y, n2.x, n2.y);
            gradient.addColorStop(0, `rgba(255, 85, 0, ${lineAlpha})`);
            gradient.addColorStop(1, `rgba(255, 183, 0, ${lineAlpha * 0.7})`);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Draw glowing data packet along active connection
            if (dist < maxDistance * 0.6 && (i + j) % 7 === 0) {
              const packetPos = (now * 0.001 * 0.5 + (i * 0.1)) % 1;
              const px = n.x + (n2.x - n.x) * packetPos;
              const py = n.y + (n2.y - n.y) * packetPos;
              ctx.beginPath();
              ctx.arc(px, py, 2, 0, Math.PI * 2);
              ctx.fillStyle = '#FFFFFF';
              ctx.shadowColor = '#FF5500';
              ctx.shadowBlur = 8;
              ctx.fill();
              ctx.shadowBlur = 0;
            }
          }
        }

        // Draw Node Core
        ctx.beginPath();
        ctx.arc(n.x, n.y, Math.max(0.5, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.shadowColor = n.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="pt-24 sm:pt-28 pb-16 bg-white overflow-hidden">
      {/* Full-width container */}
      <div className="w-full max-w-[95%] xl:max-w-7xl mx-auto px-2 sm:px-4">

        {/* IT Sector Cyber Hero Card with Logo Brand Orange Gradient & Sleek Obsidian Borders */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative w-full rounded-[3rem] bg-gradient-to-br from-[#1F0A02] via-[#2D1204] to-[#120501] p-8 sm:p-14 lg:p-20 overflow-hidden border-2 border-[#FF5500]/40 shadow-2xl shadow-[#FF5500]/30 text-center group"
        >

          {/* 1. Ultra-Luxury 3D IT Background Image & Seamless Video Layer */}
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none rounded-[3rem] overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}assets/luxury_3d_it_hero.png`}
              alt="3D Luxury IT Cloud Infrastructure"
              className="w-full h-full object-cover opacity-45 mix-blend-screen transform scale-105 group-hover:scale-110 transition-transform duration-1000"
            />
          </div>

          <video
            autoPlay
            muted
            loop
            playsInline
            poster={`${import.meta.env.BASE_URL}assets/luxury_3d_it_hero.png`}
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-25 mix-blend-screen pointer-events-none rounded-[3rem] transform scale-105 group-hover:scale-110 transition-transform duration-1000"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-technology-network-lines-and-dots-loop-41561-large.mp4" type="video/mp4" />
          </video>

          {/* 2. Full-bleed IT Cyber Network Canvas Layer (Logo Brand Orange Theme) */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full z-0 pointer-events-none mix-blend-screen rounded-[3rem]"
          />

          {/* 3. Glowing Ambient Orbs (Brand Orange #FF5500, Amber #FF9100, Flame Red) */}
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF5500]/30 rounded-full blur-[120px] pointer-events-none animate-pulse" />
          <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#FF9100]/25 rounded-full blur-[140px] pointer-events-none animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF3D00]/20 rounded-full blur-[160px] pointer-events-none" />

          {/* 4. Cyber Holographic Tech Dot Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#FF5500_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-20 pointer-events-none" />

          {/* Hero Content */}
          <div className="relative z-10 max-w-4xl mx-auto space-y-6">

            {/* High-Tech IT Sector Top Tag (Logo Orange Styled) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF5500]/25 backdrop-blur-md border border-[#FF5500]/50 text-amber-200 text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#FF5500]/20"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FFB700] animate-spin" style={{ animationDuration: '8s' }} />
              <span>RAMIGANI TECH SOLUTIONS PVT. LTD.</span>
            </motion.div>

            {/* Headline with High-Contrast Electric Cyan/Sky Glow Accent */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.18] font-heading drop-shadow-xl"
            >
              Building Tomorrow's <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-200 bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">Technology</span> <br className="hidden sm:inline" />
              From Concept to Cloud
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base lg:text-lg text-slate-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md"
            >
              Delivering high-performance mobile apps, full-stack web platforms, and data-driven digital growth strategies tailored to modern enterprise needs.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/about"
                className="w-full sm:w-auto px-9 py-3.5 rounded-full font-extrabold text-sm text-slate-950 bg-white hover:bg-slate-100 shadow-xl shadow-orange-950/40 hover:scale-105 active:scale-100 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 text-[#FF5500] group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-sm text-white bg-black/40 hover:bg-black/60 backdrop-blur-md border border-[#FF5500]/50 shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:border-[#FF5500]"
              >
                <Rocket className="w-4 h-4 text-[#FFB700]" />
                <span>Get a Quote</span>
              </button>
            </motion.div>

          </div>
        </motion.div>

        {/* Stats Strip below Hero Card with Logo Brand Orange Accents */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.04, transition: { type: "spring", stiffness: 300 } }}
                className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all text-center group cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-orange-50 text-[#FF5500] mb-3 group-hover:scale-110 group-hover:bg-[#FF5500] group-hover:text-white transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#FF5500] font-heading">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}


