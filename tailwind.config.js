import { info } from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      colors: {
        primary: '#1a202c', // Example primary color
        secondary: '#2d3748', // Example secondary color
        accent: '#ff9c1a', // Example accent color
        background: '#EBF2FA', // Example background color
        text: '#2d3748', // Example text color
        'custom-red': '#EC1B09', // New custom color
        'card-accent': '#FFEBD1',
        'card-background': '#F2F7FC',
        'tag-background': '#F2F7FC',
        'info-background': '#F2F5F9',
        'menu-item-background': '#E1E8EF',

        // Dark theme colors
        'dark-primary': '#121212',
        'dark-secondary': '#1e1e1e',
        'dark-accent': '#bb86fc',
        'dark-background': '#121212',
        'dark-text': '#e0e0e0',
        'dark-card-background': '#1e1e1e',
        'dark-tag-background': '#2c2c2c',
        'dark-info-background': '#2c2c2c',
        'dark-menu-item-background': '#333333',
      },
    },
  },
  plugins: [],
};
