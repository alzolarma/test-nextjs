'use client';

import Sidebar from '@/app/components/organism/Sidebar';
import { CpuChipIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const App = () => {
    const [currentPath, setCurrentPath] = useState('/posts');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleNavigate = (path: string) => {
        setCurrentPath(path);
        setIsSidebarOpen(false); 
    };

    const getPageTitle = (path: string) => {
        switch (path) {
            case '/posts': return 'Gestión de Artículos (Posts)';
            case '/comments': return 'Moderación de Comentarios';
            case '/users': return 'Administración de Usuarios';
            default: return 'Resumen del Dashboard';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar 
                currentPath={currentPath} 
                onNavigate={handleNavigate} 
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            <div className="lg:pl-64 flex flex-col flex-1">
                
                <header className="bg-white shadow-sm p-4 sticky top-0 z-10 lg:hidden flex items-center">
                    <button 
                        onClick={() => setIsSidebarOpen(true)}
                        className="text-gray-600 hover:text-indigo-600 focus:outline-none"
                    >
                        <CpuChipIcon className="w-6 h-6" />
                    </button>
                    <h1 className="text-xl font-bold text-gray-800 ml-4">TEST ePayco</h1>
                </header>

                <main className="p-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            {getPageTitle(currentPath)}
                        </h2>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default App;