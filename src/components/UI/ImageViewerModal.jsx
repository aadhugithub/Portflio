import React, { useEffect } from 'react';

export const ImageViewerModal = ({ src, alt, caption, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!src) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close-btn" onClick={onClose} aria-label="Close image">
        &times;
      </button>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '90vw' }} onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt || caption || 'Enlarged image'} className="lightbox-image" />
        {caption && (
          <p style={{ marginTop: '12px', fontSize: '13px', color: '#a1a1aa', textAlign: 'center' }}>
            {caption}
          </p>
        )}
      </div>
    </div>
  );
};
