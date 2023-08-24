import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

function RootLayout() {
   return (
      <>
         <Header />
         <main className='grow bg-slate-400'>
            <Outlet />
         </main>
         <Footer />
      </>
   )
}

export default RootLayout