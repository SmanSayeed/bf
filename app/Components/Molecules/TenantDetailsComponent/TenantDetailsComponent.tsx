'use client'
import { getTenantDetails, getTenants } from '@/app/util/callapi'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import PaymentHistoryCard from '../../Atoms/PaymentHistoryCard/PaymentHistoryCard'

type Props = {tenantsId:string}

export default function TenantDetailsComponent({tenantsId}:Props) {
  const { data, error, isLoading }= useQuery({ queryKey: ['tenantDetails'], queryFn: ()=>getTenantDetails(tenantsId) });
  let tenantsData,paymentHistory;
  const [tenatsData,setTenantsData] = useState();
  if (isLoading) return <div>Fetching posts...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;
  if(data){
    tenantsData = data.data.tenant;
    paymentHistory = data.data.paymentHistory || [];
    console.log("data = ",tenantsData,paymentHistory);
  }
  return (
    <div className='p-4 w-full'>
      <div className='p-3 bg-white rounded-md shadow-lg '>
        <h2 className='text-2xl font-semibold mb-3'>
        Tenant Details
        </h2>
     
            <ul>
              <li>Name:  {tenantsData.name}</li>
              <li>Contact:  {tenantsData.contactNumber}</li>
              <li>Email:  {tenantsData.email}</li>
              <li>Address:  {tenantsData.address}</li>
              <li>Description:  {tenantsData.description}</li>

            </ul>
              {

            tenantsData?.flatId  ? (<>
                  <div className='p-2 bg-yellow-200 rounded-lg my-3'>
                <p>Flat name:  {tenantsData.flatId.title}</p>
                <p>Flat Description:  {tenantsData.flatId.description}</p>
              </div>
                  </>) : 
                      <div className='p-2 bg-yellow-200 rounded-lg my-3'>
                  No flat found
                  </div>
              }
        

      </div>

      <div className='w-full my-3 rounded-lg shadow-lg bg-white '>
            <h2>Payment History</h2>
            <div className='w-full bg-red-200 flex justify-start items-center'>
            {
              paymentHistory.length>0 ? paymentHistory.map((d:any,index:any)=>{
                console.log("d - ",d)
                return (
                  <React.Fragment key={index}>
                    <PaymentHistoryCard data={d}/>
                  </React.Fragment>
                )

              }) : "No Payment history"
            }
            </div>
           
      </div>
       
    </div>
  )
}