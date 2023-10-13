/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  daisyui: {
    themes: [],
  },
  theme: {
    extend: {
      backgroundImage: {
        'light': "url('../src/images/bg.jpg')",
        'dark': "url('../src/images/bg-dark.jpg')",
      },
      fontFamily: {
        'text': ['Poppins', 'sans-serif'],
        'heading': ['Roberto Slab', 'serif'],
      }
    },
  },
  plugins: [require("daisyui")],
}

