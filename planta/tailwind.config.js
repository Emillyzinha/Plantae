/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'titulo-nav': ['"Quicksand"', 'sans-serif'],
        'teste': ['Anton', 'sans-serif', 'Quicksand', 'sans-serif']
      }
    },
    colors: {
      'titulo-verde-nav': '#3C664C',
      'no-sofa': '#9FB3A6',
      'para-borda': '#D9D9D9',
      'marrom-sobre-nos': '#E0D4BE',
      'verde-equipe': '#9DA382',
      'titulo-verde-time': '#5B665F',
    },
  },
  plugins: [],
}
