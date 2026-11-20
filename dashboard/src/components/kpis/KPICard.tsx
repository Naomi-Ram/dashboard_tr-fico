/**
 * KPICard — Tarjeta de indicador secundario (Fila 1, Columnas 2 y 3).
 * Diseño limpio sin bordes gruesos de color: borde hairline uniforme,
 * cifras en carbón (ink) y un punto semántico discreto junto a la etiqueta.
 */
import React from 'react';
import type { KPIData } from '../../types';

interface KPICardProps {
  data: KPIData;
}

const DOT_COLOR_CLASS: Record<NonNullable<KPIData['accentColor']>, string> = {
  taxi: 'bg-taxi',
  transit: 'bg-transit',
  metro: 'bg-metro',
};

const KPICard: React.FC<KPICardProps> = ({ data }) => {
  const accent = data.accentColor ?? 'transit';
  const isTextValue = !/[\d$]/.test(data.value);

  return (
    <div className="bg-card rounded-xl shadow-card p-4 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-1.5 mb-2">
          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${DOT_COLOR_CLASS[accent]}`} />
          <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-tertiary truncate">
            {data.label}
          </p>
        </div>

        <p
          className={`${
            isTextValue
              ? 'text-xl lg:text-[22px] font-sans font-bold text-ink leading-tight'
              : 'text-2xl lg:text-[26px] font-mono font-bold tabular-nums tracking-tight text-ink'
          } mb-2`}
        >
          {data.value}
        </p>
      </div>

      <div className="pt-2 border-t border-slate-100 space-y-0.5">
        <p className="text-[11px] font-mono text-ink-tertiary tabular-nums">{data.subtitle}</p>
        <p className="text-[11px] text-ink-secondary leading-snug">{data.insight}</p>
      </div>
    </div>
  );
};

export default KPICard;
