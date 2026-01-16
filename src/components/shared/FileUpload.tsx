import React, { useState } from 'react';

interface FileUploadProps {
  label?: string;
  required?: boolean;
  helpIcon?: boolean;
  onFilesSelected?: (files: File[]) => void;
  className?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  label,
  required = false,
  helpIcon = false,
  onFilesSelected,
  className = '',
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      onFilesSelected?.(Array.from(files));
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(false);
    
    const files = event.dataTransfer.files;
    if (files) {
      onFilesSelected?.(Array.from(files));
    }
  };

  return (
    <div className={`slds-form-element ${className}`}>
      {label && (
        <label className="slds-form-element__label">
          {required && <abbr className="slds-required" title="required">* </abbr>}
          {label}
          {helpIcon && (
            <span className="slds-icon_container slds-icon-utility-info">
              {/* Info icon placeholder */}
            </span>
          )}
        </label>
      )}
      <div className="slds-form-element__control">
        <div className="slds-file-selector slds-file-selector_files">
          <div 
            className={`slds-file-selector__dropzone ${isDragging ? 'slds-has-drag-over' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              className="slds-file-selector__input slds-assistive-text"
              accept="*"
              id="file-upload-input"
              multiple
              onChange={handleFileChange}
            />
            <label className="slds-file-selector__body" htmlFor="file-upload-input">
              <span className="slds-file-selector__button slds-button slds-button_neutral">
                <svg className="slds-button__icon slds-button__icon_left" aria-hidden="true">
                  <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#upload"></use>
                </svg>
                Upload Files
              </span>
              <span className="slds-file-selector__text slds-medium-show">
                Or drop files
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
