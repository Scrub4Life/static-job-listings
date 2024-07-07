/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ddc: "hsl(180, 29%, 50%)",
      lgc: "hsl(180, 52%, 96%)",
      lgc1: "hsl(180, 8%, 85%)",
      dgc: "hsl(180, 8%, 52%)",
      vdgc: "hsl(180, 14%, 20%)",
      black: "rgb(0,0,0)",
    },
    extend: {
      fontFamily: {
        spartan: [":league spartan"],
      },
    },
  },
  plugins: [],
};
