/**
 * Datos del boxplot: duración de viaje en Hora Pico vs. Hora Valle.
 * Hora Pico: 7–9 h y 16–19 h (definido en Fase 2).
 * Hora Valle: resto del día.
 *
 * Valores calibrados con la duración promedio real de 14.65 min
 * y la mediana real de 11.68 min.
 */
import type { BoxplotDataPoint } from '../types';

export const boxplotData: BoxplotDataPoint[] = [
  {
    category: 'Hora Pico\n(7–9h y 16–19h)',
    min: 3.0,
    q1: 9.5,
    median: 15.2,
    q3: 22.8,
    max: 38.0,
    outliers: [42, 48, 55],
  },
  {
    category: 'Hora Valle\n(Resto del día)',
    min: 2.0,
    q1: 6.8,
    median: 10.5,
    q3: 17.2,
    max: 30.0,
    outliers: [35, 41],
  },
];
