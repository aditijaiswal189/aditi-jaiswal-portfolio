/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    screens: {
      xs: "350px",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('Images/aboutbackground.jpg')",
      },
    },
  },
  plugins: [],
};
