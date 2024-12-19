import React from 'react'
import ShoppingHeader from './Header'
import { Outlet } from 'react-router-dom'

const ShoppingLayout = () => {
  return (
    <div className='flex w-full min-h-screen'>
        <ShoppingHeader/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default ShoppingLayout