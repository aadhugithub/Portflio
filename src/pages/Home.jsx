import React from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { ProjectList } from '../components/ProjectList/ProjectList';
import { useCMS } from '../cms/CmsContext';
import { parseFormattedText } from '../utils/textParser';

export const Home = () => {
  const { about, connect } = useCMS();

  const enabledConnectLinks = (connect || []).filter((item) => item.enabled !== false);

  return (
    <main className="home-wrapper">
      {/* 1. Top Identity Section */}
      <Header />

      {/* 2. About Section */}
      {about && (
        <section className="editorial-section">
          <h2 className="section-title">{about.title || 'About'}</h2>
          <div className="section-content">
            {about.content?.split('\n\n').map((paragraph, index) => (
              <p key={index}>{parseFormattedText(paragraph)}</p>
            ))}
          </div>
        </section>
      )}

      {/* 3. Case Studies Section */}
      <section className="editorial-section">
        <h2 className="section-title">Case studies</h2>
        <ProjectList />
      </section>

      {/* 4. Connect Section */}
      {enabledConnectLinks.length > 0 && (
        <section className="editorial-section">
          <h2 className="section-title">Connect</h2>
          <ul className="connect-list">
            {enabledConnectLinks.map((item) => (
              <li key={item.id || item.label}>
                <a
                  href={item.url}
                  target={item.url?.startsWith('http') ? '_blank' : undefined}
                  rel={item.url?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="connect-item-link"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 5. Footer */}
      <Footer />
    </main>
  );
};
