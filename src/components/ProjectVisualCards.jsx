import React from "react";
import { otherProjects } from "../data/portfolioData";
import { ArrowUpRight, Terminal, Sliders } from "lucide-react";

export default function ProjectVisualCards({ onSelectProject }) {
  const graphicsProject = otherProjects.find((p) => p.id === "graphics-editor-c");
  const cProgrammingProject = otherProjects.find((p) => p.id === "c-programming");

  // Authentic 8x8 Raster Canvas Matrix
  const pixelGrid = [
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
  ];

  return (
    <section id="projects" className="projects-asymmetric-section">
      <div className="section-container-wide">
        <div className="projects-header-row">
          <div>
            <span className="spatial-pane-eyebrow">// SYSTEMS &amp; LOW-LEVEL CODE</span>
            <h2 className="projects-giant-heading">SYSTEMS PROJECTS</h2>
          </div>
          <span className="projects-sub-tag">C99 &middot; Direct Memory Management &middot; Algorithms</span>
        </div>

        {/* Asymmetric 7-col / 5-col Staggered Portfolio Layout */}
        <div className="projects-asymmetric-layout">
          {/* Piece 1 (7 cols): Graphics Editor in C with Pixel Raster Canvas Graphic */}
          {graphicsProject && (
            <div className="portfolio-piece-card card-graphics">
              <div className="piece-meta-row">
                <span className="piece-domain-tag">C / 2D SYSTEMS</span>
                <a
                  href={graphicsProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="piece-github-btn"
                  title="Source on GitHub"
                  aria-label="Inspect Graphics Editor in C on GitHub"
                >
                  <span>GITHUB</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>

              <h3 className="piece-heading-title">{graphicsProject.title}</h3>

              {/* Technical Visual Graphic: 2D Pixel Raster Canvas */}
              <div className="piece-graphic-frame frame-pixel-canvas">
                <div className="graphic-meta-strip">
                  <span className="graphic-label-text">2D RASTER BUFFER MATRIX</span>
                  <span className="graphic-sub-text">COORD: [0..7, 0..7]</span>
                </div>
                <div className="raster-pixel-matrix" role="img" aria-label="Pixel raster buffer">
                  {pixelGrid.map((row, rIdx) => (
                    <div key={rIdx} className="raster-row">
                      {row.map((active, cIdx) => (
                        <span
                          key={cIdx}
                          className={`raster-cell ${active ? "active-cell" : ""}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
                <div className="graphic-meta-foot">
                  <span>Direct memory allocation &bull; 2D coordinate rasterization</span>
                </div>
              </div>

              <p className="piece-short-scope">
                Low-level 2D canvas manipulation and pixel rendering application in standard C demonstrating manual memory buffer management.
              </p>

              <div className="piece-card-foot">
                <div className="piece-tags-group">
                  <span>C</span>
                  <span>Memory Management</span>
                  <span>2D Graphics</span>
                </div>
                <button
                  type="button"
                  onClick={() => onSelectProject(graphicsProject)}
                  className="btn-piece-specs"
                  aria-label={`Inspect ${graphicsProject.title} specifications`}
                >
                  <Sliders size={13} />
                  <span>Inspect Specs</span>
                </button>
              </div>
            </div>
          )}

          {/* Piece 2 (5 cols): C Programming Repository with Terminal Code Snippet Graphic */}
          {cProgrammingProject && (
            <div className="portfolio-piece-card card-c-programming">
              <div className="piece-meta-row">
                <span className="piece-domain-tag">PROCEDURAL C / ALGORITHMS</span>
                <a
                  href={cProgrammingProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="piece-github-btn"
                  title="Source on GitHub"
                  aria-label="Inspect C Programming Repository on GitHub"
                >
                  <span>GITHUB</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>

              <h3 className="piece-heading-title">{cProgrammingProject.title}</h3>

              {/* Technical Visual Graphic: Authentic C Terminal Code Window */}
              <div className="piece-graphic-frame frame-terminal-code">
                <div className="graphic-meta-strip">
                  <div className="window-dots">
                    <span className="w-dot red" />
                    <span className="w-dot yellow" />
                    <span className="w-dot green" />
                  </div>
                  <span className="graphic-sub-text">arrays.c &middot; strings.c</span>
                </div>
                <pre className="terminal-code-display">
                  <code>
                    <span className="c-kw">void</span> <span className="c-fn">reverse_array</span>(<span className="c-kw">int</span> *arr, <span className="c-kw">int</span> len) &#123;{"\n"}
                    {"    "}<span className="c-kw">int</span> *start = arr, *end = arr + len - <span className="c-val">1</span>;{"\n"}
                    {"    "}<span className="c-kw">while</span> (start &lt; end) &#123;{"\n"}
                    {"        "}<span className="c-fn">swap_ptr</span>(start++, end--);{"\n"}
                    {"    "}&#125;{"\n"}
                    &#125;
                  </code>
                </pre>
                <div className="graphic-meta-foot">
                  <span>Pointer arithmetic &bull; Procedural C memory safety</span>
                </div>
              </div>

              <p className="piece-short-scope">
                Foundational implementations of core C programming concepts, structured exercises, array algorithms, and string manipulation.
              </p>

              <div className="piece-card-foot">
                <div className="piece-tags-group">
                  <span>C</span>
                  <span>Arrays</span>
                  <span>Strings</span>
                  <span>Algorithms</span>
                </div>
                <button
                  type="button"
                  onClick={() => onSelectProject(cProgrammingProject)}
                  className="btn-piece-specs"
                  aria-label={`Inspect ${cProgrammingProject.title} specifications`}
                >
                  <Terminal size={13} />
                  <span>Inspect Specs</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
