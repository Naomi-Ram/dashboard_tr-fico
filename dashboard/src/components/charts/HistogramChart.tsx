/**
 * HistogramChart — Distribución de distancias y tarifas (Fila 3, Col 2).
 *
 * Implementa "HISTOGRAMAS: DISTRIBUCIÓN DE TARIFAS Y DISTANCIAS" del wireframe.
 * Dos series de barras superpuestas (distancia en naranja, tarifa en teal)
 * con una línea vertical de mediana de referencia.
 *
 * Eje X: Intervalos de clase (bins).
 * Eje Y: Frecuencia (% viajes).
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
import { histogramData } from '../../data/histogramData';
import { COLORS } from '../../styles/colors';

const HistogramChart: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 h-full flex flex-col">
      {/* Título */}
      <div className="mb-3">
        <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide">
          Histogramas: Distribución de Tarifas y Distancias
        </h3>
        <p className="text-xs text-gray-400 mt-0.5">
          Fila 3, Columna 2 | Concentración por Intervalos (Bins)
        </p>
      </div>

      {/* Gráfico */}
      <div className="flex-1 min-h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={histogramData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis
              dataKey="binLabel"
              tick={{ fontSize: 11, fill: '#6B7280' }}
              tickLine={false}
              axisLine={{ stroke: '#D1D5DB' }}
              label={{
                value: 'Intervalos de clase (Bins: Corto a Largo)',
                position: 'insideBottom',
                offset: -15,
                style: { fontSize: 10, fill: '#9CA3AF' },
              }}
            />
            <YAxis
              tick={{ fontSize: 11, fill: '#6B7280' }}
              tickLine={false}
              axisLine={false}
              label={{
                value: 'Frecuencia (% viajes)',
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
                const label = name === 'distanceCount' ? 'Distancia (mi)' : 'Tarifa base (USD)';
                return [`${value.toFixed(1)}%`, label];
              }}
            />
            <Legend
              formatter={(value: string) => {
                const labels: Record<string, string> = {
                  distanceCount: 'Distancia (Intervalos mi)',
                  fareCount: 'Tarifa base (Intervalos USD)',
                };
                return <span className="text-xs">{labels[value] ?? value}</span>;
              }}
            />

            {/* Línea de mediana de referencia */}
            <ReferenceLine
              x="1–2"
              stroke={COLORS.accent}
              strokeWidth={2}
              strokeDasharray="5 5"
              label={{
                value: 'Mediana dist: 1.70 mi',
                position: 'top',
                fill: COLORS.accent,
                fontSize: 10,
              }}
            />

            <Bar
              dataKey="distanceCount"
              fill={COLORS.accent}
              fillOpacity={0.85}
              radius={[3, 3, 0, 0]}
              barSize={30}
            />
            <Bar
              dataKey="fareCount"
              fill={COLORS.teal}
              fillOpacity={0.7}
              radius={[3, 3, 0, 0]}
              barSize={30}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HistogramChart;
