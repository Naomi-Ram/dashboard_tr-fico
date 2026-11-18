/**
 * Top 30 zonas por número de pickups — enero 2025.
 * Las primeras dos zonas usan los valores reales del README;
 * el resto se distribuye de forma coherente con los patrones
 * conocidos de demanda de yellow taxi en NYC.
 */
import type { ZoneData } from '../types';

export const zoneData: ZoneData[] = [
  { locationId: 161, borough: 'Manhattan', zone: 'Midtown Center',                  serviceZone: 'Yellow Zone', pickups: 159790, avgDuration: 12.3, avgFarePerMile: 8.45 },
  { locationId: 237, borough: 'Manhattan', zone: 'Upper East Side South',            serviceZone: 'Yellow Zone', pickups: 156836, avgDuration: 11.8, avgFarePerMile: 7.92 },
  { locationId: 236, borough: 'Manhattan', zone: 'Upper East Side North',            serviceZone: 'Yellow Zone', pickups: 142100, avgDuration: 12.1, avgFarePerMile: 7.85 },
  { locationId: 162, borough: 'Manhattan', zone: 'Midtown East',                     serviceZone: 'Yellow Zone', pickups: 138450, avgDuration: 13.5, avgFarePerMile: 8.60 },
  { locationId: 230, borough: 'Manhattan', zone: 'Times Sq/Theatre District',        serviceZone: 'Yellow Zone', pickups: 131200, avgDuration: 15.2, avgFarePerMile: 9.10 },
  { locationId: 186, borough: 'Manhattan', zone: 'Penn Station/Madison Sq West',     serviceZone: 'Yellow Zone', pickups: 128900, avgDuration: 14.8, avgFarePerMile: 8.75 },
  { locationId: 170, borough: 'Manhattan', zone: 'Murray Hill',                      serviceZone: 'Yellow Zone', pickups: 121300, avgDuration: 13.1, avgFarePerMile: 8.20 },
  { locationId: 234, borough: 'Manhattan', zone: 'Union Sq',                         serviceZone: 'Yellow Zone', pickups: 115800, avgDuration: 12.9, avgFarePerMile: 7.95 },
  { locationId: 163, borough: 'Manhattan', zone: 'Midtown North',                    serviceZone: 'Yellow Zone', pickups: 112400, avgDuration: 14.5, avgFarePerMile: 8.80 },
  { locationId: 164, borough: 'Manhattan', zone: 'Midtown South',                    serviceZone: 'Yellow Zone', pickups: 108700, avgDuration: 14.0, avgFarePerMile: 8.55 },
  { locationId: 239, borough: 'Manhattan', zone: 'Upper West Side South',            serviceZone: 'Yellow Zone', pickups: 105200, avgDuration: 13.2, avgFarePerMile: 7.70 },
  { locationId: 142, borough: 'Manhattan', zone: 'Lincoln Square East',              serviceZone: 'Yellow Zone', pickups: 98500,  avgDuration: 13.8, avgFarePerMile: 7.90 },
  { locationId: 140, borough: 'Manhattan', zone: 'Lenox Hill East',                  serviceZone: 'Yellow Zone', pickups: 95300,  avgDuration: 12.5, avgFarePerMile: 7.65 },
  { locationId: 141, borough: 'Manhattan', zone: 'Lenox Hill West',                  serviceZone: 'Yellow Zone', pickups: 93800,  avgDuration: 12.2, avgFarePerMile: 7.70 },
  { locationId: 48,  borough: 'Manhattan', zone: 'Clinton East',                     serviceZone: 'Yellow Zone', pickups: 91200,  avgDuration: 14.6, avgFarePerMile: 8.40 },
  { locationId: 238, borough: 'Manhattan', zone: 'Upper West Side North',            serviceZone: 'Yellow Zone', pickups: 88100,  avgDuration: 13.5, avgFarePerMile: 7.55 },
  { locationId: 107, borough: 'Manhattan', zone: 'Gramercy',                         serviceZone: 'Yellow Zone', pickups: 85600,  avgDuration: 12.8, avgFarePerMile: 7.80 },
  { locationId: 137, borough: 'Manhattan', zone: 'Kips Bay',                         serviceZone: 'Yellow Zone', pickups: 82900,  avgDuration: 12.6, avgFarePerMile: 7.75 },
  { locationId: 229, borough: 'Manhattan', zone: 'Sutton Place/Turtle Bay North',    serviceZone: 'Yellow Zone', pickups: 79400,  avgDuration: 12.0, avgFarePerMile: 7.60 },
  { locationId: 90,  borough: 'Manhattan', zone: 'Flatiron',                         serviceZone: 'Yellow Zone', pickups: 76800,  avgDuration: 13.4, avgFarePerMile: 8.10 },
  { locationId: 100, borough: 'Manhattan', zone: 'Garment District',                 serviceZone: 'Yellow Zone', pickups: 74200,  avgDuration: 14.2, avgFarePerMile: 8.50 },
  { locationId: 50,  borough: 'Manhattan', zone: 'Clinton West',                     serviceZone: 'Yellow Zone', pickups: 71500,  avgDuration: 14.8, avgFarePerMile: 8.35 },
  { locationId: 68,  borough: 'Manhattan', zone: 'East Chelsea',                     serviceZone: 'Yellow Zone', pickups: 68900,  avgDuration: 13.7, avgFarePerMile: 8.00 },
  { locationId: 246, borough: 'Manhattan', zone: 'West Chelsea/Hudson Yards',        serviceZone: 'Yellow Zone', pickups: 65300,  avgDuration: 15.1, avgFarePerMile: 8.25 },
  { locationId: 113, borough: 'Manhattan', zone: 'Greenwich Village North',          serviceZone: 'Yellow Zone', pickups: 62700,  avgDuration: 12.5, avgFarePerMile: 7.60 },
  { locationId: 132, borough: 'Queens',    zone: 'JFK Airport',                      serviceZone: 'Airports',    pickups: 58900,  avgDuration: 42.5, avgFarePerMile: 5.20 },
  { locationId: 138, borough: 'Queens',    zone: 'LaGuardia Airport',                serviceZone: 'Airports',    pickups: 55400,  avgDuration: 32.8, avgFarePerMile: 5.80 },
  { locationId: 114, borough: 'Manhattan', zone: 'Greenwich Village South',          serviceZone: 'Yellow Zone', pickups: 54200,  avgDuration: 12.8, avgFarePerMile: 7.55 },
  { locationId: 249, borough: 'Manhattan', zone: 'West Village',                     serviceZone: 'Yellow Zone', pickups: 51800,  avgDuration: 13.0, avgFarePerMile: 7.70 },
  { locationId: 79,  borough: 'Manhattan', zone: 'East Village',                     serviceZone: 'Yellow Zone', pickups: 49500,  avgDuration: 12.2, avgFarePerMile: 7.45 },
];

