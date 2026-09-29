import React from "react";
import { personalInfo } from "../data/portfolioData";

export default function IdentityBentoGrid() {
  const disciplines = [
    { num: "01", name: "Systems & Low-Level Code", detail: "Memory allocation, pointers, procedural C routines" },
    { num: "02", name: "Modern Web Engineering", detail: "Responsive architecture, React, state management, CSS tokens" },
    { num: "03", name: "AI Validation & Pipelines", detail: "Pydantic typed models, multi-source ingestion, entity validation" }
  ];

  return (
    <section id="about" className="about-editorial-section" aria-label="About Krutika Mohanty">
      <div className="section-container-wide">
        <div className="about-editorial-grid">
          {/* Left Column: Editorial Philosophy & Narrative */}
          <div className="about-editorial-left">
            <span className="spatial-pane-eyebrow">// FOUNDATION &amp; TRAJECTORY</span>
            <h2 className="about-editorial-heading">ENGINEERING FOUNDATION</h2>

            <div className="about-editorial-narrative">
              <p className="narrative-lead">
                I am a Computer Science &amp; Engineering student at REVA University focused on developing into a technically rigorous software developer.
              </p>
              <p className="narrative-body">
                Rather than treating software as abstract theory, I prioritize building tangible applications—from low-level 2D raster routines in C to multi-stage AI validation pipelines like VeritasIQ. My trajectory spans procedural logic, normalized relational schemas, and modern web architectures.
              </p>
            </div>

            {/* Core Disciplines List */}
            <div className="about-disciplines-block">
              <span className="disciplines-label">ACTIVE DISCIPLINES</span>
              <div className="disciplines-list">
                {disciplines.map((item) => (
                  <div key={item.num} className="discipline-item">
                    <span className="discipline-num">{item.num}</span>
                    <div className="discipline-info">
                      <span className="discipline-name">{item.name}</span>
                      <span className="discipline-detail">{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Academic Foundation & Excellence (Open Editorial Layout) */}
          <div className="about-editorial-right">
            {/* Academic Standing Heroic Stat */}
            <div className="editorial-stat-pod">
              <span className="pod-eyebrow">ACADEMIC STANDING</span>
              <div className="pod-number-row">
                <span className="pod-huge-val">{personalInfo.education.cgpa}</span>
                <span className="pod-stat-unit">CGPA</span>
              </div>
              <p className="pod-context-note">
                Academic foundation across core computer science coursework at REVA University.
              </p>
            </div>

            {/* Academic Institution Specs */}
            <div className="editorial-institution-pod">
              <span className="pod-eyebrow">EDUCATION RECORD</span>
              <h3 className="pod-inst-title">{personalInfo.education.institution}</h3>
              <p className="pod-inst-degree">{personalInfo.education.degree}</p>
              <div className="pod-meta-tags">
                <span className="pod-pill">Batch 2025–2029</span>
                <span className="pod-dot">&middot;</span>
                <span className="pod-loc">Bengaluru, India</span>
              </div>
            </div>

            {/* Practical Approach Statement */}
            <div className="editorial-focus-note">
              <span className="pod-eyebrow">WORKING METHODOLOGY</span>
              <p className="methodology-text">
                Committed to writing robust, maintainable code with deterministic behavior, strong data models, and transparent validation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
