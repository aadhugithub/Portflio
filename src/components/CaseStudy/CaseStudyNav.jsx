import React from 'react';
import { Link } from 'react-router-dom';
import { useCMS } from '../../cms/CmsContext';

export const CaseStudyNav = ({ currentSlug }) => {
  const { projects } = useCMS();

  if (!projects || projects.length <= 1) {
    return (
      <nav className="case-study-footer-nav">
        <Link to="/">← Back to overview</Link>
      </nav>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <nav className="case-study-footer-nav" aria-label="Project navigation">
      <div>
        {prevProject ? (
          <Link to={`/work/${prevProject.slug}`}>
            ← {prevProject.title}
          </Link>
        ) : (
          <Link to="/">← Home</Link>
        )}
      </div>

      <div>
        {nextProject ? (
          <Link to={`/work/${nextProject.slug}`}>
            {nextProject.title} →
          </Link>
        ) : (
          <Link to="/">Back to top ↑</Link>
        )}
      </div>
    </nav>
  );
};
