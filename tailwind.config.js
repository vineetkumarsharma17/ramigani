/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        astras: {
          orange: '#FF5500',    // Primary vibrant orange
          orangeHover: '#FF6A00',// Hover orange
          amber: '#FF9100',     // Bright amber
          red: '#FF3D00',       // Ember red
          darkRed: '#D50000',   // Deep red
          peach: '#FFF0E6',     // Active nav pill background
          peachLight: '#FFF5F0',// Soft card tint
          slateDark: '#1E293B', // Headings dark text
          slateBody: '#334155', // Body text
          slateMuted: '#64748B',// Secondary text
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'ember-gradient': 'linear-gradient(135deg, #FF9100 0%, #FF3D00 50%, #D50000 100%)',
        'orange-soft': 'linear-gradient(180deg, #FFF5F0 0%, #FFFFFF 100%)',
      },
      boxShadow: {
        'orange-glow': '0 10px 30px -5px rgba(255, 85, 0, 0.3)',
        'card-soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'sparkle': 'sparkle 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        sparkle: {
          '0%, 100%': { opacity: 0.8, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
