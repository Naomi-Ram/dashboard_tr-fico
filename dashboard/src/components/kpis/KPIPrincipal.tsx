/**
 * KPIPrincipal — Tarjeta del KPI principal (Fila 1, Nivel 1).
 * Fondo blanco, valor grande, badge de cambio naranja.
 * Corresponde a "Duración Promedio de Viaje" en el wireframe.
 */
import React from 'react';
import type { KPIData } from '../../types';

interface KPIPrincipalProps {
  data: KPIData;
}

const KPIPrincipal: React.FC<KPIPrincipalProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col justify-between">
      {/* Badge de nivel */}
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-accent/10 text-accent text-xs font-bold px-2.5 py-0.5 rounded-md">
          KPI PRINCIPAL (NIVEL 1 — FOCO PRIMARIO)
        </span>
      </div>

      {/* Label */}
      <p className="text-gray-500 text-sm font-medium mb-1">{data.label}</p>

      {/* Valor + badge de cambio */}
      <div className="flex items-baseline gap-3 mb-2">
        <span className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          {data.value}
        </span>
        {data.change && (
          <span
            className={`flex items-center gap-1 text-sm font-semibold px-2.5 py-1 rounded-lg ${
              data.changeType === 'up'
                ? 'bg-accent/15 text-accent'
                : data.changeType === 'down'
                ? 'bg-teal/15 text-teal'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {data.changeType === 'up' ? '▲' : data.changeType === 'down' ? '▼' : ''}
            {data.change}
          </span>
        )}
      </div>

      {/* Subtítulo / referencia */}
      <p className="text-xs text-gray-400 leading-relaxed whitespace-pre-line">
        {data.subtitle}
      </p>
    </div>
  );
};

export default KPIPrincipal;
