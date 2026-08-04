/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        ultra: '-0.04em',
        name: '-0.045em',
      },
      colors: {
        ink: {
          950: '#0a0a0a',
          900: '#111111',
          800: '#1a1a1a',
          700: '#242424',
        },
        canvas: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        maskUp: {
          '0%': { transform: 'translateY(110%)' },
          '100%': { transform: 'translateY(0)' },
        },
        clipReveal: {
          '0%': { clipPath: 'inset(0 0 100% 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.9s cubic-bezier(0.22,1,0.36,1) both',
        fadeUp: 'fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) both',
        maskUp: 'maskUp 1s cubic-bezier(0.22,1,0.36,1) both',
        clipReveal: 'clipReveal 1.1s cubic-bezier(0.22,1,0.36,1) both',
        slideInLeft: 'slideInLeft 0.8s cubic-bezier(0.22,1,0.36,1) both',
        slideInRight: 'slideInRight 0.7s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
};
