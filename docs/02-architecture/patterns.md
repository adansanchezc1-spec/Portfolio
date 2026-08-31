# Catálogo de Patrones de Diseño Aplicados (GoF & GRASP)
**Proyecto**: Portafolio Web Profesional e IHC  
**Fase PDCO**: DEVELOPMENT  

---

## 1. Patrones GoF Aplicados

### 1.1 Observer / Event Listener Pattern (Comportamiento)
- **Implementación**: Suscripción de eventos a botones de filtro, tarjetas de etapas del visor territorial y enlaces de navegación.
- **Beneficio**: Desacoplamiento completo entre el disparador de la acción y la actualización del DOM.

### 1.2 Strategy Pattern (Comportamiento)
- **Implementación**: Algoritmo de filtrado de proyectos basado en predicados de categoría dinámicos (`all`, `data-science`, `machine-learning`, etc.).
- **Beneficio**: Intercambio fluido de criterios de selección sin alterar la grilla de renderizado.

### 1.3 Facade Pattern (Estructural)
- **Implementación**: Función `openProjectModal(projectId)` y `showToast(message)` que encapsulan la manipulación compleja del DOM, accesibilidad y temporizadores en llamadas simples de una sola línea.

### 1.4 Template Method (Comportamiento)
- **Implementación**: Estructura homogénea de renderizado de tarjetas en `renderProjects()` y `renderResearchPapers()` (encabezado, cuerpo, métricas, acciones de footer).

---

## 2. Patrones GRASP Aplicados

- **Information Expert**: El objeto `projects-data.js` centraliza la información de cada entidad para que el controlador no deba deducir atributos inexistentes.
- **Low Coupling & High Cohesion**: Las funciones de UI están agrupadas temáticamente y no interactúan directamente con el estado global de otros componentes.
- **Controller**: `app.js` actúa como el controlador mediador entre las acciones del usuario y los cambios de vista.
