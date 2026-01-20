import React from 'react';

const SectionHeader = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-navy)] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-[var(--color-text-gray)] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-[var(--color-primary)] mt-6 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeader;
