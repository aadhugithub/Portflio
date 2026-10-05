import React from 'react';
import { useCMS } from '../../cms/CmsContext';

export const Footer = () => {
  const { footer } = useCMS();

  return (
    <footer className="site-footer">
      <div>{footer?.copyright || '© 2026'}</div>
    </footer>
  );
};
