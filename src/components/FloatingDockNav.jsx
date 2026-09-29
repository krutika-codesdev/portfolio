import React, { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function FloatingDockNav({ theme, toggleTheme }) {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "projects", label: "Projects" },
    { id: "arsenal", label: "Arsenal" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Bottom of page check
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection("contact");
        return;
      }

      // If near very top
      if (window.scrollY < 180) {
        setActiveSection("hero");
        return;
      }

      const sectionMap = [
        { id: "contact", navId: "contact" },
        { id: "programs", navId: "arsenal" },
        { id: "arsenal", navId: "arsenal" },
        { id: "projects", navId: "projects" },
        { id: "work", navId: "work" },
        { id: "about", navId: "about" }
      ];

      const scrollPos = window.scrollY + 180;

      for (const item of sectionMap) {
        const el = document.getElementById(item.id);
        if (el) {
          const targetEl = el.querySelector(".section-container-wide") || el;
          const top = targetEl.getBoundingClientRect().top + window.scrollY;
          if (scrollPos >= top) {
            setActiveSection(item.navId);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileOpen]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);

    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(id);
    if (section) {
      const content = section.querySelector(".section-container-wide") || section;
      const navClearance = window.innerWidth <= 640 ? 70 : 82;
      const targetPos = content.getBoundingClientRect().top + window.scrollY - navClearance;
      window.scrollTo({ top: Math.max(0, targetPos), behavior: "smooth" });
    }
  };

  const activeLabel = navItems.find((item) => item.id === activeSection)?.label || "Home";

  return (
    <nav className="floating-nav-capsule" aria-label="Main Navigation">
      <div className="nav-capsule-shell">
        {/* Segment 1: Identity / Monogram */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, "hero")}
          className={`nav-capsule-identity ${activeSection === "hero" ? "is-active" : ""}`}
          aria-label="Krutika Mohanty - Back to top"
          title="Krutika Mohanty"
        >
          <span className="capsule-monogram">KM</span>
        </a>

        <div className="nav-capsule-divider desktop-only" aria-hidden="true" />

        {/* Segment 2: Primary Section Links (Desktop) */}
        <div className="nav-capsule-links desktop-only" role="menubar">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`nav-capsule-item ${isActive ? "is-active" : ""}`}
                role="menuitem"
                aria-current={isActive ? "page" : undefined}
              >
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Mobile-Only Active Section Chip */}
        <div className="mobile-active-chip mobile-only" aria-hidden="true">
          <span className="chip-indicator" />
          <span className="chip-text">{activeLabel}</span>
        </div>

        <div className="nav-capsule-divider" aria-hidden="true" />

        {/* Segment 3: Social & Theme Controls */}
        <div className="nav-capsule-utilities">
          <a
            href={personalInfo.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-utility-btn desktop-only"
            aria-label="GitHub Profile"
            title="GitHub: @krutika-codesdev"
          >
            <GithubIcon size={14} />
          </a>

          <a
            href={personalInfo.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-utility-btn desktop-only"
            aria-label="LinkedIn Profile"
            title="LinkedIn: Krutika Mohanty"
          >
            <LinkedinIcon size={14} />
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            className="nav-utility-btn nav-theme-toggle"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="nav-utility-btn mobile-toggle-btn mobile-only"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Panel */}
      {mobileOpen && (
        <div className="nav-mobile-dropdown" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          <div className="mobile-dropdown-links">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`mobile-dropdown-item ${isActive ? "is-active" : ""}`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="mobile-active-pip" />}
                </a>
              );
            })}
          </div>

          <div className="mobile-dropdown-divider" />

          <div className="mobile-dropdown-socials">
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-link"
            >
              <GithubIcon size={14} />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-link"
            >
              <LinkedinIcon size={14} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
