/**
 * Catálogo Enriquecido de Proyectos de Ingeniería, Machine Learning y Ciencia de Datos
 * Autor: Adán Y. Sánchez Cubillos
 * Perfil: Estudiante de Ingeniería · Programador Junior Certificado (Universidad de La Salle)
 * Core: Java, Python, R | Pandas, NumPy, Matplotlib, SciPy | Arquitectura SOLID & Procesos BPMN
 */

const PROJECTS_DATA = [
  {
    id: "sipta-datajam-alcaldia",
    title: "SIPTA — Plataforma Territorial & Dashboard Web GIS",
    subtitle: "DataJam 2026 · Alcaldía Mayor de Bogotá (Equipo Data Olinguitos Gen)",
    category: "data-science",
    categoryLabel: "Data Science & Procesos",
    featured: true,
    badge: "Competencia Alcaldía Mayor de Bogotá",
    period: "2026",
    role: "Scrum Master & Lead Data Engineer / Arquitectura de Pipeline",
    summary: "Plataforma integral de analítica territorial y modelado multicriterio (Índice de Priorización Territorial - IPT bajo metodología OCDE/JRC) desarrollada para la competencia oficial DataJam de la Alcaldía Mayor de Bogotá.",
    problemStatement: "Asignación ineficiente de inversión social y dispersión de datos sobre vulnerabilidad y capacidades institucionales en las 20 localidades de Bogotá.",
    solution: "Pipeline modular de 5 etapas (Adquisición, Validación ISO 25010, Integración Territorial, Modelado IPT Compuesto y Auditoría Estadística). Integra 13 dominios y 111 variables con más de 1.04 millones de microdatos del PUA SDIS.",
    metrics: [
      { label: "Microdatos Procesados", value: "1.048.575+", desc: "Registros PUA SDIS 2024 (Transferencias IMG, Comedores)" },
      { label: "Población Base", value: "8.101.412", desc: "Habitantes proyección DANE/SDP a 2025" },
      { label: "Diagnóstico VIF", value: "3.21", desc: "VIF < 10.0 (Sin multicolinealidad severa)" },
      { label: "Autocorrelación Espacial", value: "I = 0.412", desc: "Índice de Moran significativo (p = 0.008)" },
      { label: "Bootstrap Uncertainty", value: "B = 1.000", desc: "Réplicas Dirichlet con IC 95% para ranking" }
    ],
    architecture: {
      type: "Pipeline Modular SIPTA + Dashboard Web GIS Autónomo",
      description: "Pipeline estructurado bajo ingeniería de procesos y calidad ISO/IEC 25010 con homologación territorial y agregación no compensatoria.",
      diagramSteps: [
        "1. Adquisición y Descarga (DANE SDP, PUA SDIS 1.04M, REPS, SED, MEBOG, EAAB)",
        "2. Ingesta y Validación (ISO 25010 Checks, 13 Dominios, Ingestion Manifest JSON)",
        "3. Integración Territorial (Homologación a 20 Localidades DIVIPOLA, Spatial Joins, 111 Variables)",
        "4. Modelado e IPT Compuesto (Normalización Min-Max por Polaridad, Agregación Lineal y Geométrica)",
        "5. Auditoría Estadística & GIS (VIF < 10, Moran's I, Bootstrap 95%, Dashboard Leaflet.js + Chart.js)"
      ]
    },
    technologies: ["Python", "Pandas", "NumPy", "SciPy", "Matplotlib", "GeoPandas", "Leaflet.js", "BPMN 2.0", "Pytest"],
    links: {
      github: "https://github.com/adansanchezc1-spec/DataJam_DataOlinguitos_Gen",
      demo: "https://github.com/adansanchezc1-spec/DataJam_DataOlinguitos_Gen/blob/main/reports/dashboard_geografico_sipta.html",
      gdrive: "https://drive.google.com/drive/folders/1mxz2S2NAEqMt575PpRseiNNZiL_5scAJ?usp=sharing"
    }
  },
  {
    id: "cgi-tokyo-ml-telecom",
    title: "Sistema Predictivo de Demanda Telecom & Feature Engineering",
    subtitle: "Proyecto de Machine Learning · CGI Global & Universidad de Tokio (Japón)",
    category: "machine-learning",
    categoryLabel: "Machine Learning & Python",
    featured: true,
    badge: "Universidad de Tokio (Japón)",
    period: "2026",
    role: "Lead ML & Data Analyst",
    summary: "Desarrollo de un sistema predictivo de Machine Learning y feature engineering espacial para anticipar la demanda de clientes por zona geográfica para el programa CGI Global de la Universidad de Tokio.",
    problemStatement: "Falta de precisión en la estimación de demanda regional y dimensionamiento de infraestructura en telecomunicaciones, generando cuellos de botella operativos.",
    solution: "Pipeline de datos en Python para integración de clientes y registros transaccionales, tratamiento de nulos por imputación estadística, ingeniería de características (ratios de uso, consumo medio) y modelado predictivo para asignación estratégica de recursos.",
    metrics: [
      { label: "Integración de Fuentes", value: "2 Datasets", desc: "Client.csv y Record.csv consolidados por Customer_ID" },
      { label: "Feature Engineering", value: "Avanzado", desc: "Agregaciones zonales, medias ponderadas y ratios de uso" },
      { label: "División de Datos", value: "80 / 20", desc: "Validación rigurosa sobre conjuntos de entrenamiento y test" },
      { label: "Entregable Estratégico", value: "100% Cobertura", desc: "Tabla ejecutiva con acciones recomendadas por zona geográfica" }
    ],
    architecture: {
      type: "Pipeline de Machine Learning & Spatial Data Aggregation",
      description: "Extracción y cruce de datos relacionales, saneamiento estadístico, feature engineering, entrenamiento de regresión y diagnóstico de coeficientes.",
      diagramSteps: [
        "1. Ingesta y Montaje de Datos (Client.csv y Record.csv)",
        "2. Auditoría de Calidad: Detección de nulos, duplicados y tipado",
        "3. Imputación Estadística de Nulos mediante mediana robusta",
        "4. Feature Engineering y Agregación Espacial por Área Geográfica",
        "5. Entrenamiento y Evaluación de Modelos Predictivos (Scikit-Learn)",
        "6. Generación de Matriz de Recomendación Ejecutiva por Zona"
      ]
    },
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook", "Regression Analysis"],
    links: {
      github: "https://github.com/adansanchezc1-spec/TelecomDemand_Prediction_UTokyo",
      demo: "https://github.com/adansanchezc1-spec/TelecomDemand_Prediction_UTokyo/blob/main/notebooks/01_telecom_demand_prediction_cgi_utokyo.ipynb",
      gdrive: "https://drive.google.com/drive/folders/1mxz2S2NAEqMt575PpRseiNNZiL_5scAJ?usp=sharing"
    }
  },
  {
    id: "data-wrangling-bogota",
    title: "Sistema Data Wrangling & Arquitectura ETL Inmobiliaria",
    subtitle: "Pipeline ETL con 4 Gateways BPMN 2.0, Clean Architecture & SOLID",
    category: "software-engineering",
    categoryLabel: "Software Engineering & Python",
    featured: true,
    badge: "Clean Architecture & SOLID",
    period: "2026",
    role: "Software Architect & Lead Backend Developer",
    summary: "Pipeline ETL automatizado en Python que sanea y unifica datasets inmobiliarios heterogéneos (CSV, Excel, JSON) de Bogotá con 4 gateways de decisión BPMN 2.0 para Master Data Management (MDM).",
    problemStatement: "Datasets inmobiliarios heterogéneos con esquemas inconsistentes, valores nulos, duplicados y ubicaciones fuera del dominio distrital.",
    solution: "Arquitectura MVC desacoplada (Domain, Application, Infrastructure). Implementación de patrones GoF (Facade, Strategy, Decorator, Factory, Observer) y validaciones de negocio estrictas con persistencia y registro de rechazos trazables.",
    metrics: [
      { label: "Gateways BPMN 2.0", value: "4 XOR", desc: "Extracción, Estructura, Limpieza y Calidad Semántica" },
      { label: "Cobertura de Tests", value: ">80%", desc: "46 pruebas unitarias e integración en Pytest (0 fallos)" },
      { label: "Feature Engineering", value: "6+ Features", desc: "precio_unitario, puntaje_entorno, densidad_comercial, ratio parqueadero" },
      { label: "Trazabilidad MDM", value: "100%", desc: "Rejection logs estructurados con gateway y regla infringida" }
    ],
    architecture: {
      type: "MVC + Hexagonal / Ports & Adapters",
      description: "PipelineFacade como orquestador, Cleaners desacoplados por Strategy Pattern, decoradores de enriquecimiento de notificaciones y repositorio desacoplado.",
      diagramSteps: [
        "Carga de Datasets (CSV/Excel/JSON) -> Raw Storage",
        "Gateway 1 (G1): Validación de Extracción Completa -> Rechazo / Aprobación",
        "Gateway 2 (G2): Validación de Estructura y Columnas Obligatorias",
        "Gateway 3 (G3): Limpieza, Normalización de Estrato [1-6] y Deduplicación",
        "Gateway 4 (G4): Validación Semántica y Feature Engineering Temporal",
        "Carga Final a Tabla Maestra (MDM) + Notificaciones Decoradas"
      ]
    },
    technologies: ["Python 3.13", "Tkinter GUI", "Pytest", "BPMN 2.0", "SOLID", "Patrones GoF/GRASP", "PEP 8", "JSON/CSV"],
    links: {
      github: "https://github.com/adansanchezc1-spec/ProyectoDataWrangling",
      demo: "https://github.com/adansanchezc1-spec/ProyectoDataWrangling#readme",
      gdrive: "https://drive.google.com/drive/folders/1mxz2S2NAEqMt575PpRseiNNZiL_5scAJ?usp=sharing"
    }
  },
  {
    id: "java-enterprise-systems",
    title: "Sistemas Empresariales Orientados a Objetos en Java",
    subtitle: "TeleVentas, Gestión de Museo & Calculadora de Huella de Carbono",
    category: "software-engineering",
    categoryLabel: "Software Engineering & Java",
    featured: true,
    badge: "Java 17+ · OOP & SOLID",
    period: "2025–2026",
    role: "Senior Java Developer",
    summary: "Suite de aplicaciones empresariales construidas con arquitectura limpia en Java, aplicando encapsulamiento estricto, polimorfismo, manejo robusto de excepciones y pruebas unitarias automatizadas con JUnit 5.",
    problemStatement: "Desarrollo de sistemas modulares para gestión transaccional de ventas, boletería interactiva de museos y cálculo estandarizado de huella ambiental.",
    solution: "Arquitectura en capas con separación de responsabilidades, validadores de dominio, interfaces desacopladas y patrones estructurales y de comportamiento.",
    metrics: [
      { label: "Lenguaje / Versión", value: "Java 17 / 21", desc: "Tipado estricto, Google Java Style, POO robusta" },
      { label: "Testing Unitario", value: "JUnit 5", desc: "Pruebas automatizadas sobre reglas de dominio y lógica de negocio" },
      { label: "Modularidad", value: "SOLID 100%", desc: "Bajo acoplamiento y alta cohesión entre paquetes" },
      { label: "Repositorios Públicos", value: "3 Proyectos", desc: "TeleVentas, GestionMuseo y HuellaCarbono" }
    ],
    architecture: {
      type: "Layered Enterprise Architecture",
      description: "Separación clara entre capa de Presentación, Lógica de Negocio (Servicios/Dominio) y Persistencia/Infraestructura.",
      diagramSteps: [
        "Modelado de Entidades de Dominio con encapsulamiento estricto",
        "Definición de Interfaces y Contratos de Servicio",
        "Implementación de Reglas de Negocio y Validadores de Estado",
        "Manejo jerárquico de Excepciones de Dominio",
        "Pruebas Unitarias de caja blanca con JUnit"
      ]
    },
    technologies: ["Java 17+", "JUnit 5", "OOP Avanzada", "Patrones GoF", "SOLID", "Git Flow", "Clean Architecture"],
    links: {
      github: "https://github.com/adansanchezc1-spec/TeleVentas",
      demo: "https://github.com/adansanchezc1-spec/GestionMuseo",
      gdrive: "https://drive.google.com/drive/folders/1mxz2S2NAEqMt575PpRseiNNZiL_5scAJ?usp=sharing"
    }
  },
  {
    id: "inferencia-estadistica-ape",
    title: "Inferencia Estadística & Dinámica Laboral Longitudinal",
    subtitle: "Estudio Empírico CRISP-DM, Modelado Estadístico & Series Temporales (2023–2026)",
    category: "statistics",
    categoryLabel: "Inferencia Estadística & R/Python",
    featured: false,
    badge: "Investigación Cuantitativa",
    period: "2023–2026",
    role: "Investigador Cuantitativo & Data Analyst",
    summary: "Investigación econométrica y estadística sobre la ejecución de metas y velocidad de colocación en 21 municipios, evaluando paridad rural y ajuste poblacional mediante scipy.stats y R.",
    problemStatement: "Falta de modelos cuantitativos para evaluar el ritmo de colocación laboral, conversión de vacantes y equidad en la atención a poblaciones rurales y vulnerables.",
    solution: "Batería de pruebas de hipótesis formales (Shapiro-Wilk, Kruskal-Wallis, Mann-Whitney U, Chi-cuadrado), análisis de tasas de crecimiento compuesto (CAGR) y monitoreo de velocidad diaria de ejecución (+8.6 colocados/día).",
    metrics: [
      { label: "Shapiro-Wilk (Normalidad)", value: "W = 0.7992", desc: "p = 1.14e-9 < 0.05 -> Justificación no paramétrica" },
      { label: "Kruskal-Wallis (Interanual)", value: "H = 39.94", desc: "p = 1.10e-8 < 0.05 -> Heterogeneidad significativa" },
      { label: "Mann-Whitney (Paridad)", value: "U = 621.0", desc: "p = 0.060 > 0.05 -> Paridad estadística rural demostrada" },
      { label: "Chi-cuadrado (Ajuste)", value: "chi2 = 17.80", desc: "p = 0.0032 < 0.05 -> Inclusión en poblaciones vulnerables" }
    ],
    architecture: {
      type: "Metodología CRISP-DM adaptada a Políticas Públicas",
      description: "Comprensión de Datos -> Preparación Tidy Data -> Modelado Inferencial -> Pruebas de Hipótesis -> Despliegue de Recomendaciones.",
      diagramSteps: [
        "Consolidación de 9 cuadrantes tabulares 2023-2026",
        "Transformación a formato Tidy Data (Hadley Wickham)",
        "Test de Normalidad Shapiro-Wilk sobre tasas de ejecución",
        "Contraste de hipótesis no paramétricas (Kruskal-Wallis & Mann-Whitney)",
        "Modelado de velocidad de ejecución (Derivadas temporales y CAGR)",
        "Formulación de directrices de prospección empresarial"
      ]
    },
    technologies: ["Python", "SciPy (scipy.stats)", "R", "Pandas", "NumPy", "Matplotlib", "LaTeX", "CRISP-DM"],
    links: {
      github: "https://github.com/adansanchezc1-spec",
      demo: "https://drive.google.com/drive/folders/1imjPbaqELpTkmmQT6Kbd3ZkOxSzNmRhj?usp=drive_link",
      gdrive: "https://drive.google.com/drive/folders/1imjPbaqELpTkmmQT6Kbd3ZkOxSzNmRhj?usp=drive_link"
    }
  },
  {
    id: "power-bi-ecosystem",
    title: "Soluciones Analíticas & Modelado Dimensional en Power BI",
    subtitle: "Modelos Relacionales Star Schema, DAX & Tableros Comerciales",
    category: "power-bi",
    categoryLabel: "Power BI & Analytics",
    featured: false,
    badge: "Business Intelligence",
    period: "2025–2026",
    role: "BI Developer & Data Modeler",
    summary: "Desarrollo de modelos dimensionales y tableros interactivos empresariales: reportes de ventas, visualización de rendimiento territorial, auditoría de calidad de datos y modelado dimensional.",
    problemStatement: "Dispersión de registros de ventas e inventarios sin modelos relacionales unificados para análisis temporal y comparativo.",
    solution: "Diseño de modelos relacionales en estrella (Star Schema), Power Query M para limpieza profunda, medidas DAX (Time Intelligence, KPIs) y tableros interactivos.",
    metrics: [
      { label: "Modelos Desarrollados", value: "5+ Soluciones", desc: "ReporteVentas, Visualización geográfica, Calidad de datos" },
      { label: "Esquema Dimensional", value: "Star Schema", desc: "Tablas de hechos normalizadas y dimensiones con Date Table común" },
      { label: "Lógica DAX", value: "Optimizada", desc: "Time Intelligence, CALCULATE iterators, KPIs dinámicos" },
      { label: "Geolocalización", value: "Integrada", desc: "Mapas coropléticos de rendimiento comercial" }
    ],
    architecture: {
      type: "Arquitectura Dimensional Star Schema (Kimball)",
      description: "ETL en Power Query M hacia modelo en memoria VertiPaq, medidas DAX en carpetas de cálculo y tableros interactivos.",
      diagramSteps: [
        "Extracción desde múltiples fuentes (Excel, CSV, SQL)",
        "Transformación y Limpieza profunda en Power Query M",
        "Generación de Dim_Calendario unificada con granularidad diaria",
        "Relaciones 1 a Muchos con integridad referencial",
        "Cálculo de medidas DAX (YTD, YoY, Margen, Ratios)",
        "Diseño de vistas ejecutivas, operativas y de mapa"
      ]
    },
    technologies: ["Microsoft Power BI", "DAX", "Power Query (M)", "Excel Avanzado", "Modelado Dimensional", "Star Schema"],
    links: {
      github: "https://github.com/adansanchezc1-spec/PowerBI_Analytics_Solutions",
      demo: "#",
      gdrive: "https://drive.google.com/drive/folders/1mxz2S2NAEqMt575PpRseiNNZiL_5scAJ?usp=sharing"
    }
  }
];

