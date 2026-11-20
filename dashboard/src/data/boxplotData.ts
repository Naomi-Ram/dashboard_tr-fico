/**
 * Distribución real de velocidad comercial (mph) en Hora Pico vs. Hora Valle — enero 2025.
 * Calculado sobre yellow_tripdata_2025-01.parquet, segmentado por tipo de día.
 * Bigotes: p05 y límite superior de Tukey (Q3 + 1.5 × IQR). Outliers: p95 y p98.
 */
import type { BoxplotDataPoint } from '../types';

export const boxplotSpeedByDayType: Record<string, BoxplotDataPoint[]> = {
  Todos: [
    {
      id: 'peak',
      category: 'Hora Pico',
      schedule: '7–9 h y 16–19 h',
      min: 4.7,
      q1: 7.2,
      median: 9.2,
      q3: 12.1,
      max: 19.5,
      mean: 10.6,
      outliers: [22.5, 28.1],
    },
    {
      id: 'offpeak',
      category: 'Hora Valle',
      schedule: 'Resto del día',
      min: 4.9,
      q1: 7.6,
      median: 10.0,
      q3: 13.6,
      max: 22.6,
      mean: 11.8,
      outliers: [26.6, 32.8],
    },
  ],
  Laboral: [
    {
      id: 'peak',
      category: 'Hora Pico',
      schedule: '7–9 h y 16–19 h',
      min: 4.7,
      q1: 7.1,
      median: 9.0,
      q3: 11.7,
      max: 18.6,
      mean: 10.3,
      outliers: [21.4, 26.6],
    },
    {
      id: 'offpeak',
      category: 'Hora Valle',
      schedule: 'Resto del día',
      min: 4.7,
      q1: 7.3,
      median: 9.7,
      q3: 13.3,
      max: 22.3,
      mean: 11.5,
      outliers: [26.2, 32.5],
    },
  ],
  'Fin de Semana': [
    {
      id: 'peak',
      category: 'Hora Pico',
      schedule: '7–9 h y 16–19 h',
      min: 4.8,
      q1: 7.6,
      median: 9.9,
      q3: 13.4,
      max: 22.1,
      mean: 11.7,
      outliers: [26.4, 32.7],
    },
    {
      id: 'offpeak',
      category: 'Hora Valle',
      schedule: 'Resto del día',
      min: 5.6,
      q1: 8.4,
      median: 10.7,
      q3: 14.2,
      max: 22.9,
      mean: 12.5,
      outliers: [27.4, 33.4],
    },
  ],
};

export const boxplotData: BoxplotDataPoint[] = boxplotSpeedByDayType.Todos;
