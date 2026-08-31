# Plan de Pruebas y Verificación de Calidad (ISO/IEC 25010)
**Proyecto**: Portafolio Web Profesional e IHC — Adán Sánchez  
**Fase PDCO**: CONTROL  
**Fecha**: 2026-08-31  

---

## 1. Alcance de las Pruebas

| Tipo de Prueba | Objetivo | Criterio de Aceptación |
|---|---|---|
| **Estructural & Semántica HTML5** | Validar sintaxis y estructura semántica. | 0 errores W3C, etiquetas semánticas completas. |
| **Diseño y Responsividad CSS** | Validar adaptabilidad y ausencia de overflow horizontal. | Correcto layout en 360px, 768px, 1024px, 1440px. |
| **Interactividad JavaScript** | Validar filtrado, modales, contadores y eventos. | 0 excepciones en consola JS en todos los flujos. |
| **Accesibilidad (WCAG 2.1 AA)** | Comprobar contrastes y soporte de navegación por teclado. | Contraste $\ge 4.5:1$, modales cerrables con `Esc`. |
| **Usabilidad (Heurísticas Nielsen)** | Visibilidad del estado, correspondencia con el mundo real, prevención de errores. | Feedback visual inmediato en todas las acciones. |

---

## 2. Casos de Prueba Ejecutados

| ID | Componente | Escenario | Resultado Esperado | Estado |
|---|---|---|---|---|
| **TP-001** | Filtro de Proyectos | Clic en categoría "Data Science & GIS". | Muestra únicamente proyectos de esa categoría con animación fluida. | PASS |
| **TP-002** | Filtro de Proyectos | Clic en categoría "Todos". | Restaura la cuadrícula completa de proyectos. | PASS |
| **TP-003** | Modal de Proyecto | Clic en botón "Ver Ficha Técnica". | Abre modal con arquitectura, métricas y enlaces correctos. | PASS |
| **TP-004** | Modal de Proyecto | Presionar tecla `Escape` o clic fuera del modal. | Cierra el modal y restablece el scroll del body. | PASS |
| **TP-005** | Copiar Email | Clic en botón "Copiar Correo". | Copia `danysancubi@gmail.com` al portapapeles y despliega notificación toast. | PASS |
| **TP-006** | ScrollSpy | Desplazamiento vertical por secciones. | Actualiza el enlace activo en la barra de navegación superior. | PASS |
| **TP-007** | Animación KPI | Scroll hacia la sección Hero o Métricas. | Los números incrementan progresivamente de 0 al valor final. | PASS |
