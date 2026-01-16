import React from 'react';
import { GlobalHeader, GlobalNavigation, SetupTree } from '../components/layout';
import { DataLibraryDetail } from '../components/data-library/detail';

interface DataLibraryDetailPageProps {
  libraryId?: string;
  libraryName?: string;
  apiName?: string;
  description?: string;
}

export const DataLibraryDetailPage: React.FC<DataLibraryDetailPageProps> = ({
  libraryId,
  libraryName,
  apiName,
  description,
}) => {
  return (
    <div className="slds-scope" style={{ paddingTop: '98px' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, backgroundColor: '#ffffff' }}>
        <GlobalHeader />
        <GlobalNavigation />
      </div>
      <div className="slds-grid">
        <div className="slds-col slds-size_1-of-6">
          <SetupTree />
        </div>
        <div className="slds-col slds-size_5-of-6">
          <DataLibraryDetail 
            libraryId={libraryId}
            libraryName={libraryName}
            apiName={apiName}
            description={description}
          />
        </div>
      </div>
    </div>
  );
};
