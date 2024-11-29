/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      borderRadius: {
        '4xl': '4rem', // Slightly larger than 3xl (1.875rem)
      },
      boxShadow:{
        'custom-light': '10px 0 20px -5px rgba(56, 189, 248, 0.8)', // for bg-blue-400
        'custom-dark': '10px 0 20px -5px rgba(26, 35, 126, 0.8)',  // for dark:bg-indigo-700
      },
    },
  },
  plugins: [],
}