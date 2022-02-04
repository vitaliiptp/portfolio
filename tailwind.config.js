const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["VT323", ...defaultTheme.fontFamily.sans],
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
      'erin': '#33ff33',
      'black': '#000000',
      'yellow-green': '#00BA00',
      'tea-green': '#C7FFC7',
      'honeydew': '#F0FFF0',
      'neon': '#00E500',
      'yellow': '#e3cc3c'
    },
  },
  plugins: [],
}
