"use client";

import { useState } from "react";
import { Paginator } from "../molecules/Paginator";

interface TablePostsProps {
  data: any[];
}

export function TablePosts({ data }: TablePostsProps) {
  const columns = [
    { key: "id", headerName: "ID" },
    { key: "title", headerName: "Título" },
    { key: "actions", headerName: "Acciones" }
  ];

  const pageSize = 10;
  const [page, setPage] = useState(1);

  const paginated = data.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="bg-white shadow-xl rounded-xl border border-gray-200 overflow-hidden">

      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold text-gray-800">
          Listado de Posts
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-6 px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                ID
              </th>
              <th className="w-1/2 px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                Título
              </th>
              <th className="w-40 px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                Acciones
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {paginated.map((row, index) => (
              <tr key={index} className="bg-white odd:bg-gray-50 hover:bg-blue-50">
                {columns.map(c => (
                  <td key={c.key} className="px-6 py-4 text-sm text-gray-700">
                    {row[c.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Paginator
        page={page}
        total={data.length}
        pageSize={pageSize}
        onChange={setPage}
      />
    </div>
  );
}
