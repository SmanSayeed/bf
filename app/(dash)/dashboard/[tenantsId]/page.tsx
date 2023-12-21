import TenantDetailsComponent from '@/app/Components/Molecules/TenantDetailsComponent/TenantDetailsComponent';
import React from 'react'

type Props = {params: { tenantsId: string }}

const TenantDetails = (props: Props) => {
  

  const {params} = props;
  const {tenantsId} = params;
  return (
    <div>
      <TenantDetailsComponent tenantsId={tenantsId}/>
    </div>
  )
}

export default TenantDetails;