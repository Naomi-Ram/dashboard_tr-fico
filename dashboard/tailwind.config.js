/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta editorial desaturada — "Movilidad Sostenible y Tráfico Urbano" (NYC TLC)
        asphalt: {
          DEFAULT: '#121826', // Header, tooltips y ancla oscura sobria
          light: '#1E293B',
          subtle: '#1A2233',
        },
        taxi: {
          DEFAULT: '#C85A32', // Terracota editorial: hora pico, día laboral, congestión
          warm: '#D97B54',
          soft: '#FDF3EF',
        },
        transit: {
          DEFAULT: '#2A7B76', // Verde petróleo sobrio: hora valle, fin de semana, flujo fluido
          deep: '#1F5F5B',
          soft: '#EFF7F6',
        },
        metro: {
          DEFAULT: '#3B526B', // Azul acero pizarra: datos base, distribución y estructura
          soft: '#F1F5F9',
        },
        canvas: '#F5F7FA',
        card: '#FFFFFF',
        ink: {
          DEFAULT: '#0F172A',
          secondary: '#334155',
          tertiary: '#64748B',
          muted: '#94A3B8',
        },
        // Alias compatibles
        primary: {
          DEFAULT: '#121826',
          light: '#1E293B',
        },
        accent: {
          DEFAULT: '#C85A32',
          light: '#D97B54',
          dark: '#A44522',
        },
        teal: {
          DEFAULT: '#2A7B76',
          light: '#479994',
          dark: '#1F5F5B',
        },
        surface: {
          DEFAULT: '#F5F7FA',
          card: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Archivo', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        card: '0 0 0 1px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.03)',
        'card-hover': '0 0 0 1px rgba(15, 23, 42, 0.10), 0 4px 12px rgba(15, 23, 42, 0.05)',
      },
    },
  },
  plugins: [],
};
