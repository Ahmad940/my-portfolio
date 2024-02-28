/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter, sans-serif', {
          fontFeatureSettings: '"liga" 1, "calt" 1', // Fix for Chrome
          // fontVariationSettings: '"opsz" 320', // Adjust font size as needed
        },],
      }
    },
  },
  plugins: [],
}

