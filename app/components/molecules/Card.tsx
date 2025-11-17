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

interface CardHeaderProps {
    children: React.ReactNode;
    className?: string;
}

export const CardHeader = ({ children, className = '' } : CardHeaderProps) => {
    const baseStyles = 'p-4 border-b border-gray-100';
    return (
        <div className={`${baseStyles} ${className}`}>
            <h2 className="text-lg font-semibold text-gray-800">{children}</h2>
        </div>
    );
};

interface CardBodyProps {
    children: React.ReactNode;
    className?: string;
}

export const CardBody = ({ children, className = '' } : CardBodyProps) => {
    const baseStyles = 'p-4 text-gray-700';
    return (
        <div className={`${baseStyles} ${className}`}>
            {children}
        </div>
    );
};

interface CardFooterProps {
    children: React.ReactNode;
    className?: string;
}

export const CardFooter = ({ children, className = '' } : CardFooterProps ) => {
    const baseStyles = 'p-3 border-t border-gray-100 flex justify-between items-center bg-gray-50';
    return (
        <div className={`${baseStyles} ${className}`}>
            {children}
        </div>
    );
};
