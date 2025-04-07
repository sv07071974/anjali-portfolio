/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'sans': ['Inter', 'sans-serif'],
        },
        colors: {
          // You can customize colors based on Figma design here
        }
      },
    },
    plugins: [],
  }