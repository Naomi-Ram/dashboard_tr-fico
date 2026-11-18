/**
 * GroupedBarChart — Propina por distrito y tipo de día (Fila 3, Col 3).
 *
 * Implementa "BARRAS AGRUPADAS: PROPINA POR DISTRITO Y DÍA" del wireframe.
 * Dos barras por distrito: Día laboral (naranja) y Fin de semana (teal).
 *
 * Propina promedio general: $3.10 USD (mediana $2.60) — solo pagos con tarjeta.
 */
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
} from 'recharts';
import { tipsByBoroughData } from '../../data/tipsByBoroughData';
import { COLORS } from '../../styles/colors';

const GroupedBarChart: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 h-full flex flex-col">
      {/* Título */}
      <div className="mb-3">
        <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide">
          Barras Agrupadas: Propina por Distrito y Día
        </h3>
        <p className="text-xs text-gray-400 mt-0.5">
          Fila 3, Columna 3 | Información Complementaria y Leyendas
        </p>
      </div>

      {/* Gráfico */}
      <div className="flex-1 min-h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={tipsByBoroughData}
            margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis
              dataKey="borough"
              tick={{ fontSize: 10, fill: '#6B7280' }}
              tickLine={false}
              axisLine={{ stroke: '#D1D5DB' }}
              label={{
                value: 'Distritos (Boroughs de Nueva York)',
                position: 'insideBottom',
                offset: -15,
                style: { fontSize: 10, fill: '#9CA3AF' },
              }}
            />
            <YAxis
              tick={{ fontSize: 11, fill: '#6B7280' }}
              tickLine={false}
              axisLine={false}
              domain={[0, 4]}
              label={{
                value: 'Propina prom. (USD)',
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
              formatter={(value: number, name: string) => {
                const label = name === 'weekday' ? 'Día Laboral' : 'Fin de Semana';
                return [`USD ${value.toFixed(2)}`, label];
              }}
            />
            <Legend
              formatter={(value: string) => {
                const labels: Record<string, string> = {
                  weekday: `Día Laboral (USD)`,
                  weekend: `Fin de Semana (USD)`,
                };
                return <span className="text-xs">{labels[value] ?? value}</span>;
              }}
            />

            {/* Línea de referencia: propina promedio general */}
            <ReferenceLine
              y={3.1}
              stroke={COLORS.accent}
              strokeWidth={1.5}
              strokeDasharray="5 5"
              label={{
                value: 'Promedio: $3.10',
                position: 'right',
                fill: COLORS.accent,
                fontSize: 10,
              }}
            />

            <Bar
              dataKey="weekday"
              fill={COLORS.accent}
              fillOpacity={0.85}
              radius={[4, 4, 0, 0]}
              barSize={22}
            />
            <Bar
              dataKey="weekend"
              fill={COLORS.teal}
              fillOpacity={0.8}
              radius={[4, 4, 0, 0]}
              barSize={22}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GroupedBarChart;
