/** @type {import('tailwindcss').Config} */
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

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
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
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
  plugins: [
    addVariablesForColors,
    scrollbarHidePlugin, 
  ],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

// This plugin adds a utility class to hide scrollbars
function scrollbarHidePlugin( {addUtilities}: any ) {
  addUtilities({
    '.scrollbar-hide': {
      /* Hide scrollbar for Chrome, Safari, and Opera */
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      /* Hide scrollbar for IE, Edge, and Firefox */
      '-ms-overflow-style': 'none',
      'scrollbar-width': 'none',
    },
  });
  
}