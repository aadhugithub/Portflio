import React from 'react';

export const MetricBlock = ({ block }) => {
  if (!block.items || block.items.length === 0) return null;

  return (
    <div className="block-metrics">
      {block.items.map((item, index) => (
        <div key={index} className="metric-card">
          <div className="metric-value">{item.value}</div>
          <div className="metric-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
};
