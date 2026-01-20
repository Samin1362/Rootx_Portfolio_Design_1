import React from 'react';

const Card = ({ children, className = '', hover = false }) => {
  return (
    <div
      className={`bg-white rounded-xl border border-[var(--color-border)] p-6 ${
        hover ? 'hover:shadow-xl transition-shadow duration-300 cursor-pointer' : 'shadow-md'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
