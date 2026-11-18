/**
 * Bins para los histogramas de distribución de distancia y tarifa base.
 * Distribución calibrada con la distancia promedio real de 3.14 mi
 * (mediana 1.70 mi → distribución sesgada a la derecha).
 *
 * Las frecuencias representan porcentaje del total de viajes.
 */
import type { HistogramBin } from '../types';

export const histogramData: HistogramBin[] = [
  { binLabel: '0–1',    distanceCount: 28.5, fareCount: 15.2 },
  { binLabel: '1–2',    distanceCount: 24.3, fareCount: 22.8 },
  { binLabel: '2–3',    distanceCount: 16.8, fareCount: 25.1 },
  { binLabel: '3–5',    distanceCount: 14.2, fareCount: 18.6 },
  { binLabel: '5–7',    distanceCount: 7.8,  fareCount: 9.4  },
  { binLabel: '7–10',   distanceCount: 4.5,  fareCount: 5.2  },
  { binLabel: '10–15',  distanceCount: 2.6,  fareCount: 2.5  },
  { binLabel: '15+',    distanceCount: 1.3,  fareCount: 1.2  },
];

/** Etiquetas para los ejes */
export const HISTOGRAM_LABELS = {
  distance: { title: 'Distancia (millas)', median: 1.70 },
  fare:     { title: 'Tarifa base (USD)',   median: 9.50 },
};
