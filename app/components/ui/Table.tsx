interface ColumnDefinition {
  key: string;
  headerName: string;
}

interface TableProps {
  columns: ColumnDefinition[];
  data: Record<string, any>[];
  title?: string;
}

export const Table = ({ columns, data, title }: TableProps) => {
  if (!columns || columns.length === 0) {
    return <div className="text-gray-500 p-4">No hay columnas definidas para esta tabla.</div>;
  }
  
  return (
    <div className="bg-white shadow-xl rounded-xl border border-gray-200 overflow-hidden">
      
      {title && (
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  {column.headerName}
                </th>
              ))}
            </tr>
          </thead>
          
          <tbody className="divide-y divide-gray-100">
            {data.map((row, rowIndex) => (
              <tr 
                key={rowIndex} 
                className="bg-white odd:bg-gray-50 hover:bg-blue-50/50 transition-colors"
              >
                {columns.map((column) => (
                  <td
                    key={`${rowIndex}-${column.key}`}
                    className="px-6 py-4 whitespace-nowrap text-sm font-normal text-gray-700"
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      
      {data.length === 0 && (
        <div className="p-6 text-center text-gray-500 text-sm">
          No hay datos disponibles para mostrar en este momento.
        </div>
      )}
    </div>
  );
};
