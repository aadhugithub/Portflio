import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="home-wrapper" style={{ textAlign: 'center', paddingTop: '140px' }}>
      <h1 className="identity-name" style={{ fontSize: '24px', marginBottom: '12px' }}>404 · Page Not Found</h1>
      <p className="section-content" style={{ marginBottom: '24px' }}>
        The requested page does not exist.
      </p>
      <Link to="/" className="text-link">← Return to overview</Link>
    </div>
  );
};
