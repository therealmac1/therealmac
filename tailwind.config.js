/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        midnight: "#0B0B0B",
        gold: "#D4AF37",
        "soft-white": "#F5F5F5",
        charcoal: "#1A1A1A",
      },
    },
  },
  plugins: [],
};