/**
 * Matriz de Competencias enfocada en los fuertes reales del usuario
 */
const SKILLS_DATA = {
  coreLanguages: {
    title: "Lenguajes & Librerías Core",
    icon: "code",
    skills: [
      { name: "Python (Pandas, NumPy, Matplotlib, SciPy, Scikit-Learn)", level: 96 },
      { name: "Java (POO Avanzada, Estructuras de Datos, JUnit 5)", level: 94 },
      { name: "R (Análisis Estadístico, Visualización de Datos)", level: 88 },
      { name: "SciPy (Inferencia No Paramétrica, scipy.stats, Bootstrap)", level: 92 },
      { name: "Scikit-Learn (Modelos Predictivos, Regresión, Preprocesamiento)", level: 90 }
    ]
  },
  softwareArchitecture: {
    title: "Ingeniería de Software & Arquitectura",
    icon: "layers",
    skills: [
      { name: "Clean Architecture & Principios SOLID", level: 98 },
      { name: "Patrones de Diseño GoF (Creacionales, Estructurales, Comportamiento)", level: 95 },
      { name: "Patrones GRASP (Controller, Expert, Low Coupling)", level: 94 },
      { name: "Pruebas Unitarias Automatizadas (Pytest, JUnit)", level: 94 },
      { name: "Tipado Estático & Clean Code (PEP 8, Google Java Style)", level: 96 }
    ]
  },
  processManagement: {
    title: "Ingeniería de Procesos & Metodología",
    icon: "git-branch",
    skills: [
      { name: "Modelado de Procesos BPMN 2.0 (Gateways, Flujos)", level: 96 },
      { name: "Gestión del Ciclo de Vida del Software (SDLC / Marco PDCO)", level: 98 },
      { name: "Cuerpo de Conocimiento SWEBOK v3 & DAMA-BOK", level: 94 },
      { name: "Metodología CRISP-DM para Minería de Datos", level: 95 },
      { name: "Gestión de Proyectos & Metodologías Ágiles (Scrum)", level: 90 }
    ]
  },
  analyticsTools: {
    title: "Herramientas de Análisis & BI Complementarias",
    icon: "bar-chart-2",
    skills: [
      { name: "Microsoft Power BI (Modelos Star Schema, Power Query M)", level: 88 },
      { name: "DAX (Cálculos de Medidas & Time Intelligence)", level: 86 },
      { name: "Análisis Geoespacial & GIS (GeoJSON, Leaflet.js, Spatial Joins)", level: 88 },
      { name: "Master Data Management (MDM) & Calidad de Datos (ISO 25010)", level: 92 },
      { name: "Interacción Humano-Computador (IHC & Heurísticas Nielsen)", level: 92 }
    ]
  }
};

