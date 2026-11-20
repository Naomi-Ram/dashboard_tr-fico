/**
 * Datos reales agregados de las 263 zonas TLC — enero 2025.
 * Procesados directamente desde yellow_tripdata_2025-01.parquet cruzado con taxi_zone_lookup.csv.
 */
import type { ZoneData } from '../types';

export const zoneData: ZoneData[] = [
  {
    "locationId": 1,
    "borough": "EWR",
    "zone": "Newark Airport",
    "serviceZone": "EWR",
    "pickups": 22,
    "avgDuration": 30.0,
    "avgFarePerMile": 34.02
  },
  {
    "locationId": 2,
    "borough": "Queens",
    "zone": "Jamaica Bay",
    "serviceZone": "Boro Zone",
    "pickups": 5,
    "avgDuration": 27.1,
    "avgFarePerMile": 8.49
  },
  {
    "locationId": 3,
    "borough": "Bronx",
    "zone": "Allerton/Pelham Gardens",
    "serviceZone": "Boro Zone",
    "pickups": 152,
    "avgDuration": 37.6,
    "avgFarePerMile": 5.81
  },
  {
    "locationId": 4,
    "borough": "Manhattan",
    "zone": "Alphabet City",
    "serviceZone": "Yellow Zone",
    "pickups": 6517,
    "avgDuration": 13.9,
    "avgFarePerMile": 7.39
  },
  {
    "locationId": 5,
    "borough": "Staten Island",
    "zone": "Arden Heights",
    "serviceZone": "Boro Zone",
    "pickups": 2,
    "avgDuration": 40.2,
    "avgFarePerMile": 4.54
  },
  {
    "locationId": 6,
    "borough": "Staten Island",
    "zone": "Arrochar/Fort Wadsworth",
    "serviceZone": "Boro Zone",
    "pickups": 77,
    "avgDuration": 14.2,
    "avgFarePerMile": 1.95
  },
  {
    "locationId": 7,
    "borough": "Queens",
    "zone": "Astoria",
    "serviceZone": "Boro Zone",
    "pickups": 2542,
    "avgDuration": 19.4,
    "avgFarePerMile": 7.05
  },
  {
    "locationId": 8,
    "borough": "Queens",
    "zone": "Astoria Park",
    "serviceZone": "Boro Zone",
    "pickups": 19,
    "avgDuration": 19.6,
    "avgFarePerMile": 9.94
  },
  {
    "locationId": 9,
    "borough": "Queens",
    "zone": "Auburndale",
    "serviceZone": "Boro Zone",
    "pickups": 87,
    "avgDuration": 26.8,
    "avgFarePerMile": 5.93
  },
  {
    "locationId": 10,
    "borough": "Queens",
    "zone": "Baisley Park",
    "serviceZone": "Boro Zone",
    "pickups": 1119,
    "avgDuration": 32.3,
    "avgFarePerMile": 5.89
  },
  {
    "locationId": 11,
    "borough": "Brooklyn",
    "zone": "Bath Beach",
    "serviceZone": "Boro Zone",
    "pickups": 124,
    "avgDuration": 32.1,
    "avgFarePerMile": 6.83
  },
  {
    "locationId": 12,
    "borough": "Manhattan",
    "zone": "Battery Park",
    "serviceZone": "Yellow Zone",
    "pickups": 843,
    "avgDuration": 18.7,
    "avgFarePerMile": 6.38
  },
  {
    "locationId": 13,
    "borough": "Manhattan",
    "zone": "Battery Park City",
    "serviceZone": "Yellow Zone",
    "pickups": 19051,
    "avgDuration": 16.4,
    "avgFarePerMile": 6.24
  },
  {
    "locationId": 14,
    "borough": "Brooklyn",
    "zone": "Bay Ridge",
    "serviceZone": "Boro Zone",
    "pickups": 785,
    "avgDuration": 31.8,
    "avgFarePerMile": 5.89
  },
  {
    "locationId": 15,
    "borough": "Queens",
    "zone": "Bay Terrace/Fort Totten",
    "serviceZone": "Boro Zone",
    "pickups": 74,
    "avgDuration": 25.7,
    "avgFarePerMile": 4.5
  },
  {
    "locationId": 16,
    "borough": "Queens",
    "zone": "Bayside",
    "serviceZone": "Boro Zone",
    "pickups": 100,
    "avgDuration": 28.9,
    "avgFarePerMile": 4.91
  },
  {
    "locationId": 17,
    "borough": "Brooklyn",
    "zone": "Bedford",
    "serviceZone": "Boro Zone",
    "pickups": 1263,
    "avgDuration": 27.8,
    "avgFarePerMile": 7.31
  },
  {
    "locationId": 18,
    "borough": "Bronx",
    "zone": "Bedford Park",
    "serviceZone": "Boro Zone",
    "pickups": 294,
    "avgDuration": 35.1,
    "avgFarePerMile": 5.14
  },
  {
    "locationId": 19,
    "borough": "Queens",
    "zone": "Bellerose",
    "serviceZone": "Boro Zone",
    "pickups": 190,
    "avgDuration": 27.2,
    "avgFarePerMile": 5.32
  },
  {
    "locationId": 20,
    "borough": "Bronx",
    "zone": "Belmont",
    "serviceZone": "Boro Zone",
    "pickups": 175,
    "avgDuration": 38.6,
    "avgFarePerMile": 5.34
  },
  {
    "locationId": 21,
    "borough": "Brooklyn",
    "zone": "Bensonhurst East",
    "serviceZone": "Boro Zone",
    "pickups": 260,
    "avgDuration": 32.6,
    "avgFarePerMile": 10.16
  },
  {
    "locationId": 22,
    "borough": "Brooklyn",
    "zone": "Bensonhurst West",
    "serviceZone": "Boro Zone",
    "pickups": 288,
    "avgDuration": 33.2,
    "avgFarePerMile": 6.02
  },
  {
    "locationId": 23,
    "borough": "Staten Island",
    "zone": "Bloomfield/Emerson Hill",
    "serviceZone": "Boro Zone",
    "pickups": 9,
    "avgDuration": 25.1,
    "avgFarePerMile": 4.45
  },
  {
    "locationId": 24,
    "borough": "Manhattan",
    "zone": "Bloomingdale",
    "serviceZone": "Yellow Zone",
    "pickups": 7818,
    "avgDuration": 13.2,
    "avgFarePerMile": 7.54
  },
  {
    "locationId": 25,
    "borough": "Brooklyn",
    "zone": "Boerum Hill",
    "serviceZone": "Boro Zone",
    "pickups": 1873,
    "avgDuration": 24.3,
    "avgFarePerMile": 6.49
  },
  {
    "locationId": 26,
    "borough": "Brooklyn",
    "zone": "Borough Park",
    "serviceZone": "Boro Zone",
    "pickups": 587,
    "avgDuration": 31.1,
    "avgFarePerMile": 7.48
  },
  {
    "locationId": 27,
    "borough": "Queens",
    "zone": "Breezy Point/Fort Tilden/Riis Beach",
    "serviceZone": "Boro Zone",
    "pickups": 2,
    "avgDuration": 51.5,
    "avgFarePerMile": 5.52
  },
  {
    "locationId": 28,
    "borough": "Queens",
    "zone": "Briarwood/Jamaica Hills",
    "serviceZone": "Boro Zone",
    "pickups": 577,
    "avgDuration": 25.0,
    "avgFarePerMile": 6.23
  },
  {
    "locationId": 29,
    "borough": "Brooklyn",
    "zone": "Brighton Beach",
    "serviceZone": "Boro Zone",
    "pickups": 215,
    "avgDuration": 39.9,
    "avgFarePerMile": 7.77
  },
  {
    "locationId": 30,
    "borough": "Queens",
    "zone": "Broad Channel",
    "serviceZone": "Boro Zone",
    "pickups": 9,
    "avgDuration": 29.4,
    "avgFarePerMile": 4.73
  },
  {
    "locationId": 31,
    "borough": "Bronx",
    "zone": "Bronx Park",
    "serviceZone": "Boro Zone",
    "pickups": 25,
    "avgDuration": 22.1,
    "avgFarePerMile": 6.18
  },
  {
    "locationId": 32,
    "borough": "Bronx",
    "zone": "Bronxdale",
    "serviceZone": "Boro Zone",
    "pickups": 202,
    "avgDuration": 37.0,
    "avgFarePerMile": 6.13
  },
  {
    "locationId": 33,
    "borough": "Brooklyn",
    "zone": "Brooklyn Heights",
    "serviceZone": "Boro Zone",
    "pickups": 2071,
    "avgDuration": 22.7,
    "avgFarePerMile": 6.39
  },
  {
    "locationId": 34,
    "borough": "Brooklyn",
    "zone": "Brooklyn Navy Yard",
    "serviceZone": "Boro Zone",
    "pickups": 172,
    "avgDuration": 21.7,
    "avgFarePerMile": 7.78
  },
  {
    "locationId": 35,
    "borough": "Brooklyn",
    "zone": "Brownsville",
    "serviceZone": "Boro Zone",
    "pickups": 1306,
    "avgDuration": 33.1,
    "avgFarePerMile": 6.93
  },
  {
    "locationId": 36,
    "borough": "Brooklyn",
    "zone": "Bushwick North",
    "serviceZone": "Boro Zone",
    "pickups": 1003,
    "avgDuration": 23.7,
    "avgFarePerMile": 5.93
  },
  {
    "locationId": 37,
    "borough": "Brooklyn",
    "zone": "Bushwick South",
    "serviceZone": "Boro Zone",
    "pickups": 1437,
    "avgDuration": 27.1,
    "avgFarePerMile": 6.58
  },
  {
    "locationId": 38,
    "borough": "Queens",
    "zone": "Cambria Heights",
    "serviceZone": "Boro Zone",
    "pickups": 179,
    "avgDuration": 43.0,
    "avgFarePerMile": 6.91
  },
  {
    "locationId": 39,
    "borough": "Brooklyn",
    "zone": "Canarsie",
    "serviceZone": "Boro Zone",
    "pickups": 1634,
    "avgDuration": 32.4,
    "avgFarePerMile": 6.83
  },
  {
    "locationId": 40,
    "borough": "Brooklyn",
    "zone": "Carroll Gardens",
    "serviceZone": "Boro Zone",
    "pickups": 643,
    "avgDuration": 21.4,
    "avgFarePerMile": 6.44
  },
  {
    "locationId": 41,
    "borough": "Manhattan",
    "zone": "Central Harlem",
    "serviceZone": "Boro Zone",
    "pickups": 9280,
    "avgDuration": 15.1,
    "avgFarePerMile": 7.53
  },
  {
    "locationId": 42,
    "borough": "Manhattan",
    "zone": "Central Harlem North",
    "serviceZone": "Boro Zone",
    "pickups": 4917,
    "avgDuration": 19.8,
    "avgFarePerMile": 7.47
  },
  {
    "locationId": 43,
    "borough": "Manhattan",
    "zone": "Central Park",
    "serviceZone": "Yellow Zone",
    "pickups": 46606,
    "avgDuration": 13.2,
    "avgFarePerMile": 8.15
  },
  {
    "locationId": 44,
    "borough": "Staten Island",
    "zone": "Charleston/Tottenville",
    "serviceZone": "Boro Zone",
    "pickups": 0,
    "avgDuration": 0.0,
    "avgFarePerMile": 0.0
  },
  {
    "locationId": 45,
    "borough": "Manhattan",
    "zone": "Chinatown",
    "serviceZone": "Yellow Zone",
    "pickups": 5380,
    "avgDuration": 17.3,
    "avgFarePerMile": 7.2
  },
  {
    "locationId": 46,
    "borough": "Bronx",
    "zone": "City Island",
    "serviceZone": "Boro Zone",
    "pickups": 20,
    "avgDuration": 37.9,
    "avgFarePerMile": 3.76
  },
  {
    "locationId": 47,
    "borough": "Bronx",
    "zone": "Claremont/Bathgate",
    "serviceZone": "Boro Zone",
    "pickups": 302,
    "avgDuration": 36.3,
    "avgFarePerMile": 5.41
  },
  {
    "locationId": 48,
    "borough": "Manhattan",
    "zone": "Clinton East",
    "serviceZone": "Yellow Zone",
    "pickups": 78635,
    "avgDuration": 12.3,
    "avgFarePerMile": 7.95
  },
  {
    "locationId": 49,
    "borough": "Brooklyn",
    "zone": "Clinton Hill",
    "serviceZone": "Boro Zone",
    "pickups": 1148,
    "avgDuration": 28.1,
    "avgFarePerMile": 6.83
  },
  {
    "locationId": 50,
    "borough": "Manhattan",
    "zone": "Clinton West",
    "serviceZone": "Yellow Zone",
    "pickups": 16565,
    "avgDuration": 12.3,
    "avgFarePerMile": 7.55
  },
  {
    "locationId": 51,
    "borough": "Bronx",
    "zone": "Co-Op City",
    "serviceZone": "Boro Zone",
    "pickups": 527,
    "avgDuration": 43.4,
    "avgFarePerMile": 4.34
  },
  {
    "locationId": 52,
    "borough": "Brooklyn",
    "zone": "Cobble Hill",
    "serviceZone": "Boro Zone",
    "pickups": 683,
    "avgDuration": 21.3,
    "avgFarePerMile": 7.11
  },
  {
    "locationId": 53,
    "borough": "Queens",
    "zone": "College Point",
    "serviceZone": "Boro Zone",
    "pickups": 172,
    "avgDuration": 27.6,
    "avgFarePerMile": 6.72
  },
  {
    "locationId": 54,
    "borough": "Brooklyn",
    "zone": "Columbia Street",
    "serviceZone": "Boro Zone",
    "pickups": 191,
    "avgDuration": 23.8,
    "avgFarePerMile": 6.52
  },
  {
    "locationId": 55,
    "borough": "Brooklyn",
    "zone": "Coney Island",
    "serviceZone": "Boro Zone",
    "pickups": 610,
    "avgDuration": 43.8,
    "avgFarePerMile": 5.03
  },
  {
    "locationId": 56,
    "borough": "Queens",
    "zone": "Corona",
    "serviceZone": "Boro Zone",
    "pickups": 549,
    "avgDuration": 27.6,
    "avgFarePerMile": 5.57
  },
  {
    "locationId": 57,
    "borough": "Queens",
    "zone": "Corona",
    "serviceZone": "Boro Zone",
    "pickups": 26,
    "avgDuration": 19.5,
    "avgFarePerMile": 4.81
  },
  {
    "locationId": 58,
    "borough": "Bronx",
    "zone": "Country Club",
    "serviceZone": "Boro Zone",
    "pickups": 21,
    "avgDuration": 26.8,
    "avgFarePerMile": 3.96
  },
  {
    "locationId": 59,
    "borough": "Bronx",
    "zone": "Crotona Park",
    "serviceZone": "Boro Zone",
    "pickups": 7,
    "avgDuration": 33.8,
    "avgFarePerMile": 5.45
  },
  {
    "locationId": 60,
    "borough": "Bronx",
    "zone": "Crotona Park East",
    "serviceZone": "Boro Zone",
    "pickups": 233,
    "avgDuration": 31.3,
    "avgFarePerMile": 5.43
  },
  {
    "locationId": 61,
    "borough": "Brooklyn",
    "zone": "Crown Heights North",
    "serviceZone": "Boro Zone",
    "pickups": 2574,
    "avgDuration": 30.7,
    "avgFarePerMile": 7.42
  },
  {
    "locationId": 62,
    "borough": "Brooklyn",
    "zone": "Crown Heights South",
    "serviceZone": "Boro Zone",
    "pickups": 814,
    "avgDuration": 30.4,
    "avgFarePerMile": 7.46
  },
  {
    "locationId": 63,
    "borough": "Brooklyn",
    "zone": "Cypress Hills",
    "serviceZone": "Boro Zone",
    "pickups": 551,
    "avgDuration": 30.1,
    "avgFarePerMile": 5.89
  },
  {
    "locationId": 64,
    "borough": "Queens",
    "zone": "Douglaston",
    "serviceZone": "Boro Zone",
    "pickups": 75,
    "avgDuration": 24.9,
    "avgFarePerMile": 3.81
  },
  {
    "locationId": 65,
    "borough": "Brooklyn",
    "zone": "Downtown Brooklyn/MetroTech",
    "serviceZone": "Boro Zone",
    "pickups": 2166,
    "avgDuration": 22.5,
    "avgFarePerMile": 6.81
  },
  {
    "locationId": 66,
    "borough": "Brooklyn",
    "zone": "DUMBO/Vinegar Hill",
    "serviceZone": "Boro Zone",
    "pickups": 1671,
    "avgDuration": 20.6,
    "avgFarePerMile": 5.74
  },
  {
    "locationId": 67,
    "borough": "Brooklyn",
    "zone": "Dyker Heights",
    "serviceZone": "Boro Zone",
    "pickups": 179,
    "avgDuration": 27.9,
    "avgFarePerMile": 6.27
  },
  {
    "locationId": 68,
    "borough": "Manhattan",
    "zone": "East Chelsea",
    "serviceZone": "Yellow Zone",
    "pickups": 85169,
    "avgDuration": 14.4,
    "avgFarePerMile": 8.0
  },
  {
    "locationId": 69,
    "borough": "Bronx",
    "zone": "East Concourse/Concourse Village",
    "serviceZone": "Boro Zone",
    "pickups": 688,
    "avgDuration": 34.5,
    "avgFarePerMile": 5.68
  },
  {
    "locationId": 70,
    "borough": "Queens",
    "zone": "East Elmhurst",
    "serviceZone": "Boro Zone",
    "pickups": 9190,
    "avgDuration": 26.4,
    "avgFarePerMile": 4.6
  },
  {
    "locationId": 71,
    "borough": "Brooklyn",
    "zone": "East Flatbush/Farragut",
    "serviceZone": "Boro Zone",
    "pickups": 1032,
    "avgDuration": 31.5,
    "avgFarePerMile": 7.38
  },
  {
    "locationId": 72,
    "borough": "Brooklyn",
    "zone": "East Flatbush/Remsen Village",
    "serviceZone": "Boro Zone",
    "pickups": 1258,
    "avgDuration": 30.6,
    "avgFarePerMile": 6.97
  },
  {
    "locationId": 73,
    "borough": "Queens",
    "zone": "East Flushing",
    "serviceZone": "Boro Zone",
    "pickups": 65,
    "avgDuration": 23.6,
    "avgFarePerMile": 4.81
  },
  {
    "locationId": 74,
    "borough": "Manhattan",
    "zone": "East Harlem North",
    "serviceZone": "Boro Zone",
    "pickups": 7690,
    "avgDuration": 15.6,
    "avgFarePerMile": 7.17
  },
  {
    "locationId": 75,
    "borough": "Manhattan",
    "zone": "East Harlem South",
    "serviceZone": "Boro Zone",
    "pickups": 20948,
    "avgDuration": 13.8,
    "avgFarePerMile": 7.73
  },
  {
    "locationId": 76,
    "borough": "Brooklyn",
    "zone": "East New York",
    "serviceZone": "Boro Zone",
    "pickups": 2367,
    "avgDuration": 33.1,
    "avgFarePerMile": 6.31
  },
  {
    "locationId": 77,
    "borough": "Brooklyn",
    "zone": "East New York/Pennsylvania Avenue",
    "serviceZone": "Boro Zone",
    "pickups": 597,
    "avgDuration": 33.0,
    "avgFarePerMile": 6.59
  },
  {
    "locationId": 78,
    "borough": "Bronx",
    "zone": "East Tremont",
    "serviceZone": "Boro Zone",
    "pickups": 319,
    "avgDuration": 33.4,
    "avgFarePerMile": 7.14
  },
  {
    "locationId": 79,
    "borough": "Manhattan",
    "zone": "East Village",
    "serviceZone": "Yellow Zone",
    "pickups": 75770,
    "avgDuration": 12.2,
    "avgFarePerMile": 7.58
  },
  {
    "locationId": 80,
    "borough": "Brooklyn",
    "zone": "East Williamsburg",
    "serviceZone": "Boro Zone",
    "pickups": 1453,
    "avgDuration": 22.0,
    "avgFarePerMile": 5.87
  },
  {
    "locationId": 81,
    "borough": "Bronx",
    "zone": "Eastchester",
    "serviceZone": "Boro Zone",
    "pickups": 219,
    "avgDuration": 36.0,
    "avgFarePerMile": 4.68
  },
  {
    "locationId": 82,
    "borough": "Queens",
    "zone": "Elmhurst",
    "serviceZone": "Boro Zone",
    "pickups": 1238,
    "avgDuration": 21.4,
    "avgFarePerMile": 6.25
  },
  {
    "locationId": 83,
    "borough": "Queens",
    "zone": "Elmhurst/Maspeth",
    "serviceZone": "Boro Zone",
    "pickups": 417,
    "avgDuration": 20.0,
    "avgFarePerMile": 6.75
  },
  {
    "locationId": 84,
    "borough": "Staten Island",
    "zone": "Eltingville/Annadale/Prince's Bay",
    "serviceZone": "Boro Zone",
    "pickups": 0,
    "avgDuration": 0.0,
    "avgFarePerMile": 0.0
  },
  {
    "locationId": 85,
    "borough": "Brooklyn",
    "zone": "Erasmus",
    "serviceZone": "Boro Zone",
    "pickups": 611,
    "avgDuration": 30.5,
    "avgFarePerMile": 7.16
  },
  {
    "locationId": 86,
    "borough": "Queens",
    "zone": "Far Rockaway",
    "serviceZone": "Boro Zone",
    "pickups": 363,
    "avgDuration": 55.9,
    "avgFarePerMile": 4.92
  },
  {
    "locationId": 87,
    "borough": "Manhattan",
    "zone": "Financial District North",
    "serviceZone": "Yellow Zone",
    "pickups": 15586,
    "avgDuration": 16.9,
    "avgFarePerMile": 6.47
  },
  {
    "locationId": 88,
    "borough": "Manhattan",
    "zone": "Financial District South",
    "serviceZone": "Yellow Zone",
    "pickups": 8501,
    "avgDuration": 18.1,
    "avgFarePerMile": 6.24
  },
  {
    "locationId": 89,
    "borough": "Brooklyn",
    "zone": "Flatbush/Ditmas Park",
    "serviceZone": "Boro Zone",
    "pickups": 1606,
    "avgDuration": 31.2,
    "avgFarePerMile": 7.1
  },
  {
    "locationId": 90,
    "borough": "Manhattan",
    "zone": "Flatiron",
    "serviceZone": "Yellow Zone",
    "pickups": 49416,
    "avgDuration": 11.9,
    "avgFarePerMile": 8.13
  },
  {
    "locationId": 91,
    "borough": "Brooklyn",
    "zone": "Flatlands",
    "serviceZone": "Boro Zone",
    "pickups": 1052,
    "avgDuration": 33.2,
    "avgFarePerMile": 6.86
  },
  {
    "locationId": 92,
    "borough": "Queens",
    "zone": "Flushing",
    "serviceZone": "Boro Zone",
    "pickups": 476,
    "avgDuration": 26.4,
    "avgFarePerMile": 6.49
  },
  {
    "locationId": 93,
    "borough": "Queens",
    "zone": "Flushing Meadows-Corona Park",
    "serviceZone": "Boro Zone",
    "pickups": 455,
    "avgDuration": 20.1,
    "avgFarePerMile": 8.48
  },
  {
    "locationId": 94,
    "borough": "Bronx",
    "zone": "Fordham South",
    "serviceZone": "Boro Zone",
    "pickups": 137,
    "avgDuration": 38.0,
    "avgFarePerMile": 5.65
  },
  {
    "locationId": 95,
    "borough": "Queens",
    "zone": "Forest Hills",
    "serviceZone": "Boro Zone",
    "pickups": 1077,
    "avgDuration": 22.9,
    "avgFarePerMile": 5.57
  },
  {
    "locationId": 96,
    "borough": "Queens",
    "zone": "Forest Park/Highland Park",
    "serviceZone": "Boro Zone",
    "pickups": 21,
    "avgDuration": 17.4,
    "avgFarePerMile": 5.88
  },
  {
    "locationId": 97,
    "borough": "Brooklyn",
    "zone": "Fort Greene",
    "serviceZone": "Boro Zone",
    "pickups": 2073,
    "avgDuration": 23.3,
    "avgFarePerMile": 6.72
  },
  {
    "locationId": 98,
    "borough": "Queens",
    "zone": "Fresh Meadows",
    "serviceZone": "Boro Zone",
    "pickups": 134,
    "avgDuration": 28.4,
    "avgFarePerMile": 5.45
  },
  {
    "locationId": 99,
    "borough": "Staten Island",
    "zone": "Freshkills Park",
    "serviceZone": "Boro Zone",
    "pickups": 1,
    "avgDuration": 8.2,
    "avgFarePerMile": 4.57
  },
  {
    "locationId": 100,
    "borough": "Manhattan",
    "zone": "Garment District",
    "serviceZone": "Yellow Zone",
    "pickups": 47051,
    "avgDuration": 13.6,
    "avgFarePerMile": 8.96
  },
  {
    "locationId": 101,
    "borough": "Queens",
    "zone": "Glen Oaks",
    "serviceZone": "Boro Zone",
    "pickups": 149,
    "avgDuration": 28.7,
    "avgFarePerMile": 3.71
  },
  {
    "locationId": 102,
    "borough": "Queens",
    "zone": "Glendale",
    "serviceZone": "Boro Zone",
    "pickups": 269,
    "avgDuration": 23.3,
    "avgFarePerMile": 5.82
  },
  {
    "locationId": 103,
    "borough": "Manhattan",
    "zone": "Governor's Island/Ellis Island/Liberty Island",
    "serviceZone": "Yellow Zone",
    "pickups": 0,
    "avgDuration": 0.0,
    "avgFarePerMile": 0.0
  },
  {
    "locationId": 104,
    "borough": "Manhattan",
    "zone": "Governor's Island/Ellis Island/Liberty Island",
    "serviceZone": "Yellow Zone",
    "pickups": 0,
    "avgDuration": 0.0,
    "avgFarePerMile": 0.0
  },
  {
    "locationId": 105,
    "borough": "Manhattan",
    "zone": "Governor's Island/Ellis Island/Liberty Island",
    "serviceZone": "Yellow Zone",
    "pickups": 0,
    "avgDuration": 0.0,
    "avgFarePerMile": 0.0
  },
  {
    "locationId": 106,
    "borough": "Brooklyn",
    "zone": "Gowanus",
    "serviceZone": "Boro Zone",
    "pickups": 392,
    "avgDuration": 25.4,
    "avgFarePerMile": 6.97
  },
  {
    "locationId": 107,
    "borough": "Manhattan",
    "zone": "Gramercy",
    "serviceZone": "Yellow Zone",
    "pickups": 63972,
    "avgDuration": 11.8,
    "avgFarePerMile": 8.0
  },
  {
    "locationId": 108,
    "borough": "Brooklyn",
    "zone": "Gravesend",
    "serviceZone": "Boro Zone",
    "pickups": 217,
    "avgDuration": 39.2,
    "avgFarePerMile": 5.78
  },
  {
    "locationId": 109,
    "borough": "Staten Island",
    "zone": "Great Kills",
    "serviceZone": "Boro Zone",
    "pickups": 4,
    "avgDuration": 54.8,
    "avgFarePerMile": 2.92
  },
  {
    "locationId": 110,
    "borough": "Staten Island",
    "zone": "Great Kills Park",
    "serviceZone": "Boro Zone",
    "pickups": 0,
    "avgDuration": 0.0,
    "avgFarePerMile": 0.0
  },
  {
    "locationId": 111,
    "borough": "Brooklyn",
    "zone": "Green-Wood Cemetery",
    "serviceZone": "Boro Zone",
    "pickups": 1,
    "avgDuration": 21.7,
    "avgFarePerMile": 4.19
  },
  {
    "locationId": 112,
    "borough": "Brooklyn",
    "zone": "Greenpoint",
    "serviceZone": "Boro Zone",
    "pickups": 1381,
    "avgDuration": 19.3,
    "avgFarePerMile": 6.36
  },
  {
    "locationId": 113,
    "borough": "Manhattan",
    "zone": "Greenwich Village North",
    "serviceZone": "Yellow Zone",
    "pickups": 46211,
    "avgDuration": 12.2,
    "avgFarePerMile": 8.13
  },
  {
    "locationId": 114,
    "borough": "Manhattan",
    "zone": "Greenwich Village South",
    "serviceZone": "Yellow Zone",
    "pickups": 50031,
    "avgDuration": 12.5,
    "avgFarePerMile": 7.67
  },
  {
    "locationId": 115,
    "borough": "Staten Island",
    "zone": "Grymes Hill/Clifton",
    "serviceZone": "Boro Zone",
    "pickups": 8,
    "avgDuration": 32.5,
    "avgFarePerMile": 6.19
  },
  {
    "locationId": 116,
    "borough": "Manhattan",
    "zone": "Hamilton Heights",
    "serviceZone": "Boro Zone",
    "pickups": 3003,
    "avgDuration": 18.1,
    "avgFarePerMile": 6.86
  },
  {
    "locationId": 117,
    "borough": "Queens",
    "zone": "Hammels/Arverne",
    "serviceZone": "Boro Zone",
    "pickups": 330,
    "avgDuration": 54.1,
    "avgFarePerMile": 6.14
  },
  {
    "locationId": 118,
    "borough": "Staten Island",
    "zone": "Heartland Village/Todt Hill",
    "serviceZone": "Boro Zone",
    "pickups": 6,
    "avgDuration": 32.7,
    "avgFarePerMile": 2.73
  },
  {
    "locationId": 119,
    "borough": "Bronx",
    "zone": "Highbridge",
    "serviceZone": "Boro Zone",
    "pickups": 405,
    "avgDuration": 30.1,
    "avgFarePerMile": 5.83
  },
  {
    "locationId": 120,
    "borough": "Manhattan",
    "zone": "Highbridge Park",
    "serviceZone": "Boro Zone",
    "pickups": 17,
    "avgDuration": 22.1,
    "avgFarePerMile": 8.0
  },
  {
    "locationId": 121,
    "borough": "Queens",
    "zone": "Hillcrest/Pomonok",
    "serviceZone": "Boro Zone",
    "pickups": 308,
    "avgDuration": 31.8,
    "avgFarePerMile": 5.83
  },
  {
    "locationId": 122,
    "borough": "Queens",
    "zone": "Hollis",
    "serviceZone": "Boro Zone",
    "pickups": 176,
    "avgDuration": 31.2,
    "avgFarePerMile": 5.37
  },
  {
    "locationId": 123,
    "borough": "Brooklyn",
    "zone": "Homecrest",
    "serviceZone": "Boro Zone",
    "pickups": 335,
    "avgDuration": 35.0,
    "avgFarePerMile": 6.97
  },
  {
    "locationId": 124,
    "borough": "Queens",
    "zone": "Howard Beach",
    "serviceZone": "Boro Zone",
    "pickups": 291,
    "avgDuration": 27.9,
    "avgFarePerMile": 5.23
  },
  {
    "locationId": 125,
    "borough": "Manhattan",
    "zone": "Hudson Sq",
    "serviceZone": "Yellow Zone",
    "pickups": 15566,
    "avgDuration": 13.4,
    "avgFarePerMile": 7.61
  },
  {
    "locationId": 126,
    "borough": "Bronx",
    "zone": "Hunts Point",
    "serviceZone": "Boro Zone",
    "pickups": 256,
    "avgDuration": 27.3,
    "avgFarePerMile": 5.34
  },
  {
    "locationId": 127,
    "borough": "Manhattan",
    "zone": "Inwood",
    "serviceZone": "Boro Zone",
    "pickups": 344,
    "avgDuration": 28.3,
    "avgFarePerMile": 5.29
  },
  {
    "locationId": 128,
    "borough": "Manhattan",
    "zone": "Inwood Hill Park",
    "serviceZone": "Boro Zone",
    "pickups": 25,
    "avgDuration": 23.1,
    "avgFarePerMile": 4.93
  },
  {
    "locationId": 129,
    "borough": "Queens",
    "zone": "Jackson Heights",
    "serviceZone": "Boro Zone",
    "pickups": 1640,
    "avgDuration": 19.6,
    "avgFarePerMile": 8.08
  },
  {
    "locationId": 130,
    "borough": "Queens",
    "zone": "Jamaica",
    "serviceZone": "Boro Zone",
    "pickups": 1912,
    "avgDuration": 23.6,
    "avgFarePerMile": 4.99
  },
  {
    "locationId": 131,
    "borough": "Queens",
    "zone": "Jamaica Estates",
    "serviceZone": "Boro Zone",
    "pickups": 306,
    "avgDuration": 30.0,
    "avgFarePerMile": 4.63
  },
  {
    "locationId": 132,
    "borough": "Queens",
    "zone": "JFK Airport",
    "serviceZone": "Airports",
    "pickups": 133231,
    "avgDuration": 38.5,
    "avgFarePerMile": 4.33
  },
  {
    "locationId": 133,
    "borough": "Brooklyn",
    "zone": "Kensington",
    "serviceZone": "Boro Zone",
    "pickups": 394,
    "avgDuration": 29.0,
    "avgFarePerMile": 6.67
  },
  {
    "locationId": 134,
    "borough": "Queens",
    "zone": "Kew Gardens",
    "serviceZone": "Boro Zone",
    "pickups": 547,
    "avgDuration": 20.7,
    "avgFarePerMile": 13.1
  },
  {
    "locationId": 135,
    "borough": "Queens",
    "zone": "Kew Gardens Hills",
    "serviceZone": "Boro Zone",
    "pickups": 280,
    "avgDuration": 28.0,
    "avgFarePerMile": 5.12
  },
  {
    "locationId": 136,
    "borough": "Bronx",
    "zone": "Kingsbridge Heights",
    "serviceZone": "Boro Zone",
    "pickups": 248,
    "avgDuration": 36.3,
    "avgFarePerMile": 5.72
  },
  {
    "locationId": 137,
    "borough": "Manhattan",
    "zone": "Kips Bay",
    "serviceZone": "Yellow Zone",
    "pickups": 35892,
    "avgDuration": 12.4,
    "avgFarePerMile": 7.77
  },
  {
    "locationId": 138,
    "borough": "Queens",
    "zone": "LaGuardia Airport",
    "serviceZone": "Airports",
    "pickups": 86106,
    "avgDuration": 26.4,
    "avgFarePerMile": 4.51
  },
  {
    "locationId": 139,
    "borough": "Queens",
    "zone": "Laurelton",
    "serviceZone": "Boro Zone",
    "pickups": 210,
    "avgDuration": 38.9,
    "avgFarePerMile": 4.55
  },
  {
    "locationId": 140,
    "borough": "Manhattan",
    "zone": "Lenox Hill East",
    "serviceZone": "Yellow Zone",
    "pickups": 70570,
    "avgDuration": 13.0,
    "avgFarePerMile": 8.1
  },
  {
    "locationId": 141,
    "borough": "Manhattan",
    "zone": "Lenox Hill West",
    "serviceZone": "Yellow Zone",
    "pickups": 77413,
    "avgDuration": 10.8,
    "avgFarePerMile": 8.41
  },
  {
    "locationId": 142,
    "borough": "Manhattan",
    "zone": "Lincoln Square East",
    "serviceZone": "Yellow Zone",
    "pickups": 105611,
    "avgDuration": 11.8,
    "avgFarePerMile": 7.82
  },
  {
    "locationId": 143,
    "borough": "Manhattan",
    "zone": "Lincoln Square West",
    "serviceZone": "Yellow Zone",
    "pickups": 35944,
    "avgDuration": 11.7,
    "avgFarePerMile": 7.84
  },
  {
    "locationId": 144,
    "borough": "Manhattan",
    "zone": "Little Italy/NoLiTa",
    "serviceZone": "Yellow Zone",
    "pickups": 33844,
    "avgDuration": 13.8,
    "avgFarePerMile": 7.67
  },
  {
    "locationId": 145,
    "borough": "Queens",
    "zone": "Long Island City/Hunters Point",
    "serviceZone": "Boro Zone",
    "pickups": 2334,
    "avgDuration": 20.1,
    "avgFarePerMile": 8.12
  },
  {
    "locationId": 146,
    "borough": "Queens",
    "zone": "Long Island City/Queens Plaza",
    "serviceZone": "Boro Zone",
    "pickups": 1505,
    "avgDuration": 17.2,
    "avgFarePerMile": 7.27
  },
  {
    "locationId": 147,
    "borough": "Bronx",
    "zone": "Longwood",
    "serviceZone": "Boro Zone",
    "pickups": 202,
    "avgDuration": 31.9,
    "avgFarePerMile": 5.77
  },
  {
    "locationId": 148,
    "borough": "Manhattan",
    "zone": "Lower East Side",
    "serviceZone": "Yellow Zone",
    "pickups": 33967,
    "avgDuration": 13.6,
    "avgFarePerMile": 7.36
  },
  {
    "locationId": 149,
    "borough": "Brooklyn",
    "zone": "Madison",
    "serviceZone": "Boro Zone",
    "pickups": 248,
    "avgDuration": 35.0,
    "avgFarePerMile": 7.04
  },
  {
    "locationId": 150,
    "borough": "Brooklyn",
    "zone": "Manhattan Beach",
    "serviceZone": "Boro Zone",
    "pickups": 118,
    "avgDuration": 29.4,
    "avgFarePerMile": 6.32
  },
  {
    "locationId": 151,
    "borough": "Manhattan",
    "zone": "Manhattan Valley",
    "serviceZone": "Yellow Zone",
    "pickups": 25140,
    "avgDuration": 12.2,
    "avgFarePerMile": 7.66
  },
  {
    "locationId": 152,
    "borough": "Manhattan",
    "zone": "Manhattanville",
    "serviceZone": "Boro Zone",
    "pickups": 2186,
    "avgDuration": 16.3,
    "avgFarePerMile": 6.94
  },
  {
    "locationId": 153,
    "borough": "Manhattan",
    "zone": "Marble Hill",
    "serviceZone": "Boro Zone",
    "pickups": 54,
    "avgDuration": 27.6,
    "avgFarePerMile": 5.56
  },
  {
    "locationId": 154,
    "borough": "Brooklyn",
    "zone": "Marine Park/Floyd Bennett Field",
    "serviceZone": "Boro Zone",
    "pickups": 44,
    "avgDuration": 15.5,
    "avgFarePerMile": 5.41
  },
  {
    "locationId": 155,
    "borough": "Brooklyn",
    "zone": "Marine Park/Mill Basin",
    "serviceZone": "Boro Zone",
    "pickups": 513,
    "avgDuration": 31.1,
    "avgFarePerMile": 7.02
  },
  {
    "locationId": 156,
    "borough": "Staten Island",
    "zone": "Mariners Harbor",
    "serviceZone": "Boro Zone",
    "pickups": 4,
    "avgDuration": 51.2,
    "avgFarePerMile": 1.92
  },
  {
    "locationId": 157,
    "borough": "Queens",
    "zone": "Maspeth",
    "serviceZone": "Boro Zone",
    "pickups": 669,
    "avgDuration": 20.4,
    "avgFarePerMile": 6.95
  },
  {
    "locationId": 158,
    "borough": "Manhattan",
    "zone": "Meatpacking/West Village West",
    "serviceZone": "Yellow Zone",
    "pickups": 30609,
    "avgDuration": 13.9,
    "avgFarePerMile": 7.46
  },
  {
    "locationId": 159,
    "borough": "Bronx",
    "zone": "Melrose South",
    "serviceZone": "Boro Zone",
    "pickups": 575,
    "avgDuration": 28.1,
    "avgFarePerMile": 7.58
  },
  {
    "locationId": 160,
    "borough": "Queens",
    "zone": "Middle Village",
    "serviceZone": "Boro Zone",
    "pickups": 328,
    "avgDuration": 22.3,
    "avgFarePerMile": 5.44
  },
  {
    "locationId": 161,
    "borough": "Manhattan",
    "zone": "Midtown Center",
    "serviceZone": "Yellow Zone",
    "pickups": 160436,
    "avgDuration": 13.6,
    "avgFarePerMile": 8.81
  },
  {
    "locationId": 162,
    "borough": "Manhattan",
    "zone": "Midtown East",
    "serviceZone": "Yellow Zone",
    "pickups": 112045,
    "avgDuration": 13.1,
    "avgFarePerMile": 8.58
  },
  {
    "locationId": 163,
    "borough": "Manhattan",
    "zone": "Midtown North",
    "serviceZone": "Yellow Zone",
    "pickups": 91121,
    "avgDuration": 13.5,
    "avgFarePerMile": 8.69
  },
  {
    "locationId": 164,
    "borough": "Manhattan",
    "zone": "Midtown South",
    "serviceZone": "Yellow Zone",
    "pickups": 70325,
    "avgDuration": 12.9,
    "avgFarePerMile": 8.49
  },
  {
    "locationId": 165,
    "borough": "Brooklyn",
    "zone": "Midwood",
    "serviceZone": "Boro Zone",
    "pickups": 490,
    "avgDuration": 34.5,
    "avgFarePerMile": 6.95
  },
  {
    "locationId": 166,
    "borough": "Manhattan",
    "zone": "Morningside Heights",
    "serviceZone": "Boro Zone",
    "pickups": 14262,
    "avgDuration": 14.3,
    "avgFarePerMile": 7.4
  },
  {
    "locationId": 167,
    "borough": "Bronx",
    "zone": "Morrisania/Melrose",
    "serviceZone": "Boro Zone",
    "pickups": 428,
    "avgDuration": 30.7,
    "avgFarePerMile": 5.96
  },
  {
    "locationId": 168,
    "borough": "Bronx",
    "zone": "Mott Haven/Port Morris",
    "serviceZone": "Boro Zone",
    "pickups": 1097,
    "avgDuration": 23.9,
    "avgFarePerMile": 5.93
  },
  {
    "locationId": 169,
    "borough": "Bronx",
    "zone": "Mount Hope",
    "serviceZone": "Boro Zone",
    "pickups": 366,
    "avgDuration": 32.4,
    "avgFarePerMile": 5.62
  },
  {
    "locationId": 170,
    "borough": "Manhattan",
    "zone": "Murray Hill",
    "serviceZone": "Yellow Zone",
    "pickups": 89002,
    "avgDuration": 12.8,
    "avgFarePerMile": 8.56
  },
  {
    "locationId": 171,
    "borough": "Queens",
    "zone": "Murray Hill-Queens",
    "serviceZone": "Boro Zone",
    "pickups": 142,
    "avgDuration": 28.5,
    "avgFarePerMile": 4.94
  },
  {
    "locationId": 172,
    "borough": "Staten Island",
    "zone": "New Dorp/Midland Beach",
    "serviceZone": "Boro Zone",
    "pickups": 11,
    "avgDuration": 21.9,
    "avgFarePerMile": 3.42
  },
  {
    "locationId": 173,
    "borough": "Queens",
    "zone": "North Corona",
    "serviceZone": "Boro Zone",
    "pickups": 279,
    "avgDuration": 24.1,
    "avgFarePerMile": 5.46
  },
  {
    "locationId": 174,
    "borough": "Bronx",
    "zone": "Norwood",
    "serviceZone": "Boro Zone",
    "pickups": 246,
    "avgDuration": 37.4,
    "avgFarePerMile": 6.18
  },
  {
    "locationId": 175,
    "borough": "Queens",
    "zone": "Oakland Gardens",
    "serviceZone": "Boro Zone",
    "pickups": 110,
    "avgDuration": 29.9,
    "avgFarePerMile": 4.76
  },
  {
    "locationId": 176,
    "borough": "Staten Island",
    "zone": "Oakwood",
    "serviceZone": "Boro Zone",
    "pickups": 2,
    "avgDuration": 26.7,
    "avgFarePerMile": 3.69
  },
  {
    "locationId": 177,
    "borough": "Brooklyn",
    "zone": "Ocean Hill",
    "serviceZone": "Boro Zone",
    "pickups": 1000,
    "avgDuration": 31.2,
    "avgFarePerMile": 6.9
  },
  {
    "locationId": 178,
    "borough": "Brooklyn",
    "zone": "Ocean Parkway South",
    "serviceZone": "Boro Zone",
    "pickups": 112,
    "avgDuration": 29.9,
    "avgFarePerMile": 6.61
  },
  {
    "locationId": 179,
    "borough": "Queens",
    "zone": "Old Astoria",
    "serviceZone": "Boro Zone",
    "pickups": 1120,
    "avgDuration": 22.2,
    "avgFarePerMile": 6.46
  },
  {
    "locationId": 180,
    "borough": "Queens",
    "zone": "Ozone Park",
    "serviceZone": "Boro Zone",
    "pickups": 260,
    "avgDuration": 23.9,
    "avgFarePerMile": 5.44
  },
  {
    "locationId": 181,
    "borough": "Brooklyn",
    "zone": "Park Slope",
    "serviceZone": "Boro Zone",
    "pickups": 1830,
    "avgDuration": 24.6,
    "avgFarePerMile": 6.65
  },
  {
    "locationId": 182,
    "borough": "Bronx",
    "zone": "Parkchester",
    "serviceZone": "Boro Zone",
    "pickups": 532,
    "avgDuration": 33.5,
    "avgFarePerMile": 5.35
  },
  {
    "locationId": 183,
    "borough": "Bronx",
    "zone": "Pelham Bay",
    "serviceZone": "Boro Zone",
    "pickups": 98,
    "avgDuration": 39.1,
    "avgFarePerMile": 4.26
  },
  {
    "locationId": 184,
    "borough": "Bronx",
    "zone": "Pelham Bay Park",
    "serviceZone": "Boro Zone",
    "pickups": 14,
    "avgDuration": 22.8,
    "avgFarePerMile": 4.16
  },
  {
    "locationId": 185,
    "borough": "Bronx",
    "zone": "Pelham Parkway",
    "serviceZone": "Boro Zone",
    "pickups": 186,
    "avgDuration": 32.3,
    "avgFarePerMile": 5.26
  },
  {
    "locationId": 186,
    "borough": "Manhattan",
    "zone": "Penn Station/Madison Sq West",
    "serviceZone": "Yellow Zone",
    "pickups": 113686,
    "avgDuration": 14.5,
    "avgFarePerMile": 8.7
  },
  {
    "locationId": 187,
    "borough": "Staten Island",
    "zone": "Port Richmond",
    "serviceZone": "Boro Zone",
    "pickups": 2,
    "avgDuration": 19.7,
    "avgFarePerMile": 28.84
  },
  {
    "locationId": 188,
    "borough": "Brooklyn",
    "zone": "Prospect-Lefferts Gardens",
    "serviceZone": "Boro Zone",
    "pickups": 1775,
    "avgDuration": 30.3,
    "avgFarePerMile": 7.57
  },
  {
    "locationId": 189,
    "borough": "Brooklyn",
    "zone": "Prospect Heights",
    "serviceZone": "Boro Zone",
    "pickups": 636,
    "avgDuration": 25.8,
    "avgFarePerMile": 6.88
  },
  {
    "locationId": 190,
    "borough": "Brooklyn",
    "zone": "Prospect Park",
    "serviceZone": "Boro Zone",
    "pickups": 73,
    "avgDuration": 24.2,
    "avgFarePerMile": 6.59
  },
  {
    "locationId": 191,
    "borough": "Queens",
    "zone": "Queens Village",
    "serviceZone": "Boro Zone",
    "pickups": 391,
    "avgDuration": 32.3,
    "avgFarePerMile": 4.12
  },
  {
    "locationId": 192,
    "borough": "Queens",
    "zone": "Queensboro Hill",
    "serviceZone": "Boro Zone",
    "pickups": 110,
    "avgDuration": 26.7,
    "avgFarePerMile": 5.1
  },
  {
    "locationId": 193,
    "borough": "Queens",
    "zone": "Queensbridge/Ravenswood",
    "serviceZone": "Boro Zone",
    "pickups": 672,
    "avgDuration": 19.8,
    "avgFarePerMile": 7.02
  },
  {
    "locationId": 194,
    "borough": "Manhattan",
    "zone": "Randalls Island",
    "serviceZone": "Yellow Zone",
    "pickups": 84,
    "avgDuration": 21.8,
    "avgFarePerMile": 10.5
  },
  {
    "locationId": 195,
    "borough": "Brooklyn",
    "zone": "Red Hook",
    "serviceZone": "Boro Zone",
    "pickups": 641,
    "avgDuration": 30.4,
    "avgFarePerMile": 6.79
  },
  {
    "locationId": 196,
    "borough": "Queens",
    "zone": "Rego Park",
    "serviceZone": "Boro Zone",
    "pickups": 466,
    "avgDuration": 22.8,
    "avgFarePerMile": 5.95
  },
  {
    "locationId": 197,
    "borough": "Queens",
    "zone": "Richmond Hill",
    "serviceZone": "Boro Zone",
    "pickups": 1517,
    "avgDuration": 25.7,
    "avgFarePerMile": 6.46
  },
  {
    "locationId": 198,
    "borough": "Queens",
    "zone": "Ridgewood",
    "serviceZone": "Boro Zone",
    "pickups": 563,
    "avgDuration": 24.7,
    "avgFarePerMile": 6.23
  },
  {
    "locationId": 199,
    "borough": "Bronx",
    "zone": "Rikers Island",
    "serviceZone": "Boro Zone",
    "pickups": 1,
    "avgDuration": 35.2,
    "avgFarePerMile": 4.02
  },
  {
    "locationId": 200,
    "borough": "Bronx",
    "zone": "Riverdale/North Riverdale/Fieldston",
    "serviceZone": "Boro Zone",
    "pickups": 130,
    "avgDuration": 34.3,
    "avgFarePerMile": 4.27
  },
  {
    "locationId": 201,
    "borough": "Queens",
    "zone": "Rockaway Park",
    "serviceZone": "Boro Zone",
    "pickups": 119,
    "avgDuration": 45.6,
    "avgFarePerMile": 4.92
  },
  {
    "locationId": 202,
    "borough": "Manhattan",
    "zone": "Roosevelt Island",
    "serviceZone": "Boro Zone",
    "pickups": 163,
    "avgDuration": 29.1,
    "avgFarePerMile": 6.52
  },
  {
    "locationId": 203,
    "borough": "Queens",
    "zone": "Rosedale",
    "serviceZone": "Boro Zone",
    "pickups": 232,
    "avgDuration": 37.0,
    "avgFarePerMile": 4.87
  },
  {
    "locationId": 204,
    "borough": "Staten Island",
    "zone": "Rossville/Woodrow",
    "serviceZone": "Boro Zone",
    "pickups": 3,
    "avgDuration": 32.0,
    "avgFarePerMile": 3.41
  },
  {
    "locationId": 205,
    "borough": "Queens",
    "zone": "Saint Albans",
    "serviceZone": "Boro Zone",
    "pickups": 571,
    "avgDuration": 36.9,
    "avgFarePerMile": 5.83
  },
  {
    "locationId": 206,
    "borough": "Staten Island",
    "zone": "Saint George/New Brighton",
    "serviceZone": "Boro Zone",
    "pickups": 7,
    "avgDuration": 33.8,
    "avgFarePerMile": 5.49
  },
  {
    "locationId": 207,
    "borough": "Queens",
    "zone": "Saint Michaels Cemetery/Woodside",
    "serviceZone": "Boro Zone",
    "pickups": 60,
    "avgDuration": 20.8,
    "avgFarePerMile": 9.69
  },
  {
    "locationId": 208,
    "borough": "Bronx",
    "zone": "Schuylerville/Edgewater Park",
    "serviceZone": "Boro Zone",
    "pickups": 235,
    "avgDuration": 27.8,
    "avgFarePerMile": 4.44
  },
  {
    "locationId": 209,
    "borough": "Manhattan",
    "zone": "Seaport",
    "serviceZone": "Yellow Zone",
    "pickups": 5343,
    "avgDuration": 16.4,
    "avgFarePerMile": 6.81
  },
  {
    "locationId": 210,
    "borough": "Brooklyn",
    "zone": "Sheepshead Bay",
    "serviceZone": "Boro Zone",
    "pickups": 410,
    "avgDuration": 37.5,
    "avgFarePerMile": 6.49
  },
  {
    "locationId": 211,
    "borough": "Manhattan",
    "zone": "SoHo",
    "serviceZone": "Yellow Zone",
    "pickups": 26589,
    "avgDuration": 13.7,
    "avgFarePerMile": 7.79
  },
  {
    "locationId": 212,
    "borough": "Bronx",
    "zone": "Soundview/Bruckner",
    "serviceZone": "Boro Zone",
    "pickups": 353,
    "avgDuration": 27.3,
    "avgFarePerMile": 5.08
  },
  {
    "locationId": 213,
    "borough": "Bronx",
    "zone": "Soundview/Castle Hill",
    "serviceZone": "Boro Zone",
    "pickups": 601,
    "avgDuration": 33.3,
    "avgFarePerMile": 4.84
  },
  {
    "locationId": 214,
    "borough": "Staten Island",
    "zone": "South Beach/Dongan Hills",
    "serviceZone": "Boro Zone",
    "pickups": 23,
    "avgDuration": 19.3,
    "avgFarePerMile": 4.5
  },
  {
    "locationId": 215,
    "borough": "Queens",
    "zone": "South Jamaica",
    "serviceZone": "Boro Zone",
    "pickups": 852,
    "avgDuration": 31.1,
    "avgFarePerMile": 5.88
  },
  {
    "locationId": 216,
    "borough": "Queens",
    "zone": "South Ozone Park",
    "serviceZone": "Boro Zone",
    "pickups": 1641,
    "avgDuration": 22.9,
    "avgFarePerMile": 8.72
  },
  {
    "locationId": 217,
    "borough": "Brooklyn",
    "zone": "South Williamsburg",
    "serviceZone": "Boro Zone",
    "pickups": 300,
    "avgDuration": 24.7,
    "avgFarePerMile": 7.92
  },
  {
    "locationId": 218,
    "borough": "Queens",
    "zone": "Springfield Gardens North",
    "serviceZone": "Boro Zone",
    "pickups": 457,
    "avgDuration": 38.0,
    "avgFarePerMile": 6.33
  },
  {
    "locationId": 219,
    "borough": "Queens",
    "zone": "Springfield Gardens South",
    "serviceZone": "Boro Zone",
    "pickups": 612,
    "avgDuration": 34.4,
    "avgFarePerMile": 5.23
  },
  {
    "locationId": 220,
    "borough": "Bronx",
    "zone": "Spuyten Duyvil/Kingsbridge",
    "serviceZone": "Boro Zone",
    "pickups": 227,
    "avgDuration": 29.8,
    "avgFarePerMile": 4.75
  },
  {
    "locationId": 221,
    "borough": "Staten Island",
    "zone": "Stapleton",
    "serviceZone": "Boro Zone",
    "pickups": 27,
    "avgDuration": 33.4,
    "avgFarePerMile": 4.46
  },
  {
    "locationId": 222,
    "borough": "Brooklyn",
    "zone": "Starrett City",
    "serviceZone": "Boro Zone",
    "pickups": 504,
    "avgDuration": 39.5,
    "avgFarePerMile": 6.21
  },
  {
    "locationId": 223,
    "borough": "Queens",
    "zone": "Steinway",
    "serviceZone": "Boro Zone",
    "pickups": 836,
    "avgDuration": 20.2,
    "avgFarePerMile": 7.85
  },
  {
    "locationId": 224,
    "borough": "Manhattan",
    "zone": "Stuy Town/Peter Cooper Village",
    "serviceZone": "Yellow Zone",
    "pickups": 4842,
    "avgDuration": 13.2,
    "avgFarePerMile": 7.51
  },
  {
    "locationId": 225,
    "borough": "Brooklyn",
    "zone": "Stuyvesant Heights",
    "serviceZone": "Boro Zone",
    "pickups": 1300,
    "avgDuration": 32.2,
    "avgFarePerMile": 6.86
  },
  {
    "locationId": 226,
    "borough": "Queens",
    "zone": "Sunnyside",
    "serviceZone": "Boro Zone",
    "pickups": 3106,
    "avgDuration": 20.4,
    "avgFarePerMile": 7.41
  },
  {
    "locationId": 227,
    "borough": "Brooklyn",
    "zone": "Sunset Park East",
    "serviceZone": "Boro Zone",
    "pickups": 263,
    "avgDuration": 31.9,
    "avgFarePerMile": 6.13
  },
  {
    "locationId": 228,
    "borough": "Brooklyn",
    "zone": "Sunset Park West",
    "serviceZone": "Boro Zone",
    "pickups": 717,
    "avgDuration": 28.5,
    "avgFarePerMile": 5.76
  },
  {
    "locationId": 229,
    "borough": "Manhattan",
    "zone": "Sutton Place/Turtle Bay North",
    "serviceZone": "Yellow Zone",
    "pickups": 54544,
    "avgDuration": 12.0,
    "avgFarePerMile": 8.56
  },
  {
    "locationId": 230,
    "borough": "Manhattan",
    "zone": "Times Sq/Theatre District",
    "serviceZone": "Yellow Zone",
    "pickups": 117595,
    "avgDuration": 14.7,
    "avgFarePerMile": 8.61
  },
  {
    "locationId": 231,
    "borough": "Manhattan",
    "zone": "TriBeCa/Civic Center",
    "serviceZone": "Yellow Zone",
    "pickups": 41653,
    "avgDuration": 14.6,
    "avgFarePerMile": 7.34
  },
  {
    "locationId": 232,
    "borough": "Manhattan",
    "zone": "Two Bridges/Seward Park",
    "serviceZone": "Yellow Zone",
    "pickups": 5029,
    "avgDuration": 16.7,
    "avgFarePerMile": 7.16
  },
  {
    "locationId": 233,
    "borough": "Manhattan",
    "zone": "UN/Turtle Bay South",
    "serviceZone": "Yellow Zone",
    "pickups": 33656,
    "avgDuration": 12.9,
    "avgFarePerMile": 8.03
  },
  {
    "locationId": 234,
    "borough": "Manhattan",
    "zone": "Union Sq",
    "serviceZone": "Yellow Zone",
    "pickups": 89767,
    "avgDuration": 12.1,
    "avgFarePerMile": 8.14
  },
  {
    "locationId": 235,
    "borough": "Bronx",
    "zone": "University Heights/Morris Heights",
    "serviceZone": "Boro Zone",
    "pickups": 431,
    "avgDuration": 31.5,
    "avgFarePerMile": 5.95
  },
  {
    "locationId": 236,
    "borough": "Manhattan",
    "zone": "Upper East Side North",
    "serviceZone": "Yellow Zone",
    "pickups": 149094,
    "avgDuration": 11.3,
    "avgFarePerMile": 8.4
  },
  {
    "locationId": 237,
    "borough": "Manhattan",
    "zone": "Upper East Side South",
    "serviceZone": "Yellow Zone",
    "pickups": 157312,
    "avgDuration": 10.8,
    "avgFarePerMile": 8.85
  },
  {
    "locationId": 238,
    "borough": "Manhattan",
    "zone": "Upper West Side North",
    "serviceZone": "Yellow Zone",
    "pickups": 64672,
    "avgDuration": 11.6,
    "avgFarePerMile": 7.76
  },
  {
    "locationId": 239,
    "borough": "Manhattan",
    "zone": "Upper West Side South",
    "serviceZone": "Yellow Zone",
    "pickups": 91461,
    "avgDuration": 11.6,
    "avgFarePerMile": 7.79
  },
  {
    "locationId": 240,
    "borough": "Bronx",
    "zone": "Van Cortlandt Park",
    "serviceZone": "Boro Zone",
    "pickups": 31,
    "avgDuration": 32.2,
    "avgFarePerMile": 5.02
  },
  {
    "locationId": 241,
    "borough": "Bronx",
    "zone": "Van Cortlandt Village",
    "serviceZone": "Boro Zone",
    "pickups": 321,
    "avgDuration": 39.4,
    "avgFarePerMile": 5.08
  },
  {
    "locationId": 242,
    "borough": "Bronx",
    "zone": "Van Nest/Morris Park",
    "serviceZone": "Boro Zone",
    "pickups": 320,
    "avgDuration": 34.1,
    "avgFarePerMile": 6.18
  },
  {
    "locationId": 243,
    "borough": "Manhattan",
    "zone": "Washington Heights North",
    "serviceZone": "Boro Zone",
    "pickups": 883,
    "avgDuration": 22.0,
    "avgFarePerMile": 6.69
  },
  {
    "locationId": 244,
    "borough": "Manhattan",
    "zone": "Washington Heights South",
    "serviceZone": "Boro Zone",
    "pickups": 2584,
    "avgDuration": 20.5,
    "avgFarePerMile": 6.68
  },
  {
    "locationId": 245,
    "borough": "Staten Island",
    "zone": "West Brighton",
    "serviceZone": "Boro Zone",
    "pickups": 3,
    "avgDuration": 49.6,
    "avgFarePerMile": 3.99
  },
  {
    "locationId": 246,
    "borough": "Manhattan",
    "zone": "West Chelsea/Hudson Yards",
    "serviceZone": "Yellow Zone",
    "pickups": 59402,
    "avgDuration": 13.6,
    "avgFarePerMile": 7.86
  },
  {
    "locationId": 247,
    "borough": "Bronx",
    "zone": "West Concourse",
    "serviceZone": "Boro Zone",
    "pickups": 597,
    "avgDuration": 25.8,
    "avgFarePerMile": 6.28
  },
  {
    "locationId": 248,
    "borough": "Bronx",
    "zone": "West Farms/Bronx River",
    "serviceZone": "Boro Zone",
    "pickups": 297,
    "avgDuration": 32.7,
    "avgFarePerMile": 4.59
  },
  {
    "locationId": 249,
    "borough": "Manhattan",
    "zone": "West Village",
    "serviceZone": "Yellow Zone",
    "pickups": 72586,
    "avgDuration": 12.3,
    "avgFarePerMile": 7.74
  },
  {
    "locationId": 250,
    "borough": "Bronx",
    "zone": "Westchester Village/Unionport",
    "serviceZone": "Boro Zone",
    "pickups": 306,
    "avgDuration": 29.3,
    "avgFarePerMile": 5.26
  },
  {
    "locationId": 251,
    "borough": "Staten Island",
    "zone": "Westerleigh",
    "serviceZone": "Boro Zone",
    "pickups": 9,
    "avgDuration": 28.2,
    "avgFarePerMile": 4.26
  },
  {
    "locationId": 252,
    "borough": "Queens",
    "zone": "Whitestone",
    "serviceZone": "Boro Zone",
    "pickups": 138,
    "avgDuration": 25.8,
    "avgFarePerMile": 4.38
  },
  {
    "locationId": 253,
    "borough": "Queens",
    "zone": "Willets Point",
    "serviceZone": "Boro Zone",
    "pickups": 11,
    "avgDuration": 26.6,
    "avgFarePerMile": 3.53
  },
  {
    "locationId": 254,
    "borough": "Bronx",
    "zone": "Williamsbridge/Olinville",
    "serviceZone": "Boro Zone",
    "pickups": 507,
    "avgDuration": 37.4,
    "avgFarePerMile": 5.2
  },
  {
    "locationId": 255,
    "borough": "Brooklyn",
    "zone": "Williamsburg (North Side)",
    "serviceZone": "Boro Zone",
    "pickups": 2618,
    "avgDuration": 19.3,
    "avgFarePerMile": 6.04
  },
  {
    "locationId": 256,
    "borough": "Brooklyn",
    "zone": "Williamsburg (South Side)",
    "serviceZone": "Boro Zone",
    "pickups": 1893,
    "avgDuration": 19.8,
    "avgFarePerMile": 6.62
  },
  {
    "locationId": 257,
    "borough": "Brooklyn",
    "zone": "Windsor Terrace",
    "serviceZone": "Boro Zone",
    "pickups": 209,
    "avgDuration": 27.6,
    "avgFarePerMile": 6.09
  },
  {
    "locationId": 258,
    "borough": "Queens",
    "zone": "Woodhaven",
    "serviceZone": "Boro Zone",
    "pickups": 608,
    "avgDuration": 26.6,
    "avgFarePerMile": 5.49
  },
  {
    "locationId": 259,
    "borough": "Bronx",
    "zone": "Woodlawn/Wakefield",
    "serviceZone": "Boro Zone",
    "pickups": 267,
    "avgDuration": 36.3,
    "avgFarePerMile": 4.48
  },
  {
    "locationId": 260,
    "borough": "Queens",
    "zone": "Woodside",
    "serviceZone": "Boro Zone",
    "pickups": 1071,
    "avgDuration": 18.8,
    "avgFarePerMile": 8.13
  },
  {
    "locationId": 261,
    "borough": "Manhattan",
    "zone": "World Trade Center",
    "serviceZone": "Yellow Zone",
    "pickups": 14813,
    "avgDuration": 17.7,
    "avgFarePerMile": 6.74
  },
  {
    "locationId": 262,
    "borough": "Manhattan",
    "zone": "Yorkville East",
    "serviceZone": "Yellow Zone",
    "pickups": 46081,
    "avgDuration": 11.6,
    "avgFarePerMile": 7.82
  },
  {
    "locationId": 263,
    "borough": "Manhattan",
    "zone": "Yorkville West",
    "serviceZone": "Yellow Zone",
    "pickups": 63486,
    "avgDuration": 10.7,
    "avgFarePerMile": 7.92
  }
];

export const zoneById: Record<number, ZoneData> = Object.fromEntries(
  zoneData.map((z) => [z.locationId, z])
);
