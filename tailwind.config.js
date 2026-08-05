/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Aurora Dark — near-black base, glass panels, aurora accent
        paper: '#0A0A0F',        // base background
        ink: '#F1F5F9',          // primary near-white text
        brand: {
          // aurora accents
          violet: '#8B5CF6',
          indigo: '#6366F1',
          indigoDark: '#4F46E5',
          indigoLight: '#818CF8',
          cyan: '#22D3EE',
          sky: '#22D3EE',        // legacy alias → cyan
          // surfaces
          base: '#0A0A0F',
          base2: '#0B0B12',
          panel: '#12121B',
          panel2: '#171723',
          ink: '#F1F5F9',        // legacy alias → near-white
          // text
          body: '#CBD5E1',       // slate-300
          muted: '#94A3B8',      // slate-400
          dim: '#64748B',        // slate-500
          // hairlines (white with low alpha)
          line: '#ffffff14',     // white / 8%
          lineSoft: '#ffffff0d',  // white / 5%
          lineStrong: '#ffffff26', // white / 15%
          tint: '#8b5cf61f',      // violet wash ~12%
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        // aurora gradient (violet → indigo → cyan) — reused via legacy name too
        'indigo-gradient': 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 50%, #22D3EE 100%)',
        'aurora': 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 50%, #22D3EE 100%)',
        'aurora-soft': 'linear-gradient(180deg, rgba(139,92,246,0.12) 0%, rgba(10,10,15,0) 100%)',
        // radial aurora blobs over the dark base
        'mesh': 'radial-gradient(55% 55% at 18% 12%, rgba(139,92,246,0.28) 0%, transparent 60%), radial-gradient(50% 50% at 85% 18%, rgba(34,211,238,0.16) 0%, transparent 55%), radial-gradient(60% 60% at 72% 92%, rgba(99,102,241,0.20) 0%, transparent 55%)',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(0,0,0,0.35), 0 12px 32px -16px rgba(0,0,0,0.6)',
        'lift': '0 24px 70px -24px rgba(0,0,0,0.75)',
        'indigo': '0 10px 40px -10px rgba(139,92,246,0.5)',   // legacy name → aurora glow
        'glow': '0 0 60px -12px rgba(139,92,246,0.55)',
        'glow-cyan': '0 0 60px -12px rgba(34,211,238,0.45)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'marquee': 'marquee 32s linear infinite',
        'float-slow': 'floatSlow 9s ease-in-out infinite',
        'gradient-shift': 'gradientShift 12s ease infinite',
        'spin-slow': 'spin 26s linear infinite',
        'aurora-drift': 'auroraDrift 16s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        auroraDrift: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(6%,-8%,0) scale(1.12)' },
          '66%': { transform: 'translate3d(-6%,6%,0) scale(0.94)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
