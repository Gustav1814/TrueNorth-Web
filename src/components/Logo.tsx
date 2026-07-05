import React from 'react';

interface LogoProps {
  variant?: 'stacked' | 'horizontal';
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'stacked', className = '', onClick }) => {
  const sizeClass =
    variant === 'horizontal'
      ? 'h-auto w-28 sm:w-32'
      : 'h-auto w-full max-w-[280px]';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex shrink-0 cursor-pointer select-none items-center justify-center rounded-sm bg-white p-1 transition-transform hover:scale-[1.01] ${className}`}
      aria-label="True North Mattress Supply home"
    >
      <img
        src="/images/true-north-full-logo.svg"
        alt="True North Mattress Supply Institutional Mattresses"
        className={sizeClass}
      />
    </button>
  );
};
