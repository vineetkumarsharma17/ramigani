import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Rocket } from 'lucide-react';

export default function Hero({ onOpenQuoteModal }) {
  const canvasRef = useRef(null);

  const stats = [
    { label: 'Enterprise Projects', value: '150+' },
    { label: 'Client Satisfaction', value: '99.8%' },
    { label: 'Expert Engineers', value: '50+' },
    { label: 'Cloud Availability', value: '99.99%' },
  ];

  // Dynamic glowing ember particle animation
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

    const particleCount = 55;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 4 + 1.5,
        color: Math.random() > 0.4 ? 'rgba(255, 230, 160, ' : 'rgba(255, 130, 60, ',
        alpha: Math.random() * 0.8 + 0.2,
        speedY: Math.random() * 0.8 + 0.3,
        speedX: (Math.random() - 0.5) * 0.4,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;
        p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.01;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3.5);
        gradient.addColorStop(0, p.color + Math.max(0.1, p.alpha) + ')');
        gradient.addColorStop(0.5, p.color + (p.alpha * 0.4) + ')');
        gradient.addColorStop(1, p.color + '0)');

        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.radius * 3.5, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="pt-24 sm:pt-28 pb-16 bg-white overflow-hidden">
      {/* Full-width container */}
      <div className="w-full max-w-[95%] xl:max-w-7xl mx-auto px-2 sm:px-4">
        
        {/* Full Width Hero Card Container with rounded border radius & border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative w-full rounded-[3rem] bg-ember-gradient p-8 sm:p-14 lg:p-20 overflow-hidden border-2 border-orange-400/40 shadow-2xl shadow-orange-500/35 text-center group"
        >
          
          {/* 1. Full-bleed Background Video Layer with rounded-[3rem] */}
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={`${import.meta.env.BASE_URL}assets/hero-poster.svg`}
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-60 mix-blend-screen pointer-events-none rounded-[3rem] transform scale-105 group-hover:scale-110 transition-transform duration-1000"
          >
            <source src={`${import.meta.env.BASE_URL}assets/hero-glow-bg.mp4`} type="video/mp4" />
          </video>

          {/* 2. Full-bleed Glowing Particle Canvas Layer */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full z-0 pointer-events-none mix-blend-screen rounded-[3rem]"
          />

          {/* 3. Glowing Ambient Orbs */}
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-300/40 rounded-full blur-[100px] pointer-events-none animate-pulse" />
          <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-orange-400/35 rounded-full blur-[130px] pointer-events-none animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/25 rounded-full blur-[150px] pointer-events-none" />

          {/* 4. Subtle Radial Sparkle Grid overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-25 pointer-events-none" />

          {/* Hero Content */}
          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            
            {/* Top Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white text-xs font-bold uppercase tracking-wider shadow-lg"
            >
              <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-spin" style={{ animationDuration: '8s' }} />
              <span>Ramigani Tech Solutions Pvt. Ltd.</span>
            </motion.div>

            {/* Reduced Headline Font Size (text-3xl sm:text-4xl lg:text-5xl xl:text-6xl) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.18] font-heading drop-shadow-md"
            >
              Building Tomorrow's Technology <br className="hidden sm:inline" />
              From Concept to Cloud
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base lg:text-lg text-white/95 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm"
            >
              Delivering high-performance mobile apps, full-stack web platforms, and data-driven digital growth strategies tailored to modern enterprise needs.
            </motion.p>

            {/* White CTA Pill Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/about"
                className="w-full sm:w-auto px-9 py-3.5 rounded-full font-extrabold text-sm text-slate-900 bg-white hover:bg-slate-100 shadow-xl hover:scale-105 active:scale-100 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 text-[#FF5500] group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-sm text-white bg-black/25 hover:bg-black/40 backdrop-blur-md border border-white/40 shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Rocket className="w-4 h-4" />
                <span>Get a Quote</span>
              </button>
            </motion.div>

          </div>
        </motion.div>

        {/* Stats Strip below Hero Card */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm text-center">
              <div className="text-2xl sm:text-3xl font-black text-[#FF5500] font-heading">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
