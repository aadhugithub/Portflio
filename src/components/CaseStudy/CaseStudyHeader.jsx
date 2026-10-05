import React from 'react';
import { Link } from 'react-router-dom';
import { useCMS } from '../../cms/CmsContext';

export const CaseStudyHeader = ({ project }) => {
  const { profile } = useCMS();

  return (
    <header className="case-study-header">
      {/* Mobile: back link pinned at top of page (shown only on mobile via CSS) */}
      <Link to="/" className="case-study-mobile-back">
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
        Back
      </Link>

      {/* Desktop: logo-nav */}
      <div className="case-study-top-nav">
        <Link to="/" className="identity-logo" title="Back to home">
          <svg
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            style={{ width: 20, height: 20 }}
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="3" fill="currentColor" />
          </svg>
        </Link>
      </div>

      {/* Title */}
      <h1 className="case-study-title">{project.title}</h1>

      {/* Meta */}
      <div className="case-study-meta">
        {[
          project.year,
          project.role,
          project.client ? `at ${project.client}` : null,
        ]
          .filter(Boolean)
          .join(' · ')}
      </div>
    </header>
  );
};
