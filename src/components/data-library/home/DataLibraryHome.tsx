import React from 'react';
import { DataLibraryHeader } from './DataLibraryHeader';
import { DataLibraryInfoCard } from './DataLibraryInfoCard';
import { DataLibraryTable } from './DataLibraryTable';

interface DataLibraryHomeProps {
  onNewClick?: () => void;
}

export const DataLibraryHome: React.FC<DataLibraryHomeProps> = ({ onNewClick }) => {
  return (
    <div style={{ backgroundColor: '#f3f3f3', height: '100%', width: '100%', overflow: 'auto' }}>
      <DataLibraryHeader onNewClick={onNewClick} />
      <div style={{ padding: '1rem' }}>
        <DataLibraryInfoCard />
        <DataLibraryTable />
      </div>
    </div>
  );
};
