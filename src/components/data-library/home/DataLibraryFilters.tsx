import React from 'react';
import { Dropdown } from '../../shared';

const filterByOptions = [
  { label: 'Source Type', value: 'source-type' },
  { label: 'Status', value: 'status' },
];

export const DataLibraryFilters: React.FC = () => {
  return (
    <div style={{ marginBottom: '1rem', maxWidth: '300px' }}>
      <Dropdown
        label="Filter by"
        value=""
        options={filterByOptions}
        placeholder="Select filter..."
      />
    </div>
  );
};
