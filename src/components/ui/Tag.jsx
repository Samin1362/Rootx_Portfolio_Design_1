import React from 'react';

const Tag = ({ children, variant = 'default' }) => {
  const variants = {
    default: 'bg-blue-50 text-[var(--color-primary)] border border-blue-200',
    secondary: 'bg-amber-50 text-[var(--color-secondary)] border border-amber-200',
    success: 'bg-green-50 text-[var(--color-success)] border border-green-200',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
};

export default Tag;
