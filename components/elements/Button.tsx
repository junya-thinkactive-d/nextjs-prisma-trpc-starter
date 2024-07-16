import React from 'react';

type BackgroundColor = 'primary' | 'secondary' | 'accent';

interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: BackgroundColor;
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  onClick,
}: ButtonProps) => {
  const baseClasses = 'font-bold rounded';

  const sizeClasses = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg',
  };

  const getBackgroundColor = () => {
    if (backgroundColor) {
      switch (backgroundColor) {
        case 'primary':
          return 'bg-blue-500 hover:bg-blue-600';
        case 'secondary':
          return 'bg-gray-500 hover:bg-gray-600';
        case 'accent':
          return 'bg-green-500 hover:bg-green-600';
      }
    }
    return primary ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-200 hover:bg-gray-300';
  };

  const colorClasses = getBackgroundColor();
  const textColor = backgroundColor || primary ? 'text-white' : 'text-gray-800';

  const classes = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${colorClasses}
    ${textColor}
  `.trim();

  return (
    <button className={classes} onClick={onClick}>
      {label}
    </button>
  );
};
