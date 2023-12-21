'use client'

// pages/index.tsx
import React, { useState } from 'react';
import Tenants from '../../Components/Molecules/Tenants/Tenants';
import DashboardSidebar from '@/app/Components/Molecules/DashboardSidebar/DashboardSidebar';
import DashboardHeader from '@/app/Components/Molecules/DashboardHeader/DashboardHeader';

type DashboardProps = {
  children: React.ReactNode;
};


const Dashboard: React.FC<DashboardProps> = ({ children }) => {

  return (
    <>

        <Tenants></Tenants>

  
    </>
 
  );
};

export default Dashboard;
