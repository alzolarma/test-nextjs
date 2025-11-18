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