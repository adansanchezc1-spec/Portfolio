# ⚡ Portafolio Profesional e IHC — Adán Y. Sánchez Cubillos
> **Software Engineering, Machine Learning & Data Science**  
> *Estudiante de Ingeniería & Programador Junior Certificado (Universidad de La Salle)*

[![GitHub Profile](https://img.shields.io/badge/GitHub-adansanchezc1--spec-181717?logo=github)](https://github.com/adansanchezc1-spec)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Adán%20Sánchez-0A66C2?logo=linkedin)](https://www.linkedin.com/in/adan-sanchez-ba1931398/)
[![Email](https://img.shields.io/badge/Email-adansanchez%40hotmail.com-D83B01?logo=microsoftoutlook)](mailto:adansanchez@hotmail.com)
[![Standards](https://img.shields.io/badge/Standards-SWEBOK%20%7C%20DAMA--BOK%20%7C%20ISO%2025010-06B6D4)](#-estándares-y-fundamentos)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 🏛️ Visión General y Propósito

Este repositorio contiene la arquitectura, código fuente y gestión documental del **Portafolio Web Profesional e Interacción Humano-Computador (IHC)** de **Adán Y. Sánchez Cubillos**.

Diseñado bajo una estética de **Dark Glassmorphism**, contraste calibrado **WCAG 2.1 AA**, microinteracciones aceleradas por GPU y tipografía moderna (*Plus Jakarta Sans*, *Outfit*, *JetBrains Mono*), centralizando proyectos de ingeniería de software en **Java y Python**, modelado en **R**, pipelines de **Machine Learning**, analítica con **Pandas/NumPy/Matplotlib/SciPy** y modelado de procesos en **BPMN 2.0**.

---

## 🚀 Proyectos Insignia Destacados

```
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│                            ECOSISTEMA DE PROYECTOS TÉCNICOS                                 │
├──────────────────────┬──────────────────────┬──────────────────────┬────────────────────────┤
│ 1. DATAJAM ALCALDÍA  │ 2. CGI TOKIO ML      │ 3. ETL DATA WRANGL.  │ 4. JAVA ENTERPRISE     │
│ SIPTA Multicriterio  │ Telecom Demand Pred. │ 4 Gateways BPMN 2.0  │ POO & Clean Arch.      │
│ 1.04M Microdatos     │ U. de Tokio (Japón)  │ MDM + Pytest 80%+    │ TeleVentas / Museo     │
└──────────────────────┴──────────────────────┴──────────────────────┴────────────────────────┘
```

1. **[SIPTA — Plataforma Territorial & Web GIS](https://github.com/adansanchezc1-spec/DataJam_DataOlinguitos_Gen)**:
   - *Contexto*: Competencia oficial **DataJam de la Alcaldía Mayor de Bogotá** (Equipo Data Olinguitos Gen).
   - *Metodología*: Índice de Priorización Territorial (IPT) según manual OCDE/JRC sobre $+1.04\text{M}$ registros del PUA SDIS y proyección DANE 2025 ($8.1\text{M}$ hab.).
   - *Rigor*: $\text{VIF} = 3.21 < 10.0$, Moran's $I = 0.412$ ($p=0.008$), Bootstrap $B=1.000$ réplicas ($\text{IC}_{95\%}$).

2. **[Sistema Predictivo de Demanda Telecom & Feature Engineering](https://github.com/adansanchezc1-spec/TelecomDemand_Prediction_UTokyo)**:
   - *Contexto*: Programa **CGI Global · Universidad de Tokio (Japón)**.
   - *Metodología*: Modelado de Machine Learning supervisado en Python (Scikit-Learn), cruce relacional de datasets, imputación estadística por mediana y agregaciones zonales para asignación de infraestructura.

3. **[Sistema Data Wrangling & Predicción Inmobiliaria](https://github.com/adansanchezc1-spec/ProyectoDataWrangling)**:
   - *Arquitectura*: MVC + Hexagonal, 4 compuertas de decisión BPMN 2.0, Master Data Management (MDM), 46 tests en Pytest ($>80\%$ coverage) y patrones GoF (Facade, Strategy, Decorator).

4. **[Sistemas Empresariales en Java](https://github.com/adansanchezc1-spec/TeleVentas)**:
   - *Tecnologías*: Java 17+, POO avanzada, encapsulamiento estricto, contratos de interfaces y pruebas automatizadas JUnit 5 (*TeleVentas*, *Gestión Museo*, *Huella de Carbono*).

5. **Inferencia Estadística & Dinámica Laboral APE**:
   - *Metodología*: CRISP-DM, inferencia no paramétrica con `scipy.stats` (Shapiro-Wilk, Kruskal-Wallis, Mann-Whitney U, Chi-cuadrado) y series temporales (2023–2026).

6. **Soluciones Analíticas en Power BI**:
   - Modelado dimensional *Star Schema*, medidas DAX y tableros comerciales.

---

## 🛠️ Stack Tecnológico & Especialidades

- **Lenguajes**: Java 17+, Python 3.11+, R.
- **Librerías Científicas**: Pandas, NumPy, Matplotlib, Seaborn, SciPy (`scipy.stats`), Scikit-Learn.
- **Ingeniería de Software**: Clean Architecture, SOLID, Patrones GoF/GRASP, Pytest, JUnit 5, Type Hints, PEP 8, Google Java Style.
- **Ingeniería de Procesos**: BPMN 2.0, SDLC, Marco PDCO, Scrum, SWEBOK v3, DAMA-BOK, ISO/IEC 25010.
- **Frontend / IHC**: HTML5 Semántico, Vanilla CSS3 (Design Tokens, Glassmorphism), JavaScript ES6+, ISO 9241, Accesibilidad WCAG 2.1 AA.

---

## 📁 Estructura del Proyecto (Marco PDCO)

```
c:\Users\ADAN\Portfolio/
├── index.html                     # SPA accesible con JSON-LD Schema y OpenGraph
├── css/
│   └── style.css                  # Design Tokens, Obsidian Glassmorphism y Responsive Design
├── js/
│   ├── projects-data.js           # Catálogo inmutable de proyectos y métricas
│   └── app.js                     # Controladores interactivos (Filtros, Modales, ScrollSpy)
├── docs/                          # Gestión Documental Transversal (PDCO)
│   ├── 01-requirements/           # requirements.md, use-cases.md, entity-map.md
│   ├── 02-architecture/           # architecture.md, patterns.md
│   ├── 03-development/            # dev-log.md
│   └── 04-testing/                # test-plan.md
├── metadata.json                  # Trazabilidad y metadatos del proyecto
└── README.md                      # Documentación principal del repositorio
```

---

## 💻 Ejecución Local

1. Clona este repositorio:
   ```bash
   git clone https://github.com/adansanchezc1-spec/Portfolio.git
   cd Portfolio
   ```
2. Inicia un servidor HTTP local con Python:
   ```bash
   python -m http.server 8080
   ```
3. Abre en tu navegador:
   ```
   http://localhost:8080
   ```

---

## 👤 Contacto

- **Autor**: Adán Y. Sánchez Cubillos
- **Email Profesional**: [adansanchez@hotmail.com](mailto:adansanchez@hotmail.com)
- **LinkedIn**: [linkedin.com/in/adan-sanchez](https://www.linkedin.com/in/adan-sanchez-ba1931398/)
- **GitHub**: [github.com/adansanchezc1-spec](https://github.com/adansanchezc1-spec)
- **Universidad**: Universidad de La Salle · Bogotá D.C., Colombia
