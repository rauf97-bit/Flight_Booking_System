module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#07B0FF",
        secondary :"#0A65D1",
      },
      backgroundImage : {
        'hero-img' : "url('./images/hero-img.jpg')",
        'china' : "url('./images/china.jpg')",
        'london' : "url('./images/london.png')",
        'istanbul' : "url('./images/istanbul.png')"
      }
    },
  },
  plugins: [],
}