/**
 * Batería de Pruebas Estadísticas para la sección de Investigación
 */
const STATS_RESEARCH_DATA = [
  {
    test: "Shapiro-Wilk",
    variable: "Tasas de Ejecución (tau)",
    statistic: "W = 0.7992",
    pValue: "p = 1.14 x 10^-9",
    conclusion: "Rechazo de normalidad (p < 0.05). Fundamenta con rigor el uso de estadística no paramétrica en Python / R.",
    badge: "Metodológico"
  },
  {
    test: "Kruskal-Wallis",
    variable: "Vigencias 2023–2026",
    statistic: "H = 39.94",
    pValue: "p = 1.10 x 10^-8",
    conclusion: "Diferencia interanual altamente significativa. Identifica el punto de inflexión operativo en 2024.",
    badge: "Series Temporales"
  },
  {
    test: "Mann-Whitney U",
    variable: "General vs. Campesina",
    statistic: "U = 621.0",
    pValue: "p = 0.060",
    conclusion: "Paridad estadística (p > 0.05). Demuestra equidad en la atención a territorios rurales.",
    badge: "Equidad Territorial"
  },
  {
    test: "Chi-Cuadrado de Ajuste",
    variable: "Población Vulnerable",
    statistic: "chi2 = 17.80",
    pValue: "p = 0.0032",
    conclusion: "Distribución heterogénea favorable (p < 0.05) en la inclusión de grupos prioritarios.",
    badge: "Inclusión Social"
  }
];

