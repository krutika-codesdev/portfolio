import React from "react";

export default function TechnicalArsenal() {
  const domainBlocks = [
    {
      domain: "PROGRAMMING & SYSTEMS",
      focus: "Procedural logic, memory handling, object-oriented concepts",
      skills: ["C", "Python", "Java", "C++"]
    },
    {
      domain: "WEB DEVELOPMENT",
      focus: "Responsive design tokens, accessibility, modern web architectures",
      skills: ["HTML5", "CSS3", "JavaScript", "Modern Web"]
    },
    {
      domain: "DATA & STORAGE",
      focus: "Relational queries, ACID schemas, normalized database models",
      skills: ["SQL", "MySQL", "SQLite", "DBMS"]
    },
    {
      domain: "AI & DEVELOPER TOOLS",
      focus: "Version control, reactive UIs, AI enrichment integrations",
      skills: ["Git", "GitHub", "Streamlit", "REST APIs", "Gemini API"]
    }
  ];

  return (
    <section id="arsenal" className="arsenal-landscape-section">
      <div className="section-container-wide">
        <div className="arsenal-header-row">
          <div>
            <span className="spatial-pane-eyebrow">// TECHNICAL ARSENAL</span>
            <h2 className="arsenal-giant-heading">CAPABILITIES &amp; DOMAINS</h2>
          </div>
          <span className="arsenal-sub-tag">Systems &middot; Web &middot; Data &middot; AI</span>
        </div>

        {/* 4-Domain Visual Technical Landscape */}
        <div className="arsenal-domains-landscape">
          {domainBlocks.map((block) => (
            <div key={block.domain} className="domain-card-block">
              <div className="domain-card-head">
                <h3 className="domain-title">{block.domain}</h3>
                <span className="domain-sub-focus">{block.focus}</span>
              </div>

              <div className="domain-skills-matrix">
                {block.skills.map((skill) => (
                  <span key={skill} className="domain-skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
