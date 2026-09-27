/**
 * AHAMED MUFLIH — SIGNATURE INTERACTION MOTIF
 * Morphs "MUFLIH." -> [3D, WEB, VFX, DESIGN, MARKETING] -> "CREATE."
 */

(function () {
  const container = document.getElementById('signature-morph-stage');
  const wordEl = document.getElementById('signature-word');
  const tagsContainer = document.getElementById('signature-breakdown-tags');
  if (!container || !wordEl) return;

  const data = window.PORTFOLIO_DATA?.signatureInteraction || {
    initial: "MUFLIH.",
    breakdown: ["3D", "WEB", "VFX", "DESIGN", "MARKETING"],
    reconstructed: "CREATE."
  };

  let currentState = 0; // 0: MUFLIH., 1: BREAKDOWN (tags pulse), 2: CREATE.
  let isAnimating = false;

  function renderWord(text, className = "") {
    wordEl.innerHTML = "";
    text.split("").forEach((char, idx) => {
      const span = document.createElement("span");
      span.className = `char ${className}`;
      span.textContent = char;
      span.style.transitionDelay = `${idx * 40}ms`;
      wordEl.appendChild(span);
    });
  }

  // Initial render
  renderWord(data.initial);

  // Render tags
  if (tagsContainer) {
    tagsContainer.innerHTML = "";
    data.breakdown.forEach((item, index) => {
      const tag = document.createElement("span");
      tag.className = "signature-tag";
      tag.textContent = item;
      tag.dataset.index = index;
      tag.addEventListener("click", (e) => {
        e.stopPropagation();
        triggerMorph();
      });
      tagsContainer.appendChild(tag);
    });
  }

  function playSoundIfEnabled(freq = 440, type = 'sine') {
    if (window.soundFxEnabled && window.playSynthTone) {
      window.playSynthTone(freq, type, 0.15);
    }
  }

  function triggerMorph() {
    if (isAnimating) return;
    isAnimating = true;

    if (currentState === 0) {
      // Step 1: Disperse MUFLIH.
      playSoundIfEnabled(320, 'triangle');
      const chars = wordEl.querySelectorAll('.char');
      chars.forEach((c, idx) => {
        const x = (idx - 3) * 35;
        const y = (idx % 2 === 0 ? -1 : 1) * 25;
        const rot = (Math.random() - 0.5) * 60;
        c.style.transform = `translate(${x}px, ${y}px) rotate(${rot}deg) scale(0.6)`;
        c.style.opacity = '0.2';
        c.style.filter = 'blur(4px)';
      });

      // Highlight tags sequentially
      const tags = tagsContainer ? tagsContainer.querySelectorAll('.signature-tag') : [];
      tags.forEach((tag, idx) => {
        setTimeout(() => {
          tag.style.borderColor = 'var(--accent-cyan)';
          tag.style.color = '#000';
          tag.style.background = 'var(--accent-cyan)';
          tag.style.boxShadow = '0 0 15px var(--accent-cyan-glow)';
          playSoundIfEnabled(400 + idx * 80, 'sine');
          setTimeout(() => {
            tag.style.borderColor = '';
            tag.style.color = '';
            tag.style.background = '';
            tag.style.boxShadow = '';
          }, 450);
        }, idx * 120);
      });

      // Step 2: Reconstruct into CREATE.
      setTimeout(() => {
        renderWord(data.reconstructed, "reconstructed-char");
        playSoundIfEnabled(720, 'sine');
        const newChars = wordEl.querySelectorAll('.char');
        newChars.forEach((c) => {
          c.style.color = 'var(--accent-cyan)';
          c.style.textShadow = '0 0 20px var(--accent-cyan-glow)';
        });
        currentState = 2;
        isAnimating = false;
      }, 900);

    } else {
      // Step 3: Return to MUFLIH.
      playSoundIfEnabled(520, 'sine');
      const chars = wordEl.querySelectorAll('.char');
      chars.forEach((c) => {
        c.style.opacity = '0';
        c.style.transform = 'scale(0.8)';
      });

      setTimeout(() => {
        renderWord(data.initial);
        currentState = 0;
        isAnimating = false;
      }, 400);
    }
  }

  container.addEventListener('click', triggerMorph);

  // Auto trigger once when scrolled into view
  let hasAutoTriggered = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAutoTriggered) {
        hasAutoTriggered = true;
        setTimeout(() => {
          triggerMorph();
          setTimeout(() => {
            triggerMorph();
          }, 3200);
        }, 600);
      }
    });
  }, { threshold: 0.6 });

  observer.observe(container);

  window.triggerSignatureMorph = triggerMorph;
})();
