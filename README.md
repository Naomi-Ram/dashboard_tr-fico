# Proyecto 4: "La movilidad urbana y el tráfico inteligente" (NYC TLC)

## Datos del equipo y asignatura
* Universidad: Universidad del Caribe
* Carrera: Ingeniería en Datos e Inteligencia Organizacional (7mo Semestre)
* Asignatura: Visualización de Datos
* Equipo: *[Nombre del equipo]*
* Integrantes:
  * *[Abiel Gustavo Buenrostro Avila - Matrícula 230300759]*
  * *[Naomi Elena Ramirez Rendon - Matricula 230300741]*

## Descripción del proyecto
Este repositorio contiene el desarrollo del Proyecto 4 de la materia de Visualización de Datos. Trabajamos con los registros públicos de viajes en taxi de Nueva York de la [NYC Taxi and Limousine Commission (TLC)](https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page) para analizar la congestión vial, los horarios de mayor tráfico, las zonas con más salidas de viajes y el costo promedio por milla.

El sistema consiste en un dashboard web hecho en React conectado a una base de datos en PostgreSQL. A partir de los registros de enero de 2025 (`yellow_tripdata_2025-01.parquet`, con 3,475,226 viajes registrados), filtramos los errores de captura de los taxímetros para quedarnos con 3,202,368 viajes válidos y cruzarlos con las 263 zonas geográficas de la ciudad.

## Indicadores principales (enero 2025)
1. Duración promedio de viaje: `14.65 minutos` (mediana de `11.68 minutos`).
2. Distancia promedio de viaje: `3.14 millas` (mediana de `1.70 millas`).
3. Tarifa promedio por milla: `$7.88 USD/milla` (sube a `$8.14 USD/milla` en hora pico).
4. Zona con mayor demanda: `Midtown Center (ID 161)` con `159,790 salidas` (`4.99%` del mes), seguida por `Upper East Side South (ID 237)` con `156,836 salidas`.
5. Propina promedio (en pagos con tarjeta): `$3.10 USD` (mediana de `$2.60 USD`).

## Herramientas utilizadas
* Frontend: React 18, TypeScript, Vite, Tailwind CSS, Recharts y React-Leaflet para el mapa de zonas.
* Base de datos: PostgreSQL 16 con PostGIS (`dim_taxi_zones` para los polígonos y `fact_taxi_trips` para los viajes limpios).
* Preprocesamiento: Python (`pyarrow`, `pandas` y `geopandas`) para limpiar el archivo Parquet y reproyectar el shapefile de zonas de `EPSG:2263` a `EPSG:4326`.
* Despliegue: Vercel / GitHub Pages.

## Archivos de la Fase 1 en este repositorio
* [Fase1_Documento_Justificacion_Movilidad_NYC.pdf](./Fase1_Documento_Justificacion_Movilidad_NYC.pdf): Documento de la Fase 1 con el análisis de la audiencia, definición del objetivo, justificación del tipo de dashboard (táctico y analítico) y el preprocesamiento de datos.
* [taxi_zone_lookup.csv](./taxi_zone_lookup.csv) y carpeta [taxi_zones/](./taxi_zones/): Catálogo de las zonas de taxi y polígonos geográficos de los cinco distritos de Nueva York.
* Diccionarios de datos en PDF (`data_dictionary_trip_records_*.pdf` y `trip_record_user_guide.pdf`): Documentación original de las columnas publicada por la NYC TLC.
