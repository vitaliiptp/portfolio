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
      'light-grey': '#e5e4e4',
      'sky': '#004275',
      'sky-hover': '#003154',
      'blue': '#018a8a',
      'blue-active': '#07adaf',
      'black':'#000000'
    },
  },
  plugins: [],
}
