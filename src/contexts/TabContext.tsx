import React, { createContext, useContext, useState, ReactNode } from 'react';

export type TabType = 'home' | 'detail';

export interface Tab {
  id: string;
  name: string;
  type: TabType;
  libraryData?: {
    libraryId?: string;
    libraryName: string;
    apiName: string;
    description: string;
  };
}

interface TabContextType {
  tabs: Tab[];
  activeTabId: string;
  addTab: (tab: Tab) => void;
  closeTab: (tabId: string) => void;
  setActiveTab: (tabId: string) => void;
  getActiveTab: () => Tab | undefined;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

export const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTabContext must be used within TabProvider');
  }
  return context;
};

interface TabProviderProps {
  children: ReactNode;
}

export const TabProvider: React.FC<TabProviderProps> = ({ children }) => {
  const [tabs, setTabs] = useState<Tab[]>([
    { id: 'data-library', name: 'Data Library', type: 'home' }
  ]);
  const [activeTabId, setActiveTabId] = useState('data-library');

  const addTab = (tab: Tab) => {
    // Check if tab already exists
    const existingTab = tabs.find(t => t.id === tab.id);
    if (existingTab) {
      // If tab exists, just activate it
      setActiveTabId(tab.id);
      return;
    }
    
    // Add new tab
    setTabs(prev => [...prev, tab]);
    setActiveTabId(tab.id);
  };

  const closeTab = (tabId: string) => {
    // Don't allow closing the home tab
    if (tabId === 'data-library') return;
    
    const tabIndex = tabs.findIndex(t => t.id === tabId);
    if (tabIndex === -1) return;
    
    // Remove the tab
    const newTabs = tabs.filter(t => t.id !== tabId);
    setTabs(newTabs);
    
    // If we're closing the active tab, activate another tab
    if (activeTabId === tabId) {
      // Activate the tab to the left, or the home tab if no tabs to the left
      const newActiveTab = tabIndex > 0 ? newTabs[tabIndex - 1] : newTabs[0];
      setActiveTabId(newActiveTab.id);
    }
  };

  const setActiveTab = (tabId: string) => {
    setActiveTabId(tabId);
  };

  const getActiveTab = () => {
    return tabs.find(t => t.id === activeTabId);
  };

  return (
    <TabContext.Provider value={{ tabs, activeTabId, addTab, closeTab, setActiveTab, getActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};
