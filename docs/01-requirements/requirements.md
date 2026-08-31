# Especificación de Requerimientos de Software (IEEE 830 / ISO 29148)
**Proyecto**: Portafolio Web Profesional de Alto Impacto e IHC  
**Autor**: Adán Y. Sánchez Cubillos  
**Versión**: 1.0.0  
**Fecha**: 2026-08-31  
**Fase PDCO**: PLAN $\rightarrow$ DEVELOPMENT  
**Estándar**: IEEE 830 / ISO 29148 / ISO/IEC 25010 / ISO 9241-11  

---

## 1. Definición del Problema y Objetivos de Negocio

### 1.1 ¿Qué problema resuelve?
Los perfiles de ingeniería de software y ciencia de datos de alto calibre requieren una plataforma que trascienda los formatos estáticos tradicionales (CVs en PDF o repositorios dispersos), evidenciando de manera interactiva, rigurosa y visualmente memorable:
1. La competencia en **arquitectura de software limpia, patrones de diseño GoF/GRASP y metodologías de ingeniería**.
2. El dominio de **modelado matemático, estadística inferencial, analítica espacial (GIS) y pipelines ETL**.
3. La capacidad de construir interfaces con **excelencia en IHC (Interacción Humano-Computador), usabilidad (ISO 9241) y diseño UI/UX de vanguardia**.

### 1.2 Objetivos del Sistema
- **O1**: Centralizar el ecosistema de proyectos insignia de Adán Sánchez con métricas auditables y fichas técnicas interactivas.
- **O2**: Proporcionar una experiencia de usuario (UX) inmersiva, accesible y de alta estética (Dark Glassmorphism).
- **O3**: Facilitar el contacto directo y la exploración fluida de código fuente, demostraciones y respaldos en la nube.

---

## 2. Requerimientos Funcionales (RF-XXX)

| ID | Descripción | Prioridad | Entidad | Caso de Uso |
|---|---|---|---|---|
| **RF-001** | Visualizar el perfil profesional, biografía técnica, pilares metodológicos y resumen ejecutivo. | Alta | Perfil | UC-001 |
| **RF-002** | Filtrar proyectos en tiempo real por categoría (*Todos*, *Data Science & GIS*, *Software Architecture & ETL*, *Power BI & Analytics*, *Inferencia Estadística*). | Alta | Proyecto | UC-002 |
| **RF-003** | Desplegar modal interactivo con caso de estudio detallado, diagrama de arquitectura, métricas clave y stack tecnológico por proyecto. | Alta | Proyecto | UC-003 |
| **RF-004** | Explorar matriz interactiva de competencias técnicas y estándares de ingeniería (SWEBOK, DAMA-BOK, SOLID, ISO 25010). | Media | Habilidad | UC-004 |
| **RF-005** | Visualizar panel de investigación estadística con resultados de pruebas de hipótesis formal (`scipy.stats`), series temporales y CAGR. | Alta | Investigacion | UC-005 |
| **RF-006** | Acceder a enlaces externos verificados (LinkedIn, GitHub, Google Drive de proyectos, email de contacto). | Alta | Perfil | UC-006 |
| **RF-007** | Formulario de contacto interactivo con validación del lado del cliente y copiado rápido de correo al portapapeles. | Media | Mensaje | UC-007 |
| **RF-008** | Navegación fluida tipo SPA con indicador de sección activa (ScrollSpy) y botón de retorno rápido al inicio. | Media | UI | UC-008 |
| **RF-009** | Alternador dinámico de acentos visuales y modo de visualización de alto contraste. | Baja | UI | UC-009 |

---

## 3. Requerimientos No Funcionales (RNF-XXX) — ISO/IEC 25010

| ID | Subcaracterística | Descripción | Métrica |
|---|---|---|---|
| **RNF-001** | Usabilidad e IHC | Cumplimiento de las 10 Heurísticas de Nielsen y principios ISO 9241-11. | 0 fallos críticos en evaluación heurística |
| **RNF-002** | Accesibilidad | Contraste de texto sobre fondos oscuros conforme a WCAG 2.1 Nivel AA. | Ratio de contraste $\ge 4.5:1$ |
| **RNF-003** | Rendimiento (Performance) | Carga instantánea de componentes y assets optimizados sin bloqueo de renderizado. | First Contentful Paint < 0.8s |
| **RNF-004** | Responsividad | Adaptabilidad fluida a resoluciones móviles (360px+), tablets (768px+) y desktops (1080p / 2K). | 100% viewport adaptativo sin scroll horizontal no deseado |
| **RNF-005** | Mantenibilidad | Separación estricta de responsabilidades (HTML semántico, CSS modular por tokens, JS orientado a eventos). | 0 dependencias externas frágiles |

---

## 4. Restricciones Técnicas (R-XXX)

- **R-001**: Implementación en Vanilla HTML5, Vanilla CSS3 y JavaScript ES6+ moderno para máxima compatibilidad y cero sobrecarga de frameworks pesados.
- **R-002**: Integración de fuentes tipográficas web de Google Fonts (*Plus Jakarta Sans*, *Outfit*, *JetBrains Mono*).
- **R-003**: Cero uso de placeholders o texto genérico ("Lorem Ipsum"); toda la información técnica debe reflejar proyectos y datos reales de Adán Sánchez.
