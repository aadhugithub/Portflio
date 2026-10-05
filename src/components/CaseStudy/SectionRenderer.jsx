import React from 'react';
import { TextBlock } from './TextBlock';
import { ImageBlock } from './ImageBlock';
import { GalleryBlock } from './GalleryBlock';
import { QuoteBlock } from './QuoteBlock';
import { MetricBlock } from './MetricBlock';
import { TestimonialBlock } from './TestimonialBlock';
import { DividerBlock, VideoBlock } from './DividerBlock';

/**
 * SectionRenderer — Renders a single CMS content block.
 *
 * Spacing contract (enforced in CSS + here via data-type attribute):
 *   - Between sections (heading groups): 40px  → set by .case-study-blocks gap
 *   - Heading → first paragraph under it: 16px  → heading has negative bottom margin via CSS
 *   - Paragraph → next paragraph: 8px            → tight sibling gap
 */
export const SectionRenderer = ({ block }) => {
  if (!block || !block.type) return null;

  switch (block.type) {
    case 'heading':
    case 'paragraph':
    case 'richText':
      return <TextBlock block={block} />;

    case 'image':
      return <ImageBlock block={block} />;

    case 'gallery':
      return <GalleryBlock block={block} />;

    case 'quote':
      return <QuoteBlock block={block} />;

    case 'metrics':
      return <MetricBlock block={block} />;

    case 'testimonial':
      return <TestimonialBlock block={block} />;

    case 'video':
      return <VideoBlock block={block} />;

    case 'divider':
      return <DividerBlock />;

    default:
      console.warn(`Unknown CMS block type: "${block.type}"`);
      return null;
  }
};

/**
 * GroupedSectionRenderer — Groups consecutive non-heading blocks under their parent heading,
 * so spacing between heading and first body block is 16px, while spacing between groups is 40px.
 */
export const GroupedSectionRenderer = ({ blocks }) => {
  if (!blocks || blocks.length === 0) return null;

  // Group blocks: each heading starts a new group; non-heading before first heading = group 0
  const groups = [];
  let currentGroup = { heading: null, children: [] };

  blocks.forEach((block) => {
    if (block.type === 'heading') {
      // Save existing group if it has content
      if (currentGroup.heading || currentGroup.children.length > 0) {
        groups.push(currentGroup);
      }
      currentGroup = { heading: block, children: [] };
    } else {
      currentGroup.children.push(block);
    }
  });

  // Push the last group
  if (currentGroup.heading || currentGroup.children.length > 0) {
    groups.push(currentGroup);
  }

  return (
    <>
      {groups.map((group, gIdx) => (
        <div
          key={group.heading?.id || `group-${gIdx}`}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          {/* Heading */}
          {group.heading && <SectionRenderer block={group.heading} />}

          {/* Body blocks: intra-spacing 8px */}
          {group.children.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {group.children.map((block) => (
                <SectionRenderer key={block.id || `${block.type}-${Math.random()}`} block={block} />
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
};
