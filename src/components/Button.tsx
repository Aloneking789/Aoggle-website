import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  onClick,
  type = 'button',
}) => {
  const baseClasses = 'rounded-md font-medium transition-all duration-200 inline-flex items-center justify-center whitespace-nowrap';
  
  const variantClasses = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-secondary-800 shadow-sm hover:shadow',
    secondary: 'bg-secondary-800 hover:bg-secondary-700 text-white shadow-sm hover:shadow',
    accent: 'bg-accent-500 hover:bg-accent-500/90 text-white shadow-sm hover:shadow',
    outline: 'bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500/10',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;