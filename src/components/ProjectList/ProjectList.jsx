import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCMS } from '../../cms/CmsContext';

// Category definitions — maps CMS `project.category` values to display labels
const CATEGORIES = [
  { id: 'products',    label: 'Products'    },
  { id: 'projects',   label: 'Projects'    },
  { id: 'agentic-ai', label: 'Agentic AI'  },
  { id: 'graphic',    label: 'Graphic'     },
];

export const ProjectList = () => {
  const { projects } = useCMS();
  const [othersOpen, setOthersOpen]       = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  if (!projects || projects.length === 0) {
    return (
      <p className="section-content" style={{ fontStyle: 'italic' }}>
        No case studies published yet.
      </p>
    );
  }

  // Featured projects — explicitly marked as featured, shown as main links
  const featuredProjects = projects
    .filter((p) => p.featured)
    .slice(0, 2);

  // Build a lookup: categoryId → array of projects
  const byCategory = {};
  CATEGORIES.forEach(({ id }) => {
    byCategory[id] = projects.filter((p) => p.category === id);
  });

  const handleCategoryClick = (catId) => {
    setActiveCategory((prev) => (prev === catId ? null : catId));
  };

  const activeCatProjects = activeCategory ? byCategory[activeCategory] ?? [] : [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>

      {/* ── 2 Featured case studies ─────────────────────────────────── */}
      <ul className="project-list">
        {featuredProjects.map((project) => (
          <li key={project.id || project.slug}>
            <Link
              to={`/work/${project.slug}`}
              className="project-item-link"
            >
              {project.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* ── "Others" toggle ────────────────────────────────────────── */}
      <button
        type="button"
        className="others-btn"
        onClick={() => {
          setOthersOpen((prev) => !prev);
          if (othersOpen) setActiveCategory(null);
        }}
        aria-expanded={othersOpen}
      >
        <span>Others</span>
        <span className={`others-btn-chevron ${othersOpen ? 'open' : ''}`}>▾</span>
      </button>

      {/* ── Expandable panel ───────────────────────────────────────── */}
      {othersOpen && (
        <div className="others-panel">

          {/* Category filter cards */}
          <div className="others-cards-row">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`category-card ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => handleCategoryClick(cat.id)}
              >
                {cat.label}
                {byCategory[cat.id]?.length > 0 && (
                  <span style={{
                    fontSize: '10px',
                    opacity: 0.6,
                    marginLeft: '4px',
                    fontFamily: 'var(--font-mono)',
                  }}>
                    {byCategory[cat.id].length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Selected category: project links — each navigates to /work/:slug */}
          {activeCategory && activeCatProjects.length > 0 && (
            <ul className="category-item-list">
              {activeCatProjects.map((project) => (
                <li key={project.id || project.slug}>
                  <Link
                    to={`/work/${project.slug}`}
                    className="category-item-link"
                  >
                    {project.title}
                    {project.year && (
                      <span className="category-item-year">{project.year}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/* Empty state */}
          {activeCategory && activeCatProjects.length === 0 && (
            <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', padding: '10px 14px' }}>
              No projects in this category yet.
            </p>
          )}
        </div>
      )}
    </div>
  );
};
