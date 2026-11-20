/** Tipos compartidos del dashboard NYC Taxi Analytics */

/** Filtros globales del dashboard */
export interface DashboardFilters {
  borough: string;        // 'Todos' | 'Manhattan' | 'Brooklyn' | 'Queens' | 'Bronx' | 'Staten Island'
  timeType: string;       // 'Todos' | 'Hora Pico' | 'Hora Valle'
  dayType: string;        // 'Todos' | 'Laboral' | 'Fin de Semana'
}

/** KPI individual */
export interface KPIData {
  id: string;
  label: string;
  value: string;
  subtitle: string;
  insight: string;
  accentColor?: 'taxi' | 'transit' | 'metro';
  change?: string;
  changeType?: 'up' | 'down' | 'neutral';
}

/** Dato por hora para la serie temporal */
export interface HourlyDataPoint {
  hour: number;           // 0–23
  label: string;          // "00h", "01h", ...
  tripsWeekday: number;   // promedio diario de viajes a esa hora (día laboral)
  tripsWeekend: number;   // promedio diario de viajes a esa hora (fin de semana)
  durationWeekday: number; // minutos promedio
  durationWeekend: number;
  isPeak: boolean;
}

/** Dato de zona para el mapa coroplético (263 zonas TLC) */
export interface ZoneData {
  locationId: number;
  borough: string;
  zone: string;
  serviceZone: string;
  pickups: number;
  avgDuration: number;    // minutos
  avgFarePerMile: number; // USD/milla
}

/** Dato del boxplot (duración hora pico vs. valle) */
export interface BoxplotDataPoint {
  id: 'peak' | 'offpeak';
  category: string;       // "Hora Pico" | "Hora Valle"
  schedule: string;       // "7–9 h y 16–19 h" | "Resto del día"
  min: number;
  q1: number;
  median: number;
  q3: number;
  max: number;
  mean: number;
  outliers: number[];
}

/** Bin de histograma individual (Distancia o Tarifa) */
export interface HistogramBin {
  binLabel: string;
  count: number;
  pct: number;            // Porcentaje del total de viajes
}

/** Propina por distrito */
export interface TipByBorough {
  borough: string;
  weekday: number;        // Propina promedio día laboral (USD)
  weekend: number;        // Propina promedio fin de semana (USD)
  cardTrips: number;      // Cantidad de viajes con tarjeta (tamaño de muestra)
}
