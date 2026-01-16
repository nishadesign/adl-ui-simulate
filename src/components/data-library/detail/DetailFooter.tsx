import React from 'react';
import { Button } from '../../shared';

interface DetailFooterProps {
  onSave?: () => void;
  onCancel?: () => void;
  saveDisabled?: boolean;
}

export const DetailFooter: React.FC<DetailFooterProps> = ({ 
  onSave, 
  onCancel,
  saveDisabled = true 
}) => {
  return (
    <footer className="slds-docked-form-footer">
      <Button
        label="Cancel"
        variant="neutral"
        onClick={onCancel}
      />
      <Button
        label="Save"
        variant="brand"
        disabled={saveDisabled}
        onClick={onSave}
        className="slds-m-left_x-small"
      />
    </footer>
  );
};
