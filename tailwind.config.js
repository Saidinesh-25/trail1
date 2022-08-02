/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        spacing: {
          '128': '36rem',
          '98' : '28rem'
        },
        scale: {
          '105': '1.05',
        }
      }

  },
  plugins: [],
}