/**
 * Coordenadas centrales aproximadas de las zonas principales.
 * Se usan cuando no hay GeoJSON de polígonos disponible.
 */
export const ZONE_CENTROIDS: Record<number, [number, number]> = {
  161: [40.7549, -73.9840],  // Midtown Center
  237: [40.7680, -73.9630],  // Upper East Side South
  236: [40.7750, -73.9580],  // Upper East Side North
  162: [40.7555, -73.9710],  // Midtown East
  230: [40.7580, -73.9855],  // Times Sq/Theatre District
  186: [40.7505, -73.9930],  // Penn Station/Madison Sq West
  170: [40.7488, -73.9775],  // Murray Hill
  234: [40.7360, -73.9910],  // Union Sq
  163: [40.7640, -73.9790],  // Midtown North
  164: [40.7510, -73.9870],  // Midtown South
  239: [40.7795, -73.9810],  // Upper West Side South
  142: [40.7730, -73.9850],  // Lincoln Square East
  140: [40.7685, -73.9640],  // Lenox Hill East
  141: [40.7700, -73.9700],  // Lenox Hill West
  48:  [40.7595, -73.9930],  // Clinton East
  238: [40.7870, -73.9750],  // Upper West Side North
  107: [40.7380, -73.9830],  // Gramercy
  137: [40.7420, -73.9790],  // Kips Bay
  229: [40.7600, -73.9680],  // Sutton Place
  90:  [40.7410, -73.9900],  // Flatiron
  100: [40.7540, -73.9910],  // Garment District
  50:  [40.7620, -73.9980],  // Clinton West
  68:  [40.7460, -73.9960],  // East Chelsea
  246: [40.7520, -74.0010],  // West Chelsea/Hudson Yards
  113: [40.7340, -74.0000],  // Greenwich Village North
  132: [40.6413, -73.7781],  // JFK Airport
  138: [40.7769, -73.8740],  // LaGuardia Airport
  114: [40.7300, -74.0010],  // Greenwich Village South
  249: [40.7340, -74.0060],  // West Village
  79:  [40.7265, -73.9838],  // East Village
};
