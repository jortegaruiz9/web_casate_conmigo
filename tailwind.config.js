const { addDynamicIconSelectors } = require("@iconify/tailwind");
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
      colors: {
        myWhite: "#f4efe9",
        myZinc: "#3D3C3B",
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
