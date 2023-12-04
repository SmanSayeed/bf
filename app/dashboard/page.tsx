'use client'

// pages/index.tsx
import React, { useState } from 'react';
import Tenants from '../Components/Molecules/Tenants/Tenants';

type DashboardProps = {
  children: React.ReactNode;
};


const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const logout = () => {
    // Implement your logout logic here
    console.log('Logout clicked');
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-gray-100 w-full lg:w-64 min-h-screen p-4 overflow-y-auto transition-all duration-300 ${
          isSidebarOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
        } lg:opacity-100 lg:translate-x-0 fixed lg:relative`}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
          <button onClick={closeSidebar} className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <nav>
          <ul>
            <li className="py-2" onClick={closeSidebar}>
              Tenants 
            </li>
            <li className="py-2" onClick={closeSidebar}>
              Flats
            </li>
            <li className="py-2" onClick={closeSidebar}>
              Payments
            </li>
            {/* Add more menu items here */}
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        {/* Header */}
        <header className="bg-gray-700 text-white p-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <button className="lg:hidden" onClick={toggleSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
            <button onClick={logout}>Logout</button>
          </div>
        </header>

        {/* Your page content goes here */}

<Tenants></Tenants>

      </div>
    </div>
  );
};

export default Dashboard;
