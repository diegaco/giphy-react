module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      padding: '1rem',
      // screens: {
      //    sm: "100%",
      //    md: "100%",
      //    lg: "1024px",
      //    xl: "1200px"
      // }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
