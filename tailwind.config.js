/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "PoppinsVariable", "ui-sans-serif", "system-ui"],
      },
      colors: {
        pink: {
          50: '#FFF5F7',
          100: '#FFE4EC',
          200: '#FFB8D2',
          300: '#FF8AB8',
          400: '#FF5C9E',
          500: '#FF2E84',
        },
        sage: {
          50: '#F6FBF7',
          100: '#E3F5E8',
          200: '#C1E6CC',
          300: '#9FD7B0',
          400: '#7DC894',
          500: '#5BBA78',
        },
        neutral: {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          900: '#1C1917',
        },
      },
    },
  },
  plugins: [],
} 