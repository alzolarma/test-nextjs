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