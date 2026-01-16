import React from 'react';

export const GlobalNavigation: React.FC = () => {
  return (
    <div className="slds-context-bar">
      <div className="slds-context-bar__primary">
        <div className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover">
          <div className="slds-context-bar__icon-action">
            <button className="slds-button slds-icon-waffle_container slds-context-bar__button" title="App Launcher">
              <span className="slds-icon-waffle">
                <span className="slds-r1"></span>
                <span className="slds-r2"></span>
                <span className="slds-r3"></span>
                <span className="slds-r4"></span>
                <span className="slds-r5"></span>
                <span className="slds-r6"></span>
                <span className="slds-r7"></span>
                <span className="slds-r8"></span>
                <span className="slds-r9"></span>
              </span>
              <span className="slds-assistive-text">Open App Launcher</span>
            </button>
          </div>
          <span className="slds-context-bar__label-action slds-context-bar__app-name">
            <span className="slds-truncate" title="Agentforce Studio">Agentforce Studio</span>
          </span>
        </div>
      </div>

      <nav className="slds-context-bar__secondary" role="navigation">
        <ul className="slds-grid">
          <li className="slds-context-bar__item slds-is-active">
            <a href="/index.html" className="slds-context-bar__label-action" title="Data Library">
              <span className="slds-truncate" title="Data Library">Data Library</span>
            </a>
          </li>
          <li className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_hover">
            <a href="#" className="slds-context-bar__label-action" title="Object Manager">
              <span className="slds-truncate" title="Object Manager">Object Manager</span>
            </a>
            <div className="slds-context-bar__icon-action slds-p-left_none">
              <button className="slds-button slds-button_icon slds-context-bar__button" aria-haspopup="true" title="Open Object Manager submenu">
                <svg className="slds-button__icon" aria-hidden="true">
                  <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
                </svg>
                <span className="slds-assistive-text">Open Object Manager submenu</span>
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};
