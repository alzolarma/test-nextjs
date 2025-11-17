interface MessagesProps {
  type: 'success' | 'error' | 'info';
  message: string;
  title?: string;
}

export const Messages = ({
  type,
  message,
  title
}: MessagesProps) => {
  const baseClasses = "px-4 py-2 border rounded-lg mb-4 flex items-start gap-3 transition-all duration-300";
  let classes = "";
  const defaultTitle = title || type.charAt(0).toUpperCase() + type.slice(1);

  switch (type) {
    case 'success':
      classes = "bg-green-100 border-green-400 text-green-800";
      break;
    case 'error':
      classes = "bg-red-100 border-red-400 text-red-800";
      break;
    case 'info':
      classes = "bg-blue-100 border-blue-400 text-blue-800";
      break;
    default:
      classes = "bg-gray-100 border-gray-400 text-gray-800";
      break;
  }

  return (
    <div className={`${baseClasses} ${classes}`} role="alert">
      <div className='shrink-0 mt-1'>
        <p className="font-bold capitalize">{defaultTitle}</p>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

