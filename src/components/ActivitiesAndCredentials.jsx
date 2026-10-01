import React, { useState } from "react";
import { certificatesData, courseActivitiesData, externalActivitiesData } from "../data/portfolioData";
import { ArrowUpRight } from "lucide-react";

export default function ActivitiesAndCredentials() {
  const [filter, setFilter] = useState("all");

  const allActivities = [...courseActivitiesData, ...externalActivitiesData];
  const displayedActivities = filter === "all"
    ? allActivities
    : allActivities.filter((item) => item.category === filter);

  return (
    <section id="programs" className="programs-credentials-section">
      <div className="section-container-wide">
        {/* Balanced Horizontal 50% / 50% Split */}
        <div className="dual-column-balanced-layout">
          {/* Left Column (50%): Activities & Programs */}
          <div className="dual-side-pane pane-activities">
            <span className="spatial-pane-eyebrow">// ACTIVITIES &amp; PROGRAMS</span>
            <div className="activities-masthead">
              <span className="giant-year-tag">2026</span>
              <span className="year-context-label">Portfolio Building (B25GE0101) &middot; Challenge Contexts</span>
            </div>

            {/* Segmented Filter Pills */}
            <div
              style={{ display: "flex", gap: "0.4rem", marginBottom: "1rem", flexWrap: "wrap" }}
              role="tablist"
              aria-label="Activities filter"
            >
              <button
                type="button"
                role="tab"
                aria-selected={filter === "all"}
                onClick={() => setFilter("all")}
                className={`btn-pill ${filter === "all" ? "btn-pill-solid" : "btn-pill-subtle"}`}
                style={{ padding: "0.25rem 0.65rem", fontSize: "0.72rem" }}
              >
                All ({allActivities.length})
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={filter === "coursework"}
                onClick={() => setFilter("coursework")}
                className={`btn-pill ${filter === "coursework" ? "btn-pill-solid" : "btn-pill-subtle"}`}
                style={{ padding: "0.25rem 0.65rem", fontSize: "0.72rem" }}
              >
                Course Activities (1–4)
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={filter === "programs"}
                onClick={() => setFilter("programs")}
                className={`btn-pill ${filter === "programs" ? "btn-pill-solid" : "btn-pill-subtle"}`}
                style={{ padding: "0.25rem 0.65rem", fontSize: "0.72rem" }}
              >
                Programs &amp; Hackathons
              </button>
            </div>

            <div className="activities-index-list">
              {displayedActivities.map((item) => (
                <div key={item.title} className="activity-row-item">
                  <div
                    className="act-row-top"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "0.5rem"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", minWidth: 0 }}>
                      <span className="act-badge-code">{item.code}</span>
                      <h3 className="act-heading-text">{item.title}</h3>
                    </div>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="piece-github-btn"
                        style={{ padding: "0.2rem 0.55rem", fontSize: "0.68rem", gap: "0.25rem", flexShrink: 0 }}
                        title={`Open ${item.title} on GitHub`}
                        aria-label={`Open ${item.title} on GitHub`}
                      >
                        <span>REPO</span>
                        <ArrowUpRight size={11} />
                      </a>
                    )}
                  </div>
                  <p className="act-detail-scope">{item.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (50%): Credentials */}
          <div className="dual-side-pane pane-credentials">
            <span className="spatial-pane-eyebrow">// CREDENTIALS</span>
            <div className="credentials-masthead">
              <h2 className="credentials-pane-title">CREDENTIALS</h2>
              <span className="cred-context-label">Course completions &middot; Technical programs</span>
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
