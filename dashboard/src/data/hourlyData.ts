/**
 * Serie horaria real (00h–23h) — enero 2025 (yellow_tripdata_2025-01.parquet).
 * tripsWeekday / tripsWeekend: promedio de viajes por hora en un día laboral vs. fin de semana.
 * durationWeekday / durationWeekend: duración promedio del viaje en minutos.
 * isPeak: franjas de hora pico (7–9 h y 16–19 h) definidas en Fase 2.
 */
import type { HourlyDataPoint } from '../types';

export const hourlyData: HourlyDataPoint[] = [
  {
    "hour": 0,
    "label": "00h",
    "tripsWeekday": 1717,
    "tripsWeekend": 5802,
    "durationWeekday": 14.32,
    "durationWeekend": 12.58,
    "isPeak": false
  },
  {
    "hour": 1,
    "label": "01h",
    "tripsWeekday": 988,
    "tripsWeekend": 4538,
    "durationWeekday": 14.07,
    "durationWeekend": 11.72,
    "isPeak": false
  },
  {
    "hour": 2,
    "label": "02h",
    "tripsWeekday": 632,
    "tripsWeekend": 3162,
    "durationWeekday": 13.47,
    "durationWeekend": 11.34,
    "isPeak": false
  },
  {
    "hour": 3,
    "label": "03h",
    "tripsWeekday": 424,
    "tripsWeekend": 1940,
    "durationWeekday": 13.41,
    "durationWeekend": 11.49,
    "isPeak": false
  },
  {
    "hour": 4,
    "label": "04h",
    "tripsWeekday": 411,
    "tripsWeekend": 1029,
    "durationWeekday": 15.45,
    "durationWeekend": 12.63,
    "isPeak": false
  },
  {
    "hour": 5,
    "label": "05h",
    "tripsWeekday": 716,
    "tripsWeekend": 477,
    "durationWeekday": 16.35,
    "durationWeekend": 15.58,
    "isPeak": false
  },
  {
    "hour": 6,
    "label": "06h",
    "tripsWeekday": 1738,
    "tripsWeekend": 776,
    "durationWeekday": 15.85,
    "durationWeekend": 14.44,
    "isPeak": false
  },
  {
    "hour": 7,
    "label": "07h",
    "tripsWeekday": 3769,
    "tripsWeekend": 1173,
    "durationWeekday": 15.67,
    "durationWeekend": 13.99,
    "isPeak": true
  },
  {
    "hour": 8,
    "label": "08h",
    "tripsWeekday": 5131,
    "tripsWeekend": 1859,
    "durationWeekday": 15.43,
    "durationWeekend": 12.48,
    "isPeak": true
  },
  {
    "hour": 9,
    "label": "09h",
    "tripsWeekday": 4895,
    "tripsWeekend": 2961,
    "durationWeekday": 15.31,
    "durationWeekend": 11.74,
    "isPeak": true
  },
  {
    "hour": 10,
    "label": "10h",
    "tripsWeekday": 4764,
    "tripsWeekend": 4054,
    "durationWeekday": 15.66,
    "durationWeekend": 11.72,
    "isPeak": false
  },
  {
    "hour": 11,
    "label": "11h",
    "tripsWeekday": 4955,
    "tripsWeekend": 4908,
    "durationWeekday": 15.77,
    "durationWeekend": 12.26,
    "isPeak": false
  },
  {
    "hour": 12,
    "label": "12h",
    "tripsWeekday": 5337,
    "tripsWeekend": 5556,
    "durationWeekday": 15.62,
    "durationWeekend": 13.08,
    "isPeak": false
  },
  {
    "hour": 13,
    "label": "13h",
    "tripsWeekday": 5586,
    "tripsWeekend": 6081,
    "durationWeekday": 15.86,
    "durationWeekend": 14.14,
    "isPeak": false
  },
  {
    "hour": 14,
    "label": "14h",
    "tripsWeekday": 6166,
    "tripsWeekend": 6315,
    "durationWeekday": 16.71,
    "durationWeekend": 14.66,
    "isPeak": false
  },
  {
    "hour": 15,
    "label": "15h",
    "tripsWeekday": 6608,
    "tripsWeekend": 6355,
    "durationWeekday": 16.87,
    "durationWeekend": 15.18,
    "isPeak": false
  },
  {
    "hour": 16,
    "label": "16h",
    "tripsWeekday": 6435,
    "tripsWeekend": 6576,
    "durationWeekday": 16.65,
    "durationWeekend": 15.67,
    "isPeak": true
  },
  {
    "hour": 17,
    "label": "17h",
    "tripsWeekday": 7539,
    "tripsWeekend": 6539,
    "durationWeekday": 15.44,
    "durationWeekend": 15.27,
    "isPeak": true
  },
  {
    "hour": 18,
    "label": "18h",
    "tripsWeekday": 7806,
    "tripsWeekend": 6553,
    "durationWeekday": 13.99,
    "durationWeekend": 14.5,
    "isPeak": true
  },
  {
    "hour": 19,
    "label": "19h",
    "tripsWeekday": 6503,
    "tripsWeekend": 5980,
    "durationWeekday": 13.36,
    "durationWeekend": 14.6,
    "isPeak": true
  },
  {
    "hour": 20,
    "label": "20h",
    "tripsWeekday": 6240,
    "tripsWeekend": 4995,
    "durationWeekday": 13.27,
    "durationWeekend": 14.14,
    "isPeak": false
  },
  {
    "hour": 21,
    "label": "21h",
    "tripsWeekday": 6608,
    "tripsWeekend": 5132,
    "durationWeekday": 13.4,
    "durationWeekend": 13.91,
    "isPeak": false
  },
  {
    "hour": 22,
    "label": "22h",
    "tripsWeekday": 5538,
    "tripsWeekend": 5260,
    "durationWeekday": 13.81,
    "durationWeekend": 14.21,
    "isPeak": false
  },
  {
    "hour": 23,
    "label": "23h",
    "tripsWeekday": 3736,
    "tripsWeekend": 5025,
    "durationWeekday": 13.75,
    "durationWeekend": 13.92,
    "isPeak": false
  }
];
