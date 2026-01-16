import React from 'react';
import { FileUploadSection } from './FileUploadSection';
import { ContentProcessingInfo } from './ContentProcessingInfo';

interface FilesDataSourceProps {
  onFilesUploaded?: (files: File[]) => void;
  startUpload?: boolean;
}

export const FilesDataSource: React.FC<FilesDataSourceProps> = ({ onFilesUploaded, startUpload }) => {
  return (
    <div className="slds-m-top_medium">
      <FileUploadSection 
        onFilesUploaded={onFilesUploaded}
        startUpload={startUpload}
      />
      <ContentProcessingInfo />
    </div>
  );
};
