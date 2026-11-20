/**
 * Convierte el shapefile oficial de zonas TLC (EPSG:2263) a GeoJSON WGS84 (EPSG:4326)
 * simplificado para renderizado rápido en React-Leaflet.
 *
 * Uso: npm run convert-shapefile (desde dashboard/)
 */
import { execSync } from 'node:child_process';
import { mkdirSync, statSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..', '..');
const inputShp = resolve(rootDir, 'taxi_zones', 'taxi_zones.shp');
const outputDir = resolve(__dirname, '..', 'public', 'data');
const outputGeoJson = resolve(outputDir, 'nyc-taxi-zones.geojson');

mkdirSync(outputDir, { recursive: true });

const cmd = [
  'npx -y mapshaper',
  `"${inputShp}"`,
  '-proj wgs84',
  '-simplify dp 12% keep-shapes',
  '-filter-fields LocationID,zone,borough',
  `-o format=geojson precision=0.0001 "${outputGeoJson}"`,
].join(' ');

console.log('Convirtiendo shapefile a GeoJSON WGS84...');
execSync(cmd, { stdio: 'inherit' });

const sizeKb = (statSync(outputGeoJson).size / 1024).toFixed(1);
console.log(`Listo: ${outputGeoJson} (${sizeKb} KB)`);
