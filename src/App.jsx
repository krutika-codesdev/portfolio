import React, { useState, useEffect } from "react";
import "./App.css";
import FloatingDockNav from "./components/FloatingDockNav";
import HeroArtDirected from "./components/HeroArtDirected";
import IdentityBentoGrid from "./components/IdentityBentoGrid";
import VeritasIQShowcase from "./components/VeritasIQShowcase";
import ProjectVisualCards from "./components/ProjectVisualCards";
import TechnicalArsenal from "./components/TechnicalArsenal";
import ActivitiesAndCredentials from "./components/ActivitiesAndCredentials";
import ClosingContact from "./components/ClosingContact";
import MinimalFooter from "./components/MinimalFooter";
import VeritasModal from "./components/VeritasModal";
import ProjectModal from "./components/ProjectModal";

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("km_theme") || "dark";
    } catch {
      return "dark";
    }
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [veritasModalOpen, setVeritasModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("km_theme", theme);
    } catch {
      // Ignore storage errors
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="art-portfolio-root">
      {/* Accessible Skip Link */}
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      {/* Engineering Ambient Grid Background & Subtle Radial Glow */}
      <div className="art-ambient-grid" aria-hidden="true" />
      <div className="art-radial-glow" aria-hidden="true" />

      {/* Floating Centered Pill Navigation Dock */}
      <FloatingDockNav theme={theme} toggleTheme={toggleTheme} />

      <main id="main-content">
        {/* 1. Dramatic First Viewport Hero with System Visual Anchor */}
        <HeroArtDirected />

        {/* 2. Asymmetric 35% / 65% About & Academic Foundation */}
        <IdentityBentoGrid />

        {/* 3. Flagship Centerpiece: VeritasIQ Showcase with Connected Nodes Flow */}
        <VeritasIQShowcase onOpenArchitecture={() => setVeritasModalOpen(true)} />

        {/* 4. Systems & Procedural C Portfolio with Visual Graphics */}
        <ProjectVisualCards onSelectProject={(project) => setSelectedProject(project)} />

        {/* 5. 4-Domain Typographic Technical Arsenal (No Progress Bars) */}
        <TechnicalArsenal />

        {/* 6. Balanced Horizontal 50/50 Activities & Credentials */}
        <ActivitiesAndCredentials />

        {/* 7. Centered Monumental Closing Visual: LET'S BUILD. */}
        <ClosingContact />
      </main>

      {/* 8. Minimal Edge-to-Edge Footer */}
      <MinimalFooter />

      {/* Engineering Blueprint Modal */}
      <VeritasModal
        isOpen={veritasModalOpen}
        onClose={() => setVeritasModalOpen(false)}
      />

      {/* Project Specs Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
