import React from 'react';
import { Link } from 'react-router-dom';
import { useCMS } from '../../cms/CmsContext';

// Preset icons for personal marks
const LogoMark = ({ type, icon, image, text }) => {
  if (type === 'image' && image) {
    return <img src={image} alt="Personal Logo" className="identity-logo-img" />;
  }

  if (type === 'text' && text) {
    return <span className="identity-logo-text">{text}</span>;
  }

  // Default / icon mode
  return (
    <div className="identity-logo">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
    </div>
  );
};

export const Header = () => {
  const { profile } = useCMS();

  return (
    <header className="identity-section">
      <Link to="/" title="Home" style={{ display: 'inline-block', width: 'fit-content' }}>
        <LogoMark
          type={profile.logoType}
          icon={profile.logoIcon}
          image={profile.logoImage}
          text={profile.logoText}
        />
      </Link>

      <div className="identity-bio">
        <h1 className="identity-name">{profile.name}</h1>
        
        <div className="identity-role-line">
          <span>{profile.title}</span>
          {profile.company?.enabled && profile.company?.name && (
            <>
              <span> {profile.company.prefix || 'at '}</span>
              {profile.company.url ? (
                <a
                  href={profile.company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profile.company.name}
                </a>
              ) : (
                <span>{profile.company.name}</span>
              )}
            </>
          )}
        </div>

        {profile.status?.enabled && profile.status?.text && (
          <div className="status-badge">
            <span className="status-dot"></span>
            <span>{profile.status.text}</span>
          </div>
        )}
      </div>
    </header>
  );
};
