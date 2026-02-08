/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'fcp-green': '#4CAF50',
        'fcp-green-light': '#81C784',
        'fcp-green-dark': '#388E3C',
        'fcp-dark': '#333333',
      },
    },
  },
  plugins: [],
}
