import React from 'react';
import { Badge } from '../../shared';
import { LibraryStatus } from '../../types/DataLibrary.types';

interface DetailInfoRowProps {
  apiName?: string;
  description?: string;
  libraryStatus?: LibraryStatus;
}

export const DetailInfoRow: React.FC<DetailInfoRowProps> = ({ 
  apiName = 'honda_Manual_Docs',
  description = 'The purpose of this data library is to help Honda agent to answer questions related to product car operations and Policies. Focuses on the CRV and Odyssey models.',
  libraryStatus = 'Add Data'
}) => {
  return (
    <div style={{ backgroundColor: '#ffffff', padding: '0.75rem 1rem', borderBottom: '1px solid #dddbda' }}>
      <ul style={{ display: 'flex', gap: '2rem', margin: 0, padding: 0, listStyle: 'none' }}>
        <li>
          <div style={{ fontSize: '0.75rem', color: '#706e6b', marginBottom: '0.25rem' }}>
            API Name
          </div>
          <div style={{ fontSize: '0.875rem', color: '#080707', fontWeight: '400' }}>
            {apiName}
          </div>
        </li>
        <li>
          <div style={{ fontSize: '0.75rem', color: '#706e6b', marginBottom: '0.25rem' }}>
            Description
          </div>
          <div style={{ fontSize: '0.875rem', color: '#080707', fontWeight: '400', maxWidth: '600px' }}>
            {description}
          </div>
        </li>
        <li>
          <div style={{ fontSize: '0.75rem', color: '#706e6b', marginBottom: '0.25rem' }}>
            Status
          </div>
          <div>
            <Badge label={libraryStatus} status={libraryStatus} />
          </div>
        </li>
      </ul>
    </div>
  );
};
