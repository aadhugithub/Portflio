import React from 'react';

// Lightweight parser for inline Markdown links [text](url) and bold **text**
export const parseFormattedText = (text) => {
  if (!text) return '';

  // Regex to match [text](url) and **bold**
  const regex = /(\[.*?\]\(.*?\)|\*\*.*?\*\*)/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    // Check for markdown link [label](url)
    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      const [, label, url] = linkMatch;
      const isExternal = url.startsWith('http') || url.startsWith('mailto:');
      return (
        <a
          key={index}
          href={url}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="text-link"
        >
          {label}
        </a>
      );
    }

    // Check for bold **text**
    const boldMatch = part.match(/^\*\*(.*?)\*\*$/);
    if (boldMatch) {
      return <strong key={index} style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{boldMatch[1]}</strong>;
    }

    return part;
  });
};
