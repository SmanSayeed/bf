import React from 'react'

type Props = {data:any}

export default function PaymentHistoryCard({data}: Props) {
const {paymentDetails} = data;
const paymentMonth = data.paymentMonth;
const paymentDate = data.paymentDate;
const date = new Date(paymentMonth);
const month = date.toLocaleDateString('en-US', { month: 'long' });
const year = date.getFullYear();
console.log(month,year);

const ndate = new Date(paymentDate);
const formattedDate = ndate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  
  console.log(formattedDate); // Output: 1 May 2023

  return (
    <>

    <div className='w-[300px]  bg-yellow-200 rounded shadow-md p-3 flex flex-col justify-start items-start m-3'>

        <div className='p-2 my-2 border border-solid border-green-300 flex gap-4 flex flex-col'>
            <div className='bg-green-400 p-2'>
                Month of: {month}-{year}
            </div>

            <div className='bg-green-400 p-2'>
                Payment Last Date: {formattedDate}
            </div>
        </div>
        <p>
            <strong>House rent:</strong>
            <span>{paymentDetails.houseRent}</span>
        </p>
        <p>
            <strong>Washa bill:</strong>
            <span>{paymentDetails.houseRent}</span>
        </p>

        <p>
            <strong>Cleaner bill:</strong>
            <span>{paymentDetails.houseRent}</span>
        </p>

        <p>
            <strong>Gas bill:</strong>
            <span>{paymentDetails.houseRent}</span>
        </p>

        <h2>Other charges</h2>
        {
            (paymentDetails?.extendableCharges && paymentDetails?.extendableCharges.length>0 )? paymentDetails?.extendableCharges.map((d:any,index:any)=>{
                return(
                    <React.Fragment key={index}>
                    <p>
                        <strong>{d.name}: </strong>
                        <span>{d.amount}</span>
                    </p>
                    </React.Fragment>
                )
             })
             :
             "No other charges found"
        }
      
    </div>
         {/* paymentMonth: '2023-05-01T18:00:00.000Z',
      paymentDetails: {
        _id: '655e021b55365c7df5c2bf22',
        tenant: '655de4aaa51f995b82c8d9aa',
        paymentStatus: false,
        paymentMonth: '2023-05-01T18:00:00.000Z',
        houseRent: 5000,
        washaBill: 300,
        cleanerBill: 100,
        gasBill: 200,
        extendableCharges: [
          {
            name: 'currentBill',
            amount: 200,
            _id: '655e021b55365c7df5c2bf23'
          }
        ],
        paymentDate: '2023-11-22T13:28:59.569Z',
        __v: 0
      } */}
    </>
  )
}