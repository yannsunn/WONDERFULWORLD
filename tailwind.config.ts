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
        // WONDERFUL WORLD brand colors
        primary: {
          50: '#fdf8f6',
          100: '#f8ebe3',
          200: '#f3d8c8',
          300: '#ebbfa3',
          400: '#e19d77',
          500: '#d97f52',
          600: '#c96541',
          700: '#a85037',
          800: '#884333',
          900: '#6f3a2d',
        },
        accent: {
          gold: '#D4AF37',
          rose: '#E8B4B8',
          sand: '#F5E6D3',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
