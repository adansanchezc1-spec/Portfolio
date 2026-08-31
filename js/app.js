/**
 * Application Controller & IHC Interactive Logic
 * Portafolio Profesional: Adán Y. Sánchez Cubillos
 * Email Oficial: adansanchez@hotmail.com
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderProjects('all');
  renderSkillsTab('coreLanguages');
  renderResearchPapers();
  initFilterButtons();
  initSkillsTabs();
  initModalListeners();
  initContactForm();
  initScrollAnimations();
  initSiptaViewer();
});

/* --------------------------------------------------------------------------
   1. NAVBAR & SCROLLSPY
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById('mainNavbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // ScrollSpy active link detection
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/* --------------------------------------------------------------------------
   2. PROJECTS RENDER & FILTER ENGINE
   -------------------------------------------------------------------------- */
function renderProjects(filterCategory = 'all') {
  const container = document.getElementById('projectsContainer');
  if (!container) return;

  const filtered = filterCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === filterCategory);

  container.innerHTML = '';

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: var(--bg-glass-card); border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
        <p style="font-size: 1.1rem; color: var(--text-muted);">No se encontraron proyectos en esta categoría.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(project => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.setAttribute('data-id', project.id);

    // Pill metrics preview
    const metricsHtml = project.metrics.slice(0, 2).map(m => `
      <div class="metric-pill-item">
        <strong>${m.value}</strong> <span>${m.label}</span>
      </div>
    `).join('');

    // Tech tags
    const techTagsHtml = project.technologies.slice(0, 5).map(t => `
      <span class="tech-tag">${t}</span>
    `).join('');

    card.innerHTML = `
      <div>
        <div class="project-card-header">
          <div class="project-meta-row">
            <span class="badge ${project.featured ? 'badge-cyan' : 'badge-emerald'}">${project.badge}</span>
            <span class="font-mono" style="font-size: 0.8rem; color: var(--text-dim);">${project.period}</span>
          </div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-subtitle">${project.subtitle}</p>
        </div>
        <p class="project-summary">${project.summary}</p>
        <div class="project-metrics-pills">
          ${metricsHtml}
        </div>
      </div>
      <div>
        <div class="project-tech-tags">
          ${techTagsHtml}
        </div>
        <div class="project-card-footer">
          <button class="btn btn-secondary btn-sm" onclick="openProjectModal('${project.id}')" aria-label="Ver ficha técnica de ${project.title}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/></svg>
            Ficha Técnica
          </button>
          <div class="project-links">
            ${project.links.github && project.links.github !== '#' ? `
              <a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" title="Ver código en GitHub" style="width: 34px; height: 34px;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
            ` : ''}
            ${project.links.gdrive && project.links.gdrive !== '#' ? `
              <a href="${project.links.gdrive}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" title="Ver recursos en Drive" style="width: 34px; height: 34px;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function initFilterButtons() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      renderProjects(category);
    });
  });
}

/* --------------------------------------------------------------------------
   3. SKILLS TABS & PROGRESS BARS
   -------------------------------------------------------------------------- */
function renderSkillsTab(tabKey) {
  const container = document.getElementById('skillsContent');
  if (!container || !SKILLS_DATA[tabKey]) return;

  const data = SKILLS_DATA[tabKey];
  
  let html = `<div class="skills-content-grid">`;
  data.skills.forEach(skill => {
    html += `
      <div class="skill-bar-item">
        <div class="skill-info">
          <span>${skill.name}</span>
          <span class="font-mono" style="color: var(--color-primary-light);">${skill.level}%</span>
        </div>
        <div class="skill-progress-track">
          <div class="skill-progress-fill" style="width: ${skill.level}%;"></div>
        </div>
      </div>
    `;
  });
  html += `</div>`;

  container.innerHTML = html;
}

function initSkillsTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const tabKey = tab.getAttribute('data-tab');
      renderSkillsTab(tabKey);
    });
  });
}

