/**
 * ChoroplethMap — Mapa coroplético de las 263 zonas TLC de Nueva York (Fila 2, Cols 1–2).
 *
 * Renderiza polígonos reales (GeoJSON reproyectado desde taxi_zones.shp) con relleno
 * semitransparente y borde nítido sobre OpenStreetMap para preservar el detalle de calles.
 * Incluye escala por cuantiles (Teal → Coral), hover interactivo, etiquetas de los 5
 * distritos y ajuste automático de encuadre (fitBounds) al filtrar por distrito.
 */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import type { Feature, FeatureCollection, Geometry } from 'geojson';
import { zoneById, zoneData } from '../../data/zoneData';
import { getZoneFillColor, MAP_QUANTILE_SCALE } from '../../styles/colors';

interface ChoroplethMapProps {
  filterBorough: string;
}

interface ZoneGeoProps {
  LocationID: number;
  zone: string;
  borough: string;
}

const NYC_CENTER: [number, number] = [40.708, -73.975];
const NYC_DEFAULT_ZOOM = 10;

const BOROUGH_LABELS: Array<{ name: string; coords: [number, number] }> = [
  { name: 'Manhattan', coords: [40.778, -73.968] },
  { name: 'Bronx', coords: [40.848, -73.865] },
  { name: 'Queens', coords: [40.728, -73.815] },
  { name: 'Brooklyn', coords: [40.652, -73.948] },
  { name: 'Staten Island', coords: [40.582, -74.15] },
];

/** Controlador de encuadre del mapa según el distrito seleccionado */
const MapBoundsController: React.FC<{
  geoData: FeatureCollection | null;
  filterBorough: string;
}> = ({ geoData, filterBorough }) => {
  const map = useMap();

  useEffect(() => {
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 100);

    if (!geoData) return () => clearTimeout(timer);

    if (filterBorough === 'Todos') {
      map.setView(NYC_CENTER, NYC_DEFAULT_ZOOM, { animate: true });
      return () => clearTimeout(timer);
    }

    const matching = geoData.features.filter(
      (f) => (f.properties as ZoneGeoProps | null)?.borough === filterBorough
    );

    if (matching.length > 0) {
      const layer = L.geoJSON({
        type: 'FeatureCollection',
        features: matching,
      } as FeatureCollection);
      const bounds = layer.getBounds();
      if (bounds.isValid()) {
        map.fitBounds(bounds, { padding: [24, 24], maxZoom: 13, animate: true });
      }
    }

    return () => clearTimeout(timer);
  }, [geoData, filterBorough, map]);

  return null;
};

