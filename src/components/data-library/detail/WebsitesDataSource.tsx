import React, { useState } from 'react';
import { Input, Button } from '../../shared';

interface Website {
  id: string;
  url: string;
}

export const WebsitesDataSource: React.FC = () => {
  const [websites, setWebsites] = useState<Website[]>([]);
  const [urlInput, setUrlInput] = useState('');

  const handleAddWebsite = () => {
    if (urlInput.trim()) {
      const newWebsite: Website = {
        id: `${Date.now()}-${Math.random()}`,
        url: urlInput.trim(),
      };
      setWebsites((prev) => [...prev, newWebsite]);
      setUrlInput('');
    }
  };

  const handleRemoveWebsite = (id: string) => {
    setWebsites((prev) => prev.filter((site) => site.id !== id));
  };

  return (
    <div className="slds-m-top_medium">
      {/* Add Website URL */}
      <div className="slds-form-element">
        <label className="slds-form-element__label">
          <abbr className="slds-required" title="required">* </abbr>
          Website URL
        </label>
        <div className="slds-form-element__control">
          <div className="slds-grid slds-gutters">
            <div className="slds-col slds-grow">
              <Input
                value={urlInput}
                placeholder="https://example.com"
                onChange={setUrlInput}
              />
            </div>
            <div className="slds-col slds-no-flex">
              <Button 
                label="Add" 
                variant="neutral" 
                onClick={handleAddWebsite}
                disabled={!urlInput.trim()}
              />
            </div>
          </div>
        </div>
        <div className="slds-form-element__help slds-m-top_x-small">
          Enter the website URL you want to index. Press Enter or click Add.
        </div>
      </div>

      {/* Added Websites */}
      {websites.length > 0 && (
        <div className="slds-m-top_medium">
          <div className="slds-text-title_caps slds-m-bottom_small">
            Added Websites ({websites.length})
          </div>
          <ul className="slds-has-dividers_top-space">
            {websites.map((website) => (
              <li key={website.id} className="slds-item slds-p-vertical_x-small">
                <div className="slds-grid slds-grid_align-spread">
                  <div className="slds-col">
                    <div className="slds-grid slds-grid_vertical-align-center">
                      <span className="slds-icon_container slds-icon-standard-link slds-m-right_small">
                        <svg className="slds-icon slds-icon-text-default" aria-hidden="true">
                          <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#link"></use>
                        </svg>
                      </span>
                      <div>
                        <div className="slds-text-body_regular slds-truncate" title={website.url}>
                          {website.url}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slds-col slds-no-flex">
                    <button
                      className="slds-button slds-button_icon slds-button_icon-border-filled"
                      title="Remove website"
                      onClick={() => handleRemoveWebsite(website.id)}
                    >
                      <svg className="slds-button__icon" aria-hidden="true">
                        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
                      </svg>
                      <span className="slds-assistive-text">Remove website</span>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Content Processing Info */}
      <div className="slds-box slds-box_x-small slds-m-top_medium" style={{ backgroundColor: '#f3f3f3' }}>
        <div className="slds-grid slds-grid_vertical-align-start">
          <span className="slds-icon_container slds-icon-utility-info slds-m-right_small">
            <svg className="slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
            </svg>
          </span>
          <div className="slds-col">
            <h3 className="slds-text-heading_small slds-m-bottom_x-small">Content Processing</h3>
            <p className="slds-text-body_small">
              Website content will be crawled and indexed automatically. We'll extract text content, create 
              chunks based on your organization's settings, and generate embeddings for semantic search. This 
              allows agents to find relevant information from your websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
