import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export const Input = ({
  label,
  error,
  fullWidth = false,
  className = '',
  ...props
}: InputProps) => {
  const baseClasses =
    'px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500';
  const widthClass = fullWidth ? 'w-full' : 'w-auto';
  const errorClass = error ? 'border-red-500' : 'border-gray-300';

  const inputClasses = `
    ${baseClasses}
    ${widthClass}
    ${errorClass}
    ${className}
  `.trim();

  return (
    <div className={`${fullWidth ? 'w-full' : 'w-auto'}`}>
      {label && <label className="mb-1 block font-medium text-gray-700">{label}</label>}
      <input className={inputClasses} {...props} />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};
