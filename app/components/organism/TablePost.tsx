"use client";

import { useState } from "react";
import { Paginator } from "../molecules/paginator";
import { TableHead } from "../molecules/Table";
import { TableRow } from "../atoms/TableRow";
import { Table } from "../ui/Table";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface TablePostsProps {
  data: any[];
}

export function TablePosts({ data }: TablePostsProps) {
  const columns = [
    { key: "id", headerName: "ID" , width: "w-4"},
    { key: "title", headerName: "Título", width: "w-2/3" },
    { key: "actions", headerName: "Acciones", width: "w-32" },
  ];

  const pageSize = 10;
  const [page, setPage] = useState(1);

  const paginated = data.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="bg-white shadow-xl rounded-xl border border-gray-200 overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold text-gray-800">Listado de Posts</h2>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHead columns={columns} />
          <tbody className="divide-y divide-gray-100">
            {paginated.map((row, index) => (
              <TableRow key={index} rowData={row} columns={columns} />
            ))}
          </tbody>
        </Table>
      </div>

      <Paginator page={page} total={data.length} pageSize={pageSize} onChange={setPage} />
    </div>
  );
}
