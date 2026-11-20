/**
 * Indicadores clave de rendimiento (KPIs) — Enero 2025.
 * Valores oficiales del documento Fase 2 (3,202,368 viajes válidos de NYC TLC).
 */
import type { KPIData } from '../types';

export const KPI_PRINCIPAL: KPIData = {
  id: 'duration',
  label: 'Duración Promedio de Viaje',
  value: '14.65 min',
  subtitle: 'Mediana: 11.68 min · Velocidad media: 11.74 → 10.27 mph',
  insight: 'En hora pico sube a 14.96 min y la velocidad cae 12.5%',
  accentColor: 'taxi',
  change: '14.96 min en Pico (+2.1%)',
  changeType: 'up',
};

export const KPIS_SECONDARY: KPIData[] = [
  {
    id: 'distance',
    label: 'Distancia Promedio',
    value: '3.14 mi',
    subtitle: 'Mediana: 1.70 mi · 75% ≤ 3.13 mi',
    insight: 'Predominan traslados cortos dentro de Manhattan',
    accentColor: 'transit',
  },
  {
    id: 'farePerMile',
    label: 'Tarifa Prom. / Milla',
    value: '$7.88 /mi',
    subtitle: 'Pico: $8.14/mi · Valle: $7.72/mi',
    insight: '+5.4% más caro en hora pico por tiempo detenido',
    accentColor: 'metro',
  },
  {
    id: 'topZone',
    label: 'Zona Mayor Demanda',
    value: 'Midtown Center',
    subtitle: '159,790 salidas (4.99% del mes)',
    insight: 'Top 10 zonas concentran ~40% de toda la ciudad',
    accentColor: 'taxi',
  },
  {
    id: 'avgTip',
    label: 'Propina Promedio',
    value: '$3.10 USD',
    subtitle: 'Mediana: $2.60 · Pagos con tarjeta',
    insight: 'Hora pico: $3.20 vs. Valle: $3.06 USD',
    accentColor: 'transit',
  },
];
