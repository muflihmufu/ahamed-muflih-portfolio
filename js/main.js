/**
 * AHAMED MUFLIH — PORTFOLIO CONTROLLER
 * Architecture: Clean Vanilla ES6, High Performance, Responsive Grid Binding
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error("Portfolio data not found. Please ensure data.js is loaded.");
    return;
  }

  // --- 1. TOAST NOTIFICATION UTILITY ---
  const toast = document.getElementById('toast-notice');
  let toastTimer = null;
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
  window.showToast = showToast;

  // --- 2. PROJECTS RENDERING & FILTERING (MATCHING INSPO) ---
  const projectsGrid = document.getElementById('projects-editorial-grid');
  const filterBar = document.getElementById('projects-filter-bar');

  // Default curated project list if not filtered
  function renderProjects(projectsToRender) {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = '';

    if (!projectsToRender || projectsToRender.length === 0) {
      projectsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 48px 20px; color: var(--text-muted); background: var(--bg-surface); border: 1px dashed var(--border-color); border-radius: var(--radius-md);">
          <p style="font-family: var(--font-mono); font-size: 0.9rem;">No projects found in this category.</p>
        </div>
      `;
      return;
    }

    projectsToRender.forEach((proj, idx) => {
      const card = document.createElement('div');
      card.className = 'project-card-inspo';
      card.dataset.id = proj.id;

      // Format index: 01, 02, 03, etc.
      const indexStr = String(idx + 1).padStart(2, '0');

      card.innerHTML = `
        <div class="project-thumbnail-box">
          <img src="${proj.heroImage}" alt="${proj.title}" class="project-thumbnail-img" loading="lazy">
          <span class="project-thumbnail-badge">${proj.type || proj.category}</span>
        </div>
        <div class="project-card-meta">
          <span class="project-index-num">${indexStr}</span>
          <div class="project-text-group">
            <h3 class="project-inspo-title">${proj.title}</h3>
            <p class="project-inspo-sub">${proj.client || proj.summary.substring(0, 36) + '...'}</p>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        openCaseStudyModal(proj.id);
      });

      projectsGrid.appendChild(card);
    });
  }

  function filterProjects(categoryId) {
    // Update active tab button
    if (filterBar) {
      filterBar.querySelectorAll('.filter-pill-btn').forEach(btn => {
        if (btn.dataset.category === categoryId) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }

    if (categoryId === 'all') {
      renderProjects(data.projects);
    } else if (categoryId === 'pkmco') {
      const filtered = data.projects.filter(p => 
        p.id.includes('marine') || p.category === 'engineering' || p.category === 'infrastructure'
      );
      renderProjects(filtered.length > 0 ? filtered : data.projects.slice(0, 4));
    } else {
      const filtered = data.projects.filter(p => 
        p.category === categoryId || p.secondaryCategory === categoryId
      );
      renderProjects(filtered);
    }
  }

  window.filterProjects = filterProjects;

  if (filterBar) {
    filterBar.querySelectorAll('.filter-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        filterProjects(btn.dataset.category);
      });
    });
  }

  // --- 3. CASE STUDY MODAL MANAGEMENT ---
  const modalOverlay = document.getElementById('case-study-modal');
  const modalBody = document.getElementById('modal-case-study-body');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function openCaseStudyModal(projectId) {
    const proj = data.projects.find(p => p.id === projectId);
    if (!proj || !modalBody || !modalOverlay) return;

    let processHTML = '';
    const cs = proj.caseStudy;

    if (cs && cs.type === 'website') {
      processHTML = `
        <div class="pipeline-step-box">
          <div class="pipeline-step-header">01 — OBJECTIVE</div>
          <div class="pipeline-step-body">${cs.idea}</div>
        </div>
        <div class="pipeline-step-box">
          <div class="pipeline-step-header">02 — DESIGN</div>
          <div class="pipeline-step-body">${cs.design}</div>
        </div>
        <div class="pipeline-step-box">
          <div class="pipeline-step-header">03 — CODE</div>
          <div class="pipeline-step-body">${cs.development}</div>
        </div>
        <div class="pipeline-step-box">
          <div class="pipeline-step-header">04 — IMPACT</div>
          <div class="pipeline-step-body">${cs.result}</div>
        </div>
      `;
    } else if (cs && cs.type === '3d') {
      processHTML = `
        <div class="pipeline-step-box">
          <div class="pipeline-step-header">PHASE 1 — CONCEPT</div>
          <div class="pipeline-step-body">${cs.concept}</div>
        </div>
        <div class="pipeline-step-box">
          <div class="pipeline-step-header">PHASE 2 — TOPOLOGY</div>
          <div class="pipeline-step-body">${cs.model}</div>
        </div>
        <div class="pipeline-step-box">
          <div class="pipeline-step-header">PHASE 3 — PBR TEXTURING</div>
          <div class="pipeline-step-body">${cs.texture}</div>
        </div>
        <div class="pipeline-step-box">
          <div class="pipeline-step-header">PHASE 4 — COMPOSITING</div>
          <div class="pipeline-step-body">${cs.final}</div>
        </div>
      `;
    } else {
      processHTML = `
        <div class="pipeline-step-box">
          <div class="pipeline-step-header">PHASE 1 — STRATEGY</div>
          <div class="pipeline-step-body">${proj.summary}</div>
        </div>
        <div class="pipeline-step-box">
          <div class="pipeline-step-header">PHASE 2 — OUTCOME</div>
          <div class="pipeline-step-body">${proj.outcome}</div>
        </div>
      `;
    }

    modalBody.innerHTML = `
      <img src="${proj.desktopPreview || proj.heroImage}" alt="${proj.title}" class="case-study-hero-img">
      
      <div style="display: flex; gap: 8px; margin-bottom: 12px; flex-wrap: wrap;">
        <span class="director-tag-pill">${proj.type || proj.category}</span>
        <span class="director-tag-pill" style="background: var(--bg-subtle); color: var(--text-primary);">${proj.year}</span>
      </div>

      <h2 class="case-study-title">${proj.title}</h2>
      <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 24px;">${proj.summary}</p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 180px), 1fr)); gap: 16px; margin-bottom: 24px; padding: 18px; border-radius: var(--radius-sm); background: var(--bg-main); border: 1px solid var(--border-color);">
        <div>
          <div class="form-field-label">ROLE</div>
          <div style="font-weight: 700; color: var(--text-primary); margin-top: 4px;">${proj.myRole}</div>
        </div>
        <div>
          <div class="form-field-label">CONTEXT</div>
          <div style="font-weight: 700; color: var(--text-primary); margin-top: 4px;">${proj.client}</div>
        </div>
        <div>
          <div class="form-field-label">TOOLS</div>
          <div style="font-weight: 700; color: var(--accent-terracotta); margin-top: 4px;">${(proj.technologies || proj.tags || []).slice(0, 3).join(', ')}</div>
        </div>
      </div>

      <div class="form-field-label" style="margin-bottom: 8px;">EXECUTION BREAKDOWN</div>
      <div class="case-study-pipeline-grid">
        ${processHTML}
      </div>

      <div style="margin-top: 24px; padding: 18px; border-radius: var(--radius-sm); background: var(--accent-terracotta-subtle); border: 1px solid var(--accent-terracotta-light);">
        <div class="form-field-label" style="color: var(--accent-terracotta); margin-bottom: 4px;">DELIVERABLE OUTCOME</div>
        <p style="font-size: 0.95rem; color: var(--text-primary); line-height: 1.6;">${proj.outcome}</p>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  window.openCaseStudyModal = openCaseStudyModal;

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // --- 4. DESIGN × CODE SPLIT SCREEN CONTROLLER ---
  const splitContainer = document.getElementById('split-viewport-wrapper');
  const codeSide = document.getElementById('split-layer-code');
  const splitDivider = document.getElementById('split-drag-divider');
  const rangeSlider = document.getElementById('split-range-slider');
  const stageTabs = document.querySelectorAll('.stage-tab-btn');
  const liveRuntime = document.getElementById('split-live-runtime');

  function updateVisualSplit(percent) {
    if (!splitDivider || !codeSide) return;
    const clamped = Math.max(0, Math.min(100, parseFloat(percent)));
    splitDivider.style.left = `${clamped}%`;
    codeSide.style.width = `${100 - clamped}%`;
    if (rangeSlider) rangeSlider.value = clamped;
  }

  function setActiveTab(stageName) {
    if (!stageTabs) return;
    stageTabs.forEach(btn => {
      if (btn.dataset.stage === stageName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // Global function called when range slider is dragged (desktop or touch)
  window.onSplitRangeInput = function(value) {
    if (splitContainer) {
      splitContainer.classList.remove('split-animated');
    }
    if (liveRuntime) {
      liveRuntime.classList.remove('active');
    }
    setActiveTab('split');
    updateVisualSplit(value);
  };

  // Global function called when clicking any of the 4 stage buttons
  window.switchSplitStage = function(stage) {
    setActiveTab(stage);

    if (stage === 'design') {
      if (liveRuntime) liveRuntime.classList.remove('active');
      if (splitContainer) splitContainer.classList.add('split-animated');
      updateVisualSplit(100);
      showToast('Viewing Design Layout');
    } else if (stage === 'code') {
      if (liveRuntime) liveRuntime.classList.remove('active');
      if (splitContainer) splitContainer.classList.add('split-animated');
      updateVisualSplit(0);
      showToast('Viewing Frontend Code');
    } else if (stage === 'split') {
      if (liveRuntime) liveRuntime.classList.remove('active');
      if (splitContainer) splitContainer.classList.add('split-animated');
      updateVisualSplit(50);
      showToast('Drag divider to compare Design vs Code');
    } else if (stage === 'live') {
      if (liveRuntime) liveRuntime.classList.add('active');
      showToast('Interactive Live Runtime Active');
    }
  };

  // Also bind click events on stage tabs for standard listener redundancy
  if (stageTabs) {
    stageTabs.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const stage = btn.dataset.stage;
        window.switchSplitStage(stage);
      });
    });
  }

  // --- 5. CONTACT FORM SUBMISSION ---
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name')?.value || 'Client';
      const email = document.getElementById('contact-email')?.value || '';
      const message = document.getElementById('contact-message')?.value || '';

      const recipientEmail = "muflihkambar@gmail.com";
      showToast(`Thank you, ${name}! Preparing email to ${recipientEmail}...`);

      setTimeout(() => {
        const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(`Portfolio Inquiry from ${name}`)}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;
        window.location.href = mailtoUrl;
      }, 700);

      contactForm.reset();
    });
  }

  // --- 6. INITIAL RENDER ---
  renderProjects(data.projects);

  if (window.__pendingStage) {
    window.switchSplitStage(window.__pendingStage);
  }

  console.log("Ahamed Muflih Portfolio loaded successfully.");
});
