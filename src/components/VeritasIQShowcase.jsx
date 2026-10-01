import React from "react";
import { veritasIQData } from "../data/portfolioData";
import { ArrowRight, ArrowUpRight, Sparkles, FileSpreadsheet, Layers, ShieldCheck, Cpu, Database, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function VeritasIQShowcase({ onOpenArchitecture }) {
  const architecturalFlow = [
    { num: "01", name: "INGEST", tool: "PDF · CSV · XLSX Parsing", icon: FileSpreadsheet },
    { num: "02", name: "REPRESENT", tool: "Pydantic Strongly Typed Schemas", icon: Layers },
    { num: "03", name: "VALIDATE", tool: "Deterministic Rules & Normalization", icon: ShieldCheck },
    { num: "04", name: "ENRICH", tool: "Gemini API Contextual Taxonomies", icon: Cpu },
    { num: "05", name: "PERSIST", tool: "SQLite Storage & Health Scoring", icon: Database }
  ];

  return (
    <section id="work" className="veritas-case-study-section" aria-label="Flagship Project VeritasIQ">
      <div className="section-container-wide">
        {/* Case Study Section Masthead */}
        <div className="case-study-masthead">
          <div className="masthead-left">
            <span className="spatial-pane-eyebrow">// FLAGSHIP ARCHITECTURE CASE STUDY</span>
            <h2 className="case-study-giant-title">VERITASIQ</h2>
          </div>
          <div className="masthead-right">
            <span className="case-study-badge">AI PRODUCT INTELLIGENCE &middot; DATA VALIDATION</span>
            <span className="case-study-context">UniHack / Unilog Challenge Context</span>
          </div>
        </div>

        {/* 2-Column Balanced Case Study Composition */}
        <div className="case-study-grid">
          {/* Left Column: Problem, System Pillars, Stack & Spec Trigger */}
          <div className="case-study-narrative-pane">
            <p className="case-study-lead-statement">
              An automated multi-source ingestion pipeline engineered to solve heterogeneous catalog validation—parsing loose supplier documents into strictly typed models with verifiable audit trails.
            </p>

            <p className="case-study-detail-text">
              VeritasIQ reduces manual catalog normalization by systematically parsing unstructured PDFs, loose CSVs, and Excel spreadsheets. Ingested records are mapped into Pydantic models, enriched with contextual product classifications via the Gemini API, and evaluated with deterministic health scores stored in SQLite for transparent explainability.
            </p>

            {/* Architectural Highlights */}
            <div className="case-study-pillars-row">
              <div className="pillar-item">
                <CheckCircle2 size={13} className="pillar-icon" />
                <span>Strict Pydantic typing &amp; boundary checks</span>
              </div>
              <div className="pillar-item">
                <CheckCircle2 size={13} className="pillar-icon" />
                <span>Gemini API contextual taxonomy disambiguation</span>
              </div>
              <div className="pillar-item">
                <CheckCircle2 size={13} className="pillar-icon" />
                <span>SQLite persistent storage &amp; health scoring</span>
              </div>
            </div>

            {/* Verified Technologies */}
            <div className="case-study-tech-wrap">
              <span className="tech-wrap-label">VERIFIED STACK:</span>
              <div className="case-study-pills">
                {veritasIQData.techStack.map((tech) => (
                  <span key={tech} className="cs-tech-pill">{tech}</span>
                ))}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="case-study-action-row">
              <button
                type="button"
                onClick={onOpenArchitecture}
                className="btn-case-study-spec"
                aria-label="Explore VeritasIQ 11-Stage Architecture Specification"
              >
                <Sparkles size={14} />
                <span>EXPLORE 11-STAGE ARCHITECTURE</span>
                <ArrowRight size={14} className="arrow-hover-shift" />
              </button>
              {veritasIQData.github && (
                <a
                  href={veritasIQData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-case-study-repo"
                  aria-label="Open VeritasIQ repository on GitHub"
                >
                  <GithubIcon size={14} />
                  <span>GITHUB REPOSITORY</span>
                  <ArrowUpRight size={14} className="arrow-hover-shift" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Architectural Pipeline Canvas */}
          <div className="case-study-canvas-pane">
            <div className="pipeline-blueprint-canvas">
              <div className="blueprint-masthead">
                <div className="bp-masthead-title">
                  <span className="bp-pulse-dot" />
                  <span className="bp-title-text">PIPELINE DATA FLOW</span>
                </div>
                <span className="bp-stage-count">11-STAGE FLOW &middot; 5 PHASES</span>
              </div>

              {/* Connected Pipeline Nodes */}
              <div className="blueprint-nodes-sequence">
                {architecturalFlow.map((node, idx) => {
                  const Icon = node.icon;
                  return (
                    <React.Fragment key={node.num}>
                      <div className="blueprint-node-box">
                        <div className="bp-node-left">
                          <span className="bp-step-num">{node.num}</span>
                          <Icon size={14} className="bp-node-icon" />
                          <span className="bp-node-name">{node.name}</span>
                        </div>
                        <span className="bp-node-detail">{node.tool}</span>
                      </div>

                      {idx < architecturalFlow.length - 1 && (
                        <div className="bp-connector-row" aria-hidden="true">
                          <div className="bp-connector-line" />
                          <span className="bp-connector-arrow">&darr;</span>
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              <div className="blueprint-foot-strip">
                <span>Decoupled parsing &bull; Pydantic strict typing &bull; Reproducible validation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