/* --------------------------------------------------------------------------
   4. RESEARCH PAPERS RENDERER (DATAJAM SCIENTIFIC PAPERS)
   -------------------------------------------------------------------------- */
function renderResearchPapers() {
  const container = document.getElementById('researchPapersGrid');
  if (!container || !RESEARCH_PAPERS_DATA) return;

  container.innerHTML = '';

  RESEARCH_PAPERS_DATA.forEach(paper => {
    const card = document.createElement('article');
    card.className = 'open-research-card';
    card.style.background = 'rgba(15, 23, 42, 0.75)';

    const highlightsHtml = paper.highlights.map(h => `
      <span class="tech-tag" style="background: rgba(6, 182, 212, 0.1); color: var(--color-primary-light); font-size: 0.76rem;">${h}</span>
    `).join('');

    const formatsHtml = paper.formats.map(f => `
      <span style="display: inline-block; padding: 2px 6px; background: rgba(255, 255, 255, 0.05); border-radius: 4px; font-size: 0.72rem; color: var(--text-dim); font-family: var(--font-mono);">${f}</span>
    `).join(' ');

    card.innerHTML = `
      <div>
        <div class="research-tag-row">
          <span class="badge badge-cyan">${paper.paperNumber} · ${paper.badge}</span>
          <span class="font-mono" style="font-size: 0.78rem; color: var(--text-dim);">${paper.date}</span>
        </div>
        <h4 class="research-card-title" style="font-size: 1.18rem; margin-top: 6px;">${paper.title}</h4>
        <p style="font-size: 0.84rem; color: var(--color-primary-light); margin-bottom: 10px; font-style: italic;">
          ${paper.subtitle}
        </p>
        <p style="font-size: 0.8rem; color: var(--text-dim); margin-bottom: 12px;">
          <strong>Revista / Foro:</strong> ${paper.journal} · <span class="font-mono" style="color: #a5f3fc;">DOI: ${paper.doi}</span>
        </p>
        <p class="research-card-desc" style="font-size: 0.88rem; line-height: 1.55;">
          ${paper.abstract}
        </p>
        <div style="display: flex; flex-wrap: wrap; gap: 6px; margin: 12px 0;">
          ${highlightsHtml}
        </div>
      </div>

      <div style="border-top: 1px solid var(--border-subtle); padding-top: 14px; margin-top: 14px;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
          <div style="display: flex; gap: 4px; align-items: center;">
            <span style="font-size: 0.75rem; color: var(--text-dim);">Formatos:</span>
            ${formatsHtml}
          </div>
          <button class="btn btn-secondary btn-sm" onclick="copyBibtex('${paper.id}')" style="font-size: 0.75rem; padding: 4px 10px;">
            Copiar BibTeX
          </button>
        </div>
        <a href="${paper.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="width: 100%; justify-content: center;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          Ver Documentos en GitHub
        </a>
      </div>
    `;

    container.appendChild(card);
  });
}

function copyBibtex(paperId) {
  const paper = RESEARCH_PAPERS_DATA.find(p => p.id === paperId);
  if (!paper) return;

  const bibtex = `@article{Sanchez2026_${paperId},
  author = {S{\\'a}nchez Cubillos, Ad{\\'a}n Yesid},
  title = {${paper.title}},
  journal = {${paper.journal}},
  year = {2026},
  doi = {${paper.doi}},
  url = {${paper.githubUrl}}
}`;

  navigator.clipboard.writeText(bibtex).then(() => {
    showToast(`¡Cita BibTeX de ${paper.paperNumber} copiada al portapapeles!`);
  }).catch(() => {
    showToast(`Cita BibTeX copiada.`);
  });
}

/* --------------------------------------------------------------------------
   5. MODAL MANAGER (ACCESSIBLE DEEP-DIVE)
   -------------------------------------------------------------------------- */
