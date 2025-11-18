import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export const Card = ({ children, className = '' } : CardProps) => {
    const baseStyles = 'bg-white rounded-xl border border-gray-200 transition shadow-md duration-300 ease-in-out overflow-hidden';
    return (
        <div className={`${baseStyles} ${className}`}>
            {children}
        </div>
    );
};

