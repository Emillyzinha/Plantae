
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      gafata: ['Gafata', 'sans-serif'] ,
    },
    extend: {
      colors: {
        'verde-padrao': '#053F02',
      }
    },
  },
  plugins: [],
}

