/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '4rem', // Slightly larger than 3xl (1.875rem)
      },
    },
  },
  plugins: [],
}

