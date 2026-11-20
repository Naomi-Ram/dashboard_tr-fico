# Sistema de Diseño — NYC Taxi Analytics

Decisiones visuales y tokens del dashboard **Movilidad Urbana y Tráfico Inteligente (NYC TLC)**.

## Dirección y personalidad
- **Concepto**: Tablero editorial de analítica urbana — sobrio, denso, preciso y sin colores fosforescentes que compitan con los datos.
- **Jerarquía**: Construida por escala tipográfica, peso y espacio — nunca con bordes gruesos decorativos (`border-t-[3px]`, `border-l-4`).
- **Estrategia de profundidad**: Bordes hairline `rgba(15, 23, 42, 0.06)` + sombra mínima de elevación (`shadow-card`).

## Paleta editorial desaturada (semántica fija)
- `asphalt` (`#121826`): Header sobrio, tooltips flotantes y controles activos neutros.
- `taxi` (`#C85A32`): Terracota editorial — hora pico, día laboral, congestión y máxima demanda espacial.
- `transit` (`#2A7B76`): Verde petróleo sobrio — hora valle, fin de semana, flujo fluido y demanda moderada.
- `metro` (`#3B526B`): Azul acero pizarra — datos base, histogramas de distancia y líneas de referencia.
- `canvas` (`#F5F7FA`) / `card` (`#FFFFFF`): Superficies claras neutras; todas las cifras KPI en carbón `ink #0F172A`.
- **Mapa (cuantiles)**: `#DCEEEB` (0–150) → `#93C5BE` (150–800) → `#347C77` (800–5k) → `#DF8B62` (5k–35k) → `#C85A32` (35k+) con `fillOpacity: 0.48` sobre OpenStreetMap.

## Tipografía y escala
- **UI y títulos**: `Archivo` (400–800), títulos de panel en `15px` bold orientados a la pregunta que responden.
- **Cifras y ejes**: `JetBrains Mono` (400–700) con `font-variant-numeric: tabular-nums`.
- **Escala**: caption `11px` · body `13–14px` · título de panel `15px` · KPI secundario `26px` · KPI principal `42px`.

## Reglas de componentes
- **Header**: Silencioso (ícono y pills activos en blanco translúcido `bg-white/[0.16]`, sin naranja/verde chillón).
- **KPIs**: Tarjetas blancas uniformes con punto indicador discreto de `6px` y cifras en `#0F172A`.
- **Gráficos**: Leyendas siempre arriba del área de trazado (nunca sobre el eje X). Boxplot nativo en SVG con bigotes completos, mediana y outliers.
