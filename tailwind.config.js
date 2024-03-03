/*eslint-env node*/
/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-80": "var(--base-80)",
        bg: "var(--bg)",
        surface: "var(--surface)",
        text: "var(--text)",
      },
      fontFamily: {
        "web-body-regular-s": "var(--web-body-regular-s-font-family)",
        "web-body-semibold-XL": "var(--web-body-semibold-XL-font-family)",
      },
    },
  },
  plugins: [],
};

module.exports = tailwindConfig;
