import React from "react";
import { certificatesData } from "../data/portfolioData";

export default function ActivitiesAndCredentials() {
  const activities = [
    {
      code: "IPL",
      title: "INTENSE PROGRAMMING LEAGUE",
      role: "Algorithmic challenges & competitive problem solving"
    },
    {
      code: "UNIHACK",
      title: "UNIHACK / UNILOG",
      role: "Technical challenge context in which VeritasIQ was developed"
    },
    {
      code: "AWS",
      title: "AWS LAUNCHPAD",
      role: "Cloud workloads & foundational AI technical workshop sessions"
    },
    {
      code: "COMMUNITY",
      title: "GDG & IEEE STUDENT BRANCH",
      role: "Technical developer meetups, workshops, and engineering collaboration"
    }
  ];

  return (
    <section id="programs" className="programs-credentials-section">
      <div className="section-container-wide">
        {/* Balanced Horizontal 50% / 50% Split */}
        <div className="dual-column-balanced-layout">
          {/* Left Column (50%): Activities & Programs */}
          <div className="dual-side-pane pane-activities">
            <span className="spatial-pane-eyebrow">// PROGRAMS &amp; HACKATHONS</span>
            <div className="activities-masthead">
              <span className="giant-year-tag">2026</span>
              <span className="year-context-label">Competitive Programming &middot; Challenge Contexts</span>
            </div>

            <div className="activities-index-list">
              {activities.map((item) => (
                <div key={item.title} className="activity-row-item">
                  <div className="act-row-top">
                    <span className="act-badge-code">{item.code}</span>
                    <h3 className="act-heading-text">{item.title}</h3>
                  </div>
                  <p className="act-detail-scope">{item.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (50%): Qualifications & Credentials */}
          <div className="dual-side-pane pane-credentials">
            <span className="spatial-pane-eyebrow">// CREDENTIALS</span>
            <div className="credentials-masthead">
              <h2 className="credentials-pane-title">QUALIFICATIONS</h2>
              <span className="cred-context-label">Verified course completions</span>
            </div>

            <div className="credentials-editorial-table">
              {certificatesData.map((cert) => (
                <div key={cert.id} className="cred-editorial-row">
                  <div className="cred-info-stack">
                    <h3 className="cred-name-upper">{cert.title}</h3>
                    <span className="cred-issuer-text">{cert.issuer}</span>
                  </div>
                  <span className="cred-year-pill">2026</span>
                  <div className="cred-hover-hairline" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
