# Plan de Pruebas de Calidad (IEEE 829 / ISO/IEC/IEEE 29119)
**Proyecto**: Portafolio Web Profesional e IHC  
**Fase PDCO**: CONTROL  
**Estándar de Calidad**: ISO/IEC 25010 / WCAG 2.1 AA  

---

## 1. Alcance de las Pruebas
Validar el comportamiento funcional, la usabilidad e IHC, la accesibilidad de contraste y la responsividad multiplataforma del portafolio.

---

## 2. Casos de Prueba Diseñados

| ID | Módulo | Caso de Prueba | Criterio de Éxito |
|---|---|---|---|
| **TC-001** | Filtros de Proyectos | Clic en cada botón de filtro (`all`, `data-science`, `machine-learning`, `software-engineering`, `power-bi`). | La grilla actualiza las tarjetas visibles y el botón queda con clase `.active`. |
| **TC-002** | Ficha Modal | Clic en *"Ver Ficha Técnica"* y posterior cierre con tecla `ESC` o botón `✕`. | El modal se abre con datos completos y se cierra restaurando el scroll del body. |
| **TC-003** | Artículos DataJam | Clic en *"Copiar BibTeX"* en cada una de las 4 tarjetas de investigación. | El texto BibTeX se copia al portapapeles y se emite Toast de confirmación. |
| **TC-004** | Visor SIPTA | Clic en cada una de las 5 etapas (Ingesta, Homologación, IPT, Auditoría, GIS). | La consola de simulación actualiza el texto y las métricas correspondientes. |
| **TC-005** | Copiado de Correo | Clic en *"Copiar Correo"* en Hero o en Contacto. | Se transfiere `adansanchez@hotmail.com` al portapapeles y se muestra Toast. |
| **TC-006** | Accesibilidad WCAG | Verificación de contraste de color en textos y badges. | Contraste mínimo de $4.5:1$ verificado. |
| **TC-007** | Responsividad Móvil | Redimensionamiento a 375px (iPhone), 768px (iPad) y 1440px (Desktop). | Menú hamburguesa funcional, sin scroll horizontal accidental. |
