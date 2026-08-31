# Especificación de Requerimientos de Software (IEEE 830 / ISO 29148)
**Proyecto**: Portafolio Web Profesional de Alto Impacto e IHC  
**Autor**: Adán Y. Sánchez Cubillos  
**Perfil**: Estudiante de Ingeniería de Software y Ciencia de Datos · Programador Junior Certificado (Universidad de La Salle)  
**Versión**: 1.1.0  
**Fecha**: 2026-08-31  
**Fase PDCO**: PLAN $\rightarrow$ DEVELOPMENT $\rightarrow$ OPERATIONS  
**Estándar**: IEEE 830 / ISO 29148 / ISO/IEC 25010 / ISO 9241-11  

---

## 1. Definición del Problema y Objetivos de Negocio

### 1.1 ¿Qué problema resuelve?
Los perfiles de ingeniería de software y ciencia de datos de alto calibre requieren una plataforma web que trascienda los formatos estáticos tradicionales (currículums en PDF o repositorios dispersos), evidenciando de manera interactiva, rigurosa y visualmente memorable:
1. La competencia en **arquitectura de software limpia, patrones de diseño GoF/GRASP y metodologías de ingeniería (SDLC, PDCO, BPMN 2.0)**.
2. El dominio de **modelado matemático, estadística computacional (`scipy.stats`), analítica espacial (GIS) y pipelines ETL**.
3. La autoría de **producción científica formal** (artículos de investigación con DOI, marco OCDE/JRC, econometría espacial y calidad de datos).
4. La capacidad de construir interfaces con **excelencia en IHC (Interacción Humano-Computador), usabilidad (ISO 9241) y diseño UI/UX de vanguardia (Dark Glassmorphism)**.

### 1.2 Objetivos del Sistema
- **O1**: Centralizar el ecosistema de proyectos insignia de Adán Sánchez con métricas auditables y fichas técnicas interactivas.
- **O2**: Presentar la producción académica formal de 4 artículos científicos derivados de la competencia DataJam de la Alcaldía Mayor de Bogotá.
- **O3**: Simular interactivamente el pipeline de priorización territorial SIPTA (Data Olinguitos Gen) y el flujo de decisiones BPMN 2.0.
- **O4**: Proporcionar una experiencia de usuario (UX) inmersiva, accesible y de alta estética bajo contraste calibrado WCAG 2.1 AA.
- **O5**: Facilitar el contacto profesional directo y el copiado rápido de citas académicas BibTeX.

---

## 2. Requerimientos Funcionales (RF-XXX)

| ID | Descripción | Prioridad | Entidad | Caso de Uso |
|---|---|---|---|---|
| **RF-001** | Visualizar el perfil profesional, titulación académica (*Ingeniería de Software y Ciencia de Datos*), certificación junior y biografía técnica. | Alta | Perfil | UC-001 |
| **RF-002** | Filtrar proyectos en tiempo real por categoría (*Todos*, *Data Science & Procesos*, *Machine Learning*, *Ingeniería de Software*, *Inferencia Estadística*, *Power BI & Analytics*). | Alta | Proyecto | UC-002 |
| **RF-003** | Desplegar modal interactivo con caso de estudio detallado, diagrama de arquitectura, métricas clave y stack tecnológico por proyecto. | Alta | Proyecto | UC-003 |
| **RF-004** | Explorar matriz interactiva de competencias técnicas y estándares de ingeniería (SWEBOK v3, DAMA-BOK, SOLID, ISO 25010, BPMN 2.0). | Media | Habilidad | UC-004 |
| **RF-005** | Visualizar el catálogo de 4 artículos de investigación científica de DataJam con DOI, resúmenes formales y badges metodológicos. | Alta | ArticuloCientifico | UC-005 |
| **RF-006** | Copiar instantáneamente al portapapeles la cita bibliográfica en formato BibTeX para cualquiera de los 4 artículos científicos. | Media | ArticuloCientifico | UC-006 |
| **RF-007** | Simular interactivamente en el visor territorial SIPTA las 5 etapas del pipeline de priorización territorial (PUA SDIS, DIVIPOLA, IPT OCDE, Auditoría Espacial y Web GIS). | Alta | VisorTerritorial | UC-007 |
| **RF-008** | Acceder a enlaces externos verificados (LinkedIn, GitHub, Dashboard Web GIS en Leaflet.js, email de contacto oficial `adansanchez@hotmail.com`). | Alta | Perfil | UC-008 |
| **RF-009** | Formulario de contacto interactivo con validación del lado del cliente y copiado rápido de correo al portapapeles mediante botón accesible. | Media | Mensaje | UC-009 |
| **RF-010** | Navegación fluida tipo SPA con indicador de sección activa (ScrollSpy) y transiciones CSS aceleradas por hardware. | Media | UI | UC-010 |

---

## 3. Requerimientos No Funcionales (RNF-XXX) — ISO/IEC 25010

| ID | Subcaracterística | Descripción | Métrica |
|---|---|---|---|
| **RNF-001** | Usabilidad e IHC | Cumplimiento de las 10 Heurísticas de Nielsen y principios ISO 9241-11. | 0 fallos críticos en evaluación heurística |
| **RNF-002** | Accesibilidad | Contraste de texto sobre fondos oscuros conforme a WCAG 2.1 Nivel AA. | Ratio de contraste $\ge 4.5:1$ en texto normal y $\ge 3:1$ en encabezados |
| **RNF-003** | Rendimiento (Performance) | Carga instantánea de componentes y assets optimizados sin bloqueo de renderizado. | First Contentful Paint < 0.8s, Time to Interactive < 1.2s |
| **RNF-004** | Responsividad | Adaptabilidad fluida a resoluciones móviles (360px+), tablets (768px+) y desktops (1080p / 2K / 4K). | 100% viewport adaptativo sin desbordamiento horizontal |
| **RNF-005** | Mantenibilidad | Separación estricta de responsabilidades (HTML semántico, CSS modular por tokens, JS orientado a eventos). | Índice de mantenibilidad $> 85$, 0 dependencias externas frágiles |
| **RNF-006** | Seguridad | Sanitización de entradas en el formulario de contacto y enlaces con atributos `rel="noopener noreferrer"`. | Cero vulnerabilidades XSS |

---

## 4. Restricciones Técnicas (R-XXX)

- **R-001**: Implementación en Vanilla HTML5, Vanilla CSS3 y JavaScript ES6+ moderno para máxima velocidad y cero sobrecarga de frameworks pesados.
- **R-002**: Integración de fuentes tipográficas web de Google Fonts (*Plus Jakarta Sans*, *Outfit*, *JetBrains Mono*).
- **R-003**: Cero uso de placeholders o texto genérico ("Lorem Ipsum"); toda la información técnica debe reflejar proyectos y datos reales de Adán Sánchez.
- **R-004**: Total sincronización y trazabilidad en el repositorio público de GitHub (`adansanchezc1-spec/Portfolio`).
