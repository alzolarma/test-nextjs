import { TableCell } from "../atoms/TableCell";

interface TableRowProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rowData: Record<string, any>;
  columns: { key: string }[];
}

export const TableRow = ({ rowData, columns }: TableRowProps) => (
  <tr className="bg-white odd:bg-gray-50 hover:bg-blue-50 transition-colors">
    {columns.map((col) => (
      <TableCell key={col.key}>{rowData[col.key]}</TableCell>
    ))}
  </tr>
);
