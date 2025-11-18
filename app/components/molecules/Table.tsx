import { TableHeaderCell } from "../atoms/TableHeader";

interface TableHeadProps {
  columns: { key: string; headerName: string, width : string }[];
}

export const TableHead = ({ columns }: TableHeadProps) => (
  <thead className="bg-gray-50">
    <tr>
      {columns.map((col) => (
        <TableHeaderCell key={col.key} label={col.headerName} className={col.width} />
      ))}
    </tr>
  </thead>
);
