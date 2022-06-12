module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'neutral-green': '#11B980',
        'neutral-gray': '#E2E2E2',
        'neutral-slate': '#F1F1F1',
        'neutral-active': '#318FE7',
        'neutral-blue': '#549DF2',
      },
    },
  },
  plugins: [],
}
