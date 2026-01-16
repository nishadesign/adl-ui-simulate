import React, { useState } from 'react';
import { GlobalHeader, SetupTree } from './components/layout';
import { DataLibraryHome } from './components/data-library/home';
import { DataLibraryDetail } from './components/data-library/detail';
import { CreateLibraryModal } from './components/data-library/create';
import { TabProvider, useTabContext } from './contexts/TabContext';
import { CreateLibraryFormData } from './types/DataLibrary.types';

const AppContent: React.FC = () => {
  const { getActiveTab, addTab } = useTabContext();
  const [showCreateModal, setShowCreateModal] = useState(false);

  const activeTab = getActiveTab();

  const handleCreateLibrary = (data: CreateLibraryFormData) => {
    // Generate a unique ID for the tab
    const tabId = `library-${Date.now()}`;
    
    // Add a new tab
    addTab({
      id: tabId,
      name: data.libraryName,
      type: 'detail',
      libraryData: {
        libraryId: tabId,
        libraryName: data.libraryName,
        apiName: data.apiName,
        description: data.description
      }
    });
    
    setShowCreateModal(false);
  };

  return (
    <div className="App" style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Global Header - Fixed at top */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <GlobalHeader />
      </div>

      {/* Main Content Area - with padding for fixed header */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden', paddingTop: '98px' }}>
        {/* Left Sidebar - Only show on home tab */}
        {activeTab?.type === 'home' && (
          <aside style={{ width: '280px', borderRight: '1px solid #dddbda', overflow: 'auto', backgroundColor: '#f3f2f2' }}>
            <SetupTree />
          </aside>
        )}

        {/* Main Content */}
        <main style={{ flex: 1, overflow: 'auto', backgroundColor: '#f3f2f2', padding: 0 }}>
          {activeTab?.type === 'home' && (
            <DataLibraryHome onNewClick={() => setShowCreateModal(true)} />
          )}
          {activeTab?.type === 'detail' && activeTab.libraryData && (
            <DataLibraryDetail
              libraryName={activeTab.libraryData.libraryName}
              apiName={activeTab.libraryData.apiName}
              description={activeTab.libraryData.description}
              libraryId={activeTab.libraryData.libraryId}
            />
          )}
        </main>
      </div>

      {/* Create Library Modal */}
      {showCreateModal && (
        <>
          <div className="slds-backdrop slds-backdrop_open"></div>
          <CreateLibraryModal
            isOpen={showCreateModal}
            onClose={() => setShowCreateModal(false)}
            onCreate={handleCreateLibrary}
          />
        </>
      )}
    </div>
  );
};

function App() {
  return (
    <TabProvider>
      <AppContent />
    </TabProvider>
  );
}

export default App;
