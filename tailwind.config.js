/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'gray':'#6f6f70d2',
      'black':'#222222d2',
      'main-bg-color': '#fafafb',
      'main-color' : '#cd1613',
      'sec-color' : '#e0e0e6',
      'border-color': '#e5e5e5',
      'offerSale' : '#397dd5'
    },
  },
  plugins: [],
}

