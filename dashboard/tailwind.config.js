/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta del dashboard — coherente con wireframe Fase 2
        primary: {
          DEFAULT: '#1B2A4A',  // Header / fondo oscuro
          light: '#2D3E5F',
        },
        accent: {
          DEFAULT: '#E8772E',  // Naranja principal (badges, highlights)
          light: '#F5A623',
          dark: '#C65D1A',
        },
        teal: {
          DEFAULT: '#0E7C7B',  // Tarjetas KPI secundarias
          light: '#14B8A6',
          dark: '#095E5D',
        },
        surface: {
          DEFAULT: '#F3F4F6',  // Fondo general
          card: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
