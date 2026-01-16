import React from 'react';
import { LibraryStatus } from '../../types/DataLibrary.types';

interface BadgeProps {
  label: string;
  status?: LibraryStatus;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  status,
  className = '',
}) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'Ready':
        return { backgroundColor: '#c9f2dc', color: '#0b6b3a', border: '1px solid #0b6b3a' };
      case 'Error':
        return { backgroundColor: '#fedede', color: '#ba0517', border: '1px solid #ba0517' };
      case 'In Progress':
        return { backgroundColor: '#d8edff', color: '#014486', border: '1px solid #014486' };
      case 'Add Data':
        return { backgroundColor: '#e5e5e5', color: '#080707', border: '1px solid #c9c9c9' };
      default:
        return { backgroundColor: '#e5e5e5', color: '#080707', border: '1px solid #c9c9c9' };
    }
  };

  return (
    <span 
      className={className}
      style={{
        display: 'inline-block',
        padding: '0.25rem 0.5rem',
        fontSize: '0.75rem',
        fontWeight: '700',
        borderRadius: '0.25rem',
        lineHeight: '1',
        ...getStatusStyles()
      }}
    >
      {label}
    </span>
  );
};
