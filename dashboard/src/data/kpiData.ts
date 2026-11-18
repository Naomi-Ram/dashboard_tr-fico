/**
 * Datos de los KPIs del dashboard.
 * Valores reales calculados del archivo yellow_tripdata_2025-01.parquet
 * (3,202,368 viajes válidos de enero 2025).
 *
 * Fuente: README.md del proyecto — indicadores ya procesados.
 */
import type { KPIData } from '../types';

export const KPI_PRINCIPAL: KPIData = {
  id: 'duration',
  label: 'Duración Promedio de Viaje',
  value: '14.65 min',
  subtitle: 'Mediana ref.: 11.68 min  |  Velocidad media: 12.9 mph (-8% en hora punta)',
  change: '+3.5% en Hora Pico',
  changeType: 'up',
};

export const KPIS_SECONDARY: KPIData[] = [
  {
    id: 'distance',
    label: 'Distancia Promedio',
    value: '3.14 mi',
    subtitle: 'Mediana: 1.70 mi\n75% viajes <= 3.8 mi',
  },
  {
    id: 'farePerMile',
    label: 'Tarifa Prom. / Milla',
    value: 'USD 7.88 /mi',
    subtitle: 'Pico: USD 8.14 | Valle: 7.52\nImpacto tarifario: +4.1%',
  },
  {
    id: 'topZone',
    label: 'Zona Mayor Demanda',
    value: 'Midtown Center',
    subtitle: '159,790 viajes (4.99%)\nConcentración Pickup #1',
  },
  {
    id: 'avgTip',
    label: 'Propina Promedio',
    value: 'USD 3.10',
    subtitle: 'Pagos con tarjeta\nPico: USD 3.28 | Valle: 2.90',
  },
];

/** Totales generales para el subtítulo del dashboard */
export const TOTALS = {
  totalTrips: 3_202_368,
  totalZones: 263,
  month: 'Enero 2025',
  source: 'NYC TLC — Yellow Taxi Trip Records',
};
