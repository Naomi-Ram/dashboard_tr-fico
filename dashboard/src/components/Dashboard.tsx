/**
 * Dashboard — Cuadrícula estructural 3×3 del Proyecto 4 (NYC TLC).
 *
 * Todos los componentes (KPIs, Mapa, Serie Temporal, Boxplot, Histograma y Propinas)
 * están conectados a los 3 filtros globales (Distrito, Horario y Tipo de Día).
 */
import React, { useState } from 'react';
import Header from './layout/Header';
import KPISection from './kpis/KPISection';
import ChoroplethMap from './charts/ChoroplethMap';
import TimeSeriesChart from './charts/TimeSeriesChart';
import BoxplotChart from './charts/BoxplotChart';
import HistogramChart from './charts/HistogramChart';
import GroupedBarChart from './charts/GroupedBarChart';
import type { DashboardFilters } from '../types';

const INITIAL_FILTERS: DashboardFilters = {
  borough: 'Todos',
  timeType: 'Todos',
  dayType: 'Todos',
};

const Dashboard: React.FC = () => {
  const [filters, setFilters] = useState<DashboardFilters>(INITIAL_FILTERS);

  const handleFilterChange = (key: keyof DashboardFilters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleResetFilters = () => {
    setFilters(INITIAL_FILTERS);
  };

  return (
    <div className="min-h-screen bg-canvas text-ink">
      {/* ═══ HEADER + FILTROS GLOBALES ═══ */}
      <Header
        filters={filters}
        onFilterChange={handleFilterChange}
        onResetFilters={handleResetFilters}
      />

      {/* ═══ CONTENIDO PRINCIPAL ═══ */}
      <main className="max-w-[1600px] mx-auto px-4 lg:px-6 py-5 space-y-5">
        {/* ═══ FILA 1: KPIs (conectados a los 3 filtros) ═══ */}
        <section aria-label="Indicadores clave de rendimiento">
          <KPISection filters={filters} />
        </section>

        {/* ═══ FILA 2: Mapa (2/3) + Serie Temporal (1/3) ═══ */}
        <section
          aria-label="Mapa coroplético y serie temporal"
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        >
          <div className="lg:col-span-2">
            <ChoroplethMap filterBorough={filters.borough} />
          </div>

          <div className="lg:col-span-1">
            <TimeSeriesChart
              filterBorough={filters.borough}
              filterDayType={filters.dayType}
              filterTimeType={filters.timeType}
            />
          </div>
        </section>

        {/* ═══ FILA 3: Boxplot + Histogramas + Propinas por Distrito ═══ */}
        <section
          aria-label="Análisis complementario de dispersión, distribución y propinas"
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        >
          <BoxplotChart
            filterBorough={filters.borough}
            filterTimeType={filters.timeType}
            filterDayType={filters.dayType}
          />
          <HistogramChart
            filterBorough={filters.borough}
            filterTimeType={filters.timeType}
          />
          <GroupedBarChart
            filterBorough={filters.borough}
            filterDayType={filters.dayType}
            filterTimeType={filters.timeType}
          />
        </section>

        {/* ═══ FOOTER METODOLÓGICO ═══ */}
        <footer className="text-center text-xs text-ink-tertiary py-5 border-t border-slate-200/80 space-y-1">
          <p className="font-medium text-ink-secondary">
            Proyecto 4: La movilidad urbana y el tráfico inteligente — Visualización de Datos (Universidad del Caribe)
          </p>
          <p>
            Fuente:{' '}
            <a
              href="https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-taxi hover:underline font-medium"
            >
              NYC Taxi and Limousine Commission (TLC)
            </a>{' '}
            · Dataset <span className="font-mono">yellow_tripdata_2025-01.parquet</span> (3,475,226 registros → 3,202,368 viajes válidos tras limpieza de taxímetros y outliers) · 263 zonas geográficas oficiales.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;
