"use client";

import { Button } from "../atoms/Buttom";

interface PaginatorProps {
  page: number;
  total: number;
  pageSize: number;
  onChange: (page: number) => void;
}

export function Paginator({ page, total, pageSize, onChange }: PaginatorProps) {
  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 border-t">
      <Button
        disabled={page === 1}
        variant="secondary"
        customClasses="border rounded disabled:opacity-50 bg-white border-gray-400"
        size="md"
        onClick={() => onChange(page - 1)}>
        Anterior
      </Button>

      <span className="text-sm text-gray-600">
        Página {page} de {totalPages}
      </span>

      <Button
        variant="secondary"
        customClasses="border disabled:opacity-50 bg-white border-gray-400 hover:bg-gray-10 hover:border-gray-500"
        size="md"
        disabled={page === totalPages} onClick={() => onChange(page + 1)}>
        Siguiente
      </Button>
    </div>
  );
}
