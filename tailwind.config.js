/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '32': '32px',
      },
      width:{
        "72": "720px",
        "84": "848px"
      },
      height:{
        '48': "490px"
      }
    },
  },
  plugins: [],
}