# 🚕 Proyecto 4: “La Movilidad Urbana y el Tráfico Inteligente” (NYC TLC)

![React](https://img.shields.io/badge/Frontend-React_18_%2B_Vite-61DAFB?logo=react&logoColor=black)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL_%2B_PostGIS-4169E1?logo=postgresql&logoColor=white)
![Python](https://img.shields.io/badge/ETL-Python_PyArrow-3776AB?logo=python&logoColor=white)
![Status](https://img.shields.io/badge/Fase_1-An%C3%A1lisis_Completado-2ECC71)

## 📌 Información del Equipo y Asignatura
* **Universidad:** Universidad del Caribe (Unicaribe)
* **Programa Académico:** Ingeniería en Datos e Inteligencia Organizacional (7mo Semestre)
* **Asignatura:** Visualización de Datos
* **Nombre del Equipo:** *[Nombre del Equipo - Editable]*
* **Integrantes:**
  * *[Integrante 1 - Matrícula 230300759]*
  * *[Integrante 2 - Editable]*
  * *[Integrante 3 - Editable]*

---

## 📖 Descripción del Proyecto
Este proyecto explora y visualiza cómo se comportan los patrones de movilidad urbana, congestión vial y eficiencia del transporte en la ciudad de Nueva York utilizando los registros oficiales de viajes de la **NYC Taxi and Limousine Commission (TLC)** ([NYC TLC Trip Record Data](https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page)).

A través de un **Dashboard Táctico con Enfoque Analítico** desarrollado en **React** y respaldado por **PostgreSQL**, la plataforma permite evaluar la densidad de demanda por zonas (*pickup density*), la degradación de la velocidad comercial en horas pico frente a horas valle, la estructura de costos por milla y el comportamiento de las propinas según el distrito (*Borough*) y el tipo de día.

---

## 🎯 Objetivos y Preguntas Clave (Fase 1)
* **Objetivo General:** Desarrollar un dashboard dinámico en React conectado a PostgreSQL que transforme más de **3.47 millones de registros mensuales de viajes** en indicadores accionables sobre congestión, demanda espacial y eficiencia económica del transporte urbano.
* **KPIs Principales:**
  1. **Duración Promedio de Viaje:** `14.65 min` (Mediana: `11.68 min`).
  2. **Distancia Promedio de Viaje:** `3.14 millas` (Mediana: `1.70 millas`).
  3. **Tarifa Promedio por Milla:** `$7.88 USD / milla` (`$8.14/mi` en hora pico vs. `$7.72/mi` en hora valle).
  4. **Zona con Mayor Demanda (*Pickup Density*):** `Midtown Center (ID 161)` con `159,790 viajes` (`4.99%` del total), seguida de `Upper East Side South (ID 237)` con `156,836 viajes`.
  5. **Propina Promedio (Pagos con Tarjeta):** `$3.10 USD` (Mediana: `$2.60 USD`).

---

## 🛠️ Arquitectura y Requisitos Técnicos
1. **Frontend:** `React 18` + `Vite` + `Tailwind CSS` + `Recharts` / `Plotly.js` + `React-Leaflet` (Mapas coropléticos GeoJSON).
2. **Base de Datos:** `PostgreSQL 16` + `PostGIS` (Esquema relacional estrella con tabla dimensional `dim_taxi_zones` y tabla de hechos indexada `fact_taxi_trips`).
3. **Preprocesamiento / ETL:** `Python 3` (`pyarrow`, `pandas`, `geopandas`, `sqlalchemy`) para limpieza de valores atípicos, imputación e integración de múltiples fuentes (`.parquet` + `.csv` + `.shp`).
4. **Despliegue Web:** `Vercel` / `GitHub Pages`.

---

## 📂 Entregables y Estructura del Repositorio (Fase 1)
* 📄 **[Fase1_Documento_Justificacion_Movilidad_NYC.pdf](./Fase1_Documento_Justificacion_Movilidad_NYC.pdf)**: Documento oficial de justificación de la Fase 1 (Análisis de la audiencia, definición de objetivos, justificación del tipo de dashboard y preprocesamiento estadístico de los datos reales de Enero 2025).
* 🗺️ **[taxi_zone_lookup.csv](./taxi_zone_lookup.csv)** y **[taxi_zones/](./taxi_zones/)**: Catálogo oficial de las 265 zonas de la NYC TLC y cartografía vectorial Shapefile (263 polígonos).
* 📚 **Diccionarios de Datos Oficiales (`.pdf`)**: Documentación técnica de esquemas de la NYC TLC (`Yellow`, `Green`, `FHV`, `HVFHS` y guía de usuario).
