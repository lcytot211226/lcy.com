import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        swing: 'swing 0.5s ease-in-out',
      },
      keyframes: {
        swing: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(20deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      }
    },
  },
  plugins: [],
} satisfies Config;
