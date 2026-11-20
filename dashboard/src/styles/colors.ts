/**
 * Paleta editorial desaturada — "Movilidad Sostenible y Tráfico Urbano" (NYC TLC).
 * Semántica fija y sobria en todo el dashboard (sin tonos fosforescentes):
 * - taxi (#C85A32):    Terracota editorial — Hora pico, día laboral, congestión
 * - transit (#2A7B76): Verde petróleo sobrio — Hora valle, fin de semana, flujo fluido
 * - metro (#3B526B):   Azul acero pizarra — Datos base, distribución y estructura
 * - asphalt (#121826): Pizarra carbón — Header, tooltips y ancla oscura
 */

export const COLORS = {
  asphalt: '#121826',
  asphaltLight: '#1E293B',
  primary: '#121826',
  primaryLight: '#1E293B',
  taxi: '#C85A32',
  accent: '#C85A32',
  accentLight: '#D97B54',
  accentDark: '#A44522',
  transit: '#2A7B76',
  teal: '#2A7B76',
  tealLight: '#479994',
  tealDark: '#1F5F5B',
  metro: '#3B526B',
  canvas: '#F5F7FA',
  surface: '#F5F7FA',
  card: '#FFFFFF',
  ink: '#0F172A',
  inkSecondary: '#334155',
  inkTertiary: '#64748B',
  inkMuted: '#94A3B8',
  gridLine: 'rgba(15, 23, 42, 0.06)',
  axisLine: 'rgba(15, 23, 42, 0.12)',
} as const;

/**
 * Escala secuencial por cuantiles para el mapa coroplético (263 zonas).
 * Tonos editoriales orgánicos (Verde petróleo claro → Petróleo → Terracota)
 * accesibles para daltonismo y legibles sobre el callejero de OpenStreetMap.
 */
export const MAP_QUANTILE_SCALE = [
  { label: '0 – 150',   min: 0,     max: 150,      color: '#DCEEEB' }, // Muy baja
  { label: '150 – 800', min: 150,   max: 800,      color: '#93C5BE' }, // Baja
  { label: '800 – 5k',  min: 800,   max: 5000,     color: '#347C77' }, // Moderada
  { label: '5k – 35k',  min: 5000,  max: 35000,    color: '#DF8B62' }, // Alta
  { label: '35k+',      min: 35000, max: Infinity, color: '#C85A32' }, // Saturación / Máxima
] as const;

export function getZoneFillColor(pickups: number): string {
  if (pickups <= 0) return '#E2E8F0';
  for (const step of MAP_QUANTILE_SCALE) {
    if (pickups < step.max) return step.color;
  }
  return MAP_QUANTILE_SCALE[MAP_QUANTILE_SCALE.length - 1].color;
}
