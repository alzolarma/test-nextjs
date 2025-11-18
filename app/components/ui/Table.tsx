interface TableProps {
  children: React.ReactNode;
}

export const Table = ({children }: TableProps) => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          {children}
        </table>
      </div>
    </div>
  );
};
