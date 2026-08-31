# Documentación de APIs Internas y Estructuras de Datos
**Proyecto**: Portafolio Web Profesional e IHC  
**Fase PDCO**: DEVELOPMENT  

---

## 1. Módulos y Estructuras de Datos (`js/projects-data.js`)

### `PROJECTS_DATA` (Array de Objetos)
Define la colección de proyectos insignia.
```javascript
{
  id: string,                 // Identificador único (kebab-case)
  title: string,              // Nombre del proyecto
  subtitle: string,           // Subtítulo contextual
  category: string,           // Categoría ('data-science' | 'machine-learning' | 'software-engineering' | 'power-bi')
  featured: boolean,          // Si se destaca en la vista inicial
  metrics: Array<{            // Métricas cuantitativas
    label: string,
    value: string,
    desc: string
  }>,
  architecture: {             // Diagrama y pasos técnicos
    type: string,
    description: string,
    diagramSteps: string[]
  },
  technologies: string[],     // Stack de tecnologías
  links: {                    // Enlaces auditables
    github: string,
    demo?: string,
    gdrive?: string
  }
}
```

### `RESEARCH_PAPERS_DATA` (Array de Objetos)
Define los 4 artículos de investigación científica de DataJam.
```javascript
{
  id: string,                 // 'paper-ipt-ocde', 'paper-moran-lisa', etc.
  paperNumber: string,        // 'Paper 01', 'Paper 02', etc.
  title: string,              // Título completo del artículo
  subtitle: string,           // Subtítulo metodológico
  journal: string,            // Nombre de la revista / conferencia
  date: string,               // Fecha de publicación
  doi: string,                // Identificador DOI
  badge: string,              // Badge temático
  abstract: string,           // Resumen formal
  highlights: string[],       // Píldoras de métricas destacadas
  formats: string[],          // ['PDF', 'LaTeX', 'Typst', 'Markdown', 'BibTeX']
  githubUrl: string           // Enlace a los archivos fuente
}
```

---

## 2. Métodos del Controlador (`js/app.js`)

| Función | Parámetros | Descripción |
|---|---|---|
| `renderProjects(filter)` | `filter: string` | Filtra e inyecta dinámicamente las tarjetas de proyectos en `#projectsContainer`. |
| `renderResearchPapers()` | Ninguno | Inyecta las tarjetas de los 4 artículos científicos en `#researchPapersGrid`. |
| `renderSkillsTab(tabKey)` | `tabKey: string` | Renderiza las barras de progreso para la pestaña de competencias seleccionada. |
| `openProjectModal(id)` | `projectId: string` | Despliega el modal accesible con la ficha técnica completa del proyecto. |
| `copyBibtex(paperId)` | `paperId: string` | Sintetiza la cita BibTeX y la transfiere al portapapeles con toast de confirmación. |
| `initSiptaViewer()` | Ninguno | Inicializa los escuchadores de eventos para las 5 etapas del visor territorial SIPTA. |
| `copyEmail()` | Ninguno | Copia la dirección oficial `adansanchez@hotmail.com` al portapapeles. |
| `showToast(message)` | `message: string` | Muestra una notificación emergente temporal en pantalla. |
