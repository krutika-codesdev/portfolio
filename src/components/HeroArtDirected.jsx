import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { ArrowDown, ArrowUpRight, Terminal, Sliders, CheckCircle2, Code2 } from "lucide-react";

export default function HeroArtDirected() {
  const [activeTab, setActiveTab] = useState("code");

  const scrollToWork = (e) => {
    e.preventDefault();
    const workElement = document.getElementById("work");
    if (workElement) {
      const content = workElement.querySelector(".section-container-wide") || workElement;
      const navClearance = window.innerWidth <= 640 ? 70 : 82;
      const targetPos = content.getBoundingClientRect().top + window.scrollY - navClearance;
      window.scrollTo({
        top: Math.max(0, targetPos),
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="hero-spatial-canvas" aria-label="Introduction and Overview">
      <div className="hero-canvas-inner">
        {/* Top Spatial Metadata Bar */}
        <div className="hero-top-spatial-bar">
          <div className="top-bar-left">
            <span className="hero-location-text">BENGALURU, INDIA</span>
            <span className="bar-separator">&middot;</span>
            <span className="hero-term-spec">CSE FOUNDATION</span>
          </div>

          <div className="top-bar-right">
            <div className="hero-status-pill">
              <span className="pulsing-emerald-dot" />
              <span>AVAILABLE FOR SOFTWARE INTERNSHIPS</span>
            </div>
          </div>
        </div>

        {/* 2-Column Asymmetric Spatial Grid */}
        <div className="hero-spatial-grid">
          {/* Left Column: Name, Headline, Metadata & CTAs */}
          <div className="hero-brand-column">
            {/* Primary Name Display */}
            <div className="hero-name-block">
              <h1 className="hero-display-name">
                <span className="display-name-word">KRUTIKA</span>
                <span className="display-name-word name-highlight">MOHANTY</span>
              </h1>
            </div>

            {/* Headline Statement */}
            <div className="hero-positioning-block">
              <p className="hero-headline-text">
                Building practical software,
                <br />
                <span className="headline-muted-text">one problem at a time.</span>
              </p>

              {/* Visually Secondary Supporting Metadata */}
              <div className="hero-academic-kicker">
                <span className="kicker-tag">CSE @ REVA UNIVERSITY</span>
                <span className="kicker-dot">&middot;</span>
                <span className="kicker-badge-cgpa">CGPA 10.0</span>
                <span className="kicker-dot">&middot;</span>
                <span className="kicker-domains">SYSTEMS &middot; WEB &middot; AI</span>
              </div>
            </div>

            {/* Clickable Action Buttons */}
            <div className="hero-cta-cluster">
              <a
                href="#work"
                onClick={scrollToWork}
                className="btn-hero-solid"
              >
                <span>VIEW WORK</span>
                <ArrowDown size={14} className="btn-arrow-down" />
              </a>

              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-ghost"
                aria-label="Inspect GitHub Repositories"
              >
                <span>GITHUB</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-ghost"
                aria-label="Connect on LinkedIn"
              >
                <span>LINKEDIN</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Column: Developer Systems Workbench Artifact */}
          <div className="hero-schematic-column">
            <div className="workbench-frame-wrap">
              <div className="workbench-meta-lead">
                <span className="workbench-label">// RUNTIME ARTIFACT &middot; SYSTEMS BENCH</span>
                <span className="workbench-coord-tag">SRC: systems/core</span>
              </div>

              <div className="hero-workbench-card">
                {/* Workbench Window Header */}
                <div className="workbench-header">
                  <div className="terminal-dots" aria-hidden="true">
                    <span className="term-dot red" />
                    <span className="term-dot yellow" />
                    <span className="term-dot green" />
                  </div>

                  <div className="workbench-tabs" role="tablist" aria-label="Workbench inspector tabs">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={activeTab === "code"}
                      onClick={() => setActiveTab("code")}
                      className={`workbench-tab-btn ${activeTab === "code" ? "is-active" : ""}`}
                    >
                      <Code2 size={12} />
                      <span>buffer_alloc.c</span>
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={activeTab === "runtime"}
                      onClick={() => setActiveTab("runtime")}
                      className={`workbench-tab-btn ${activeTab === "runtime" ? "is-active" : ""}`}
                    >
                      <Sliders size={12} />
                      <span>runtime.sys</span>
                    </button>
                  </div>

                  <span className="workbench-badge">C99 / POSIX</span>
                </div>

                {/* Workbench Body */}
                <div className="workbench-body">
                  {activeTab === "code" ? (
                    <div className="workbench-code-view">
                      <div className="code-line-numbers" aria-hidden="true">
                        <span>01</span>
                        <span>02</span>
                        <span>03</span>
                        <span>04</span>
                        <span>05</span>
                        <span>06</span>
                        <span>07</span>
                        <span>08</span>
                        <span>09</span>
                        <span>10</span>
                        <span>11</span>
                      </div>
                      <pre className="code-content-block">
                        <code>
                          <span className="syntax-comment">// Systems buffer allocation &amp; pointer mechanics</span>{`\n`}
                          <span className="syntax-keyword">typedef struct</span> &#123;{`\n`}
                          {"    "}<span className="syntax-type">uint8_t</span>  *framebuffer;{`\n`}
                          {"    "}<span className="syntax-type">size_t</span>    capacity;{`\n`}
                          {"    "}<span className="syntax-type">uint16_t</span>  width, height;{`\n`}
                          &#125; <span className="syntax-identifier">CanvasBuffer</span>;{`\n\n`}
                          <span className="syntax-type">int</span> <span className="syntax-fn">init_buffer</span>(<span className="syntax-identifier">CanvasBuffer</span> *buf, <span className="syntax-type">size_t</span> cap) &#123;{`\n`}
                          {"    "}buf-&gt;framebuffer = (<span className="syntax-type">uint8_t</span> *)<span className="syntax-fn">malloc</span>(cap);{`\n`}
                          {"    "}<span className="syntax-keyword">if</span> (!buf-&gt;framebuffer) <span className="syntax-keyword">return</span> -1;{`\n`}
                          {"    "}<span className="syntax-fn">memset</span>(buf-&gt;framebuffer, 0, cap);{`\n`}
                          {"    "}<span className="syntax-keyword">return</span> 0; <span className="syntax-comment">// Deterministic memory</span>{`\n`}
                          &#125;
                        </code>
                      </pre>
                    </div>
                  ) : (
                    <div className="workbench-runtime-view">
                      <div className="runtime-spec-grid">
                        <div className="runtime-spec-item">
                          <span className="spec-label">TARGET ARCHITECTURE</span>
                          <span className="spec-value">x86_64 / Standard POSIX</span>
                        </div>
                        <div className="runtime-spec-item">
                          <span className="spec-label">SYSTEM COMPILERS</span>
                          <span className="spec-value">GCC -O2 &middot; Clang (C99 / C++17)</span>
                        </div>
                        <div className="runtime-spec-item">
                          <span className="spec-label">MEMORY MODEL</span>
                          <span className="spec-value">Manual Heap (malloc/free) &middot; Audited</span>
                        </div>
                        <div className="runtime-spec-item">
                          <span className="spec-label">MODERN WEB STACK</span>
                          <span className="spec-value">Semantic HTML5 &middot; CSS Tokens &middot; React</span>
                        </div>
                        <div className="runtime-spec-item">
                          <span className="spec-label">DATA &amp; AI INTEGRATION</span>
                          <span className="spec-value">SQLite DBMS &middot; Pydantic &middot; REST APIs</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Workbench Footer Status Strip */}
                <div className="workbench-footer">
                  <div className="wb-footer-left">
                    <Terminal size={12} className="wb-term-icon" />
                    <span className="wb-cmd-text">gcc -std=c99 -Wall -Wextra</span>
                  </div>
                  <div className="wb-footer-right">
                    <CheckCircle2 size={12} className="wb-status-ok" />
                    <span className="wb-status-text">BUILD: PASS (0 ERRORS)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Technical Ticker */}
        <div className="hero-technical-ticker">
          <span className="ticker-label">STACK MATRIX</span>
          <div className="ticker-items">
            <span>C</span>
            <span className="ticker-dot">&middot;</span>
            <span>PYTHON</span>
            <span className="ticker-dot">&middot;</span>
            <span>JAVA</span>
            <span className="ticker-dot">&middot;</span>
            <span>SQL</span>
            <span className="ticker-dot">&middot;</span>
            <span>WEB</span>
            <span className="ticker-dot">&middot;</span>
            <span>SYSTEMS</span>
            <span className="ticker-dot">&middot;</span>
            <span>AI</span>
            <span className="ticker-dot">&middot;</span>
            <span>DATA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
