import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import { getTenants } from '@/util/callapi';
type Props = {}

export default function Tenants({}: Props) {


    const { data: tenants, error, isLoading }= useQuery({ queryKey: ['tenants'], queryFn: getTenants,  staleTime: 10 * (60 * 1000)  })


    

    if (isLoading) return <div>Fetching posts...</div>;
    if (error) return <div>An error occurred: {error.message}</div>;

   
    
    console.log("tenants : ",tenants)

  return (
    <div className='p-5 shadow-lg rounded  border-2 border-blue-300'>
        <h1>
            Tenants List
        </h1>   

        <div className='mt-5 shadow-lg rounded  border-2 border-blue-300 bg-white flex justify-start items-center gap-10 flex-wrap '>

            {
                tenants && tenants?.data.map((t:any,index:number)=>{
                    return (
                        <React.Fragment key={index}>
                           <div className='p-2 shadow-lg rounded border-2 border-black '>
                                <h1>{t.tenant.name}</h1>
                                <h2>Flat no: {t.flatDetails?.title}</h2>
                                <h2>Status of current month</h2>
                                <button className='p-2 bg-blue-400 rounded text-white'>Details</button>               
                            </div>
                        </React.Fragment>
                    )
                })
            }
         

          
        </div>   
    </div>
  )
}