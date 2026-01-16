import React from 'react';
import { Button } from '../../shared';

interface ModalFooterProps {
  onCancel?: () => void;
  onSave?: () => void;
  saveDisabled?: boolean;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  onCancel,
  onSave,
  saveDisabled = false,
}) => {
  return (
    <footer className="slds-modal__footer">
      <Button
        label="Cancel"
        variant="neutral"
        onClick={onCancel}
      />
      <Button
        label="Create"
        variant="brand"
        onClick={onSave}
        disabled={saveDisabled}
      />
    </footer>
  );
};
