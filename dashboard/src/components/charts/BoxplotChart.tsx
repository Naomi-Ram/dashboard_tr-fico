/**
 * BoxplotChart — Diagrama de cajas y bigotes de Velocidad Comercial (mph) en SVG (Fila 3, Col 1).
 *
 * Responde dinámicamente a los 3 filtros globales:
 * filterBorough, filterDayType y filterTimeType.
 */
import React, { useMemo, useState } from 'react';
import { BOXPLOT_BY_FILTER } from '../../data/filteredAggregations';
import { COLORS } from '../../styles/colors';

interface BoxplotChartProps {
  filterBorough: string;
  filterTimeType: string;
  filterDayType: string;
}

const BoxplotChart: React.FC<BoxplotChartProps> = ({
  filterBorough,
  filterTimeType,
  filterDayType,
}) => {
  const [hoveredId, setHoveredId] = useState<'peak' | 'offpeak' | null>(null);

  const key = `${filterBorough}|${filterDayType}`;
  const data = BOXPLOT_BY_FILTER[key] ?? BOXPLOT_BY_FILTER['Todos|Todos'];
  const peak = data[0];
  const offpeak = data[1];

  const speedDropPct =
    offpeak.mean > 0
      ? (((peak.mean - offpeak.mean) / offpeak.mean) * 100).toFixed(1)
      : '0.0';

  const { yMax, yTicks } = useMemo(() => {
    const highest = Math.max(
      ...data.flatMap((d) => [d.max, ...d.outliers]),
      32
    );
    const step = highest > 40 ? 12 : 9;
    const top = Math.ceil(highest / step) * step;
    const ticks = [0, step, step * 2, step * 3, top];
    return { yMax: top, yTicks: ticks };
  }, [data]);

  const width = 360;
  const height = 245;
  const padTop = 18;
  const padBottom = 38;
  const padLeft = 46;
  const padRight = 18;
  const plotH = height - padTop - padBottom;

  const yScale = (val: number) => padTop + plotH - (val / yMax) * plotH;
  const xCenters = [
    padLeft + (width - padLeft - padRight) * 0.28,
    padLeft + (width - padLeft - padRight) * 0.72,
  ];

  const activeItem = data.find((d) => d.id === hoveredId) ?? null;

  return (
    <div className="bg-card rounded-xl shadow-card p-4 lg:p-5 h-full flex flex-col">
      {/* Encabezado + badge de variación */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <h3 className="text-[15px] font-bold text-ink tracking-tight">
            ¿Cuánto cae la velocidad en hora pico?
          </h3>
          <p className="text-xs text-ink-tertiary mt-0.5">
            {filterBorough === 'Todos' ? 'NYC completo' : filterBorough} · Velocidad comercial (mph)
          </p>
        </div>

        <span className="text-[11px] font-mono font-medium text-taxi bg-taxi-soft px-2 py-0.5 rounded border border-taxi/15 tabular-nums flex-shrink-0">
          {Number(speedDropPct) > 0 ? `+${speedDropPct}` : speedDropPct}% media
        </span>
      </div>

      {/* SVG Boxplot */}
      <div className="flex-1 flex items-center justify-center relative min-h-[245px]">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-full max-h-[260px] overflow-visible"
          role="img"
          aria-label="Diagrama de cajas y bigotes comparando velocidad comercial en mph entre Hora Pico y Hora Valle"
        >
          {yTicks.map((tick) => {
            const y = yScale(tick);
            return (
              <g key={tick}>
                <line
                  x1={padLeft}
                  x2={width - padRight}
                  y1={y}
                  y2={y}
                  stroke={COLORS.gridLine}
                  strokeDasharray={tick === 0 ? undefined : '3 3'}
                />
                <text
                  x={padLeft - 8}
                  y={y + 3.5}
                  textAnchor="end"
                  fontSize={10}
                  fontFamily="JetBrains Mono, monospace"
                  fill={COLORS.inkTertiary}
                >
                  {tick} mph
                </text>
              </g>
            );
          })}

          {data.map((d, idx) => {
            const cx = xCenters[idx];
            const boxW = 54;
            const capW = 24;
            const color = d.id === 'peak' ? COLORS.taxi : COLORS.transit;
            const isMatch =
              filterTimeType === 'Todos' ||
              (filterTimeType === 'Hora Pico' && d.id === 'peak') ||
              (filterTimeType === 'Hora Valle' && d.id === 'offpeak');
            const opacity = isMatch ? 1 : 0.25;

            const yMin = yScale(d.min);
            const yQ1 = yScale(d.q1);
            const yMed = yScale(d.median);
            const yQ3 = yScale(d.q3);
            const yMaxPos = yScale(d.max);

            return (
              <g
                key={d.id}
                style={{ opacity, transition: 'opacity 180ms ease' }}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredId(d.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <rect x={cx - 44} y={padTop} width={88} height={plotH} fill="transparent" />

                {/* Bigote inferior */}
                <line x1={cx} x2={cx} y1={yMin} y2={yQ1} stroke={COLORS.asphalt} strokeWidth={1.5} />
                <line x1={cx - capW / 2} x2={cx + capW / 2} y1={yMin} y2={yMin} stroke={COLORS.asphalt} strokeWidth={1.5} />

                {/* Bigote superior */}
                <line x1={cx} x2={cx} y1={yQ3} y2={yMaxPos} stroke={COLORS.asphalt} strokeWidth={1.5} />
                <line x1={cx - capW / 2} x2={cx + capW / 2} y1={yMaxPos} y2={yMaxPos} stroke={COLORS.asphalt} strokeWidth={1.5} />

                {/* Caja IQR */}
                <rect
                  x={cx - boxW / 2}
                  y={yQ3}
                  width={boxW}
                  height={Math.max(4, yQ1 - yQ3)}
                  rx={4}
                  fill={color}
                  fillOpacity={hoveredId === d.id ? 0.34 : 0.22}
                  stroke={color}
                  strokeWidth={2}
                />

                {/* Mediana */}
                <line
                  x1={cx - boxW / 2}
                  x2={cx + boxW / 2}
                  y1={yMed}
                  y2={yMed}
                  stroke={COLORS.asphalt}
                  strokeWidth={2.5}
                />

                <text
                  x={cx + boxW / 2 + 6}
                  y={yMed + 3.5}
                  fontSize={10}
                  fontWeight={700}
                  fontFamily="JetBrains Mono, monospace"
                  fill={COLORS.asphalt}
                >
                  {d.median.toFixed(1)}
                </text>

                {/* Outliers */}
                {d.outliers.map((outVal, oIdx) => (
                  <circle
                    key={oIdx}
                    cx={cx}
                    cy={yScale(Math.min(outVal, yMax - 1))}
                    r={3.2}
                    fill="#FFFFFF"
                    stroke={color}
                    strokeWidth={1.8}
                  />
                ))}

                {/* Etiquetas eje X */}
                <text x={cx} y={height - 18} textAnchor="middle" fontSize={11.5} fontWeight={700} fill={COLORS.ink}>
                  {d.category}
                </text>
                <text x={cx} y={height - 5} textAnchor="middle" fontSize={10} fill={COLORS.inkTertiary}>
                  {d.schedule}
                </text>
              </g>
            );
          })}
        </svg>

        {activeItem && (
          <div className="absolute top-1 right-1 bg-asphalt text-white rounded-lg px-3 py-2 text-[11px] shadow-lg border border-white/10 pointer-events-none">
            <p className="font-bold text-white mb-1">
              {activeItem.category} ({filterBorough === 'Todos' ? 'NYC' : filterBorough})
            </p>
            <div className="font-mono tabular-nums space-y-0.5 text-slate-300">
              <p>Q1–Q3: <strong className="text-white">{activeItem.q1} – {activeItem.q3} mph</strong></p>
              <p>Mediana: <strong className="text-white">{activeItem.median} mph</strong> (Media {activeItem.mean})</p>
              <p>Techo p98: <strong className="text-white">{activeItem.outliers[1]} mph</strong></p>
            </div>
          </div>
        )}
      </div>

      {/* Resumen compacto */}
      <div className="grid grid-cols-2 gap-2.5 mt-2 pt-2.5 border-t border-slate-100 text-[11px]">
        {data.map((d) => (
          <div key={d.id} className="flex items-start gap-2">
            <span
              className="w-2.5 h-2.5 rounded-[3px] mt-0.5 flex-shrink-0"
              style={{ backgroundColor: d.id === 'peak' ? COLORS.taxi : COLORS.transit }}
            />
            <div className="min-w-0">
              <p className="font-semibold text-ink leading-tight">{d.category}</p>
              <p className="font-mono text-ink-tertiary tabular-nums">
                Med {d.median} · Q3 {d.q3} · p95 {d.outliers[0]} mph
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxplotChart;
