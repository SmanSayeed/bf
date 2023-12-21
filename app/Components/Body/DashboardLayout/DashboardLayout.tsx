'use client'

// pages/index.tsx
import React, { useState } from 'react';
import DashboardSidebar from '@/app/Components/Molecules/DashboardSidebar/DashboardSidebar';
import DashboardHeader from '@/app/Components/Molecules/DashboardHeader/DashboardHeader';

type DashboardProps = {
  children: React.ReactNode;
};


const DashboardLayout: React.FC<DashboardProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>

<div className="flex h-screen overflow-hidden">
     <DashboardSidebar setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />
      {/* Main Content Area */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        {/* Header */}
        <DashboardHeader setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />

        {/* Your page content goes here */}

        {children}

        </div>
    </div>

    </>
 
  );
};

export default DashboardLayout;
