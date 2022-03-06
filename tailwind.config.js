const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "home": "url('/assets/home-bg.png')",
      // },
      fontFamily: {
        primary: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      // screens: {
      //   'phone': '320px',
      //   // => @media (min-width: 640px) { ... }
      //
      //   'tablet': '640px',
      //   // => @media (min-width: 640px) { ... }
      //
      //   'laptop': '1024px',
      //   // => @media (min-width: 1024px) { ... }
      //
      //   'desktop': '1280px',
      //   // => @media (min-width: 1280px) { ... }
      // },
    },
    colors: {
      'white': '#ffffff',
      'grey': '#3f3e48',
      'dark-grey': '#2a2a2a',
      'semi-light-grey': '#b6b6b6',
      'light-grey': '#e5e4e4',
      'sky': '#004275',
      'sky-hover': '#003154',
      'blue': '#018a8a',
      'blue-active': '#07adaf',
      'black':'#000000',
      'main': '#F8F8F8FF',
      'contact-modal': '#e1fced',
      'contact-modal-text': '#0a6424'
    },
  },
  plugins: [],
}
