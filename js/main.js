/**
 * AHAMED MUFLIH — PORTFOLIO MAIN CONTROLLER
 * Architecture: Modular Vanilla JS with Reactive Central Data Binding
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error("Portfolio data not found. Please ensure data.js is loaded.");
    return;
  }

  // --- 1. WEB AUDIO SYNTHESIZER FOR SUBTLE LUXURY SOUND FX ---
  let audioCtx = null;
  window.soundFxEnabled = false;

  function initAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  window.playSynthTone = function(freq = 440, type = 'sine', duration = 0.12, volume = 0.08) {
    if (!window.soundFxEnabled) return;
    try {
      initAudioContext();
      if (!audioCtx) return;

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(volume, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      console.warn("Audio synth warning:", e);
    }
  };

  const soundBtn = document.getElementById('sound-toggle-btn');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      window.soundFxEnabled = !window.soundFxEnabled;
      if (window.soundFxEnabled) {
        initAudioContext();
        soundBtn.classList.add('sound-on');
        soundBtn.setAttribute('title', 'Sound Effects: ON');
        window.playSynthTone(580, 'sine', 0.2);
        showToast('Sound Effects Activated');
      } else {
        soundBtn.classList.remove('sound-on');
        soundBtn.setAttribute('title', 'Sound Effects: OFF');
        showToast('Sound Effects Muted');
      }
    });
  }

  // --- 2. CUSTOM INTERACTIVE CURSOR WITH CONTEXTUAL LABELS ---
  const cursor = document.getElementById('custom-cursor');
  const follower = document.getElementById('custom-cursor-follower');
  const cursorText = document.getElementById('cursor-text');

  let mouseX = -100, mouseY = -100;
  let followerX = -100, followerY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (cursor) {
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    }
  });

  function updateFollower() {
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;
    if (follower) {
      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;
    }
    requestAnimationFrame(updateFollower);
  }
  updateFollower();

  function setCursorHover(isHovering, label = "") {
    if (!cursor || !follower) return;
    if (isHovering) {
      cursor.classList.add('hovering-link');
      follower.classList.add('hovering-link');
      if (cursorText) {
        cursorText.textContent = label;
      }
    } else {
      cursor.classList.remove('hovering-link');
      follower.classList.remove('hovering-link');
      if (cursorText) {
        cursorText.textContent = "";
      }
    }
  }

  window.setCursorHover = setCursorHover;

  // --- 3. TOAST NOTIFICATION UTILITY ---
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

  // --- 4. HERO PORTRAIT STAGE PARALLAX & FLOATING PILLS ---
  const portraitStage = document.getElementById('portrait-stage');
  const floatingTags = document.querySelectorAll('.floating-tag');

  if (portraitStage && floatingTags.length > 0) {
    portraitStage.addEventListener('mousemove', (e) => {
      const rect = portraitStage.getBoundingClientRect();
      const relX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const relY = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);

      floatingTags.forEach(tag => {
        const speed = parseFloat(tag.dataset.speed || '1');
        tag.style.setProperty('--mx', `${(relX * 14 * speed).toFixed(2)}px`);
        tag.style.setProperty('--my', `${(relY * 14 * speed).toFixed(2)}px`);
      });
    });

    portraitStage.addEventListener('mouseleave', () => {
      floatingTags.forEach(tag => {
        tag.style.setProperty('--mx', '0px');
        tag.style.setProperty('--my', '0px');
      });
    });

    floatingTags.forEach(tag => {
      tag.addEventListener('mouseenter', () => {
        setCursorHover(true, "DISCIPLINE");
        window.playSynthTone(540, 'sine', 0.08, 0.04);
      });
      tag.addEventListener('mouseleave', () => setCursorHover(false));
    });
  }

  // --- 5. CATEGORY FILTER & EDITORIAL PROJECT RENDERING ---
  const filterContainer = document.getElementById('category-filter-wrap');
  const projectsStack = document.getElementById('editorial-projects-stack') || document.getElementById('projects-grid');

  function renderCategoryFilters() {
    if (!filterContainer) return;
    filterContainer.innerHTML = '';

    data.categories.forEach((cat, index) => {
      const btn = document.createElement('button');
      btn.className = `filter-btn ${index === 0 ? 'active' : ''}`;
      btn.textContent = cat.label;
      btn.dataset.category = cat.id;

      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        window.playSynthTone(480, 'sine', 0.1);
        filterProjects(cat.id);
      });

      btn.addEventListener('mouseenter', () => setCursorHover(true, "FILTER"));
      btn.addEventListener('mouseleave', () => setCursorHover(false));

      filterContainer.appendChild(btn);
    });
  }

  function renderProjects(projectsToRender) {
    if (!projectsStack) return;
    projectsStack.innerHTML = '';

    if (!projectsToRender || projectsToRender.length === 0) {
      projectsStack.innerHTML = `
        <div style="text-align: center; padding: 60px 20px; color: var(--text-muted); border: 1px dashed var(--border-subtle); border-radius: var(--radius-md);">
          <p style="font-family: var(--font-mono); font-size: 0.95rem;">No projects found in this category.</p>
        </div>
      `;
      return;
    }

    // 1. Featured large editorial project card (first project)
    const featured = projectsToRender[0];
    const featuredCard = document.createElement('div');
    featuredCard.className = 'featured-editorial-project';
    featuredCard.dataset.id = featured.id;
    featuredCard.innerHTML = `
      <div class="featured-media-box">
        <img src="${featured.heroImage}" alt="${featured.title}" class="featured-media-img" loading="lazy">
        <span class="mono-tag" style="position: absolute; top: 20px; left: 20px; background: rgba(0,0,0,0.75); backdrop-filter: blur(8px); padding: 6px 14px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.15);">FEATURED PROJECT</span>
      </div>
      <div class="featured-info-box">
        <div style="max-width: 650px;">
          <div class="mono-tag" style="margin-bottom: 8px;">${featured.category.toUpperCase()} · ${featured.year}</div>
          <h3 style="font-size: clamp(1.8rem, 3.2vw, 2.5rem); font-weight: 800; color: #fff; margin-bottom: 12px; line-height: 1.2;">${featured.title}</h3>
          <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.6; margin-bottom: 18px;">${featured.summary}</p>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            ${featured.tags.map(t => `<span class="mono-tag" style="background: rgba(255,255,255,0.06); padding: 4px 10px; border-radius: 4px;">${t}</span>`).join('')}
          </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 12px; margin-top: 10px;">
          <span class="mono-tag" style="color: var(--text-dim);">ROLE: ${featured.myRole}</span>
          <button class="btn-pill btn-pill-primary btn-case-study" data-project-id="${featured.id}">
            <span>EXPLORE CASE STUDY →</span>
          </button>
        </div>
      </div>
    `;

    const featBtn = featuredCard.querySelector('.btn-case-study');
    if (featBtn) {
      featBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.playSynthTone(600, 'sine', 0.15);
        openCaseStudyModal(featured.id);
      });
    }

    featuredCard.addEventListener('click', () => {
      window.playSynthTone(600, 'sine', 0.15);
      openCaseStudyModal(featured.id);
    });

    featuredCard.addEventListener('mouseenter', () => setCursorHover(true, "VIEW"));
    featuredCard.addEventListener('mouseleave', () => setCursorHover(false));

    projectsStack.appendChild(featuredCard);

    // 2. Remaining projects rendered in alternating 2-column grid
    const remaining = projectsToRender.slice(1);
    if (remaining.length > 0) {
      const twoColGrid = document.createElement('div');
      twoColGrid.className = 'projects-two-col';

      remaining.forEach(proj => {
        const card = document.createElement('div');
        card.className = 'project-editorial-card';
        card.dataset.id = proj.id;
        card.innerHTML = `
          <div class="project-editorial-img-box">
            <img src="${proj.heroImage}" alt="${proj.title}" class="project-editorial-img" loading="lazy">
          </div>
          <div class="project-editorial-body">
            <div class="project-category-tag">${proj.category.toUpperCase()} · ${proj.type.toUpperCase()}</div>
            <h3 class="project-title">${proj.title}</h3>
            <p class="project-desc">${proj.summary}</p>
            <div class="project-details-row">
              <span>${proj.myRole}</span>
              <button class="project-view-link btn-case-study" data-project-id="${proj.id}" style="background: none; border: none; cursor: pointer;">
                <span>EXPLORE →</span>
              </button>
            </div>
          </div>
        `;

        const btn = card.querySelector('.btn-case-study');
        if (btn) {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            window.playSynthTone(600, 'sine', 0.15);
            openCaseStudyModal(proj.id);
          });
        }

        card.addEventListener('click', () => {
          window.playSynthTone(600, 'sine', 0.15);
          openCaseStudyModal(proj.id);
        });

        card.addEventListener('mouseenter', () => setCursorHover(true, "OPEN"));
        card.addEventListener('mouseleave', () => setCursorHover(false));

        twoColGrid.appendChild(card);
      });

      projectsStack.appendChild(twoColGrid);
    }
  }

  function filterProjects(categoryId) {
    // Sync active state in filter button group
    document.querySelectorAll('.filter-btn').forEach(b => {
      if (b.dataset.category === categoryId) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    if (categoryId === 'all') {
      renderProjects(data.projects);
    } else {
      const filtered = data.projects.filter(p => 
        p.category === categoryId || p.secondaryCategory === categoryId
      );
      renderProjects(filtered);
    }
  }

  window.filterProjects = filterProjects;

  // --- 6. CASE STUDY MODAL MANAGEMENT ---
  const modalOverlay = document.getElementById('case-study-modal');
  const modalBody = document.getElementById('modal-case-study-body');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function openCaseStudyModal(projectId) {
    const proj = data.projects.find(p => p.id === projectId);
    if (!proj || !modalBody || !modalOverlay) return;

    let caseStudyHTML = '';
    const cs = proj.caseStudy;

    if (cs.type === 'website') {
      caseStudyHTML = `
        <div class="pipeline-step-box">
          <div class="pipeline-step-header">01 — THE IDEA</div>
          <div class="pipeline-step-body">${cs.idea}</div>
        </div>
        <div class="pipeline-step-box">
          <div class="pipeline-step-header">02 — RESEARCH</div>
          <div class="pipeline-step-body">${cs.research}</div>
        </div>
        <div class="pipeline-step-box">
          <div class="pipeline-step-header">03 — DESIGN</div>
          <div class="pipeline-step-body">${cs.design}</div>
        </div>
        <div class="pipeline-step-box">
          <div class="pipeline-step-header">04 — DEVELOPMENT</div>
          <div class="pipeline-step-body">${cs.development}</div>
        </div>
        <div class="pipeline-step-box">
          <div class="pipeline-step-header">05 — RESULT</div>
          <div class="pipeline-step-body">${cs.result}</div>
        </div>
      `;
    } else if (cs.type === '3d') {
      caseStudyHTML = `
        <div class="pipeline-step-box">
          <div class="pipeline-step-header">PHASE 1 — CONCEPT & DIRECTION</div>
          <div class="pipeline-step-body">${cs.concept}</div>
        </div>
        <div class="pipeline-step-box">
          <div class="pipeline-step-header">PHASE 2 — BLOCKOUT & PROPORTIONS</div>
          <div class="pipeline-step-body">${cs.blockout}</div>
        </div>
        <div class="pipeline-step-box">
          <div class="pipeline-step-header">PHASE 3 — DETAILED MODEL & TOPOLOGY</div>
          <div class="pipeline-step-body">${cs.model}</div>
        </div>
        <div class="pipeline-step-box">
          <div class="pipeline-step-header">PHASE 4 — PBR TEXTURING & MATERIALS</div>
          <div class="pipeline-step-body">${cs.texture}</div>
        </div>
        <div class="pipeline-step-box">
          <div class="pipeline-step-header">PHASE 5 — LIGHTING & CINEMATIC RENDERING</div>
          <div class="pipeline-step-body">${cs.light}</div>
        </div>
        <div class="pipeline-step-box">
          <div class="pipeline-step-header">PHASE 6 — FINAL COMPOSITING & POLISH</div>
          <div class="pipeline-step-body">${cs.final}</div>
        </div>
      `;
    } else {
      caseStudyHTML = `
        <div class="pipeline-step-box">
          <div class="pipeline-step-header">STAGE 1 — STRATEGIC OBJECTIVE</div>
          <div class="pipeline-step-body">${cs.idea}</div>
        </div>
        <div class="pipeline-step-box">
          <div class="pipeline-step-header">STAGE 2 — VISUAL DESIGN SYSTEM</div>
          <div class="pipeline-step-body">${cs.design}</div>
        </div>
        <div class="pipeline-step-box">
          <div class="pipeline-step-header">STAGE 3 — CONTENT CREATION</div>
          <div class="pipeline-step-body">${cs.content}</div>
        </div>
        <div class="pipeline-step-box">
          <div class="pipeline-step-header">STAGE 4 — CAMPAIGN EXECUTION</div>
          <div class="pipeline-step-body">${cs.campaign}</div>
        </div>
      `;
    }

    modalBody.innerHTML = `
      <img src="${proj.desktopPreview || proj.heroImage}" alt="${proj.title}" class="case-study-hero-img">
      
      <div style="display: flex; gap: 8px; margin-bottom: 12px;">
        <span class="badge-tag">${proj.type}</span>
        <span class="badge-tag" style="color: var(--accent-violet); border-color: rgba(139, 92, 246, 0.4);">${proj.year}</span>
      </div>

      <h2 class="case-study-title">${proj.title}</h2>
      <p style="font-size: 1.1rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 24px;">${proj.summary}</p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 30px; padding: 20px; border-radius: var(--radius-md); background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle);">
        <div>
          <div class="meta-item-label">MY ROLE</div>
          <div style="font-weight: 700; color: var(--text-white); margin-top: 4px;">${proj.myRole}</div>
        </div>
        <div>
          <div class="meta-item-label">CLIENT / CONTEXT</div>
          <div style="font-weight: 700; color: var(--text-white); margin-top: 4px;">${proj.client}</div>
        </div>
        <div>
          <div class="meta-item-label">CORE TOOLS</div>
          <div style="font-weight: 700; color: var(--accent-cyan); margin-top: 4px;">${proj.technologies.slice(0, 3).join(', ')}</div>
        </div>
      </div>

      <div class="section-label">PROCESS BREAKDOWN</div>
      <div class="case-study-pipeline-grid">
        ${caseStudyHTML}
      </div>

      <div style="margin-top: 30px; padding: 24px; border-radius: var(--radius-md); background: rgba(0, 240, 255, 0.05); border: 1px solid rgba(0, 240, 255, 0.2);">
        <div class="meta-item-label" style="color: var(--accent-cyan); margin-bottom: 6px;">PROJECT OUTCOME</div>
        <p style="font-size: 1rem; color: var(--text-white); line-height: 1.6;">${proj.outcome}</p>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Expose globally for inline buttons and external triggers
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

  // --- 7. INTERACTIVE DESIGN × CODE SPLIT-SCREEN CONTROLLER ---
  const splitContainer = document.getElementById('split-screen-container');
  const codeSide = document.getElementById('split-side-code');
  const splitHandle = document.getElementById('split-slider-handle');

  if (splitContainer && codeSide && splitHandle) {
    let isDragging = false;

    function updateSplitPosition(clientX) {
      const rect = splitContainer.getBoundingClientRect();
      let offsetX = clientX - rect.left;
      if (offsetX < 40) offsetX = 40;
      if (offsetX > rect.width - 40) offsetX = rect.width - 40;

      const percent = (offsetX / rect.width) * 100;
      splitHandle.style.left = `${percent}%`;
      codeSide.style.width = `${100 - percent}%`;
    }

    splitHandle.addEventListener('mousedown', () => {
      isDragging = true;
      setCursorHover(true, "DRAGGING");
    });

    window.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        setCursorHover(false);
      }
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      updateSplitPosition(e.clientX);
    });

    // Touch support for split slider
    splitHandle.addEventListener('touchstart', () => { isDragging = true; }, { passive: true });
    window.addEventListener('touchend', () => { isDragging = false; });
    window.addEventListener('touchmove', (e) => {
      if (!isDragging || e.touches.length === 0) return;
      updateSplitPosition(e.touches[0].clientX);
    }, { passive: true });

    splitHandle.addEventListener('mouseenter', () => setCursorHover(true, "SLIDE"));
    splitHandle.addEventListener('mouseleave', () => {
      if (!isDragging) setCursorHover(false);
    });

    // 3-Stage Switcher Controls
    const stageBtns = document.querySelectorAll('.stage-btn');
    const liveLayer = document.getElementById('split-live-layer');
    const splitHint = document.getElementById('split-mode-hint');

    stageBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        stageBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const stage = btn.dataset.stage;

        if (stage === 'design') {
          liveLayer?.classList.remove('active');
          splitHandle.style.left = '98%';
          codeSide.style.width = '2%';
          if (splitHint) splitHint.textContent = '100% DESIGN VIEW';
          window.playSynthTone(500, 'sine', 0.12);
        } else if (stage === 'code') {
          liveLayer?.classList.remove('active');
          splitHandle.style.left = '4%';
          codeSide.style.width = '96%';
          if (splitHint) splitHint.textContent = '100% PRODUCTION CODE';
          window.playSynthTone(600, 'sine', 0.12);
        } else if (stage === 'split') {
          liveLayer?.classList.remove('active');
          splitHandle.style.left = '50%';
          codeSide.style.width = '50%';
          if (splitHint) splitHint.textContent = 'DRAG TO REVEAL';
          window.playSynthTone(550, 'sine', 0.12);
        } else if (stage === 'live') {
          liveLayer?.classList.add('active');
          if (splitHint) splitHint.textContent = 'LIVE INTERACTIVE PREVIEW';
          window.playSynthTone(750, 'triangle', 0.18);
        }
      });
    });
  }

  // --- 8. MY TOOLBOX SECTION POPULATION ---
  const toolboxGrid = document.getElementById('toolbox-categories-grid');
  if (toolboxGrid && data.toolbox) {
    toolboxGrid.innerHTML = '';
    data.toolbox.categories.forEach(cat => {
      const card = document.createElement('div');
      card.className = 'toolbox-card';

      card.innerHTML = `
        <div class="toolbox-card-header">
          <div class="toolbox-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          </div>
          <h3 class="toolbox-cat-name">${cat.name}</h3>
        </div>
        <p class="toolbox-cat-desc">${cat.description}</p>

        <div class="tools-items-list">
          ${cat.tools.map(tool => `
            <div class="tool-item">
              <div class="tool-name-row">
                <span class="tool-name">${tool.name}</span>
                <span class="tool-level-badge">${tool.level}</span>
              </div>
              <p class="tool-desc">${tool.desc}</p>
            </div>
          `).join('')}
        </div>
      `;

      card.addEventListener('mouseenter', () => setCursorHover(true, "SKILL"));
      card.addEventListener('mouseleave', () => setCursorHover(false));

      toolboxGrid.appendChild(card);
    });
  }

  // --- 9. CREATIVE PHILOSOPHY POPULATION ---
  const philosophyGrid = document.getElementById('philosophy-grid');
  if (philosophyGrid && data.philosophy) {
    philosophyGrid.innerHTML = '';
    data.philosophy.forEach(item => {
      const card = document.createElement('div');
      card.className = 'philosophy-card';
      card.innerHTML = `
        <div class="philosophy-pillar">${item.pillar}</div>
        <h3 class="philosophy-statement">${item.statement}</h3>
        <p class="philosophy-detail">${item.detail}</p>
      `;
      card.addEventListener('mouseenter', () => setCursorHover(true, "VALUES"));
      card.addEventListener('mouseleave', () => setCursorHover(false));
      philosophyGrid.appendChild(card);
    });
  }

  // --- 10. DIGITAL LAB EXPERIMENTS (MUFLIH LAB) ---
  const labGrid = document.getElementById('lab-experiments-grid');
  if (labGrid && data.lab) {
    labGrid.innerHTML = '';
    data.lab.forEach((exp, idx) => {
      const card = document.createElement('div');
      card.className = 'lab-card';
      card.innerHTML = `
        <div class="lab-interactive-canvas-box" id="lab-canvas-box-${idx}">
          <canvas class="lab-canvas-element" id="lab-canvas-${idx}"></canvas>
        </div>
        <span class="lab-tag">${exp.tag}</span>
        <h3 class="lab-card-title">${exp.title}</h3>
        <p class="lab-card-desc">${exp.description}</p>
        <button class="lab-action-btn" data-action="${exp.demoAction}">
          <span>INTERACT</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
        </button>
      `;

      const btn = card.querySelector('.lab-action-btn');
      btn.addEventListener('click', () => {
        window.playSynthTone(750, 'triangle', 0.2);
        showToast(`Experiment "${exp.title}" engaged.`);
      });

      card.addEventListener('mouseenter', () => setCursorHover(true, "PLAY"));
      card.addEventListener('mouseleave', () => setCursorHover(false));

      labGrid.appendChild(card);

      // Mini dynamic canvas render for each lab card
      setTimeout(() => initLabCanvas(idx, exp.demoAction), 100);
    });
  }

  function initLabCanvas(index, actionType) {
    const c = document.getElementById(`lab-canvas-${index}`);
    if (!c) return;
    const ctx = c.getContext('2d');
    c.width = c.parentElement.clientWidth;
    c.height = c.parentElement.clientHeight;

    let tick = 0;
    function draw() {
      ctx.clearRect(0, 0, c.width, c.height);
      tick += 0.04;

      if (actionType === 'particleCore') {
        // Pulsing particle rings
        for (let i = 0; i < 4; i++) {
          ctx.beginPath();
          const r = 25 + i * 14 + Math.sin(tick + i) * 6;
          ctx.arc(c.width / 2, c.height / 2, r, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 240, 255, ${0.15 + (i * 0.1)})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      } else if (actionType === 'splitSlider') {
        // Scanning waveform
        ctx.beginPath();
        for (let x = 0; x < c.width; x += 4) {
          const y = c.height / 2 + Math.sin(x * 0.05 + tick) * 22;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = '#8b5cf6';
        ctx.lineWidth = 2;
        ctx.stroke();
      } else if (actionType === 'kineticType') {
        // Floating letters grid
        ctx.fillStyle = 'rgba(0, 240, 255, 0.7)';
        ctx.font = '12px JetBrains Mono';
        const chars = ["M", "U", "F", "L", "I", "H", "."];
        chars.forEach((ch, ci) => {
          const x = 30 + ci * 28 + Math.cos(tick + ci) * 8;
          const y = c.height / 2 + Math.sin(tick * 1.5 + ci) * 14;
          ctx.fillText(ch, x, y);
        });
      } else {
        // Specular glass plane
        ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
        ctx.fillRect(20, 20, c.width - 40, c.height - 40);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.strokeRect(20, 20, c.width - 40, c.height - 40);
      }

      requestAnimationFrame(draw);
    }
    draw();
  }

  // --- 11. ABOUT ME POPULATION ---
  const aboutBio = document.getElementById('about-bio-paragraphs');
  const aboutHighlights = document.getElementById('about-highlights-grid');
  if (aboutBio && data.about) {
    aboutBio.innerHTML = data.about.paragraphs.map(p => `<p>${p}</p>`).join('');
  }
  if (aboutHighlights && data.about.highlights) {
    aboutHighlights.innerHTML = data.about.highlights.map(h => `
      <div class="about-highlight-box">
        <div class="highlight-label">${h.label}</div>
        <div class="highlight-val">${h.value}</div>
      </div>
    `).join('');
  }

  // --- 12. EXPERIENCE & EDUCATION TIMELINES ---
  const expContainer = document.getElementById('experience-timeline-list');
  const eduContainer = document.getElementById('education-timeline-list');

  if (expContainer && data.experience) {
    expContainer.innerHTML = data.experience.map(item => `
      <div class="timeline-item">
        <div class="timeline-card">
          <div class="timeline-period">${item.period}</div>
          <h4 class="timeline-card-title">${item.title}</h4>
          <div class="timeline-institution">${item.company} · ${item.industry}</div>
          <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 12px;">${item.description}</p>
          <ul class="timeline-bullets">
            ${item.highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }

  if (eduContainer && data.education) {
    eduContainer.innerHTML = data.education.map(item => `
      <div class="timeline-item">
        <div class="timeline-card">
          <div class="timeline-period">${item.timeline}</div>
          <h4 class="timeline-card-title">${item.degree}</h4>
          <div class="timeline-institution">${item.institution}</div>
          <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 10px;">${item.focus}</p>
          <span class="badge-tag" style="font-size: 0.68rem;">${item.evolutionStep}</span>
        </div>
      </div>
    `).join('');
  }

  // Evolution bar nodes
  const evolutionBar = document.getElementById('evolution-nodes-bar');
  if (evolutionBar && data.evolutionJourney) {
    evolutionBar.innerHTML = data.evolutionJourney.map((ej, i) => `
      <div class="evolution-node">
        <span class="node-title">${ej.step}</span>
        <span class="node-desc">${ej.desc}</span>
      </div>
      ${i < data.evolutionJourney.length - 1 ? `<div class="evolution-connector">→</div>` : ''}
    `).join('');
  }

  // --- 13. STUDIO SERVICES MENU POPULATION (BUSINESS, DIGITAL, VISUAL) ---
  const servicesContainer = document.getElementById('services-grouped-grid');
  if (servicesContainer && data.services?.groups) {
    servicesContainer.innerHTML = data.services.groups.map(grp => `
      <div class="service-pillar-box">
        <div class="service-pillar-header">
          <span class="service-pillar-badge">${grp.badge}</span>
          <h3 class="service-pillar-title">${grp.category}</h3>
        </div>
        <div class="service-pillar-items">
          ${grp.items.map(item => `
            <div class="service-pillar-item">
              <div class="service-item-title">${item.title}</div>
              <div class="service-item-desc">${item.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // --- 13B. BUSINESS ROLE SECTION (PKMCO) POPULATION ---
  const pkmcoFocusGrid = document.getElementById('pkmco-focus-grid');
  if (pkmcoFocusGrid && data.businessRole?.focusAreas) {
    pkmcoFocusGrid.innerHTML = data.businessRole.focusAreas.map(fa => `
      <div class="pkmco-focus-card">
        <h4 class="focus-card-title">${fa.name}</h4>
        <p class="focus-card-desc">${fa.desc}</p>
      </div>
    `).join('');
  }

  // --- 13C. DUAL IDENTITY: BUSINESS MIND × CREATIVE SOUL ---
  const businessItemsEl = document.getElementById('dual-business-items');
  const creativeItemsEl = document.getElementById('dual-creative-items');
  if (businessItemsEl && data.dualIdentity?.businessPillar) {
    businessItemsEl.innerHTML = data.dualIdentity.businessPillar.items.map(item => `
      <div class="world-item-row">
        <span class="world-item-dot"></span>
        <span>${item}</span>
      </div>
    `).join('');
  }
  if (creativeItemsEl && data.dualIdentity?.creativePillar) {
    creativeItemsEl.innerHTML = data.dualIdentity.creativePillar.items.map(item => `
      <div class="world-item-row">
        <span class="world-item-dot"></span>
        <span>${item}</span>
      </div>
    `).join('');
  }

  // --- 14. SOCIAL BUTTONS & CONTACT FORM ---
  const socialGrid = document.getElementById('social-links-grid');
  if (socialGrid && data.contact.socials) {
    socialGrid.innerHTML = data.contact.socials.map(s => `
      <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-btn">
        <span>${s.name}</span>
      </a>
    `).join('');
  }

  const contactForm = document.getElementById('portfolio-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name')?.value || 'Client';
      const email = document.getElementById('form-email')?.value || '';
      const message = document.getElementById('form-message')?.value || '';

      window.playSynthTone(880, 'sine', 0.25);
      showToast(`Thank you, ${name}! Generating direct inquiry...`);

      // Construct mailto link
      setTimeout(() => {
        const mailtoUrl = `mailto:${data.contact.email}?subject=${encodeURIComponent(`Project Inquiry from ${name}`)}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;
        window.location.href = mailtoUrl;
      }, 700);

      contactForm.reset();
    });
  }

  // --- 15. MOBILE MENU DRAWER CONTROLLER ---
  const mobileTrigger = document.getElementById('mobile-menu-trigger');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');

  if (mobileTrigger && mobileDrawer) {
    mobileTrigger.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });

    mobileDrawer.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // Navbar scroll background toggle
  const navbar = document.getElementById('main-navbar');
  window.addEventListener('scroll', () => {
    if (!navbar) return;
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // --- 16. CURSOR HOVER BINDINGS FOR EDITORIAL ELEMENTS ---
  function initEditorialCursorHooks() {
    document.querySelectorAll('a, button, .discipline-row, .toolbox-pill-item, .pkmco-focus-item').forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (el.classList.contains('discipline-row')) {
          setCursorHover(true, "VIEW");
        } else if (el.classList.contains('toolbox-pill-item')) {
          setCursorHover(true, "TECH");
        } else if (el.classList.contains('pkmco-focus-item')) {
          setCursorHover(true, "PKMCO");
        } else if (el.tagName === 'A' && el.target === '_blank') {
          setCursorHover(true, "VISIT");
        } else if (el.classList.contains('btn-pill-primary')) {
          setCursorHover(true, "OPEN");
        } else if (!el.classList.contains('filter-btn') && !el.classList.contains('stage-btn')) {
          setCursorHover(true, "CLICK");
        }
      });
      el.addEventListener('mouseleave', () => setCursorHover(false));
    });
  }

  // --- 17. INITIAL RENDER ---
  renderCategoryFilters();
  renderProjects(data.projects);
  initEditorialCursorHooks();

  console.log("Ahamed Muflih Portfolio Engine Loaded Successfully.");
});
