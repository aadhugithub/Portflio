import React from 'react';

export const QuoteBlock = ({ block }) => {
  if (!block.content) return null;

  return (
    <blockquote className="block-quote">
      <p className="quote-text">"{block.content}"</p>
      {(block.author || block.role) && (
        <cite className="quote-attribution">
          — {block.author}{block.role ? `, ${block.role}` : ''}
        </cite>
      )}
    </blockquote>
  );
};
