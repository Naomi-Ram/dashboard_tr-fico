/**
 * TimeSeriesChart — Flujo horario de viajes y duración promedio (00h–23h) (Fila 2, Col 3).
 *
 * Combina barras tenues de volumen de viajes (eje derecho) con líneas de duración promedio
 * (eje izquierdo). Responde dinámicamente a los 3 filtros globales:
 * filterBorough, filterDayType y filterTimeType.
 */
import React, { useMemo } from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea,
} from 'recharts';
import { HOURLY_BY_BOROUGH } from '../../data/filteredAggregations';
import { COLORS } from '../../styles/colors';

interface TimeSeriesChartProps {
  filterBorough: string;
  filterDayType: string;
  filterTimeType: string;
}

const TimeSeriesChart: React.FC<TimeSeriesChartProps> = ({
  filterBorough,
  filterDayType,
  filterTimeType,
}) => {
  const showWeekday = filterDayType === 'Todos' || filterDayType === 'Laboral';
  const showWeekend = filterDayType === 'Todos' || filterDayType === 'Fin de Semana';

  const baseSeries = HOURLY_BY_BOROUGH[filterBorough] ?? HOURLY_BY_BOROUGH.Todos;

  const { chartData, maxTrips, minDur, maxDur } = useMemo(() => {
    let mTrips = 10;
    let loDur = Infinity;
    let hiDur = 0;

    const mapped = baseSeries.map((d) => {
      const tripsFlow =
        filterDayType === 'Laboral'
          ? d.tripsWeekday
          : filterDayType === 'Fin de Semana'
          ? d.tripsWeekend
          : Math.round((d.tripsWeekday + d.tripsWeekend) / 2);

      if (tripsFlow > mTrips) mTrips = tripsFlow;

      if (showWeekday && d.durationWeekday > 0) {
        loDur = Math.min(loDur, d.durationWeekday);
        hiDur = Math.max(hiDur, d.durationWeekday);
      }
      if (showWeekend && d.durationWeekend > 0) {
        loDur = Math.min(loDur, d.durationWeekend);
        hiDur = Math.max(hiDur, d.durationWeekend);
      }

      const matchesTime =
        filterTimeType === 'Todos' ||
        (filterTimeType === 'Hora Pico' && d.isPeak) ||
        (filterTimeType === 'Hora Valle' && !d.isPeak);

      return {
        ...d,
        tripsFlow: matchesTime ? tripsFlow : 0,
        tripsFlowMuted: matchesTime ? 0 : tripsFlow,
      };
    });

    const safeMin = loDur === Infinity ? 0 : Math.max(0, Math.floor(loDur - 2));
    const safeMax = hiDur === 0 ? 30 : Math.ceil(hiDur + 2);

    return {
      chartData: mapped,
      maxTrips: Math.ceil(mTrips * 1.25),
      minDur: safeMin,
      maxDur: safeMax,
    };
  }, [baseSeries, filterDayType, filterTimeType, showWeekday, showWeekend]);

  const activeAvg = useMemo(() => {
    const subset = baseSeries.filter((d) => {
      if (filterTimeType === 'Hora Pico') return d.isPeak;
      if (filterTimeType === 'Hora Valle') return !d.isPeak;
      return true;
    });
    const vals = subset
      .map((d) => {
        if (filterDayType === 'Laboral') return d.durationWeekday;
        if (filterDayType === 'Fin de Semana') return d.durationWeekend;
        if (d.durationWeekday > 0 && d.durationWeekend > 0) {
          return (d.durationWeekday + d.durationWeekend) / 2;
        }
        return d.durationWeekday || d.durationWeekend;
      })
      .filter((v) => v > 0);
    if (vals.length === 0) return '0.0';
    return (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(1);
  }, [baseSeries, filterDayType, filterTimeType]);

  const formatTripsTick = (v: number) => {
    if (v >= 1000) return `${(v / 1000).toFixed(v >= 10000 ? 0 : 1)}k`;
    return String(v);
  };

  return (
    <div className="bg-card rounded-xl shadow-card p-4 lg:p-5 h-full flex flex-col">
      {/* Encabezado */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <h3 className="text-[15px] font-bold text-ink tracking-tight">
            ¿A qué horas se satura el tráfico?
          </h3>
          <p className="text-xs text-ink-tertiary mt-0.5">
            {filterBorough === 'Todos' ? 'NYC completo' : filterBorough} · Duración (líneas) y flujo (barras)
          </p>
        </div>
        <span className="text-[11px] font-mono font-semibold text-ink bg-canvas px-2 py-1 rounded-md border border-slate-200/70 tabular-nums flex-shrink-0">
          Prom: {activeAvg} min
        </span>
      </div>

      {/* Leyenda superior */}
      <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1 mb-2 text-[11px] text-ink-secondary">
        {showWeekday && (
          <span className="inline-flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-taxi rounded-full" />
            Laboral (min)
          </span>
        )}
        {showWeekend && (
          <span className="inline-flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-transit rounded-full" />
            Fin de sem. (min)
          </span>
        )}
        <span className="inline-flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-[2px] bg-metro/20 border border-metro/30" />
          Viajes/h
        </span>
      </div>

      {/* Gráfico */}
      <div className="flex-1 min-h-[340px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={chartData}
            margin={{ top: 18, right: 6, left: -12, bottom: 4 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={COLORS.gridLine} vertical={false} />

            {/* Franjas de Hora Pico (7–9h y 16–19h) */}
            <ReferenceArea
              yAxisId="duration"
              x1="07h"
              x2="09h"
              fill={COLORS.taxi}
              fillOpacity={filterTimeType === 'Hora Valle' ? 0.03 : 0.09}
              label={{
                value: 'Pico AM',
                position: 'insideTop',
                fill: COLORS.taxi,
                fontSize: 10,
                fontWeight: 700,
              }}
            />
            <ReferenceArea
              yAxisId="duration"
              x1="16h"
              x2="19h"
              fill={COLORS.taxi}
              fillOpacity={filterTimeType === 'Hora Valle' ? 0.03 : 0.09}
              label={{
                value: 'Pico PM',
                position: 'insideTop',
                fill: COLORS.taxi,
                fontSize: 10,
                fontWeight: 700,
              }}
            />

            <XAxis
              dataKey="label"
              interval={3}
              tick={{ fontSize: 11, fill: COLORS.inkTertiary, fontFamily: 'JetBrains Mono' }}
              tickLine={false}
              axisLine={{ stroke: COLORS.axisLine }}
            />

            <YAxis
              yAxisId="duration"
              domain={[minDur, maxDur]}
              tick={{ fontSize: 11, fill: COLORS.inkTertiary, fontFamily: 'JetBrains Mono' }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => `${v}m`}
            />

            <YAxis
              yAxisId="trips"
              orientation="right"
              domain={[0, maxTrips]}
              tick={{ fontSize: 10, fill: COLORS.inkMuted, fontFamily: 'JetBrains Mono' }}
              tickLine={false}
              axisLine={false}
              tickFormatter={formatTripsTick}
              width={36}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: COLORS.asphalt,
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '8px',
                color: '#F8FAFC',
                fontSize: '12px',
              }}
              labelStyle={{ color: '#94A3B8', fontWeight: 700, marginBottom: '4px' }}
              formatter={(value: number, name: string) => {
                if (name === 'durationWeekday') return [`${value.toFixed(1)} min`, 'Duración Laboral'];
                if (name === 'durationWeekend') return [`${value.toFixed(1)} min`, 'Duración Fin de sem.'];
                if (name === 'tripsFlow' || name === 'tripsFlowMuted') {
                  if (value === 0) return [null, null];
                  return [`${value.toLocaleString('es-MX')} viajes/h`, 'Flujo promedio'];
                }
                return [String(value), name];
              }}
            />

            <Bar
              yAxisId="trips"
              dataKey="tripsFlow"
              fill={COLORS.metro}
              fillOpacity={0.2}
              radius={[2, 2, 0, 0]}
              barSize={10}
            />
            <Bar
              yAxisId="trips"
              dataKey="tripsFlowMuted"
              fill={COLORS.inkMuted}
              fillOpacity={0.08}
              radius={[2, 2, 0, 0]}
              barSize={10}
            />

            {showWeekday && (
              <Line
                yAxisId="duration"
                type="monotone"
                dataKey="durationWeekday"
                stroke={COLORS.taxi}
                strokeWidth={2.4}
                dot={false}
                activeDot={{ r: 4.5, fill: COLORS.taxi, stroke: '#FFFFFF', strokeWidth: 1.5 }}
              />
            )}

            {showWeekend && (
              <Line
                yAxisId="duration"
                type="monotone"
                dataKey="durationWeekend"
                stroke={COLORS.transit}
                strokeWidth={2.4}
                strokeDasharray="4 2"
                dot={false}
                activeDot={{ r: 4.5, fill: COLORS.transit, stroke: '#FFFFFF', strokeWidth: 1.5 }}
              />
            )}
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Nota al pie */}
      <div className="flex items-center justify-between gap-2 mt-2 pt-2.5 border-t border-slate-100 text-[11px] text-ink-tertiary">
        <span>Franjas pico: 07–09 h y 16–19 h</span>
        <span className="font-mono">00:00 – 23:00 h</span>
      </div>
    </div>
  );
};

export default TimeSeriesChart;
