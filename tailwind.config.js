/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium Mono — editorial black & white on warm paper
        paper: '#FAFAF9',      // warm off-white
        ink: '#0A0A0A',        // near-black
        brand: {
          ink: '#0A0A0A',
          body: '#3F3F46',     // primary body copy
          soft: '#71717A',     // secondary text
          muted: '#A1A1AA',    // captions / meta
          line: '#E7E5E4',     // hairline rules
          lineStrong: '#D6D3D1',
          panel: '#F5F5F4',    // subtle raised panel
          panelDeep: '#EFEEEC',
          accent: '#10B981',   // restrained emerald
          accentDark: '#059669',
          accentSoft: '#ECFDF5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'Times New Roman', 'serif'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      boxShadow: {
        'paper': '0 1px 0 rgba(10,10,10,0.04), 0 18px 40px -28px rgba(10,10,10,0.22)',
        'lift': '0 24px 60px -32px rgba(10,10,10,0.30)',
      },
      animation: {
        'marquee': 'marquee 38s linear infinite',
        'draw': 'draw 1.2s cubic-bezier(0.16,1,0.3,1) forwards',
        'float-slow': 'floatSlow 9s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        draw: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
}
