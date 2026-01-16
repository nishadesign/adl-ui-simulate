import React, { useState } from 'react';
import { CreateLibraryForm } from './CreateLibraryForm';
import { ModalFooter } from './ModalFooter';
import { CreateLibraryFormData } from '../../../types/DataLibrary.types';

interface CreateLibraryModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onCreate?: (data: CreateLibraryFormData) => void;
}

export const CreateLibraryModal: React.FC<CreateLibraryModalProps> = ({
  isOpen = true,
  onClose,
  onCreate,
}) => {
  const [formData, setFormData] = useState<CreateLibraryFormData>({
    libraryName: '',
    apiName: '',
    description: '',
  });

  const handleCreate = () => {
    if (formData.libraryName && formData.apiName && formData.description) {
      onCreate?.(formData);
      onClose?.();
    }
  };

  const isFormValid = formData.libraryName && formData.apiName && formData.description;

  if (!isOpen) return null;

  return (
    <>
      <section
        role="dialog"
        tabIndex={-1}
        aria-labelledby="modal-heading-01"
        aria-modal="true"
        aria-describedby="modal-content-id-1"
        className="slds-modal slds-fade-in-open"
      >
        <div className="slds-modal__container">
        <header className="slds-modal__header">
          <button
            className="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse"
            title="Close"
            onClick={onClose}
            style={{ position: 'absolute', top: '1rem', right: '1rem' }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M11.4 10l6.3-6.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L10 8.6 3.7 2.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4L8.6 10l-6.3 6.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l6.3-6.3 6.3 6.3c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4L11.4 10z"/>
            </svg>
            <span className="slds-assistive-text">Close</span>
          </button>
          <h2 id="modal-heading-01" className="slds-modal__title slds-hyphenate">
            Create a Library
          </h2>
        </header>
        <div className="slds-modal__content slds-p-around_medium" id="modal-content-id-1">
          <CreateLibraryForm onFormChange={setFormData} />
        </div>
        <ModalFooter 
          onCancel={onClose}
          onSave={handleCreate}
          saveDisabled={!isFormValid}
        />
      </div>
      </section>
      <div className="slds-backdrop slds-backdrop_open"></div>
    </>
  );
};
