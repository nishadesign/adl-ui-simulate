import React from 'react';

interface InputProps {
  label?: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
  helpIcon?: boolean;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  value,
  placeholder,
  required = false,
  disabled = false,
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
        <input
          type="text"
          className="slds-input"
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.value)}
        />
      </div>
    </div>
  );
};
