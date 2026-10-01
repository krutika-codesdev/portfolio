# Krutika Mohanty — Developer Portfolio

A dark, technically restrained developer portfolio for **Krutika Mohanty**, Computer Science & Engineering student at REVA University, highlighting practical software development across systems programming, web applications, and AI validation pipelines.

**Live Portfolio:** https://portfolio-alpha-inky-92.vercel.app/

---

## 🛠️ Tech Stack & Architecture

- **Core:** React 19, JavaScript (ES Modules)
- **Tooling & Bundler:** Vite 8
- **Styling:** Vanilla CSS with custom tokens, dark mode default, light mode toggle
- **Icons:** `lucide-react` & custom accessible vector SVGs
- **Quality & Linting:** Oxlint (0 errors, 0 warnings)
- **Deployment:** Vercel
- **Data Source:** Centralized single-source-of-truth at `src/data/portfolioData.js`

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Production Build
```bash
npm run build
```

### 4. Code Quality & Linting
```bash
npm run lint
```

---

## 📂 Project Structure

```
portfolio/
├── index.html                     # SEO metadata, OpenGraph, theme-color & web fonts
├── src/
│   ├── main.jsx                   # Application entrypoint
│   ├── App.jsx                    # Root layout, theme state & skip-to-content link
│   ├── index.css                  # Design tokens, theme variables & global resets
│   ├── App.css                    # Component layout styles & responsive breakpoints
│   ├── data/
│   │   └── portfolioData.js       # Central data store for projects, skills & credentials
│   └── components/
│       ├── FloatingDockNav.jsx    # Centered floating navigation dock with active tracking
│       ├── HeroArtDirected.jsx   # Hero with Developer Systems Workbench runtime artifact
│       ├── IdentityBentoGrid.jsx  # Academic & engineering foundation editorial display
│       ├── VeritasIQShowcase.jsx  # Flagship case study with 11-stage pipeline sequence
│       ├── ProjectVisualCards.jsx # Systems C projects with raster & terminal graphics
│       ├── TechnicalArsenal.jsx   # 4-domain capability landscape (Systems, Web, Data, AI)
│       ├── ActivitiesAndCredentials.jsx # Programs, hackathons & verified qualifications
│       ├── ClosingContact.jsx     # Direct outreach section with LinkedIn & GitHub CTAs
│       ├── MinimalFooter.jsx      # Minimal footer with smooth scroll-to-top trigger
│       ├── VeritasModal.jsx       # 11-stage architecture modal with focus trapping
│       ├── ProjectModal.jsx       # Technical project specification modal with focus trapping
│       └── Icons.jsx              # Vector SVG icon components with accessibility attributes
```

---

## 🔗 Links

- **GitHub Repository:** https://github.com/krutika-codesdev/portfolio
- **Live Deployment:** https://portfolio-alpha-inky-92.vercel.app/
