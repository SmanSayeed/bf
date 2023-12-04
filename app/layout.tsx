import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


import './globals.css'
import Provider from '@/util/Providers'
import Dashboard from './dashboard/page'

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
     
      {children}
      </Provider>
      </body>

  
     </html>
    </>
  

   
 
  )
}
