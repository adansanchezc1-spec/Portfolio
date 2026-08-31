# Documento de Arquitectura de Software (SWEBOK v3 / ISO 42010)
**Proyecto**: Portafolio Web Profesional de Alto Impacto e IHC  
**Autor**: Adán Y. Sánchez Cubillos  
**Versión**: 1.1.0  
**Fase PDCO**: DEVELOPMENT  
**Estilo Arquitectónico**: MVC en Cliente + Arquitectura Orientada a Eventos (Single Page Application sin dependencias)  

---

## 1. Visión General del Sistema
La arquitectura del portafolio está estructurada para entregar máxima velocidad de renderizado, accesibilidad estricta (WCAG 2.1 AA) e interacción humano-computador (IHC) fluida mediante una separación limpia entre **Modelo** (`projects-data.js`), **Controlador Reactivo** (`app.js`) y **Capa de Presentación** (`index.html` + `style.css`).

```
┌─────────────────────────────────────────────────────────────┐
│                 ARQUITECTURA DEL SISTEMA                    │
├─────────────────────────────────────────────────────────────┤
│  CAPA DE VISTA (index.html + style.css)                     │
│  - Dark Glassmorphism, CSS Custom Properties, GPU Keyframes │
│  - Semántica HTML5 (nav, section, article, table, footer)    │
├─────────────────────────────────────────────────────────────┤
│  CAPA CONTROLADORA (js/app.js)                              │
│  - ScrollSpy & Event Listeners                              │
│  - Renderizador de Proyectos & Artículos Científicos        │
│  - Gestor de Modales Accesibles con Focus Trap              │
│  - Simulador Interactivo de Etapas Territoriales SIPTA      │
├─────────────────────────────────────────────────────────────┤
│  CAPA DE DATOS / MODELO (js/projects-data.js)               │
│  - PROJECTS_DATA (Catálogo de Proyectos & Métricas)         │
│  - RESEARCH_PAPERS_DATA (4 Artículos DataJam & DOIs)        │
│  - SKILLS_DATA (Matriz de Habilidades)                      │
│  - SIPTA_STAGE_DETAILS (Payloads de Simulación Territorial) │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Decisiones de Arquitectura (ADR)
| ID | Decisión | Alternativas Evaluadas | Justificación Técnica |
|---|---|---|---|
| **AD-001** | Vanilla CSS/JS Modular | React, Next.js, Vue, Tailwind | Cero sobrecarga de bundle, FCP $< 0.8\text{s}$, 100% interoperabilidad en GitHub Pages / servidores estáticos. |
| **AD-002** | Enlace Dinámico a Repositorios GitHub | iFrames embebidos | Seguridad contra clickjacking (X-Frame-Options), mejor rendimiento móvil y trazabilidad directa en GitHub. |
| **AD-003** | Generador Dinámico de Citas BibTeX | Descarga de archivos .bib | Copiado instantáneo mediante la API nativa `navigator.clipboard` sin interrupción de flujo de lectura. |

---

## 3. Principios SOLID Aplicados en el Código JavaScript

- **S (Single Responsibility Principle)**: Cada función de `app.js` cumple un único propósito (`renderProjects`, `renderResearchPapers`, `initSiptaViewer`, `openProjectModal`).
- **O (Open/Closed Principle)**: Para agregar nuevos proyectos o artículos científicos, solo se extiende el array de datos en `projects-data.js` sin modificar la lógica del renderizador.
- **L (Liskov Substitution Principle)**: Todas las tarjetas y modales manejan interfaces de datos homogéneas (`id`, `title`, `metrics`, `links`).
- **I (Interface Segregation Principle)**: Las funciones de renderizado solo consumen las propiedades que necesitan para el componente específico.
- **D (Dependency Inversion Principle)**: El controlador `app.js` interactúa con abstracciones de datos y no con lógica fuertemente acoplada al almacenamiento.