const ChoroplethMap: React.FC<ChoroplethMapProps> = ({ filterBorough }) => {
  const [geoData, setGeoData] = useState<FeatureCollection | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const geoJsonLayerRef = useRef<L.GeoJSON | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch('./data/nyc-taxi-zones.geojson')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: FeatureCollection) => {
        if (!cancelled) setGeoData(data);
      })
      .catch((err) => {
        if (!cancelled) {
          setLoadError('No se pudo cargar la geometría de zonas.');
          console.error('Error cargando GeoJSON:', err);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // Resumen dinámico para el distrito filtrado
  const boroughSummary = useMemo(() => {
    const list =
      filterBorough === 'Todos'
        ? zoneData
        : zoneData.filter((z) => z.borough === filterBorough);
    const totalPickups = list.reduce((acc, z) => acc + z.pickups, 0);
    const topZone = [...list].sort((a, b) => b.pickups - a.pickups)[0];
    return {
      zoneCount: list.length,
      totalPickups,
      topZone,
    };
  }, [filterBorough]);

  const boroughIcons = useMemo(
    () =>
      BOROUGH_LABELS.map((b) => ({
        ...b,
        icon: L.divIcon({
          className: 'borough-label-icon',
          html: `<span class="borough-label-badge">${b.name}</span>`,
          iconSize: [0, 0],
        }),
      })),
    []
  );

  const getFeatureStyle = (feature?: Feature<Geometry, ZoneGeoProps>): L.PathOptions => {
    const props = feature?.properties;
    const id = props?.LocationID ?? -1;
    const stats = zoneById[id];
    const pickups = stats?.pickups ?? 0;
    const borough = stats?.borough ?? props?.borough ?? '';
    const isMatch = filterBorough === 'Todos' || borough === filterBorough;

    return {
      fillColor: getZoneFillColor(pickups),
      fillOpacity: isMatch ? 0.48 : 0.08,
      color: isMatch ? '#0F1A2E' : '#94A3B8',
      weight: isMatch ? 0.9 : 0.4,
      opacity: isMatch ? 0.72 : 0.35,
    };
  };

  const onEachFeature = (feature: Feature<Geometry, ZoneGeoProps>, layer: L.Layer) => {
    const props = feature.properties;
    const id = props?.LocationID ?? -1;
    const stats = zoneById[id];
    const zoneName = stats?.zone ?? props?.zone ?? `Zona ${id}`;
    const borough = stats?.borough ?? props?.borough ?? 'NYC';
    const pickups = stats?.pickups ?? 0;
    const avgDuration = stats?.avgDuration ?? 0;
    const avgFarePerMile = stats?.avgFarePerMile ?? 0;

    const tooltipHtml = `
      <div style="min-width:175px;">
        <div style="font-weight:700;font-size:13px;line-height:1.25;color:#FFFFFF;">${zoneName}</div>
        <div style="font-size:11px;color:#94A3B8;margin-bottom:6px;">${borough} · ID ${id}</div>
        <div style="border-top:1px solid rgba(255,255,255,0.14);padding-top:6px;display:grid;gap:3px;font-size:11.5px;">
          <div style="display:flex;justify-content:space-between;gap:12px;">
            <span style="color:#CBD5E1;">Salidas:</span>
            <strong style="font-family:'JetBrains Mono',monospace;color:#FFFFFF;">${pickups.toLocaleString('es-MX')}</strong>
          </div>
          <div style="display:flex;justify-content:space-between;gap:12px;">
            <span style="color:#CBD5E1;">Duración prom.:</span>
            <strong style="font-family:'JetBrains Mono',monospace;color:#FFFFFF;">${avgDuration > 0 ? `${avgDuration.toFixed(1)} min` : 'Sin datos'}</strong>
          </div>
          <div style="display:flex;justify-content:space-between;gap:12px;">
            <span style="color:#CBD5E1;">Tarifa / milla:</span>
            <strong style="font-family:'JetBrains Mono',monospace;color:#FFFFFF;">${avgFarePerMile > 0 ? `$${avgFarePerMile.toFixed(2)}` : 'Sin datos'}</strong>
          </div>
        </div>
      </div>
    `;

    layer.bindTooltip(tooltipHtml, {
      sticky: true,
      direction: 'top',
      offset: [0, -8],
      className: 'zone-tooltip',
    });

    layer.on({
      mouseover: (e) => {
        const target = e.target as L.Path;
        target.setStyle({
          weight: 2.2,
          color: '#0F1A2E',
          opacity: 1,
          fillOpacity: 0.68,
        });
        target.bringToFront();
      },
      mouseout: (e) => {
        if (geoJsonLayerRef.current) {
          geoJsonLayerRef.current.resetStyle(e.target as L.Path);
        }
      },
    });
  };

  return (
    <div className="bg-card rounded-xl shadow-card p-4 lg:p-5 h-full flex flex-col">
      {/* Encabezado orientado a pregunta */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
        <div>
          <h3 className="text-[15px] font-bold text-ink tracking-tight">
            ¿Dónde se concentra la demanda de viajes?
          </h3>
          <p className="text-xs text-ink-tertiary mt-0.5">
            Densidad de salidas en las 263 zonas TLC · Polígonos reales semitransparentes sobre callejero
          </p>
        </div>

        {/* Resumen rápido del distrito seleccionado */}
        <div className="flex items-center gap-3 text-right bg-canvas px-3 py-1.5 rounded-lg border border-slate-200/70 flex-shrink-0">
          <div>
            <p className="text-[10px] uppercase tracking-wider font-semibold text-ink-tertiary">
              {filterBorough === 'Todos' ? 'Ciudad completa' : filterBorough}
            </p>
            <p className="text-xs font-mono font-bold text-ink tabular-nums">
              {boroughSummary.totalPickups.toLocaleString('es-MX')} salidas
            </p>
          </div>
          {boroughSummary.topZone && (
            <div className="border-l border-slate-200 pl-3">
              <p className="text-[10px] uppercase tracking-wider font-semibold text-ink-tertiary">
                Zona líder
              </p>
              <p className="text-xs font-semibold text-taxi truncate max-w-[150px]">
                {boroughSummary.topZone.zone}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Contenedor del mapa */}
      <div
        className="rounded-lg overflow-hidden border border-slate-200/80 relative flex-1"
        style={{ minHeight: '410px' }}
      >
        <MapContainer
          center={NYC_CENTER}
          zoom={NYC_DEFAULT_ZOOM}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%', minHeight: '410px' }}
          preferCanvas={true}
        >
          <MapBoundsController geoData={geoData} filterBorough={filterBorough} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom={18}
          />

          {geoData && (
            <GeoJSON
              key={filterBorough}
              ref={(ref) => {
                geoJsonLayerRef.current = ref;
              }}
              data={geoData}
              style={(feature) =>
                getFeatureStyle(feature as Feature<Geometry, ZoneGeoProps> | undefined)
              }
              onEachFeature={(feature, layer) =>
                onEachFeature(feature as Feature<Geometry, ZoneGeoProps>, layer)
              }
            />
          )}

          {/* Etiquetas de los 5 distritos */}
          {boroughIcons.map((b) => {
            if (filterBorough !== 'Todos' && filterBorough !== b.name) return null;
            return (
              <Marker
                key={b.name}
                position={b.coords}
                icon={b.icon}
                interactive={false}
              />
            );
          })}
        </MapContainer>

        {/* Estado de carga o error */}
        {!geoData && !loadError && (
          <div className="absolute inset-0 bg-canvas/75 backdrop-blur-[1px] flex items-center justify-center z-[500]">
            <span className="text-xs font-medium text-ink-secondary bg-white px-3 py-1.5 rounded-md shadow-card">
              Cargando geometría de 263 zonas TLC…
            </span>
          </div>
        )}
        {loadError && (
          <div className="absolute inset-0 bg-canvas/90 flex items-center justify-center z-[500]">
            <span className="text-xs font-medium text-taxi bg-white px-3 py-1.5 rounded-md shadow-card">
              {loadError}
            </span>
          </div>
        )}
      </div>

      {/* Leyenda por cuantiles con rangos reales */}
      <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-2.5 border-t border-slate-100">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-semibold text-ink-secondary">
            Salidas / mes:
          </span>
          {MAP_QUANTILE_SCALE.map((step) => (
            <div key={step.label} className="inline-flex items-center gap-1.5">
              <span
                className="w-3.5 h-3 rounded-[3px] border border-slate-900/20"
                style={{ backgroundColor: step.color, opacity: 0.78 }}
              />
              <span className="text-[11px] font-mono text-ink-tertiary tabular-nums">
                {step.label}
              </span>
            </div>
          ))}
        </div>

        <span className="text-[11px] text-ink-muted">
          Cartografía oficial NYC TLC ({boroughSummary.zoneCount} zonas visibles)
        </span>
      </div>
    </div>
  );
};

export default ChoroplethMap;
