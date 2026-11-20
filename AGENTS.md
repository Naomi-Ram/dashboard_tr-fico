# AGENTS.md

Guía de contexto y trabajo para agentes de IA en este repositorio.

## 1. Descripción del proyecto
Repositorio del **Proyecto 4: "La movilidad urbana y el tráfico inteligente" (NYC TLC)** para la materia de Visualización de Datos. Analiza los registros públicos de viajes en taxi amarillo de Nueva York de enero de 2025 (`yellow_tripdata_2025-01.parquet`: 3,475,226 viajes totales; **3,202,368 viajes válidos** tras limpieza) cruzados con **263 zonas geográficas** de los cinco distritos (*boroughs*).

## 2. Estructura del repositorio
- `README.md`: Resumen del proyecto, equipo, indicadores principales de enero 2025 y herramientas.
- `.interface-design/system.md`: Tokens, tipografía, paleta y reglas de consistencia del sistema visual.
- `.github/workflows/deploy.yml`: Pipeline de GitHub Actions que construye `dashboard/` y despliega `dashboard/dist` a GitHub Pages en cada push a `main`.
- Documentación y datos geográficos en la raíz (no modificar salvo solicitud explícita):
  - `Fase1_Documento_Justificacion_*.pdf`, `Fase2_Diseno_Estructura_Movilidad_NYC.pdf`, `Wireframe_Alta_Fidelidad_Movilidad_NYC.png`
  - `data_dictionary_trip_records_*.pdf`, `trip_record_user_guide.pdf`, `working_parquet_format.pdf`
  - `taxi_zone_lookup.csv`, `taxi_zone_map_*.jpg`, `taxi_zones/` (shapefile oficial en `EPSG:2263`)
- `dashboard/`: Aplicación web principal (React + TypeScript + Vite).
  - `scripts/convert-shapefile.mjs`: Convierte `taxi_zones/taxi_zones.shp` (EPSG:2263) a `public/data/nyc-taxi-zones.geojson` (WGS84 simplificado).
  - `public/data/nyc-taxi-zones.geojson`: Geometría real de las 263 zonas TLC (~366 KB).
  - `src/components/Dashboard.tsx`: Cuadrícula 3×3 (Header + KPIs + Mapa/Serie Temporal + Boxplot/Histograma/Propinas + Footer).
  - `src/components/layout/Header.tsx`: Cabecera oscura `asphalt` (`#0F1A2E`) y filtros globales (`borough`, `timeType`, `dayType` + `Restablecer`).
  - `src/components/kpis/`: `KPISection.tsx` (1/3 + 2/3), `KPIPrincipal.tsx`, `KPICard.tsx`.
  - `src/components/charts/`:
    - `ChoroplethMap.tsx`: React-Leaflet con polígonos reales semitransparentes (`fillOpacity: 0.48`), escala por cuantiles Teal → Coral, etiquetas de distritos y `fitBounds` al filtrar.
    - `TimeSeriesChart.tsx`: `ComposedChart` (Recharts) con barras de volumen horario (eje derecho) y líneas de duración (eje izquierdo), conectado a `dayType` y `timeType`.
    - `BoxplotChart.tsx`: Diagrama de cajas y bigotes nativo en SVG (bigotes completos, mediana, outliers p95–p99), conectado a `timeType`.
    - `HistogramChart.tsx`: Histograma con toggle `Distancia (mi)` / `Tarifa (USD)`, bins propios y línea de mediana real.
    - `GroupedBarChart.tsx`: Propinas promedio por distrito y tipo de día, conectado a `borough` y `dayType`.
  - `src/data/`: Datasets reales agregados de enero 2025 (`kpiData.ts`, `zoneData.ts` [263 zonas], `hourlyData.ts`, `boxplotData.ts`, `histogramData.ts`, `tipsByBoroughData.ts`).
  - `src/styles/colors.ts`, `src/index.css`, `tailwind.config.js`: Sistema visual unificado (`asphalt`, `taxi`, `transit`, `metro`, `Archivo` + `JetBrains Mono`).
  - `src/types/index.ts`: Interfaces TypeScript compartidas.

## 3. Stack y arquitectura
- **Frontend**: React 18, TypeScript 5 (`strict: true`), Vite 6 (`base: './'`), Tailwind CSS 3, Recharts 2, React-Leaflet 4 + Leaflet 1.9.
- **Datos**: SPA estática con agregaciones reales preprocesadas desde `yellow_tripdata_2025-01.parquet` y geometría GeoJSON reproyectada de las 263 zonas TLC (compatible con GitHub Pages).
- **Filtros conectados**: `borough` → `ChoroplethMap` y `GroupedBarChart`; `dayType` → `TimeSeriesChart` y `GroupedBarChart`; `timeType` → `TimeSeriesChart` y `BoxplotChart`.

## 4. Comandos útiles
Todos los comandos se ejecutan desde `dashboard/`:

```bash
cd dashboard
npm ci                    # o npm install
npm run dev               # Servidor de desarrollo en http://localhost:5173
npm run build             # Verificación de tipos (tsc -b) + build en dashboard/dist/
npm run preview           # Previsualización del build de producción
npm run convert-shapefile # Regenera public/data/nyc-taxi-zones.geojson desde taxi_zones/
```

## 5. Convenciones y pautas para agentes
- **Idioma**: Interfaz de usuario, comentarios y documentación en **español**.
- **Sistema visual**: Respetar `.interface-design/system.md` (tipografía `Archivo` + `JetBrains Mono` con `tabular-nums`, paleta semántica fija, leyendas fuera del eje X).
- **Verificación**: Después de editar código en `dashboard/`, ejecutar `npm run build` dentro de `dashboard/` para confirmar que `tsc -b` y `vite build` pasan sin errores.
- **Despliegue**: Mantener `base: './'` en `dashboard/vite.config.ts` y rutas relativas (`./data/...`) para compatibilidad con GitHub Pages.
