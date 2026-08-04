/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // LeadSoc-inspired corporate navy + red palette
        brand: {
          navy: '#0A1E3F',
          navyDeep: '#061631',
          navy800: '#0E2A54',
          navy700: '#143567',
          blue: '#1E4F87',
          steel: '#3A72C4',
          sky: '#5B9BE0',
          red: '#D62828',
          redBright: '#E63946',
          redDeep: '#A81D22',
          ink: '#0F172A',
          body: '#334155',
          muted: '#64748B',
          mist: '#EEF3FA',
          mistLine: '#DBE6F5',
        },
        // Legacy token names repointed to navy/red so any leftover usage stays on-theme
        astras: {
          orange: '#D62828',
          orangeHover: '#E63946',
          amber: '#E63946',
          red: '#D62828',
          darkRed: '#A81D22',
          peach: '#EEF3FA',
          peachLight: '#EEF3FA',
          slateDark: '#0F172A',
          slateBody: '#334155',
          slateMuted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        // ember-gradient repurposed to a deep navy band (used by CTA/hero panels)
        'ember-gradient': 'linear-gradient(135deg, #061631 0%, #0A1E3F 55%, #143567 100%)',
        'navy-gradient': 'linear-gradient(135deg, #061631 0%, #0A1E3F 55%, #143567 100%)',
        'navy-radial': 'radial-gradient(circle at 30% 20%, #143567 0%, #0A1E3F 45%, #061631 100%)',
        'red-gradient': 'linear-gradient(135deg, #E63946 0%, #D62828 55%, #A81D22 100%)',
        'orange-soft': 'linear-gradient(180deg, #EEF3FA 0%, #FFFFFF 100%)',
        'blue-soft': 'linear-gradient(180deg, #EEF3FA 0%, #FFFFFF 100%)',
      },
      boxShadow: {
        'orange-glow': '0 12px 30px -6px rgba(214, 40, 40, 0.35)',
        'red-glow': '0 12px 30px -6px rgba(214, 40, 40, 0.4)',
        'navy-glow': '0 20px 45px -12px rgba(10, 30, 63, 0.45)',
        'card-soft': '0 6px 24px -6px rgba(10, 30, 63, 0.12)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'sparkle': 'sparkle 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.4s ease-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        sparkle: {
          '0%, 100%': { opacity: 0.8, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.02)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(6px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
