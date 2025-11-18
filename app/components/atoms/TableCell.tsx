interface TableCellProps {
  children: React.ReactNode;
  className?: string;
}

export const TableCell = ({ children, className }: TableCellProps) => (
  <td className={`px-6 py-4 text-sm text-gray-700 ${className}`}>
    {children}
  </td>
);
