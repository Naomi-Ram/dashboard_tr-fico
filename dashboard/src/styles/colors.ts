/**
 * Paleta de colores del dashboard — definida en Fase 2 (wireframe).
 * Centralizada aquí para mantener coherencia visual en toda la aplicación.
 *
 * - primary: Fondos oscuros (header, tooltips)
 * - accent:  Naranja para highlights, badges, elementos de atención
 * - teal:    Verde-azulado para tarjetas KPI secundarias y gráficos
 * - surface: Fondos claros y tarjetas
 * - chart:   Colores específicos para las visualizaciones
 */

export const COLORS = {
  primary: '#1B2A4A',
  primaryLight: '#2D3E5F',
  accent: '#E8772E',
  accentLight: '#F5A623',
  accentDark: '#C65D1A',
  teal: '#0E7C7B',
  tealLight: '#14B8A6',
  tealDark: '#095E5D',
  surface: '#F3F4F6',
  card: '#FFFFFF',
  textDark: '#1F2937',
  textMuted: '#6B7280',
  textLight: '#FFFFFF',
} as const;

/** Gradiente para el mapa coroplético (densidad de viajes) */
export const MAP_GRADIENT = [
  '#E8F5E9', // Baja densidad
  '#A5D6A7',
  '#66BB6A',
  '#43A047',
  '#2E7D32',
  '#1B5E20', // Alta densidad
] as const;

/** Colores por borough para gráficos de barras */
export const BOROUGH_COLORS: Record<string, string> = {
  Manhattan: '#E8772E',
  Brooklyn: '#0E7C7B',
  Queens: '#F5A623',
  Bronx: '#2D3E5F',
  'Staten Island': '#14B8A6',
} as const;
