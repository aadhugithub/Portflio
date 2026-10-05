import React from 'react';
import { useCMS } from '../../cms/CmsContext';

export const FooterEditor = () => {
  const { footer, updateFooter } = useCMS();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div className="cms-card">
        <div className="cms-card-header">
          <span className="cms-card-title">Footer Settings</span>
        </div>

        <div className="cms-field-group">
          <label className="cms-label">Copyright Text</label>
          <input
            type="text"
            className="cms-input"
            value={footer?.copyright || ''}
            onChange={(e) => updateFooter({ copyright: e.target.value })}
            placeholder="e.g. © 2026"
          />
        </div>
      </div>
    </div>
  );
};
