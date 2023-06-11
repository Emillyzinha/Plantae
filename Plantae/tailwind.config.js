
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'gafata': ['Gafata', 'sans-serif'],
      'quick': ['Quicksand', 'sans-serif'],
      'galdeano': ['Galdeano', 'sans-serif']
    },
    extend: {
      colors: {
        'verde-padrao': '#053F02',
        'borda': '#5B665F',
        'fundo-tela': '#F5F5F5',
        'verde-integrantes': '#5B665F',
      }
    },
  },
  plugins: [],
}

