import React from 'react';
import { parseFormattedText } from '../../utils/textParser';

export const TextBlock = ({ block }) => {
  if (block.type === 'heading') {
    const headingId = block.content?.toLowerCase().replace(/[^\w]+/g, '-');
    const Tag = block.level === 3 ? 'h3' : 'h2';
    const className = block.level === 3 ? 'block-heading-3' : 'block-heading-2';

    return (
      <Tag id={headingId} className={className}>
        {block.content}
      </Tag>
    );
  }

  // Paragraph / rich text
  return (
    <p className="block-paragraph">
      {parseFormattedText(block.content)}
    </p>
  );
};