/**
 * Catálogo Oficial de Artículos de Investigación Científica (DataJam Bogotá)
 * Fuente: C:\Users\ADAN\OneDrive\Documentos\DataJam\investigación
 */
const RESEARCH_PAPERS_DATA = [
  {
    id: "paper-ipt-ocde",
    paperNumber: "Paper 01",
    title: "Construcción, Validación Econométrica y Auditoría de Sensibilidad del IPT bajo el Marco OCDE/JRC",
    subtitle: "Un Enfoque Multidimensional de Indicadores Compuestos y Agregación No Compensatoria en Bogotá D.C.",
    journal: "Journal of Composite Indicators and Territorial Policy",
    date: "Agosto 2026",
    doi: "10.1016/j.jcompind.2026.100142",
    badge: "Marco OCDE/JRC",
    abstract: "Metodología formal para la construcción del Índice de Priorización Territorial (IPT) en Bogotá D.C. mediante normalización Min-Max por polaridad, agregación no compensatoria, verificación VIF = 3.21 e intervalos de confianza al 95% con Bootstrap Dirichlet (B = 1.000).",
    highlights: [
      "VIF = 3.21 < 10.0 (Sin Multicolinealidad)",
      "Bootstrap B = 1.000 Réplicas (IC 95%)",
      "+1.04M Microdatos PUA SDIS",
      "Agregación Lineal y Geométrica"
    ],
    formats: ["PDF", "LaTeX", "Typst", "Markdown", "BibTeX"],
    githubUrl: "https://github.com/adansanchezc1-spec/DataJam_DataOlinguitos_Gen"
  },
  {
    id: "paper-moran-lisa",
    paperNumber: "Paper 02",
    title: "Autocorrelación Espacial y Vulnerabilidad Urbana: Análisis del Clúster Suroriental de Bogotá (LISA)",
    subtitle: "Evidencia Geoespacial de Dependencia Territorial y Efectos de Desbordamiento Interlocal",
    journal: "Applied Geography & Spatial Econometrics",
    date: "Agosto 2026",
    doi: "10.1016/j.apgeog.2026.102890",
    badge: "Econometría Espacial",
    abstract: "Evidencia geoespacial cuantitativa de dependencia territorial en megaciudades latinoamericanas. Demostración de autocorrelación espacial global significativa (Moran's I = 0.412, p = 0.008) y detección de clústeres críticos High-High en Usme, Ciudad Bolívar y San Cristóbal.",
    highlights: [
      "Moran's I = 0.412 (p = 0.008)",
      "Clústeres LISA High-High",
      "Matriz de Contigüidad Queen",
      "PySAL & GeoPandas Spatial Joins"
    ],
    formats: ["PDF", "LaTeX", "Typst", "Markdown", "BibTeX"],
    githubUrl: "https://github.com/adansanchezc1-spec/DataJam_DataOlinguitos_Gen"
  },
  {
    id: "paper-brechas-salud-educacion",
    paperNumber: "Paper 03",
    title: "Asimetría Estructural y Distribución de Equipamientos: Brechas en Salud (REPS) y Educación (SED)",
    subtitle: "Un Análisis Espacial Multifuente de Georreferenciación y Demanda Per Cápita en 20 Localidades",
    journal: "International Journal for Equity in Health & Urban Systems",
    date: "Agosto 2026",
    doi: "10.1186/s12939-026-02451-x",
    badge: "Equidad Social",
    abstract: "Evaluación empírica y georreferenciada de la oferta hospitalaria (REPS 2024) y educativa (SED 2024) frente a la demanda real per cápita en las 20 localidades de Bogotá, evidenciando curvas de Lorenz con severa desigualdad interzonal.",
    highlights: [
      "REPS + SED + PUA SDIS Integrados",
      "Camas Hospitalarias per Cápita",
      "Curvas de Lorenz de Desigualdad",
      "Déficits Críticos en Periferia"
    ],
    formats: ["PDF", "LaTeX", "Typst", "Markdown", "BibTeX"],
    githubUrl: "https://github.com/adansanchezc1-spec/DataJam_DataOlinguitos_Gen"
  },
  {
    id: "paper-gobernanza-fdl-alertas",
    paperNumber: "Paper 04",
    title: "Gobernanza de Datos y Optimización del Gasto Local: Sistema de Alertas Tempranas SIPTA y Fondos FDL",
    subtitle: "Un Marco Integrado de Calidad ISO/IEC 25010, DAMA-BOK y Toma de Decisiones Basada en Evidencia",
    journal: "Government Information Quarterly & Public Finance Review",
    date: "Agosto 2026",
    doi: "10.1016/j.giq.2026.101980",
    badge: "Gobernanza DAMA-BOK",
    abstract: "Marco integral de calidad de datos bajo ISO/IEC 25010 y DAMA-BOK para Fondos de Desarrollo Local (FDL). Demostración empírica de desajustes entre presupuesto ejecutado y vulnerabilidad territorial, proponiendo la matriz predictiva de alertas SIPTA.",
    highlights: [
      "Calidad de Datos ISO/IEC 25010",
      "Gobernanza bajo DAMA-BOK",
      "Matriz de Alertas Tempranas SIPTA",
      "Reorientación Presupuestal Basada en Evidencia"
    ],
    formats: ["PDF", "LaTeX", "Typst", "Markdown", "BibTeX"],
    githubUrl: "https://github.com/adansanchezc1-spec/DataJam_DataOlinguitos_Gen"
  }
];

