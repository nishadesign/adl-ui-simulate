import React from 'react';
import { useTabContext } from '../../contexts/TabContext';

export const GlobalHeader: React.FC = () => {
  const { tabs, activeTabId, setActiveTab, closeTab } = useTabContext();
  return (
    <header className="slds-global-header_container" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #dddbda' }}>
      {/* Row 1: Logo, Search, Settings, Notifications, User */}
      <div className="slds-global-header slds-grid slds-grid_align-spread" style={{ padding: '0 1rem', borderBottom: '1px solid #dddbda', height: '50px', alignItems: 'center' }}>
        {/* Logo */}
        <div className="slds-global-header__item" style={{ display: 'flex', alignItems: 'center' }}>
          <div className="slds-global-header__logo" style={{ display: 'flex', alignItems: 'center' }}>
            <svg width="32" height="23" viewBox="0 0 40 28" fill="none">
              <path d="M13.5 8.5c-.3-.9-.4-1.8-.4-2.7 0-4.9 4-8.8 8.9-8.8 3.9 0 7.2 2.5 8.4 6 5.5.5 9.8 5.1 9.8 10.7 0 5.9-4.8 10.7-10.7 10.7h-13c-5.2 0-9.5-4.3-9.5-9.5 0-4.8 3.6-8.8 8.3-9.3.1.3.2.6.2.9z" fill="#1398F0" fillOpacity="0.3"/>
              <path d="M12.5 9.5c.4-.6.9-1.1 1.4-1.6-.2-.8-.3-1.6-.3-2.4 0-4.4 3.6-8 8-8 3.5 0 6.5 2.3 7.6 5.4 4.9.5 8.8 4.6 8.8 9.6 0 5.3-4.3 9.6-9.6 9.6h-12c-4.7 0-8.4-3.8-8.4-8.4 0-4.3 3.2-7.8 7.3-8.3.1.4.2.7.2 1.1z" fill="#1398F0"/>
            </svg>
          </div>
        </div>

        {/* Global Search */}
        <div className="slds-global-header__item slds-global-header__item_search" style={{ flexGrow: 1, maxWidth: '480px', display: 'flex', alignItems: 'center' }}>
          <div className="slds-form-element" style={{ width: '100%', margin: 0 }}>
            <div className="slds-form-element__control slds-input-has-icon slds-input-has-icon_left" style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', pointerEvents: 'none' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="#706e6b">
                  <path d="M11.5 10.5l3.4 3.4c.3.3.3.8 0 1.1-.3.3-.8.3-1.1 0l-3.4-3.4C9.4 12.5 8 13 6.5 13 3.5 13 1 10.5 1 7.5S3.5 2 6.5 2 12 4.5 12 7.5c0 1.5-.5 2.9-1.5 3.9zM6.5 11.5c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4z"/>
                </svg>
              </span>
              <input
                type="search"
                id="global-search"
                className="slds-input"
                placeholder="Search..."
                style={{ paddingLeft: '2.5rem', height: '32px' }}
              />
            </div>
          </div>
        </div>

        {/* Utilities - Row 1 */}
        <div className="slds-global-header__item" style={{ display: 'flex', alignItems: 'center' }}>
          <ul className="slds-global-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', margin: 0, padding: 0, listStyle: 'none', height: '100%' }}>
            {/* Settings */}
            <li className="slds-global-actions__item" style={{ display: 'flex', alignItems: 'center' }}>
              <button 
                className="slds-button slds-button_icon slds-button_icon-container" 
                title="Setup"
                style={{ 
                  width: '40px', 
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#706e6b',
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style={{ display: 'block' }}>
                  <path d="M18.3 9.3l-1.6-.4c-.1-.4-.3-.8-.5-1.2l.9-1.3c.3-.4.2-.9-.1-1.2l-1.1-1.1c-.3-.3-.8-.4-1.2-.1l-1.3.9c-.4-.2-.8-.4-1.2-.5l-.4-1.6c-.1-.5-.5-.8-1-.8h-1.6c-.5 0-.9.3-1 .8l-.4 1.6c-.4.1-.8.3-1.2.5l-1.3-.9c-.4-.3-.9-.2-1.2.1L3 4.1c-.3.3-.4.8-.1 1.2l.9 1.3c-.2.4-.4.8-.5 1.2l-1.6.4c-.5.1-.8.5-.8 1v1.6c0 .5.3.9.8 1l1.6.4c.1.4.3.8.5 1.2l-.9 1.3c-.3.4-.2.9.1 1.2l1.1 1.1c.3.3.8.4 1.2.1l1.3-.9c.4.2.8.4 1.2.5l.4 1.6c.1.5.5.8 1 .8h1.6c.5 0 .9-.3 1-.8l.4-1.6c.4-.1.8-.3 1.2-.5l1.3.9c.4.3.9.2 1.2-.1l1.1-1.1c.3-.3.4-.8.1-1.2l-.9-1.3c.2-.4.4-.8.5-1.2l1.6-.4c.5-.1.8-.5.8-1v-1.6c0-.5-.3-.9-.8-1zM10 13c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
                </svg>
                <span className="slds-assistive-text">Setup</span>
              </button>
            </li>
            
            {/* Notifications */}
            <li className="slds-global-actions__item" style={{ display: 'flex', alignItems: 'center' }}>
              <button 
                className="slds-button slds-button_icon slds-button_icon-container" 
                title="Notifications"
                style={{ 
                  width: '40px', 
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#706e6b',
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style={{ display: 'block' }}>
                  <path d="M10 2C8.3 2 7 3.3 7 5v.3C5.2 6.1 4 7.8 4 9.8V13l-1.5 1.5c-.3.3-.5.7-.5 1.1 0 .8.7 1.4 1.5 1.4h13c.8 0 1.5-.6 1.5-1.4 0-.4-.2-.8-.5-1.1L16 13V9.8c0-2-1.2-3.7-3-4.5V5c0-1.7-1.3-3-3-3zm0 18c1.1 0 2-.9 2-2H8c0 1.1.9 2 2 2z"/>
                </svg>
                <span className="slds-assistive-text">Notifications</span>
              </button>
            </li>
            
            {/* User Avatar */}
            <li className="slds-global-actions__item" style={{ display: 'flex', alignItems: 'center' }}>
              <button 
                className="slds-button slds-button_icon slds-button_icon-container" 
                title="User"
                style={{ 
                  width: '40px', 
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                <span className="slds-avatar slds-avatar_circle slds-avatar_small" style={{ backgroundColor: '#16325c', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%' }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="white" style={{ display: 'block' }}>
                    <path d="M8 8c1.7 0 3-1.3 3-3S9.7 2 8 2 5 3.3 5 5s1.3 3 3 3zm0 1.5c-2.3 0-7 1.2-7 3.5V15h14v-2c0-2.3-4.7-3.5-7-3.5z"/>
                  </svg>
                  <span className="slds-assistive-text">User Avatar</span>
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Row 2: App Launcher, Setup, Home, Object Manager */}
      <div className="slds-global-header slds-grid slds-grid_align-start" style={{ padding: '0', alignItems: 'center', height: '48px' }}>
        <div className="slds-global-header__item" style={{ display: 'flex', alignItems: 'center', gap: '0', height: '100%' }}>
          {/* App Launcher */}
          <button 
            className="slds-button slds-button_icon slds-button_icon-container" 
            title="App Launcher"
            style={{ 
              width: '48px', 
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#706e6b',
              borderRadius: '0',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              padding: 0
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style={{ display: 'block' }}>
              <rect x="1" y="1" width="5" height="5" rx="1"/>
              <rect x="7.5" y="1" width="5" height="5" rx="1"/>
              <rect x="14" y="1" width="5" height="5" rx="1"/>
              <rect x="1" y="7.5" width="5" height="5" rx="1"/>
              <rect x="7.5" y="7.5" width="5" height="5" rx="1"/>
              <rect x="14" y="7.5" width="5" height="5" rx="1"/>
              <rect x="1" y="14" width="5" height="5" rx="1"/>
              <rect x="7.5" y="14" width="5" height="5" rx="1"/>
              <rect x="14" y="14" width="5" height="5" rx="1"/>
            </svg>
            <span className="slds-assistive-text">App Launcher</span>
          </button>
          
          {/* Tabs */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0', height: '100%' }}>
            <span style={{ 
              padding: '0 1rem', 
              fontWeight: '700',
              fontSize: '0.875rem',
              color: '#080707',
              display: 'flex',
              alignItems: 'center',
              height: '100%',
              borderBottom: '3px solid transparent'
            }}>
              Agentforce Studio
            </span>
            
            {/* Dynamic Tabs */}
            {tabs.map((tab) => (
              <div
                key={tab.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  height: '100%',
                  borderBottom: tab.id === activeTabId ? '3px solid #1589ee' : '3px solid transparent',
                  backgroundColor: 'transparent',
                  position: 'relative'
                }}
              >
                <button
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '0 1rem',
                    fontWeight: '400',
                    fontSize: '0.875rem',
                    color: '#1589ee',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                    gap: '0.5rem',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer'
                  }}
                >
                  {tab.name}
                  {tab.id !== 'data-library' && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        closeTab(tab.id);
                      }}
                      style={{
                        width: '16px',
                        height: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: 'none',
                        background: 'transparent',
                        cursor: 'pointer',
                        padding: 0,
                        color: '#706e6b'
                      }}
                      title="Close tab"
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                        <path d="M9.7 8.3L6.4 5l3.3-3.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L5 3.6 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4L3.6 5 .3 8.3c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0L5 6.4l3.3 3.3c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4z"/>
                      </svg>
                    </button>
                  )}
                </button>
              </div>
            ))}
            
            <a href="#" style={{ 
              padding: '0 1rem', 
              fontWeight: '400',
              fontSize: '0.875rem',
              color: '#1589ee',
              textDecoration: 'none',
              borderBottom: '3px solid transparent',
              display: 'flex',
              alignItems: 'center',
              height: '100%',
              gap: '0.25rem'
            }}>
              Object Manager
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" style={{ display: 'block' }}>
                <path d="M6 8L2 4h8L6 8z"/>
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
