import React, { useEffect } from 'react';
import { useCMS } from '../../cms/CmsContext';
import { ProfileEditor } from './ProfileEditor';
import { AboutEditor } from './AboutEditor';
import { ProjectsEditor } from './ProjectsEditor';
import { ConnectEditor } from './ConnectEditor';
import { FooterEditor } from './FooterEditor';
import { DataEditor } from './DataEditor';

/**
 * CMSDrawer — Private admin panel.
 * NOT publicly visible. Access only via keyboard shortcut: Ctrl + Shift + E
 * Or by navigating directly to /cms
 */
export const CMSDrawer = () => {
  const { isCmsOpen, setIsCmsOpen, activeTab, setActiveTab } = useCMS();

  // Secret keyboard shortcut: Ctrl + Shift + E
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'E') {
        e.preventDefault();
        setIsCmsOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isCmsOpen) {
        setIsCmsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCmsOpen, setIsCmsOpen]);

  // Only render the drawer when open — no public trigger button
  if (!isCmsOpen) return null;

  return (
    <div className="cms-drawer-overlay" onClick={() => setIsCmsOpen(false)}>
      <div
        className="cms-drawer"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="CMS Content Studio"
      >
        {/* Header */}
        <div className="cms-header">
          <div className="cms-header-title">
            <svg
              width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
              style={{ color: '#38bdf8' }}
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M7 7h10" />
              <path d="M7 12h10" />
              <path d="M7 17h10" />
            </svg>
            <span>CMS Content Studio</span>
          </div>

          <div className="cms-header-actions">
            <span style={{ fontSize: '11px', color: 'var(--text-muted)', marginRight: '8px', fontFamily: 'var(--font-mono)' }}>
              Ctrl+Shift+E to toggle
            </span>
            <button
              type="button"
              className="cms-btn cms-btn-sm"
              onClick={() => setIsCmsOpen(false)}
            >
              ✕ Close
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="cms-nav-tabs">
          {[
            { key: 'profile', label: 'Profile & Bio' },
            { key: 'about', label: 'About' },
            { key: 'projects', label: 'Case Studies' },
            { key: 'connect', label: 'Connect' },
            { key: 'footer', label: 'Footer' },
            { key: 'data', label: 'Data / Backup' },
          ].map(({ key, label }) => (
            <button
              key={key}
              type="button"
              className={`cms-tab-btn ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Body */}
        <div className="cms-body">
          {activeTab === 'profile'  && <ProfileEditor />}
          {activeTab === 'about'    && <AboutEditor />}
          {activeTab === 'projects' && <ProjectsEditor />}
          {activeTab === 'connect'  && <ConnectEditor />}
          {activeTab === 'footer'   && <FooterEditor />}
          {activeTab === 'data'     && <DataEditor />}
        </div>

        {/* Footer */}
        <div className="cms-footer">
          <div className="cms-live-badge">
            <span className="cms-live-pulse"></span>
            <span>Live Preview Active</span>
          </div>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
            Auto-saved · localStorage
          </span>
        </div>
      </div>
    </div>
  );
};
