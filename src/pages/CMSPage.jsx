import React from 'react';
import { Link } from 'react-router-dom';
import { useCMS } from '../cms/CmsContext';
import { ProfileEditor } from '../components/CMSAdmin/ProfileEditor';
import { AboutEditor } from '../components/CMSAdmin/AboutEditor';
import { ProjectsEditor } from '../components/CMSAdmin/ProjectsEditor';
import { ConnectEditor } from '../components/CMSAdmin/ConnectEditor';
import { FooterEditor } from '../components/CMSAdmin/FooterEditor';
import { DataEditor } from '../components/CMSAdmin/DataEditor';

export const CMSPage = () => {
  const { activeTab, setActiveTab } = useCMS();

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 24px 100px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
        <div>
          <h1 className="case-study-title">Portfolio CMS Studio</h1>
          <p className="case-study-meta">Edit all site content, case studies, and metadata without touching JSX</p>
        </div>
        <Link to="/" className="text-link">← View Live Site</Link>
      </div>

      <div className="cms-nav-tabs" style={{ borderRadius: '6px', marginBottom: '24px' }}>
        <button
          type="button"
          className={`cms-tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          Profile & Bio
        </button>
        <button
          type="button"
          className={`cms-tab-btn ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => setActiveTab('about')}
        >
          About
        </button>
        <button
          type="button"
          className={`cms-tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          Case Studies
        </button>
        <button
          type="button"
          className={`cms-tab-btn ${activeTab === 'connect' ? 'active' : ''}`}
          onClick={() => setActiveTab('connect')}
        >
          Connect
        </button>
        <button
          type="button"
          className={`cms-tab-btn ${activeTab === 'footer' ? 'active' : ''}`}
          onClick={() => setActiveTab('footer')}
        >
          Footer
        </button>
        <button
          type="button"
          className={`cms-tab-btn ${activeTab === 'data' ? 'active' : ''}`}
          onClick={() => setActiveTab('data')}
        >
          Data / Backup
        </button>
      </div>

      <div style={{ backgroundColor: '#161619', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '24px' }}>
        {activeTab === 'profile' && <ProfileEditor />}
        {activeTab === 'about' && <AboutEditor />}
        {activeTab === 'projects' && <ProjectsEditor />}
        {activeTab === 'connect' && <ConnectEditor />}
        {activeTab === 'footer' && <FooterEditor />}
        {activeTab === 'data' && <DataEditor />}
      </div>
    </div>
  );
};
