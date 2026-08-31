/**
 * Application Controller & IHC Interactive Logic
 * Portafolio Profesional: Adán Y. Sánchez Cubillos
 * Email Oficial: adansanchez@hotmail.com
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderProjects('all');
  renderSkillsTab('coreLanguages');
  renderStatsTable();
  initFilterButtons();
  initSkillsTabs();
  initModalListeners();
  initContactForm();
  initScrollAnimations();
  initBpmnViewer();
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
   4. STATISTICAL RESEARCH TABLE
   -------------------------------------------------------------------------- */
function renderStatsTable() {
  const tbody = document.getElementById('statsTableBody');
  if (!tbody) return;

  tbody.innerHTML = '';
  STATS_RESEARCH_DATA.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="test-name">
        <span>${row.test}</span>
        <span class="badge badge-cyan" style="font-size: 0.7rem; padding: 2px 8px;">${row.badge}</span>
      </td>
      <td>${row.variable}</td>
      <td class="test-statistic">${row.statistic}</td>
      <td class="test-pvalue">${row.pValue}</td>
      <td style="color: var(--text-muted); font-size: 0.88rem;">${row.conclusion}</td>
    `;
    tbody.appendChild(tr);
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
   8. INTERACTIVE BPMN VISUALIZER (DATA WRANGLING VIEWER)
   -------------------------------------------------------------------------- */
const BPMN_GATEWAY_DETAILS = {
  g1: `[BPMN 2.0 GATEWAY 1: EXTRACCIÓN Y VALIDACIÓN DE FUENTES]
-------------------------------------------------------------
* Archivos Soportados: CSV, XLSX, JSON (Inmuebles Bogotá D.C.)
* Verificación: Integridad física, formato de lectura y permisos.
* Regla XOR: Si el archivo está corrupto -> Rechazo inmediato con log estructurado.
* Salida: Raw Storage Buffer validado (0 fallos de extracción).`,

  g2: `[BPMN 2.0 GATEWAY 2: ESTRUCTURA Y CONTRATO DE ESQUEMA]
-------------------------------------------------------------
* Columnas Requeridas: 'precio', 'area', 'estrato', 'habitaciones', 'banos', 'zona'
* Regla XOR: Comprobación de tipos (float/int). Si faltan columnas maestras -> Enrutamiento a Rejection Log.
* Salida: DataFrame estructurado con esquema homologado.`,

  g3: `[BPMN 2.0 GATEWAY 3: LIMPIEZA, NORMALIZACIÓN Y DEDUPLICACIÓN]
-------------------------------------------------------------
* Tratamiento de Nulos: Imputación no paramétrica por medianas robustas.
* Filtros de Negocio: Estrato en rango válido [1 - 6], áreas positivas (> 10 m2).
* Deduplicación: Algoritmo de hash multidimensional (0 registros duplicados).
* Salida: Dataset saneado bajo calidad ISO/IEC 25010.`,

  g4: `[BPMN 2.0 GATEWAY 4: CALIDAD SEMÁNTICA & FEATURE ENGINEERING]
-------------------------------------------------------------
* Features Generadas: 'precio_unitario' ($/m2), 'puntaje_entorno', 'densidad_comercial'.
* Regla XOR: Detección de outliers mediante rango intercuartílico (IQR).
* Persistencia: Carga automatizada a Tabla Maestra (MDM) + Notificaciones decoradas.
* Tests Unitarios: 46 pruebas en Pytest ejecutadas exitosamente (100% passed).`
};

function initBpmnViewer() {
  const cards = document.querySelectorAll('.bpmn-gateway-card');
  const preview = document.getElementById('viewerTerminalPreview');
  if (!cards.length || !preview) return;

  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const gatewayKey = card.getAttribute('data-gateway');
      if (BPMN_GATEWAY_DETAILS[gatewayKey]) {
        preview.textContent = BPMN_GATEWAY_DETAILS[gatewayKey];
      }
    });
  });
}

