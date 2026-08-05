/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bold Gradient — white base, purple→blue signature, pink pop
        paper: '#FAFAFC',
        ink: '#0F172A',
        brand: {
          // Signature gradient stops
          purple: '#6D28D9',
          blue: '#2563EB',
          pink: '#EC4899',
          // Back-compat accent aliases (map onto the new palette)
          indigo: '#6D28D9',
          indigoDark: '#5B21B6',
          indigoLight: '#7C3AED',
          violet: '#7C3AED',
          sky: '#38BDF8',
          ink: '#0F172A',
          body: '#475569',
          muted: '#8A93A6',
          line: '#ECE7F6',
          lineSoft: '#F4F0FC',
          tint: '#F3EEFF',      // very light purple wash
          tintBlue: '#EAF1FF',  // very light blue wash
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        // The signature purple→blue gradient
        'indigo-gradient': 'linear-gradient(135deg, #6D28D9 0%, #4F46E5 45%, #2563EB 100%)',
        'brand-gradient': 'linear-gradient(135deg, #6D28D9 0%, #4F46E5 45%, #2563EB 100%)',
        'brand-gradient-pink': 'linear-gradient(135deg, #6D28D9 0%, #DB2777 55%, #EC4899 100%)',
        'indigo-soft': 'linear-gradient(180deg, #F3EEFF 0%, #FAFAFC 100%)',
        // Colorful soft blobs for light sections
        'mesh': 'radial-gradient(55% 55% at 15% 15%, rgba(109,40,217,0.20) 0%, transparent 60%), radial-gradient(50% 50% at 88% 12%, rgba(37,99,235,0.18) 0%, transparent 55%), radial-gradient(55% 55% at 75% 92%, rgba(236,72,153,0.16) 0%, transparent 55%)',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(15,23,42,0.04), 0 10px 30px -14px rgba(15,23,42,0.14)',
        'lift': '0 22px 60px -18px rgba(76,29,149,0.30)',
        'indigo': '0 14px 34px -10px rgba(109,40,217,0.50)',
        'pink': '0 14px 34px -10px rgba(236,72,153,0.45)',
        'glow': '0 0 0 1px rgba(255,255,255,0.5), 0 20px 50px -18px rgba(37,99,235,0.45)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      animation: {
        'marquee': 'marquee 32s linear infinite',
        'float-slow': 'floatSlow 9s ease-in-out infinite',
        'float-slower': 'floatSlow 13s ease-in-out infinite',
        'gradient-shift': 'gradientShift 10s ease infinite',
        'spin-slow': 'spin 22s linear infinite',
        'blob': 'blob 16s ease-in-out infinite',
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
        blob: {
          '0%, 100%': { transform: 'translate(0px,0px) scale(1)' },
          '33%': { transform: 'translate(24px,-30px) scale(1.08)' },
          '66%': { transform: 'translate(-18px,18px) scale(0.94)' },
        },
      },
    },
  },
  plugins: [],
}
