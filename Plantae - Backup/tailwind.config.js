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
        'teste': ['Anton', 'sans-serif', 'Quicksand', 'sans-serif'],
        'gafata': ['Gafata', 'sans-serif'],
        'galdeano': ['Galdeano', 'sans-serif'],
        'tenor-sans': ['"Tenor Sans"', 'sans-serif'],
        'encode-expanded': ['Encode Sans Expanded', 'sans-serif'],
        'titulos': ['"Expletus Sans"', 'cursive'],
        'normal': ['"Plus Jakarta Sans"', 'sans-serif']
      }
    },
    colors: {
      'verde-nav': '#3C664C',
      'verde-sofa': '#9FB3A6',
      'para-borda': '#D9D9D9',
      'para-sobre-nos': '#E0D4BE',
      'verde-sobre-nos': '#9DA382',
      'titulo-sobre-nos': '#5B665F',
      'cinza-produto': '#D9D9D9',
    },
  },
  plugins: [],
}

