/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#06315F',
        "secondary": '#F1B840',
        "blue-sec" : '#115EE6' 
      }
    },
  },
  plugins: [],
}

