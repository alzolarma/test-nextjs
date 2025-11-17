import { XCircleIcon } from "@heroicons/react/16/solid";
import SidebarMenu from "../molecules/sidebarMenu";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [currentPath, setCurrentPath] = useState('');
  const baseClasses = "fixed inset-y-0 left-0 transform bg-white border-r border-gray-200 w-64 space-y-6 pt-6 z-40 transition-transform duration-300 ease-in-out lg:translate-x-0";
  const mobileClasses = isOpen ? "translate-x-0" : "-translate-x-full";
  const pathname = usePathname()
  
  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);
  
  return (
      <>
          {isOpen && (
              <div 
                  className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden" 
                  onClick={onClose}
              />
          )}

          <div className={`${baseClasses} ${mobileClasses}`}>
              
              <div className="flex items-center justify-between px-4">
                  <h1 className="text-2xl font-extrabold text-indigo-700 tracking-wider">
                     Test ePayco 
                  </h1>
                  <button 
                      onClick={onClose} 
                      className="p-1 rounded-md text-gray-500 hover:text-indigo-600 lg:hidden"
                  >
                      <XCircleIcon className="w-6 h-6" />
                  </button>
              </div>

              <div className="border-t border-gray-200 mx-4" />

              <SidebarMenu currentPath={currentPath}/>

              <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
                  <div className="text-xs text-gray-500">
                      Developer: marialzolar.dev@gmail.com
                  </div>
              </div>
          </div>
      </>
  );
};
export default Sidebar;