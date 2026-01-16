import React, { useState } from 'react';
import { Input, Textarea } from '../../shared';
import { CreateLibraryFormData } from '../../../types/DataLibrary.types';

interface CreateLibraryFormProps {
  onFormChange?: (data: CreateLibraryFormData) => void;
}

export const CreateLibraryForm: React.FC<CreateLibraryFormProps> = ({ onFormChange }) => {
  const [libraryName, setLibraryName] = useState('');
  const [apiName, setApiName] = useState('');
  const [description, setDescription] = useState('');

  const handleLibraryNameChange = (value: string) => {
    setLibraryName(value);
    // Auto-generate API name from library name
    const generatedApiName = value.replace(/\s+/g, '_');
    setApiName(generatedApiName);
    onFormChange?.({ libraryName: value, apiName: generatedApiName, description });
  };

  const handleApiNameChange = (value: string) => {
    setApiName(value);
    onFormChange?.({ libraryName, apiName: value, description });
  };

  const handleDescriptionChange = (value: string) => {
    setDescription(value);
    onFormChange?.({ libraryName, apiName, description: value });
  };

  return (
    <div className="slds-form" role="form">
      <div className="slds-grid slds-gutters slds-m-bottom_medium">
        <div className="slds-col slds-size_1-of-2">
          <Input
            label="Library Name"
            value={libraryName}
            required
            placeholder="Enter library name"
            onChange={handleLibraryNameChange}
          />
        </div>
        <div className="slds-col slds-size_1-of-2">
          <Input
            label="API Name"
            value={apiName}
            required
            placeholder="Enter API name"
            onChange={handleApiNameChange}
          />
        </div>
      </div>
      <div className="slds-m-bottom_medium">
        <Textarea
          label="Description"
          value={description}
          required
          helpIcon
          placeholder="This description will be used by agent to decide when to call this data library..."
          rows={4}
          onChange={handleDescriptionChange}
        />
      </div>
    </div>
  );
};
