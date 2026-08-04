/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Clean Light Minimal — paper / ink / indigo
        paper: '#FBFBFD',
        ink: '#0B1220',
        brand: {
          indigo: '#4F46E5',
          indigoDark: '#4338CA',
          indigoLight: '#6366F1',
          violet: '#7C3AED',
          sky: '#38BDF8',
          ink: '#0B1220',
          body: '#475569',
          muted: '#94A3B8',
          line: '#ECECF1',
          lineSoft: '#F1F1F6',
          tint: '#EEF0FF',      // very light indigo wash
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'indigo-gradient': 'linear-gradient(135deg, #6366F1 0%, #4F46E5 50%, #7C3AED 100%)',
        'indigo-soft': 'linear-gradient(180deg, #EEF0FF 0%, #FBFBFD 100%)',
        'mesh': 'radial-gradient(60% 60% at 20% 15%, rgba(99,102,241,0.18) 0%, transparent 60%), radial-gradient(50% 50% at 85% 20%, rgba(124,58,237,0.14) 0%, transparent 55%), radial-gradient(60% 60% at 70% 90%, rgba(56,189,248,0.12) 0%, transparent 55%)',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(11,18,32,0.04), 0 8px 24px -12px rgba(11,18,32,0.12)',
        'lift': '0 10px 40px -12px rgba(11,18,32,0.18)',
        'indigo': '0 12px 30px -8px rgba(79,70,229,0.45)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'marquee': 'marquee 32s linear infinite',
        'float-slow': 'floatSlow 9s ease-in-out infinite',
        'gradient-shift': 'gradientShift 12s ease infinite',
        'spin-slow': 'spin 18s linear infinite',
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
      },
    },
  },
  plugins: [],
}
