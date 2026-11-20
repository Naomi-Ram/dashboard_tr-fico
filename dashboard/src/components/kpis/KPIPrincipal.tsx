/**
 * KPIPrincipal — Foco primario del dashboard (Fila 1, Columna 1).
 * Sin bordes decorativos gruesos: la jerarquía se construye por escala tipográfica
 * (42px JetBrains Mono), espacio y un acento terracota mínimo en el indicador de estado.
 */
import React from 'react';
import type { KPIData } from '../../types';

interface KPIPrincipalProps {
  data: KPIData;
}

const KPIPrincipal: React.FC<KPIPrincipalProps> = ({ data }) => {
  return (
    <div className="bg-card rounded-xl shadow-card p-5 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-ink-tertiary">
            <span className="w-1.5 h-1.5 rounded-full bg-taxi" />
            Indicador Principal
          </span>
          {data.change && (
            <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-taxi-soft text-taxi border border-taxi/15">
              ▲ {data.change}
            </span>
          )}
        </div>

        <h2 className="text-sm font-semibold text-ink-secondary">{data.label}</h2>

        <p className="text-4xl lg:text-[42px] leading-none font-mono font-bold text-ink tracking-tight tabular-nums mt-2.5 mb-3">
          {data.value}
        </p>
      </div>

      <div className="pt-2.5 border-t border-slate-100 space-y-1">
        <p className="text-xs font-mono text-ink-tertiary tabular-nums">{data.subtitle}</p>
        <p className="text-xs text-ink-secondary font-medium">{data.insight}</p>
      </div>
    </div>
  );
};

export default KPIPrincipal;
