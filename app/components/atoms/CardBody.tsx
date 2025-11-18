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