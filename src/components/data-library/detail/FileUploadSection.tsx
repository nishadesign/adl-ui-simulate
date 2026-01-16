import React, { useState, useEffect } from 'react';
import { FileUpload } from '../../shared';

type FileStatus = 'pending' | 'uploading' | 'uploaded';

interface UploadedFile {
  file: File;
  id: string;
  status: FileStatus;
}

interface FileUploadSectionProps {
  onFilesUploaded?: (files: File[]) => void;
  startUpload?: boolean;
}

export const FileUploadSection: React.FC<FileUploadSectionProps> = ({ onFilesUploaded, startUpload }) => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const handleFilesSelected = (files: File[]) => {
    const newFiles = files.map((file) => ({
      file,
      id: `${file.name}-${Date.now()}-${Math.random()}`,
      status: 'pending' as FileStatus,
    }));
    setUploadedFiles((prev) => [...prev, ...newFiles]);
    
    // Trigger callback with just the File objects
    onFilesUploaded?.(files);
  };

  const handleRemoveFile = (id: string) => {
    setUploadedFiles((prev) => prev.filter((f) => f.id !== id));
  };

  // Trigger upload animation when startUpload prop changes to true
  useEffect(() => {
    if (startUpload && uploadedFiles.length > 0) {
      // Set all files to uploading
      setUploadedFiles((prev) =>
        prev.map((file) => ({ ...file, status: 'uploading' as FileStatus }))
      );

      // Simulate upload completion after 2 seconds
      setTimeout(() => {
        setUploadedFiles((prev) =>
          prev.map((file) => ({ ...file, status: 'uploaded' as FileStatus }))
        );
      }, 2000);
    }
  }, [startUpload]);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const renderStatusIcon = (status: FileStatus) => {
    if (status === 'uploading') {
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg width="16" height="16" viewBox="0 0 16 16" style={{ animation: 'spin 1s linear infinite' }}>
            <path fill="#706e6b" d="M8 2a6 6 0 1 0 6 6h-2a4 4 0 1 1-4-4V2z"/>
          </svg>
          <span>Uploading</span>
        </div>
      );
    }
    if (status === 'uploaded') {
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="#2e844a">
            <path d="M8 1c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm3.7 5.3l-4 4c-.2.2-.4.3-.7.3s-.5-.1-.7-.3l-2-2c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l1.3 1.3 3.3-3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z"/>
          </svg>
          <span>Uploaded</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="slds-m-bottom_medium">
      <FileUpload
        label="Add Files"
        required
        helpIcon
        onFilesSelected={handleFilesSelected}
      />
      
      {/* Display uploaded files as data table */}
      {uploadedFiles.length > 0 && (
        <div className="slds-m-top_medium">
          <style>{`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>
          <table className="slds-table slds-table_cell-buffer slds-table_bordered" style={{ backgroundColor: '#ffffff' }}>
            <thead>
              <tr className="slds-line-height_reset">
                <th scope="col" style={{ width: '3.25rem', backgroundColor: '#fafaf9', verticalAlign: 'middle' }}>
                  <div className="slds-th__action slds-th__action_form">
                    <div className="slds-checkbox">
                      <input type="checkbox" id="select-all" />
                      <label className="slds-checkbox__label" htmlFor="select-all">
                        <span className="slds-checkbox_faux"></span>
                        <span className="slds-assistive-text">Select All</span>
                      </label>
                    </div>
                  </div>
                </th>
                <th scope="col" style={{ backgroundColor: '#fafaf9', verticalAlign: 'middle' }}>
                  <div className="slds-th__action slds-th__action_form">
                    <span className="slds-th__action-label">File Name</span>
                    <button className="slds-button slds-button_icon slds-button_icon-bare" style={{ marginLeft: '0.25rem' }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="#706e6b">
                        <path d="M6 8L2 4h8L6 8z"/>
                      </svg>
                    </button>
                  </div>
                </th>
                <th scope="col" style={{ backgroundColor: '#fafaf9', verticalAlign: 'middle' }}>
                  <div className="slds-th__action slds-th__action_form">
                    <span className="slds-th__action-label">Size</span>
                    <button className="slds-button slds-button_icon slds-button_icon-bare" style={{ marginLeft: '0.25rem' }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="#706e6b">
                        <path d="M6 8L2 4h8L6 8z"/>
                      </svg>
                    </button>
                  </div>
                </th>
                <th scope="col" style={{ backgroundColor: '#fafaf9', verticalAlign: 'middle' }}>
                  <div className="slds-th__action slds-th__action_form">
                    <span className="slds-th__action-label">Status</span>
                    <button className="slds-button slds-button_icon slds-button_icon-bare" style={{ marginLeft: '0.25rem' }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="#706e6b">
                        <path d="M6 8L2 4h8L6 8z"/>
                      </svg>
                    </button>
                  </div>
                </th>
                <th scope="col" style={{ width: '3.25rem', backgroundColor: '#fafaf9', verticalAlign: 'middle' }}>
                  <span className="slds-assistive-text">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {uploadedFiles.map((uploadedFile) => (
                <tr key={uploadedFile.id} className="slds-hint-parent">
                  <td style={{ verticalAlign: 'middle' }}>
                    <div className="slds-checkbox">
                      <input type="checkbox" id={`checkbox-${uploadedFile.id}`} />
                      <label className="slds-checkbox__label" htmlFor={`checkbox-${uploadedFile.id}`}>
                        <span className="slds-checkbox_faux"></span>
                        <span className="slds-assistive-text">Select Row</span>
                      </label>
                    </div>
                  </td>
                  <td style={{ verticalAlign: 'middle' }}>
                    <div className="slds-truncate" title={uploadedFile.file.name}>
                      {uploadedFile.file.name}
                    </div>
                  </td>
                  <td style={{ verticalAlign: 'middle' }}>
                    <div className="slds-truncate">
                      {formatFileSize(uploadedFile.file.size)}
                    </div>
                  </td>
                  <td style={{ verticalAlign: 'middle' }}>
                    {renderStatusIcon(uploadedFile.status)}
                  </td>
                  <td style={{ verticalAlign: 'middle' }}>
                    <button
                      className="slds-button slds-button_icon slds-button_icon-border-filled"
                      title="Remove file"
                      onClick={() => handleRemoveFile(uploadedFile.id)}
                      style={{ border: '1px solid #c9c9c9' }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="#706e6b">
                        <path d="M12.5 4.5l-1-1L8 7 4.5 3.5l-1 1L7 8l-3.5 3.5 1 1L8 9l3.5 3.5 1-1L9 8l3.5-3.5z"/>
                      </svg>
                      <span className="slds-assistive-text">Remove file</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
