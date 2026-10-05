import React from 'react';

export const DividerBlock = () => {
  return <hr className="block-divider" />;
};

export const VideoBlock = ({ block }) => {
  if (!block.url) return null;

  return (
    <div className="block-image-wrapper">
      <div className="block-image-frame" style={{ aspectRatio: '16/9' }}>
        <iframe
          src={block.url}
          title={block.caption || 'Video demonstration'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      </div>
      {block.caption && <p className="block-caption">{block.caption}</p>}
    </div>
  );
};
