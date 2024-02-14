import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "linear-skeleton":
          "linear-gradient(90deg, hsl(0, 0%, 20%) 0%, hsl(0, 0%, 48%) 50%, hsl(0, 0%, 20%) 100%)",
      },
      backgroundSize: { "skeleton-size": "300% 100%" },
      keyframes: {
        colorSkeleton: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        colorSkeleton: "colorSkeleton 2s infinite linear",
      },
    },
  },
  plugins: [],
};
export default config;
