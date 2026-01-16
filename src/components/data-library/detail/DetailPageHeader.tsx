import React from 'react';
import { Button } from '../../shared';

interface DetailPageHeaderProps {
  libraryName?: string;
}

export const DetailPageHeader: React.FC<DetailPageHeaderProps> = ({ 
  libraryName = 'Honda Manual Docs' 
}) => {
  return (
    <div style={{ backgroundColor: '#ffffff', padding: '1rem', borderBottom: '1px solid #dddbda' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '0.75rem', flex: 1 }}>
          <span style={{ backgroundColor: '#7f8de1', borderRadius: '0.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', flexShrink: 0 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </span>
          <div style={{ flex: 1 }}>
            <nav style={{ marginBottom: '0.25rem' }}>
              <ol style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0, padding: 0, listStyle: 'none' }}>
                <li style={{ fontSize: '0.75rem', color: '#706e6b' }}>
                  <a href="/index.html" style={{ color: '#0176d3', textDecoration: 'none' }}>Data Library</a>
                </li>
              </ol>
            </nav>
            <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '300', color: '#080707' }}>
              {libraryName}
            </h1>
          </div>
        </div>
        <div style={{ flexShrink: 0 }}>
          <Button label="Edit" variant="brand" />
        </div>
      </div>
    </div>
  );
};
