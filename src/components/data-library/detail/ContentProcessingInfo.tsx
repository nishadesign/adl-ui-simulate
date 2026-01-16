import React from 'react';

export const ContentProcessingInfo: React.FC = () => {
  return (
    <div style={{ marginTop: '1.5rem', padding: '0.75rem', backgroundColor: 'transparent' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="#0176d3" style={{ flexShrink: 0, marginTop: '0.125rem' }}>
          <path d="M8 1c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm.5 11h-1V7h1v5zm0-6h-1V5h1v1z"/>
        </svg>
        <div>
          <p style={{ fontSize: '0.875rem', color: '#080707', margin: 0, lineHeight: '1.5' }}>
            When you add files, we automatically process and index your content for optimal retrieval. Files are chunked based on your organization's settings, with each chunk up to 1500 characters. Content is embedded and indexed for semantic search to match user questions with relevant information.
          </p>
        </div>
      </div>
    </div>
  );
};
