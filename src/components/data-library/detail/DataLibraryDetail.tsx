import React, { useState } from 'react';
import { DetailPageHeader } from './DetailPageHeader';
import { DetailInfoRow } from './DetailInfoRow';
import { AddDataSourcesCard } from './AddDataSourcesCard';
import { LibraryStatusSection } from './LibraryStatusSection';
import { DetailFooter } from './DetailFooter';
import { libraryStorage } from '../../../utils/libraryStorage';

interface DataLibraryDetailProps {
  libraryId?: string;
  libraryName?: string;
  apiName?: string;
  description?: string;
}

type StepStatus = 'completed' | 'in-progress' | 'not-started';

interface StatusStep {
  label: string;
  status: StepStatus;
  linkText?: string;
  timestamp?: string;
  iconColor?: string;
}

export const DataLibraryDetail: React.FC<DataLibraryDetailProps> = ({
  libraryId,
  libraryName,
  apiName,
  description,
}) => {
  const [statusSteps, setStatusSteps] = useState<StatusStep[]>([
    { label: 'Ingesting data into Data Cloud', status: 'not-started', linkText: 'Knowledge_kav', iconColor: '#e01e5a' },
    { label: 'Creating data lake objects', status: 'not-started', linkText: 'Knowledge DLO', iconColor: '#5b47d1' },
    { label: 'Mapping data lake objects to data model objects', status: 'not-started', linkText: 'Knowledge DMO', iconColor: '#c9427a' },
    { label: 'Indexing data and creating a search index', status: 'not-started', linkText: 'Knowledge SI', timestamp: 'Last refresh: 08/25/25 4:10PM', iconColor: '#00a1e0' },
    { label: 'Building a retriever from the search index', status: 'not-started', linkText: 'Knowledge Retriever', iconColor: '#0176d3' },
  ]);
  const [hasFilesUploaded, setHasFilesUploaded] = useState(false);
  const [isLibraryStatusExpanded, setIsLibraryStatusExpanded] = useState(false);
  const [startUpload, setStartUpload] = useState(false);
  const [showLibraryStatus, setShowLibraryStatus] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState<'Add Data' | 'In Progress' | 'Ready'>('Add Data');

  const handleFilesUploaded = (files: File[]) => {
    console.log('Files uploaded:', files);
    setHasFilesUploaded(true);
  };

  const handleSave = () => {
    // Trigger file upload
    setStartUpload(true);
    
    // Show and expand the library status section after upload starts (wait for upload to complete - 2 seconds)
    setTimeout(() => {
      setShowLibraryStatus(true);
      setIsLibraryStatusExpanded(true);
      // Start the progress simulation
      simulateProgress();
      
      // Update library status in storage to In Progress
      if (libraryId) {
        libraryStorage.update(libraryId, { 
          status: 'In Progress',
          sourceType: 'Files'
        });
      }
    }, 2000);
  };

  const simulateProgress = () => {
    // Set status to In Progress
    setLibraryStatus('In Progress');
    
    // Step 1: Start ingesting (0s)
    setStatusSteps([
      { label: 'Ingesting data into Data Cloud', status: 'in-progress', linkText: 'Knowledge_kav', iconColor: '#e01e5a' },
      { label: 'Creating data lake objects', status: 'not-started', linkText: 'Knowledge DLO', iconColor: '#5b47d1' },
      { label: 'Mapping data lake objects to data model objects', status: 'not-started', linkText: 'Knowledge DMO', iconColor: '#c9427a' },
      { label: 'Indexing data and creating a search index', status: 'not-started', linkText: 'Knowledge SI', timestamp: 'Last refresh: 08/25/25 4:10PM', iconColor: '#00a1e0' },
      { label: 'Building a retriever from the search index', status: 'not-started', linkText: 'Knowledge Retriever', iconColor: '#0176d3' },
    ]);

    // Step 1 completes - line starts filling (1.2s)
    setTimeout(() => {
      setStatusSteps([
        { label: 'Ingesting data into Data Cloud', status: 'completed', linkText: 'Knowledge_kav', iconColor: '#e01e5a' },
        { label: 'Creating data lake objects', status: 'not-started', linkText: 'Knowledge DLO', iconColor: '#5b47d1' },
        { label: 'Mapping data lake objects to data model objects', status: 'not-started', linkText: 'Knowledge DMO', iconColor: '#c9427a' },
        { label: 'Indexing data and creating a search index', status: 'not-started', linkText: 'Knowledge SI', timestamp: 'Last refresh: 08/25/25 4:10PM', iconColor: '#00a1e0' },
        { label: 'Building a retriever from the search index', status: 'not-started', linkText: 'Knowledge Retriever', iconColor: '#0176d3' },
      ]);
    }, 1200);

    // Step 2 starts after line fills (2s)
    setTimeout(() => {
      setStatusSteps([
        { label: 'Ingesting data into Data Cloud', status: 'completed', linkText: 'Knowledge_kav', iconColor: '#e01e5a' },
        { label: 'Creating data lake objects', status: 'in-progress', linkText: 'Knowledge DLO', iconColor: '#5b47d1' },
        { label: 'Mapping data lake objects to data model objects', status: 'not-started', linkText: 'Knowledge DMO', iconColor: '#c9427a' },
        { label: 'Indexing data and creating a search index', status: 'not-started', linkText: 'Knowledge SI', timestamp: 'Last refresh: 08/25/25 4:10PM', iconColor: '#00a1e0' },
        { label: 'Building a retriever from the search index', status: 'not-started', linkText: 'Knowledge Retriever', iconColor: '#0176d3' },
      ]);
    }, 2000);

    // Step 2 completes - line starts filling (3.2s)
    setTimeout(() => {
      setStatusSteps([
        { label: 'Ingesting data into Data Cloud', status: 'completed', linkText: 'Knowledge_kav', iconColor: '#e01e5a' },
        { label: 'Creating data lake objects', status: 'completed', linkText: 'Knowledge DLO', iconColor: '#5b47d1' },
        { label: 'Mapping data lake objects to data model objects', status: 'not-started', linkText: 'Knowledge DMO', iconColor: '#c9427a' },
        { label: 'Indexing data and creating a search index', status: 'not-started', linkText: 'Knowledge SI', timestamp: 'Last refresh: 08/25/25 4:10PM', iconColor: '#00a1e0' },
        { label: 'Building a retriever from the search index', status: 'not-started', linkText: 'Knowledge Retriever', iconColor: '#0176d3' },
      ]);
    }, 3200);

    // Step 3 starts after line fills (4s)
    setTimeout(() => {
      setStatusSteps([
        { label: 'Ingesting data into Data Cloud', status: 'completed', linkText: 'Knowledge_kav', iconColor: '#e01e5a' },
        { label: 'Creating data lake objects', status: 'completed', linkText: 'Knowledge DLO', iconColor: '#5b47d1' },
        { label: 'Mapping data lake objects to data model objects', status: 'in-progress', linkText: 'Knowledge DMO', iconColor: '#c9427a' },
        { label: 'Indexing data and creating a search index', status: 'not-started', linkText: 'Knowledge SI', timestamp: 'Last refresh: 08/25/25 4:10PM', iconColor: '#00a1e0' },
        { label: 'Building a retriever from the search index', status: 'not-started', linkText: 'Knowledge Retriever', iconColor: '#0176d3' },
      ]);
    }, 4000);

    // Step 3 completes - line starts filling (5.2s)
    setTimeout(() => {
      setStatusSteps([
        { label: 'Ingesting data into Data Cloud', status: 'completed', linkText: 'Knowledge_kav', iconColor: '#e01e5a' },
        { label: 'Creating data lake objects', status: 'completed', linkText: 'Knowledge DLO', iconColor: '#5b47d1' },
        { label: 'Mapping data lake objects to data model objects', status: 'completed', linkText: 'Knowledge DMO', iconColor: '#c9427a' },
        { label: 'Indexing data and creating a search index', status: 'not-started', linkText: 'Knowledge SI', timestamp: 'Last refresh: 08/25/25 4:10PM', iconColor: '#00a1e0' },
        { label: 'Building a retriever from the search index', status: 'not-started', linkText: 'Knowledge Retriever', iconColor: '#0176d3' },
      ]);
    }, 5200);

    // Step 4 starts after line fills (6s)
    setTimeout(() => {
      setStatusSteps([
        { label: 'Ingesting data into Data Cloud', status: 'completed', linkText: 'Knowledge_kav', iconColor: '#e01e5a' },
        { label: 'Creating data lake objects', status: 'completed', linkText: 'Knowledge DLO', iconColor: '#5b47d1' },
        { label: 'Mapping data lake objects to data model objects', status: 'completed', linkText: 'Knowledge DMO', iconColor: '#c9427a' },
        { label: 'Indexing data and creating a search index', status: 'in-progress', linkText: 'Knowledge SI', timestamp: 'Last refresh: 08/25/25 4:10PM', iconColor: '#00a1e0' },
        { label: 'Building a retriever from the search index', status: 'not-started', linkText: 'Knowledge Retriever', iconColor: '#0176d3' },
      ]);
    }, 6000);

    // Step 4 completes - line starts filling (7.2s)
    setTimeout(() => {
      setStatusSteps([
        { label: 'Ingesting data into Data Cloud', status: 'completed', linkText: 'Knowledge_kav', iconColor: '#e01e5a' },
        { label: 'Creating data lake objects', status: 'completed', linkText: 'Knowledge DLO', iconColor: '#5b47d1' },
        { label: 'Mapping data lake objects to data model objects', status: 'completed', linkText: 'Knowledge DMO', iconColor: '#c9427a' },
        { label: 'Indexing data and creating a search index', status: 'completed', linkText: 'Knowledge SI', timestamp: 'Last refresh: 08/25/25 4:10PM', iconColor: '#00a1e0' },
        { label: 'Building a retriever from the search index', status: 'not-started', linkText: 'Knowledge Retriever', iconColor: '#0176d3' },
      ]);
    }, 7200);

    // Step 5 starts after line fills (8s)
    setTimeout(() => {
      setStatusSteps([
        { label: 'Ingesting data into Data Cloud', status: 'completed', linkText: 'Knowledge_kav', iconColor: '#e01e5a' },
        { label: 'Creating data lake objects', status: 'completed', linkText: 'Knowledge DLO', iconColor: '#5b47d1' },
        { label: 'Mapping data lake objects to data model objects', status: 'completed', linkText: 'Knowledge DMO', iconColor: '#c9427a' },
        { label: 'Indexing data and creating a search index', status: 'completed', linkText: 'Knowledge SI', timestamp: 'Last refresh: 08/25/25 4:10PM', iconColor: '#00a1e0' },
        { label: 'Building a retriever from the search index', status: 'in-progress', linkText: 'Knowledge Retriever', iconColor: '#0176d3' },
      ]);
    }, 8000);

    // Step 5 completes (9.2s)
    setTimeout(() => {
      setStatusSteps([
        { label: 'Ingesting data into Data Cloud', status: 'completed', linkText: 'Knowledge_kav', iconColor: '#e01e5a' },
        { label: 'Creating data lake objects', status: 'completed', linkText: 'Knowledge DLO', iconColor: '#5b47d1' },
        { label: 'Mapping data lake objects to data model objects', status: 'completed', linkText: 'Knowledge DMO', iconColor: '#c9427a' },
        { label: 'Indexing data and creating a search index', status: 'completed', linkText: 'Knowledge SI', timestamp: 'Last refresh: 08/25/25 4:10PM', iconColor: '#00a1e0' },
        { label: 'Building a retriever from the search index', status: 'completed', linkText: 'Knowledge Retriever', iconColor: '#0176d3' },
      ]);
      // Set status to Ready when all steps complete
      setLibraryStatus('Ready');
      
      // Update library status in storage to Ready
      if (libraryId) {
        const searchIndexName = `${libraryName}_SI`;
        const retrieverName = `${libraryName}_SI_Retriever`;
        libraryStorage.update(libraryId, { 
          status: 'Ready',
          searchIndex: searchIndexName,
          retriever: retrieverName
        });
      }
    }, 9200);
  };

  return (
    <div style={{ backgroundColor: '#f3f3f3', height: '100%', paddingBottom: '4rem' }}>
      <DetailPageHeader libraryName={libraryName} />
      <DetailInfoRow apiName={apiName} description={description} libraryStatus={libraryStatus} />
      <div style={{ padding: '1rem' }}>
        {showLibraryStatus && (
          <LibraryStatusSection 
            steps={statusSteps} 
            isExpanded={isLibraryStatusExpanded}
            onToggle={() => setIsLibraryStatusExpanded(!isLibraryStatusExpanded)}
          />
        )}
        <AddDataSourcesCard onFilesUploaded={handleFilesUploaded} startUpload={startUpload} />
      </div>
      <DetailFooter 
        onSave={handleSave}
        saveDisabled={!hasFilesUploaded}
      />
    </div>
  );
};
