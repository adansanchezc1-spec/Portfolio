# Registro de Desarrollo e Implementación (Dev Log)
**Proyecto**: Portafolio Web Profesional e IHC — Adán Sánchez  
**Fase PDCO**: DEVELOPMENT  
**Fecha**: 2026-08-31  

---

## 1. Registro de Módulos Implementados

### 1.1 Diseño del Sistema de Tokens CSS (`css/style.css`)
- **Tokens de Color**: Dark Slate (`#0B0F17`), Carbon Card (`#111827`), Border Glow (`rgba(255,255,255,0.08)`), Cyan Accent (`#06B6D4`), Emerald Accent (`#10B981`), Violet Accent (`#8B5CF6`), Golden Metric (`#F59E0B`).
- **Tipografía**: Google Fonts `@import` (*Plus Jakarta Sans* para legibilidad de lectura, *Outfit* para títulos con presencia visual, y *JetBrains Mono* para métricas y código).
- **Utilidades Glassmorphism**: `backdrop-filter: blur(16px)`, sombras multidimensionales, bordes con degradados reactivos.
- **Media Queries**: Puntos de quiebre en `480px`, `768px`, `1024px` y `1280px`.

### 1.2 Catálogo Enriquecido de Proyectos (`js/projects-data.js`)
Proyectos integrados con datos técnicos reales:
1. **SIPTA (DataJam Bogotá 2026 - Data Olinguitos Gen)**:
   - Categoría: `data-science`
   - Métricas: 1.04M microdatos PUA SDIS, VIF 3.21, Moran's I 0.412, 13 dominios, 111 indicadores, 20 localidades.
   - Enlace: GitHub repo `DataJam_DataOlinguitos_Gen`.
2. **Sistema Data Wrangling Bogotá (Pipeline Inmobiliario)**:
   - Categoría: `software-engineering`
   - Métricas: 4 gateways BPMN 2.0, 46 unit tests passed, >80% coverage, MDM unificado, MVC + Facade/Strategy/Decorator.
   - Enlace: GitHub repo `ProyectoDataWrangling`.
3. **Inferencia Estadística y Mercado Laboral (Estudio APE)**:
   - Categoría: `statistics`
   - Métricas: Pruebas `scipy.stats` (Shapiro-Wilk $p<10^{-8}$, Kruskal-Wallis $H=39.94$, Mann-Whitney $U=621.0$, Chi-square $\chi^2=17.80$), análisis longitudinal 2023–2026.
4. **Ecosistema Power BI & Business Intelligence**:
   - Categoría: `power-bi`
   - Métricas: Star Schema, DAX avanzado (Time Intelligence, KPIs dinámicos), reportes comerciales y de calidad de datos (`ReporteVentas.pbix`, `Visualización geografica.pbix`).
5. **Sistemas Empresariales en Java (POO & Clean Architecture)**:
   - Categoría: `software-engineering`
   - Métricas: Modelado orientado a objetos, pruebas unitarias JUnit, arquitectura en capas (`TeleVentas`, `GestionMuseo`, `HuellaCarbono`).

### 1.3 Controladores de la Interfaz (`js/app.js`)
- Motor de renderizado dinámico de tarjetas.
- Filtrado por categorías con transiciones CSS fluidas.
- Modal interactivo con cierre por teclado (`Escape`), clic en backdrop o botón de cerrar.
- Animación interactiva de conteo de números (KPI counters) al entrar en viewport (IntersectionObserver).
- Copiado de email al portapapeles con toast de confirmación no intrusivo.
