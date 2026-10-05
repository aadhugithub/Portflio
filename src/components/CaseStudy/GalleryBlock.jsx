import React, { useState } from 'react';
import { ImageViewerModal } from '../UI/ImageViewerModal';

export const GalleryBlock = ({ block }) => {
  const [zoomedImage, setZoomedImage] = useState(null);

  if (!block.items || block.items.length === 0) return null;

  const colsClass = block.columns === 3 ? 'cols-3' : 'cols-2';

  return (
    <>
      <div className={`block-gallery ${colsClass}`}>
        {block.items.map((item, idx) => (
          <div key={idx} className="gallery-item">
            <div
              className="gallery-image-frame"
              onClick={() => setZoomedImage(item)}
              title="Click to expand"
            >
              <img
                src={item.url}
                alt={item.caption || `Gallery visual ${idx + 1}`}
                className="gallery-image"
                loading="lazy"
              />
            </div>
            {item.caption && (
              <p className="gallery-caption">{item.caption}</p>
            )}
          </div>
        ))}
      </div>

      {block.caption && (
        <p className="block-caption" style={{ marginTop: '-4px', marginBottom: '8px' }}>
          {block.caption}
        </p>
      )}

      {zoomedImage && (
        <ImageViewerModal
          src={zoomedImage.url}
          caption={zoomedImage.caption}
          onClose={() => setZoomedImage(null)}
        />
      )}
    </>
  );
};
