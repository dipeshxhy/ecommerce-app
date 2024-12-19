import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center  ' >
<div className='w-1/2 h-screen flex items-center justify-center bg-lightning-yellow-700   text-white'>
<h1 className='text-5xl font-medium'>Welcome to shopping </h1>
</div>
<div className='w-1/2 h-screen p-[12vw]  bg-lightning-yellow-100  '>
    <Outlet/>
</div>
    </div>
  )
}

export default AuthLayout