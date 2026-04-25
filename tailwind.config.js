/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS/TS files in src
    "./index.html" // Scan index.html if present
  ],
  theme: {
    // Make sure we extend colors rather than replace them, to keep default slate, etc.
    extend: {
      colors: {
        // Base colors
        white: '#ffffff',
        black: '#000000',
        transparent: 'transparent',
        current: 'currentColor',
        
        // Palette sampled from src/assets/pfp2.webp
        dark: '#0C0C0C',
        primary: {
          50: '#FCFCFC',
          100: '#FCFCE4',
          200: '#FCE4E4',
          300: '#3C6CB4',
          400: '#3C54B4',
          500: '#243C6C',
          600: '#242454',
          700: '#0C2454',
          800: '#0C0C3C',
          900: '#0C0C24',
          DEFAULT: '#243C6C',
        },
        secondary: {
          50: '#FCFCFC',
          100: '#F8F8E8',
          200: '#FCE4E4',
          300: '#FCCCCC',
          400: '#FCCCB4',
          500: '#FCE4CC',
          600: '#3C3C54',
          700: '#24243C',
          800: '#0C0C24',
          900: '#0C0C0C',
        },
        accent: {
          50: '#FCE4E4',
          100: '#FCCCCC',
          200: '#FCB4B4',
          300: '#FCB49C',
          400: '#FC0C3C',
          500: '#FC0C3C',
          600: '#6C0C0C',
          700: '#540C0C',
          800: '#3C0C0C',
          900: '#240C0C',
          DEFAULT: '#FC0C3C',
        },
        glow: '#FCE4E4',
        steel: '#FCCCCC',
        deep: '#0C2454',
        light: '#FCFCFC',
        
        // Semantic color variants
        background: '#0D0D0D',
        text: '#FCFCFC',
        highlight: '#242454',
        'accent-pink': '#FC0C3C',
        'accent-blue': '#243C6C',
        'accent-gray': '#FCE4E4',
        'accent-deep': '#0C2454',
        ratteBlack: '#000000',
        ratteDarkGray: '#0C0C0C',
        ratteGray: '#242424',
        ratteLightGray: '#3C3C54',
        ratteBlue: {
          light: '#3C6CB4',
          DEFAULT: '#243C6C',
          dark: '#0C2454'
        },
        rattePurple: {
          light: '#3C54B4',
          DEFAULT: '#242454',
          dark: '#0C0C3C'
        },
        ratteAccent: '#FC0C3C',
        ratteCream: '#FCFCE4',
        ratteBlush: '#FCE4E4'
      },
      fontFamily: {
        // Set Inter as the default sans-serif font
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'neon': '0 0 5px #FCE4E4, 0 0 20px #FC0C3C',
      },
      transitionDuration: {
        DEFAULT: '220ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '0.5': '0.125rem',
        '1': '0.25rem',
        '1.5': '0.375rem',
        '2': '0.5rem',
        '2.5': '0.625rem',
        '3': '0.75rem',
        '3.5': '0.875rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        '11': '2.75rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
        '52': '13rem',
        '56': '14rem',
        '60': '15rem',
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
      },
    },
  },
  plugins: [
    // V4 plugin format is different
    {
      handler({ addUtilities }) {
        addUtilities({
          '.text-shadow-neon': {
            textShadow: '0 0 5px #FCE4E4, 0 0 10px #FC0C3C',
          },
        });
      },
    },
  ],
}
