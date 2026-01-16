import React, { useState, useEffect } from 'react';
import { DataLibrary } from '../../../types/DataLibrary.types';
import { DataLibraryTableRow } from './DataLibraryTableRow';
import { Dropdown } from '../../shared';
import { libraryStorage } from '../../../utils/libraryStorage';

// Placeholder data matching the design
const mockDataLibraries: DataLibrary[] = [
  {
    id: '1',
    libraryName: 'Data Library 1',
    apiName: 'Data_Library_1',
    description: '',
    sourceType: 'Knowledge',
    status: 'Ready',
    searchIndex: 'Data Library 1_SI',
    retriever: 'Data Library 1_SI_Retriever',
  },
  {
    id: '2',
    libraryName: 'Car Manual Library',
    apiName: 'Car_Manual_Library',
    description: '',
    sourceType: 'Files',
    status: 'Error',
    searchIndex: 'Car Manual Library_SI',
    retriever: 'Car Manual Library_SI_Retriever',
  },
  {
    id: '3',
    libraryName: 'Operational manual',
    apiName: 'Operational_manual',
    description: '',
    sourceType: 'URL',
    status: 'In Progress',
    searchIndex: 'Operational manual_SI',
    retriever: 'Operational manual Action_SI...',
  },
  {
    id: '4',
    libraryName: 'Car Docs',
    apiName: 'Car_Docs',
    description: '',
    sourceType: 'Custom Retriever',
    status: 'Ready',
    searchIndex: 'Car Docs_SI',
    retriever: 'Car Docs_SI_Retriever',
  },
];

const filterByOptions = [
  { label: 'Source Type', value: 'source-type' },
  { label: 'Status', value: 'status' },
];

export const DataLibraryTable: React.FC = () => {
  const [allLibraries, setAllLibraries] = useState<DataLibrary[]>(mockDataLibraries);

  useEffect(() => {
    // Load saved libraries from localStorage and combine with mock data
    const savedLibraries = libraryStorage.getAll();
    const combined = [...savedLibraries, ...mockDataLibraries];
    setAllLibraries(combined);
  }, []);
  return (
    <div style={{ backgroundColor: '#ffffff', borderRadius: '0.25rem', border: '1px solid #dddbda' }}>
      <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #dddbda', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontSize: '0.875rem', fontWeight: '700', marginBottom: '0.25rem', color: '#080707' }}>
            Data Libraries
          </h2>
          <p style={{ fontSize: '0.75rem', color: '#706e6b', margin: 0 }}>
            {allLibraries.length} items • Sorted Library Name • Updated a few seconds ago
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-end' }}>
          <div style={{ width: '200px' }}>
            <Dropdown
              label="Filter by"
              value=""
              options={filterByOptions}
              placeholder="Select filter..."
            />
          </div>
          <div style={{ width: '240px' }}>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: '0.5rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', pointerEvents: 'none', zIndex: 1 }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="#706e6b">
                  <path d="M11.5 10.5l3.4 3.4c.3.3.3.8 0 1.1-.3.3-.8.3-1.1 0l-3.4-3.4C9.4 12.5 8 13 6.5 13 3.5 13 1 10.5 1 7.5S3.5 2 6.5 2 12 4.5 12 7.5c0 1.5-.5 2.9-1.5 3.9zM6.5 11.5c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4z"/>
                </svg>
              </span>
              <input
                type="search"
                placeholder="Search..."
                style={{
                  width: '100%',
                  padding: '0.375rem 0.75rem 0.375rem 2rem',
                  border: '1px solid #dddbda',
                  borderRadius: '0.25rem',
                  fontSize: '0.875rem'
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#fafaf9', borderBottom: '1px solid #dddbda' }}>
              <th style={{ padding: '0.5rem 0.75rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '700', color: '#080707', borderRight: '1px solid #dddbda' }}>
                Library Name
              </th>
              <th style={{ padding: '0.5rem 0.75rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '700', color: '#080707', borderRight: '1px solid #dddbda' }}>
                Source Type
              </th>
              <th style={{ padding: '0.5rem 0.75rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '700', color: '#080707', borderRight: '1px solid #dddbda' }}>
                Library Status
              </th>
              <th style={{ padding: '0.5rem 0.75rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '700', color: '#080707', borderRight: '1px solid #dddbda' }}>
                Search Index
              </th>
              <th style={{ padding: '0.5rem 0.75rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '700', color: '#080707', borderRight: '1px solid #dddbda' }}>
                Retriever
              </th>
              <th style={{ padding: '0.5rem 0.75rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '700', color: '#080707' }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {allLibraries.map((library) => (
              <DataLibraryTableRow key={library.id} library={library} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
