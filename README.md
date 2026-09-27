# AHAMED MUFLIH — PERSONAL CREATIVE PORTFOLIO

> **BUSINESS MIND. CREATIVE SOUL.**  
> **DESIGN. BUILD. CREATE.**  
> *Director at PKMCO Constructions Private Limited · Creative Designer · Web & Digital*

An ultra-premium, minimal editorial monochrome portfolio website crafted specifically for **Ahamed Muflih** (`MUFLIH.`). 
Engineered with high performance, a sophisticated editorial magazine aesthetic featuring a neutral outer page and a centered dark inner visual canvas, bold Swiss-inspired typography, interactive mouse-parallax floating pills, interactive 3D WebGL visuals, real-time audio synthesis, and a 100% centralized content management system.

---

## 🌟 Visual Redesign & Architecture

### 1. Minimal Editorial Monochrome Design Language
- **Outer Canvas Frame**: Neutral light-grey exterior background (`#eaeaea` / `#ececed`) framing a large, centered, rounded black visual canvas (`#09090b`) to evoke an art-directed editorial magazine / high-end hardware screen.
- **Typographic Hierarchy**: High-contrast, refined display typography using *Syne* for headings, *Plus Jakarta Sans* for clean editorial prose, and *JetBrains Mono* for technical identifiers and metadata.
- **Monochrome Elegance**: Pure black, crisp white, neutral greys, and subtle hair-thin borders (`1px solid rgba(255,255,255,0.08)`) replacing saturated gradients for a mature, executive-meets-creative aesthetic.

### 2. Editorial Hero Section & Arch Portrait Stage
- **Giant Editorial Typography**: Bold `HELLO, I'M MUFLIH.` heading and narrative introduction statement.
- **Arch Portrait Stage**: Features Ahamed Muflih's official portrait framed inside an architectural arch frame (`border-radius: 200px 200px 24px 24px`).
- **Floating Category Pill Tags**: 7 interactive pill tags (`DIRECTOR`, `DESIGN`, `DEVELOPMENT`, `3D`, `ANIMATION`, `VFX`, `MARKETING`) floating around the portrait with organic hovering keyframes, interactive mousemove parallax damping, and interactive audio feedback.
- **Trust Strip**: Real-time ticker establishing his executive role at PKMCO Constructions Private Limited alongside his creative disciplines.

### 3. Business Executive Identity — Director at PKMCO
- **Official Title**: Strictly verified as **Director** at **PKMCO Constructions Private Limited**.
- **Verified Marine Focus Areas**: Marine Infrastructure, Fishery Harbour Development, Breakwater Construction, Wharf Construction, Quay Walls, Coastal Infrastructure.
- **Official Link**: Direct link to the company's official page: `https://www.pkmgroup.co/pkm-construction`.
- **Dual Identity Section**: "BUSINESS MIND. CREATIVE SOUL." connecting corporate governance with high-fidelity digital craftsmanship.

### 4. Creative Disciplines: "What I Do"
- Clean editorial list formatted with index numbers (`01 DIRECTOR`, `02 WEB DESIGN`, `03 WEB DEVELOPMENT`, `04 3D ART`, `05 ANIMATION`, `06 VFX & MOTION`, `07 GRAPHIC DESIGN`, `08 DIGITAL MARKETING`).
- Clicking any discipline smoothly scrolls down and automatically filters the portfolio work.

### 5. Selected Work (Editorial Project Stack)
- **Panoramic Featured Card**: Top featured project with wide 21:9 visual preview, role metadata, and primary case study trigger.
- **Alternating 2-Column Grid**: Dynamic project cards with 16:10 aspect ratio imagery, category stamps, summaries, and clickable case study previews.
- **Instant Category Filter Tabs**: `ALL`, `WEB`, `3D`, `ANIMATION`, `VFX`, `DESIGN`, `MARKETING`, `EXPERIMENTAL`.

### 6. Interactive Modules & Showcases
- **Digital Experiences (Web Design)**: Bespoke dual-device showcase featuring high-fidelity **Laptop Desktop Preview** and overlapping **Smartphone Mobile Viewport**.
- **Design × Code (Split-Screen Transformer)**: 3-Stage switcher allowing the user to view `1. DESIGN` (Figma visual UI), drag the `SPLIT SLIDER` to reveal `2. CODE` (clean syntax-highlighted code), or test the `3. LIVE SITE ⚡` with interactive runtime triggers.
- **From Pixels to Worlds (3D & VFX)**: Hard-surface 3D modeling and game art showcase with topology, texturing, and rendering breakdown.
- **Experience & Education**: Minimal editorial timeline detailing his Directorship at PKMCO, graphic design/video editing internship, M.Sc. in Animation & Game Art (Jain University, Bangalore), and B.Sc. in Computer Animation.
- **My Toolbox**: Typography pill grid covering Maya, 3ds Max, ZBrush, After Effects, Premiere Pro, Photoshop, HTML5, CSS3, JavaScript, Bootstrap, Figma, and Substance 3D.
- **Contact ("Let's Create Something Interesting.")**: Minimal editorial form with direct mailto generation and social channels (LinkedIn, Instagram, Behance, ArtStation).
- **Interactive Cursor & Web Audio**: Custom magnetic cursor displaying contextual feedback (`VIEW`, `OPEN`, `FILTER`, `TECH`, `VISIT`) and native Web Audio synthesizer for subtle tactile UI clicks.

---

## 📁 File Structure

```
ahamed-muflih-portfolio/
│
├── index.html                   # Master single-page application entry point
├── README.md                    # Documentation & setup guide
│
├── assets/
│   └── muflih-portrait.jpg      # Official portrait of Ahamed Muflih
│
├── css/
│   └── styles.css               # Minimal editorial monochrome stylesheet
│
└── js/
    ├── data.js                  # ⭐ CENTRALIZED EDITABLE CONTENT FILE
    ├── main.js                  # Controller: filters, stack render, modal, audio, parallax
    ├── canvas-hero.js           # Three.js 3D crystal core & cyber constellation
    └── signature-interaction.js # Interactive brand motif
```

---

## ⚡ How to Edit Your Content

All content across the entire website is driven by a single centralized configuration file:  
`js/data.js`

To update projects, copy, skills, or links:
1. Open `js/data.js`.
2. Edit the relevant object (`brand`, `businessRole`, `categories`, `projects`, `experience`, `education`, `toolbox`, `contact`).
3. Save the file and refresh your browser. The entire site updates instantly without any build step required.

---

## 🚀 How to Preview Locally

Because this project is built with standard vanilla web technologies (HTML5, CSS3, ES6 JavaScript):
- Double click `index.html` in your file explorer to open it in any modern browser (Chrome, Edge, Firefox, Safari).
- Or run a simple local web server:
  ```powershell
  # Using Python (if installed)
  python -m http.server 8000
  # Or simply open index.html directly
  ```
