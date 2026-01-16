import React from 'react';

interface IconProps {
  name: string;
  size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large';
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 'small',
  className = '',
}) => {
  return (
    <span className={`slds-icon_container ${className}`}>
      <svg className={`slds-icon slds-icon_${size}`} aria-hidden="true">
        {/* Icon SVG placeholder - name: {name} */}
        <use xlinkHref={`/assets/icons/utility-sprite/svg/symbols.svg#${name}`}></use>
      </svg>
    </span>
  );
};
