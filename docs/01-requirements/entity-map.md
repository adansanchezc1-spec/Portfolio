# Mapa de Entidades y Modelo Conceptual
**Proyecto**: Portafolio Web Profesional e IHC — Adán Sánchez  
**Fase PDCO**: PLAN $\rightarrow$ DEVELOPMENT  

---

## 1. Diagrama Entidad-Relación Conceptual (Mermaid)

```mermaid
erDiagram
    PROFILE ||--o{ PROJECT : "presenta"
    PROFILE ||--o{ SKILL_GROUP : "domina"
    PROFILE ||--o{ RESEARCH_STUDY : "publica"
    PROJECT ||--o{ TECH_TAG : "utiliza"
    PROJECT ||--o{ ARCHITECTURE_PATTERN : "implementa"
    PROJECT ||--o{ METRIC : "evidencia"
    RESEARCH_STUDY ||--o{ STATISTICAL_TEST : "incluye"

    PROFILE {
        string full_name
        string headline
        string location
        string email
        string linkedin_url
        string github_url
        string bio_summary
    }

    PROJECT {
        string id
        string title
        string category
        string subtitle
        string problem_solved
        string architecture_type
        string github_url
        string live_demo_url
        string gdrive_url
    }

    METRIC {
        string label
        string value
        string context
    }

    SKILL_GROUP {
        string category_name
        string description
        string[] skills
    }

    STATISTICAL_TEST {
        string test_name
        string variable
        string statistic
        string p_value
        string conclusion
    }
```

---

## 2. Descripción de Entidades Principales

1. **Profile (Perfil Profesional)**: Contiene la identidad, propuesta de valor, biografía y canales de contacto de Adán Sánchez.
2. **Project (Proyecto Técnico)**: Representa los entregables mayores de software y ciencia de datos (SIPTA, Data Wrangling Bogotá, Dashboards Power BI, Java Enterprise).
3. **Metric (Métricas de Calidad e Impacto)**: Cuantificación verificable de resultados (volumen de datos, pruebas estadísticas, cobertura de código).
4. **SkillGroup (Grupo de Competencias)**: Clasificación de habilidades por disciplina (Data Science, Software Engineering, BI, IHC/UX).
5. **StatisticalTest (Pruebas de Inferencia)**: Registro de rigurosidad estadística en estudios empíricos.
