import React from 'react';

export const TestimonialBlock = ({ block }) => {
  if (!block.quote) return null;

  return (
    <div className="block-testimonial">
      <p className="testimonial-quote">"{block.quote}"</p>
      <div className="testimonial-author-wrapper">
        {block.avatar && (
          <img
            src={block.avatar}
            alt={block.author || 'Testimonial Author'}
            className="testimonial-avatar"
            loading="lazy"
          />
        )}
        <div className="testimonial-author-info">
          <div className="testimonial-author-name">{block.author}</div>
          {block.role && <div className="testimonial-author-role">{block.role}</div>}
        </div>
      </div>
    </div>
  );
};
