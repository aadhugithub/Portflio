import React, { useState } from 'react';
import { useCMS } from '../../cms/CmsContext';
import { ProjectBlockEditor } from './ProjectBlockEditor';

export const ProjectsEditor = () => {
  const { projects, updateProjects, addProject, deleteProject, reorderProjects } = useCMS();
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0]?.id || projects[0]?.slug || null);

  const selectedProject = projects.find((p) => p.id === selectedProjectId || p.slug === selectedProjectId) || projects[0];

  const handleUpdateProjectField = (field, value) => {
    if (!selectedProject) return;
    const updatedList = projects.map((p) =>
      p.id === selectedProject.id ? { ...p, [field]: value } : p
    );
    updateProjects(updatedList);
  };

  const handleUpdateBlocks = (newBlocks) => {
    if (!selectedProject) return;
    handleUpdateProjectField('blocks', newBlocks);
  };

  const handleAddNewProject = () => {
    const newId = `project-${Date.now()}`;
    const newSlug = `new-case-study-${projects.length + 1}`;
    const newProject = {
      id: newId,
      slug: newSlug,
      title: 'Untitled Case Study',
      shortDescription: 'Project overview and design system summary.',
      year: '2026',
      role: 'Product Designer',
      client: 'Client Name',
      category: '',
      featured: true,
      blocks: [
        { id: `b-${Date.now()}-1`, type: 'heading', level: 2, content: 'Context' },
        { id: `b-${Date.now()}-2`, type: 'paragraph', content: 'Describe the project background and key motivations.' },
        { id: `b-${Date.now()}-3`, type: 'heading', level: 2, content: 'Problem' },
        { id: `b-${Date.now()}-4`, type: 'paragraph', content: 'What was the friction point or business bottleneck?' },
        { id: `b-${Date.now()}-5`, type: 'heading', level: 2, content: 'Solution' },
        { id: `b-${Date.now()}-6`, type: 'paragraph', content: 'How did the design resolve the core challenge?' }
      ]
    };
    addProject(newProject);
    setSelectedProjectId(newId);
  };

  const handleDelete = (id) => {
    if (projects.length <= 1) {
      alert('You must keep at least one project.');
      return;
    }
    if (window.confirm('Are you sure you want to delete this case study?')) {
      deleteProject(id);
      const remaining = projects.filter((p) => p.id !== id);
      if (remaining.length > 0) {
        setSelectedProjectId(remaining[0].id);
      }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Project Selector & Management Toolbar */}
      <div className="cms-card">
        <div className="cms-card-header">
          <span className="cms-card-title">Case Studies ({projects.length})</span>
          <button
            type="button"
            className="cms-btn cms-btn-primary"
            onClick={handleAddNewProject}
          >
            + New Project
          </button>
        </div>

        {/* Project List / Ordering */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {projects.map((proj, idx) => {
            const isSelected = selectedProject && (selectedProject.id === proj.id || selectedProject.slug === proj.slug);
            return (
              <div
                key={proj.id || proj.slug}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 12px',
                  backgroundColor: isSelected ? '#22222a' : '#141417',
                  border: isSelected ? '1px solid #3b82f6' : '1px solid var(--border-subtle)',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedProjectId(proj.id || proj.slug)}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {proj.title}
                    {proj.featured && (
                      <span style={{ fontSize: '10px', backgroundColor: '#3b82f640', color: '#93c5fd', padding: '2px 4px', borderRadius: '4px' }}>Featured</span>
                    )}
                  </span>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    /work/{proj.slug} · {proj.year}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} onClick={(e) => e.stopPropagation()}>
                  <button
                    type="button"
                    className="cms-btn cms-btn-sm"
                    disabled={idx === 0}
                    onClick={() => reorderProjects(idx, idx - 1)}
                    title="Move Up in List"
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    className="cms-btn cms-btn-sm"
                    disabled={idx === projects.length - 1}
                    onClick={() => reorderProjects(idx, idx + 1)}
                    title="Move Down in List"
                  >
                    ↓
                  </button>
                  <button
                    type="button"
                    className="cms-btn cms-btn-sm cms-btn-danger"
                    onClick={() => handleDelete(proj.id || proj.slug)}
                    title="Delete Project"
                  >
                    ✕
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Project Editor */}
      {selectedProject && (
        <div className="cms-card">
          <div className="cms-card-header">
            <span className="cms-card-title">Editing: {selectedProject.title}</span>
            <a
              href={`/work/${selectedProject.slug}`}
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: '11px', color: '#93c5fd', textDecoration: 'underline' }}
            >
              Open Page ↗
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div className="cms-field-group">
              <label className="cms-label">Project Title</label>
              <input
                type="text"
                className="cms-input"
                value={selectedProject.title || ''}
                onChange={(e) => handleUpdateProjectField('title', e.target.value)}
                placeholder="e.g. Field Ops"
              />
            </div>

            <div className="cms-field-group">
              <label className="cms-label">URL Slug (/work/:slug)</label>
              <input
                type="text"
                className="cms-input cms-input-mono"
                value={selectedProject.slug || ''}
                onChange={(e) => handleUpdateProjectField('slug', e.target.value.toLowerCase().replace(/[^\w-]/g, ''))}
                placeholder="e.g. field-ops"
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '12px' }}>
            <div className="cms-field-group">
              <label className="cms-label">Year</label>
              <input
                type="text"
                className="cms-input"
                value={selectedProject.year || ''}
                onChange={(e) => handleUpdateProjectField('year', e.target.value)}
                placeholder="e.g. 2025"
              />
            </div>

            <div className="cms-field-group">
              <label className="cms-label">Role</label>
              <input
                type="text"
                className="cms-input"
                value={selectedProject.role || ''}
                onChange={(e) => handleUpdateProjectField('role', e.target.value)}
                placeholder="e.g. Lead Designer"
              />
            </div>

            <div className="cms-field-group">
              <label className="cms-label">Client / Org</label>
              <input
                type="text"
                className="cms-input"
                value={selectedProject.client || ''}
                onChange={(e) => handleUpdateProjectField('client', e.target.value)}
                placeholder="e.g. Fieldiva"
              />
            </div>

            <div className="cms-field-group">
              <label className="cms-label">Category</label>
              <select
                className="cms-input"
                value={selectedProject.category || ''}
                onChange={(e) => handleUpdateProjectField('category', e.target.value)}
              >
                <option value="">None / Uncategorized</option>
                <option value="products">Products</option>
                <option value="projects">Projects</option>
                <option value="agentic-ai">Agentic AI</option>
                <option value="graphic">Graphic</option>
              </select>
            </div>
          </div>

          <div className="cms-field-group">
            <label className="cms-label">Short Description</label>
            <input
              type="text"
              className="cms-input"
              value={selectedProject.shortDescription || ''}
              onChange={(e) => handleUpdateProjectField('shortDescription', e.target.value)}
              placeholder="Brief summary for indexing"
            />
          </div>

          <div className="cms-field-group" style={{ flexDirection: 'row', alignItems: 'center', gap: '8px', padding: '8px 0' }}>
            <input
              type="checkbox"
              id="featured-checkbox"
              checked={selectedProject.featured || false}
              onChange={(e) => handleUpdateProjectField('featured', e.target.checked)}
              style={{ accentColor: '#3b82f6', width: '16px', height: '16px' }}
            />
            <label htmlFor="featured-checkbox" style={{ fontSize: '13px', color: 'var(--text-primary)', cursor: 'pointer' }}>
              Pin / Feature on Home Page
            </label>
          </div>

          {/* Modular Content Blocks Builder */}
          <ProjectBlockEditor
            blocks={selectedProject.blocks || []}
            onUpdateBlocks={handleUpdateBlocks}
          />
        </div>
      )}
    </div>
  );
};
