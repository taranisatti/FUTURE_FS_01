/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0B0F19', // deep agency dark background
          800: '#111827', // modern grid card dark
          700: '#1F2937', // lighter slate accents
          600: '#374151',
        },
        cyanCustom: {
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
        },
        indigoCustom: {
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'glow-pulse': 'glow 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-4px) scale(1.005)' },
        },
        glow: {
          '0%, 100%': { opacity: 0.25, transform: 'scale(1)' },
          '50%': { opacity: 0.4, transform: 'scale(1.01)' },
        }
      }
    },
  },
  plugins: [],
}
