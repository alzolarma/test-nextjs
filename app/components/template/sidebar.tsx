'use client';

import Sidebar from '@/app/components/organism/Sidebar';
import { Bars3BottomLeftIcon } from '@heroicons/react/16/solid';
import { CpuChipIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const SidebarTemplate = ({ children }: { children: React.ReactNode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-50">

            <Sidebar 
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            <div className="flex-1 flex flex-col lg:pl-64">

                <header className="bg-white shadow-sm p-4 sticky top-0 z-20 lg:hidden flex items-center">
                    <button 
                        onClick={() => setIsSidebarOpen(true)}
                        className="text-gray-700 hover:text-indigo-600"
                    >
                        <Bars3BottomLeftIcon className="w-6 h-6" />
                    </button>
                    <h1 className="text-xl font-bold text-gray-800 ml-4">Dashboard</h1>
                </header>

                <main className="flex-1 p-4 sm:p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default SidebarTemplate;
