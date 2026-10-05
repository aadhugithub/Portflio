import React from 'react';
import { useCMS } from '../../cms/CmsContext';

export const ConnectEditor = () => {
  const { connect, updateConnect } = useCMS();

  const handleLinkChange = (id, field, value) => {
    const updated = connect.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    updateConnect(updated);
  };

  const handleToggle = (id) => {
    const updated = connect.map((item) =>
      item.id === id ? { ...item, enabled: item.enabled === false ? true : false } : item
    );
    updateConnect(updated);
  };

  const handleAddLink = () => {
    const newId = `link-${Date.now()}`;
    const newLink = {
      id: newId,
      label: 'New Link',
      url: 'https://',
      enabled: true
    };
    updateConnect([...connect, newLink]);
  };

  const handleDelete = (id) => {
    updateConnect(connect.filter((item) => item.id !== id));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div className="cms-card">
        <div className="cms-card-header">
          <span className="cms-card-title">Connect & Social Links</span>
          <button type="button" className="cms-btn cms-btn-primary" onClick={handleAddLink}>
            + Add Link
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {connect.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                padding: '10px',
                backgroundColor: '#121215',
                border: '1px solid var(--border-subtle)',
                borderRadius: '4px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label className="cms-switch-wrapper">
                  <div
                    className={`cms-switch ${item.enabled !== false ? 'active' : ''}`}
                    onClick={() => handleToggle(item.id)}
                  >
                    <div className="cms-switch-handle"></div>
                  </div>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                    {item.enabled !== false ? 'Enabled' : 'Disabled'}
                  </span>
                </label>

                <button
                  type="button"
                  className="cms-btn cms-btn-sm cms-btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  ✕
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '8px' }}>
                <input
                  type="text"
                  className="cms-input"
                  value={item.label || ''}
                  onChange={(e) => handleLinkChange(item.id, 'label', e.target.value)}
                  placeholder="Label (e.g. LinkedIn)"
                />
                <input
                  type="text"
                  className="cms-input cms-input-mono"
                  value={item.url || ''}
                  onChange={(e) => handleLinkChange(item.id, 'url', e.target.value)}
                  placeholder="URL (e.g. https://... or mailto:...)"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
