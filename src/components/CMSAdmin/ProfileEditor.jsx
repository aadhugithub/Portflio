import React from 'react';
import { useCMS } from '../../cms/CmsContext';

export const ProfileEditor = () => {
  const { profile, updateProfile } = useCMS();

  const handleTextChange = (field, value) => {
    updateProfile({ [field]: value });
  };

  const handleCompanyChange = (field, value) => {
    updateProfile({
      company: {
        ...profile.company,
        [field]: value
      }
    });
  };

  const handleStatusChange = (field, value) => {
    updateProfile({
      status: {
        ...profile.status,
        [field]: value
      }
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Identity & Personal Info */}
      <div className="cms-card">
        <div className="cms-card-header">
          <span className="cms-card-title">Identity & Name</span>
        </div>

        <div className="cms-field-group">
          <label className="cms-label">Full Name</label>
          <input
            type="text"
            className="cms-input"
            value={profile.name || ''}
            onChange={(e) => handleTextChange('name', e.target.value)}
            placeholder="e.g. Adarsh N"
          />
        </div>

        <div className="cms-field-group">
          <label className="cms-label">Professional Title / Role</label>
          <input
            type="text"
            className="cms-input"
            value={profile.title || ''}
            onChange={(e) => handleTextChange('title', e.target.value)}
            placeholder="e.g. Product Designer or UI/UX Designer"
          />
          <span className="cms-helper">Changes display title on homepage and meta info</span>
        </div>
      </div>

      {/* Logo & Mark */}
      <div className="cms-card">
        <div className="cms-card-header">
          <span className="cms-card-title">Personal Mark / Logo</span>
        </div>

        <div className="cms-field-group">
          <label className="cms-label">Logo Type</label>
          <select
            className="cms-select"
            value={profile.logoType || 'icon'}
            onChange={(e) => handleTextChange('logoType', e.target.value)}
          >
            <option value="icon">Geometric Dot & Circle (Default SVG)</option>
            <option value="text">Monogram / Initials Text</option>
            <option value="image">Custom Image URL</option>
          </select>
        </div>

        {profile.logoType === 'text' && (
          <div className="cms-field-group">
            <label className="cms-label">Initials / Monogram Text</label>
            <input
              type="text"
              className="cms-input"
              value={profile.logoText || ''}
              onChange={(e) => handleTextChange('logoText', e.target.value)}
              placeholder="e.g. AN"
              maxLength={4}
            />
          </div>
        )}

        {profile.logoType === 'image' && (
          <div className="cms-field-group">
            <label className="cms-label">Logo Image URL</label>
            <input
              type="url"
              className="cms-input"
              value={profile.logoImage || ''}
              onChange={(e) => handleTextChange('logoImage', e.target.value)}
              placeholder="https://..."
            />
          </div>
        )}
      </div>

      {/* Company Affiliation */}
      <div className="cms-card">
        <div className="cms-card-header">
          <span className="cms-card-title">Company Affiliation</span>
          <label className="cms-switch-wrapper">
            <div
              className={`cms-switch ${profile.company?.enabled ? 'active' : ''}`}
              onClick={() => handleCompanyChange('enabled', !profile.company?.enabled)}
            >
              <div className="cms-switch-handle"></div>
            </div>
            <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
              {profile.company?.enabled ? 'Visible' : 'Hidden'}
            </span>
          </label>
        </div>

        {profile.company?.enabled && (
          <>
            <div className="cms-field-group">
              <label className="cms-label">Prefix Text</label>
              <input
                type="text"
                className="cms-input"
                value={profile.company?.prefix || ''}
                onChange={(e) => handleCompanyChange('prefix', e.target.value)}
                placeholder="e.g. Previously at , Currently at , at "
              />
            </div>

            <div className="cms-field-group">
              <label className="cms-label">Company Name</label>
              <input
                type="text"
                className="cms-input"
                value={profile.company?.name || ''}
                onChange={(e) => handleCompanyChange('name', e.target.value)}
                placeholder="e.g. Fieldiva"
              />
            </div>

            <div className="cms-field-group">
              <label className="cms-label">Company URL</label>
              <input
                type="url"
                className="cms-input"
                value={profile.company?.url || ''}
                onChange={(e) => handleCompanyChange('url', e.target.value)}
                placeholder="https://fieldiva.example.com"
              />
            </div>
          </>
        )}
      </div>

      {/* Availability / Status */}
      <div className="cms-card">
        <div className="cms-card-header">
          <span className="cms-card-title">Current Status / Availability</span>
          <label className="cms-switch-wrapper">
            <div
              className={`cms-switch ${profile.status?.enabled ? 'active' : ''}`}
              onClick={() => handleStatusChange('enabled', !profile.status?.enabled)}
            >
              <div className="cms-switch-handle"></div>
            </div>
            <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
              {profile.status?.enabled ? 'Visible' : 'Hidden'}
            </span>
          </label>
        </div>

        {profile.status?.enabled && (
          <div className="cms-field-group">
            <label className="cms-label">Status Text</label>
            <input
              type="text"
              className="cms-input"
              value={profile.status?.text || ''}
              onChange={(e) => handleStatusChange('text', e.target.value)}
              placeholder="e.g. Looking for new opportunities or Available for Q2"
            />
          </div>
        )}
      </div>
    </div>
  );
};
