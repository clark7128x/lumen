/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#151413',
          surface: '#1D1B1A',
          border: '#2B2827',
        },
        text: {
          primary: '#F2EFEA',
          muted: '#A8A29A',
        },
        telegram: '#2AABEE',
      },
      fontFamily: {
        sans: ['Geist', 'Instrument Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '20px',
      },
      animation: {
        'in': 'fadeIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};