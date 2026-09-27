/**
 * AHAMED MUFLIH — HERO 3D INTERACTIVE CANVAS
 * Three.js 3D Geometric Crystal Core + Constellation Field
 * With zero-dependency 2D Canvas fallback for resilience & 60FPS mobile throttling
 */

(function () {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const isMobile = window.innerWidth < 768;
  let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;

  window.addEventListener('mousemove', (e) => {
    mouse.targetX = (e.clientX / windowWidth) * 2 - 1;
    mouse.targetY = -(e.clientY / windowHeight) * 2 + 1;
  });

  window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      mouse.targetX = (e.touches[0].clientX / windowWidth) * 2 - 1;
      mouse.targetY = -(e.touches[0].clientY / windowHeight) * 2 + 1;
    }
  }, { passive: true });

  // Check if THREE is loaded
  if (typeof THREE !== 'undefined') {
    initThreeJS();
  } else {
    initCanvasFallback();
  }

  function initThreeJS() {
    try {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, windowWidth / windowHeight, 0.1, 1000);
      camera.position.z = isMobile ? 32 : 24;

      const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: !isMobile,
        powerPreference: "high-performance"
      });
      renderer.setSize(windowWidth, windowHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));

      // Central Geometric Core (Icosahedron + Wireframe cage)
      const coreGroup = new THREE.Group();

      // Outer Wireframe Crystal
      const geomOuter = new THREE.IcosahedronGeometry(isMobile ? 5 : 7, 1);
      const wireMat = new THREE.MeshBasicMaterial({
        color: 0x8b5cf6,
        wireframe: true,
        transparent: true,
        opacity: 0.35
      });
      const wireMesh = new THREE.Mesh(geomOuter, wireMat);
      coreGroup.add(wireMesh);

      // Inner Solid Faceted Core
      const geomInner = new THREE.IcosahedronGeometry(isMobile ? 3.6 : 4.8, 0);
      const innerMat = new THREE.MeshBasicMaterial({
        color: 0x7c3aed,
        wireframe: true,
        transparent: true,
        opacity: 0.55
      });
      const innerMesh = new THREE.Mesh(geomInner, innerMat);
      coreGroup.add(innerMesh);

      // Floating Coordinate Rings
      const ringGeom = new THREE.RingGeometry(8, 8.08, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xa78bfa,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.25
      });
      const ringMesh = new THREE.Mesh(ringGeom, ringMat);
      ringMesh.rotation.x = Math.PI / 2.3;
      coreGroup.add(ringMesh);

      scene.add(coreGroup);

      // Cyber Constellation Particles
      const particleCount = isMobile ? 180 : 420;
      const particleGeom = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const scales = new Float32Array(particleCount);

      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 50;
        positions[i + 1] = (Math.random() - 0.5) * 50;
        positions[i + 2] = (Math.random() - 0.5) * 35;
        scales[i / 3] = Math.random() * 2 + 1;
      }

      particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      // Particle Material
      const particleMat = new THREE.PointsMaterial({
        color: 0xc4b5fd,
        size: isMobile ? 0.25 : 0.35,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending
      });

      const particleSystem = new THREE.Points(particleGeom, particleMat);
      scene.add(particleSystem);

      // Animation Loop
      let clock = new THREE.Clock();

      function animate() {
        requestAnimationFrame(animate);

        const delta = clock.getDelta();
        const elapsedTime = clock.getElapsedTime();

        // Smooth mouse damping
        mouse.x += (mouse.targetX - mouse.x) * 0.05;
        mouse.y += (mouse.targetY - mouse.y) * 0.05;

        // Rotate Core
        wireMesh.rotation.x = elapsedTime * 0.12 + mouse.y * 0.4;
        wireMesh.rotation.y = elapsedTime * 0.18 + mouse.x * 0.6;

        innerMesh.rotation.x = -elapsedTime * 0.2 - mouse.y * 0.3;
        innerMesh.rotation.y = -elapsedTime * 0.25 - mouse.x * 0.5;

        ringMesh.rotation.z = elapsedTime * 0.1;

        // Particle field slow drift
        particleSystem.rotation.y = elapsedTime * 0.03 + mouse.x * 0.1;
        particleSystem.rotation.x = mouse.y * 0.05;

        // Camera gentle parallax
        camera.position.x = mouse.x * 1.5;
        camera.position.y = mouse.y * 1.2;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
      }

      animate();

      // Resize handler
      window.addEventListener('resize', () => {
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
        camera.aspect = windowWidth / windowHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(windowWidth, windowHeight);
      });
    } catch (e) {
      console.warn("Three.js setup encountered an issue, falling back to 2D canvas:", e);
      initCanvasFallback();
    }
  }

  // 2D High Performance Canvas Fallback
  function initCanvasFallback() {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const count = isMobile ? 35 : 75;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.6 + 0.2
      });
    }

    function render2D() {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.15 * (1 - dist / 130)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw points
      for (let i = 0; i < count; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${p.alpha})`;
        ctx.fill();
      }

      requestAnimationFrame(render2D);
    }

    render2D();

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
  }
})();
