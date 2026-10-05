import React from 'react';

export const ProjectBlockEditor = ({ blocks, onUpdateBlocks }) => {
  const handleBlockChange = (blockId, field, value) => {
    const newBlocks = blocks.map((b) => (b.id === blockId ? { ...b, [field]: value } : b));
    onUpdateBlocks(newBlocks);
  };

  const handleMoveBlock = (index, direction) => {
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= blocks.length) return;
    const newBlocks = [...blocks];
    const [moved] = newBlocks.splice(index, 1);
    newBlocks.splice(targetIndex, 0, moved);
    onUpdateBlocks(newBlocks);
  };

  const handleDeleteBlock = (blockId) => {
    if (window.confirm('Delete this content block?')) {
      onUpdateBlocks(blocks.filter((b) => b.id !== blockId));
    }
  };

  const handleAddBlock = (type) => {
    const newId = `block-${Date.now()}`;
    let newBlock = { id: newId, type };

    switch (type) {
      case 'heading':
        newBlock = { ...newBlock, level: 2, content: 'New Section' };
        break;
      case 'paragraph':
        newBlock = { ...newBlock, content: 'Add narrative text here...' };
        break;
      case 'image':
        newBlock = {
          ...newBlock,
          url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
          caption: 'Figure: Interface overview',
          alt: 'Project mockup'
        };
        break;
      case 'gallery':
        newBlock = {
          ...newBlock,
          columns: 2,
          caption: 'Comparative views',
          items: [
            { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop', caption: 'Step 1' },
            { url: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop', caption: 'Step 2' }
          ]
        };
        break;
      case 'quote':
        newBlock = { ...newBlock, content: 'Key user quote or insight...', author: 'User / Lead', role: 'Staff Coordinator' };
        break;
      case 'metrics':
        newBlock = {
          ...newBlock,
          items: [
            { value: '+45%', label: 'Workflow Efficiency' },
            { value: '99.8%', label: 'Accuracy' }
          ]
        };
        break;
      case 'testimonial':
        newBlock = {
          ...newBlock,
          quote: 'Adarsh delivered an outstanding design that transformed our product.',
          author: 'Alex Morgan',
          role: 'Director of Product',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
        };
        break;
      case 'divider':
        newBlock = { ...newBlock };
        break;
      default:
        break;
    }

    onUpdateBlocks([...blocks, newBlock]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>
          Content Blocks ({blocks.length})
        </span>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          <select
            className="cms-select"
            style={{ width: 'auto', padding: '4px 8px', fontSize: '12px' }}
            onChange={(e) => {
              if (e.target.value) {
                handleAddBlock(e.target.value);
                e.target.value = '';
              }
            }}
            defaultValue=""
          >
            <option value="" disabled>+ Add Content Block</option>
            <option value="heading">Heading</option>
            <option value="paragraph">Paragraph</option>
            <option value="image">Single Image</option>
            <option value="gallery">Image Gallery (2/3 col)</option>
            <option value="quote">Quote / Callout</option>
            <option value="metrics">Key Metrics</option>
            <option value="testimonial">Client Testimonial</option>
            <option value="divider">Divider Line</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {blocks.map((block, index) => (
          <div key={block.id || index} className="cms-block-item">
            <div className="cms-block-header">
              <span className="cms-block-badge">{block.type}</span>
              <div className="cms-block-actions">
                <button
                  type="button"
                  className="cms-btn cms-btn-sm"
                  disabled={index === 0}
                  onClick={() => handleMoveBlock(index, -1)}
                  title="Move Up"
                >
                  ↑
                </button>
                <button
                  type="button"
                  className="cms-btn cms-btn-sm"
                  disabled={index === blocks.length - 1}
                  onClick={() => handleMoveBlock(index, 1)}
                  title="Move Down"
                >
                  ↓
                </button>
                <button
                  type="button"
                  className="cms-btn cms-btn-sm cms-btn-danger"
                  onClick={() => handleDeleteBlock(block.id)}
                  title="Delete Block"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Block Type Specific Fields */}
            {block.type === 'heading' && (
              <div className="cms-field-group">
                <input
                  type="text"
                  className="cms-input"
                  value={block.content || ''}
                  onChange={(e) => handleBlockChange(block.id, 'content', e.target.value)}
                  placeholder="Section title (e.g. Context, Problem, Solution)"
                />
              </div>
            )}

            {(block.type === 'paragraph' || block.type === 'richText') && (
              <div className="cms-field-group">
                <textarea
                  className="cms-textarea"
                  style={{ minHeight: '80px' }}
                  value={block.content || ''}
                  onChange={(e) => handleBlockChange(block.id, 'content', e.target.value)}
                  placeholder="Paragraph narrative..."
                />
              </div>
            )}

            {block.type === 'image' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <input
                  type="url"
                  className="cms-input cms-input-mono"
                  value={block.url || ''}
                  onChange={(e) => handleBlockChange(block.id, 'url', e.target.value)}
                  placeholder="Image URL (https://...)"
                />
                <input
                  type="text"
                  className="cms-input"
                  value={block.caption || ''}
                  onChange={(e) => handleBlockChange(block.id, 'caption', e.target.value)}
                  placeholder="Caption text"
                />
              </div>
            )}

            {block.type === 'quote' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <textarea
                  className="cms-textarea"
                  style={{ minHeight: '60px' }}
                  value={block.content || ''}
                  onChange={(e) => handleBlockChange(block.id, 'content', e.target.value)}
                  placeholder="Quote text..."
                />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <input
                    type="text"
                    className="cms-input"
                    value={block.author || ''}
                    onChange={(e) => handleBlockChange(block.id, 'author', e.target.value)}
                    placeholder="Author name"
                  />
                  <input
                    type="text"
                    className="cms-input"
                    value={block.role || ''}
                    onChange={(e) => handleBlockChange(block.id, 'role', e.target.value)}
                    placeholder="Author role / company"
                  />
                </div>
              </div>
            )}

            {block.type === 'metrics' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {(block.items || []).map((item, mIdx) => (
                  <div key={mIdx} style={{ display: 'grid', gridTemplateColumns: '100px 1fr 30px', gap: '6px' }}>
                    <input
                      type="text"
                      className="cms-input"
                      value={item.value || ''}
                      onChange={(e) => {
                        const newItems = [...block.items];
                        newItems[mIdx] = { ...newItems[mIdx], value: e.target.value };
                        handleBlockChange(block.id, 'items', newItems);
                      }}
                      placeholder="e.g. +48%"
                    />
                    <input
                      type="text"
                      className="cms-input"
                      value={item.label || ''}
                      onChange={(e) => {
                        const newItems = [...block.items];
                        newItems[mIdx] = { ...newItems[mIdx], label: e.target.value };
                        handleBlockChange(block.id, 'items', newItems);
                      }}
                      placeholder="e.g. Reduction in dispatch time"
                    />
                    <button
                      type="button"
                      className="cms-btn cms-btn-sm cms-btn-danger"
                      onClick={() => {
                        const newItems = block.items.filter((_, i) => i !== mIdx);
                        handleBlockChange(block.id, 'items', newItems);
                      }}
                    >
                      ✕
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="cms-btn cms-btn-sm"
                  style={{ alignSelf: 'flex-start' }}
                  onClick={() => {
                    const newItems = [...(block.items || []), { value: '100%', label: 'Metric description' }];
                    handleBlockChange(block.id, 'items', newItems);
                  }}
                >
                  + Add Metric Item
                </button>
              </div>
            )}

            {block.type === 'testimonial' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <textarea
                  className="cms-textarea"
                  style={{ minHeight: '60px' }}
                  value={block.quote || ''}
                  onChange={(e) => handleBlockChange(block.id, 'quote', e.target.value)}
                  placeholder="Testimonial quote..."
                />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <input
                    type="text"
                    className="cms-input"
                    value={block.author || ''}
                    onChange={(e) => handleBlockChange(block.id, 'author', e.target.value)}
                    placeholder="Author name"
                  />
                  <input
                    type="text"
                    className="cms-input"
                    value={block.role || ''}
                    onChange={(e) => handleBlockChange(block.id, 'role', e.target.value)}
                    placeholder="Author role / title"
                  />
                </div>
                <input
                  type="url"
                  className="cms-input cms-input-mono"
                  value={block.avatar || ''}
                  onChange={(e) => handleBlockChange(block.id, 'avatar', e.target.value)}
                  placeholder="Avatar Image URL (optional)"
                />
              </div>
            )}

            {block.type === 'gallery' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <input
                  type="text"
                  className="cms-input"
                  value={block.caption || ''}
                  onChange={(e) => handleBlockChange(block.id, 'caption', e.target.value)}
                  placeholder="Gallery overall caption"
                />
                {(block.items || []).map((item, gIdx) => (
                  <div key={gIdx} style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '6px', background: '#121215', borderRadius: '4px' }}>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <input
                        type="url"
                        className="cms-input cms-input-mono"
                        value={item.url || ''}
                        onChange={(e) => {
                          const newItems = [...block.items];
                          newItems[gIdx] = { ...newItems[gIdx], url: e.target.value };
                          handleBlockChange(block.id, 'items', newItems);
                        }}
                        placeholder="Image URL"
                      />
                      <button
                        type="button"
                        className="cms-btn cms-btn-sm cms-btn-danger"
                        onClick={() => {
                          const newItems = block.items.filter((_, i) => i !== gIdx);
                          handleBlockChange(block.id, 'items', newItems);
                        }}
                      >
                        ✕
                      </button>
                    </div>
                    <input
                      type="text"
                      className="cms-input"
                      value={item.caption || ''}
                      onChange={(e) => {
                        const newItems = [...block.items];
                        newItems[gIdx] = { ...newItems[gIdx], caption: e.target.value };
                        handleBlockChange(block.id, 'items', newItems);
                      }}
                      placeholder="Item caption"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  className="cms-btn cms-btn-sm"
                  style={{ alignSelf: 'flex-start' }}
                  onClick={() => {
                    const newItems = [...(block.items || []), { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop', caption: '' }];
                    handleBlockChange(block.id, 'items', newItems);
                  }}
                >
                  + Add Gallery Image
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
