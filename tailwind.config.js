/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        h1: "1.4em",
        h2: "1.2em",
        h3: "1.1em",
        h4: "1em",
        h5: "1em",
        h6: "1em",
      },
    },
  },
  plugins: [],
};
