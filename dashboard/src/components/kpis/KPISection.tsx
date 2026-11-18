/**
 * KPISection — Fila 1 completa de KPIs.
 * Layout: 1 KPI principal (ancho) + 4 KPIs secundarios.
 * Corresponde exactamente a la Fila 1 del wireframe.
 */
import React from 'react';
import KPIPrincipal from './KPIPrincipal';
import KPICard from './KPICard';
import { KPI_PRINCIPAL, KPIS_SECONDARY } from '../../data/kpiData';

const KPISection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
      {/* KPI Principal — ocupa 1 columna pero es más prominente */}
      <KPIPrincipal data={KPI_PRINCIPAL} />

      {/* 4 KPIs secundarios */}
      {KPIS_SECONDARY.map((kpi, idx) => (
        <KPICard key={kpi.id} data={kpi} index={idx} />
      ))}
    </div>
  );
};

export default KPISection;
