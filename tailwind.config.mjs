/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:'#fff7f2',100:'#ffe7d9',200:'#ffd0b0',300:'#ffb27f',
          400:'#ff8d47',500:'#ff6a19',600:'#e24f0b',700:'#bb3d0a',
          800:'#95330d',900:'#7a2b0e'
        }
      },
      boxShadow: { soft: '0 8px 30px rgba(0,0,0,0.06)' },
      borderRadius: { '2xl': '1.25rem' }
    }
  },
  plugins: []
}
