import React from 'react'

type Props = {setIsSidebarOpen:any,isSidebarOpen:boolean}

export default function DashboardHeader({setIsSidebarOpen,isSidebarOpen}: Props) {
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };
      const logout = () => {
        // Implement your logout logic here
        console.log('Logout clicked');
      };
      
  return (
    <>
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
    </>
  )
}