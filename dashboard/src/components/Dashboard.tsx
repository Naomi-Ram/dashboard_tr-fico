/**
 * Dashboard — Componente principal que ensambla la cuadrícula 3×3.
 *
 * Layout del wireframe:
 * ┌─────────────────────────────────────────────────────────────┐
 * │ HEADER + FILTROS GLOBALES                                   │
 * ├──────────┬──────────┬──────────┬──────────┬────────────────┤
 * │ KPI      │ KPI Sec1 │ KPI Sec2 │ KPI Sec3 │ KPI Sec4      │
 * │ Principal│          │          │          │                │
 * ├──────────┴──────────┴──────────┼──────────┴────────────────┤
 * │ MAPA COROPLÉTICO               │ SERIE TEMPORAL            │
 * │ (Densidad de viajes por zona)  │ (Flujo y Duración 0–23h) │
 * ├──────────────────┬─────────────┼───────────────────────────┤
 * │ BOXPLOT          │ HISTOGRAMAS │ BARRAS AGRUPADAS          │
 * │ (Pico vs Valle)  │ (Tarifa/Dist)│ (Propina por Dist./Día) │
 * └──────────────────┴─────────────┴───────────────────────────┘
 *
 * Los filtros del Header afectan los datos mostrados en cada componente.
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

const Dashboard: React.FC = () => {
  const [filters, setFilters] = useState<DashboardFilters>({
    borough: 'Todos',
    timeType: 'Todos',
    dayType: 'Todos',
  });

  const handleFilterChange = (key: keyof DashboardFilters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* ═══ HEADER + FILTROS ═══ */}
      <Header filters={filters} onFilterChange={handleFilterChange} />

      {/* ═══ CONTENIDO PRINCIPAL ═══ */}
      <main className="max-w-[1600px] mx-auto px-4 lg:px-6 py-5 space-y-5">

        {/* ═══ FILA 1: KPIs ═══ */}
        <section aria-label="Indicadores clave de rendimiento">
          <KPISection />
        </section>

        {/* ═══ FILA 2: Mapa + Serie Temporal ═══ */}
        <section
          aria-label="Mapa y serie temporal"
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        >
          {/* Mapa coroplético — 2/3 del ancho */}
          <div className="lg:col-span-2">
            <ChoroplethMap filterBorough={filters.borough} />
          </div>

          {/* Serie temporal — 1/3 del ancho */}
          <div className="lg:col-span-1">
            <TimeSeriesChart filterDayType={filters.dayType} />
          </div>
        </section>

        {/* ═══ FILA 3: Boxplot + Histograma + Barras Agrupadas ═══ */}
        <section
          aria-label="Gráficos complementarios"
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        >
          <BoxplotChart />
          <HistogramChart />
          <GroupedBarChart />
        </section>

        {/* ═══ FOOTER ═══ */}
        <footer className="text-center text-xs text-gray-400 py-4 border-t border-gray-200">
          <p>
            NYC Taxi Dashboard — Proyecto 4: Visualización de Datos | Enero 2025
          </p>
          <p className="mt-1">
            Fuente: NYC Taxi and Limousine Commission (TLC) —{' '}
            <a
              href="https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Datos abiertos
            </a>{' '}
            | 3,202,368 viajes válidos | 263 zonas geográficas
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;
