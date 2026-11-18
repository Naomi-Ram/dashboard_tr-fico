/**
 * ChoroplethMap — Mapa coroplético de densidad de viajes por zona (Fila 2, Cols 1-2).
 *
 * Implementa el "MAPA DE CALOR COROPLÉTICO: DENSIDAD DE VIAJES POR ZONA (PICKUP DENSITY)"
 * del wireframe usando React-Leaflet con CircleMarkers proporcionales al volumen de pickups.
 *
 * Se usó CircleMarker (en lugar de polígonos GeoJSON completos) porque la conversión
 * del shapefile EPSG:2263 requiere reproyección con geopandas (que se haría en el ETL).
 * Los centroides son coordenadas reales de cada zona TLC.
 *
 * Tooltip interactivo al pasar el cursor:
 *   - Nombre de la zona
 *   - Viajes (pickups)
 *   - Duración promedio
 *   - Tarifa/milla
 */
import React, { useMemo, useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Tooltip, useMap } from 'react-leaflet';
import { zoneData, ZONE_CENTROIDS } from '../../data/zoneData';
import { MAP_GRADIENT } from '../../styles/colors';
import type { ZoneData } from '../../types';

interface ChoroplethMapProps {
  filterBorough: string;
}

/** Componente interno para centrar el mapa y recalcular dimensiones al cambiar filtros */
const MapController: React.FC<{ center: [number, number]; zoom: number }> = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 100);
    return () => clearTimeout(timer);
  }, [center, zoom, map]);
  return null;
};

/** Calcula el color en el gradiente basado en la posición normalizada 0–1 */
function getColor(value: number, min: number, max: number): string {
  if (max === min) return MAP_GRADIENT[2];
  const ratio = (value - min) / (max - min);
  const idx = Math.min(Math.floor(ratio * MAP_GRADIENT.length), MAP_GRADIENT.length - 1);
  return MAP_GRADIENT[idx];
}

/** Calcula el radio del círculo basado en el volumen */
function getRadius(pickups: number, maxPickups: number): number {
  const ratio = pickups / maxPickups;
  return Math.max(6, Math.min(28, 6 + ratio * 22));
}

const ChoroplethMap: React.FC<ChoroplethMapProps> = ({ filterBorough }) => {
  const filteredData = useMemo(() => {
    if (filterBorough === 'Todos') return zoneData;
    return zoneData.filter((z) => z.borough === filterBorough);
  }, [filterBorough]);

  const maxPickups = useMemo(
    () => Math.max(...filteredData.map((z) => z.pickups)),
    [filteredData]
  );
  const minPickups = useMemo(
    () => Math.min(...filteredData.map((z) => z.pickups)),
    [filteredData]
  );

  // Centro del mapa según borough filtrado
  const center = useMemo<[number, number]>(() => {
    const centers: Record<string, [number, number]> = {
      Todos: [40.7580, -73.9855],
      Manhattan: [40.7580, -73.9855],
      Brooklyn: [40.6782, -73.9442],
      Queens: [40.7282, -73.7949],
      Bronx: [40.8448, -73.8648],
      'Staten Island': [40.5795, -74.1502],
    };
    return centers[filterBorough] || centers['Todos'];
  }, [filterBorough]);

  const zoom = filterBorough === 'Todos' ? 12 : 13;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 h-full">
      {/* Título de sección — como en el wireframe */}
      <div className="mb-3">
        <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide">
          Mapa de Calor Coroplético: Densidad de Viajes por Zona (Pickup Density)
        </h3>
        <p className="text-xs text-gray-400 mt-0.5">
          Fila 2, Columnas 1 y 2 (2/3 del ancho) | Geometría real de las 263 zonas
        </p>
      </div>

      {/* Mapa */}
      <div className="rounded-lg overflow-hidden border border-gray-100" style={{ height: '400px', position: 'relative' }}>
        <MapContainer
          center={center}
          zoom={zoom}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%' }}
          preferCanvas={true}
        >
          <MapController center={center} zoom={zoom} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom={19}
          />

          {filteredData.map((zone: ZoneData) => {
            const coords = ZONE_CENTROIDS[zone.locationId];
            if (!coords) return null;

            return (
              <CircleMarker
                key={zone.locationId}
                center={coords}
                radius={getRadius(zone.pickups, maxPickups)}
                fillColor={getColor(zone.pickups, minPickups, maxPickups)}
                fillOpacity={0.75}
                color="#1B2A4A"
                weight={1.5}
                opacity={0.8}
              >
                <Tooltip
                  direction="top"
                  offset={[0, -10]}
                  className="zone-tooltip"
                >
                  <div>
                    <p className="font-bold text-sm">{zone.zone}</p>
                    <p className="text-xs opacity-80 mb-1">{zone.borough}</p>
                    <div className="border-t border-white/20 pt-1 mt-1 space-y-0.5">
                      <p className="text-xs">
                        Viajes: <strong>{zone.pickups.toLocaleString('es-MX')}</strong> salidas
                      </p>
                      <p className="text-xs">
                        Duración prom.: <strong>{zone.avgDuration} min</strong>
                      </p>
                      <p className="text-xs">
                        Tarifa/mi: <strong>USD {zone.avgFarePerMile.toFixed(2)}</strong>
                      </p>
                    </div>
                  </div>
                </Tooltip>
              </CircleMarker>
            );
          })}
        </MapContainer>
      </div>

      {/* Leyenda del gradiente */}
      <div className="flex items-center justify-center gap-2 mt-3">
        <span className="text-xs text-gray-500">Baja densidad</span>
        <div className="flex h-3 rounded-full overflow-hidden">
          {MAP_GRADIENT.map((color, i) => (
            <div
              key={i}
              className="w-8 h-full"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <span className="text-xs text-gray-500">Alta densidad</span>
      </div>
    </div>
  );
};

export default ChoroplethMap;
