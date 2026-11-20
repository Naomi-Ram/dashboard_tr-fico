/**
 * Histogramas de frecuencia reales (enero 2025) separados por variable
 * para que cada distribución conserve sus propios intervalos (bins) y mediana.
 */
import type { HistogramBin } from '../types';

export const distanceHistogramData: HistogramBin[] = [
  {
    "binLabel": "0–1",
    "count": 742957,
    "pct": 23.1
  },
  {
    "binLabel": "1–2",
    "count": 1100313,
    "pct": 34.2
  },
  {
    "binLabel": "2–3",
    "count": 518479,
    "pct": 16.1
  },
  {
    "binLabel": "3–5",
    "count": 361607,
    "pct": 11.2
  },
  {
    "binLabel": "5–10",
    "count": 273050,
    "pct": 8.5
  },
  {
    "binLabel": "10–15",
    "count": 94691,
    "pct": 2.9
  },
  {
    "binLabel": "15+",
    "count": 130786,
    "pct": 4.1
  }
];

export const fareHistogramData: HistogramBin[] = [
  {
    "binLabel": "$0–8",
    "count": 667355,
    "pct": 20.7
  },
  {
    "binLabel": "$8–12",
    "count": 763711,
    "pct": 23.7
  },
  {
    "binLabel": "$12–16",
    "count": 642038,
    "pct": 19.9
  },
  {
    "binLabel": "$16–22",
    "count": 480133,
    "pct": 14.9
  },
  {
    "binLabel": "$22–30",
    "count": 252151,
    "pct": 7.8
  },
  {
    "binLabel": "$30–50",
    "count": 246078,
    "pct": 7.6
  },
  {
    "binLabel": "$50+",
    "count": 170417,
    "pct": 5.3
  }
];

export const HISTOGRAM_META = {
  distance: {
    title: 'Distancia del viaje (millas)',
    unit: 'mi',
    medianValue: 1.70,
    medianBin: '1–2',
    medianLabel: 'Mediana: 1.70 mi',
    insight: '73.4% de los viajes son cortos (< 3 mi)',
  },
  fare: {
    title: 'Tarifa base del viaje (USD)',
    unit: 'USD',
    medianValue: 12.8,
    medianBin: '$12–16',
    medianLabel: 'Mediana: $12.80',
    insight: '64.3% de los viajes cuestan menos de $16',
  },
} as const;
