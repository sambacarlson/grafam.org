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
        _gray: "#374151",
        _deep_gray: "#111827",
        _blue: "#3B82F6",
        _deep_blue: "#1D4ED8",
      },
      dropShadow: {
        light: "-2px -2px 5px rgba(0, 0, 0, 0.3)",
        dark: [
          "-3px -3px 12px rgba(255, 255, 255, 0.5)",
          // "0px 0px 10px rgba(200, 200, 200, 0.5)",
        ],
      },
    },
  },
  plugins: [],
};
