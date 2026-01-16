import React from 'react';

interface TextareaProps {
  label?: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  rows?: number;
  onChange?: (value: string) => void;
  helpIcon?: boolean;
  className?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  value,
  placeholder,
  required = false,
  disabled = false,
  rows = 3,
  onChange,
  helpIcon = false,
  className = '',
}) => {
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
        <textarea
          className="slds-textarea"
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          rows={rows}
          onChange={(e) => onChange?.(e.target.value)}
        />
      </div>
    </div>
  );
};
