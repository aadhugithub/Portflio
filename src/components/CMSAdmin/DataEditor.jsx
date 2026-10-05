import React, { useState } from 'react';
import { useCMS } from '../../cms/CmsContext';

export const DataEditor = () => {
  const { siteData, importData, resetToDefaults, exportData } = useCMS();
  const [jsonInput, setJsonInput] = useState('');
  const [copied, setCopied] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleCopyJson = () => {
    navigator.clipboard.writeText(exportData());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([exportData()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `portfolio-cms-export-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    if (!jsonInput.trim()) {
      setFeedback({ type: 'error', msg: 'Please paste valid CMS JSON first.' });
      return;
    }
    const res = importData(jsonInput);
    if (res.success) {
      setFeedback({ type: 'success', msg: 'CMS data successfully imported & updated!' });
      setJsonInput('');
    } else {
      setFeedback({ type: 'error', msg: `Import failed: ${res.error}` });
    }
  };

  const handleReset = () => {
    if (window.confirm('Reset all CMS content back to initial factory seed data? Any unsaved local edits will be replaced.')) {
      resetToDefaults();
      setFeedback({ type: 'success', msg: 'CMS reset to default seed state.' });
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div className="cms-card">
        <div className="cms-card-header">
          <span className="cms-card-title">CMS Data Export & Backup</span>
        </div>
        <p className="cms-helper">
          You can backup your entire site configuration or transfer it between machines as a single JSON file.
        </p>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button type="button" className="cms-btn" onClick={handleCopyJson}>
            {copied ? '✓ Copied to Clipboard!' : 'Copy Site JSON'}
          </button>
          <button type="button" className="cms-btn" onClick={handleDownload}>
            Download .json
          </button>
        </div>
      </div>

      <div className="cms-card">
        <div className="cms-card-header">
          <span className="cms-card-title">Import JSON Data</span>
        </div>
        <textarea
          className="cms-textarea cms-input-mono"
          style={{ minHeight: '120px' }}
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder="Paste exported CMS JSON here to apply..."
        />
        <button
          type="button"
          className="cms-btn cms-btn-primary"
          style={{ alignSelf: 'flex-start' }}
          onClick={handleImport}
        >
          Import & Apply
        </button>
      </div>

      <div className="cms-card" style={{ borderColor: '#451a1a' }}>
        <div className="cms-card-header">
          <span className="cms-card-title" style={{ color: '#fca5a5' }}>Reset to Factory Seed</span>
        </div>
        <p className="cms-helper">
          Restore all profile fields, case study content blocks, and social links to the original default seed data.
        </p>
        <button
          type="button"
          className="cms-btn cms-btn-danger"
          style={{ alignSelf: 'flex-start' }}
          onClick={handleReset}
        >
          Reset All CMS Data
        </button>
      </div>

      {feedback && (
        <div
          style={{
            padding: '10px 14px',
            borderRadius: '4px',
            fontSize: '12px',
            backgroundColor: feedback.type === 'success' ? '#064e3b' : '#451a1a',
            color: feedback.type === 'success' ? '#6ee7b7' : '#fca5a5',
            border: `1px solid ${feedback.type === 'success' ? '#059669' : '#b91c1c'}`
          }}
        >
          {feedback.msg}
        </div>
      )}
    </div>
  );
};
