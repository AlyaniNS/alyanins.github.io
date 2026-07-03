import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'mono': ['"Geist Mono"', 'monospace', 'Courier New', 'Courier'],
      },
      colors: {
        cream: '#F4F3EE',
        surface: '#FCFBF8',
        'forest-dark': '#26352D',
        'sage-muted': '#4C5C53',
        'sage-accent': '#5F7A61',
        'sage-border': '#D9DDD5',
      },
      boxShadow: { 
        soft: '0 2px 12px rgba(38, 53, 45, 0.04)',
        'soft-dark': '0 2px 12px rgba(0, 0, 0, 0.15)'
      },
      borderRadius: { '2xl': '1.25rem' }
    }
  },
  darkMode: 'class',
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#5F7A61",
          "secondary": "#26352D",
          "accent": "#4C5C53",
          "neutral": "#26352D",
          "base-100": "#FCFBF8",
          "base-200": "#F4F3EE",
        },
      },
    ],
  },
}

