/**
 * BoxplotChart — Duración en Hora Pico vs. Valle (Fila 3, Col 1).
 *
 * Implementa "BOXPLOT: DURACIÓN EN HORA PICO VS. VALLE" del wireframe.
 * Recharts no tiene un boxplot nativo, así que se construye con
 * ComposedChart + barras apiladas para representar Q1, mediana, Q3
 * y líneas para los bigotes (whiskers).
 *
 * Etiquetas: Q1, Mediana, Q3 y Rango Intercuartil.
 */
import React from 'react';
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  ErrorBar,
  Tooltip,
} from 'recharts';
import { boxplotData } from '../../data/boxplotData';
import { COLORS } from '../../styles/colors';

const BoxplotChart: React.FC = () => {
  // Transformar datos para Recharts:
  // La barra va de Q1 a Q3, con la mediana marcada
  const chartData = boxplotData.map((d) => ({
    category: d.category.replace('\n', ' '),
    // La barra visible va de Q1 a Q3
    base: d.q1,              // inicio invisible
    iqr: d.q3 - d.q1,        // rango intercuartil (parte visible)
    median: d.median,
    min: d.min,
    max: d.max,
    q1: d.q1,
    q3: d.q3,
    // ErrorBar: distancia desde q1 al min, y desde q3 al max
    whiskerDown: d.q1 - d.min,
    whiskerUp: d.max - d.q3,
  }));

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 h-full flex flex-col">
      {/* Título */}
      <div className="mb-3">
        <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide">
          Boxplot: Duración en Hora Pico vs. Valle
        </h3>
        <p className="text-xs text-gray-400 mt-0.5">
          Fila 3, Columna 1 | Dispersión y Cuartiles (Q1, Mediana, Q3)
        </p>
      </div>

      {/* Gráfico */}
      <div className="flex-1 min-h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={chartData} margin={{ top: 20, right: 20, left: 10, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis
              dataKey="category"
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
              formatter={(_value: number, _name: string, props: any) => {
                const p = props?.payload;
                if (!p) return [String(_value), 'Valor'];
                return [
                  `Min: ${p.min} | Q1: ${p.q1} | Med: ${p.median} | Q3: ${p.q3} | Max: ${p.max}`,
                  'Distribución',
                ];
              }}
            />

            {/* Barra invisible para elevar la base a Q1 */}
            <Bar dataKey="base" stackId="box" fill="transparent" barSize={60} />

            {/* Barra visible: IQR (Q1 a Q3) */}
            <Bar dataKey="iqr" stackId="box" barSize={60} radius={[4, 4, 4, 4]}>
              {chartData.map((_, idx) => (
                <Cell
                  key={idx}
                  fill={idx === 0 ? COLORS.accent : COLORS.teal}
                  fillOpacity={0.8}
                />
              ))}
              <ErrorBar
                dataKey="whiskerUp"
                direction="y"
                width={20}
                stroke="#374151"
                strokeWidth={1.5}
              />
            </Bar>
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Leyenda manual con valores */}
      <div className="grid grid-cols-2 gap-2 mt-2 text-xs text-gray-500">
        {boxplotData.map((d, i) => (
          <div key={i} className="flex items-start gap-2">
            <div
              className="w-3 h-3 rounded-sm mt-0.5 flex-shrink-0"
              style={{ backgroundColor: i === 0 ? COLORS.accent : COLORS.teal }}
            />
            <div>
              <p className="font-semibold text-gray-700">{d.category.replace('\n', ' ')}</p>
              <p>
                Q1: {d.q1} | Med: <strong>{d.median}</strong> | Q3: {d.q3}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxplotChart;
