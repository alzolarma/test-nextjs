import Link from "next/link";

interface SidebarItemProps {
    label: string;
    Icon: React.ElementType;
    href: string;
    isActive: boolean;
}

const SidebarItem = ({ label, Icon, href, isActive }: SidebarItemProps) => {
    const baseClasses = "flex items-center gap-2 p-3 text-sm font-medium rounded-lg transition-colors duration-200";
    
    const activeClasses = isActive
        ? "bg-indigo-600 text-white shadow-md hover:bg-indigo-700"
        : "text-gray-600 hover:bg-gray-100 hover:text-indigo-600";
        
    return (
        <>
           
            <Link href={href} className={`${baseClasses} ${activeClasses}`}>
                <Icon className="w-5 h-5" /> 
                {label} 
            </Link>
        </>
    );
};

export default SidebarItem;