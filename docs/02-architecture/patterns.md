# Catálogo de Patrones de Diseño e IHC Aplicados
**Proyecto**: Portafolio Web Profesional e IHC — Adán Sánchez  
**Fase PDCO**: PLAN $\rightarrow$ DEVELOPMENT  

---

## 1. Patrones de Diseño de Software (GoF & GRASP)

| Patrón | Tipo | Componente | Justificación / Problema que Resuelve |
|---|---|---|---|
| **Module / Namespace Pattern** | Arquitectónico JS | `PortfolioApp` (`app.js`) | Encapsula el estado de la aplicación, evitando contaminación del `window` global. |
| **Repository Pattern** | GRASP | `ProjectsRepository` | Centraliza el acceso y consulta estructurada sobre la colección de proyectos. |
| **Observer / Event-Driven** | GoF Comportamiento | `FilterEngine` & `ScrollSpy` | Desacopla la emisión de eventos de usuario (clicks en filtros, scroll) de la actualización visual del DOM. |
| **Strategy Pattern** | GoF Comportamiento | `FilterStrategy` | Aplica diferentes criterios de filtrado (por categoría, búsqueda textual, ordenamiento por relevancia). |
| **Singleton / Shared Instance** | GoF Creacional | `ModalManager` | Garantiza una única instancia activa del modal de detalles con control de foco accesible. |

---

## 2. Patrones de Interacción Humano-Computador (IHC & UI/UX)

1. **Card Grid with Progressive Disclosure (Descubrimiento Progresivo)**:
   - La tarjeta muestra título, subtítulo, badges tecnológicos y métricas de impacto principales.
   - El detalle profundo (diagrama de arquitectura, flujo BPMN, justificación técnica) se revela a demanda mediante el modal interactivo, reduciendo la carga cognitiva inicial (Cognitive Load Reduction).
2. **Direct Feedback & Micro-Interactions**:
   - Efectos de elevación e iluminación sutil (*Glow border & Box-shadow*) al pasar el cursor sobre las tarjetas interactivas.
   - Indicador visual de copiado exitoso al interactuar con el email de contacto.
3. **Responsive Navigation & ScrollSpy**:
   - La barra de navegación superior fija (*Sticky Glassmorphism Nav*) resalta automáticamente la sección activa en el viewport.
4. **Dark Mode & Contrast Compliance (WCAG AA)**:
   - Paleta de fondos oscuros con luminosidad calibrada para prevenir fatiga visual y mantener ratios de contraste superiores a $7:1$ en títulos y $4.5:1$ en texto de cuerpo.
