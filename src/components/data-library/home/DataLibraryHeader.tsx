import React from 'react';
import { Button } from '../../shared';

interface DataLibraryHeaderProps {
  onNewClick?: () => void;
}

export const DataLibraryHeader: React.FC<DataLibraryHeaderProps> = ({ onNewClick }) => {
  return (
    <div style={{ 
      backgroundColor: '#ffffff', 
      padding: '1rem 1.5rem', 
      borderBottom: '1px solid #dddbda',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      boxSizing: 'border-box',
      minHeight: '80px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
        {/* Icon */}
        <div style={{ 
          backgroundColor: '#7f8de1', 
          borderRadius: '0.25rem', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          width: '48px', 
          height: '48px',
          flexShrink: 0
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        </div>
        
        {/* Title */}
        <h1 style={{ 
          margin: 0, 
          fontSize: '1.5rem', 
          fontWeight: '300', 
          color: '#080707',
          lineHeight: '1.25'
        }}>
          All Data Libraries
        </h1>
      </div>
      
      {/* New Button */}
      <div style={{ flexShrink: 0, marginLeft: '1rem' }}>
        <Button label="New" variant="brand" onClick={onNewClick} />
      </div>
    </div>
  );
};
