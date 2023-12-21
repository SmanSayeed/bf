import React from 'react'
import Link from 'next/link';
type Props = {setIsSidebarOpen:any,isSidebarOpen:boolean}

export default function DashboardSidebar({setIsSidebarOpen,isSidebarOpen}: Props) {
    const closeSidebar = () => {
        setIsSidebarOpen(false);
      };

      const style = "py-2 pl-3 rounded hover:bg-blue-900"

  return (
    <>
    
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
          <div className='flex flex-col '>
            
            <Link className={style} href="/dashboard" >
              Tenants 
            </Link>
            <Link className={style} href="/dashboard/flats" >
              Flats
            </Link>
            <Link className={style} href="/dashboard" >
              Payments
            </Link>
            {/* Add more menu items here */}
          </div>
        </nav>
      </aside>


    </>
  )
}