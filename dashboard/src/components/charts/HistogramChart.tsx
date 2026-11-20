/**
 * HistogramChart — Distribución de frecuencias separada por variable (Fila 3, Col 2).
 *
 * Alterna entre Distancia (millas) y Tarifa base (USD), y responde dinámicamente a
 * filterBorough y filterTimeType usando las agregaciones reales de enero 2025.
 */
import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import { HISTOGRAM_BY_FILTER } from '../../data/filteredAggregations';
import { COLORS } from '../../styles/colors';

type MetricMode = 'distance' | 'fare';

interface HistogramChartProps {
  filterBorough: string;
  filterTimeType: string;
}

const HistogramChart: React.FC<HistogramChartProps> = ({
  filterBorough,
  filterTimeType,
}) => {
  const [mode, setMode] = useState<MetricMode>('distance');

  const key = `${filterBorough}|${filterTimeType}`;
  const dataset = HISTOGRAM_BY_FILTER[key] ?? HISTOGRAM_BY_FILTER['Todos|Todos'];

  const data = mode === 'distance' ? dataset.distance : dataset.fare;
  const barColor = mode === 'distance' ? COLORS.metro : COLORS.transit;
  const medianBin = mode === 'distance' ? dataset.medDistBin : dataset.medFareBin;
  const medianLabel =
    mode === 'distance'
      ? `Mediana: ${dataset.medDist.toFixed(2)} mi`
      : `Mediana: $${dataset.medFare.toFixed(2)}`;
  const insight =
    mode === 'distance'
      ? `${dataset.under3Pct.toFixed(1)}% de los viajes son cortos (< 3 mi)`
      : `${dataset.under16Pct.toFixed(1)}% de los viajes cuestan menos de $16`;

  const scopeNote =
    filterBorough === 'Todos' && filterTimeType === 'Todos'
      ? mode === 'distance'
        ? 'Distancia del viaje (millas)'
        : 'Tarifa base del viaje (USD)'
      : `${filterBorough === 'Todos' ? 'NYC' : filterBorough}${
          filterTimeType !== 'Todos' ? ` · ${filterTimeType}` : ''
        } · ${mode === 'distance' ? 'Millas' : 'USD'}`;

  return (
    <div className="bg-card rounded-xl shadow-card p-4 lg:p-5 h-full flex flex-col">
      {/* Encabezado + Toggle */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div>
          <h3 className="text-[15px] font-bold text-ink tracking-tight">
            ¿Cómo se distribuyen distancias y tarifas?
          </h3>
          <p className="text-xs text-ink-tertiary mt-0.5">
            {scopeNote} · Porcentaje del total de viajes
          </p>
        </div>

        <div
          role="group"
          aria-label="Seleccionar variable del histograma"
          className="inline-flex p-0.5 rounded-md bg-canvas border border-slate-200/80 flex-shrink-0"
        >
          <button
            type="button"
            onClick={() => setMode('distance')}
            aria-pressed={mode === 'distance'}
            className={`px-2.5 py-1 text-[11px] font-semibold rounded-[5px] transition-colors ${
              mode === 'distance'
                ? 'bg-asphalt text-white shadow-sm'
                : 'text-ink-tertiary hover:text-ink'
            }`}
          >
            Distancia
          </button>
          <button
            type="button"
            onClick={() => setMode('fare')}
            aria-pressed={mode === 'fare'}
            className={`px-2.5 py-1 text-[11px] font-semibold rounded-[5px] transition-colors ${
              mode === 'fare'
                ? 'bg-asphalt text-white shadow-sm'
                : 'text-ink-tertiary hover:text-ink'
            }`}
          >
            Tarifa
          </button>
        </div>
      </div>

      {/* Gráfico */}
      <div className="flex-1 min-h-[245px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 8, left: -14, bottom: 4 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={COLORS.gridLine} vertical={false} />

            <XAxis
              dataKey="binLabel"
              tick={{ fontSize: 11, fill: COLORS.inkTertiary, fontFamily: 'JetBrains Mono' }}
              tickLine={false}
              axisLine={{ stroke: COLORS.axisLine }}
            />

            <YAxis
              tick={{ fontSize: 11, fill: COLORS.inkTertiary, fontFamily: 'JetBrains Mono' }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => `${v}%`}
            />

            <Tooltip
              cursor={{ fill: 'rgba(15, 23, 42, 0.04)' }}
              contentStyle={{
                backgroundColor: COLORS.asphalt,
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '8px',
                color: '#F8FAFC',
                fontSize: '12px',
              }}
              labelStyle={{ color: '#94A3B8', fontWeight: 700, marginBottom: '4px' }}
              labelFormatter={(label) =>
                mode === 'distance' ? `Rango: ${label} millas` : `Rango: ${label} USD`
              }
              formatter={(value: number, _name: string, props: { payload?: { count?: number } }) => {
                const cnt = props?.payload?.count;
                const extra = cnt ? ` (${cnt.toLocaleString('es-MX')} viajes)` : '';
                return [`${value.toFixed(1)}%${extra}`, 'Frecuencia'];
              }}
            />

            <ReferenceLine
              x={medianBin}
              stroke={COLORS.taxi}
              strokeWidth={1.8}
              strokeDasharray="4 4"
              label={{
                value: medianLabel,
                position: 'top',
                fill: COLORS.taxi,
                fontSize: 10.5,
                fontWeight: 700,
              }}
            />

            <Bar
              dataKey="pct"
              fill={barColor}
              fillOpacity={0.85}
              radius={[4, 4, 0, 0]}
              maxBarSize={36}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Insight al pie */}
      <div className="flex items-center justify-between gap-2 mt-2 pt-2.5 border-t border-slate-100 text-[11px]">
        <span className="text-ink-secondary font-medium">{insight}</span>
        <span className="font-mono text-taxi font-semibold tabular-nums">{medianLabel}</span>
      </div>
    </div>
  );
};

export default HistogramChart;
