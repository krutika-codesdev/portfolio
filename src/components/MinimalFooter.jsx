import React from "react";
import { ArrowUp } from "lucide-react";

export default function MinimalFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="minimal-art-footer">
      <div className="section-container-wide">
        <div className="footer-flex-row">
          <div className="footer-brand-side">
            <span className="footer-author">KRUTIKA MOHANTY</span>
            <span className="footer-loc">BENGALURU, INDIA</span>
          </div>

          <div className="footer-copyright-side">
            <span className="footer-year">&copy; 2026</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="btn-back-top"
              aria-label="Scroll back to top"
            >
              <span>TOP</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
