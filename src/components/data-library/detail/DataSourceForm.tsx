import React from 'react';
import { Dropdown } from '../../shared';

const dataSpaceOptions = [
  { label: 'Default', value: 'default' },
  { label: 'Production', value: 'production' },
  { label: 'Development', value: 'development' },
];

const dataTypeOptions = [
  { label: 'Files', value: 'files' },
  { label: 'Knowledge', value: 'knowledge' },
  { label: 'Websites', value: 'websites' },
];

interface DataSourceFormProps {
  dataSpace: string;
  dataType: string;
  onDataSpaceChange: (value: string) => void;
  onDataTypeChange: (value: string) => void;
}

export const DataSourceForm: React.FC<DataSourceFormProps> = ({
  dataSpace,
  dataType,
  onDataSpaceChange,
  onDataTypeChange,
}) => {
  return (
    <div className="slds-form">
      <div className="slds-m-bottom_medium">
        <Dropdown
          label="Data Space"
          value={dataSpace}
          options={dataSpaceOptions}
          required
          onChange={onDataSpaceChange}
        />
      </div>
      <div className="slds-m-bottom_medium">
        <Dropdown
          label="Data Type"
          value={dataType}
          options={dataTypeOptions}
          required
          placeholder="Select data type"
          onChange={onDataTypeChange}
        />
      </div>
    </div>
  );
};
