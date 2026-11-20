/**
 * Propina promedio real por distrito y tipo de día (pagos con tarjeta) — enero 2025.
 * Nota: Queens refleja traslados largos desde JFK y LaGuardia; Staten Island tiene muestra reducida (n=8).
 */
import type { TipByBorough } from '../types';

export const tipsByBoroughData: TipByBorough[] = [
  {
    "borough": "Manhattan",
    "weekday": 3.55,
    "weekend": 3.37,
    "cardTrips": 2189720
  },
  {
    "borough": "Queens",
    "weekday": 11.11,
    "weekend": 11.03,
    "cardTrips": 194398
  },
  {
    "borough": "Brooklyn",
    "weekday": 1.02,
    "weekend": 2.01,
    "cardTrips": 21707
  },
  {
    "borough": "Bronx",
    "weekday": 0.29,
    "weekend": 0.39,
    "cardTrips": 5356
  },
  {
    "borough": "Staten Island",
    "weekday": 9.09,
    "weekend": 16.94,
    "cardTrips": 8
  }
];

export const TIP_OVERALL_AVERAGE = 3.10;
