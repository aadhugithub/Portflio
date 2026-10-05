import React from 'react';
import { useCMS } from '../../cms/CmsContext';

export const AboutEditor = () => {
  const { about, updateAbout } = useCMS();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div className="cms-card">
        <div className="cms-card-header">
          <span className="cms-card-title">About Section</span>
        </div>

        <div className="cms-field-group">
          <label className="cms-label">Section Heading</label>
          <input
            type="text"
            className="cms-input"
            value={about.title || ''}
            onChange={(e) => updateAbout({ title: e.target.value })}
            placeholder="About"
          />
        </div>

        <div className="cms-field-group">
          <label className="cms-label">
            <span>Introduction Text</span>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Supports Markdown links [Label](url)</span>
          </label>
          <textarea
            className="cms-textarea"
            style={{ minHeight: '160px' }}
            value={about.content || ''}
            onChange={(e) => updateAbout({ content: e.target.value })}
            placeholder="Write your editorial introduction..."
          />
          <span className="cms-helper">
            Tip: Separate paragraphs with a blank line. Use [Label](https://...) for clickable links.
          </span>
        </div>
      </div>
    </div>
  );
};
