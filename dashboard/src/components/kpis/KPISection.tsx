/**
 * KPISection — Fila 1 del dashboard (1/3 KPI Principal + 2/3 cuatro KPIs secundarios).
 *
 * En la vista global ('Todos' en los 3 filtros) conserva exactamente los indicadores
 * oficiales documentados en Fase 2. Al aplicar cualquier filtro (Distrito, Horario o
 * Tipo de Día), recalcula todas las tarjetas con las agregaciones reales de enero 2025.
 */
import React, { useMemo } from 'react';
import KPIPrincipal from './KPIPrincipal';
import KPICard from './KPICard';
import { KPI_PRINCIPAL, KPIS_SECONDARY } from '../../data/kpiData';
import { KPI_BY_FILTER } from '../../data/filteredAggregations';
import type { DashboardFilters, KPIData } from '../../types';

interface KPISectionProps {
  filters: DashboardFilters;
}

const KPISection: React.FC<KPISectionProps> = ({ filters }) => {
  const isDefault =
    filters.borough === 'Todos' &&
    filters.timeType === 'Todos' &&
    filters.dayType === 'Todos';

  const { principal, secondary } = useMemo<{
    principal: KPIData;
    secondary: KPIData[];
  }>(() => {
    if (isDefault) {
      return { principal: KPI_PRINCIPAL, secondary: KPIS_SECONDARY };
    }

    const key = `${filters.borough}|${filters.timeType}|${filters.dayType}`;
    const m = KPI_BY_FILTER[key];

    if (!m || m.trips === 0) {
      return { principal: KPI_PRINCIPAL, secondary: KPIS_SECONDARY };
    }

    const scopeParts = [
      filters.borough !== 'Todos' ? filters.borough : null,
      filters.timeType !== 'Todos' ? filters.timeType : null,
      filters.dayType !== 'Todos' ? filters.dayType : null,
    ].filter(Boolean);
    const scopeLabel = scopeParts.join(' · ');

    const diffVsGlobal = ((m.avgDuration - 14.65) / 14.65) * 100;
    const diffSign = diffVsGlobal >= 0 ? '+' : '';

    const dynamicPrincipal: KPIData = {
      id: 'duration',
      label: 'Duración Promedio de Viaje',
      value: `${m.avgDuration.toFixed(2)} min`,
      subtitle: `Mediana: ${m.medDuration.toFixed(2)} min · Vel. media: ${m.avgSpeed.toFixed(1)} mph`,
      insight: `${scopeLabel} · ${m.trips.toLocaleString('es-MX')} viajes analizados`,
      accentColor: 'taxi',
      change: `${diffSign}${diffVsGlobal.toFixed(1)}% vs. ciudad`,
      changeType: diffVsGlobal > 0 ? 'up' : 'down',
    };

    const dynamicSecondary: KPIData[] = [
      {
        id: 'distance',
        label: 'Distancia Promedio',
        value: `${m.avgDistance.toFixed(2)} mi`,
        subtitle: `Mediana: ${m.medDistance.toFixed(2)} mi · 75% ≤ ${m.p75Distance.toFixed(2)} mi`,
        insight: `Recorrido típico en ${filters.borough === 'Todos' ? 'NYC' : filters.borough}`,
        accentColor: 'transit',
      },
      {
        id: 'farePerMile',
        label: 'Tarifa Prom. / Milla',
        value: `$${m.avgFarePerMile.toFixed(2)} /mi`,
        subtitle: `Promedio del segmento filtrado`,
        insight:
          m.avgFarePerMile > 7.88
            ? `+${(((m.avgFarePerMile - 7.88) / 7.88) * 100).toFixed(1)}% por encima de la media NYC`
            : `${(((m.avgFarePerMile - 7.88) / 7.88) * 100).toFixed(1)}% frente a la media NYC`,
        accentColor: 'metro',
      },
      {
        id: 'topZone',
        label: 'Zona Mayor Demanda',
        value: m.topZone,
        subtitle: `${m.topZonePickups.toLocaleString('es-MX')} salidas (${m.topZoneShare.toFixed(1)}%)`,
        insight: `Líder de salidas en ${scopeLabel}`,
        accentColor: 'taxi',
      },
      {
        id: 'avgTip',
        label: 'Propina Promedio',
        value: `$${m.avgTip.toFixed(2)} USD`,
        subtitle: `Mediana: $${m.medTip.toFixed(2)} · Pagos con tarjeta`,
        insight:
          filters.borough === 'Queens'
            ? 'Refleja traslados largos desde JFK y LaGuardia'
            : `Segmento: ${scopeLabel}`,
        accentColor: 'transit',
      },
    ];

    return { principal: dynamicPrincipal, secondary: dynamicSecondary };
  }, [filters, isDefault]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-4">
      <div className="md:col-span-2 xl:col-span-4">
        <KPIPrincipal data={principal} />
      </div>

      {secondary.map((kpi) => (
        <div key={kpi.id} className="xl:col-span-2">
          <KPICard data={kpi} />
        </div>
      ))}
    </div>
  );
};

export default KPISection;
