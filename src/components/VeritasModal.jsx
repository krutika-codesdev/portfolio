import { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, Layers, ShieldCheck } from 'lucide-react';
import { veritasIQData } from '../data/portfolioData';

export default function VeritasModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('pipeline'); // 'pipeline' | 'engineering'
  const closeBtnRef = useRef(null);
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="veritas-modal-title">
      <div ref={modalRef} className="modal-sheet" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '880px' }}>
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

        {/* Modal Header */}
        <div style={{ paddingRight: '2.5rem', marginBottom: '1.5rem' }}>
          <div className="bento-pill bento-pill-blue" style={{ marginBottom: '0.4rem' }}>
            <Layers size={13} />
            <span>Architecture &amp; Engineering Specification</span>
          </div>
          <h3 id="veritas-modal-title" style={{ fontSize: '1.85rem', fontWeight: 900, color: 'var(--text-primary)' }}>
            {veritasIQData.title} &bull; 11-Stage Pipeline
          </h3>
          <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
            {veritasIQData.overview}
          </p>
        </div>

        {/* Tab Toggle */}
        <div role="tablist" aria-label="VeritasIQ Specification Views" style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            role="tab"
            id="tab-pipeline"
            aria-selected={activeTab === 'pipeline'}
            aria-controls="panel-pipeline"
            className={`btn-pill ${activeTab === 'pipeline' ? 'btn-pill-solid' : 'btn-pill-subtle'}`}
            style={{ padding: '0.45rem 1rem', fontSize: '0.8rem' }}
            onClick={() => setActiveTab('pipeline')}
          >
            11-Stage Processing Flow
          </button>
          <button
            type="button"
            role="tab"
            id="tab-engineering"
            aria-selected={activeTab === 'engineering'}
            aria-controls="panel-engineering"
            className={`btn-pill ${activeTab === 'engineering' ? 'btn-pill-solid' : 'btn-pill-subtle'}`}
            style={{ padding: '0.45rem 1rem', fontSize: '0.8rem' }}
            onClick={() => setActiveTab('engineering')}
          >
            Key Engineering Work
          </button>
        </div>

        {/* TAB 1: 11-Stage Pipeline Flow */}
        {activeTab === 'pipeline' && (
          <div
            id="panel-pipeline"
            role="tabpanel"
            aria-labelledby="tab-pipeline"
            tabIndex={0}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '0.75rem', maxHeight: '50vh', overflowY: 'auto', paddingRight: '0.5rem' }}>
              {veritasIQData.architecture.map((stage) => (
                <div
                  key={stage.name}
                  style={{
                    padding: '1rem',
                    borderRadius: 'var(--radius-bento)',
                    background: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-cobalt)', fontWeight: 700 }}>
                      STAGE 0{stage.step}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {stage.name}
                  </h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                    {stage.detail}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1.25rem', padding: '0.85rem 1.15rem', background: 'var(--accent-subtle)', borderRadius: 'var(--radius-bento)', border: '1px solid var(--border-accent)', display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              <ShieldCheck size={16} style={{ color: 'var(--accent-cobalt)', flexShrink: 0 }} />
              <span>
                <strong>Architectural Integrity:</strong> Ingestion &rarr; Mapping &rarr; Pydantic &rarr; Matcher &rarr; Normalizer &rarr; Validator &rarr; Evidence &rarr; Explainability &rarr; Health Scoring &rarr; SQLite &rarr; Streamlit UI.
              </span>
            </div>
          </div>
        )}

        {/* TAB 2: Key Engineering Work */}
        {activeTab === 'engineering' && (
          <div
            id="panel-engineering"
            role="tabpanel"
            aria-labelledby="tab-engineering"
            tabIndex={0}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem', maxHeight: '50vh', overflowY: 'auto', paddingRight: '0.5rem' }}
          >
            {veritasIQData.keyEngineeringWork.map((work) => (
              <div
                key={work.title}
                style={{
                  padding: '1.15rem',
                  borderRadius: 'var(--radius-bento)',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--accent-cobalt)', fontWeight: 700, fontSize: '0.9rem' }}>
                  <CheckCircle2 size={15} />
                  <span>{work.title}</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {work.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Footer Actions */}
        <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            System Outcome: {veritasIQData.outcome}
          </div>

          <button
            type="button"
            className="btn-pill btn-pill-solid"
            onClick={onClose}
          >
            <span>Close Specification</span>
          </button>
        </div>
      </div>
    </div>
  );
}
