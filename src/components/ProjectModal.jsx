import { useEffect, useRef } from 'react';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  const closeBtnRef = useRef(null);
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    // Save previous active element to restore focus when modal closes
    previousFocusRef.current = document.activeElement;

    // Lock body scroll
    document.body.style.overflow = 'hidden';

    // Move focus inside dialog
    const timer = setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // Accessible Focus Trap within modal sheet
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      if (previousFocusRef.current && typeof previousFocusRef.current.focus === 'function') {
        previousFocusRef.current.focus();
      }
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
      <div ref={modalRef} className="modal-sheet" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          className="dock-icon-btn"
          style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', width: 34, height: 34 }}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <div style={{ paddingRight: '2rem' }}>
          <span className="bento-pill bento-pill-blue" style={{ marginBottom: '0.4rem' }}>
            {project.category}
          </span>
          <h3 id="project-modal-title" style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
            {project.title}
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            {project.description}
          </p>
        </div>

        {/* Technologies Used */}
        <div style={{ marginTop: '1.25rem' }}>
          <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
            Verified Technologies
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
            {project.technologies.map((t) => (
              <span key={t} className="bento-pill" style={{ fontSize: '0.78rem' }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Engineering Highlights */}
        {project.highlights && (
          <div style={{ marginTop: '1.25rem' }}>
            <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
              Key Technical Implementation Points
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {project.highlights.map((h, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={15} style={{ color: 'var(--accent-emerald)', marginTop: '0.15rem', flexShrink: 0 }} />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Controls */}
        <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            Verified Project Record
          </div>

          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-solid"
                style={{ padding: '0.45rem 1rem', fontSize: '0.8rem' }}
              >
                <GithubIcon size={14} />
                <span>View on GitHub</span>
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-primary"
                style={{ padding: '0.45rem 1rem', fontSize: '0.8rem' }}
              >
                <ExternalLink size={14} />
                <span>Live Demo</span>
              </a>
            )}

            <button
              type="button"
              className="btn-pill btn-pill-subtle"
              style={{ padding: '0.45rem 1rem', fontSize: '0.8rem' }}
              onClick={onClose}
            >
              <span>Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
