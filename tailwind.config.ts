import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#848D97',
          100: '#30363D',
          200: '#161B22',
          // 300: '',
          // 400: "",
          // 500: "",
          // 600: "",
          // 700: '',
          // 800: '',
          // 900: "",
        },
      },
    },
  },
  plugins: [],
};
export default config;
