/**
 * KPICard — Tarjeta de KPI secundario (Fila 1, Nivel 2).
 * Fondo teal oscuro, texto blanco, valor grande.
 * Mapea los 4 KPIs secundarios del wireframe.
 */
import React from 'react';
import type { KPIData } from '../../types';

interface KPICardProps {
  data: KPIData;
  index: number; // Para la etiqueta de columna
}

const COLUMN_LABELS = ['COL. 2A', 'COL. 2B', 'COL. 3A', 'COL. 3B'];

const KPICard: React.FC<KPICardProps> = ({ data, index }) => {
  return (
    <div className="bg-teal rounded-xl shadow-sm p-4 flex flex-col justify-between min-h-[130px]">
      {/* Badge de posición */}
      <div className="flex items-center gap-2 mb-1">
        <span className="bg-white/15 text-white/80 text-[10px] font-bold px-2 py-0.5 rounded">
          KPI SECUNDARIO ({COLUMN_LABELS[index] ?? `COL. ${index + 2}`})
        </span>
      </div>

      {/* Label */}
      <p className="text-teal-100 text-xs font-medium mb-1 opacity-80">{data.label}</p>

      {/* Valor */}
      <p className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight mb-1">
        {data.value}
      </p>

      {/* Subtítulo */}
      <p className="text-[11px] text-teal-100 opacity-70 leading-snug whitespace-pre-line">
        {data.subtitle}
      </p>
    </div>
  );
};

export default KPICard;
