/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        slideFadeIn: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideFadeOut: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        slideFadeIn: 'slideFadeIn 0.4s ease-in-out',
        slideFadeOut: 'slideFadeOut 0.4s ease-in-out',
      },
    },
  },
  plugins: [],
}
