import React from 'react';
import { DataLibrary } from '../../../types/DataLibrary.types';
import { Badge } from '../../shared';

interface DataLibraryTableRowProps {
  library: DataLibrary;
}

export const DataLibraryTableRow: React.FC<DataLibraryTableRowProps> = ({ library }) => {
  const getSourceTypeIcon = (type: string) => {
    switch (type) {
      case 'Knowledge':
        return 'knowledge_base';
      case 'Files':
        return 'file';
      case 'URL':
        return 'link';
      case 'Custom Retriever':
        return 'custom_apps';
      default:
        return 'file';
    }
  };

  return (
    <tr style={{ borderBottom: '1px solid #dddbda' }}>
      <td style={{ padding: '0.5rem 0.75rem', borderRight: '1px solid #dddbda' }}>
        <a href="#" style={{ color: '#0176d3', textDecoration: 'none', fontSize: '0.875rem' }}>{library.libraryName}</a>
      </td>
      <td style={{ padding: '0.5rem 0.75rem', borderRight: '1px solid #dddbda', fontSize: '0.875rem', color: '#080707' }}>
        {library.sourceType}
      </td>
      <td style={{ padding: '0.5rem 0.75rem', borderRight: '1px solid #dddbda' }}>
        <Badge label={library.status} status={library.status} />
      </td>
      <td style={{ padding: '0.5rem 0.75rem', borderRight: '1px solid #dddbda' }}>
        <a href="#" style={{ color: '#0176d3', textDecoration: 'none', fontSize: '0.875rem' }}>{library.searchIndex}</a>
      </td>
      <td style={{ padding: '0.5rem 0.75rem', borderRight: '1px solid #dddbda' }}>
        <a href="#" style={{ color: '#0176d3', textDecoration: 'none', fontSize: '0.875rem' }}>{library.retriever}</a>
      </td>
      <td style={{ padding: '0.5rem 0.75rem', textAlign: 'center' }}>
        <button style={{
          width: '32px',
          height: '32px',
          border: '1px solid #dddbda',
          borderRadius: '0.25rem',
          backgroundColor: '#ffffff',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="#706e6b">
            <circle cx="8" cy="3" r="1.5"/>
            <circle cx="8" cy="8" r="1.5"/>
            <circle cx="8" cy="13" r="1.5"/>
          </svg>
          <span style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', borderWidth: 0 }}>
            More actions for {library.libraryName}
          </span>
        </button>
      </td>
    </tr>
  );
};
