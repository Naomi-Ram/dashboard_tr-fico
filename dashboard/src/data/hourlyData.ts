/**
 * Datos horarios simulados (0–23 h) para la serie temporal.
 * Basados en los patrones típicos de tráfico de yellow taxi en Manhattan,
 * calibrados con los indicadores reales: 3,202,368 viajes / 31 días ≈ 103,300/día.
 *
 * isPeak: horas 7–9 y 16–19 (hora pico documentada en Fase 2).
 */
import type { HourlyDataPoint } from '../types';

export const hourlyData: HourlyDataPoint[] = [
  { hour: 0,  label: '00h', tripsWeekday: 2800,  tripsWeekend: 4100,  durationWeekday: 11.2, durationWeekend: 10.8, isPeak: false },
  { hour: 1,  label: '01h', tripsWeekday: 1900,  tripsWeekend: 3400,  durationWeekday: 10.5, durationWeekend: 10.1, isPeak: false },
  { hour: 2,  label: '02h', tripsWeekday: 1200,  tripsWeekend: 2800,  durationWeekday: 9.8,  durationWeekend: 9.5,  isPeak: false },
  { hour: 3,  label: '03h', tripsWeekday: 850,   tripsWeekend: 2100,  durationWeekday: 9.2,  durationWeekend: 9.0,  isPeak: false },
  { hour: 4,  label: '04h', tripsWeekday: 780,   tripsWeekend: 1500,  durationWeekday: 9.0,  durationWeekend: 8.8,  isPeak: false },
  { hour: 5,  label: '05h', tripsWeekday: 1100,  tripsWeekend: 1100,  durationWeekday: 10.1, durationWeekend: 9.4,  isPeak: false },
  { hour: 6,  label: '06h', tripsWeekday: 2600,  tripsWeekend: 1400,  durationWeekday: 12.5, durationWeekend: 10.2, isPeak: false },
  { hour: 7,  label: '07h', tripsWeekday: 5200,  tripsWeekend: 2100,  durationWeekday: 15.8, durationWeekend: 11.5, isPeak: true },
  { hour: 8,  label: '08h', tripsWeekday: 7100,  tripsWeekend: 2800,  durationWeekday: 17.2, durationWeekend: 12.3, isPeak: true },
  { hour: 9,  label: '09h', tripsWeekday: 6800,  tripsWeekend: 3500,  durationWeekday: 16.5, durationWeekend: 12.8, isPeak: true },
  { hour: 10, label: '10h', tripsWeekday: 5900,  tripsWeekend: 4200,  durationWeekday: 14.8, durationWeekend: 13.1, isPeak: false },
  { hour: 11, label: '11h', tripsWeekday: 5600,  tripsWeekend: 4800,  durationWeekday: 14.2, durationWeekend: 13.5, isPeak: false },
  { hour: 12, label: '12h', tripsWeekday: 5800,  tripsWeekend: 5200,  durationWeekday: 14.5, durationWeekend: 13.8, isPeak: false },
  { hour: 13, label: '13h', tripsWeekday: 5500,  tripsWeekend: 5100,  durationWeekday: 14.8, durationWeekend: 14.0, isPeak: false },
  { hour: 14, label: '14h', tripsWeekday: 5700,  tripsWeekend: 5300,  durationWeekday: 15.5, durationWeekend: 14.2, isPeak: false },
  { hour: 15, label: '15h', tripsWeekday: 5400,  tripsWeekend: 5000,  durationWeekday: 15.8, durationWeekend: 14.0, isPeak: false },
  { hour: 16, label: '16h', tripsWeekday: 5900,  tripsWeekend: 5100,  durationWeekday: 16.5, durationWeekend: 14.5, isPeak: true },
  { hour: 17, label: '17h', tripsWeekday: 7400,  tripsWeekend: 5500,  durationWeekday: 17.8, durationWeekend: 15.0, isPeak: true },
  { hour: 18, label: '18h', tripsWeekday: 7800,  tripsWeekend: 5800,  durationWeekday: 17.2, durationWeekend: 14.8, isPeak: true },
  { hour: 19, label: '19h', tripsWeekday: 7200,  tripsWeekend: 5900,  durationWeekday: 16.0, durationWeekend: 14.2, isPeak: true },
  { hour: 20, label: '20h', tripsWeekday: 5800,  tripsWeekend: 5600,  durationWeekday: 14.2, durationWeekend: 13.5, isPeak: false },
  { hour: 21, label: '21h', tripsWeekday: 5200,  tripsWeekend: 5800,  durationWeekday: 13.5, durationWeekend: 13.0, isPeak: false },
  { hour: 22, label: '22h', tripsWeekday: 4600,  tripsWeekend: 5900,  durationWeekday: 12.8, durationWeekend: 12.5, isPeak: false },
  { hour: 23, label: '23h', tripsWeekday: 3700,  tripsWeekend: 5200,  durationWeekday: 12.0, durationWeekend: 11.8, isPeak: false },
];
