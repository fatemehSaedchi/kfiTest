import type { Config } from "tailwindcss";

const config: { plugins: any[]; theme: { extend: {} }; content: string[] } = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:{
          100: '#D6CFC7',
          300: '#88807B',
          400:'#544C4A',
          700: '#282828'
        },
        blue:{
          700: '#092230'
        }
      }
    }
  },
  plugins: [],
};
export default config;
