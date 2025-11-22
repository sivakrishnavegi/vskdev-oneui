/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "./dist/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "var(--border)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        md: "var(--radius)",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      // define outline-ring utility
      addUtilities({
        ".outline-ring\\/50": {
          outlineColor: theme("colors.ring"),
          outlineStyle: "solid",
          outlineWidth: "3px",
        },
      });
    },
  ],
};
