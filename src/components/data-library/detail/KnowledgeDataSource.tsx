import React, { useState } from 'react';
import { Input, Button } from '../../shared';

interface KnowledgeArticle {
  id: string;
  title: string;
  type: string;
}

export const KnowledgeDataSource: React.FC = () => {
  const [selectedArticles, setSelectedArticles] = useState<KnowledgeArticle[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleRemoveArticle = (id: string) => {
    setSelectedArticles((prev) => prev.filter((article) => article.id !== id));
  };

  return (
    <div className="slds-m-top_medium">
      {/* Search/Select Knowledge Articles */}
      <div className="slds-form-element">
        <label className="slds-form-element__label">
          <abbr className="slds-required" title="required">* </abbr>
          Select Knowledge Articles
        </label>
        <div className="slds-form-element__control">
          <div className="slds-grid slds-gutters">
            <div className="slds-col slds-grow">
              <Input
                value={searchTerm}
                placeholder="Search for knowledge articles..."
                onChange={setSearchTerm}
              />
            </div>
            <div className="slds-col slds-no-flex">
              <Button label="Search" variant="neutral" />
            </div>
          </div>
        </div>
      </div>

      {/* Selected Articles */}
      {selectedArticles.length > 0 && (
        <div className="slds-m-top_medium">
          <div className="slds-text-title_caps slds-m-bottom_small">
            Selected Articles ({selectedArticles.length})
          </div>
          <ul className="slds-has-dividers_top-space">
            {selectedArticles.map((article) => (
              <li key={article.id} className="slds-item slds-p-vertical_x-small">
                <div className="slds-grid slds-grid_align-spread">
                  <div className="slds-col">
                    <div className="slds-grid slds-grid_vertical-align-center">
                      <span className="slds-icon_container slds-icon-standard-article slds-m-right_small">
                        <svg className="slds-icon slds-icon-text-default" aria-hidden="true">
                          <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#article"></use>
                        </svg>
                      </span>
                      <div>
                        <div className="slds-text-body_regular slds-truncate" title={article.title}>
                          {article.title}
                        </div>
                        <div className="slds-text-color_weak slds-text-body_small">
                          {article.type}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slds-col slds-no-flex">
                    <button
                      className="slds-button slds-button_icon slds-button_icon-border-filled"
                      title="Remove article"
                      onClick={() => handleRemoveArticle(article.id)}
                    >
                      <svg className="slds-button__icon" aria-hidden="true">
                        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
                      </svg>
                      <span className="slds-assistive-text">Remove article</span>
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
              Knowledge articles will be automatically indexed and made searchable. The content is chunked and 
              processed for semantic search to help agents find the most relevant information to answer questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
