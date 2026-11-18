/**
 * TimeSeriesChart — Serie temporal de flujo y duración (Fila 2, Col 3).
 *
 * Implementa "SERIE TEMPORAL: FLUJO Y DURACIÓN (0–23 H)" del wireframe.
 * - Eje X: Hora del día (00h – 23h)
 * - Eje Y izquierdo: Duración promedio (minutos)
 * - Áreas: Día laboral (naranja) y Fin de semana (teal)
 * - Franjas verticales sombreadas para las horas pico (7–9h y 16–19h)
 *
 * Gráfico: Recharts AreaChart con dos áreas superpuestas.
 */
import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea,
  Legend,
} from 'recharts';
import { hourlyData } from '../../data/hourlyData';
import { COLORS } from '../../styles/colors';

interface TimeSeriesChartProps {
  filterDayType: string;
}

const TimeSeriesChart: React.FC<TimeSeriesChartProps> = ({ filterDayType }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 h-full flex flex-col">
      {/* Título */}
      <div className="mb-3">
        <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide">
          Serie Temporal: Flujo y Duración (0–23 H)
        </h3>
        <p className="text-xs text-gray-400 mt-0.5">
          Fila 2, Columna 3 | Tendencia Horaria — Minutos promedio de traslado
        </p>
      </div>

      {/* Gráfico */}
      <div className="flex-1 min-h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={hourlyData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />

            {/* Franjas de hora pico (fondo sombreado) */}
            <ReferenceArea x1="07h" x2="09h" fill={COLORS.accent} fillOpacity={0.08} />
            <ReferenceArea x1="16h" x2="19h" fill={COLORS.accent} fillOpacity={0.08} />

            <XAxis
              dataKey="label"
              tick={{ fontSize: 11, fill: '#6B7280' }}
              tickLine={false}
              axisLine={{ stroke: '#D1D5DB' }}
            />
            <YAxis
              tick={{ fontSize: 11, fill: '#6B7280' }}
              tickLine={false}
              axisLine={false}
              label={{
                value: 'Duración (min)',
                angle: -90,
                position: 'insideLeft',
                offset: 10,
                style: { fontSize: 11, fill: '#9CA3AF' },
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: COLORS.primary,
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                fontSize: '12px',
              }}
              labelStyle={{ color: '#94A3B8', fontWeight: 'bold' }}
              formatter={(value: number, name: string) => {
                const label = name === 'durationWeekday'
                  ? 'Día Laboral'
                  : name === 'durationWeekend'
                  ? 'Fin de Semana'
                  : name;
                return [`${value.toFixed(1)} min`, label];
              }}
            />
            <Legend
              formatter={(value: string) => {
                const labels: Record<string, string> = {
                  durationWeekday: '● Día Laboral (Pico)',
                  durationWeekend: '● Fin de Semana (Valle)',
                };
                return <span className="text-xs">{labels[value] ?? value}</span>;
              }}
            />

            {/* Área día laboral */}
            {(filterDayType === 'Todos' || filterDayType === 'Laboral') && (
              <Area
                type="monotone"
                dataKey="durationWeekday"
                stroke={COLORS.accent}
                strokeWidth={2.5}
                fill={COLORS.accent}
                fillOpacity={0.15}
                dot={false}
                activeDot={{ r: 5, fill: COLORS.accent }}
              />
            )}

            {/* Área fin de semana */}
            {(filterDayType === 'Todos' || filterDayType === 'Fin de Semana') && (
              <Area
                type="monotone"
                dataKey="durationWeekend"
                stroke={COLORS.teal}
                strokeWidth={2.5}
                fill={COLORS.teal}
                fillOpacity={0.1}
                dot={false}
                activeDot={{ r: 5, fill: COLORS.teal }}
              />
            )}
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Nota de hora pico */}
      <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: COLORS.accent, opacity: 0.2 }} />
          <span>Franja Hora Pico (7–9h y 16–19h)</span>
        </div>
        <span>Hora del día (00:00 a 23:00 h)</span>
      </div>
    </div>
  );
};

export default TimeSeriesChart;
