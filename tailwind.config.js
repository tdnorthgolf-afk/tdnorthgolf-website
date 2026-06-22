/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  theme: {
    extend: {
      colors: {
        // Soft-navy brand palette. The 600 (#3C5A82) is the logo / brand blue;
        // darker shades (900-950) carry the large dark sections, lighter tints
        // handle light backgrounds, text, borders, and accents. All one hue (~214deg).
        navy: {
          50:  "#F2F5F9",
          100: "#E4EBF3",
          200: "#C6D5E6",
          300: "#9DB2CE",
          400: "#6E89B0",
          500: "#506E97",
          600: "#3C5A82",
          700: "#314A6C",
          800: "#273A55",
          900: "#1E2D42",
          950: "#16202F",
        },
      },
    },
  },
  plugins: [],
}
