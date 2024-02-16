/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js,php}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1600px',
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#009CF8',
        secondary: '#D0D0D0',
        tertiary: "#A0A0AB",
        grey: '#827b75',
        dark: '#0E1929',
        light: "#f7f7f7",
      },
      fontFamily: {
        'proxima-nova': ['Proxima Nova', 'sans-serif'],
        articulat: ["articulat-cf", "sans-serif"],
        "articulat-heavy": ["articulat-heavy-cf", "sans-serif"],
        "coolvetica": ["Coolvetica"],
      }
    },
  },
  plugins: [],
}

