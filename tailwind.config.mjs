/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      "bebas-neue": ["Bebas Neue", "sans-serif"],
      poppings: ["Poppins", "sans-serif"],
      quicksand: ["Quicksand", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
      manrope: ["Manrope", "sans-serif"],
      lobster: ["Lobster", "sans-serif"],
      "nixie-one": ["Nixie One", "sans-serif"],
    },
    extend: {
      colors: {
        orange: "#FF5C01",
      },
    },
  },
  plugins: [],
};
