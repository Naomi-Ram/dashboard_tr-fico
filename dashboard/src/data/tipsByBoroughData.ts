/**
 * Propina promedio por distrito (borough) y tipo de día.
 * Propina promedio general real: $3.10 USD (mediana $2.60).
 *
 * Solo pagos con tarjeta (efectivo no registra propina).
 * Manhattan domina en propinas por mayor volumen de pagos con tarjeta.
 */
import type { TipByBorough } from '../types';

export const tipsByBoroughData: TipByBorough[] = [
  { borough: 'Manhattan',      weekday: 3.28, weekend: 3.45 },
  { borough: 'Brooklyn',       weekday: 2.85, weekend: 3.10 },
  { borough: 'Queens',         weekday: 3.05, weekend: 3.30 },
  { borough: 'Bronx',          weekday: 2.40, weekend: 2.65 },
  { borough: 'Staten Island',  weekday: 2.15, weekend: 2.40 },
];
