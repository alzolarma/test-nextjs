interface TableHeaderCellProps {
  label: string;
  className?: string;
}

export const TableHeaderCell = ({ label, className }: TableHeaderCellProps) => (
  <th className={`px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase ${className}`}>
    {label}
  </th>
);
