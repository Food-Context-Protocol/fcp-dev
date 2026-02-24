/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'fcp-black': '#0a0a0a',
        'fcp-gray': {
          100: '#f5f5f5',
          300: '#d4d4d4',
          500: '#737373',
          900: '#171717',
        },
      },
    },
  },
  plugins: [],
}
