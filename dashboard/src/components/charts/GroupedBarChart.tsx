/**
 * GroupedBarChart — Propina promedio por distrito y tipo de día (Fila 3, Col 3).
 *
 * Responde dinámicamente a los 3 filtros globales:
 * filterBorough (resaltado), filterDayType (series) y filterTimeType (franja horaria).
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
  ReferenceLine,
  Cell,
} from 'recharts';
import { TIP_OVERALL_AVERAGE } from '../../data/tipsByBoroughData';
import { TIPS_BY_TIME_TYPE } from '../../data/filteredAggregations';
import { COLORS } from '../../styles/colors';

interface GroupedBarChartProps {
  filterBorough: string;
  filterDayType: string;
  filterTimeType: string;
}

const GroupedBarChart: React.FC<GroupedBarChartProps> = ({
  filterBorough,
  filterDayType,
  filterTimeType,
}) => {
  const showWeekday = filterDayType === 'Todos' || filterDayType === 'Laboral';
  const showWeekend = filterDayType === 'Todos' || filterDayType === 'Fin de Semana';

  const data = TIPS_BY_TIME_TYPE[filterTimeType] ?? TIPS_BY_TIME_TYPE.Todos;

  return (
    <div className="bg-card rounded-xl shadow-card p-4 lg:p-5 h-full flex flex-col">
      {/* Encabezado */}
      <div className="mb-2">
        <h3 className="text-[15px] font-bold text-ink tracking-tight">
          ¿Cómo varían las propinas por distrito?
        </h3>
        <p className="text-xs text-ink-tertiary mt-0.5">
          Pagos con tarjeta (USD){filterTimeType !== 'Todos' ? ` · ${filterTimeType}` : ' · Laboral vs. Fin de semana'}
        </p>
      </div>

      {/* Leyenda superior */}
      <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1 mb-2 text-[11px] text-ink-secondary">
        {showWeekday && (
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-[2px] bg-taxi" />
            Día laboral
          </span>
        )}
        {showWeekend && (
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-[2px] bg-transit" />
            Fin de semana
          </span>
        )}
        <span className="inline-flex items-center gap-1.5 text-ink-tertiary">
          <span className="w-3 border-t border-dashed border-metro" />
          Prom. ciudad (${TIP_OVERALL_AVERAGE.toFixed(2)})
        </span>
      </div>

      {/* Gráfico */}
      <div className="flex-1 min-h-[245px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 14, right: 8, left: -12, bottom: 4 }}
            barGap={4}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={COLORS.gridLine} vertical={false} />

            <XAxis
              dataKey="borough"
              tick={{ fontSize: 10.5, fill: COLORS.inkSecondary }}
              tickLine={false}
              axisLine={{ stroke: COLORS.axisLine }}
              tickFormatter={(val: string) => (val === 'Staten Island' ? 'Staten Is.' : val)}
            />

            <YAxis
              tick={{ fontSize: 11, fill: COLORS.inkTertiary, fontFamily: 'JetBrains Mono' }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => `$${v}`}
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
              labelFormatter={(label: string) => {
                const row = data.find((d) => d.borough === label);
                const note =
                  label === 'Queens'
                    ? ' (incluye JFK/LGA)'
                    : label === 'Staten Island'
                    ? ' (muestra baja)'
                    : '';
                const countStr = row ? ` · n=${row.cardTrips.toLocaleString('es-MX')}` : '';
                return `${label}${note}${countStr}`;
              }}
              formatter={(value: number, name: string) => {
                const label = name === 'weekday' ? 'Día laboral' : 'Fin de semana';
                return [`$${value.toFixed(2)} USD`, label];
              }}
            />

            <ReferenceLine
              y={TIP_OVERALL_AVERAGE}
              stroke={COLORS.metro}
              strokeWidth={1.5}
              strokeDasharray="4 4"
            />

            {showWeekday && (
              <Bar dataKey="weekday" radius={[4, 4, 0, 0]} maxBarSize={22}>
                {data.map((entry) => {
                  const isActive =
                    filterBorough === 'Todos' || filterBorough === entry.borough;
                  return (
                    <Cell
                      key={entry.borough}
                      fill={COLORS.taxi}
                      fillOpacity={isActive ? 0.9 : 0.2}
                    />
                  );
                })}
              </Bar>
            )}

            {showWeekend && (
              <Bar dataKey="weekend" radius={[4, 4, 0, 0]} maxBarSize={22}>
                {data.map((entry) => {
                  const isActive =
                    filterBorough === 'Todos' || filterBorough === entry.borough;
                  return (
                    <Cell
                      key={entry.borough}
                      fill={COLORS.transit}
                      fillOpacity={isActive ? 0.88 : 0.2}
                    />
                  );
                })}
              </Bar>
            )}
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Nota metodológica */}
      <div className="mt-2 pt-2.5 border-t border-slate-100 text-[11px] text-ink-tertiary">
        Queens eleva su media por traslados largos desde JFK/LGA · Staten Island tiene muestra baja.
      </div>
    </div>
  );
};

export default GroupedBarChart;
