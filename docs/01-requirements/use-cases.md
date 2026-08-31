# Especificación de Casos de Uso (IEEE 830 / ISO 29148)
**Proyecto**: Portafolio Web Profesional e IHC  
**Autor**: Adán Y. Sánchez Cubillos  
**Versión**: 1.1.0  
**Fase PDCO**: PLAN  

---

## 1. Mapa de Actores
- **Reclutador Técnico / Líder de Ingeniería (Actor Primario)**: Evalúa código, arquitectura, buenas prácticas y proyectos insignia.
- **Investigador / Par Académico (Actor Secundario)**: Revisa artículos científicos, DOIs, metodologías econométricas y citas BibTeX.
- **Visitante General**: Explora la biografía, competencias y envía propuestas de contacto.

---

## 2. Casos de Uso por Entidad

### Entidad: Proyecto

#### UC-001: Filtrar Catálogo de Proyectos
- **Actor**: Reclutador Técnico / Visitante.
- **Precondición**: El usuario se encuentra en la sección `#proyectos`.
- **Flujo Principal**:
  1. El usuario selecciona un filtro de categoría (*Data Science & Procesos*, *Machine Learning*, *Ingeniería de Software*, *Power BI & Analytics*).
  2. El sistema aplica animación visual y filtra las tarjetas activas de `PROJECTS_DATA`.
  3. El sistema actualiza el conteo y enfoca las tarjetas coincidentes sin recargar la página.
- **Postcondición**: La grilla muestra exclusivamente los proyectos de la categoría seleccionada.

#### UC-002: Desplegar Ficha Técnica Modal
- **Actor**: Reclutador Técnico.
- **Precondición**: El usuario hace clic en *"Ver Ficha Técnica"* en una tarjeta de proyecto.
- **Flujo Principal**:
  1. El sistema recupera el objeto del proyecto por su `id`.
  2. El sistema construye el DOM modal con planteamiento del problema, solución técnica, métricas auditadas, diagrama de arquitectura y enlaces a GitHub.
  3. El modal se muestra con bloqueo de scroll de fondo y soporte para tecla `ESC`.
- **Flujo Alternativo (FA-1)**: Si el usuario presiona `ESC` o hace clic fuera del modal, este se cierra fluidamente.

---

### Entidad: ArticuloCientifico

#### UC-003: Explorar Artículos de Investigación (DataJam)
- **Actor**: Investigador / Reclutador.
- **Precondición**: El usuario navega a la sección `#investigacion`.
- **Flujo Principal**:
  1. El sistema renderiza los 4 artículos de investigación oficiales con título, revista, DOI, resumen y métricas clave.
  2. El usuario puede leer el abstract y verificar los badges de marco metodológico (OCDE/JRC, LISA, REPS/SED, DAMA-BOK).
- **Postcondición**: El usuario comprende el alcance científico de las publicaciones.

#### UC-004: Copiar Cita Bibliográfica en BibTeX
- **Actor**: Investigador / Visitante.
- **Precondición**: El usuario visualiza una tarjeta de artículo científico.
- **Flujo Principal**:
  1. El usuario hace clic en el botón *"Copiar BibTeX"*.
  2. El sistema genera la entrada BibTeX formateada con autor, título, año, DOI y URL.
  3. El sistema escribe en el portapapeles del navegador mediante `navigator.clipboard`.
  4. El sistema notifica al usuario mediante un Toast de confirmación accesible.
- **Flujo Alternativo (FA-1)**: Si el portapapeles falla, el sistema maneja la excepción y muestra mensaje informativo.

---

### Entidad: VisorTerritorial

#### UC-005: Simular Etapas del Pipeline SIPTA (Data Olinguitos Gen)
- **Actor**: Reclutador / Data Engineer.
- **Precondición**: El usuario visualiza el visor en `#visor-sipta-olinguitos`.
- **Flujo Principal**:
  1. El usuario selecciona una etapa metodológica (Etapa 1 a Etapa 5).
  2. El sistema resalta la tarjeta de la etapa activa.
  3. La consola interactiva actualiza la descripción técnica, reglas de validación, volúmenes de datos y salidas hacia el Dashboard Web GIS.
- **Postcondición**: El usuario comprende la arquitectura del pipeline territorial.
