# Prompt Log & AI Refinement Log — B25GE0101 Activity 11

**Course:** Portfolio Building for Engineering Students (B25GE0101)  
**Deliverable:** 2 — AI Prompt Log & Critical Reflection  
**Student Name:** Krutika Mohanty  
**Institution:** REVA University, Bengaluru, India  
**Program:** B.Tech Computer Science & Engineering (2nd Year / 3rd Semester)  
**Repository:** [https://github.com/krutika-codesdev/portfolio](https://github.com/krutika-codesdev/portfolio)  
**Live URL:** [https://krutika-codesdev.github.io](https://krutika-codesdev.github.io) &middot; [Vercel Mirror](https://portfolio-alpha-inky-92.vercel.app/)  

---

## 1. Initial Structured AI Generation Prompt

The following structured prompt was crafted based on the Portfolio Brief to direct the AI assistant in generating a single-page technical developer portfolio without using generic starter templates:

```text
Act as a senior frontend engineer and technical UI designer. Build a complete, responsive, single-page developer portfolio for Krutika Mohanty, a 2nd Year / 3rd Semester Computer Science & Engineering student at REVA University (CGPA 10.0).

Context & Positioning:
- The portfolio must present genuine, student-level engineering work across systems programming, modern web development, and AI validation pipelines.
- Avoid generic marketing buzzwords, stock photos, decorative gradients, and SaaS template aesthetics.

Required Page Structure:
1. Navigation: Centered floating dock navigation with links to About, Work, Projects, Arsenal, and Contact.
2. Hero Section: Direct headline ("Building Practical Software, One Problem at a Time"), concise subhead, verified status badges (CGPA 10.0, REVA University, Batch 2025–2029), and an interactive runtime code workbench artifact.
3. About / Foundation: Academic standing, institution details, 3 active engineering disciplines, and an explicit "Career & Learning Goal" block targeting Software Engineering Internships.
4. Flagship Case Study (VeritasIQ): Deep architectural breakdown of an 11-stage AI product validation pipeline with an interactive sequence viewer modal.
5. Systems Projects: Dedicated section for low-level C projects (Graphics Editor in C with an authentic 8x8 pixel raster matrix, and C Programming Repository with terminal code display).
6. Technical Arsenal: 5 organized skill categories (Programming, Web, Database, Core CS, Tools) with honest proficiency ratings.
7. Activities & Credentials: Showcase Coursework Activities 1–4 with GitHub links, alongside extracurricular programs and hackathons (IPL 2026, UniHack, AWS Launchpad, GDG & IEEE Student Branch) and the learning credentials currently represented in the portfolio (AWS AI Practitioner Challenge, Data Analysis with Python, Data Visualization with Python, and Python 101 for Data Science).
8. Contact & Footer: Direct outreach links to LinkedIn and GitHub profile.

Visual & Technical Constraints:
- Tech Stack: React 19, Vite, vanilla CSS with custom tokens.
- Theme: Dark terminal grid background with high-contrast cobalt accents (#3B82F6), monospace meta badges, and 1px border dividers.
- Deliver error-free, accessible code with 0 lint errors and 0 placeholder href="#" links.
```

---

## 2. Follow-Up Refinement Prompts & Iterations

### Refinement 1: Visual Hierarchy, Spacing Polish & Navigation Clearance

- **Prompt Input:**
  ```text
  Do a visual polish pass on the portfolio without redesigning the existing aesthetic. Focus on:
  1. Remove the excessive vertical whitespace between the VeritasIQ section / "EXPLORE 11-STAGE ARCHITECTURE" CTA and the SYSTEMS PROJECTS section. Inspect container padding and flex layouts rather than applying negative margins.
  2. Ensure the fixed FloatingDockNav never obscures important section headings, cards, or CTAs when clicking anchor links. Calibrate scroll landing margins (scroll-mt-28).
  3. Harmonize the card heights and vertical rhythm across the Technical Arsenal grid.
  4. Preserve all existing typography, borders, dark grid theme, and cobalt accents.
  ```
- **Before / After Analysis:**
  - *Before:* A 120px+ awkward vertical blank space existed below the VeritasIQ CTA; clicking navigation links landed directly flush against headings, causing the floating nav to obscure section titles.
  - *After:* Standardized section padding to a balanced 48px rhythm, added `scroll-mt-28` landing margins to all sections so headers remain fully visible beneath the navbar, and aligned all card container heights.

---

### Refinement 2: Responsive Breakpoints & Accessibility Pass

- **Prompt Input:**
  ```text
  Perform a complete responsive QA and accessibility pass across desktop (1366x768, 1280x720), tablet (1024px, 768px), and mobile (430x932, 390x844).
  Requirements:
  1. Eliminate all horizontal overflow and unwanted page-level horizontal scrollbars.
  2. Ensure the mobile navigation drawer opens cleanly, maintains touch-friendly tap targets (minimum 44px), and closes upon navigation.
  3. Implement background body scroll locking when the VeritasIQ 11-stage modal is open, with accessible keyboard focus trapping and Escape key listener.
  4. Ensure two-column desktop layouts collapse gracefully into single-column flows on mobile viewports.
  ```
- **Before / After Analysis:**
  - *Before:* On 390px mobile viewports, the navigation drawer experienced edge clipping; when the VeritasIQ modal was opened, scrolling the modal content also scrolled the background page.
  - *After:* Set proper `overflow-x: hidden` boundaries, added `useEffect` body scroll locking with clean unmount cleanup, trapped keyboard focus inside modals, and enlarged touch targets to 44px minimum.

---

### Refinement 3: Coursework Integration & Handout Compliance

- **Prompt Input:**
  ```text
  Integrate Portfolio Building Activities 1–4 into the existing Activities section and ensure full compliance with the Assignment 11 handout:
  1. Add Activity 1 (Dev Environment Setup), Activity 2 (Git & GitHub Setup), and Activity 3 (Collaboration & Live Share), each linking directly to https://github.com/krutika-codesdev/Hello-World.
  2. Add Activity 4 (LeetCode Practice) linking directly to https://github.com/krutika-codesdev/leetcode-solutions.
  3. Provide a segmented filter pill row [All (8) | Course Activities (1–4) | Programs & Hackathons] defaulting to All so nothing is hidden.
  4. Add an explicit named "CAREER & LEARNING GOAL" pod in the About section using the existing editorial pod styling.
  5. Do not redesign the page or modify any external repositories.
  ```
- **Before / After Analysis:**
  - *Before:* The Activities section only featured extracurricular hackathons and workshops; no coursework links to Hello-World or leetcode-solutions were present; career direction was implied in the bio rather than explicitly labeled.
  - *After:* Activities 1–4 are cleanly integrated with styled `REPO` buttons opening the verified repositories in new tabs; a filter pill control provides one-click filtering; a dedicated "CAREER & LEARNING GOAL" pod is rendered matching the existing visual language.

---

## 3. Critical Reflection (Handout Step 6)

1. **Which prompt produced the biggest improvement?**  
   The visual hierarchy and spacing refinement (Refinement 1) produced the most substantial improvement. It eliminated disjointed vertical whitespace, resolved navigation occlusions with calibrated `scroll-mt` offsets, and transformed isolated components into a unified, fluid narrative layout.

2. **What was one thing the AI got wrong?**  
   The AI initially attempted to fix section spacing by injecting arbitrary negative margins (`margin-top: -60px`) and using generic placeholder copy rather than diagnosing root-cause container box models and referencing my actual repository artifacts.

3. **How did you identify and correct the issue?**  
   I inspected the computed CSS layout using browser developer tools to locate the exact padding causing the gap, verified my local project logs (`setup-note.txt` and `PROGRESS.md`), and issued targeted follow-up prompts that strictly prohibited negative margins and enforced factual, verified data structures.
