import React, { useState, useEffect } from 'react';

export const TableOfContents = ({ blocks }) => {
  const [activeId, setActiveId] = useState('');

  // Extract all heading blocks
  const headings = (blocks || [])
    .filter((b) => b.type === 'heading')
    .map((b) => ({
      id: b.content?.toLowerCase().replace(/[^\w]+/g, '-'),
      text: b.content,
      level: b.level || 2,
    }));

  useEffect(() => {
    if (headings.length === 0) return;

    const handleScroll = () => {
      const headingElements = headings
        .map((h) => document.getElementById(h.id))
        .filter(Boolean);
      const scrollPosition = window.scrollY + 120;

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const el = headingElements[i];
        if (el && el.getBoundingClientRect().top + window.scrollY <= scrollPosition) {
          setActiveId(el.id);
          return;
        }
      }
      // If nothing matched, set first as active
      if (headingElements[0]) setActiveId(headingElements[0].id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blocks]);

  if (headings.length === 0) return null;

  return (
    // Position is controlled entirely in CSS: fixed on desktop, hidden on mobile
    <aside className="toc-sidebar" aria-label="Table of contents">
      <div className="toc-header">Content</div>
      <ul className="toc-list">
        {headings.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`toc-link ${activeId === item.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById(item.id);
                if (target) {
                  const offset = 90;
                  window.scrollTo({
                    top: target.getBoundingClientRect().top + window.scrollY - offset,
                    behavior: 'smooth',
                  });
                }
              }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
