import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(233, 26%, 24%)",
        "lime-green": "hsl(136, 65%, 51%)",
        cyan: "hsl(192, 70%, 51%)",
        grayish_blue: "hsl(233, 8%, 62%)",
        light_grayish_blue: "hsl(220, 16%, 96%)",
        very_light_gray: "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontSize: {
        prim: "18px",
      },
      backgroundImage: {
        intro: "url(/bg-intro.svg)",

        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  // daisyui : {
  //   themes : []
  // }
};
export default config;
