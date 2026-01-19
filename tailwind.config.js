/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary Colors (NeoX)
        primary: '#1B2134',
        charcoal: '#333333',

        // Accent Colors (NeoX Magenta/Purple)
        accent: {
          DEFAULT: '#F700FF',
          light: '#a855f7',
          dark: '#0080FF',
        },

        // Secondary Colors (NeoX Gradient)
        secondary: {
          magenta: '#F700FF',
          purple: '#a855f7',
          blue: '#0080FF',
          cyan: '#00c4ff',
          green: '#2cc343',
        },

        // Background Colors (Petrol)
        blaugrau: {
          DEFAULT: '#e6eeed',
          light: '#f1f6f5',
          dark: '#80a7a5',
        },
        background: '#f1f6f5',

        // Neutral Colors
        neutral: {
          dark: '#1B2134',
          medium: '#666666',
          light: '#80a7a5',
          lighter: '#e6eeed',
        },

        // Text Colors
        text: {
          dark: '#333333',
          medium: '#666666',
          light: '#537979',
          'on-dark': '#FFFFFF',
          'on-accent': '#FFFFFF',
        },

        // Petrol
        petrol: {
          dark: '#537979',
          medium: '#80a7a5',
          light: '#e6eeed',
          lighter: '#f1f6f5',
        }
      },
      fontFamily: {
        rubik: ['Figtree', 'sans-serif'],
        inter: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(90deg, #F700FF 0%, #a855f7 50%, #0080FF 100%)',
        'gradient-cta': 'linear-gradient(90deg, #f700ff 0%, rgba(124, 128, 234, 1) 65%, #00ffd4 100%)',
        'gradient-green': 'linear-gradient(90deg, #2cc343 0%, #00c4ff 100%)',
      },
    },
  },
  plugins: [],
};
