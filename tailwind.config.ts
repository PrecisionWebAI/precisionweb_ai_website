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
    extend: {
      fontFamily:{
        primary:["Poppins"]
      },
      borderWidth: {
        '1': '1px',
      },
      boxShadow: {
        'custom': '0 4px 8px rgba(115, 133, 148, 0.1)', // Example of a custom box shadow
      },
    },
  },
  plugins: [],
}