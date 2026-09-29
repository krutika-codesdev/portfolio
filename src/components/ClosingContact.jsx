import React from "react";
import { personalInfo } from "../data/portfolioData";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function ClosingContact() {
  return (
    <section id="contact" className="contact-monumental-section">
      <div className="section-container-wide">
        <div className="monumental-centered-wrap">
          <span className="contact-small-eyebrow">// DIRECT OUTREACH</span>

          <h2 className="monumental-headline-text">
            LET&apos;S BUILD.
          </h2>

          <p className="monumental-support-subhead">
            Open to software engineering internships &amp; technical projects.
          </p>

          <div className="monumental-actions-row">
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-monumental-solid"
              aria-label="Connect on LinkedIn"
            >
              <LinkedinIcon size={18} />
              <span>LINKEDIN</span>
              <ArrowUpRight size={16} />
            </a>

            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-monumental-ghost"
              aria-label="Inspect GitHub Repositories"
            >
              <GithubIcon size={18} />
              <span>GITHUB</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="monumental-status-footer">
            <span className="status-live-dot" />
            <span>Bengaluru, India &bull; Direct inquiries welcomed via LinkedIn</span>
          </div>
        </div>
      </div>
    </section>
  );
}
