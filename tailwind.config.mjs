export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#001F3F',
          steel: '#1A1A1B',
          yellow: '#FFD700',
          orange: '#F97316',
          cold: '#F8FAFC',
          grid: '#D7DEE7'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Roboto Mono', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      borderRadius: {
        sm: '0.2rem',
        DEFAULT: '0.2rem',
        md: '0.22rem',
        lg: '0.24rem',
        xl: '0.25rem',
        '2xl': '0.25rem',
        '3xl': '0.3rem'
      },
      boxShadow: {
        sm: 'none',
        DEFAULT: 'none',
        md: 'none',
        lg: 'none',
        xl: 'none'
      },
      backgroundImage: {
        'industrial-grid': 'linear-gradient(to right, rgba(215, 222, 231, 0.45) 1px, transparent 1px), linear-gradient(to bottom, rgba(215, 222, 231, 0.45) 1px, transparent 1px)'
      },
      backgroundSize: {
        grid: '32px 32px'
      }
    }
  },
  plugins: []
};
