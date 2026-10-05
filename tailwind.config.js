/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: '#1A2F33',
        tealsoft: '#25444A',
        gold: '#C5A059',
        golddark: '#A9853F',
        sand: '#F4F0EA',
        cream: '#F8F6F1',
        line: '#E9E4DD',
        charcoal: '#232323',
        sub: '#6B6B6B',
      },
      fontFamily: {
        sans: ['Vazirmatn', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp .3s ease-out',
        slideIn: 'slideIn .25s ease-out',
      },
    },
  },
  plugins: [],
}
