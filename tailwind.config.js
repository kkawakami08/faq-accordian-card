/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        desaturatedBlue: "hsl(var(--desaturated-blue))",
        softRed: "hsl(var(--soft-red))",
        gradientViolet: "hsl(var(--gradient-violet))",
        gradientBlue: "hsl(var(--gradient-blue))",
        veryDarkGrayishBlue: "hsl(var(--very-dark-grayish-blue))",
        darkGrayishBlue: "hsl(var(--dark-grayish-blue))",
        lightGrayishBlue: "hsl(var(--light-grayish-blue))",
        
      },
      fontFamily: {
        sans: ['Kumbh Sans', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}

