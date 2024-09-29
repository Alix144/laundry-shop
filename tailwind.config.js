/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAFA",
        darkGreen: "#337856",
        lightGreen: "#80FFBF",
        pText: "#646464",
        green: "#95F83E",
        orange: "#FFAC26",
        red: "#FF6863",
      },
    },
  },
  plugins: [],
};
