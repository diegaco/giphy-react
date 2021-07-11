module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      padding: '1rem',
      screens: {
         sm: "100%",
         md: "100%",
         lg: "1024px",
         xl: "1200px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
