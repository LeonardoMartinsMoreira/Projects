/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      screens: { 'sm': { 'max': '640px' } },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('flowbite/plugin'),
  ],
}

