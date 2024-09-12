/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        'sora-bold': ['Sora-bold', 'sans-serif'],
        'sora-black': ['Sora-black', 'sans-serif'],
        'sora-extrabold': ['Sora-extrabold', 'sans-serif'],
        'sora-extralight': ['Sora-extralight', 'sans-serif'],
        'sora-light': ['Sora-light', 'sans-serif'],
        'sora-medium': ['Sora-medium', 'sans-serif'],
        'sora-regular': ['Sora-regular', 'sans-serif'],
        'sora-semibold': ['Sora-semibold', 'sans-serif'],
        'sora-thin': ['Sora-thin', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

