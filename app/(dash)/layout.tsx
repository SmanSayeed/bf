import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import '../globals.css'
import Provider from '@/app/util/Providers'
import DashboardLayout from '../Components/Body/DashboardLayout/DashboardLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'House rent management',
  description: 'Managing house rent',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <>
      <html lang="en">
   

     <body className={inter.className}>
    <Provider>
     
        <DashboardLayout>
            {children}
        </DashboardLayout>
      </Provider>
      </body>

  
     </html>
    </>
  

   
 
  )
}
