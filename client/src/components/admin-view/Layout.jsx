import React from 'react'
import AdminSidebar from './Sidebar'
import AdminHeader from './Header'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='w-full h-screen flex'>
<AdminSidebar/>
<div>
    <AdminHeader/>
    <main>
        <Outlet/>
    </main>
</div>
    </div>
  )
}

export default AdminLayout