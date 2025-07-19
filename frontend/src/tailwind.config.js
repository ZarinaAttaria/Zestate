/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-900": "#0d1321", // Match your navbar color
        "blue-600": "#3b7ad9", // Primary blue
      },
    },
  },
  plugins: [],
};
