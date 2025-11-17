export interface InputProps {
  label: string;
  name: string;
  type?: "text" | "textarea" | "number" | "email" | "password";
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
}
  
export const Input = ({ label, name, type = "text", value, onChange, placeholder, required , error}: InputProps) => {
  
  const baseClasses = "w-full rounded-lg px-3 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-200";
  const errorClasses = error 
    ? "border-red-500 focus:border-red-500" 
    : "border-gray-300 focus:border-indigo-500";
  
  const inputClasses = `${baseClasses} border ${errorClasses}`;

  return (
  <div className="flex flex-col gap-1 w-full">
  <label htmlFor={name} className="text-md font-bold text-gray-700">
    {label}
  </label>
  
  {type === "textarea" ? (
  <textarea
    id={name}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    className={inputClasses}
    rows={4}
  />
  ) : (
  <input
    id={name}
    name={name}
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    className={inputClasses}
    />
    )}
    {error &&
    (
    <div>
      <p className="text-red-700 text-[14px]"> {error} </p>
    </div>
    )
    }

  </div>
  );
}