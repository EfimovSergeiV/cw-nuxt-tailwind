module.exports = {
  purge: [],
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '520px',
        md: '820px',
        lg: '1140px',
        xl: '1440px',
      },
      container: {
        center: true,
      },
      colors: {
        'yellow-450': '#f8dc08',
        'yellow-550': '#baa50a',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
