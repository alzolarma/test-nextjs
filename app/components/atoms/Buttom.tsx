import React, { ButtonHTMLAttributes, ReactNode, MouseEvent } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'onClick'> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  customClasses?: string;
  isLoading?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const baseStyles = "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 ease-in-out shadow-md focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus:ring-blue-300 shadow-blue-500/50",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400 focus:ring-gray-300 shadow-gray-400/30",
  danger: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus:ring-red-300 shadow-red-500/50",
  ghost: "bg-transparent text-blue-600 hover:bg-blue-50 active:bg-blue-100 shadow-none focus:ring-blue-100 focus:ring-2",
};

const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  customClasses = '',
  isLoading = false,
  disabled,
  onClick,
  ...rest 
}: ButtonProps) => {
  const computedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${customClasses}`;

  return (
    <button
      className={computedClasses}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...rest}
    >
      {isLoading ? (
        <>
            <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {children} 
        </>
      ) : (
        children
      )}
    </button>
  );
};
