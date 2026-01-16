import React from 'react';

interface ButtonProps {
  label: string;
  variant?: 'brand' | 'neutral' | 'outline' | 'destructive';
  size?: 'default' | 'small';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'neutral',
  size = 'default',
  disabled = false,
  onClick,
  className = '',
}) => {
  const baseClasses = 'slds-button';
  const variantClasses = {
    brand: 'slds-button_brand',
    neutral: 'slds-button_neutral',
    outline: 'slds-button_outline-brand',
    destructive: 'slds-button_destructive',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  const brandStyles = variant === 'brand' ? {
    backgroundColor: '#0176d3',
    border: '1px solid #0176d3',
    color: '#ffffff',
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    fontSize: '0.875rem',
    fontWeight: '400',
    lineHeight: '1.5',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    whiteSpace: 'nowrap' as const,
    display: 'inline-block',
    minWidth: 'auto',
  } : {};
  
  return (
    <button 
      className={classes}
      disabled={disabled}
      onClick={onClick}
      style={brandStyles}
    >
      {label}
    </button>
  );
};
