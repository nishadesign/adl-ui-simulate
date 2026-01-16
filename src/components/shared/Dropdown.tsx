import React from 'react';

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  label?: string;
  value: string;
  options: DropdownOption[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  value,
  options,
  placeholder,
  required = false,
  disabled = false,
  onChange,
  className = '',
}) => {
  return (
    <div className={`slds-form-element ${className}`}>
      {label && (
        <label className="slds-form-element__label">
          {required && <abbr className="slds-required" title="required">* </abbr>}
          {label}
        </label>
      )}
      <div className="slds-form-element__control">
        <div className="slds-select_container">
          <select
            className="slds-select"
            value={value}
            disabled={disabled}
            onChange={(e) => onChange?.(e.target.value)}
          >
            {placeholder && <option value="">{placeholder}</option>}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
