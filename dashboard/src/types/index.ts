/** Tipos compartidos del dashboard NYC Taxi */

/** Filtros globales del dashboard */
export interface DashboardFilters {
  borough: string;        // 'Todos' | nombre del borough
  timeType: string;       // 'Todos' | 'Hora Pico' | 'Hora Valle'
  dayType: string;        // 'Todos' | 'Laboral' | 'Fin de Semana'
}

/** KPI individual */
export interface KPIData {
  id: string;
  label: string;
  value: string;
  subtitle: string;
  icon?: string;
  change?: string;        // e.g., "+5.2% en Hora Pico"
  changeType?: 'up' | 'down' | 'neutral';
}

/** Dato por hora para la serie temporal */
export interface HourlyDataPoint {
  hour: number;           // 0–23
  label: string;          // "00h", "01h", ...
  tripsWeekday: number;
  tripsWeekend: number;
  durationWeekday: number;  // minutos promedio
  durationWeekend: number;
  isPeak: boolean;
}

/** Dato de zona para el mapa coroplético */
export interface ZoneData {
  locationId: number;
  borough: string;
  zone: string;
  serviceZone: string;
  pickups: number;
  avgDuration: number;    // minutos
  avgFarePerMile: number; // USD
}

/** Dato del boxplot (duración hora pico vs. valle) */
export interface BoxplotDataPoint {
  category: string;       // "Hora Pico" | "Hora Valle"
  min: number;
  q1: number;
  median: number;
  q3: number;
  max: number;
  outliers: number[];
}

/** Bin del histograma */
export interface HistogramBin {
  binLabel: string;
  distanceCount: number;   // Número de viajes en ese rango de distancia
  fareCount: number;       // Número de viajes en ese rango de tarifa
}

/** Propina por distrito */
export interface TipByBorough {
  borough: string;
  weekday: number;    // Propina promedio día laboral
  weekend: number;    // Propina promedio fin de semana
}

/** Feature de GeoJSON simplificado para zonas */
export interface ZoneFeature {
  type: 'Feature';
  properties: {
    LocationID: number;
    borough: string;
    zone: string;
    pickups: number;
    avgDuration: number;
    farePerMile: number;
  };
  geometry: {
    type: string;
    coordinates: number[][][] | number[][][][];
  };
}

export interface ZoneGeoJSON {
  type: 'FeatureCollection';
  features: ZoneFeature[];
}
