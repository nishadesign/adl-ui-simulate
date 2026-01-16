import React from 'react';
import { GlobalHeader, GlobalNavigation, SetupTree } from '../components/layout';
import { DataLibraryHome } from '../components/data-library/home';

interface DataLibraryHomePageProps {
  onNewClick?: () => void;
}

export const DataLibraryHomePage: React.FC<DataLibraryHomePageProps> = ({ onNewClick }) => {
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
          <DataLibraryHome onNewClick={onNewClick} />
        </div>
      </div>
    </div>
  );
};
