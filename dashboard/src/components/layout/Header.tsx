/**
 * Header del dashboard — Rediseño moderno para plataforma de Analítica Urbana NYC.
 * Estilo visual: Clean Tech / Urban Transit Intelligence (estilo NYC Open Data & Smart Cities).
 * Elimina la estética predeterminada de Claude sustituyéndola por una paleta Slate/Graphite
 * con acentos en amarillo taxi oficial NYC (#EAB308) y azul acero (#38BDF8).
 */
import React from 'react';
import type { DashboardFilters } from '../../types';

interface HeaderProps {
  filters: DashboardFilters;
  onFilterChange: (key: keyof DashboardFilters, value: string) => void;
}

const BOROUGHS = ['Todos', 'Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island'];
const TIME_TYPES = ['Todos', 'Hora Pico', 'Hora Valle'];
const DAY_TYPES = ['Todos', 'Laboral', 'Fin de Semana'];

const Header: React.FC<HeaderProps> = ({ filters, onFilterChange }) => {
  return (
    <header className="bg-[#0B1120] text-slate-100 border-b border-slate-800/80 shadow-lg">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          
          {/* Identidad del Proyecto / Branding */}
          <div className="flex items-start gap-3.5">
            {/* Ícono de movilidad urbana estilo NYC Taxi */}
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-md shadow-amber-500/10 flex-shrink-0 mt-0.5">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8m-8 4h8m-9 5h10a2 2 0 002-2V9a2 2 0 00-2-2H7a2 2 0 00-2 2v6a2 2 0 002 2zm1 3a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
            </div>

            <div>
              {/* Metadatos y badges técnicos */}
              <div className="flex items-center flex-wrap gap-2 mb-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Datos Validados • Enero 2025
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  NYC TLC • 3,202,368 Viajes
                </span>
              </div>

              {/* Título y subtítulo */}
              <h1 className="text-lg lg:text-xl font-bold tracking-tight text-white flex items-center gap-2">
                Movilidad Urbana & Tráfico Inteligente
                <span className="text-slate-500 font-normal">/</span>
                <span className="text-amber-400 font-semibold text-base lg:text-lg">NYC Taxi Analytics</span>
              </h1>
              <p className="text-slate-400 text-xs mt-0.5 font-normal">
                Panel analítico de congestión, velocidad comercial y distribución de demanda por zona
              </p>
            </div>
          </div>

          {/* Panel de Filtros Globales (Interacción Pull) */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-2.5 shadow-inner backdrop-blur-sm">
            <div className="flex items-center justify-between px-1 mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                <svg className="w-3 h-3 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filtros Globales
              </span>
              <span className="text-[10px] text-slate-400">3 variables</span>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {/* Filtro Distrito */}
              <FilterSelect
                label="Distrito"
                value={filters.borough}
                options={BOROUGHS}
                onChange={(v) => onFilterChange('borough', v)}
                icon={
                  <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
              />

              {/* Filtro Horario */}
              <FilterSelect
                label="Horario"
                value={filters.timeType}
                options={TIME_TYPES}
                onChange={(v) => onFilterChange('timeType', v)}
                icon={
                  <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
              />

              {/* Filtro Tipo de Día */}
              <FilterSelect
                label="Tipo de Día"
                value={filters.dayType}
                options={DAY_TYPES}
                onChange={(v) => onFilterChange('dayType', v)}
                icon={
                  <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                }
              />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

/** Selector estilizado con ícono y feedback visual */
interface FilterSelectProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  icon: React.ReactNode;
}

const FilterSelect: React.FC<FilterSelectProps> = ({ label, value, options, onChange, icon }) => {
  return (
    <div className="relative flex items-center bg-slate-950/70 border border-slate-700/80 rounded-lg px-2.5 py-1.5 focus-within:border-amber-400 focus-within:ring-1 focus-within:ring-amber-400 transition-all">
      <span className="mr-2 opacity-80">{icon}</span>
      <div className="flex flex-col">
        <span className="text-[9px] font-medium uppercase tracking-wider text-slate-400 leading-none mb-0.5">
          {label}
        </span>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label={label}
          className="bg-transparent text-white text-xs font-medium focus:outline-none cursor-pointer pr-4 appearance-none"
        >
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-slate-900 text-white">
              {opt}
            </option>
          ))}
        </select>
      </div>
      {/* Flecha de dropdown personalizada */}
      <svg className="w-3 h-3 text-slate-400 pointer-events-none absolute right-2 bottom-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
};

export default Header;
