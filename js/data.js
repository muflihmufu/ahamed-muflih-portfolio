/**
 * AHAMED MUFLIH - PORTFOLIO CONTENT SYSTEM
 * ========================================================
 * Centralized Editable Data File
 * 
 * Edit this single file to update all your portfolio content:
 * - Bio, contact, and social links
 * - Business Role (Director at PKMCO Constructions Private Limited)
 * - Projects, case studies, images, and videos
 * - Toolbox (skills) & proficiencies
 * - Experience and education timeline
 * - Services and experimental lab items
 * ========================================================
 */

const PORTFOLIO_DATA = {
  // Brand & Identity
  brand: {
    fullName: "AHAMED MUFLIH",
    displayName: "MUFLIH.",
    shortName: "Muflih",
    primaryRole: "DIRECTOR · CREATIVE DESIGNER · DIGITAL CREATIVE",
    tagline: "DESIGN. BUILD. CREATE.",
    subtagline: "Web · 3D · Animation · VFX · Digital",
    coreIdentities: [
      "DIRECTOR",
      "CREATIVE DESIGNER",
      "WEB DESIGNER",
      "WEB DEVELOPER",
      "3D ARTIST",
      "ANIMATOR",
      "VFX ARTIST",
      "GRAPHIC DESIGNER",
      "DIGITAL CREATIVE",
      "MARKETING CREATIVE"
    ],
    rotatingSpecialties: [
      "DIRECTOR",
      "WEB DESIGNER",
      "WEB DEVELOPER",
      "3D ARTIST",
      "ANIMATOR",
      "VFX ARTIST",
      "DIGITAL CREATIVE"
    ],
    heroIntro: "A multidisciplinary creative working across business, design, technology and digital experiences.",
    heroActionText: "DESIGN. BUILD. CREATE.",
    brandMantra: "BUSINESS MIND. CREATIVE SOUL.",
    mantraSubtext: "Where business thinking meets creative execution.",
    location: "Bangalore, India",
    statusBadge: "Director at PKMCO Constructions · Creative Designer",
    portraitImage: "assets/muflih-portrait.jpg"
  },

  // Business Role (PKMCO Constructions Private Limited)
  businessRole: {
    title: "MY BUSINESS ROLE",
    name: "AHAMED MUFLIH",
    role: "Director",
    company: "PKMCO CONSTRUCTIONS PRIVATE LIMITED",
    websiteUrl: "https://www.pkmgroup.co/pkm-construction",
    buttonText: "VIEW PKMCO",
    summary: "PKMCO Constructions Private Limited is a specialized marine construction company with extensive experience in fishery harbour and coastal infrastructure development.",
    focusAreas: [
      { name: "Marine Infrastructure", desc: "Constructing heavy-duty maritime installations and deep-water structures." },
      { name: "Fishery Harbour Development", desc: "Engineering comprehensive harbour basins, landing quays, and auction halls." },
      { name: "Breakwater Construction", desc: "High-stability coastal wave protection and rubblemound armour structures." },
      { name: "Wharf Construction", desc: "Heavy vessel berthing facilities and reinforced load-bearing concrete decks." },
      { name: "Quay Walls", desc: "Gravity, sheet-pile, and diaphragm walls for active port operations." },
      { name: "Coastal Infrastructure", desc: "Shoreline stabilization, erosion countermeasures, and marine gateway projects." }
    ]
  },

  // Business + Creative Dual Identity
  dualIdentity: {
    heading: "BUSINESS MIND. CREATIVE SOUL.",
    subheading: "Where business thinking meets creative execution.",
    businessPillar: {
      title: "BUSINESS",
      badge: "LEADERSHIP & DIRECTION",
      items: [
        "Director",
        "Leadership",
        "Business Strategy",
        "Creative Direction",
        "Digital Thinking",
        "Brand Strategy"
      ]
    },
    creativePillar: {
      title: "CREATIVE",
      badge: "DESIGN & TECHNOLOGY",
      items: [
        "Web Design",
        "Web Development",
        "3D Art",
        "Animation",
        "VFX & Motion",
        "Graphic Design",
        "Digital Marketing"
      ]
    }
  },

  // Contact & Social Links
  contact: {
    email: "ahamedmuflih.creatives@gmail.com",
    location: "Bangalore, India",
    availability: "Open to Selected Executive & Creative Collaborations",
    pkmcoUrl: "https://www.pkmgroup.co/pkm-construction",
    socials: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ahamed-muflih",
        handle: "ahamed-muflih",
        icon: "linkedin"
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/muflih.creatives",
        handle: "@muflih.creatives",
        icon: "instagram"
      },
      {
        name: "Behance",
        url: "https://www.behance.net/ahamedmuflih",
        handle: "ahamedmuflih",
        icon: "behance"
      },
      {
        name: "ArtStation",
        url: "https://www.artstation.com/ahamedmuflih",
        handle: "ahamedmuflih",
        icon: "artstation"
      },
      {
        name: "GitHub",
        url: "https://github.com/muflihmufu",
        handle: "muflihmufu",
        icon: "github"
      }
    ],
    resumeUrl: "#",
    showreelUrl: "#"
  },

  // About Me Section
  about: {
    heading: "A CREATIVE MIND WITH MANY MEDIUMS",
    paragraphs: [
      "I'm Ahamed Muflih, a multidisciplinary creative and Director at PKMCO Constructions Private Limited, with a background in Computer Animation and a strong interest in web design, web development, visual design, animation, VFX and digital experiences.",
      "My interests sit at the intersection of creativity, technology and business. I enjoy designing websites, building digital experiences, creating visual content and exploring how creative thinking can support brands and businesses.",
      "Coming from a foundation in 3D, animation, and real-time computer graphics gave me an intuitive grasp of spatial layout, visual pacing, and interaction fidelity—qualities I direct toward high-impact web design, brand systems, and strategic enterprise initiatives."
    ],
    highlights: [
      { label: "Executive Role", value: "Director, PKMCO Constructions" },
      { label: "Core Domains", value: "Business × Design × Code × 3D" },
      { label: "Education", value: "B.Sc Animation + MSc Game Art" },
      { label: "Positioning", value: "Business Mind. Creative Soul." }
    ]
  },

  // Creative Philosophy
  philosophy: [
    {
      pillar: "DESIGN",
      statement: "Make it beautiful.",
      detail: "Visual elegance, balanced typography, and deliberate aesthetics that capture attention immediately."
    },
    {
      pillar: "EXPERIENCE",
      statement: "Make it useful.",
      detail: "Intuitive workflows, responsive interfaces, and human-centric empathy across every digital touchpoint."
    },
    {
      pillar: "TECHNOLOGY",
      statement: "Make it work.",
      detail: "Clean code, fluid performance, optimized 3D pipelines, and resilient modern web architecture."
    },
    {
      pillar: "MARKETING",
      statement: "Make it matter.",
      detail: "Strategic positioning, visual communication, and campaigns that provoke emotion and measurable action."
    }
  ],

  // Signature Interaction Motif
  signatureInteraction: {
    initial: "MUFLIH.",
    breakdown: ["3D", "WEB", "VFX", "DESIGN", "MARKETING"],
    reconstructed: "CREATE."
  },

  // Toolbox / Creative Stack
  toolbox: {
    title: "MY TOOLBOX",
    subtitle: "A multidisciplinary toolkit bridging aesthetic visual arts, modern frontend engineering, and business direction.",
    categories: [
      {
        id: "direction",
        name: "CREATIVE DIRECTION & BUSINESS",
        icon: "compass",
        description: "Concept development, executive leadership, brand thinking, and digital experience strategy.",
        tools: [
          { name: "Creative Direction", level: "Director", desc: "Guiding end-to-end creative vision, tone of voice, and brand synergy" },
          { name: "Digital Strategy", level: "Advanced", desc: "Aligning digital presence with real-world business objectives" },
          { name: "Brand Thinking", level: "Advanced", desc: "Translating corporate value into modern visual identity systems" },
          { name: "Content Architecture", level: "Advanced", desc: "Structuring multi-channel digital narrative pipelines" }
        ]
      },
      {
        id: "design",
        name: "DESIGN & UI/UX",
        icon: "palette",
        description: "Visual identity, user interfaces, layout systems, and vector artwork.",
        tools: [
          { name: "Photoshop", level: "Advanced", desc: "Photo manipulation, digital matte painting, concept composites" },
          { name: "Illustrator", level: "Proficient", desc: "Vector graphics, branding systems, icons, logo design" },
          { name: "Figma", level: "Advanced", desc: "UI/UX wireframes, design systems, interactive prototypes, auto-layout" },
          { name: "UI/UX Architecture", level: "Proficient", desc: "User journey mapping, wireframing, typography & hierarchy" }
        ]
      },
      {
        id: "video",
        name: "VIDEO & MOTION",
        icon: "video",
        description: "Dynamic motion graphics, video editing, pacing, and sound design.",
        tools: [
          { name: "Premiere Pro", level: "Advanced", desc: "Commercial video editing, color correction, pacing, multi-cam" },
          { name: "After Effects", level: "Advanced", desc: "Motion graphics, kinetic typography, visual effects, title sequences" },
          { name: "Compositing", level: "Proficient", desc: "Green screen keying, rotoscoping, camera tracking, render passes" },
          { name: "Sound Design", level: "Intermediate", desc: "Audio synchronization, atmospheric sound beds, mixing" }
        ]
      },
      {
        id: "3d",
        name: "3D & GAME ART",
        icon: "box",
        description: "3D modelling, texturing, UV mapping, lighting, rendering, animation, and real-time game art.",
        tools: [
          { name: "Maya", level: "Advanced", desc: "Polygon modeling, rigging fundamentals, UV unwrapping, camera animation" },
          { name: "3ds Max", level: "Proficient", desc: "Architectural visualization, environment modeling, render setup" },
          { name: "ZBrush", level: "Proficient", desc: "High-poly digital sculpting, anatomy, surface detail displacement" },
          { name: "Blender", level: "Proficient", desc: "Rapid 3D ideation, cycles/eevee rendering, geometry nodes" },
          { name: "Substance 3D", level: "Proficient", desc: "PBR texture painting, realistic materials, wear & weathering" }
        ]
      },
      {
        id: "web",
        name: "WEB DEVELOPMENT",
        icon: "code",
        description: "Responsive web architectures, modern code, and interactive visual implementations.",
        tools: [
          { name: "HTML5 / Semantic", level: "Advanced", desc: "Accessible markup, SEO structure, modern semantic elements" },
          { name: "CSS3 / Modern Styling", level: "Advanced", desc: "Flexbox, CSS Grid, custom properties, animations, keyframes" },
          { name: "JavaScript (ES6+)", level: "Proficient", desc: "DOM manipulation, asynchronous fetch, interactive widgets, modules" },
          { name: "Bootstrap & Frameworks", level: "Advanced", desc: "Rapid grid systems, responsive utilities, component building" },
          { name: "SEO Fundamentals", level: "Proficient", desc: "Lighthouse optimization, image lazy-loading, meta tags" }
        ]
      },
      {
        id: "marketing",
        name: "DIGITAL MARKETING",
        icon: "trending-up",
        description: "Data-informed creative campaigns, social media visual strategy, and brand communication.",
        tools: [
          { name: "Social Media Creatives", level: "Advanced", desc: "High-engagement carousel design, Instagram/LinkedIn visuals" },
          { name: "Digital Campaigns", level: "Proficient", desc: "Visual storytelling, launch concepts, multi-channel consistency" },
          { name: "Content Strategy", level: "Proficient", desc: "Brand communication, audience resonance, copywriting alignment" },
          { name: "Promotional Content", level: "Proficient", desc: "Creative visual assets designed to stop the scroll" }
        ]
      }
    ]
  },

  // Web Development Workflow
  devWorkflow: {
    heading: "DESIGN × CODE",
    subheading: "Seamlessly bridging the gap between imaginative UI design and rock-solid code implementation.",
    steps: [
      { step: "01", name: "IDEA", desc: "Understanding objectives, creative direction, and audience needs." },
      { step: "02", name: "WIREFRAME", desc: "Structuring UX flow, information hierarchy, and content architecture." },
      { step: "03", name: "DESIGN", desc: "Crafting modern layouts, typography systems, color theory, and micro-interactions." },
      { step: "04", name: "CODE", desc: "Translating visuals into clean, semantic, responsive, and accessible code." },
      { step: "05", name: "TEST", desc: "Cross-device responsiveness, browser compatibility, and performance optimization." },
      { step: "06", name: "LAUNCH", desc: "Deployment, SEO optimization, and live monitoring." }
    ]
  },

  // Portfolio Categories for Filtering
  categories: [
    { id: "all", label: "ALL" },
    { id: "web", label: "WEB" },
    { id: "3d", label: "3D" },
    { id: "animation", label: "ANIMATION" },
    { id: "vfx", label: "VFX" },
    { id: "design", label: "DESIGN" },
    { id: "marketing", label: "MARKETING" },
    { id: "experimental", label: "EXPERIMENTAL" }
  ],

  // Featured Projects with Complete Case Studies
  projects: [
    {
      id: "pkmco-identity",
      title: "PKMCO — Marine Infrastructure Corporate Presence",
      category: "web",
      secondaryCategory: "marketing",
      type: "Corporate Direction & Strategy",
      myRole: "Director / Digital Creative Direction",
      client: "PKMCO Constructions Private Limited",
      year: "2024–Present",
      summary: "Strategic corporate positioning and digital identity direction for one of India's prominent marine construction and fishery harbour development companies.",
      heroImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1400&q=80",
      desktopPreview: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
      mobilePreview: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      tags: ["Marine Infrastructure", "Fishery Harbour", "Corporate Strategy", "Breakwaters", "Quay Walls"],
      technologies: ["Corporate Strategy", "Brand Architecture", "Executive Direction", "Digital Strategy"],
      outcome: "Positioning PKMCO as a trusted industry benchmark in heavy marine infrastructure and coastal development projects.",
      caseStudy: {
        type: "marketing",
        idea: "Marine engineering requires an authoritative, unshakeable brand presence that communicates engineering rigor, safety benchmarks, and scale.",
        design: "Architected a dignified, institutional design framework reflecting stability, maritime power, and high-impact infrastructure.",
        content: "Detailed primary capabilities: Fishery Harbour Development, Breakwater Construction, Wharf Construction, Quay Walls, and Coastal Infrastructure.",
        campaign: "Connected traditional heavy engineering with modern digital presentation across corporate channels."
      }
    },
    {
      id: "aetheria-studio",
      title: "AETHERIA — Luxury Architecture Studio",
      category: "web",
      secondaryCategory: "design",
      type: "Creative Portfolio Website",
      myRole: "Lead Web Designer & Frontend Developer",
      client: "Concept / Studio Portfolio",
      year: "2024",
      summary: "A bespoke, editorial website designed for an avant-garde architectural and interior design studio with smooth transitions and responsive dual-viewport previews.",
      heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
      desktopPreview: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      mobilePreview: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
      tags: ["Web Design", "UI/UX", "HTML5", "CSS3", "JavaScript", "Responsive"],
      technologies: ["Figma", "HTML5/CSS3", "JavaScript ES6", "CSS Grid", "Lenis Smooth Scroll"],
      outcome: "Crafted a cinematic spatial design portfolio that achieved a 98 Lighthouse performance score with seamless mobile and desktop experiences.",
      caseStudy: {
        type: "website",
        idea: "Architectural firms need a digital presence that reflects spatial mastery—minimalist, proportioned, and monumental rather than crowded with boilerplate.",
        research: "Studied high-end Scandinavian and Japanese architectural publications. Identified key audience as discerning residential clients and commercial developers expecting understated luxury.",
        design: "Employed ultra-refined typography with generous negative space, custom grid layouts that break free from standard column constraints, and subtle glassmorphic overlays.",
        development: "Built from scratch with zero bloated dependencies. Utilized CSS Grid, custom cubic-bezier scroll transitions, and adaptive responsive media queries.",
        result: "A stunning dual-device responsive web experience showcasing interactive floorplans, high-res galleries, and touch-optimized navigation."
      }
    },
    {
      id: "nova-ecommerce",
      title: "NOVA — Next-Gen Cyberwear & Apparel",
      category: "web",
      secondaryCategory: "design",
      type: "Interactive E-Commerce Platform",
      myRole: "UI/UX Designer & Web Developer",
      client: "Editorial Concept",
      year: "2024",
      summary: "High-energy cyber-aesthetic e-commerce experience featuring interactive 360-degree garment inspection, smooth cart drawer, and dynamic lookbook.",
      heroImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80",
      desktopPreview: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
      mobilePreview: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80",
      tags: ["Web Development", "E-Commerce", "UI Implementation", "JavaScript", "CSS"],
      technologies: ["HTML5", "CSS Animations", "Vanilla JS", "Bootstrap Grid", "SVG Filters"],
      outcome: "Engineered a rapid-loading, high-conversion shopping concept combining brutalist typography with intuitive micro-interactions.",
      caseStudy: {
        type: "website",
        idea: "Fashion consumers demand an immersive digital vibe matching streetwear culture. The objective was marrying raw street aesthetics with friction-free checkout.",
        research: "Benchmarked Gen-Z streetwear hubs (Acronym, Balenciaga, Dover Street Market). Target: Youth demographic expecting dark-mode high-contrast shopping.",
        design: "Monochrome palette accented with radioactive neon lime. Dynamic hover states revealing apparel textures, material composition, and size metrics.",
        development: "Constructed modular vanilla JavaScript components for the interactive product gallery, live quantity calculators, and cart slide-out state.",
        result: "Delivered a visually arresting, fully accessible e-commerce prototype with instant load times and fluid mobile swipe gestures."
      }
    },
    {
      id: "mecha-valkyrie",
      title: "MECHA VALKYRIE — Hard Surface 3D Character",
      category: "3d",
      secondaryCategory: "animation",
      type: "3D Character & Game Asset",
      myRole: "3D Modeler, Texturing & Lighting Artist",
      client: "Academic & Personal Portfolio",
      year: "2024",
      summary: "A production-ready hard-surface sci-fi character model sculpted in ZBrush, retopologized in Maya, and textured with realistic PBR wear in Substance.",
      heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80",
      desktopPreview: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      mobilePreview: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
      tags: ["3D Modeling", "Maya", "ZBrush", "Substance 3D", "Lighting", "Game Art"],
      technologies: ["Autodesk Maya", "Pixologic ZBrush", "Substance 3D Painter", "Arnold Renderer"],
      outcome: "Clean low-poly topology with high-res normal baked maps suitable for modern real-time game engines.",
      caseStudy: {
        type: "3d",
        concept: "Design a futuristic exo-suit inspired by mecha anime and biomechanical aerospace engineering.",
        blockout: "Established primary silhouette and volume proportions using basic primitives in Maya to lock in heroic posture.",
        model: "Sculpted high-resolution panel seams, hydraulic joints, and intricate plating detail in ZBrush, followed by clean quad retopology.",
        texture: "Authored 4K PBR material sets (Roughness, Metallic, Normal, Albedo, Ambient Occlusion) with realistic edge scratches and carbon fiber weave.",
        light: "Created a three-point cinematic studio lighting rig in Arnold with cool rim lights and warm key lights to highlight armor contours.",
        final: "Rendered high-impact cinematic beauty passes and 360-degree turntable sequences showing mesh wireframe and material breakdowns."
      }
    },
    {
      id: "neo-tokyo-vfx",
      title: "NEO TOKYO — Cinematic VFX & Compositing Reel",
      category: "vfx",
      secondaryCategory: "animation",
      type: "VFX & Motion Graphics",
      myRole: "VFX Artist, Compositor & Motion Designer",
      client: "VFX Showpiece",
      year: "2024",
      summary: "A cinematic sequence featuring 3D camera tracking, live-action compositing, holographic HUD overlays, atmospheric volumetric smoke, and neon color grading.",
      heroImage: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1400&q=80",
      desktopPreview: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80",
      mobilePreview: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
      tags: ["VFX", "After Effects", "Motion Tracking", "Compositing", "Rotoscoping"],
      technologies: ["Adobe After Effects", "Mocha AE", "Premiere Pro", "3D Camera Tracker"],
      outcome: "A multi-layered visual sequence seamlessly blending real-world camera footage with futuristic CGI elements.",
      caseStudy: {
        type: "3d",
        concept: "Transform everyday urban footage into a high-density cyberpunk metropolis using realistic compositing techniques.",
        blockout: "Stabilized and solved accurate 3D camera motion vectors using Mocha AE planar tracking and native 3D camera solvers.",
        model: "Integrated 3D aerial vehicle fly-bys, digital signage, and glowing billboards mapped accurately to architectural planes.",
        texture: "Color matched black levels, film grain, lens distortion, and chromatic aberration to match native camera optics.",
        light: "Simulated interactive neon spill on rain-slicked pavement and generated volumetric atmospheric light haze.",
        final: "Final master grade exported with multi-channel sound design and dynamic sound-synced kinetic typography."
      }
    },
    {
      id: "monolith-posters",
      title: "MONOLITH — Experimental Typographic Poster Series",
      category: "design",
      secondaryCategory: "marketing",
      type: "Visual Communication & Print",
      myRole: "Graphic Designer & Art Director",
      client: "Design Exploration",
      year: "2024",
      summary: "A dynamic series of Swiss-inspired posters exploring brutalist layout grids, oversized type contrast, distorted glyphs, and high-impact visual hierarchy.",
      heroImage: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1400&q=80",
      desktopPreview: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80",
      mobilePreview: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=600&q=80",
      tags: ["Graphic Design", "Typography", "Branding", "Posters", "Photoshop", "Illustrator"],
      technologies: ["Adobe Photoshop", "Adobe Illustrator", "Custom Typography", "Halftone Printing Techniques"],
      outcome: "An acclaimed visual communication showcase celebrating the marriage of classic international typographic style with raw contemporary digital texture.",
      caseStudy: {
        type: "marketing",
        idea: "Explore how tension between strict mathematical layout grids and chaotic expressive typography can evoke intense emotional resonance.",
        design: "Built rigorous 12-column baseline grids in Illustrator, disrupted with scanner glitches, displacement maps, and custom distressed letterforms.",
        content: "Curated poetic verses on technology, time, and human consciousness as the thematic narrative of the series.",
        campaign: "Adapted the master poster compositions into animated digital billboards, social carousel stories, and collectible art prints."
      }
    },
    {
      id: "pulse-campaign",
      title: "PULSE APPAREL — Digital Campaign & Creative Strategy",
      category: "marketing",
      secondaryCategory: "design",
      type: "Digital Marketing Campaign",
      myRole: "Creative Strategist & Visual Designer",
      client: "E-Commerce Apparel Launch (Case Concept)",
      year: "2024",
      summary: "An integrated multi-channel digital creative campaign combining thumb-stopping social media ad creatives, story carousels, and landing page visual strategy.",
      heroImage: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=1400&q=80",
      desktopPreview: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=1200&q=80",
      mobilePreview: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
      tags: ["Digital Marketing", "Social Media Creatives", "Visual Strategy", "Campaign Design"],
      technologies: ["Photoshop", "Premiere Pro", "Canva Pro", "Ad Creative Guidelines", "SEO Copywriting"],
      outcome: "Demonstrated the power of cohesive visual storytelling across promotional graphics, social media reels, and high-conversion landing assets.",
      caseStudy: {
        type: "marketing",
        idea: "In saturated digital feeds, ordinary product photos get scrolled past in milliseconds. The strategy focused on high-contrast motion and magnetic hook visuals.",
        design: "Crafted a vibrant visual identity using bold kinetic typography, punchy product framing, and clear value proposition badges.",
        content: "Designed 15+ modular creative assets tailored for Instagram Reels, TikTok, and Meta carousel ad placements.",
        campaign: "Engineered an omnichannel visual strategy driving social traffic directly to an optimized high-conversion mobile landing page."
      }
    },
    {
      id: "chrono-interactive",
      title: "CHRONO LABS — Creative Tech Interactive Experience",
      category: "experimental",
      secondaryCategory: "web-dev",
      type: "Interactive Web Experiment",
      myRole: "Creative Technologist & Interactive Developer",
      client: "Digital Playground Experiment",
      year: "2024",
      summary: "An exploratory creative coding project featuring WebGL particle fields, cursor-reactive magnetic nodes, and real-time audio-responsive shader canvas.",
      heroImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1400&q=80",
      desktopPreview: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
      mobilePreview: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
      tags: ["Creative Coding", "WebGL", "Three.js", "Canvas", "Interactive"],
      technologies: ["JavaScript ES6", "HTML5 Canvas", "Three.js", "Web Audio API", "GLSL Shaders"],
      outcome: "A fluid 60FPS experimental web lab testing the boundaries of browser-based generative art and kinetic interfaces.",
      caseStudy: {
        type: "website",
        idea: "Explore how code can become an expressive medium just like digital clay or paint brushes, generating real-time beauty based on user interaction.",
        research: "Studied generative algorithms, Perlin noise vectors, and lightweight particle systems optimized for hardware acceleration.",
        design: "Dark canvas backdrop allowing glowing emissive particles to shimmer with depth, velocity trails, and elastic physics.",
        development: "Implemented custom canvas render loops with requestAnimationFrame, optimizing memory garbage collection for smooth mobile execution.",
        result: "An engaging interactive playground featured in the Muflih Lab section."
      }
    }
  ],

  // Digital Lab (Muflih Lab) Experiments
  lab: [
    {
      id: "lab-particle-orb",
      title: "Reactive Particle Core",
      type: "WebGL / Interactive 3D",
      description: "Mathematical particle sphere reacting dynamically to cursor velocity and sound frequencies.",
      tag: "Real-time 3D",
      demoAction: "particleCore"
    },
    {
      id: "lab-split-engine",
      title: "Design × Code Transformer",
      type: "Frontend Interaction",
      description: "Interactive split slider demonstrating real-time translation of UI design into production code.",
      tag: "UI Architecture",
      demoAction: "splitSlider"
    },
    {
      id: "lab-kinetic-type",
      title: "Kinetic Deconstruction",
      type: "Typography Experiment",
      description: "Algorithmic letter scattering and magnetic reassembly based on user proximity.",
      tag: "Creative Coding",
      demoAction: "kineticType"
    },
    {
      id: "lab-glass-physics",
      title: "Frosted Glassmorphic Cards",
      type: "CSS3 / Math Physics",
      description: "Multi-layered depth cards with dynamic 3D specular light glare calculated via pointer coordinates.",
      tag: "UI Physics",
      demoAction: "glassCards"
    }
  ],

  // Experience Timeline
  experience: [
    {
      title: "Director",
      role: "Director",
      company: "PKMCO CONSTRUCTIONS PRIVATE LIMITED",
      industry: "Marine Construction & Coastal Infrastructure",
      period: "Current",
      isLeadership: true,
      description: "Serving as Director at PKMCO Constructions Private Limited, a marine construction company with extensive experience in fishery harbour development and coastal infrastructure projects.",
      highlights: [
        "Executive oversight in a specialized marine construction firm active in harbour and coastal projects.",
        "Company focus areas include Marine Infrastructure, Fishery Harbour Development, Breakwater Construction, Wharf Construction, Quay Walls, and Coastal Infrastructure.",
        "Bridging corporate governance, digital strategy, and strategic infrastructure operations."
      ],
      companyUrl: "https://www.pkmgroup.co/pkm-construction"
    },
    {
      title: "Graphic Design & Video Editing Intern",
      role: "Graphic Designer & Video Editor",
      company: "[E-Commerce Retail Brand / Agency — Editable]",
      industry: "E-Commerce",
      period: "Internship [Dates Editable]",
      isLeadership: false,
      description: "Created high-converting digital visual assets for fast-moving consumer e-commerce products.",
      highlights: [
        "Designed promotional graphics, social media banners, and digital marketing campaign creatives.",
        "Edited dynamic video reels, commercial teasers, and product highlight clips with motion typography.",
        "Collaborated with marketing leads to maintain strict visual brand consistency across multiple channels.",
        "Streamlined asset export pipelines for high-volume rapid turnaround requirements."
      ]
    },
    {
      title: "Freelance Creative Designer & Web Creator",
      role: "Independent Multidisciplinary Creative",
      company: "Studio MUFLIH",
      industry: "Creative Services & Web",
      period: "2023 — Present",
      isLeadership: false,
      description: "Providing 3D visualization, modern responsive websites, and digital marketing creatives for emerging brands and personal portfolios.",
      highlights: [
        "Designed and developed bespoke responsive websites with clean HTML, CSS, and modern JavaScript.",
        "Produced 3D assets, product mockups, and cinematic motion graphics for client presentations.",
        "Built cohesive visual identities from logo marks to digital campaign assets."
      ]
    }
  ],

  // Education Timeline
  education: [
    {
      degree: "M.Sc. in Animation & Game Art",
      institution: "Jain University, Bangalore",
      status: "Currently Pursuing (Current)",
      timeline: "Current",
      focus: "Advanced 3D Modeling, Real-Time Game Art, Texturing, Lighting, Animation Pipelines, and Interactive Environments.",
      evolutionStep: "GAME ART & ADVANCED 3D"
    },
    {
      degree: "B.Sc. in Computer Animation",
      institution: "Completed",
      status: "Graduated",
      timeline: "Completed",
      focus: "Foundations of Computer Graphics, Character Animation, 3D Sculpting, Video Editing, VFX Compositing, and Digital Artistry.",
      evolutionStep: "ANIMATION FOUNDATION"
    }
  ],

  // Professional Story Evolution (Visual Timeline)
  evolutionJourney: [
    { step: "COMPUTER ANIMATION", desc: "Foundational mastery in computer graphics, 3D modelling, timing, and visual storytelling." },
    { step: "CREATIVE DESIGN", desc: "Broadened into typography, branding systems, visual layout, and human-centric UI/UX." },
    { step: "WEB & DIGITAL", desc: "Engineered responsive websites, frontend code architecture, and interactive web products." },
    { step: "BUSINESS", desc: "Developed business acumen, leadership perspective, and strategic corporate thinking." },
    { step: "DIRECTOR", desc: "Director at PKMCO Constructions Private Limited, bridging executive responsibility with industry scale." },
    { step: "DIGITAL CREATIVE", desc: "Synthesizing executive leadership with high-end design, technology, and digital experiences." }
  ],

  // Creative Studio Services Menu
  services: {
    heading: "WHAT I CAN CREATE",
    subheading: "A multidisciplinary service portfolio spanning executive direction, digital web solutions, and high-impact visual artistry.",
    groups: [
      {
        category: "BUSINESS",
        badge: "STRATEGY & DIRECTION",
        items: [
          { title: "Creative Direction", desc: "Overarching conceptual vision, design governance, and brand cohesion." },
          { title: "Digital Strategy", desc: "Formulating digital roadmaps that translate business goals into digital reality." },
          { title: "Brand Development", desc: "Comprehensive brand positioning, corporate identity architecture, and guidelines." },
          { title: "Business Concepts", desc: "Synthesizing market opportunities with innovative visual presentation." }
        ]
      },
      {
        category: "DIGITAL",
        badge: "CODE & INTERFACES",
        items: [
          { title: "Web Design", desc: "Bespoke, responsive websites, landing pages, and editorial digital portfolios." },
          { title: "Web Development", desc: "Semantic HTML5, modern CSS3, responsive frameworks, and vanilla/modern JS." },
          { title: "UI / UX Design", desc: "Human-centric interface design, wireframing, and interactive design systems in Figma." },
          { title: "Graphic Design", desc: "Posters, social media creatives, promotional graphics, and digital advertising." },
          { title: "Digital Marketing", desc: "Content design, visual marketing strategy, and SEO fundamentals." }
        ]
      },
      {
        category: "VISUAL",
        badge: "3D & MOTION",
        items: [
          { title: "3D Art & Game Art", desc: "Hard-surface modeling, sculpting, UV mapping, PBR texturing, and lighting." },
          { title: "Animation", desc: "Keyframe animation, timing, character performance, and camera choreography." },
          { title: "VFX & Compositing", desc: "Green screen keying, rotoscoping, 3D camera tracking, and color grading." },
          { title: "Motion Graphics", desc: "Kinetic typography, logo stings, and promotional motion reels." },
          { title: "Video Editing", desc: "Commercial video pacing, audio-sync, and multi-channel export pipelines." }
        ]
      }
    ]
  }
};

// Make available globally and for modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
