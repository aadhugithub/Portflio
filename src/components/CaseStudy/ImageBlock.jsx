import React, { useState } from 'react';
import { ImageViewerModal } from '../UI/ImageViewerModal';

export const ImageBlock = ({ block }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  if (!block.url) return null;

  return (
    <>
      <figure className="block-image-wrapper">
        <div
          className="block-image-frame"
          onClick={() => setIsZoomed(true)}
          title="Click to expand"
        >
          <img
            src={block.url}
            alt={block.alt || block.caption || 'Case study visual'}
            className="block-image"
            loading="lazy"
          />
        </div>
        {block.caption && (
          <figcaption className="block-caption">
            {block.caption}
          </figcaption>
        )}
      </figure>

      {isZoomed && (
        <ImageViewerModal
          src={block.url}
          alt={block.alt}
          caption={block.caption}
          onClose={() => setIsZoomed(false)}
        />
      )}
    </>
  );
};
