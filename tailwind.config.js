/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/work/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/Work/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        "1/2": "1 / 2",
      },
    },
  },
  plugins: [],
};
