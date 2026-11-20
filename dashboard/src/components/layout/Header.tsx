/**
 * Header — Barra superior sobria y controles de filtrado global (Modo Pull).
 * Diseño silencioso (sin colores chillones ni badges fosforescentes) para que
 * la atención recaiga en los datos y las visualizaciones.
 */
import React from 'react';
import type { DashboardFilters } from '../../types';

interface HeaderProps {
  filters: DashboardFilters;
  onFilterChange: (key: keyof DashboardFilters, value: string) => void;
  onResetFilters: () => void;
}

const BOROUGHS = ['Todos', 'Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island'];
const TIME_TYPES = ['Todos', 'Hora Pico', 'Hora Valle'];
const DAY_TYPES = ['Todos', 'Laboral', 'Fin de Semana'];

const Header: React.FC<HeaderProps> = ({ filters, onFilterChange, onResetFilters }) => {
  const hasActiveFilters =
    filters.borough !== 'Todos' ||
    filters.timeType !== 'Todos' ||
    filters.dayType !== 'Todos';

  return (
    <header className="bg-asphalt text-white border-b border-white/10">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 py-4">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
          {/* Identidad del proyecto — sobria y tipográfica */}
          <div className="flex items-start gap-3">
            <div
              className="w-9 h-9 rounded-lg bg-white/[0.07] border border-white/10 flex items-center justify-center text-slate-200 flex-shrink-0 mt-0.5"
              aria-hidden="true"
            >
              <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7h8m-8 4h8m-9 5h10a2 2 0 002-2V9a2 2 0 00-2-2H7a2 2 0 00-2 2v6a2 2 0 002 2zm1 3a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
                />
              </svg>
            </div>

            <div>
              <div className="flex items-center flex-wrap gap-2 mb-0.5">
                <span className="text-[11px] font-mono font-medium text-slate-300 tracking-wide">
                  ENERO 2025
                </span>
                <span className="text-slate-600">·</span>
                <span className="text-[11px] text-slate-400 font-mono tabular-nums">
                  NYC TLC · 3,202,368 viajes válidos · 263 zonas
                </span>
              </div>

              <h1 className="text-lg lg:text-[21px] font-bold tracking-tight text-slate-50 leading-tight">
                Movilidad Urbana y Tráfico Inteligente
              </h1>
              <p className="text-slate-400 text-xs mt-0.5">
                Diagnóstico de congestión vial, horarios pico, demanda espacial y costos por milla en Nueva York
              </p>
            </div>
          </div>

          {/* Controles de filtrado global — superficies neutras elevadas */}
          <div className="bg-asphalt-subtle border border-white/[0.08] rounded-lg p-2 flex flex-wrap items-end gap-2.5">
            {/* Distrito */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="filter-borough"
                className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 px-0.5"
              >
                Distrito
              </label>
              <div className="relative">
                <select
                  id="filter-borough"
                  value={filters.borough}
                  onChange={(e) => onFilterChange('borough', e.target.value)}
                  className="appearance-none h-8 bg-asphalt text-slate-100 text-xs font-medium pl-2.5 pr-7 rounded-md border border-white/10 hover:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/30 transition-colors cursor-pointer"
                >
                  {BOROUGHS.map((b) => (
                    <option key={b} value={b} className="bg-asphalt text-slate-100">
                      {b === 'Todos' ? 'Todos (5 distritos)' : b}
                    </option>
                  ))}
                </select>
                <svg
                  className="w-3.5 h-3.5 text-slate-400 pointer-events-none absolute right-2 top-1/2 -translate-y-1/2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Horario */}
            <SegmentedFilter
              label="Horario"
              value={filters.timeType}
              options={TIME_TYPES}
              onChange={(v) => onFilterChange('timeType', v)}
            />

            {/* Tipo de Día */}
            <SegmentedFilter
              label="Tipo de Día"
              value={filters.dayType}
              options={DAY_TYPES}
              onChange={(v) => onFilterChange('dayType', v)}
            />

            {/* Botón Restablecer */}
            {hasActiveFilters && (
              <button
                type="button"
                onClick={onResetFilters}
                className="h-8 px-2.5 rounded-md text-[11px] font-medium text-slate-300 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 transition-colors flex items-center gap-1"
                title="Restablecer todos los filtros"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Restablecer
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

interface SegmentedFilterProps {
  label: string;
  value: string;
  options: string[];
  onChange: (val: string) => void;
}

const SegmentedFilter: React.FC<SegmentedFilterProps> = ({
  label,
  value,
  options,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 px-0.5">
        {label}
      </span>
      <div
        role="group"
        aria-label={label}
        className="inline-flex h-8 p-0.5 rounded-md bg-asphalt border border-white/10"
      >
        {options.map((opt) => {
          const isActive = value === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              aria-pressed={isActive}
              className={`px-2.5 text-xs font-medium rounded-[5px] transition-colors whitespace-nowrap ${
                isActive
                  ? 'bg-white/[0.16] text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