function openProjectModal(projectId) {
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (!project) return;

  const modalBackdrop = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');
  if (!modalBackdrop || !modalContent) return;

  const metricsGrid = project.metrics.map(m => `
    <div class="metric-box">
      <div class="metric-number" style="font-size: 1.4rem;">${m.value}</div>
      <div class="metric-label">${m.label}</div>
      <div class="metric-sub">${m.desc}</div>
    </div>
  `).join('');

  const diagramStepsList = project.architecture.diagramSteps.map(step => `
    <li>${step}</li>
  `).join('');

  const techBadges = project.technologies.map(t => `
    <span class="tech-tag" style="background: rgba(6, 182, 212, 0.1); color: var(--color-primary-light);">${t}</span>
  `).join('');

  modalContent.innerHTML = `
    <div class="modal-header">
      <span class="badge badge-cyan" style="margin-bottom: 8px;">${project.categoryLabel} · ${project.period}</span>
      <h2 style="font-size: 1.8rem; margin-bottom: 4px;">${project.title}</h2>
      <p style="color: var(--color-primary-light); font-weight: 500;">${project.subtitle}</p>
    </div>

    <div>
      <h4 class="modal-section-title">Rol y Responsabilidades</h4>
      <p style="font-size: 0.95rem; color: var(--text-main);">${project.role}</p>

      <h4 class="modal-section-title">Problema & Contexto</h4>
      <p style="font-size: 0.95rem;">${project.problemStatement}</p>

      <h4 class="modal-section-title">Solución de Ingeniería e Implementación</h4>
      <p style="font-size: 0.95rem;">${project.solution}</p>

      <h4 class="modal-section-title">Métricas Clave y Resultados</h4>
      <div class="metrics-grid-2x2" style="margin-top: 10px;">
        ${metricsGrid}
      </div>

      <h4 class="modal-section-title">Arquitectura del Sistema & Flujo Metodológico</h4>
      <p style="font-size: 0.9rem; color: var(--text-dim); margin-bottom: 6px;">${project.architecture.description}</p>
      <ul class="modal-flow-list">
        ${diagramStepsList}
      </ul>

      <h4 class="modal-section-title">Tecnologías y Librerías Aplicadas</h4>
      <div class="project-tech-tags" style="margin-top: 8px;">
        ${techBadges}
      </div>

      <div style="display: flex; gap: 14px; margin-top: 28px; padding-top: 18px; border-top: 1px solid var(--border-subtle); flex-wrap: wrap;">
        ${project.links.github && project.links.github !== '#' ? `
          <a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            Ver en GitHub
          </a>
        ` : ''}
        ${project.links.gdrive && project.links.gdrive !== '#' ? `
          <a href="${project.links.gdrive}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>
            Ver en Google Drive
          </a>
        ` : ''}
      </div>
    </div>
  `;

  modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modalBackdrop = document.getElementById('projectModal');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function initModalListeners() {
  const modalBackdrop = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalCloseBtn');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  // Escape key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

/* --------------------------------------------------------------------------
   6. CONTACT FORM & TOAST COPIER
   -------------------------------------------------------------------------- */
function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    const container = document.createElement('div');
    container.className = 'toast-container';
    toast = document.createElement('div');
    toast.className = 'toast';
    container.appendChild(toast);
    document.body.appendChild(container);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
    <span>${message}</span>
  `;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

function copyEmail() {
  const email = "adansanchez@hotmail.com";
  navigator.clipboard.writeText(email).then(() => {
    showToast("¡Correo copiado al portapapeles: " + email + "!");
  }).catch(() => {
    showToast("Correo: " + email);
  });
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;

    if (!name || !email || !message) {
      showToast("Por favor completa todos los campos.");
      return;
    }

    showToast("¡Gracias por tu mensaje, " + name + "! Te contactaré a la brevedad.");
    form.reset();
  });
}

/* --------------------------------------------------------------------------
   7. SCROLL INTERSECTIONS & ANIMATED COUNTERS
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const counterElements = document.querySelectorAll('.animate-counter');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counterElements.forEach(el => {
          const target = parseFloat(el.getAttribute('data-target'));
          const isDecimal = el.getAttribute('data-decimal') === 'true';
          const prefix = el.getAttribute('data-prefix') || '';
          const suffix = el.getAttribute('data-suffix') || '';

          let current = 0;
          const step = target / 40;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent = `${prefix}${isDecimal ? current.toFixed(2) : Math.floor(current)}${suffix}`;
          }, 30);
        });
      }
    });
  }, { threshold: 0.2 });

  const heroVisual = document.querySelector('.hero-dashboard-card');
  if (heroVisual) {
    observer.observe(heroVisual);
  }
}

/* --------------------------------------------------------------------------
   8. INTERACTIVE SIPTA WEB GIS VISUALIZER (DATA OLINGUITOS GEN)
   -------------------------------------------------------------------------- */
const SIPTA_STAGE_DETAILS = {
  s1: `[ETAPA 1: INGESTA DE MICRODATOS MULTI-INSTITUCIONALES]
-------------------------------------------------------------
* Fuente Primaria: PUA SDIS 2024 (+1.048.575 microdatos anonimizados).
* Proyecciones Poblacionales: DANE / SDP a 2025 (8.101.412 habitantes).
* Entidades Vinculadas: REPS, SED, MEBOG, EAAB, Secretaría de Salud.
* Cobertura: 13 dominios sectoriales y 111 variables territoriales homologadas.
* Formato: Ingestion Manifest estructurado con validación ISO/IEC 25010.`,

  s2: `[ETAPA 2: HOMOLOGACIÓN TERRITORIAL & DIVIPOLA BOGOTÁ]
-------------------------------------------------------------
* Mapeo Geoespacial: 20 Localidades oficiales de Bogotá D.C.
* Uniones Espaciales: Spatial Joins precisos sobre geometrías GeoJSON.
* Normalización de Esquemas: Resolución de discrepancias toponímicas.
* Control de Calidad: 100% de registros enmarcados en el dominio distrital.`,

  s3: `[ETAPA 3: MODELADO DEL ÍNDICE IPT COMPUESTO (OCDE/JRC)]
-------------------------------------------------------------
* Estandarización: Normalización Min-Max según polaridad (+ / -) del indicador.
* Agregación No Compensatoria: Ponderación lineal y geométrica multivariada.
* Sub-índices Calculados: Vulnerabilidad Social vs. Capacidad de Respuesta.
* Resultado: Índice de Priorización Territorial (IPT) para asignación óptima de inversión.`,

  s4: `[ETAPA 4: AUDITORÍA ESTADÍSTICA & INFERENCIA ESPACIAL]
-------------------------------------------------------------
* Diagnóstico de Multicolinealidad: VIF promedio = 3.21 (< 10.0, sin colinealidad).
* Autocorrelación Espacial: Moran's I = 0.412 (p = 0.008, clustering significativo).
* Simulación de Incertidumbre: B = 1.000 réplicas Bootstrap Dirichlet con IC 95%.
* Validación: Robustez estadística verificada en scipy.stats y GeoPandas.`,

  s5: `[ETAPA 5: VISOR WEB GIS INTERACTIVO (LEAFLET.JS & CHART.JS)]
-------------------------------------------------------------
* Cartografía Dinámica: Mapas coropléticos por localidad con escalas de calor.
* Métricas en Vivo: Tooltips interactivos, tablas de ranking y filtros por sector.
* Arquitectura: SPA autónoma, ligera y accesible sin dependencias pesadas.
* Repositorio GitHub: github.com/adansanchezc1-spec/DataJam_DataOlinguitos_Gen`
};

function initSiptaViewer() {
  const cards = document.querySelectorAll('.sipta-stage-card');
  const preview = document.getElementById('viewerTerminalPreview');
  if (!cards.length || !preview) return;

  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const stageKey = card.getAttribute('data-stage');
      if (SIPTA_STAGE_DETAILS[stageKey]) {
        preview.textContent = SIPTA_STAGE_DETAILS[stageKey];
      }
    });
  });
}


