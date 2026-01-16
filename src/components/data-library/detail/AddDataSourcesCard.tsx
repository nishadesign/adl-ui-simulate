import React, { useState } from 'react';
import { DataSourceForm } from './DataSourceForm';
import { FilesDataSource } from './FilesDataSource';
import { KnowledgeDataSource } from './KnowledgeDataSource';
import { WebsitesDataSource } from './WebsitesDataSource';

interface AddDataSourcesCardProps {
  onFilesUploaded?: (files: File[]) => void;
  startUpload?: boolean;
}

export const AddDataSourcesCard: React.FC<AddDataSourcesCardProps> = ({ onFilesUploaded, startUpload }) => {
  const [dataSpace, setDataSpace] = useState('default');
  const [dataType, setDataType] = useState('');

  const renderDataTypeComponent = () => {
    switch (dataType) {
      case 'files':
        return <FilesDataSource onFilesUploaded={onFilesUploaded} startUpload={startUpload} />;
      case 'knowledge':
        return <KnowledgeDataSource />;
      case 'websites':
        return <WebsitesDataSource />;
      default:
        return null;
    }
  };

  return (
    <article className="slds-card">
      <div className="slds-card__header slds-grid">
        <header className="slds-media slds-media_center slds-has-flexi-truncate">
          <div className="slds-media__body">
            <h2 className="slds-card__header-title">
              <span>Add Data Sources</span>
            </h2>
          </div>
        </header>
      </div>
      <div className="slds-card__body slds-card__body_inner">
        <DataSourceForm 
          dataSpace={dataSpace}
          dataType={dataType}
          onDataSpaceChange={setDataSpace}
          onDataTypeChange={setDataType}
        />
        {renderDataTypeComponent()}
      </div>
    </article>
  );
};
