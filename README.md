# Krutika Mohanty — Developer Portfolio

A premium, recruiter-ready developer portfolio for **Krutika Mohanty**, Computer Science & Engineering student at REVA University, positioning her as an emerging software developer who builds practical software across programming, data, web technologies, and AI-powered applications.

---

## 🛠️ Tech Stack & Architecture

- **Framework:** React 19 + Vite 8
- **Styling:** Custom CSS Design System with CSS Tokens (Dark Mode Default + Light Mode Toggle)
- **Icons:** `lucide-react` & Custom Vector SVGs
- **Quality:** Oxlint (0 errors, 0 warnings)
- **Data Architecture:** Centralized data store at `src/data/portfolioData.js`

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
├── index.html                  # SEO, metadata, and web font declarations
├── src/
│   ├── main.jsx                # Application entrypoint
│   ├── App.jsx                 # Master layout assembly & modal orchestrator
│   ├── index.css               # Design tokens, themes, global typography & cards
│   ├── App.css                 # Component-level styles, terminal widget & pipeline
│   ├── data/
│   │   └── portfolioData.js    # Single source of truth for projects, skills, certificates
│   └── components/
│       ├── Navbar.jsx          # Glassmorphic header, theme toggle, mobile drawer
│       ├── Hero.jsx            # 10-second recruiter hero with live terminal widget
│       ├── DeveloperSnapshot.jsx # 4-pillar overview (Focus, Direction, Strengths, Interests)
│       ├── AboutSection.jsx    # Grounded technical narrative & engineering mindset
│       ├── SkillsSection.jsx   # Categorized skills matrix with authentic level badges
│       ├── TrajectorySection.jsx # "Where I'm Headed" 5-stage progression vector
│       ├── VeritasIQSection.jsx# Flagship project deep dive & 11-stage pipeline flow
│       ├── ProjectsSection.jsx # Filterable verified projects grid with specs
│       ├── CertificatesSection.jsx # Verified credentials from Udacity and IBM
│       ├── ActivitiesSection.jsx # Hackathons, SIH, UniHack, GDG, IEEE
│       ├── EducationSection.jsx# REVA University B.Tech CSE (CGPA 10.0) & active momentum
│       ├── GitHubSection.jsx   # GitHub showcase for @krutika-codesdev with API fallback
│       ├── ContactSection.jsx  # Final CTA with email copy, mailto & social links
│       ├── Footer.jsx          # Minimal copyright and navigation links
│       ├── Icons.jsx           # Dedicated brand vector SVGs
│       ├── ProjectModal.jsx    # Modal dialog for inspecting technical project details
│       ├── CertificateModal.jsx# Modal dialog for inspecting verified credentials
│       └── ResumeModal.jsx     # Summary candidate profile & resume placeholder
```

---

## ⚙️ Updating Personal Data & Placeholders

All personal links, verified projects, certificates, and contact details are maintained in:
`src/data/portfolioData.js`

To update:
- **Email:** Update `personalInfo.links.email`
- **LinkedIn:** Update `personalInfo.links.linkedin`
- **Resume:** Place `resume.pdf` in `public/` and update `personalInfo.links.resumeUrl`
- **Projects:** Add or edit objects in `otherProjects` or `veritasIQData`
